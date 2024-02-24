window.BENCHMARK_DATA = {
  "lastUpdate": 1708794488221,
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
          "id": "5b8fb205480b65f470e362af50f753e3793e63bb",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-24T13:45:46Z",
          "tree_id": "0bf38fa5d14d8b4fd6a8654e92e2cbf795fcc33c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5b8fb205480b65f470e362af50f753e3793e63bb"
        },
        "date": 1708787941402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "cache_sequential_read_four_threads_direct_io",
            "value": 3620.27763671875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_direct_io_small_file",
            "value": 3987.08125,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads",
            "value": 985.04033203125,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_small_file",
            "value": 1312.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io",
            "value": 1153.2044921875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io_small_file",
            "value": 1180.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read",
            "value": 1218.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_small_file",
            "value": 1172.87958984375,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "e733013dda5afd2815cbb35f7bc295f1dcf57cca",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-24T15:36:51Z",
          "tree_id": "56f906fa8c1d7fd04e1e5ed5fd39f336a1e1b634",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e733013dda5afd2815cbb35f7bc295f1dcf57cca"
        },
        "date": 1708794487739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "cache_sequential_read_four_threads_direct_io",
            "value": 3730.766015625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_direct_io_small_file",
            "value": 3757.95,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads",
            "value": 886.80166015625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_four_threads_small_file",
            "value": 1263.01279296875,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io",
            "value": 1233.57333984375,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_direct_io_small_file",
            "value": 704.701953125,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read",
            "value": 1068.16884765625,
            "unit": "MiB/s"
          },
          {
            "name": "cache_sequential_read_small_file",
            "value": 1005.6255859375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}