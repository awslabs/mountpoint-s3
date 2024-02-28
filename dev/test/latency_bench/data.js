window.BENCHMARK_DATA = {
  "lastUpdate": 1709114641233,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "442406015d8b3ff90a36b82c0802b353ed278e4a",
          "message": "Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T09:53:12Z",
          "tree_id": "67abb61b8c9cc3949a9f0fbc92a67ddfff6b7d8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/442406015d8b3ff90a36b82c0802b353ed278e4a"
        },
        "date": 1709114630136,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.229,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.57504340000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.3161648,
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
          "id": "442406015d8b3ff90a36b82c0802b353ed278e4a",
          "message": "Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T09:53:12Z",
          "tree_id": "67abb61b8c9cc3949a9f0fbc92a67ddfff6b7d8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/442406015d8b3ff90a36b82c0802b353ed278e4a"
        },
        "date": 1709114640662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.538,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.296,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.499,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.0369663,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 25.0615723,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}