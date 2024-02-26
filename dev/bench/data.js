window.BENCHMARK_DATA = {
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
          "id": "1c00fd3084d59a8b72db2b4cf39785342ea87736",
          "message": "Release v1.4.1 (#758)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:58:36Z",
          "tree_id": "5b3ac2f4989cae21137add0b87ca6d59e3010be9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c00fd3084d59a8b72db2b4cf39785342ea87736"
        },
        "date": 1708110371532,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.39521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.99052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.19462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.38759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.94296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4722.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.62236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 91.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.07890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.93466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.6759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1312.74072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.64150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.384375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1028.701171875,
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
          "id": "e813ace5d3c0646ec032e4403413690e54faeae4",
          "message": "Add S3 Express Benchmark (#764)\n\n* Added the step of creation of files within benchmark script\r\n\r\nSigned-off-by: EC2 Default User <ec2-user@ip-172-31-25-99.us-west-2.compute.internal>\r\n\r\n* Add benchmark for s3-express\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Created different job for s3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added s3 express benchmark in bench_main workflow\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added running the benchmark on PR to s3-express-benchmark branch of main repo\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: EC2 Default User <ec2-user@ip-172-31-25-99.us-west-2.compute.internal>\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\nCo-authored-by: EC2 Default User <ec2-user@ip-172-31-25-99.us-west-2.compute.internal>",
          "timestamp": "2024-02-21T11:50:46Z",
          "tree_id": "bd11ac02b84d2091398bcd77bd2ea676ace41a95",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e813ace5d3c0646ec032e4403413690e54faeae4"
        },
        "date": 1708527394515,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 30.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.26943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 26.68662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.07119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.88369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.04130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.0580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4666.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.48388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 82.17841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1408.890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.30986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1447.453515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1673.8943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1040.6345703125,
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
          "id": "022f915f76535e517175a8e11291eedaeec92932",
          "message": "Add example for low-level CRT S3 client (#760)\n\nThis is just to have a simple benchmark for estimating entitlement when\nmost of the Rust datapath is out of the picture.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-19T17:07:30Z",
          "tree_id": "6b475fa94980471600e9c858b3f4b16043f1ad02",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/022f915f76535e517175a8e11291eedaeec92932"
        },
        "date": 1708537579242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.2380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.136328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.43037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.1578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.55576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4732.5513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.7953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1486.08359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.35947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1308.3646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.4828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1734.0154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.3681640625,
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
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708539014457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 29.7740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.1140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.26259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.27529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4698.09580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 196.37099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.4208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.93046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1430.01787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1427.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.25068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1724.606640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.801171875,
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
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708539235662,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 31.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.71884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 27.40419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.02392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.8986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4704.21708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.74892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.9818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1415.82060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.3052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1445.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.9767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1449.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.7240234375,
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
          "id": "79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce",
          "message": "Fixing the benchmark tool to be customBiggerIsBetter.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:06:41Z",
          "tree_id": "223186e5f2570285810c699dd553261fd9878ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce"
        },
        "date": 1708539443611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 30.36923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.49375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 29.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.9578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.85986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.23818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.01982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4654.682421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 200.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.89921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.9546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1587.3826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.39404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1364.4060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1374.91640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.9904296875,
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
          "id": "f7278d7f2a209770579d876deb0785d9dae54777",
          "message": "Make caching benchmark do 10 iterations.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:37:23Z",
          "tree_id": "651de54e211fda4c7d9a02874fedfacd23e7d60e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f7278d7f2a209770579d876deb0785d9dae54777"
        },
        "date": 1708545182293,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.698828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.13193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.5685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.33046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.16552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.3115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4530.63408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.61591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.70537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1468.24755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.49580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1264.94580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1403.39970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.34765625,
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
          "id": "7449756edc1d9d233ffc2da552a0842579da976c",
          "message": "Add S3 express benchmark (#767)\n\n* Added S3 express benchmark\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-21T15:18:16Z",
          "tree_id": "650b9c10c7318d3d90921c78c9fe2a19703a5004",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7449756edc1d9d233ffc2da552a0842579da976c"
        },
        "date": 1708545262619,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.4556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.42490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.96240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.71875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.6046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.0451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4548.761328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 82.131640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.42783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1413.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.03623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1452.497265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.88017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1635.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.6515625,
            "unit": "MiB/s"
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a67f78995879857cff5003ff900f5793d945abc",
          "message": "update caching docs (#763)\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>",
          "timestamp": "2024-02-22T01:12:31Z",
          "tree_id": "65a84a5bd829b46bb56d2c3fd3afd4b4fbc08a5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a67f78995879857cff5003ff900f5793d945abc"
        },
        "date": 1708576469790,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.92255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.75947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.10947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.28203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.28671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.93154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4511.8833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 203.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 88.2,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.91923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1294.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1264.915234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.9,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 940.78583984375,
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
        "date": 1708594482896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.87060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.00068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.07939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.65185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4576.0021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 199.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 75.09931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1264.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.0208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.2970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.10576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 947.14892578125,
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
        "date": 1708629023749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.29697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.0501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.31611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.481640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4551.5466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 187.61396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 77.9771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.31669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1275.9212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1201.68046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.56796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1756.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.21337890625,
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
          "id": "718420bd4960e26af23d513b82721dfe0c31c362",
          "message": "Read up to 2GB of the file to cache it.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-22T17:00:57Z",
          "tree_id": "907ddc0079b87442f2ad046324444478a59853bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/718420bd4960e26af23d513b82721dfe0c31c362"
        },
        "date": 1708636619379,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.414453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 34.18173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.08447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.14208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.09189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4589.0328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 182.79794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 89.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1313.45205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.2318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1293.8908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1495.34345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.14013671875,
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
          "id": "161c362bb584984903d547706367bddddb461cf3",
          "message": "Fix links in bug report template (#772)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-23T01:08:19Z",
          "tree_id": "2d63645277df79b68c58b30c319d09837a9ccb47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/161c362bb584984903d547706367bddddb461cf3"
        },
        "date": 1708662772306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.260546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.36201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.43486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4654.06181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 200.108203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.4921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.746875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1348.29111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.4751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1352.00673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.0955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1443.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1078.16826171875,
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
          "id": "4eed49b6e0ea74ccb4277421d955020d78aa23c1",
          "message": "Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-23T11:42:28Z",
          "tree_id": "1eb31090e878090faf5199fbac9293023ec23f16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4eed49b6e0ea74ccb4277421d955020d78aa23c1"
        },
        "date": 1708699871007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.99599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.35341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.46005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4680.9359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.7390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 82.8876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.995703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1336.09638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1329.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1435.837109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1076.4091796875,
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
          "id": "926524ce2244d9a8e3f86bbc81dcfafae8f3c94e",
          "message": "Add README notice on v1.4.0 bug (#780)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-23T14:09:00Z",
          "tree_id": "f28ce4c4598e2571dd720febbeb92ffdd155fd40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/926524ce2244d9a8e3f86bbc81dcfafae8f3c94e"
        },
        "date": 1708709506106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.5373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.21982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.35498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.54208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.040234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 93.2033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1398.17705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.42392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.91123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.93359375,
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
        "date": 1708715860133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.36455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.92744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.5126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.030859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4495.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 81.33037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.1037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1279.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.99697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.92060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1451.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.2572265625,
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
        "date": 1708800159644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.62568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.6634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.32333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4643.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.48720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1489.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.67490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.58642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1669.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1033.59912109375,
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
          "id": "6d7c19492ed895488e3bf856408ff5179345d7af",
          "message": "Add metrics for number of inodes (#781)\n\n* Make metrics gauges remember if they've changed\n\nThis is a small change to their behavior: they'll now emit if they're\nchanged to zero, whereas before they would not. But I think that's the\nbehavior we want anyway.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Convert absolute counters to gauges\n\nWe were abusing absolute counters to get the \"only emit when changed\"\nbehavior, which gauges now provide too.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Add metrics for number of inodes\n\nWe track the total number of inodes as well as tracking them by kind.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-25T22:37:25Z",
          "tree_id": "dd0745b59c7bdb11d0d31056c3a7e065f7b702a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d7c19492ed895488e3bf856408ff5179345d7af"
        },
        "date": 1708912790503,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.18779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.23125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 59.7833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.656640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4669.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.2205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.38564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.2005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1532.76728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.63876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1313.7173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.95244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1520.000390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.57509765625,
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
          "id": "080fda178ddb94d0db8bb0cc71bd9ffb588a6339",
          "message": "Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-26T10:37:07Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/080fda178ddb94d0db8bb0cc71bd9ffb588a6339"
        },
        "date": 1708955282623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.55732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 49.51728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.867578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.007421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4576.10546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 88.57607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.66162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1487.701953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1236.4240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1541.85634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1000.966796875,
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
          "id": "484a13ace84eb2496b0c1c92b1f6e74e686db25e",
          "message": "Add a client metric for number of resolved IPs for the endpoint (#778)\n\n* Add a client metric for number of resolved IPs for the endpoint\n\nThis should help us identify issues where we're not getting enough IP\ndiversity, limiting throughput.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Tweak the `aws_string` interface\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-26T18:49:33Z",
          "tree_id": "837c9b97c89aed580047307c91e0bb959972a800",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484a13ace84eb2496b0c1c92b1f6e74e686db25e"
        },
        "date": 1708985517830,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.45703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.6287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.03203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4683.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 83.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.48642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1468.10302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.4515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.51484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1547.41435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.34638671875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1708985518318,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}