window.BENCHMARK_DATA = {
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
        "date": 1725635893560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.82734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.06904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.01875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.619921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5811.92509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.4857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1269.00966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 92.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1894.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.3873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1380.67001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1266.2611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1393.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.92568359375,
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
        "date": 1725636609822,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.33427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.57880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.602734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.91220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.637890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5876.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.99228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1213.56083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 88.4029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1957.89599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.94755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1418.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1231.77373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1727.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1046.79990234375,
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
        "date": 1725644449189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.2517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.9015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.94169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.39033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.11767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.708203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5869.25625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.290625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.6662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 87.69501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1481.62783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1301.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1171.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.397265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1801.6580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.88681640625,
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
        "date": 1725649100482,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.15986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.15654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.15419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.5171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1620.32294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1288.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 87.22734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1686.11025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.18486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.92197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1301.551953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1794.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.72890625,
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
        "date": 1725894243653,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.06884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.46123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.63720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.48896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.62607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5880.758203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.62177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2296.41240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.76318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1652.7935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.61708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1341.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1311.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1403.3107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.01845703125,
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
        "date": 1726162922741,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.48125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.87958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.83251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.8728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.65517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5873.01982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2266.913671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 92.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1429.29619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.5802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1206.39462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1161.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.96669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1380.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.9263671875,
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
        "date": 1726167112374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.02626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.757421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.1791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.75947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.65166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.00751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5542.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.30224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2227.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.26787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1533.57685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.50380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1309.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1121.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.709765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1528.50078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 902.65849609375,
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
        "date": 1726232422113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.2625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.44482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.48525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5754.823046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.1634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2181.01123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.9462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1516.76103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 862.541796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1171.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1455.6451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.09814453125,
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
        "date": 1726239853587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5627.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.83056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2177.84560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.4953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1548.77529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.11787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1293.24755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.91875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.151953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.976953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1087.1064453125,
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
        "date": 1726242109387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.50263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.64033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.53876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.6779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.963671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.76826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.21806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5942.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.2310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2286.040234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.16728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1610.785546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.30361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1259.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.29208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1507.19169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 925.67685546875,
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
        "date": 1726573651490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.88408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.79541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5947.2677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2379.44755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 89.66591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1614.32119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.73837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1420.23095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1346.70458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.36298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1445.70908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1118.725,
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
        "date": 1726667720055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.80849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.48017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.63369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5903.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.0626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2330.207421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.09453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.34375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 910.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.7111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1706.4669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 974.8740234375,
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
        "date": 1726683816400,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.31650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.93486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.79619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.2080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5788.11005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.698828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2045.219140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.88974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1902.6798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.3111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1389.653515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1188.949609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.59541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1673.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.24580078125,
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
        "date": 1726742600466,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.35244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.18818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.2537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.88720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.05654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5969.89541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2229.376171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 89.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.41689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.04287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.5619140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.73212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.691015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1383.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 951.7951171875,
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
        "date": 1726743153923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.8458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.7298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.05126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.2453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.608203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.73994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5973.147265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.9404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2346.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1400.39609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1545.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.43916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1399.948828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1067.8357421875,
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
        "date": 1726747543052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.5578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.5505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.29501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.6388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.98623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.952734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5945.6240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.6365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2257.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.45302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1857.03291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.44453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1285.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.61640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1709.11318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.924609375,
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
        "date": 1726758215571,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.65341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.61826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.64697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.4740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.865625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.694921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5842.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.2775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2302.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 91.68837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1759.45146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.17890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1223.1966796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1242.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.42177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1433.16591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.6658203125,
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
        "date": 1727177651405,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.5935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.83466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.90830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.5927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5890.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.28916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2284.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.00322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1649.63828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1339.3068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.29951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1598.871875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1039.567578125,
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
        "date": 1727180376404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.82626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.56396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.40546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5953.33759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2326.4501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1807.16337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.32353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1455.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1292.1130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.90068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1458.52060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.12978515625,
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
        "date": 1727189244243,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.83115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.359765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.828515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.60126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.90546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.9763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5930.29677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.59072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2313.04384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.78662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1599.0296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.98798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1382.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1250.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.34140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1553.93076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.77255859375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1727189245697,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}