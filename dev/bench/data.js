window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "6fc30b904be158179d2731400678a0eced7a46ef",
          "message": "Update Clippy CI to deny warnings (#639)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-06T13:26:05Z",
          "tree_id": "c8d75fa20fb8d8206acd502fd2695ee8695dc058",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fc30b904be158179d2731400678a0eced7a46ef"
        },
        "date": 1701885410916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.87900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.29736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.6791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.41396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4731.98115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.79013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.1375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.76689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1434.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.6234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.52265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.688671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.96845703125,
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
          "id": "e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588",
          "message": "Remove duplicate S3 test helper functions (#664)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-06T14:33:59Z",
          "tree_id": "4e15b868e1d9cadf7cfc9238b87c92d1a75273af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588"
        },
        "date": 1701885744151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.07626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.1693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.04248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.206640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.884375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.30068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.93203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.192578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4922.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 216.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1456.38349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.10283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1455.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1727.40048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1082.24853515625,
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
          "id": "825bdf7ecebd13bccaea17953516a9d651f438b9",
          "message": "Add filename at Error and Warn level in logs (#665)\n\n* Added key in inode.rs\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added filename in warn span\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed the InodeError distinguishing *deleted marker and other recommended changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added parent info in FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved the formatting of FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-12-07T11:45:41Z",
          "tree_id": "1cbe691c7754c30045db0bbede8c9e0ce7ad46ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/825bdf7ecebd13bccaea17953516a9d651f438b9"
        },
        "date": 1701962036916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.61455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4691.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 203.32646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.434375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1399.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.66494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.09306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1508.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.8783203125,
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
          "id": "a8c29674bdcb7844a5d2b8bf18ef3164397806b0",
          "message": "Update documentation for S3 Express One Zone (#667)\n\n* Update documents for S3 Express One Zone\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update storage classes section\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-12-07T13:21:28Z",
          "tree_id": "ac68ea4010c4a6864a806397f5be0f4cd0791793",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a8c29674bdcb7844a5d2b8bf18ef3164397806b0"
        },
        "date": 1701967834757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.4900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.553125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.52880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4556.7873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.39873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1396.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.05947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1257.214453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.2462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.665625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 960.07724609375,
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
          "id": "ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d",
          "message": "Add field for cli arguments to the bug report form (#640)\n\nAlso expand the description of the behavior field to include reproduction steps.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-07T20:07:03Z",
          "tree_id": "57bc12eef9422b1aa8bec61772e78d4d7e20b2b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d"
        },
        "date": 1701992798792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.33779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.4958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.63779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4795.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.00478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.1716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1401.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.30830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1367.7091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.62734375,
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
          "id": "b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa",
          "message": "Add docs clarifications about which FS operations can be served from cache and when (#627)\n\n* Add clarification on which file system operations can be served from cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on caching behavior with writing\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T00:56:42Z",
          "tree_id": "2970551ed2a78be52c844a5cc46c366976f8314e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa"
        },
        "date": 1702010271219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.49716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.5677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.3216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.28359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4679.06708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 194.8236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1416.30654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1403.15419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.8353515625,
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
          "id": "863087df20e999f9e90c278ab0f0c7b8afa4e9fc",
          "message": "Add CRT error to CRT request logs, move CRT per-request logs to DEBUG (#669)\n\n* Add CRT error to underlying request log entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move all CRT request logging to debug even on error\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T01:04:11Z",
          "tree_id": "b3d5c9bfa42c7626519410fbcc30c5a11c34a7ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/863087df20e999f9e90c278ab0f0c7b8afa4e9fc"
        },
        "date": 1702010518044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.05390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.98564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.94365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.640234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.37236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4749.1375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 191.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.98984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1510.532421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1318.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1369.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.114453125,
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
          "distinct": false,
          "id": "6fdc7830e55f6b09ca665a2fca89795553d6b2d8",
          "message": "Print successful mount for both foreground and background modes. (#668)\n\nAlso, update documentation for the `--no-log` argument.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-08T10:22:05Z",
          "tree_id": "e993751de460027dbf8281ec0bd09e8d93f546b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fdc7830e55f6b09ca665a2fca89795553d6b2d8"
        },
        "date": 1702044109715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.52978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.213671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4713.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.95205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1204.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.72548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1267.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.71455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.86591796875,
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
          "id": "342b256e91430350f2a3fe7fd78af9e13749b05c",
          "message": "Update PyTorch example to support single files and different models (#603)\n\n* Update PyTorch example to support single files and different models\n\nWe'd like to expand our testing to single files rather than only sharded\nrepresentations. This change adds the ability to create and train\nagainst that style of dataset. It also adds some other useful\nconfigurations for Mountpoint training and for configuring a different\nmodel to train rather than hardcoding ResNet-50.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-12-08T10:26:29Z",
          "tree_id": "d9fb6337f0988581e3d04ac31f99c43f20a02871",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/342b256e91430350f2a3fe7fd78af9e13749b05c"
        },
        "date": 1702044309614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.20625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.56767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.3736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.04619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4701.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 199.07529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.51357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1565.1482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1492.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.6041015625,
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
          "id": "2fe70d0a0094d8636c1967e4b3e932f86a753b88",
          "message": "Update CRT submodules to latest releases (#672)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-10T20:21:30Z",
          "tree_id": "7e867ee2283598d5d29fb1107ddfe13dec071fe8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fe70d0a0094d8636c1967e4b3e932f86a753b88"
        },
        "date": 1702252455573,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.73232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.403125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.19345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.153515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4830.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.78193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 107.97236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.99482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1410.07333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.24287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1258.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.84873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1441.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1071.14189453125,
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
          "id": "5e453f1ffcf05adec373fec51250fbf50c6d46c0",
          "message": "Introduce ObjectId type to reference specific versions of S3 objects (#673)\n\nThe new `ObjectId` type holds an S3 object key and etag to identify a specific version of an object. It is used in the data cache, where it is a 1-1 replacement for `CacheKey`, and also in the prefetcher, where it replaces the S3 key previously used in `Part`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-11T20:06:02Z",
          "tree_id": "a7dd52390bbb323993ca177d688b35f2e2ed9f91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e453f1ffcf05adec373fec51250fbf50c6d46c0"
        },
        "date": 1702338021442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.32099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.1521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.61806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4785.7775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.66982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.4916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1435.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1274.48876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1460.66591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.99638671875,
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
          "id": "88e4397961f3fb84d2ed70c89b7a225125d297e3",
          "message": "Add a dirty indicator to version strings (#678)\n\nThis lets us distinguish between clean and dirty builds of a certain Git\nrevision, so we know whether to trust the Git revision in the string or\nnot. Tested by running `mount-s3 -V` and checking that it's dirty when\nmy Git repo is dirty and not dirty otherwise.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-12-15T10:14:51Z",
          "tree_id": "767247285e78b0469605def368fafd2609dba1fa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/88e4397961f3fb84d2ed70c89b7a225125d297e3"
        },
        "date": 1702648105578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.30830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.3859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.973046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.58759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4692.94296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.5740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.47529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.5931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1625.20341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1282.22939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1367.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 942.719140625,
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
          "id": "83fa7c654623cba34b44f99c3b8930b693ebd0b1",
          "message": "Update cargo dependencies (#679)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-15T12:12:02Z",
          "tree_id": "9c0bddd464f64f4f8a2333987aac091b27518cf6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83fa7c654623cba34b44f99c3b8930b693ebd0b1"
        },
        "date": 1702654847043,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.37802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.636328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.20361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.70478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4848.084375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.22578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 87.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.3013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1480.78837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.11640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1322.24736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1454.1482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1019.7330078125,
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
          "id": "374a0f233c9ea890081d510bdbc6fb0bfca3d68d",
          "message": "Resolve clippy warnings introduced in Rust 1.75.0 (#686)\n\n* Appease clippy\n\nMaking changes based on new clippy rules.\nChanges are seen for the following update:\n\n    stable-x86_64-apple-darwin updated - rustc 1.75.0 (82e1608df 2023-12-21) (from rustc 1.74.1 (a28077b28 2023-12-04))\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Simplify tuple ref mapping\n\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-02T11:03:03Z",
          "tree_id": "e4703fd4c93b2ec53fa94cd6992d4d739c1fbfb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/374a0f233c9ea890081d510bdbc6fb0bfca3d68d"
        },
        "date": 1704206304953,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.52900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.38427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.934375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.94013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.81474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.40869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4620.2837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 108.6185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 55.1423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1474.39765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1340.9265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.73955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1455.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1120.96064453125,
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
          "id": "45414a235abf7463669daae41e0f37bc2fcd7531",
          "message": "Rework ChecksummedBytes internals to use a Range instead of a Bytes slice (#687)\n\n* Rework ChecksummedBytes internals to use a Range instead of a Bytes slice\n\nPreliminary refactor to prepare for adding integrity checks on the range itself. No changes in behavior.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix rustdoc\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve setup of slice tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-03T14:10:49Z",
          "tree_id": "4d98745d37ea9b38f0eba213fa0e1ffdbdff0d99",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/45414a235abf7463669daae41e0f37bc2fcd7531"
        },
        "date": 1704303619885,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.520703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.05625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.2705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.94033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.73701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.09970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4804.21640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.7162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.07119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1508.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.60078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1403.20869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.9515625,
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
          "id": "5e41487a27fce641f3f07fbab1dae50ee56ec2d2",
          "message": "Prevent build on crate verify workflow (#685)\n\nThis prevents issues where some of the crates are updated but not published yet.\nCargo tries to build the crate using the version of its dependency on crates.io, as if its about to be published.\nIn many cases, we want to update our crates over a few commits before later publishing each of the crates together.\n\nExample of the issue: https://github.com/awslabs/mountpoint-s3/actions/runs/7356232845/job/20026056240?pr=684#step:5:229\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-03T15:35:31Z",
          "tree_id": "03fe8f49336932477cbffb25f01153283856764b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e41487a27fce641f3f07fbab1dae50ee56ec2d2"
        },
        "date": 1704308693657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.3544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.93564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4760.03388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 102.6044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.9037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1577.38447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.74345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1384.03837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.087109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.82080078125,
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
          "id": "4af1f2dade5c51400211b3377854e4c7682f0cbc",
          "message": "Add contiguous reading metric to prefetcher (#629)\n\n* Add metric tracking contiguous read length\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add metric tracking contiguous read length\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update 'prefetch.contiguous_read_len' metric to be recorded on Drop\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-03T22:52:42Z",
          "tree_id": "da9313ef8f127094e947c0f0cf807eabf0476cc2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4af1f2dade5c51400211b3377854e4c7682f0cbc"
        },
        "date": 1704334888290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.6341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.5294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.6173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.88291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4835.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.7345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 107.58310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1390.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.89345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1198.3470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.64951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.85126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.10712890625,
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
          "id": "f4b420b2c9476c1d796dd502050c57b98a20fd04",
          "message": "Tidy up ChecksummedBytes public methods (#689)\n\n* Refactor ChecksummedBytes::shrink_to_fit to mutate self\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Refactor ChecksummedBytes initialization methods\n\nMost callers can use `ChecksummedBytes::new(Bytes)` to create new instances, rather than calculating the checksum explicitly.\n\nThis change also tidies up some of the existing `ChecksummedBytes` tests.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-04T08:06:52Z",
          "tree_id": "50b73612c06b59360dfc173ed4182cc20f5d873b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4b420b2c9476c1d796dd502050c57b98a20fd04"
        },
        "date": 1704368141482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.108203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.90166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.23896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.9630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.32666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4835.11025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.45390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.5388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.93251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1403.77861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.64501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.49921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.5123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1496.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.8203125,
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
          "id": "024a7f4a11057dfbad6c106c2115999f8dc972dd",
          "message": "Fix version number tests (#690)\n\nUse a regex recommended by semver.org to verify the cli version output. The change allows tests to pass even on dirty Git repos, where version includes the \"-dirty\" indicator introduced in #678).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-01-05T02:32:02Z",
          "tree_id": "54b389c691bcebb5b3f738c8c6ea1d5c6b1e7911",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/024a7f4a11057dfbad6c106c2115999f8dc972dd"
        },
        "date": 1704434453770,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.49267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.92861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.2138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4728.2248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1263.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.92490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.74013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.97080078125,
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
          "id": "6e7252dd2e54932e277e5b5ee7000f9bc816a682",
          "message": "Replace callback in FS read with simple Result instead (#691)\n\n* Remove fs::read callback to return simple Result instead\n\nWe're making this change primarily due to the risk of a race condition introduced.\nBefore this change, we reply directly to the FUSE driver before exiting the fs module code.\nThe risk here is that we've already replied to the driver before we drop things like the file handle guard.\nAlbeit small, this is a race condition and we intend to remove it to avoid any risk from it.\n\nThis race condition is suspected to be the root cause for this issue\nwhere FUSE release fails unable to unwrap the file handle reference: https://github.com/awslabs/mountpoint-s3/issues/670\n\nThis race condition risk could have a large impact since the file handle holds a reference to prefetched data.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove ReadReplier trait\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-06T05:51:35Z",
          "tree_id": "37b07489030dd6dd437d9afd5cbf04796fd755d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e7252dd2e54932e277e5b5ee7000f9bc816a682"
        },
        "date": 1704532807566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.86474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.88193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.06875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4709.88642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.80068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1443.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 40.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1289.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1399.715625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.98896484375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1704532808098,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}