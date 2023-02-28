window.BENCHMARK_DATA = {
  "lastUpdate": 1677580079281,
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
          "id": "1c46e324bbe7f13f4bef241fff808ba0fc89ae22",
          "message": "Fix dead code warning in integration tests (#50)\n\nIn #33 we saw weirdness adding code to `tests/common/mod.rs` creating\r\ndead code warnings. This is because of Cargo's slightly funky rules for\r\ncompiling integration test modules\r\n(https://github.com/rust-lang/rust/issues/46379). We can fix it by\r\nclaiming the module is public.",
          "timestamp": "2023-01-16T15:15:57-08:00",
          "tree_id": "96e5eb3c7047298c0a847781dfb9a8ae6a758cf2",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1c46e324bbe7f13f4bef241fff808ba0fc89ae22"
        },
        "date": 1673911937536,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 4.0576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 932.7294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.0966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6886.1279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 18.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1131.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 25.3095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2088.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.8408203125,
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
          "id": "9a2ba98bbbe4e2bb7be77d6a607bec91721d083b",
          "message": "Force latest stable Rust version in CI (#46)\n\nIn #42 we realized that we're inheriting the Rust version from the\r\nGitHub Actions image, which means we get Rust version updates at some\r\nrandom time after release. Instead, let's forcibly test on the latest\r\nstable Rust version, so releases are more predictable.",
          "timestamp": "2023-01-16T15:16:39-08:00",
          "tree_id": "e07be86a83edb1599b3cdec6b253a7abbc427c37",
          "url": "https://github.com/awslabs/s3-file-connector/commit/9a2ba98bbbe4e2bb7be77d6a607bec91721d083b"
        },
        "date": 1673911974182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 3.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1353.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6940.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 190.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 960.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2497.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 28.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 28.0390625,
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
          "id": "1f8867b8466aab48add4d5752e6455e0427a7524",
          "message": "Add bug report and feature request issue templates (#56)\n\n* Add bug report and feature request issue templates\r\n\r\n* Update from PR feedback",
          "timestamp": "2023-01-18T10:03:45-06:00",
          "tree_id": "9c36fd4d913a90ec79fb880f2dc3d54479331b6c",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1f8867b8466aab48add4d5752e6455e0427a7524"
        },
        "date": 1674058863469,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.27734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 868.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6357.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.9111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.9365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1427.4599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2430.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 22.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.5615234375,
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
          "id": "8a832dd9b021cbcb54539a198d744abe247d37b6",
          "message": "Implement file atime, ctime, and mtime (#48)",
          "timestamp": "2023-01-19T10:43:35Z",
          "tree_id": "8b9b73d30e2299c8ad590c0a61261e6ad0d4c4ba",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8a832dd9b021cbcb54539a198d744abe247d37b6"
        },
        "date": 1674126042631,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.0908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 911.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7058.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 176.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 921.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 25.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2159.185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.712890625,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "28a5f2bf2fb6ca7dcb0e727dd23905f3ec623fc9",
          "message": "Fix new Clippy lints\n\nThis is basically all just\nhttps://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args\nwhich I find a little silly, but whatever.",
          "timestamp": "2023-01-27T11:19:06-06:00",
          "tree_id": "24c91c31d62f11e94b54653ea3aea0e5cf0214fb",
          "url": "https://github.com/awslabs/s3-file-connector/commit/28a5f2bf2fb6ca7dcb0e727dd23905f3ec623fc9"
        },
        "date": 1674840971523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1073.359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6498.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.34375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1437.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2361.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.33984375,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "0a51c71d7f5478f0e777d4e82eab3613c1fd8c6f",
          "message": "Rename S3Client -> S3CrtClient\n\nThis gives us some room to experiment with other clients in the same\ntree. This change is a pure automated refactor, no other code changes.",
          "timestamp": "2023-01-27T19:06:25-06:00",
          "tree_id": "6822ad4bfbbb2844b0e726031bed2f892d6a75f5",
          "url": "https://github.com/awslabs/s3-file-connector/commit/0a51c71d7f5478f0e777d4e82eab3613c1fd8c6f"
        },
        "date": 1674869009157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.21875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 759.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6618.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1454.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2011.3408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.2548828125,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "42ab0362ccf01fbcd194bed00afa3ca211d09e13",
          "message": "Add print version argument",
          "timestamp": "2023-02-02T07:35:04+11:00",
          "tree_id": "fa44149855dbe297fbbd05b47336eab6e656a951",
          "url": "https://github.com/awslabs/s3-file-connector/commit/42ab0362ccf01fbcd194bed00afa3ca211d09e13"
        },
        "date": 1675284619526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.93359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 852.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6688.5322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 159.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1200.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2050.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.4775390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "ca9deacdf3c9cfe296f96121488db3bd830c184d",
          "message": "Update aws-c-auth to v0.6.23\n\nPull in the changes from upstream to fix #5\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>",
          "timestamp": "2023-02-03T05:43:53+11:00",
          "tree_id": "678bfc795995cd21ec6c9ff895beffe94c6bd2b3",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ca9deacdf3c9cfe296f96121488db3bd830c184d"
        },
        "date": 1675364464445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.64453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 817.7080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6648.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 158.65625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1061.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2133.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.4951171875,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "8b486cbb2498a464bf64a3ca75c8a952d670a2d2",
          "message": "Add support for custom endpoint URLs\n\nThis allows us to support dualstack and FIPS endpoints, which I've added\ntests for. It should also allow us to support multi-region access points\nand Transfer Acceleration, but I haven't written tests for those just\nyet.\n\nThe overall idea follows the Python SDK and the AWS CLI. Customers can\nspecify an endpoint URL and an addressing mode (virtual host or\npath-based). The SDKs go further and do endpoint discovery based on\nconfiguration, so customers can specify an ARN and/or various endpoint\nconfigurations like dualstack or FIPS, and the SDK automatically\ncomputes the right endpoint. We don't have that yet because we'd like to\ndo it without replicating the SDKs.\n\nThis change was reasonably invasive because we have some new places to\nthread errors through, but the important stuff is the new `Uri` that\nexposes the CRT's URI support, and the new `Endpoint` struct that\nencapsulates the rules for constructing endpoint URIs.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-03T07:37:35+11:00",
          "tree_id": "577c54c2ac508da39c6ac0758df03d0f133584ff",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8b486cbb2498a464bf64a3ca75c8a952d670a2d2"
        },
        "date": 1675371285742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.38671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.0068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 873.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6587.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 937.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 25.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1749.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.267578125,
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
          "id": "f2c764fc78d646ed3d4b425db527fe07f1cc6210",
          "message": "Bump tokio from 1.23.1 to 1.24.2\n\nBumps [tokio](https://github.com/tokio-rs/tokio) from 1.23.1 to 1.24.2.\n- [Release notes](https://github.com/tokio-rs/tokio/releases)\n- [Commits](https://github.com/tokio-rs/tokio/commits)\n\n---\nupdated-dependencies:\n- dependency-name: tokio\n  dependency-type: direct:production\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-02-04T14:18:17+11:00",
          "tree_id": "a195562fc055fdd332baaafa92f7245082b8c1a0",
          "url": "https://github.com/awslabs/s3-file-connector/commit/f2c764fc78d646ed3d4b425db527fe07f1cc6210"
        },
        "date": 1675481729927,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.1025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.03515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1072.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6852.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 172.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1630.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1966.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.3935546875,
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
          "id": "2c2c23c4c9f650df0703565e6ad2c52b2308cc30",
          "message": "Use HeadObject for lookup (#69)\n\nOur current `lookup` does two concurrent ListObjects requests. After\r\nthinking about it a bit more carefully, one of them can be replaced with\r\na cheaper, faster HeadObject request. The \"unsuffixed\" request we were\r\ndoing was purely to discover whether an object of the exact looked-up\r\nname existed, which is what HeadObject does. Switching to HeadObject\r\nreduces the request costs of a lookup.\r\n\r\nOne disadvantage of HeadObject is when looking up directories. The\r\nunsuffixed ListObjects we're replacing here could discover a common\r\nprefix and return it immediately without waiting for the other request\r\nto complete. But in practice, the two requests were dispatched\r\nconcurrently, so the customer still pays for both requests, and the\r\nlatency is the minimum latency of two concurrently ListObjects. Now,\r\nthe latency for a directory lookup will be the maximum of a concurrent\r\nListObjects and HeadObject.\r\n\r\nAn issue in this change is that we expect HeadObject to return 404 when\r\ndoing directory lookups, but right now the way our error types are\r\nstructured gives us no way to distinguish 404s from other errors. For\r\nnow, I'm just swallowing all errors on the HeadObject request, and I'll\r\nfollow up with a broader change to fix our error handling story to make\r\nthis work.\r\n\r\nThis is a partial fix for #12, but in future we can do better for\r\nlookups against objects we've seen before by remembering their type.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-06T07:14:37-08:00",
          "tree_id": "b208f689c81dd6559e2fe3d752791e6db09530af",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2c2c23c4c9f650df0703565e6ad2c52b2308cc30"
        },
        "date": 1675697537553,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.0205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 868.7626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6686.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 157.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 732.748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 20.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1955.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.927734375,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "875508253753e071ed532192194adc35ce607916",
          "message": "Fix merge conflict\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-06T17:25:41-06:00",
          "tree_id": "4f20222671339f75bd9bf433e6813e9d3f880994",
          "url": "https://github.com/awslabs/s3-file-connector/commit/875508253753e071ed532192194adc35ce607916"
        },
        "date": 1675726969599,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 925.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.9697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6622.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.5283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 920.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2106.62109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.3056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.45703125,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "8b5c3e7b80e5d42d058fbb379c9eb0a262320bcd",
          "message": "Add Zlib License to allowed licenses list\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-08T11:51:09-06:00",
          "tree_id": "38bcf243724905857bbdaabdd7183aae0e8ab95f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8b5c3e7b80e5d42d058fbb379c9eb0a262320bcd"
        },
        "date": 1675879700078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.5625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.3125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 662.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.3564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6746.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 152.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.3818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 897.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1901.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.8115234375,
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "d9b17122f66fb0ba16de437f82e0b06d1335f186",
          "message": "Add short commit hash suffix to version output\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-09T13:18:29-06:00",
          "tree_id": "e686925e78328f2b0e05a6fbfaed34ecb16eaee3",
          "url": "https://github.com/awslabs/s3-file-connector/commit/d9b17122f66fb0ba16de437f82e0b06d1335f186"
        },
        "date": 1675971348550,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 887.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.7294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6658.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 845.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2147.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.0341796875,
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
          "id": "49bf4fcbf163123e5090d8cc4efc0c392b31c93a",
          "message": "Update built dependency to 0.6.0 (#82)\n\nbuilt 0.5.3 got yanked: https://github.com/lukaslueg/built/issues/51\r\n\r\nSigned-off-by: James Bornholt <bornholt@cs.utexas.edu>",
          "timestamp": "2023-02-13T09:12:51Z",
          "tree_id": "9c512079654e408aae681fe3c49538cb7811c7b9",
          "url": "https://github.com/awslabs/s3-file-connector/commit/49bf4fcbf163123e5090d8cc4efc0c392b31c93a"
        },
        "date": 1676280613098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.9013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1019.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.0380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6459.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1247.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1973.4091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 21.9794921875,
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
          "id": "7cc762a1cc4465d6f5e60eed5683226a36640335",
          "message": "Add note on DCO sign-off to CONTRIBUTING.md (#81)\n\n* Add note on DCO sign-off to CONTRIBUTING.md\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update CONTRIBUTING.md based on feedback\r\n\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-13T09:48:32-06:00",
          "tree_id": "c938149bff30e3e1577468dfc218f320c4442f65",
          "url": "https://github.com/awslabs/s3-file-connector/commit/7cc762a1cc4465d6f5e60eed5683226a36640335"
        },
        "date": 1676304356044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.8427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.3291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6797.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 855.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.6240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2211.3671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 21.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.755859375,
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
          "id": "c8296cb067f314b85d9b902d0724de04a82ca4ab",
          "message": "Force direct IO for all files (#84)\n\nWe're currently building a no-caching version of the connector, and so\r\nwe should make sure the page cache doesn't enter the picture. We'll\r\nrevisit this once we start thinking about personalities that do use\r\ncaching, but for now, this default makes the experience consistent.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-13T21:26:08-06:00",
          "tree_id": "d20b9de4e84914c12435dfd8eb2307507d638d4a",
          "url": "https://github.com/awslabs/s3-file-connector/commit/c8296cb067f314b85d9b902d0724de04a82ca4ab"
        },
        "date": 1676346207625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1868.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6803.90625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6560.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 157.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 166.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 2223.9033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2350.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.5009765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "112006204+sauraank@users.noreply.github.com",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7990bb351058e0317b1f5ce3ac6bde6514a159f",
          "message": "Add \"s3-file-connector\" to S3 client user agent (#60)\n\n* Added s3-file-connector prefix to the User-Agent header\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added safety explanation for Message::get_headers()\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made defining header as inline.\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Returned as Result<Headers, Errors> for get_headers\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-02-14T13:01:22Z",
          "tree_id": "3b8ac9fcfcbbb0745d521dda1cc37a3ccec19d7b",
          "url": "https://github.com/awslabs/s3-file-connector/commit/a7990bb351058e0317b1f5ce3ac6bde6514a159f"
        },
        "date": 1676380727310,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1866.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6963.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6775.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 109.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 2428.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2320.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.400390625,
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
          "id": "3436138b5309c507efe4253cddb9eae2dcc5d918",
          "message": "Add file connector version to user agent string (#85)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-14T14:35:47Z",
          "tree_id": "1e606bb1329b36b1deec9d50390e6a2a0dd2757b",
          "url": "https://github.com/awslabs/s3-file-connector/commit/3436138b5309c507efe4253cddb9eae2dcc5d918"
        },
        "date": 1676386402681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.7333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1953.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6966.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6808.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.4052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 157.5146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 2440.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 9.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2484.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.1474609375,
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
          "id": "3436138b5309c507efe4253cddb9eae2dcc5d918",
          "message": "Add file connector version to user agent string (#85)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-14T14:35:47Z",
          "tree_id": "1e606bb1329b36b1deec9d50390e6a2a0dd2757b",
          "url": "https://github.com/awslabs/s3-file-connector/commit/3436138b5309c507efe4253cddb9eae2dcc5d918"
        },
        "date": 1676394747897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1794.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6833.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6734.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 146.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 147.3056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 2188.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2144.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.486328125,
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
          "id": "5fbc786b515578f76186a97d9fc5da8e43cfa910",
          "message": "Refactor ObjectClient error types (part 1/2) (#76)\n\nOur current ObjectClient allows each implementer to provide its own\r\nerror types for each request. This is nice and flexible, but prevents\r\ncallers of an ObjectClient from being generic if they want to detect\r\ncommon service errors like NoSuchKey -- they must know the concrete\r\nerror type of the particular client they're using to match on these\r\nerrors. We've been getting away with this until #69, where we need to be\r\nable to distinguish (expected) 404 errors from other errors on\r\nHeadObject.\r\n\r\nThis change refactors ObjectClient to provide a common service error\r\ntype for each operation. ObjectClients now return an error that is\r\n*either* a modeled service error like NoSuchKey *or* a client-specific\r\nerror. This allows callers to be generic over the ObjectClient and still\r\ndiscriminate on the interesting error types, where by \"interesting\" I\r\nmean things I think it's likely a caller might want to know about.\r\n\r\nThe diff was getting pretty big so I'm splitting this into two commits.\r\nThis is Part 1, which just does the refactoring, but doesn't change our\r\nS3CrtClient to return the new modeled service errors. That means this\r\nchange shouldn't cause any functional change -- every error will be a\r\nclient error, like it was before this commit.  I'll follow up with Part\r\n2 that adds the service errors to S3CrtClient (so does XML parsing etc).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-14T16:39:19-06:00",
          "tree_id": "b64973e212072b0825267cd0cc5c94a2eb49a46f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/5fbc786b515578f76186a97d9fc5da8e43cfa910"
        },
        "date": 1676415442587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.4345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.81640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1952.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6830.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 2489.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 168.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 169.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 2131.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2173.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.0224609375,
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
          "id": "e5e763cad2889b1f76a28558f98bda4b0e7186b8",
          "message": "Revert \"Force direct IO for all files (#84)\"\n\nThis change is causing reads to sometimes return uninitialized memory.\nOur integration tests fail about 50% of the time with this change, and\nnever with this change reverted. I don't think it's a bug on our\nside--the data we're writing to the FUSE device is correct--but I need\nto poke at it further. In the meantime, let's just revert until we\nunderstand it better.\n\nThis reverts commit c8296cb067f314b85d9b902d0724de04a82ca4ab.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-16T10:32:42Z",
          "tree_id": "2520741b4b055bb55e0d496e88f448aa4c13e777",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e5e763cad2889b1f76a28558f98bda4b0e7186b8"
        },
        "date": 1676544641174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.91015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 12.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6398.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 169.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 851.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2373.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.7724609375,
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
          "id": "e5e763cad2889b1f76a28558f98bda4b0e7186b8",
          "message": "Revert \"Force direct IO for all files (#84)\"\n\nThis change is causing reads to sometimes return uninitialized memory.\nOur integration tests fail about 50% of the time with this change, and\nnever with this change reverted. I don't think it's a bug on our\nside--the data we're writing to the FUSE device is correct--but I need\nto poke at it further. In the meantime, let's just revert until we\nunderstand it better.\n\nThis reverts commit c8296cb067f314b85d9b902d0724de04a82ca4ab.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-16T10:32:42Z",
          "tree_id": "2520741b4b055bb55e0d496e88f448aa4c13e777",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e5e763cad2889b1f76a28558f98bda4b0e7186b8"
        },
        "date": 1676547681798,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1190.201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6557.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 969.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.6552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.4541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.322265625,
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
          "id": "1d03fdc824db7c423b2575f321c4dc1c7d75d0ca",
          "message": "Fix benchmark script (#94)\n\n* Fix benchmark script\r\nAfter #72, our file connector will be running in background by default.\r\nThis breaks the benchmark clean up process because we're now using the\r\nwrong pid to kill the process after unmount.\r\n\r\nTechnically, running in background should not be a problem but because\r\nof #93 we will have to use `--foreground` flag until we have it fixed.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>\r\n\r\n* Update file system name in bench script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>",
          "timestamp": "2023-02-16T17:57:58Z",
          "tree_id": "85243f99768faea609aec2ff5b839c58753a5dc6",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1d03fdc824db7c423b2575f321c4dc1c7d75d0ca"
        },
        "date": 1676571332529,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 783.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6657.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1020.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1941.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 20.2666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.5302734375,
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
          "id": "4cc94bd2f55bba313236abe67b0390c77910e56b",
          "message": "Refactor ObjectClient error types (part 2/2) (#86)\n\nThe S3CrtClient now parses responses to identify service errors and\r\nreturns them appropriately.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-16T20:48:02-06:00",
          "tree_id": "5b340098a639f52f7d7ed857b68ec47d82b05a59",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4cc94bd2f55bba313236abe67b0390c77910e56b"
        },
        "date": 1676603126774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6699.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 153.5478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1281.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2418.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.9892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 21.6337890625,
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
          "id": "71f83abb4f94295abc618f3d49049e71f25c076d",
          "message": "Fix URL encoding of request paths (#95)\n\nWe weren't correctly URL encoding paths before passing them to the CRT,\r\nwhich expects them to already be encoded. This meant keys with weird\r\ncharacters wouldn't work properly. The rules for encoding S3 keys aren't\r\nexplicit in the documentation, so this is my best attempt to match what\r\nthe Python SDK does (using `urllib.parse.quote`).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-17T16:36:34Z",
          "tree_id": "eba96bfb58b59094c2baa5c2867a4ac57ade672a",
          "url": "https://github.com/awslabs/s3-file-connector/commit/71f83abb4f94295abc618f3d49049e71f25c076d"
        },
        "date": 1676652848214,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.1279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.7255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 3.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1136.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6615.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1139.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 19.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2308.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.26171875,
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
          "id": "e37e1089e9ce78b585d204d9110810c0fa7dbc38",
          "message": "Update CRT submodules (#99)\n\nWe haven't done this since starting the project, and there's been a few\r\nimportant fixes since then, most notably awslabs/aws-c-s3#226 for\r\ndetecting concurrent mutations during GETs.\r\n\r\nOn our bindings side not much has changed. The Uri code moved from\r\naws-c-io to aws-c-common, and there was also a change to how missing\r\npath fragments are parsed in URIs (awslabs/aws-c-common#986).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-21T14:09:34Z",
          "tree_id": "110b1ad14b1feb7882cbf26746084b5dcd9790f0",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e37e1089e9ce78b585d204d9110810c0fa7dbc38"
        },
        "date": 1676989634932,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 644.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6419.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 3.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 716.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2048.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.0791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.630859375,
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
          "id": "4719e232fec0edad20c5db9f7f03a232047fbf48",
          "message": "Add macOS CI (#98)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>",
          "timestamp": "2023-02-21T10:57:10-06:00",
          "tree_id": "fe47f4e8eb7a5587f0205e7cc163670536ddc633",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4719e232fec0edad20c5db9f7f03a232047fbf48"
        },
        "date": 1676999679548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1123.9873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6745.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1209.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2157.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.7529296875,
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
          "id": "4acd84b7e034b5311bc37d7cb0e64abfb6d94420",
          "message": "Add --locked flag to Cargo check CI job (#104)\n\nThis will fail the job if an outdated Cargo.lock is part of the repository.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-21T10:57:44-06:00",
          "tree_id": "eff4b0b35729714d7afae8e442552c1173d7a26b",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4acd84b7e034b5311bc37d7cb0e64abfb6d94420"
        },
        "date": 1676999684572,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1355.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6493.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 162.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1252.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 21.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1990.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.240234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66b01ccbe1d01251db832212bac96a59c7185d1c",
          "message": "Send log to file (91#) (#91)\n\nLogs is recorded under path: $HOME/.s3-file-connector/s3fc_[year][month][day]T[hour][minute][second].log for each run.\r\n\r\nSigned-off-by: Charles Zhang  <zyaoshen@amazon.com>\r\nCo-authored-by: Yaosheng <zyaoshen@amazon.com>",
          "timestamp": "2023-02-21T17:52:05-06:00",
          "tree_id": "c7a104973a6492296f2dd0c1354fafaccc1a257c",
          "url": "https://github.com/awslabs/s3-file-connector/commit/66b01ccbe1d01251db832212bac96a59c7185d1c"
        },
        "date": 1677024572186,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.25,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 3.5625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 921.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6663.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 129.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1074.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2236.533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.5224609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cbc92d72fd155fb063bb23fd5bd9e8e0be8d59b9",
          "message": "Send log to file (#111)\n\n* Customer can specify log path.\r\n* Logs will be streamed to standard ouput when foreground mode is enabled.\r\n\r\nSigned-off-by: Charles Zhang  <zyaoshen@amazon.com>\r\nCo-authored-by: Yaosheng <zyaoshen@amazon.com>",
          "timestamp": "2023-02-23T03:54:29Z",
          "tree_id": "7359cd37071f073f898a0729a6c7c5796a70e016",
          "url": "https://github.com/awslabs/s3-file-connector/commit/cbc92d72fd155fb063bb23fd5bd9e8e0be8d59b9"
        },
        "date": 1677125517266,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.2841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1055.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6370.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 159.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 865.8369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 20.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2030.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.8359375,
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
          "id": "b2e0ceef7575a8d90ed86cf85064800c88601d07",
          "message": "Put fork_tests behind s3_tests feature (#112)\n\nThese tests run the actual connector, and so need S3 credentials to\r\nwork. The whole `fuse_tests` module is already under the `fuse_tests`\r\nflag, so we can also remove those annotations as redundant.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-23T09:41:27Z",
          "tree_id": "7a10ff68e0900fab62e8a08ac6de0501cba348b3",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b2e0ceef7575a8d90ed86cf85064800c88601d07"
        },
        "date": 1677146344110,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.8076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 828.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6570.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.9931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1207.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.1875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1995.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.35546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.6875,
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
          "id": "46b17419fc781df2bbc70e9ec4d8d6da492ca325",
          "message": "Use cache for cargo artifacts in CI (#106)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.co.uk>",
          "timestamp": "2023-02-24T11:38:07Z",
          "tree_id": "df55d5f22c898a4fbc73d5f1e9d0bc419f4212d7",
          "url": "https://github.com/awslabs/s3-file-connector/commit/46b17419fc781df2bbc70e9ec4d8d6da492ca325"
        },
        "date": 1677239735952,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 989.8916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6700.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 12.9033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 967.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2304.064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.669921875,
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
          "id": "42ca651512ea166050e0a51fc6caa50183574dde",
          "message": "Remove O_DIRECT from basic_read_test (#114)\n\nThis test is failing sporadically in CI with corrupt data. I believe the\r\ncause is the same as #84. Per the man page for `open(2)`, `O_DIRECT` is\r\nnot safe to use concurrently with `fork` syscalls:\r\n\r\n> O_DIRECT I/Os should never be run concurrently with the fork(2)\r\n> system call, if the memory buffer is a private mapping (i.e., any\r\n> mapping created with the mmap(2) MAP_PRIVATE flag; this includes\r\n> memory allocated on the heap and statically allocated buffers).\r\n> Any such I/Os, whether submitted via an asynchronous I/O\r\n> interface or from another thread in the process, should be\r\n> completed before fork(2) is called.  Failure to do so can result\r\n> in data corruption and undefined behavior in parent and child\r\n> processes.\r\n\r\nOur test runner does a `fork` every time we mount a FUSE file system,\r\nsince we don't run our tests as root, and so we need to execute the\r\n`fusermount3` utility to do the mount. Since tests run concurrently,\r\nthat means we will sometimes do one of these forks at the same time as\r\nthis test is doing an `O_DIRECT` read.\r\n\r\nSigned-off-by: James Bornholt <bornholt@cs.utexas.edu>",
          "timestamp": "2023-02-24T11:40:38Z",
          "tree_id": "1ead4947c236e9bdf08148a9976c7b9701e7baac",
          "url": "https://github.com/awslabs/s3-file-connector/commit/42ca651512ea166050e0a51fc6caa50183574dde"
        },
        "date": 1677239772038,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 3.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 723.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.32421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6841.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 171.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.0166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1103.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 25.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2430.6435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 27.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.986328125,
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
          "id": "1d28185ea9f1673996d32881d42288620af2dccf",
          "message": "Add note on DCO to pull request template. (#109)\n\n* Add note on DCO to pull request template.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Wording update\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-02-24T09:58:59-06:00",
          "tree_id": "049dc6d23d060fbbc757104a6cc94aba41553f72",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1d28185ea9f1673996d32881d42288620af2dccf"
        },
        "date": 1677255253817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 900.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6909.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 141.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.1025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 949.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 20.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1997.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.31640625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c2b821fc65f571c1b7b4e656dbcf51cf0c82620",
          "message": "Implement directory atime,ctime,mtime (#100)\n\n* implemented atime, ctime, mtime for directory as the time the filesystem is mounted.\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added timestamp for all the directories and updated lookup test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for timestamp in readdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added test for timestamp for files in readdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Corrected datetime test for files in readdir\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added 30 days to UNIX_EPOCH for file modified time\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-02-27T14:31:03Z",
          "tree_id": "2bb4fdcfb41c82903b59bc3d41d4bb331435c381",
          "url": "https://github.com/awslabs/s3-file-connector/commit/9c2b821fc65f571c1b7b4e656dbcf51cf0c82620"
        },
        "date": 1677509287591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 829.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6668.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 151.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 636.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2264.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.3779296875,
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
          "id": "7347a0197de5b583d176a69df409f4ef3c88ea31",
          "message": "Fix metrics sink being shutdown early (#117)\n\nThe metrics sink shuts down when the handle it returns at init time is\r\ndropped. When we refactored for background operation we left the handle\r\ninside the `mount` function, so it gets dropped as soon as the bucket is\r\nmounted. Move it outside that function so it lives forever.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-02-28T10:11:05Z",
          "tree_id": "e7f358a05488f9f3a70155af4ddd499c53d21d41",
          "url": "https://github.com/awslabs/s3-file-connector/commit/7347a0197de5b583d176a69df409f4ef3c88ea31"
        },
        "date": 1677580078247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.4541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.7587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6584.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 160.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.44140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1166.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1925.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.5625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}