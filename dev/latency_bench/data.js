window.BENCHMARK_DATA = {
  "lastUpdate": 1693248084003,
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
          "id": "dd5216582d1ede36a80a9002abf2224031d50685",
          "message": "Remove --fips command-line flag (#437)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-08-07T14:47:43Z",
          "tree_id": "f1bbcfa9df019064eb53f46f1799765465caf316",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd5216582d1ede36a80a9002abf2224031d50685"
        },
        "date": 1691421723901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.44,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 122.27229679999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.408479299999996,
            "unit": "milliseconds"
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
          "id": "8728575280a8f07ac4d92a935926928d816ff1fa",
          "message": "Document Mountpoint configuration options and defaults (#436)\n\n* Document Mountpoint configuration options and defaults\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-07T17:00:23Z",
          "tree_id": "b66137541ea1faedc609e9658263e163d9c77ab4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8728575280a8f07ac4d92a935926928d816ff1fa"
        },
        "date": 1691429742962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.342,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.8889219,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.264557100000005,
            "unit": "milliseconds"
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
          "id": "e106f62c57d5e6922455006fc172129a6b897534",
          "message": "Bump version of mountpoint-s3 to v1.0.0 (#438)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-08T16:05:08+01:00",
          "tree_id": "fe55d2c2c1f772ff33c5b99c9197bf8358441c8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e106f62c57d5e6922455006fc172129a6b897534"
        },
        "date": 1691507766913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.238,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.284,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.4022152,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.35582959999999,
            "unit": "milliseconds"
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
          "id": "16a985700d80044f139a92d97f00a99f072d5c30",
          "message": "Update README and INSTALL documentation for 1.0.0 release (#439)\n\nThis adds new documentation for installing Mountpoint, using a Docker\ncontainer, and revamps the README to match these changes.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-09T14:16:23Z",
          "tree_id": "13a71f77db8c54e0389e70f256f31f5ffe18567c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/16a985700d80044f139a92d97f00a99f072d5c30"
        },
        "date": 1691592923206,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.214,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.138,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.4938197,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.8368288,
            "unit": "milliseconds"
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
        "date": 1691688971110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.203,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.089,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.8835682,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.95881259999999,
            "unit": "milliseconds"
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
        "date": 1691777671241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.238,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.206,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.247,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 87.6669333,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.4353305,
            "unit": "milliseconds"
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
        "date": 1692028463789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.846,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.247873,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.4809441,
            "unit": "milliseconds"
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
        "date": 1692153383480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.137,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.85597759999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.222978700000006,
            "unit": "milliseconds"
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
        "date": 1692198313246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.79,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.195901,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.849399,
            "unit": "milliseconds"
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
        "date": 1692199033803,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.105,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.692,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.3225088,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.4778631,
            "unit": "milliseconds"
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
        "date": 1692200844963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.717,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.928175,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 104.23079209999999,
            "unit": "milliseconds"
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
        "date": 1692270527795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.071,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.46591790000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.950397,
            "unit": "milliseconds"
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
        "date": 1692558498502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.2220439,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 100.5611664,
            "unit": "milliseconds"
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
        "date": 1692617443180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.462,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.4151954,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.70144379999999,
            "unit": "milliseconds"
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
          "id": "b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601",
          "message": "Bump AWS SDKs to latest version (#476)\n\nThis removes webpki from our dependencies to fix this: https://rustsec.org/advisories/RUSTSEC-2023-0052\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-23T21:28:50Z",
          "tree_id": "d2a7a159ef1bbf9e5ea3f5e7cf4e672fe26c30d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601"
        },
        "date": 1692827847116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.693,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.80853570000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.5830357,
            "unit": "milliseconds"
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
        "date": 1692877156724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.621,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6507243,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.27618059999999,
            "unit": "milliseconds"
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
          "id": "c7464d043a0792a164aa6ecbb189974b2e2dfeeb",
          "message": "Fixes for Rust 1.72 (#479)\n\n* Fixes for Rust 1.72\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix tracing\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-25T15:38:27Z",
          "tree_id": "0ff6bd84f859a7b1fff3f2e95a32a004d6b80a45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7464d043a0792a164aa6ecbb189974b2e2dfeeb"
        },
        "date": 1692980275812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.888,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 103.8612371,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.0403998,
            "unit": "milliseconds"
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
        "date": 1692987391644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.54,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 97.5525328,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.968853,
            "unit": "milliseconds"
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
          "id": "f10dc5b34edeed6d9640911054bef1366751f11e",
          "message": "Bump aws-actions/configure-aws-credentials from 2 to 3 (#484)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 2 to 3.\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: aws-actions/configure-aws-credentials\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-28T17:31:03Z",
          "tree_id": "e4ee11c1b6513cb4048abdcf47c05c785f3af657",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f10dc5b34edeed6d9640911054bef1366751f11e"
        },
        "date": 1693246290233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.809,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.8370987,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.1544018,
            "unit": "milliseconds"
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
        "date": 1693248083489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.193,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.185,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.3870611,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.508068200000004,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}