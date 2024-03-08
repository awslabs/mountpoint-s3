window.BENCHMARK_DATA = {
  "lastUpdate": 1709915750383,
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
          "id": "080fda178ddb94d0db8bb0cc71bd9ffb588a6339",
          "message": "Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-26T10:37:07Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/080fda178ddb94d0db8bb0cc71bd9ffb588a6339"
        },
        "date": 1708955282039,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 73.5818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 115.50126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.54482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.2279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.0220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5038.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 406.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 150.3833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 115.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1447.67373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 74.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1624.25107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 74.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1475.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1002.2591796875,
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
          "id": "310cf4387fddac8a9b9a517bb07643a6b9f12c37",
          "message": "Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T10:06:50Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/310cf4387fddac8a9b9a517bb07643a6b9f12c37"
        },
        "date": 1709126089918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 77.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.06181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.15126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.44189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5065.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 396.90556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 152.7626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 117.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1781.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 70.804296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1645.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 72.7076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1540.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1099.838671875,
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
          "id": "f090603d4cdb89f5022f69981b094c0a872ab397",
          "message": "Add benchmarks for S3 express one zone bucket and automate creation of files for benchmark (#779)\n\n* Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T15:42:50Z",
          "tree_id": "b6c86900e6c112289d56d50798eb4440b4a9debd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f090603d4cdb89f5022f69981b094c0a872ab397"
        },
        "date": 1709147115320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.31396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.8134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 119.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.11572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.3248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4996.8,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 403.93125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 155.47294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 124.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1430.95,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 76.3796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1432.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 77.065234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1581.21083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.98330078125,
            "unit": "MiB/s"
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
        "date": 1709643942576,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 108.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 75.29111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 118.07685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.0666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.79677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.9361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5155.64501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 401.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 150.41357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 122.0798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1502.97333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 75.117578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.90947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 76.721875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1494.496875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.17109375,
            "unit": "MiB/s"
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
        "date": 1709730952310,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 75.0150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 117.15546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.57685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 18.3287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.854296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.64521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5287.14013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 408.079296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 121.2275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 122.69775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1801.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 80.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1677.99287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 78.45400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1824.9037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.12001953125,
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
          "id": "0a7b9e94f31c7e986f11c7b9c72558585805750d",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-06T10:24:42Z",
          "tree_id": "089297cc57ed3e4647366f70d418693bb34aab18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a7b9e94f31c7e986f11c7b9c72558585805750d"
        },
        "date": 1709731967228,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.523046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.04033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 115.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.46708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.68310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.18310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.65849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5324.790625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 411.3673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 129.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 119.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1852.81845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 79.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1476.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 77.507421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1429.76083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 936.4544921875,
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
          "id": "ab39c1d4400a9bba3804d420065c1dbb1b931d70",
          "message": "Cancel S3 requests when dropped  (#794)\n\n* Cancel S3 requests when dropped\n\nToday we don't cancel S3 requests when dropped. For our prefetcher that\nmeans we keep streaming (up to) 2GB of data that will never be used.\nThis change cancels in-flight requests when dropped, so that the CRT\nwill stop streaming them. Some bytes might still be in flight or\ndelivered, which is fine. Canceling requests is a no-op if they've\nalready completed.\n\nThe tricky case for this change is PutObject. Our current implementation\nof `PutObjectRequest::write` blocks until the bytes it provides are\nconsumed by the client. But sometimes the client might stop reading from\nthe stream because the request has failed. That case happens to work\ntoday because we don't retain a reference to the meta request ourselves,\nand so the failed request's destructors run immediately after the\nfailure, which unblocks the writer and returns it an error. But now we do\nhold onto a reference, and the destructors can't run until the last\nreference is released, so the writer is never unblocked. To fix this, we\nmake the `write` and `complete` methods of the `PutObjectRequest` poll\n_both_ the write stream and the request itself in parallel. If the request\ncompletes, this gives us a chance to bail out of the write rather than\nblocking forever.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adjust client metrics to account for canceled requests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Disable large object PUT abort test\n\nThe CRT abort is best-effort -- part uploads can succeed after the Abort\nsucceeds, which effectively recreates the MPU. This is mentioned in the\nAbortMultipartUpload documentation.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Expand a comment\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-06T16:33:24Z",
          "tree_id": "00274afc220c34e17d320e2f157ee7321d4ef760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab39c1d4400a9bba3804d420065c1dbb1b931d70"
        },
        "date": 1709755132308,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.33720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.6111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.7232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 110.66650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.2474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.31181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.1515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 15.83134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5325.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 412.55625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 123.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 114.2728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1852.171484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 72.63505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1439.48486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 76.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1628.16552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.0216796875,
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
          "distinct": false,
          "id": "d54a8412066700f2e688fa1eac1c939c8233cb72",
          "message": "Bump CRT dependecies (#796)\n\n* Bump CRT dependecies\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Additional bump for aws-c-common fix\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T00:41:56Z",
          "tree_id": "92dab3c0176f0a9a1af9ce7a717463d44ac5a0f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d54a8412066700f2e688fa1eac1c939c8233cb72"
        },
        "date": 1709784217148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.42021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 108.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.91103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 113.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.58837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.37578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.36689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5616.93720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 405.721875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 114.9994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 114.48564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1814.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 72.52431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1643.67470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 77.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1898.87216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.9173828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "896c6d3c80b3c5442679f637c0fc7fac83e90e52",
          "message": "Account already downloaded data when resetting a prefetcher (#797)\n\n* Account already downloaded data when resetting a prefetcher\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor to use absolute offsets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refine naming and imports\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use std::sync, reorder code in push\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [2]\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [3], ignore shuttle prefetch tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Be precise when checking available data\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:42:38Z",
          "tree_id": "beac76695707ccd9f719bc5c80951555f3be7622",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896c6d3c80b3c5442679f637c0fc7fac83e90e52"
        },
        "date": 1709784254678,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.11513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.4224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.5123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.0193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.2916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5588.2751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 405.05166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 113.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 120.5125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1768.85029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 75.1255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1653.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 77.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.9556640625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "vladvolodkin@gmail.com",
            "name": "Volodkin Vladislav",
            "username": "vladem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fbc8e9d73079fe762d60806f223d9ab0a0eaa72",
          "message": "Add fio job to benchmark read-skip-read pattern (#799)\n\n* Add fio job to benchmark read-skip-read pattern\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the benchmark\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:43:29Z",
          "tree_id": "0c5d6e9e6258e17df23168ee6be7468cd9f4cac0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbc8e9d73079fe762d60806f223d9ab0a0eaa72"
        },
        "date": 1709816139723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.15595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.4845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 74.30634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 110.73447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.1642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 10.85615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 15.9578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5673.56572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 401.21982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 106.81513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 112.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1894.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 74.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1466.626953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1328.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 74.53623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1528.803125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.39736328125,
            "unit": "MiB/s"
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
          "id": "d61d688f93ffb3f35fa1019a0b36f6c2e8228107",
          "message": "Record seek_distance metrics whether or not the seek triggers a reset (#800)\n\nBy always recording the length of a seek attempt, we should get a better picture of the read pattern. The `out_of_order` metric can already be used to determine whether or not the seek could be performed without resetting the prefetcher.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T11:16:43Z",
          "tree_id": "ed96e6c7ad34c0ec4ac7da40278fda7b058f06f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d61d688f93ffb3f35fa1019a0b36f6c2e8228107"
        },
        "date": 1709825904081,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 78.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 109.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.29931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 114.93466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.965234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.00791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.71630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5586.766015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 404.490625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 122.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 111.49033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2080.5693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 75.50859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1513.69990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1322.41162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 76.2150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1751.31474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1093.9095703125,
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
          "id": "846f026e87ade3e59afbaabaa5c2adf9967aee5f",
          "message": "Add request ID to meta request failures and add tests (#790)\n\nA side effect of https://github.com/awslabs/mountpoint-s3/pull/669 was\nthat there's now no way to get request IDs for failed requests at the\ndefault logging settings, as only DEBUG-level messages include the\nrequest IDs. This change adds request IDs to the meta request failure\nmessage when available, so that these WARN-level messages still include\nrequest IDs.\n\nI also added some new infrastructure to test metrics and log messages.\nFor metrics, we build a new `metrics::Recorder` that collects all the\nmetrics and can then be searched to find them. For log messages, we\nbuild a `tracing_subscriber::Layer` that collects all tracing events\nemitted while enabled. In both cases, the new objects aren't thread\nsafe, as both `Recorder`s and `Layer`s are global state. So these tests\nneed to continue to use `rusty_fork` to split into a new process per\ntest.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T12:05:58Z",
          "tree_id": "0325df875d36498b013aeec3f2f2e81a05f60972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/846f026e87ade3e59afbaabaa5c2adf9967aee5f"
        },
        "date": 1709831661775,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 77.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.56923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.215625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 111.83896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.5861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.40009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.403515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5676.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 403.81484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 127.98798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 114.7197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1848.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 77.7841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1624.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1347.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 74.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1627.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.214453125,
            "unit": "MiB/s"
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
          "id": "56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647",
          "message": "Release v1.5.0 (#801)\n\n* Release v1.5.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add CRT change\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T14:49:54Z",
          "tree_id": "b6750d5d5d3efa2d4f04a0ea66ab5d785cc30a75",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647"
        },
        "date": 1709845756486,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 78.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.50078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.8537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.61455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5636.81875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 412.75078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 125.39951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 123.9251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1785.63115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 77.07197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1637.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.25361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 78.3849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1514.866796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 944.94189453125,
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
          "id": "9aecc8cda680228b149d8aba37c6ce5ddfd12a12",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T17:52:08Z",
          "tree_id": "98a46e7fa1f8d9345aecbb5a800173d55fc12440",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9aecc8cda680228b149d8aba37c6ce5ddfd12a12"
        },
        "date": 1709861021675,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 77.90869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 107.5560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 75.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 111.9103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.49580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.02841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 10.96435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 15.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5699,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 412.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 126.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 110.2357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1966.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 71.98076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1489.019921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1313.24541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 74.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1444.04140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.107421875,
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
          "distinct": false,
          "id": "f5436c6ac8ae5438932b0a0fa629285780f8eddd",
          "message": "Re-enable Shuttle tests (#804)\n\nThe Shuttle issue was fixed by https://github.com/awslabs/shuttle/pull/139\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T22:18:35Z",
          "tree_id": "e4c1fe6bba7a8221b14b84ac07af56790a49335d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5436c6ac8ae5438932b0a0fa629285780f8eddd"
        },
        "date": 1709862725259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 81.03837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.141015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.70048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.36298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.5880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.1009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.6453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 402.523046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 113.79384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 123.815234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1861.99814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 77.1470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1513.38232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1390.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 80.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.7408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1149.38310546875,
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
          "id": "afd42dd6f8eb33a2d6546173fd87c616f4cfe11b",
          "message": "Adding benchmarks that use caching. (#783)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T22:21:07Z",
          "tree_id": "b721d6a5afd6d6f0111c172beda953b9be70f590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/afd42dd6f8eb33a2d6546173fd87c616f4cfe11b"
        },
        "date": 1709862813643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.525,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 108.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.8259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 113.1330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 11.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 16.7703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.41494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 16.53583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5597.6681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 410.16728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 112.88876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 115.08916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1766.473046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 73.2427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1471.16787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1242.441796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 75.9623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1440.012109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.116015625,
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
          "id": "004d41315be731d1f9d02e4eafb5e587e53abe9f",
          "message": "Update documentation for benchmarking and make env var name consistent.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T08:20:49Z",
          "tree_id": "d58949c7e48899056f818a9f160a418064c88381",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/004d41315be731d1f9d02e4eafb5e587e53abe9f"
        },
        "date": 1709893259394,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.59677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.05712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 76.4412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.13828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5497.3845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 407.6951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 116.34716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 118.1056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2078.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 74.8751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1387.78623046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1261.31240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 78.7556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1718.61181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.7380859375,
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
          "id": "ab4e842e803359539932d003615ea34da4227f0d",
          "message": "Do not mount local storage by default and update documentation.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T12:09:06Z",
          "tree_id": "43e834235e9caa5c2bba8c7a3b0638baefc7e980",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab4e842e803359539932d003615ea34da4227f0d"
        },
        "date": 1709905974550,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.25771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 111.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.84443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 116.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.405859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 18.0123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.43916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.466015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5489.62158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 405.5373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 121.21220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 122.00322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1772.888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 79.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1334.10888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 78.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1517.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1104.56708984375,
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
          "id": "471abc12a33ce76139d7f094682bd41aedc6898c",
          "message": "Benchmarks improvements (#806)\n\n* Use same fio files for caching benchmarks and remove start delay.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Switching from high-performance to nvme-high-performance runner.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Update documentation for benchmarking and make env var name consistent.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Do not mount local storage by default and update documentation.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T13:34:57Z",
          "tree_id": "43e834235e9caa5c2bba8c7a3b0638baefc7e980",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/471abc12a33ce76139d7f094682bd41aedc6898c"
        },
        "date": 1709911947991,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 80.58427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 110.76845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.71611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 117.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.4646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.70224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 12.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5499.42353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 404.68916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 125.5763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 121.19697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2038.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 78.49130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1523.338671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1241.14951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 79.66328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.17099609375,
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
          "id": "4fd8601ed5aea8d3fb2cf5a12f959b5021fb15f1",
          "message": "Publish new crate versions (#802)\n\nThis is to get the recent CRT fixes out for the PyTorch connector. I\nalso bumped the `mountpoint-s3-crt-sys` crate version to be in lockstep\nwith `mountpoint-s3-crt`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-08T14:37:37Z",
          "tree_id": "00e9a7a7e0cb0cb6312af1a3550146939dc3d46d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4fd8601ed5aea8d3fb2cf5a12f959b5021fb15f1"
        },
        "date": 1709915747701,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 79.5529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 108.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 77.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 113.39658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 12.2041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 17.12685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 11.82470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 17.02529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5531.21796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 402.5333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 129.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 118.0578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1925.57373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 79.74501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.6314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.7638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 77.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1639.58369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.2591796875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}