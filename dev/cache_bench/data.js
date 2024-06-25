window.BENCHMARK_DATA = {
  "lastUpdate": 1719342047790,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
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
          "id": "07dcd74236ce196bf9d8082469371196615a0a72",
          "message": "Add troubleshooting entry on slow metadata operations (#897)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-04T13:10:59Z",
          "tree_id": "d9e07d1957d77bcab43eccbffb56999286eda437",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/07dcd74236ce196bf9d8082469371196615a0a72"
        },
        "date": 1717514100654,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1206.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2094.1193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 779.56904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.48017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.3,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.02421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.5912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3671.55703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4164.1099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 632.22919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1337.1119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1447.5767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1306.35849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1204.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1191.3400390625,
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
          "id": "b0bebe885ce4be9fa17461eda870057b639a7e60",
          "message": "Initialize the CRT eagerly in tests (#900)\n\nWe think the lazy initialization might be the cause of some of our\r\nissues, because it happens on an ephemeral thread. Let's try\r\ninitializing it at load time.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-06-04T16:03:34-05:00",
          "tree_id": "aedd2c8efe8ab87a73675e110b36c3109d79c677",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0bebe885ce4be9fa17461eda870057b639a7e60"
        },
        "date": 1717541610264,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1186.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2044.80673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.5251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1587.4900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.97236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.6884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.946484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 349.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3762.774609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4342.1123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 674.1326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1308.1578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1257.314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1548.58037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1411.66162109375,
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
          "distinct": true,
          "id": "93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c",
          "message": "Introduced support for the AWS_ENDPOINT_URL environment variable (#895)\n\n* Adding support for AWS_ENDPOINT_URL.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Update CHANGELOG.md and CONFIGURATION.md\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Using rust_fork to run the tests.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Addressing comments.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Adding changes from Danny.\r\n\r\nhttps://github.com/awslabs/mountpoint-s3/commit/2303bd83d0e90bcd29f707bd939d02db6633cf9b\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-06-05T09:52:55+01:00",
          "tree_id": "ed823e29b354854c3aee278096b512618a05c976",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c"
        },
        "date": 1717584081142,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1215.31826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2057.36357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.756640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1575.18603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.145703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 540.38818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.12998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 308.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3626.30634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3966.68818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 612.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1322.22255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1324.39404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 841.598046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1144.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1065.7623046875,
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
          "id": "09546c1116c91838fd799ebac0162059859689b2",
          "message": "Update CRT submodules to latest releases (#901)\n\n* Revert \"Revert s2n-tls submodule to v1.4.9 (#887)\"\r\n\r\nThis reverts commit fc60045f3358110a93b2b04e3852710b3f50020a.\r\n\r\n* Update CRT submodules to latest releases\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-05T17:04:02+01:00",
          "tree_id": "20813c387dc01e95c520b8b67874bcf18d2804ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09546c1116c91838fd799ebac0162059859689b2"
        },
        "date": 1717610052974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1200.57509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2014.2130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1554.57490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.7201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 429.1,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 212.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.0345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3666.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4098.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 620.84775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1268.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1371.88046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 803.71025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1223.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1251.81533203125,
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
          "id": "42007f7b5eb0483364cc02cbb5c62f709b5d62f3",
          "message": "Release v1.7.0 (#885)\n\n* Release v1.7.0\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update mountpoint-s3 changelog\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-06T08:12:17Z",
          "tree_id": "a40b569e9fad610659f95c091a2fa1a12051267b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42007f7b5eb0483364cc02cbb5c62f709b5d62f3"
        },
        "date": 1717668921756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.07734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2069.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.8822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1567.753515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 310.67939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 581.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 227.20537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 393.18154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3707.3572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4043.95966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 637.207421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1314.11357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1477.2271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1144.2171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1198.3529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1111.20224609375,
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
          "id": "90ea28806378796bdf64c737df40ba9b82d5c6e3",
          "message": "Skip scheduled test runs outside of upstream repository (#903)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T09:41:01Z",
          "tree_id": "5266ed1cc2e4fd2d30da057cffafc1c690121c71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90ea28806378796bdf64c737df40ba9b82d5c6e3"
        },
        "date": 1718019827765,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.030859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 836.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1619.51982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 326.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.54189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 221.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.24931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3876.9078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4163.58837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 612.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1289.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1285.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1011.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1161.21298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1080.7072265625,
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
          "id": "cbc8ec8d3886da07430f583d0121d028b5dfd020",
          "message": "Update integration test schedule from hourly to daily at 06:45Z (#905)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T10:40:02Z",
          "tree_id": "b0bc74cfd8abca7ffdd78752655c02d6a08a56d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cbc8ec8d3886da07430f583d0121d028b5dfd020"
        },
        "date": 1718023398479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1225.04541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2084.70751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.91650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1604.3869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 345.53544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 575.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.03046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.02880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3845.1490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3941.87060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 600.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1333.89091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1295.25732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1328.1169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1206.159375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1247.30205078125,
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
          "id": "650269904f617f96879f7ee7d93f8bca4e5096e5",
          "message": "Support backpressure for GetObject request (#889)\n\n* Support backpressure for GetObject request\n\nThe CRT has flow-control window feature in the read path (https://github.com/awslabs/aws-c-s3/pull/213)\nto let users control how fast they want to download data. This change\nexposes the backpressure read mechanism in the `get_object` interface.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-11T15:27:54Z",
          "tree_id": "a75778e4c5aba8ae8bf944e5ad9887160f4855e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/650269904f617f96879f7ee7d93f8bca4e5096e5"
        },
        "date": 1718127268593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.64638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2098.88466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 764.922265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1541.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 334.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 442.91484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.554296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3719.136328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4072.825390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 586.8955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1304.61083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1432.4068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 767.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1252.5453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.66767578125,
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
          "id": "19faf760f3de5dc631aa68594564d926e9a667d3",
          "message": "Restrict `--sse-kms-key-id` to Key ARN only (#908)\n\n* Restrict --sse-kms-key-id to Key ARN only\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix inexistent key test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove Key ID from the doc, fix tested log message\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix format\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-12T13:24:51Z",
          "tree_id": "db0b9700e1691e1efffbf8e6915a1dbb43350d8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19faf760f3de5dc631aa68594564d926e9a667d3"
        },
        "date": 1718206087357,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1159.70966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2058.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.61123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1602.24365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.6619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.37509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 249.9921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.26767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3654.0943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4272.3787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 588.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1324.38125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1362.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 765.82568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1155.135546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1034.793359375,
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
          "id": "e62951e87a9cc7f19ffe23f1637d531ca8ea8cab",
          "message": "Add additional logging around mount timeout failures (#910)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-13T10:12:48Z",
          "tree_id": "5eba9ca1b6f75e289e266b3c6c465e7ef91fa587",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e62951e87a9cc7f19ffe23f1637d531ca8ea8cab"
        },
        "date": 1718281024236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.04072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2099.17958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1613.0921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 236.3142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 274.26943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3999.39375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3843.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 662.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1478.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1243.78544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1433.89326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1178.54189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1238.3130859375,
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
          "id": "657cc787ae838c606525a87d3ff8e7b8926ad0ac",
          "message": "Fix clippy error (#911)\n\nClippy was reporting this error:\n```\nerror: this expression always evaluates to false\n  --> mountpoint-s3/src/build_info.rs:24:44\n   |\n24 |         const UNOFFICIAL_SUFFIX: &str = if COMMIT_HASH_STR.is_empty() {\n   |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#const_is_empty\n   = note: `-D clippy::const-is-empty` implied by `-D clippy::all`\n```\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-13T16:33:43Z",
          "tree_id": "cb55b11bca02b560660ce481e50e5c9cb830e645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/657cc787ae838c606525a87d3ff8e7b8926ad0ac"
        },
        "date": 1718303887455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.7623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2094.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 778.25166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1576.36015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 428.60107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.06064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.5123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3905.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4055.97197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 636.7501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1259.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1124.87021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1095.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1206.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1031.49443359375,
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718362672496,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.66611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2083.03017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.438671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1595.71826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.923046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 483.81513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.55830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 296.14111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3665.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4097.26630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 582.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1471.87080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1385.52333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1370.16123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1163.6666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 886.2755859375,
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
          "id": "5795b38fe73ecafc76b682bc7ba44168568623f0",
          "message": "Add guidance on KMS permissions when using SSE-KMS (#913)\n\n* Add guidance on KMS permissions when using SSE-KMS\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix missing permission for object upload, add link to docs for more info\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-14T12:03:38Z",
          "tree_id": "7facd9a6adbcaa6166c6561bc50b8909f5977d6c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5795b38fe73ecafc76b682bc7ba44168568623f0"
        },
        "date": 1718374036641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1217.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2060.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.7474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1560.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 354.05517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 423.51376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 299.7369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3759.46064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4170.075390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 593.030078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1407.84365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1266.9546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 973.75966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.78955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1238.5283203125,
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
          "id": "78df1aeda22f7cdf9a34920596f863cfd4727282",
          "message": "Fix the backpressure test (#916)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-17T15:59:24Z",
          "tree_id": "b2e76b42513144048a25da6e79848f8d1d150aed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78df1aeda22f7cdf9a34920596f863cfd4727282"
        },
        "date": 1718647525980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1257.890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2083.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.12861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1598.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 323.02587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 206.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3796.16455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4124.2201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 610.49560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.694921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1371.80625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 794.74375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1254.203515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 946.16396484375,
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
          "id": "e299e2b71b3e5a2882b2d16035df6875476b3588",
          "message": "Fix an issue where mountpoint-s3-client could interpret a HTTP 206 Partial success response as an error (#917)\n\nWe are removing a workaround in mountpoint-s3-client that reduced the number of requests to S3 and is no longer needed. When introduced in #285, the workaround used a default CRT meta-request instead of an auto-ranged-get for small requests, which avoided a redundant HeadObject request that the CRT performed on every auto-ranged-get. Since then, the CRT has been updated to avoid the extra requests when a range is specified, so we can always use auto-ranged-get.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-06-17T18:32:41Z",
          "tree_id": "cb9b94acd16984d684e6374d36e6b4db602f87c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e299e2b71b3e5a2882b2d16035df6875476b3588"
        },
        "date": 1718656621574,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.94443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2113.34912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.43564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1570.76884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 549.9328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 251.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.17919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3780.49912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4034.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 609.27392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1350.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1392.390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1096.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1244.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1067.71455078125,
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
          "id": "d3b632d1b98dd32f37ab7ba0633c825933ececb9",
          "message": "Release v1.7.2 (#918)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-17T19:11:24Z",
          "tree_id": "8e4df354984977ea97c50a2386c3c6f737fadbc2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3b632d1b98dd32f37ab7ba0633c825933ececb9"
        },
        "date": 1718658920559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1212.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2064.28564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1595.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.54794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 430.04013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.00380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 280.41943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3816.71982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4116.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 608.7376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1287.24873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1401.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1476.00703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.29208984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 991.74306640625,
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
          "id": "f01381ae6ed1562f413769354f82bb371de80cff",
          "message": "Provide `ErrorMetadata` to `crate::fuse` layer with errors from the client (#882)\n\n* Provide ErrorMetadata with S3RequestError::Forbidden (up to fuse.rs on lookup)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* rename EMPTY_ERROR_METADATA, add InodeError::client_error constructor\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Provide error_code, bucket and key with InodeError::ClientError\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Allow detecting throttled on lookup()\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the throttle error on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the forbidden/404 on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* CI fixes\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Propogate error message from S3 for frobidden and http_status for unhandled error\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor err! macro\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove logging, disable forbidden test for express, move policy helper to mod.rs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move error_code, bucket and key out from the client crate\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Return RequestCanceled on AWS_ERROR_S3_CANCELED\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* simplify client_error constructor, rename metadata fields, flatten error parser calls\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* allow constructing metadata on the flight in ProvideErrorMetadata\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Delete big comment, flatten or_else chain, provide context in readdir\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove box from forbidden\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a comment explaining error parsing logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-19T12:53:22Z",
          "tree_id": "2bb3cf214ef4c7ccc42ff08218328109968c49c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f01381ae6ed1562f413769354f82bb371de80cff"
        },
        "date": 1718809293556,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1188.044140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2058.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.30615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.3263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.50439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 519.07392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 222.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.92939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3610.59736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4058.92587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 610.21142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1377.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1292.8322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 844.835546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1240.17314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1067.858203125,
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
          "id": "2dcb7cb8a3f6702ba552408b926613399ae94196",
          "message": "Use MaybeUninit when getting thread ID from CRT request metrics (#922)\n\n* Use MaybeUninit when getting thread ID from CRT request metrics\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Drop null pointer check since we know the pointer is always non-null (even if the memory may not be initialized)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T15:21:29Z",
          "tree_id": "623d50483288af987dbff1f44eddf3b5d41ab4be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2dcb7cb8a3f6702ba552408b926613399ae94196"
        },
        "date": 1719336413845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1209.177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2046.0796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 769.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1546.27421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.57783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 439.2349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.2095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.058203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3783.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4073.09697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 514.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1303.2693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 997.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1025.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1122.06318359375,
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
          "id": "115cc6fa7954ee89fb3890e3bdbcc8ae01130680",
          "message": "Add troubleshooting entry on uploads larger than 78GiB (#921)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T16:17:48Z",
          "tree_id": "f88e27bbb84947b8bcc8b1256875d8b979d97760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/115cc6fa7954ee89fb3890e3bdbcc8ae01130680"
        },
        "date": 1719339536362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1235.33349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2088.4349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.468359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1562.48251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.73544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.937890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.29853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3774.274609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4073.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 563.67822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1329.72353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 756.12841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1253.7169921875,
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
          "distinct": false,
          "id": "4569a4b0c09369657c46950d6b8d9ae2dbd38b02",
          "message": "Bump docker/build-push-action from 5 to 6 (#920)\n\nBumps [docker/build-push-action](https://github.com/docker/build-push-action) from 5 to 6.\n- [Release notes](https://github.com/docker/build-push-action/releases)\n- [Commits](https://github.com/docker/build-push-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: docker/build-push-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-25T16:56:48Z",
          "tree_id": "ef31ea4885526c9a8bf6cc569ccd57c1bd867640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4569a4b0c09369657c46950d6b8d9ae2dbd38b02"
        },
        "date": 1719342047269,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2168.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.0150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 354.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.51982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 299.20625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3976.6556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4031.84111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 563.64912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1300.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.02333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1533.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.4537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1357.48076171875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}