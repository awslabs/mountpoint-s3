window.BENCHMARK_DATA = {
  "lastUpdate": 1681874263324,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "d41a4d942fd9da68d5f6d669653be37b12f12749",
          "message": "Add benchmark for readdir (#213)\n\n* Add benchmark for readdir\r\n\r\nIn this commit, we add a new benchmark script for readdir operation. The\r\nbenchmark itself is pretty simple, we're just doing ls against pre-generated\r\ndirectories with different size. However, comparing the results is a bit\r\ntricky because we're now measuring latency instead of throughput which\r\nis what we do in the existing benchmark.\r\n\r\nOur current CI workflows don't support this scenario, so we have to\r\nintroduce another workflow job just for this kind of benchmark. This new\r\njob will run the latency benchmark script, compare the new result with\r\nthe previous one, and store them at dev/latency_bench path.\r\n\r\nMax number of data points for the chart is also added in this commit to\r\nkeep the chart clean.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Refactor bench script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update benchmarking doc and add some fio files\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-04-18T22:09:48-05:00",
          "tree_id": "a408ce70aaa726c3f9c2ab00670f6305a24aae8e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d41a4d942fd9da68d5f6d669653be37b12f12749"
        },
        "date": 1681874262829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.157,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.758,
            "unit": "seconds"
          }
        ]
      }
    ]
  }
}