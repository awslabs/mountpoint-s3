window.BENCHMARK_DATA = {
  "lastUpdate": 1670431128368,
  "repoUrl": "https://github.com/awslabs/s3-file-connector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "bcd7056caa3bce9cf631ff592623e0595ccb07ce",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T11:33:17Z",
          "tree_id": "330d69145f89e00cdaeab077887d0c4c0497f0b6",
          "url": "https://github.com/awslabs/s3-file-connector/commit/bcd7056caa3bce9cf631ff592623e0595ccb07ce"
        },
        "date": 1668167402016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 848.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 568.89,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 839.57,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1.2229,
            "unit": "GiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.8812,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.3885,
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
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "4009e9b4b9c7002e1390ed93abf62af628be01e6",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T13:51:29Z",
          "tree_id": "314617aadc9d37ee67e72755adee92114e8baa44",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4009e9b4b9c7002e1390ed93abf62af628be01e6"
        },
        "date": 1668175205376,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 968.91,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 575.16,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1000.2,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1202.7904,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.5693,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5026,
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
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": false,
          "id": "4009e9b4b9c7002e1390ed93abf62af628be01e6",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T13:51:29Z",
          "tree_id": "314617aadc9d37ee67e72755adee92114e8baa44",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4009e9b4b9c7002e1390ed93abf62af628be01e6"
        },
        "date": 1668176035859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 780.51,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 513,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 900.98,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 548.02,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.8713,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.2662,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "08361626362fdec52e26fc2920121a1f4e8955fe",
          "message": "Really remove proptests from asan",
          "timestamp": "2022-11-11T15:07:02Z",
          "tree_id": "88bd3ca8451a855459f540a842903c3f92bb5218",
          "url": "https://github.com/awslabs/s3-file-connector/commit/08361626362fdec52e26fc2920121a1f4e8955fe"
        },
        "date": 1668179825013,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 813.82,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 583.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 901.43,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1092.5056,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.6673,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5049,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "440f4c62b0eb6555a488bc6016f1b972f1dd7cdc",
          "message": "Don't run reftests or proptests with asan",
          "timestamp": "2022-11-11T16:01:55Z",
          "tree_id": "88bd3ca8451a855459f540a842903c3f92bb5218",
          "url": "https://github.com/awslabs/s3-file-connector/commit/440f4c62b0eb6555a488bc6016f1b972f1dd7cdc"
        },
        "date": 1668183541693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 865.73,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 521.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 949.97,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1199.2064,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.4446,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.2179,
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
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "ce8b93aa3948b9e9e3fcf83b6cdf504174c90c6e",
          "message": "Put throughput target for benchmark",
          "timestamp": "2022-11-11T17:07:46Z",
          "tree_id": "d1fb45e68ac95b8450719ad0310a68c86aad7daa",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ce8b93aa3948b9e9e3fcf83b6cdf504174c90c6e"
        },
        "date": 1668186998390,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 839.72,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 611.73,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1022.8,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 788.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 8.397,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.3083,
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
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2afe112f2427689692b7916c3df31ed2c848f9a2",
          "message": "Put throughput target for benchmark",
          "timestamp": "2022-11-11T17:27:24Z",
          "tree_id": "660907fb4b11ef36c210a7e1ec5c59870d0a8e19",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2afe112f2427689692b7916c3df31ed2c848f9a2"
        },
        "date": 1668188290905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 854.81,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 514.68,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 908.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1108.1728,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.192,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5573,
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "8381226d6b2e587cb08f26d266938302ca3ce396",
          "message": "Update vendored fuser to bb3c123",
          "timestamp": "2022-11-11T17:46:19Z",
          "tree_id": "93895244d8d34dc333bcb5d504cc3dc7e211cb68",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8381226d6b2e587cb08f26d266938302ca3ce396"
        },
        "date": 1668189287148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 925.26,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 593.33,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 992.81,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1314.7136,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.3785,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.6107,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "660af80372ae5255b93a2b8d9d3c35fea224fd7f",
          "message": "Create a separate ci for benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/17/commits/660af80372ae5255b93a2b8d9d3c35fea224fd7f"
        },
        "date": 1668513504774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 907.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 526.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 966.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 932.46,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.5053,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.333,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "cc73afe754d4bcff89b145462d5626d3d02800d2",
          "message": "Create a separate ci for benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/17/commits/cc73afe754d4bcff89b145462d5626d3d02800d2"
        },
        "date": 1668605311993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 961.19,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 615.22,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1034.4448,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1250.6112,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.4067,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.4118,
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
          "id": "3253a10262bc2504807b23dfdc4729016bef8747",
          "message": "Merge pull request #17 from awslabs/bench-ci\n\nCreate a separate ci for benchmark",
          "timestamp": "2022-11-16T14:36:06Z",
          "tree_id": "bf7fa9424f78c0bb0bb316436ef17fb232c37ba1",
          "url": "https://github.com/awslabs/s3-file-connector/commit/3253a10262bc2504807b23dfdc4729016bef8747"
        },
        "date": 1668609877900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 860.67,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 565.63,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 867.38,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1044.5824,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 8.1083,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.64,
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
          "id": "e257d71e4f9d69b5003d7d8d45e71377610a4734",
          "message": "Fixes for address sanitizer tests\n\ntrack_caller is unstable and seems to now be guarded behind a feature flag:\nhttps://github.com/rust-lang/rust/issues/74042\n\nWe also have one test for large objects that is very slow under ASan.",
          "timestamp": "2022-11-18T16:33:21-06:00",
          "tree_id": "8b35782ad26483106f06bd74f46de92b623c1217",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e257d71e4f9d69b5003d7d8d45e71377610a4734"
        },
        "date": 1668811319750,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 999.05,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 613.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 915.66,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1309.2864,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.0325,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.1935,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "9708447929e726a6597e0c082c1e8ce8849aec6d",
          "message": "Added failing test",
          "timestamp": "2022-11-19T02:16:24Z",
          "tree_id": "f3762a09ea82e0f14935fae26c9c2731d3f4e5e0",
          "url": "https://github.com/awslabs/s3-file-connector/commit/9708447929e726a6597e0c082c1e8ce8849aec6d"
        },
        "date": 1668824860910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 439.44,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 532.66,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 905.38,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1057.0752,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.5746,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.0319,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "dbf188dee10985b0fdf2352a5e0f0fccc6611aa3",
          "message": "Increase IO size for benchmark to 20GB",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/20/commits/dbf188dee10985b0fdf2352a5e0f0fccc6611aa3"
        },
        "date": 1669136942111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1018.4,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 608.88,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 840.37,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1199.0016,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.1511,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 1.9878,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "2bef171c6e7586f07b692ee0943291ab9f75a2ae",
          "message": "Increase IO size for benchmark to 20GB",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/20/commits/2bef171c6e7586f07b692ee0943291ab9f75a2ae"
        },
        "date": 1669138454811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1711.616,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1397.6576,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1470.2592,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2830.0288,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2158.592,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.1176,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.72,
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
          "id": "ead23df60bacb9d8ff52f5c417bd7f8256d59789",
          "message": "Add multiple threads read with direct io benchmark",
          "timestamp": "2022-11-22T21:17:44-06:00",
          "tree_id": "b7a51b2be5954303bd48e46efd83d7ca15e18e71",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ead23df60bacb9d8ff52f5c417bd7f8256d59789"
        },
        "date": 1669174672083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1445.1712,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1361.8176,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1591.9104,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2869.3504,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2124.4928,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.5056,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.7,
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
          "id": "b03451b5b8b2ea66ed489fe6ca2f5bebb31e8d04",
          "message": "Add S3 request failure metrics",
          "timestamp": "2022-11-26T15:04:44Z",
          "tree_id": "2dcf25a0b6eeb1e7dcd203f2310acc1973cafdd6",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b03451b5b8b2ea66ed489fe6ca2f5bebb31e8d04"
        },
        "date": 1669476302589,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1391.104,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1388.4416,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1556.6848,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2117.4272,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2189.4144,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.7157,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.77,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukernel@amazon.com",
            "name": "Luke Nelson",
            "username": "lukenels"
          },
          "committer": {
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "84020c9ff79b9b4eb821676f3b8b71060e9d6fe6",
          "message": "S3Client: Implement a basic put_object\n\nFor now, the implementation does not support streaming; it accumulates\nthe entire object in memory before issuing the PUT request. Once\nthe CRT supports multi-part PUT without requiring the Content-Length\nto be known ahead of time, this can be changed.",
          "timestamp": "2022-11-27T18:44:04-06:00",
          "tree_id": "3807dedf2ecc665a60e11cb79bfa268349ae9c0f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/84020c9ff79b9b4eb821676f3b8b71060e9d6fe6"
        },
        "date": 1669597501654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1716.4288,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1369.8048,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1376.3584,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2866.4832,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2155.8272,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.7477,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.76,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "6d8b6bcb6f0bbdfaf84b8ef9cde197acf17b32b1",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/6d8b6bcb6f0bbdfaf84b8ef9cde197acf17b32b1"
        },
        "date": 1669647257474,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1709.1584,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1369.3952,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1344.2048,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 3021.7216,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2180.5056,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.7853,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.8,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "c0a893e08ba9dce5aa3d2e5b01bfaef98ca15103",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/c0a893e08ba9dce5aa3d2e5b01bfaef98ca15103"
        },
        "date": 1669648294082,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6551.3056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1045.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2065.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.5732421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "258cfbc0a38375f2661fef25e814d08edd7ba1f1",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/258cfbc0a38375f2661fef25e814d08edd7ba1f1"
        },
        "date": 1669650490404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.62890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1163.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6554.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.5595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 981.7001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1980.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 15.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 26.298828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "0cbd844b57d2232922305b2d8aaeb81078ed0f82",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/0cbd844b57d2232922305b2d8aaeb81078ed0f82"
        },
        "date": 1669651750763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 32.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 3.9931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1109.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6635.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1269.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 23.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1991.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "b2e85a8d8c12985c934179dc2c1c00b91e4b375e",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/b2e85a8d8c12985c934179dc2c1c00b91e4b375e"
        },
        "date": 1669733831525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.83203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.1982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 923.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6698.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.3916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.16015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 1202.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 24.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2062.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.9609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.2763671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukernel@amazon.com",
            "name": "Luke Nelson",
            "username": "lukenels"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7b134aade57973bc2b68eb0142fcd0bd493fdd2",
          "message": "Various cleanup / refactoring in S3Client and Rust CRT bindings (#24)\n\n* Various cleanup / refactoring in S3Client and Rust CRT bindings\r\n\r\nThis commit is a hodgepodge of various fixes / cleanups each of which is\r\npretty small. Among the changes are:\r\n\r\n- Added a `new_request_template` to S3Client so that we don't have to\r\n  keep repeating the header construction for Host, User-Agent, etc.\r\n\r\n- Changed `&mut Allocator` to be `&Allocator` everywhere: the former\r\n  made it impossible to use the allocator from non-mut references to\r\n  the S3Client. Having allocators take non-mut references is standard in\r\n  Rust, for example, see the standard\r\n  [Allocator trait](https://doc.rust-lang.org/std/alloc/trait.Allocator.html),\r\n\r\n- Added a test for the CRT's file path input stream.\r\n\r\n- Added more [Headers] methods for erasing headers and checking if a\r\n  header is present. Fixed the errors returned when a header is not\r\n  present. Modified the semantics of add_header to overwrite any\r\n  existing headers with the same name (instead of ignoring all but the\r\n  one that was first set.)\r\n  + Added more [Headers] tests to cover these cases.\r\n  + Also change [Header] to allow name and value types to vary.\r\n    This means we can do `message.add_headers(\"name\", value)` even if\r\n    `value` is a `String` and not an `&str` like the literal is.\r\n\r\n- Changed debug! in S3Client requests to be more standard (printing\r\n  all arguments to the method, in order).\r\n\r\n- Added wrappers SeekBasis and StreamStatus in input_stream.rs\r\n\r\n* Fix errors and trace\r\n\r\n* Remove RequestConstructionError",
          "timestamp": "2022-11-30T15:05:31-08:00",
          "tree_id": "729ef18886db520744e94f365514356bf66abc39",
          "url": "https://github.com/awslabs/s3-file-connector/commit/a7b134aade57973bc2b68eb0142fcd0bd493fdd2"
        },
        "date": 1669850735980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1426.1248,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1363.968,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1690.9312,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2634.4448,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2120.3968,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.5996,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.74,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "701a1c0b856b0273cfd9b799beb938d5d04db27b",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/701a1c0b856b0273cfd9b799beb938d5d04db27b"
        },
        "date": 1669890759839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.07421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 1.8974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.1142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 829.822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6657.427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.4892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 909.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 21.5,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2203.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "20122784559b9c85975c88fb47a13db71802009b",
          "message": "Replace criterion with fio benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/23/commits/20122784559b9c85975c88fb47a13db71802009b"
        },
        "date": 1669917530459,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.51953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start",
            "value": 2.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_delayed_start_small_file",
            "value": 4.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 799.5810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 10.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6712.29296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 159.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 10.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start",
            "value": 934.8681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_delayed_start_small_file",
            "value": 22.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2175.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.0693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.3076171875,
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
      }
    ]
  }
}