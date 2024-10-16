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
          "id": "6cda3049e6b0d627748c16977c97c6e4f6241645",
          "message": "Allow PR checks to be run against any base branch (#1034)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T14:15:11Z",
          "tree_id": "46907ea02078b4486e23d70ff4cb9afec650ee5e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cda3049e6b0d627748c16977c97c6e4f6241645"
        },
        "date": 1727367667743,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.8373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.52900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.79814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.51162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5838.15048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.02626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2002.45185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 88.764453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1633.23994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.3361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1266.32861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.105078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.9353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1595.383984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 923.3044921875,
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
          "id": "0b7d0aed9c034a9e8d501cd7816ced3a7e07b587",
          "message": "Initial implementation of a shared cache on S3 Express (#1032)\n\n* Make cache block size user configurable (default 1024 KiB)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Require Clone on ObjectClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement initial draft of shared cache in Express\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Encode cache version and block size into keys\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Decouple DataCacheError from io::Error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve error handling\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add unit test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Allow sharing the cache when mounting with different prefixes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix flow-control window\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-26T17:20:21Z",
          "tree_id": "e2b577fe57ac429d8c8791faa962bd549b18f128",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b7d0aed9c034a9e8d501cd7816ced3a7e07b587"
        },
        "date": 1727378507826,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.469921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.44501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.96875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.762109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5960.028515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.18681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2262.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 85.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1592.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.05126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1258.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1216.19013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.59326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1596.1583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 907.68115234375,
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
          "id": "359b8bfb9f9ef508b51f4f8e89c8940a40552bde",
          "message": "Update O_SYNC/O_DSYNC open flag check to occur ahead of lookup (#1042)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-01T08:01:01Z",
          "tree_id": "ad42f90f993231b2483bc08b4d68c608082b191f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/359b8bfb9f9ef508b51f4f8e89c8940a40552bde"
        },
        "date": 1727777111857,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.74638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.02138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.915625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5584.38125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2268.894140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1414.08916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.28779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1174.97734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1312.6248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.21103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1360.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.9201171875,
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
          "id": "4e99e79bc292d2d0e473cff8a328181a89b381be",
          "message": "Improve error handling and reporting when removing cache blocks (#1043)\n\n* Improve error handling when removing cache blocks\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Clean up ObjectId Debug implementation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-01T15:37:26Z",
          "tree_id": "b5826caade944bf077a09ba73062c315d00a344f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e99e79bc292d2d0e473cff8a328181a89b381be"
        },
        "date": 1727804369495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.58017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.63583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.3171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.4056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.3978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5898.04853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.76572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2301.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.56396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1619.887109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1314.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.80771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1534.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.6162109375,
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
          "id": "e95560b7a1720a7c3bdf51daf670d217ee79e11b",
          "message": "Remove clone of current span in record_name fn (#1045)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-01T17:01:59Z",
          "tree_id": "b3aedbf9dc1c6160f286c5e2dc3a4fc3bea04994",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e95560b7a1720a7c3bdf51daf670d217ee79e11b"
        },
        "date": 1727809244727,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.27021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.29833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.84462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5741.29130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.1107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2290.13447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 89.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1199.37529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.68642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1257.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1158.36201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.566796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1699.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.996484375,
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
          "id": "fda51030b360e1f63f7cab24a2ae2798a8d80410",
          "message": "Adjust read window based on used memory (#1013)\n\n* Mem limiter prototype\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Clean up development logging\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Scale up atomically, scale down after data was consumed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Remove Client from MemoryLimiter, document this structure\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Simplify the logic and include client metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Correct client mem usage stats\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Put the cli argument behind a feature flag\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix scaling logic and address comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-10-02T08:34:40Z",
          "tree_id": "cf541368e17bada06e3d3397b340a61301bebba2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fda51030b360e1f63f7cab24a2ae2798a8d80410"
        },
        "date": 1727865163238,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.336328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.5001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.5794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.17353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.47861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5971.33583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2263.91103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 94.54970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1591.6662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.91298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1327.89111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1135.5404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.0466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1682.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 924.65771484375,
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
          "id": "b749a3ed8a92dcebd43759f42fd555584cb04e7e",
          "message": "Tidy up the prefetcher logging (#1048)\n\nWe have changed some log level in #1013. We probably want to push some\nof them down to trace instead of debug.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-02T10:48:33Z",
          "tree_id": "b633f7a8b5e1a539fe2d613c7d09cfbf168bdd04",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b749a3ed8a92dcebd43759f42fd555584cb04e7e"
        },
        "date": 1727873176088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.84052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.9287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.0861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.4849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.22529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5778.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.42265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2083.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 96.44462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1668.1587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1324.07880859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1190.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1628.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 915.6361328125,
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
          "id": "8c144755df4693218e694ad77b86aadd94eee33a",
          "message": "Add random 6-character suffix to log file names (#1041)\n\n* Add PID to log file names if log file already exists\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update log filenames to always include some random string following the timestamp\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename logging_config fn to make_logging_config\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move make_logging_config back to method of CliArgs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-03T10:36:59Z",
          "tree_id": "1ee8fb9471da0c08704765e07b7d52ad3f28bd89",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c144755df4693218e694ad77b86aadd94eee33a"
        },
        "date": 1727958873551,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.6630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.1267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.40478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.79453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.64931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5756.27705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.75390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2174.3431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.356640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1589.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1379.812890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1147.94697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.46943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1647.67431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 932.07177734375,
            "unit": "MiB/s"
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
          "distinct": true,
          "id": "2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a",
          "message": "Update CRT submodules to latest releases (#1027)\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-04T12:33:12Z",
          "tree_id": "d8fcc77fb4d2f91dda2481013d14462d16a28b9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fa3a8f1cd06f6fb48a36137f05e9d936b951f6a"
        },
        "date": 1728052229008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.030859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.77666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5795.77333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2109.258984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 102.6873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1682.5994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.51875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1286.937109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.50830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1428.06826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 929.6255859375,
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
          "id": "2b36e671971fba99b2dd8ea5bd6b5413f11f7a45",
          "message": "Update CRT submodules to latest releases (#1053)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-04T14:08:10Z",
          "tree_id": "29023196567c0a071afebd985f977ec62fd1ffdc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b36e671971fba99b2dd8ea5bd6b5413f11f7a45"
        },
        "date": 1728058046666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.27109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.26044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.45244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5712.08798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2077.14248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.88330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1563.5123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.7646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1281.29521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1206.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.176953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1695.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.02373046875,
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
          "id": "5abbce51cb47b4db9176992308cf037c2729e7be",
          "message": "Tidy up the fs module (#1051)\n\n* Refactor fs into submodules\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Reorder types in fs module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-07T08:47:24Z",
          "tree_id": "60b95595d6b1f9df7d227e1a603d4eddc3be50b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5abbce51cb47b4db9176992308cf037c2729e7be"
        },
        "date": 1728297979976,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.01943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.34462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.9876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.58466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.14111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5757.71533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.5974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2104.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1542.85498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.398046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1283.2474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1152.26494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1343.7486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.153515625,
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
          "id": "548c0deab18b9d1795d39fa51ad4484847497fd1",
          "message": "Add tests for fstat during writing covering breaking cases (#1044)\n\n* Add tests for fstat during writing covering breaking cases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-08T16:07:09Z",
          "tree_id": "53ff847bf2d3f4816394751d41b74907d0622fb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/548c0deab18b9d1795d39fa51ad4484847497fd1"
        },
        "date": 1728410658206,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.11416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.07763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.53173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5674.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.92939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2058.68837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 96.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.713671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1204.0880859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1303.75615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.0400390625,
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
          "id": "0415b5c9e9e0be906ce17446834f2aadc2655b79",
          "message": "Update documentation related to the prefetcher (#1049)\n\n* Update documentation related to the prefetcher\n\nUpdate changelog to include changes in the prefetcher and document the\nunstable configuration to set maximum prefetch window size.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Change wording\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Apply PR suggestion\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-10-10T17:28:26Z",
          "tree_id": "958c3f335cc3f766fe9bcb55350473a7d9b75f1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0415b5c9e9e0be906ce17446834f2aadc2655b79"
        },
        "date": 1728588475578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.78291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.42939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.3421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.36826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.39326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5596.8666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.39619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2035.09599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.54404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1509.70859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.36796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1252.37275390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1129.68408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.36123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1413.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.388671875,
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
          "id": "9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb",
          "message": "Add support for single PutObject in mountpoint-s3-client (#1046)\n\n* Reintroduce the CRT InputStream as an option for the Message body\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up comments and tests on InputStream\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments to PutObjectTrailingChecksums and S3Operation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce separate params type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-11T21:40:18Z",
          "tree_id": "36ba1fef659d9a9b638854ce10fc9e95e08ab5f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb"
        },
        "date": 1728689948023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.959375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.3302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.66728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5755.93974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2253.5875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1761.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1362.5935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.71376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1718.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.96279296875,
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
          "id": "534918e96337dee222b158df9d4bd92a05d791b9",
          "message": "Add a type-safe wrapper for open flags (#1054)\n\n* Introduce OpenFlags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix linux build\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Support attributes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore example code\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address access mode flags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-14T17:21:36Z",
          "tree_id": "0056110fae025f51fe2b596bbd0cb666f13cc696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534918e96337dee222b158df9d4bd92a05d791b9"
        },
        "date": 1728933543239,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.5255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.41806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.39091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.26337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.575390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.35361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.93388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5522.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2030.29697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.88076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1870.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.27578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1382.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1205.258984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1510.2576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 911.19296875,
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
          "id": "5954f539c9e07e565ee1519e6f73e64dc42eea77",
          "message": "Add support for custom headers in PUT requests (#1059)\n\n* Add custom headers to put_object_single\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add custom headers to put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T10:20:36Z",
          "tree_id": "ae843188149e0b169bf57b86b7767b5098459a8a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5954f539c9e07e565ee1519e6f73e64dc42eea77"
        },
        "date": 1728994784538,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.29541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.05498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.88818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.16279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5821.13798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2129.36826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.56220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1774.41396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.59755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.855859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1216.72021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1565.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.46279296875,
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
          "distinct": false,
          "id": "2b0161600400c7ab7ccb1d6811abb9774facef5d",
          "message": "Release v1.10.0 (#1060)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-15T13:16:36Z",
          "tree_id": "f50831bf5cefbec38e30e8b5ffabe04b56bc2e30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b0161600400c7ab7ccb1d6811abb9774facef5d"
        },
        "date": 1729005367371,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.1984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.27900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.94345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.1392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.13798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.83017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.34521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5729.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.152734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2061.90576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1630.43837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.62783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1212.57685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.127734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1487.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1038.0234375,
            "unit": "MiB/s"
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
      }
    ]
  },
  "lastUpdate": 1729079884195,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}