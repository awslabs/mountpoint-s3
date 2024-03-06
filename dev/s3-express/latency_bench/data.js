window.BENCHMARK_DATA = {
  "lastUpdate": 1709744520974,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "efa090ffcf47934f2a3d7fc2e2c1031fd314e4a8",
          "message": "Added multiple threads for S3 express benchmark (#774)\n\n* Added S3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made the output file for benchmark result same for S3 express and standard S3\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Adding create only instead on create on open as it is failing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added threads for file creation fio job\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T08:12:32Z",
          "tree_id": "496e250bbb94ad991870b773633cc1977dca70d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/efa090ffcf47934f2a3d7fc2e2c1031fd314e4a8"
        },
        "date": 1708592171369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.536,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.3,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 6.824,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.6243486,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.275138600000002,
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
          "distinct": true,
          "id": "fa20a26234a485999f73272337a6d6525aab9dee",
          "message": "added 20 threads for creating files for S3 express benchmark (#776)\n\n* Added S3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made the output file for benchmark result same for S3 express and standard S3\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Adding create only instead on create on open as it is failing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added threads for file creation fio job\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added 20 threads to create 100000 files\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T09:44:13Z",
          "tree_id": "93384b6bcc3d3a7a46c8498397b812a40fd29c73",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa20a26234a485999f73272337a6d6525aab9dee"
        },
        "date": 1708597805698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.544,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.265,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.301,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.8160137,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.1051341,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "158502535+andrewatamzn@users.noreply.github.com",
            "name": "andrewatamzn",
            "username": "andrewatamzn"
          },
          "committer": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "30b2b6ac4957ab92058b2d51db3b0b0a9404aeea",
          "message": "update caching docs (#763)\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>",
          "timestamp": "2024-02-22T11:33:26Z",
          "tree_id": "0977e18d85617a7c8b76805983ce19f1132d9fae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/30b2b6ac4957ab92058b2d51db3b0b0a9404aeea"
        },
        "date": 1708604211233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.541,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.268,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 6.75,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.629948300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.5997353,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "d74df7690cc7b288d0de6a0dd2a7049c31460d6f",
          "message": "Changed the number of threads to 50 for creating 100000 files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T12:54:18Z",
          "tree_id": "8802628707fc907211af8e72e1b0adcab28906d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d74df7690cc7b288d0de6a0dd2a7049c31460d6f"
        },
        "date": 1708608952432,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.525,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.265,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.229,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.2408895,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.572957,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "e97d10023952f31465635a703f63adf184e77f04",
          "message": "Changed the number of threads to 40 for creating 100000 files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T14:35:19Z",
          "tree_id": "2046c187bd61bef040b04848a2889017d93241a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e97d10023952f31465635a703f63adf184e77f04"
        },
        "date": 1708615143584,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.532,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.224,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.293,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.067795800000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.5345989,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "f005b582948894e38053679841fc64a9b70d516d",
          "message": "Checking the number of files before starting fio job for creating files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T15:40:59Z",
          "tree_id": "561230d5e2d4d99b9212690b82ed821fc14cef74",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f005b582948894e38053679841fc64a9b70d516d"
        },
        "date": 1708616908101,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "time_to_first_byte_read",
            "value": 22.2964579,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.7652692,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "6cf6753be2d7193ca551fd72114734fe151886a2",
          "message": "Checking the number of files before starting fio job for creating files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T16:02:08Z",
          "tree_id": "c55bd481f52f5e9fec49276ffa3dd1b77f2788b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cf6753be2d7193ca551fd72114734fe151886a2"
        },
        "date": 1708620237459,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.52,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.264,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.312,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.372809399999998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.9862335,
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
        "date": 1708707453591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.544,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.291,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 0.03,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.503238399999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3236407,
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
        "date": 1708949978297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.146,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.535,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.294,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.91,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.5544919,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.749873,
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
        "date": 1708965396852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.552,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.28,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.54,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 25.0945013,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.5750171,
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
        "date": 1709031840138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.546,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.291,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.182,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 25.2974094,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.334791,
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
        "date": 1709115512152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.526,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.272,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.267,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.731965,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.578615199999998,
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
          "distinct": true,
          "id": "f090603d4cdb89f5022f69981b094c0a872ab397",
          "message": "Add benchmarks for S3 express one zone bucket and automate creation of files for benchmark (#779)\n\n* Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T15:42:50Z",
          "tree_id": "b6c86900e6c112289d56d50798eb4440b4a9debd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f090603d4cdb89f5022f69981b094c0a872ab397"
        },
        "date": 1709136558685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.526,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.213,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.421,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.3975324,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.8166779,
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
          "id": "abead60f771717e148f980da744c30eccecebceb",
          "message": "Bump mio from 0.8.10 to 0.8.11 (#798)\n\nBumps [mio](https://github.com/tokio-rs/mio) from 0.8.10 to 0.8.11.\n- [Release notes](https://github.com/tokio-rs/mio/releases)\n- [Changelog](https://github.com/tokio-rs/mio/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/tokio-rs/mio/compare/v0.8.10...v0.8.11)\n\n---\nupdated-dependencies:\n- dependency-name: mio\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-05T09:41:32Z",
          "tree_id": "9069d3c52a4b00123004e3bc9eb8a67ca6b70d9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abead60f771717e148f980da744c30eccecebceb"
        },
        "date": 1709633374714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.52,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.274,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.508,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.6282618,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.2094862,
            "unit": "milliseconds"
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
        "date": 1709720354424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.208,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.572,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.385,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.382,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.404640899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.8370212,
            "unit": "milliseconds"
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
        "date": 1709734973844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.549,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.306,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.572,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.4396525,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.418074100000002,
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
          "id": "ab39c1d4400a9bba3804d420065c1dbb1b931d70",
          "message": "Cancel S3 requests when dropped  (#794)\n\n* Cancel S3 requests when dropped\n\nToday we don't cancel S3 requests when dropped. For our prefetcher that\nmeans we keep streaming (up to) 2GB of data that will never be used.\nThis change cancels in-flight requests when dropped, so that the CRT\nwill stop streaming them. Some bytes might still be in flight or\ndelivered, which is fine. Canceling requests is a no-op if they've\nalready completed.\n\nThe tricky case for this change is PutObject. Our current implementation\nof `PutObjectRequest::write` blocks until the bytes it provides are\nconsumed by the client. But sometimes the client might stop reading from\nthe stream because the request has failed. That case happens to work\ntoday because we don't retain a reference to the meta request ourselves,\nand so the failed request's destructors run immediately after the\nfailure, which unblocks the writer and returns it an error. But now we do\nhold onto a reference, and the destructors can't run until the last\nreference is released, so the writer is never unblocked. To fix this, we\nmake the `write` and `complete` methods of the `PutObjectRequest` poll\n_both_ the write stream and the request itself in parallel. If the request\ncompletes, this gives us a chance to bail out of the write rather than\nblocking forever.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adjust client metrics to account for canceled requests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Disable large object PUT abort test\n\nThe CRT abort is best-effort -- part uploads can succeed after the Abort\nsucceeds, which effectively recreates the MPU. This is mentioned in the\nAbortMultipartUpload documentation.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Expand a comment\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-06T16:33:24Z",
          "tree_id": "00274afc220c34e17d320e2f157ee7321d4ef760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab39c1d4400a9bba3804d420065c1dbb1b931d70"
        },
        "date": 1709744520486,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.265,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.035,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.910877600000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.2135581,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}