window.BENCHMARK_DATA = {
  "lastUpdate": 1667397045999,
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
          "id": "2ec3a27bed7883de488373caa0069f65811768a6",
          "message": "Fix missing permission",
          "timestamp": "2022-11-01T13:58:58Z",
          "tree_id": "9c0ce11ac9f94422402e27d0b3a562e5f30decbb",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2ec3a27bed7883de488373caa0069f65811768a6"
        },
        "date": 1667312137320,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 72554,
            "range": "± 12762",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 9299553519,
            "range": "± 1949379157",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 8188106273,
            "range": "± 1372572382",
            "unit": "ns/iter"
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
          "id": "2ec3a27bed7883de488373caa0069f65811768a6",
          "message": "Fix missing permission",
          "timestamp": "2022-11-01T13:58:58Z",
          "tree_id": "9c0ce11ac9f94422402e27d0b3a562e5f30decbb",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2ec3a27bed7883de488373caa0069f65811768a6"
        },
        "date": 1667313274107,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 63426,
            "range": "± 4050",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2575355454,
            "range": "± 152183174",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2297846188,
            "range": "± 113849772",
            "unit": "ns/iter"
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
          "id": "b28493d44c95f4df19695971924c82835aa2e95c",
          "message": "Move bench job to self-hosted runner",
          "timestamp": "2022-11-02T13:44:43Z",
          "tree_id": "51066163e75c2ae4096fd6d7ba137997aed8da06",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b28493d44c95f4df19695971924c82835aa2e95c"
        },
        "date": 1667397044263,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 68346,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1203659675,
            "range": "± 217975352",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 918108402,
            "range": "± 3231499576",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}