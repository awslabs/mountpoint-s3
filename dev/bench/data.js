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
          "distinct": false,
          "id": "16a985700d80044f139a92d97f00a99f072d5c30",
          "message": "Update README and INSTALL documentation for 1.0.0 release (#439)\n\nThis adds new documentation for installing Mountpoint, using a Docker\ncontainer, and revamps the README to match these changes.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-09T14:16:23Z",
          "tree_id": "13a71f77db8c54e0389e70f256f31f5ffe18567c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/16a985700d80044f139a92d97f00a99f072d5c30"
        },
        "date": 1691593659444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5715.1953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.8544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.1220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1718.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 886.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jchorl@users.noreply.github.com",
            "name": "Josh Chorlton",
            "username": "jchorl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "243c4df87a5df171ecaaa5fdb33d327d65d0b894",
          "message": "decrease closed-channel log severity (#443)\n\n* decrease closed-channel log severity\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n* switch to trace\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\n\n---------\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>",
          "timestamp": "2023-08-10T16:54:47Z",
          "tree_id": "e780dffdc8e8798b170c705d5ccb547bae937f40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/243c4df87a5df171ecaaa5fdb33d327d65d0b894"
        },
        "date": 1691689599332,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.9970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5529.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1540.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 853.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "b65eda8e26da85f90a5696f38715eeb67e64c409",
          "message": "Add an example using Mountpoint with PyTorch (#440)\n\n* Add an example using Mountpoint with PyTorch\n\nI'd like to start collecting a few examples of how to use Mountpoint for\nstuff. This is the first one: using Mountpoint as a PyTorch data loader.\nThe goal is really just to show how to do it, and maybe say a little\nabout how well it works.\n\nFor now, this doesn't run in CI (need a GPU instance), will work on that\nlater.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update README\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-11T17:42:59Z",
          "tree_id": "57baf64ddf15616d1a94bd231b7a35d682c8a50d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b65eda8e26da85f90a5696f38715eeb67e64c409"
        },
        "date": 1691778381930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.1484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5526.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.0302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1444.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 877.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.8408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.51,
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
          "id": "3ecc0ae0e21ecd657103c23b4481d615ddb8b013",
          "message": "Update BENCHMARKING.md for GA release (#453)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-08-14T15:26:23Z",
          "tree_id": "03693dd402b68e6017b76f19adb025b40027eec5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ecc0ae0e21ecd657103c23b4481d615ddb8b013"
        },
        "date": 1692029195974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 5.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 4.6572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.65234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5529.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1596.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 697.3466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "3380f0cb2177840386487ecc76ddc81aaad9b5f2",
          "message": "Increase credentials duration when assuming role for benchmark ci job (#459)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T02:00:18Z",
          "tree_id": "b2c9a74a6b34a8c148f4175dd6301d298be03e2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3380f0cb2177840386487ecc76ddc81aaad9b5f2"
        },
        "date": 1692154080433,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 33.279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5599.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.9072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1551.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 904.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.6220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.41,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1525.88,
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
          "id": "4c49fdbfa4a91910042412f748ee9b39b2f91922",
          "message": "Improved Error message for Invalid Credential (#447)\n\n* Improved Error message for Invalid Credential\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* added tests for crt error parsing\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Throwing the CRT error instead of unkwown response error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Converted the ResponseError to CrtError in test case\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added comment and improved error message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-08-16T14:27:48Z",
          "tree_id": "9ece4987ad00c785eba13bce8c3b9aed3dc43aed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4c49fdbfa4a91910042412f748ee9b39b2f91922"
        },
        "date": 1692199101559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.42578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.4111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.1357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5735.310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.0546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1529.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 892.13671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "35d23e923f25b0b18fccc148ae4efd28e31721a7",
          "message": "Refactor metrics to have sharded shared state (#445)\n\n* Refactor metrics to have sharded shared state\n\nI wanted to add some new metrics but they are gauges, and our current\nthread-local approach makes gauges hard -- each thread gets its own copy\nof the gauge. So instead, this change refactors the metrics\ninfrastructure to have just one copy of each metric, stored in a sharded\nmap to hopefully reduce contention.\n\nI didn't actually add any new metrics, so this should be a pure\nrefactoring change. I beefed up the tests a little bit, too.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Don't reset gauges\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix comment typo\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-16T14:44:18Z",
          "tree_id": "7dda072c97af463585b90c2458aa3e4004fac141",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/35d23e923f25b0b18fccc148ae4efd28e31721a7"
        },
        "date": 1692199735136,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5682.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.8701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.0361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 701.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.04,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1335.14,
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
          "id": "d74c745b7ce39ab3c8ad927020913db5591c190f",
          "message": "Improve benchmark script (#458)\n\n* Run throughput benchmark multiple times\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update name for sequential write direct io job\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update benchmark doc\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update config for write benchmarks\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T15:13:01Z",
          "tree_id": "188ba2852a6664ec3977edf3c91a45c355099486",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d74c745b7ce39ab3c8ad927020913db5591c190f"
        },
        "date": 1692211496772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.7869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.570703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.2375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.05263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.02578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5926.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.31845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.66552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1583.52021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 866.7017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.76728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.37099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 929.26171875,
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
          "id": "578f47fce24e041017f1809d39a3e66d83b40831",
          "message": "Stub out unimplemented FUSE operations (#460)\n\nRight now if you try to do something that's totally unsupported, like\nrename, there won't be a log entry unless you're debug logging, and even\nthen it will only be a fuser log entry rather than something more\nspecific to Mountpoint. This makes it hard for customers to know what's\nhappening when an operation fails, and hard for us to debug with them.\nSo let's stub out all the FUSE methods we haven't implemented in a way\nthat will log the failure as a warning, like our other \"unsupported\"\nsemantics.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-17T10:31:23Z",
          "tree_id": "804a0f8836a5fc9df485e3ef334393fed6ca31e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/578f47fce24e041017f1809d39a3e66d83b40831"
        },
        "date": 1692281127789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.01826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.065625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.6189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.04814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.97041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5898.4859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.464453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.56806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.12001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1837.33154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.0490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 741.01015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.284765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1442.77255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.634375,
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
          "id": "dd61aeb8e79196be356bfbbb18243ec3af856e9a",
          "message": "Add new metrics for IO, handles, throughput (#461)\n\nThis change adds a bunch of new metrics for investigating performance.\nIt lets us track per-IO read/write size, number of open read/write\nhandles, directory listing throughput, and meta request throughput for\nuploads and downloads.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-18T09:21:41Z",
          "tree_id": "34af4508ea0888d5b5563f36facb2afe2875ae24",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd61aeb8e79196be356bfbbb18243ec3af856e9a"
        },
        "date": 1692569197030,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.3126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.84189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.5986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.2712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.80537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.72783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6066.02705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.5806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.1875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.8701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1527.77685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.8775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 981.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.70244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1460.5216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.5529296875,
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
          "id": "5556377c39ed69921a3977a5cb4ba3afa327925a",
          "message": "Small docs fixes (#464)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-21T10:54:39Z",
          "tree_id": "edd53bf1caf9ae1427c80e01dc185f77245c4f54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5556377c39ed69921a3977a5cb4ba3afa327925a"
        },
        "date": 1692628088625,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.7298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.289453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.08515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.4619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.31796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6042.246875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.02412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.4396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1507.11630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.45654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 836.66630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.72197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1343.1150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 939.0232421875,
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
          "id": "6103a2f3ca90a603bec34d4d064099b13ce3bfe6",
          "message": "Make allow_other and allow_root mutually exclusive (#475)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-24T10:59:17Z",
          "tree_id": "f19be32f858092c7ab03020a1f813ecaa9e33988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6103a2f3ca90a603bec34d4d064099b13ce3bfe6"
        },
        "date": 1692887798369,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.64072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.5826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.9314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.3599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.74482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.00283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.73681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5719.126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 196.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.23623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1657.90478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 803.46552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.48994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.6857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 926.30283203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7e12ec872d2b51f77f7fc2b9b11b4cba0305f56",
          "message": "Updates encryption documentation for SSE-KMS, DSSE-KMS (#480)\n\n* improves encryption documentation\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* Update doc/CONFIGURATION.md\r\n\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\r\nSigned-off-by: ahmarsuhail <ahmar.suhail@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nSigned-off-by: ahmarsuhail <ahmar.suhail@gmail.com>\r\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-08-25T13:05:48-05:00",
          "tree_id": "8bdb885b6bf0211e6c94ce228ab1b96881a632b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7e12ec872d2b51f77f7fc2b9b11b4cba0305f56"
        },
        "date": 1692998057078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.305859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.13544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.55498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.6818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.83349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.08818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.51845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 203.7251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.746484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.76748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1741.74482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.37255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 846.7361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.51142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.77998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.69765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67096+lesserwhirls@users.noreply.github.com",
            "name": "Sean Arms",
            "username": "lesserwhirls"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09f556edf6ed4233ff6c419dbf9331ac082c11d5",
          "message": "Support building with Clang 16 (#486)\n\nIn order to build with Clang 16, the bindgen dependency needs to be\nupgraded to at least version 0.62.0 (this change bumps to the latest,\nwhich is 0.66.1). See awslabs/mountpoint-s3#485\n\nSigned-off-by: Sean Arms <67096+lesserwhirls@users.noreply.github.com>",
          "timestamp": "2023-08-28T18:06:18Z",
          "tree_id": "6bcf53c04dad3ed4eb2a512919978aee74deda1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09f556edf6ed4233ff6c419dbf9331ac082c11d5"
        },
        "date": 1693258660541,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.6521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.41298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.360546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.34033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5957.23525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.50322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.7404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.87265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1598.49130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1030.01728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.54580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1415.58525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.0884765625,
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
          "id": "73a27c1d494e07354cab0d4b06a3a4499f6d466d",
          "message": "Small fixes for S3 on Outposts (#470)\n\nThis fixes two issues that were preventing Mountpoint from working\nagainst Outposts buckets:\n1. Outposts doesn't include the bucket name in ListObjectsV2 responses.\n   We weren't actually using that output anyway, so I just removed it.\n2. For GetObject requests, we were sending a HTTP header like\n   `Accept: application/xml,*/*`. While technically valid HTTP, it's\n   weird to accept */* as well as something else, and it was confusing\n   Outposts' request signing. So I switched to overwriting the existing\n   header, which is what the comment suggested the code was intended to\n   do anyway.\n\nI also took this chance to make a little cleanup to parsing\nListObjectsV2 responses: the `parse` functions shouldn't be defined on\nthe generic `ListObjectsResult` structs, which are shared by all\nclients.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-30T16:35:40Z",
          "tree_id": "444bdf0455dc0f3ab4c24c722bed5db5e1733938",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73a27c1d494e07354cab0d4b06a3a4499f6d466d"
        },
        "date": 1693427157626,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.01162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.4890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.73857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.72958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.50224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.56181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6107.1919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.16572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 11.11240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.04873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 938.71201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.61826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.683203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 914.7009765625,
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
          "id": "5626e204259e6a8141d798dbc0837ce3e3e3c3c3",
          "message": "Allow reading restored GFR/GDA objects (#434) (#467)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2023-08-30T22:33:46Z",
          "tree_id": "b6e1559cd71f934917f8e13028b3f7ddb68ef46a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5626e204259e6a8141d798dbc0837ce3e3e3c3c3"
        },
        "date": 1693447642156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.93076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.76923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.522265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.12919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.1630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5922.1115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.105078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1684.34482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.2671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 777.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1421.6353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 903.1697265625,
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
          "id": "5e8d834c2df2269d2f8670f38bc3c764d10a90f7",
          "message": "Close input/output handles when running in background (#489)\n\nWhen we run in background mode, the child process inherits the\nstdin/stdout/stderr of the parent. That's good because we can print\nmount errors from the child and have them reach the parent. But once\nwe're mounted and the parent exits, the child still holds onto those\nhandles. This is bad if those handles are pipes, which are often used\nwhen trying to launch a daemon (e.g. Python subprocess.check_output). In\nthat case, the pipes will never close and the caller will keep waiting\nfor output on them forever.\n\nWe need to close these handles once we're successfully daemonized. This\nwill prevent us from seeing anything the process prints after they're\nclosed, but from that point we should be logging anyway, so shouldn't be\nprinting. Printing still works (doesn't panic or anything), just doesn't\ngo anywhere.\n\nWith this change, a Python script like\n\n    import subprocess\n    subprocess.check_output(['mount-s3', 'doc-example-bucket', '/bucket'])\n\nworks correctly: once the mount has succeeded, it returns. Without this\nchange, this program blocks until the bucket is unmounted.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-31T12:42:20Z",
          "tree_id": "4b2c3032f1df614a94637e0d1e1aa4b45ca30025",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e8d834c2df2269d2f8670f38bc3c764d10a90f7"
        },
        "date": 1693498673265,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.182421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.60908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.84404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.76787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.17626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5857.12275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 199.610546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.25576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.7298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1607.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 775.72763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1456.47353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 919.5814453125,
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693572333466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.53349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.57373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.80849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.3919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.85078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5739.86015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.19765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1615.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 998.87939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.871875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1349.28291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 897.9849609375,
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
          "id": "534c3ed7f53289587b9aa47778a7ffa76109f81e",
          "message": "Added Unreleased section in changelog (#497)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T15:57:58Z",
          "tree_id": "7fb39eccb7cba98135a54cd7b5f5f4eeeb3dfd9f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534c3ed7f53289587b9aa47778a7ffa76109f81e"
        },
        "date": 1693596378349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.80009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 26.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.059765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.2779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.21865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6076.4564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.68623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1656.99599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.5236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 977.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.0431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1355.67734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 932.4671875,
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
          "id": "b632bbe9645f1f6af26ed839e791b8a34ab74b36",
          "message": "Use default thread config for benchmark (#504)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-06T13:14:32Z",
          "tree_id": "9c286583dea66a5ed85a09f85bd51c4bc1938e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b632bbe9645f1f6af26ed839e791b8a34ab74b36"
        },
        "date": 1694018930308,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.83193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.558203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.6755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.87705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.26015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5083.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 203.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1531.38681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 607.81787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1435.26923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.598828125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1694018930834,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}