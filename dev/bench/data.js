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
          "distinct": true,
          "id": "926524ce2244d9a8e3f86bbc81dcfafae8f3c94e",
          "message": "Add README notice on v1.4.0 bug (#780)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-23T14:09:00Z",
          "tree_id": "f28ce4c4598e2571dd720febbeb92ffdd155fd40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/926524ce2244d9a8e3f86bbc81dcfafae8f3c94e"
        },
        "date": 1708709506106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.5373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.21982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.35498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.54208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.040234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 93.2033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1398.17705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.91123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.93359375,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "8f1660f1ec8f95032b9a119c4fb38aa69f88a0e1",
          "message": "Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-23T16:10:00Z",
          "tree_id": "f8befe30e45b6305b0ca5ab703ffd8ccb83cca07",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f1660f1ec8f95032b9a119c4fb38aa69f88a0e1"
        },
        "date": 1708715860133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.36455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.92744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.030859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4495.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 81.33037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.1037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1279.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.99697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.92060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1451.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.2572265625,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "e733013dda5afd2815cbb35f7bc295f1dcf57cca",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-24T15:36:51Z",
          "tree_id": "56f906fa8c1d7fd04e1e5ed5fd39f336a1e1b634",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e733013dda5afd2815cbb35f7bc295f1dcf57cca"
        },
        "date": 1708800159644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.62568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.32333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4643.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.48720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1489.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.67490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.58642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1669.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.59912109375,
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
          "id": "6d7c19492ed895488e3bf856408ff5179345d7af",
          "message": "Add metrics for number of inodes (#781)\n\n* Make metrics gauges remember if they've changed\n\nThis is a small change to their behavior: they'll now emit if they're\nchanged to zero, whereas before they would not. But I think that's the\nbehavior we want anyway.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Convert absolute counters to gauges\n\nWe were abusing absolute counters to get the \"only emit when changed\"\nbehavior, which gauges now provide too.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Add metrics for number of inodes\n\nWe track the total number of inodes as well as tracking them by kind.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-25T22:37:25Z",
          "tree_id": "dd0745b59c7bdb11d0d31056c3a7e065f7b702a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d7c19492ed895488e3bf856408ff5179345d7af"
        },
        "date": 1708912790503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.18779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.23125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 59.7833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.656640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4669.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.2205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.38564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.2005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1532.76728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.63876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1313.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1520.000390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.57509765625,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "080fda178ddb94d0db8bb0cc71bd9ffb588a6339",
          "message": "Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-26T10:37:07Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/080fda178ddb94d0db8bb0cc71bd9ffb588a6339"
        },
        "date": 1708955282623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.55732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.51728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.867578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4576.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 88.57607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.66162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1487.701953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1236.4240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1541.85634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1000.966796875,
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
          "id": "484a13ace84eb2496b0c1c92b1f6e74e686db25e",
          "message": "Add a client metric for number of resolved IPs for the endpoint (#778)\n\n* Add a client metric for number of resolved IPs for the endpoint\n\nThis should help us identify issues where we're not getting enough IP\ndiversity, limiting throughput.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Tweak the `aws_string` interface\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-26T18:49:33Z",
          "tree_id": "837c9b97c89aed580047307c91e0bb959972a800",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484a13ace84eb2496b0c1c92b1f6e74e686db25e"
        },
        "date": 1708985517830,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.6287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.03203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4683.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 83.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.48642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1468.10302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.4515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.51484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1547.41435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.34638671875,
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
          "id": "5ce4863326222bb89c8b48de30c2879add306c89",
          "message": "Remove license clarification for zerocopy (#788)\n\nThis isn't needed after https://github.com/google/zerocopy/pull/542\n\nFixes #786.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-27T15:56:08Z",
          "tree_id": "359cdac6c0e6478a84487649993dc895fee15718",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ce4863326222bb89c8b48de30c2879add306c89"
        },
        "date": 1709065151668,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.19619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.3111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.79375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.55517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.882421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4649.50712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 188.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 91.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1428.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.9310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1309.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.77392578125,
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
          "id": "9326a48911c54f2ebe4c1e06f4ba3e52ebcbf03c",
          "message": "Update to new `metrics` crate version (#787)\n\nv0.22.0 of the metrics crate was a breaking change to how its macros\nwork -- they now return the counter/gauge/histogram itself and you call\nmethods on it to record metrics, rather than recording the metric as\npart of the macro. So this change is mostly a find and replace to get\nthings compiling again with this new change.\n\nOther than that change, there's two new things we'd like to use from\nthis new version:\n\n1. Scoped local metrics recorders are now supported, which makes it much\n   easier to write unit tests for metrics. The metrics recorders were\n   previously global, so tests had to use `rusty_fork` to fork a new\n   test process. I've used this change to update the current basic\n   metrics tests.\n2. Metrics now include metadata such as severity and module/line\n   location. We're not using this yet, but could use it in the future to\n   create scoped metrics or different metric severities for our logging\n   use.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-27T17:54:04Z",
          "tree_id": "164f87fdc4a4747d6dc842c01d563bf265845c55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9326a48911c54f2ebe4c1e06f4ba3e52ebcbf03c"
        },
        "date": 1709068651150,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.3638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.87080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.63115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.82578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4788.12021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 188.09814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 88.9376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.4005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1357.5919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.44208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1350.440625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.29775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.65849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.08642578125,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "310cf4387fddac8a9b9a517bb07643a6b9f12c37",
          "message": "Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T10:06:50Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/310cf4387fddac8a9b9a517bb07643a6b9f12c37"
        },
        "date": 1709126069071,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.77666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.19306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 25.9076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.76865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.72958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.91337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4595.71025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.4896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 87.68564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.95830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1314.7267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1356.5236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.4828125,
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
          "id": "f090603d4cdb89f5022f69981b094c0a872ab397",
          "message": "Add benchmarks for S3 express one zone bucket and automate creation of files for benchmark (#779)\n\n* Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T15:42:50Z",
          "tree_id": "b6c86900e6c112289d56d50798eb4440b4a9debd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f090603d4cdb89f5022f69981b094c0a872ab397"
        },
        "date": 1709147206365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.355078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.01494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.08193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.112890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4565.1966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 200.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 73.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1196.02333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1135.3630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.5951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1365.20537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.58251953125,
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
          "id": "f090603d4cdb89f5022f69981b094c0a872ab397",
          "message": "Add benchmarks for S3 express one zone bucket and automate creation of files for benchmark (#779)\n\n* Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T15:42:50Z",
          "tree_id": "b6c86900e6c112289d56d50798eb4440b4a9debd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f090603d4cdb89f5022f69981b094c0a872ab397"
        },
        "date": 1709215217921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.2869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.200390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.75263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4588.03994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.7322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.70654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.86611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1305.48515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1276.50693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1514.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.60068359375,
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
          "distinct": true,
          "id": "abead60f771717e148f980da744c30eccecebceb",
          "message": "Bump mio from 0.8.10 to 0.8.11 (#798)\n\nBumps [mio](https://github.com/tokio-rs/mio) from 0.8.10 to 0.8.11.\n- [Release notes](https://github.com/tokio-rs/mio/releases)\n- [Changelog](https://github.com/tokio-rs/mio/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/tokio-rs/mio/compare/v0.8.10...v0.8.11)\n\n---\nupdated-dependencies:\n- dependency-name: mio\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-05T09:41:32Z",
          "tree_id": "9069d3c52a4b00123004e3bc9eb8a67ca6b70d9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abead60f771717e148f980da744c30eccecebceb"
        },
        "date": 1709643937391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.6673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.10322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.8482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.44384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.03701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4554.1396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.0892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.53837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1542.534765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.59228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1318.0173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.15703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1405.08310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.51689453125,
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
          "id": "0640bac19327829c5f9769c3dd75b1b1fca68f83",
          "message": "Enable negative cache when using `--cache` (#757)\n\n* Mention negative metadata caching in semantics doc\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Enable negative cache without feature flag\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove negative_cache feature flag from integration tests workflow\n\nWe will remove the flag from cargo.toml in a separate PR to allow the workflow currently on main to still find it when running on this PR.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Alessandro Passaro <alessandro.passaro@gmail.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2024-03-06T09:52:40Z",
          "tree_id": "654d7d8975b88842677f6beb77fcbdf7bb0f6d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0640bac19327829c5f9769c3dd75b1b1fca68f83"
        },
        "date": 1709730969658,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.6904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.74638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.12578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.403125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.97822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5492.55302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.40556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.1109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.08671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1752.66494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1460.66259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.84541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1396.2234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.43857421875,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "0a7b9e94f31c7e986f11c7b9c72558585805750d",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-06T10:24:42Z",
          "tree_id": "089297cc57ed3e4647366f70d418693bb34aab18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a7b9e94f31c7e986f11c7b9c72558585805750d"
        },
        "date": 1709731971322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.567578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 27.32412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.5701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.28447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.0626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.04658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5349.07763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.97021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 57.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.3544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1603.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.51923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.70615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.93173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1670.921484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.34189453125,
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
          "id": "ab39c1d4400a9bba3804d420065c1dbb1b931d70",
          "message": "Cancel S3 requests when dropped  (#794)\n\n* Cancel S3 requests when dropped\n\nToday we don't cancel S3 requests when dropped. For our prefetcher that\nmeans we keep streaming (up to) 2GB of data that will never be used.\nThis change cancels in-flight requests when dropped, so that the CRT\nwill stop streaming them. Some bytes might still be in flight or\ndelivered, which is fine. Canceling requests is a no-op if they've\nalready completed.\n\nThe tricky case for this change is PutObject. Our current implementation\nof `PutObjectRequest::write` blocks until the bytes it provides are\nconsumed by the client. But sometimes the client might stop reading from\nthe stream because the request has failed. That case happens to work\ntoday because we don't retain a reference to the meta request ourselves,\nand so the failed request's destructors run immediately after the\nfailure, which unblocks the writer and returns it an error. But now we do\nhold onto a reference, and the destructors can't run until the last\nreference is released, so the writer is never unblocked. To fix this, we\nmake the `write` and `complete` methods of the `PutObjectRequest` poll\n_both_ the write stream and the request itself in parallel. If the request\ncompletes, this gives us a chance to bail out of the write rather than\nblocking forever.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adjust client metrics to account for canceled requests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Disable large object PUT abort test\n\nThe CRT abort is best-effort -- part uploads can succeed after the Abort\nsucceeds, which effectively recreates the MPU. This is mentioned in the\nAbortMultipartUpload documentation.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Expand a comment\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-06T16:33:24Z",
          "tree_id": "00274afc220c34e17d320e2f157ee7321d4ef760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab39c1d4400a9bba3804d420065c1dbb1b931d70"
        },
        "date": 1709755106967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.41142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.24658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.96904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.03427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.18125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5257.34169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.403125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.4408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.725,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1428.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.381640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1173.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.61884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1531.62626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 928.4177734375,
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
          "distinct": false,
          "id": "d54a8412066700f2e688fa1eac1c939c8233cb72",
          "message": "Bump CRT dependecies (#796)\n\n* Bump CRT dependecies\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Additional bump for aws-c-common fix\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T00:41:56Z",
          "tree_id": "92dab3c0176f0a9a1af9ce7a717463d44ac5a0f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d54a8412066700f2e688fa1eac1c939c8233cb72"
        },
        "date": 1709784249443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.58095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.36982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.58681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.56494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5298.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.792578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 54.471484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.3283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1558.55869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.74072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1446.99873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.405859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1414.15078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1022.865234375,
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
          "distinct": false,
          "id": "896c6d3c80b3c5442679f637c0fc7fac83e90e52",
          "message": "Account already downloaded data when resetting a prefetcher (#797)\n\n* Account already downloaded data when resetting a prefetcher\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor to use absolute offsets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refine naming and imports\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use std::sync, reorder code in push\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [2]\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [3], ignore shuttle prefetch tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Be precise when checking available data\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:42:38Z",
          "tree_id": "beac76695707ccd9f719bc5c80951555f3be7622",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896c6d3c80b3c5442679f637c0fc7fac83e90e52"
        },
        "date": 1709784293532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.91689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.4447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.55009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5336.73544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.897265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 54.30009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.09873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1544.88662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.3265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.89951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.40537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1566.69638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.8009765625,
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
          "id": "0fbc8e9d73079fe762d60806f223d9ab0a0eaa72",
          "message": "Add fio job to benchmark read-skip-read pattern (#799)\n\n* Add fio job to benchmark read-skip-read pattern\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the benchmark\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:43:29Z",
          "tree_id": "0c5d6e9e6258e17df23168ee6be7468cd9f4cac0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbc8e9d73079fe762d60806f223d9ab0a0eaa72"
        },
        "date": 1709784950141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.0517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.553515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.46103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.112890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5319.54375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 228.758984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 66.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.46279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1696.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1424.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.51298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.31552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1705.3689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 977.50966796875,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "77476b751afc1cc17e79be4caea4992daaeed639",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T09:38:37Z",
          "tree_id": "5c34c94f0ae5728da675462b29266d63c77c12a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77476b751afc1cc17e79be4caea4992daaeed639"
        },
        "date": 1709816210301,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.10615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.2,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.82373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.17890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.63935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.126171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5368.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.40859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.82333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.1654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1619.53974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1366.9267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1191.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.35986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.3533203125,
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
          "id": "d61d688f93ffb3f35fa1019a0b36f6c2e8228107",
          "message": "Record seek_distance metrics whether or not the seek triggers a reset (#800)\n\nBy always recording the length of a seek attempt, we should get a better picture of the read pattern. The `out_of_order` metric can already be used to determine whether or not the seek could be performed without resetting the prefetcher.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T11:16:43Z",
          "tree_id": "ed96e6c7ad34c0ec4ac7da40278fda7b058f06f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d61d688f93ffb3f35fa1019a0b36f6c2e8228107"
        },
        "date": 1709823068746,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.0369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.90927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.80068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.64326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.99521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.12255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5350.32255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.9044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.4294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1823.859765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.60947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1467.5220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.9517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1534.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.45185546875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1709823069265,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}