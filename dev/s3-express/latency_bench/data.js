window.BENCHMARK_DATA = {
  "lastUpdate": 1708592171857,
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
      }
    ]
  }
}