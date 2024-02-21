window.BENCHMARK_DATA = {
  "lastUpdate": 1708531912829,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce",
          "message": "Fixing the benchmark tool to be customBiggerIsBetter.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:06:41Z",
          "tree_id": "223186e5f2570285810c699dd553261fd9878ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce"
        },
        "date": 1708531912333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "cache_sequential_read_four_threads_direct_io",
            "value": 16.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_direct_io_small_file",
            "value": 3716.5927734375,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads",
            "value": 72.6640625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_small_file",
            "value": 1254.515625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io",
            "value": 214.419921875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io_small_file",
            "value": 698.1015625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read",
            "value": 346.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_small_file",
            "value": 1130.8037109375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}