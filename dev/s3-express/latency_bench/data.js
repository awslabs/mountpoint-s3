window.BENCHMARK_DATA = {
  "lastUpdate": 1709031840634,
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
      }
    ]
  }
}