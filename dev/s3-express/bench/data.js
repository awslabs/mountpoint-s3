window.BENCHMARK_DATA = {
  "lastUpdate": 1708715942036,
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
          "id": "7449756edc1d9d233ffc2da552a0842579da976c",
          "message": "Add S3 express benchmark (#767)\n\n* Added S3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-21T15:18:16Z",
          "tree_id": "650b9c10c7318d3d90921c78c9fe2a19703a5004",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7449756edc1d9d233ffc2da552a0842579da976c"
        },
        "date": 1708545254620,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.0783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.2875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 75.38662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 114.7529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.60068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.2498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4982.06171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 398.3380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 147.782421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 119.46181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1562.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 72.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1355.83974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 74.37392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1491.30283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.134375,
            "unit": "MiB/s"
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
          "id": "eeadfe573e86ef4ce726209947ba25e999fdb931",
          "message": "Improve S3 express benchmark (#773)\n\n* Added S3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Made the output file for benchmark result same for S3 express and standard S3\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Adding create only instead on create on open as it is failing\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T06:27:14Z",
          "tree_id": "681c731de325a8a88bb291e1fdb2b4a5c6d8decf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eeadfe573e86ef4ce726209947ba25e999fdb931"
        },
        "date": 1708594472605,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 77.619921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.10078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 73.17890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 115.353125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.69375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5040.3423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 396.3234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 154.2994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 117.933203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1542.31005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 73.76298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1497.85712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 75.266015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1466.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.198828125,
            "unit": "MiB/s"
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
        "date": 1708629047563,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.040625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.18486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 119.18779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.39951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.30576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.2427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5020.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 399.6779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 158.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 124.4505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1481.29931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 74.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1592.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 76.96376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1579.2228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.624609375,
            "unit": "MiB/s"
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
        "date": 1708715941174,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 108.809765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 120.20830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.15166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5001.3583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 399.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 149.1521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 123.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1581.35263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 76.06533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1365.7873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 78.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.0919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1018.651953125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}