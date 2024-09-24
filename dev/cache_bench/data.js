window.BENCHMARK_DATA = {
  "lastUpdate": 1727189529981,
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
          "distinct": false,
          "id": "5d1535012312a8830725047b35c40f7a6ebac5fb",
          "message": "Add support for concurrent downloads to client_benchmark example (#1000)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-06T13:19:40Z",
          "tree_id": "02fd47d39f8189a6b9154d07050e104b2a8b7fea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d1535012312a8830725047b35c40f7a6ebac5fb"
        },
        "date": 1725636274123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.83505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1919.07158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1333.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.45595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 373.82294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.42734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.2224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3375.56884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4037.95224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 874.84462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 800.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1482.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1041.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1147.56953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1312.11396484375,
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
          "id": "1db78f38c8df2826b449409a54ed1e578c5c6985",
          "message": "Backwards seek window does not affect the read window (#999)\n\n* Use part's offset to calculate remaining window\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Add names to DataRead variant's fields\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Make new code more uniform with the rest of it\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T13:29:46Z",
          "tree_id": "a3d64a2c2104c61859c6c321e484952d321585a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1db78f38c8df2826b449409a54ed1e578c5c6985"
        },
        "date": 1725637003989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.50859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.41201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.1013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1386.83828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.0333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 580.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.52216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 232.02529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3502.99716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4370.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 852.65556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 912.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1138.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1373.34462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1245.048046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1101.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1240.13486328125,
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
          "id": "813f95d644ef7e4f02acb072ac54690699e34974",
          "message": "Upload benchmark results to S3 when the check step failed (#998)\n\n* Save benchmark results to S3 when the check step failed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Update all job defenitions\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T15:42:13Z",
          "tree_id": "b722266b9588a256a847f9e48f0fb7f891f72353",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813f95d644ef7e4f02acb072ac54690699e34974"
        },
        "date": 1725644867795,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1300.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1952.00107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1359.08193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 324.46533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 486.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3838.18662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4145.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 759.02705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 836.07568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1335.55185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.56552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.2447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.0130859375,
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
          "id": "6d498852520ba2f22ca3c76409f7b3faad9e2106",
          "message": "Update nix dependency from 0.27.1 to 0.29.0 (#1003)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-06T17:00:41Z",
          "tree_id": "1afbc653d279290796a7a6ab38338c500265fe29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d498852520ba2f22ca3c76409f7b3faad9e2106"
        },
        "date": 1725649452226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1287.534375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.32578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1375.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 328.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 377.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.26279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.90810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3495.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4179.88583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1013.096484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 800.79736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1351.0884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1136.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1138.659765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1110.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1121.7705078125,
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
          "id": "cdb8ccdabff7d6ad3a6be379317f2ff7341d834f",
          "message": "Avoid extending part on backward seek (#1005)\n\n* Avoid extending part on backward seek\n\nCurrently, we combine parts from the seek window to `current_part` in the\npart queue whenever we seek backward which mean we also have to re-compute\nchecksums for this combined part. It particularly affect read throughput in\nsome use cases where backward seek rate is high. This change should improve\nthe throughput for those use cases.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-09T13:05:39Z",
          "tree_id": "360e3d8af2c73f8865d5d0ea88be24afac2d1ab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cdb8ccdabff7d6ad3a6be379317f2ff7341d834f"
        },
        "date": 1725894611555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1286.30830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2030.3810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.19755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1556.546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.4125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 482.8400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.1009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3452.7203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4076.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1437.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1334.88544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1305.7912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1474.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1359.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.77978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1390.94970703125,
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
          "id": "67aaade83ccb265849776eedee121c8127dd7aab",
          "message": "Release new crate versions (#1010)\n\n* Release new crate versions\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Add multi-nic entry to changelog\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Make crates 0.9.0\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T15:42:27Z",
          "tree_id": "efdceaa1903fe3a7106de10ac9ec2672630c7adf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/67aaade83ccb265849776eedee121c8127dd7aab"
        },
        "date": 1726163335979,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1219.1525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2041.43896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.62587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.59970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.4728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 409.526953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3624.94765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4141.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1370.73583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.73125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1207.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1495.61416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1239.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1078.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1029.52421875,
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
          "id": "9542728630fc61d316cb1772662a98d649848cb4",
          "message": "Fix mountpoint-s3-crt-sys build (#1011)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T16:53:30Z",
          "tree_id": "19cc4274eef18a10240dd5ffaac764d23afd7193",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9542728630fc61d316cb1772662a98d649848cb4"
        },
        "date": 1726167500427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1302.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2051.2119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.82763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1521.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.593359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 386.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.1994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.893359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3685.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3913.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1623.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1447.9607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1400.087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 766.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1264.4587890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1176.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1348.08720703125,
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
          "id": "abae870d6b3230c5759c7b5876378258ff8c746c",
          "message": "Add tests for network interface configuration in mountpoint-s3-client (#1009)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T11:01:59Z",
          "tree_id": "c6a017662cd84259fc7d367d52e3c949f2fe1bde",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abae870d6b3230c5759c7b5876378258ff8c746c"
        },
        "date": 1726232781165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2012.41416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 822.16689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1510.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.3044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.67421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 227.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3696.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3979.6501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1561.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1327.3013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 846.45048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1036.97734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1340.04072265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 975.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.16083984375,
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
          "id": "bb42045080c25286f8f544c9bd2184124d11b0ee",
          "message": "Remove multi-NIC feature flag, add documentation (#1014)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T13:05:58Z",
          "tree_id": "c1bd0ce3c2f2ebe9c158425e15e87b3d31c0d306",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb42045080c25286f8f544c9bd2184124d11b0ee"
        },
        "date": 1726240307760,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1291.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2036.5013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.0810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1548.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 337.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.75673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.52392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 302.43828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3592.695703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4170.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1423.72119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1345.66953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 973.9603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1394.0380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1181.49443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1054.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1195.18125,
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
          "id": "9ed8b6243f4511e2013b2f4303a9197c3ddd4071",
          "message": "Release 1.9.0 (#1016)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-13T13:44:17Z",
          "tree_id": "74c50d58f8bd92175dae44d35c32b1aac022a675",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ed8b6243f4511e2013b2f4303a9197c3ddd4071"
        },
        "date": 1726242548379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1279.58154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2032.8201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 836.4939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1505.66728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.2115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.40185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 218.01328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.57666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3559.9490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4364.02578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1447.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1401.78388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 745.34833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 726.7736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1184.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1106.20087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1121.53115234375,
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
          "id": "720effa8219edf730fd5dfeacaa7c34dd866373b",
          "message": "Enable backpressure in mock-mount-s3 binary (#1017)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-17T09:50:27Z",
          "tree_id": "a4320e58ec56f7edd55fd102859901cf215d2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720effa8219edf730fd5dfeacaa7c34dd866373b"
        },
        "date": 1726574031474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2073.849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1542.78193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 326.4037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.76796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.87822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.22685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3362.906640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4204.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1525.93447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1382.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1158.41181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1459.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1172.40048828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1100.63447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 966.3935546875,
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
          "id": "ba23586e6defdd5621adb3b1c213d0793af2ad23",
          "message": "Update CRT submodules to latest releases (#1019)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for CRT related crates\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-09-18T11:56:57Z",
          "tree_id": "576c8eb0b0ab03483414be62c3a170f12d37fb7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba23586e6defdd5621adb3b1c213d0793af2ad23"
        },
        "date": 1726668126014,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1227.1984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2034.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.44091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1548.11533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.74150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.4416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 351.41767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3488.85361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3770.05703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1507.30654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1373.414453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 760.38896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1437.81826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1140.11181640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1060.22998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1027.03017578125,
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
          "id": "de6d145c2343b3bce433d1368c71f7eaf2f2d4d7",
          "message": "Add temporary way to configure amount of data prefetched per file handle (#1021)\n\n* Add temporary way to configure amount of data prefetched per file handle\n\nThis can be removed at any time.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update env_var_key to const\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add comment addressing smaller values\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-18T16:25:13Z",
          "tree_id": "0e524f065a0a6c469cef684e5a0582455f6d7dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6d145c2343b3bce433d1368c71f7eaf2f2d4d7"
        },
        "date": 1726684252545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1267.15185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2008.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.12587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1527.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 313.569921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.14375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.128125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 303.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3401.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4062.63662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1480.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1373.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1161.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 779.71611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1256.22666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1128.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1086.0974609375,
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
          "id": "f430895a096e3ebfe5d0fec59dece36910e133e6",
          "message": "Update CRT submodules to latest releases (#1024)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:45:10Z",
          "tree_id": "cbe85079414d977c48dc8bdcdcefe7569d7fe5ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f430895a096e3ebfe5d0fec59dece36910e133e6"
        },
        "date": 1726743043491,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1230.12177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2036.8263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.4310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1529.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 322.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 398.07294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.6439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.11298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3417.4830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4332.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1546.8708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1368.3505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 825.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1065.30244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1228.009375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1068.26572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 947.45703125,
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
          "id": "321a19f39d61867e459268b8daf184fd331cb39f",
          "message": "Fix bind command-line argument being ignored (#1020)\n\n* Fix bind argument being ignored\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad changelog message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:54:35Z",
          "tree_id": "b3827351b5353fa072b2a3909f4fc1c97a9cfc0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/321a19f39d61867e459268b8daf184fd331cb39f"
        },
        "date": 1726743551506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1285.37041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2035.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 769.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1534.02548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.73359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.39814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.73271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.54970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3583.70693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4124.71025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1572.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1336.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1311.45830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1540.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.3189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1153.221484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 954.52939453125,
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
          "id": "7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549",
          "message": "Expose `s3.client.buffer_pool.forced_used` metric (#1025)\n\n* Expose `s3.client.buffer_pool.forced_used` metric\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-19T10:06:42Z",
          "tree_id": "b273d49ab7246b1f21f4737bb78966cd81af1217",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549"
        },
        "date": 1726747877848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1273.32666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2018.14375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1526.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.48740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.7109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 231.35517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3472.219921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3949.1787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1445.19921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1452.1798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1404.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1551.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1247.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1071.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1095.0564453125,
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
          "id": "9040066b18bf9922e45d61167939f9dc51b2cc16",
          "message": "Release 1.9.1 (#1026)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-09-19T13:06:03Z",
          "tree_id": "a2a5ad204d297a4d408f8f3125f2a9af2ac1ae4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9040066b18bf9922e45d61167939f9dc51b2cc16"
        },
        "date": 1726758672494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1988.90400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.01005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1493.156640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.50263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.16845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 228.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3816.51962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4022.29111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1632.32587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1372.55380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1381.4890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1194.75712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1309.34443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1126.8240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1302.20810546875,
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
          "id": "ed8d96bac952836d27521c2fe652daa193370393",
          "message": "Update mock-mount-s3 to require '--max-throughput-gbps' argument (#1018)\n\n* Update mock-mount-s3 to require '--max-throughput-gbps' argument\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix error message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-24T09:39:04Z",
          "tree_id": "0e2974ec6587e7e9efc48451a7aa345c4f28637d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed8d96bac952836d27521c2fe652daa193370393"
        },
        "date": 1727178096757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1246.95283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2074.2765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.32626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.81943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 399.53046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 233.8841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 295.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3620.191015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3990.1505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1555.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1399.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1313.75576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1091.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1196.64287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.5728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1213.981640625,
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
          "id": "d62413d2b2a3bb65b507558561d5a6a2fe12dea1",
          "message": "Make cache writes async (#1029)\n\n* Make data_cache async\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Write cache block in background\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Revert unnecessary switch to async lock\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-24T10:21:15Z",
          "tree_id": "8deaeb476fcfb0c81585a7af9212dbceeb5b2312",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d62413d2b2a3bb65b507558561d5a6a2fe12dea1"
        },
        "date": 1727180468234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1235.30751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1997.89375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 758.5525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1518.68701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.2357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 464.00146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.45498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.00458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3773.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4302.91279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1509.51552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.65205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1442.22392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1253.03271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.9265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1427.16103515625,
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
          "id": "5d5e0ac6ada23cb7075996e27be812681107b9b2",
          "message": "Add memory usage check to the CI (#1028)\n\n* Check resource utilization\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-24T12:46:21Z",
          "tree_id": "9469171f6d722d4ed6ad22f21c8f3825202c29ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d5e0ac6ada23cb7075996e27be812681107b9b2"
        },
        "date": 1727189529495,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1231.37958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2052.14951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 815.22421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1510.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 332.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 388.02158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.22431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 227.95126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3413.20439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3965.29404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1433.04892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.58974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1433.51591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 741.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1193.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1076.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1098.63349609375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}