window.BENCHMARK_DATA = {
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
          "id": "a82d1d261d9dfabb82bc150c5905ee5a406c1180",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T13:57:16Z",
          "tree_id": "7ee9966a0adc2791a7c23a096946f04b8dd1985f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a82d1d261d9dfabb82bc150c5905ee5a406c1180"
        },
        "date": 1709831775163,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.88134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.9525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.5431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.843359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5183.8666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 62.81484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.003125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1306.2810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.679296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1225.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1250.430078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.0515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1433.53779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.23076171875,
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
        "date": 1709835762600,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.62900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.3984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.06884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.988671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.28095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5119.994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.0427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.13369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.82197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1353.96533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1373.617578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.540625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.61142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1546.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.10458984375,
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
        "date": 1709845859747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.77705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.739453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.6916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.45,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.12998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5258.79931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.68271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 56.32041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1407.990625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.334375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.489453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1098.336328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1513.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.526953125,
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
        "date": 1709862758585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.74140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.7833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.62685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.78583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.93935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5207.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.45537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 58.16591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.32861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1568.19716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.47705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1373.449609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1139.47099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.4521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1410.4802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.949609375,
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
        "date": 1709862829989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.395703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.46591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.99482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.35263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.7083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.47783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5407.81279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.69931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 58.61484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1685.696484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.925390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1305.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1155.10029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.90947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1633.81591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.05634765625,
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
        "date": 1709893195713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 31.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.15888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.86640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.1158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.83916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5241.99384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 62.70947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.30341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1709.6,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 42.27509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1306.65888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.32080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.7662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1658.20517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.8974609375,
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
        "date": 1709905942860,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.17568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.61181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.43466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.284375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.80908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.05908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.955859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5216.03291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.4080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1753.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.22294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1389.16982421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1195.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.08720703125,
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
        "date": 1709911913527,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.04404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.80908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.94453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.27646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5269.4466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.5193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 55.2888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1719.4994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.28876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.55263671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.52041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1619.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 852.41416015625,
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
        "date": 1709915710706,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.4201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.28818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.55400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.87158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.72734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.53466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.6568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5331.14736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.88349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.340234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.61123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1690.02568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.27998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1299.03115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.60830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1627.358984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.5521484375,
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
          "id": "74df3e2e00c4a7c567832a40287830ee81fe2d26",
          "message": "Verify SSE settings checksum before and after uploading an object (#745)\n\n* Verify SSE settings checksum before and after uploading an object\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make fmt\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix typos and documentation\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Compare strings in verify_response, other review fixes\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use exit() instead of panic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Log CLIArgs with debug level, improve style\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-08T15:44:09Z",
          "tree_id": "dddd548f4a0bfc6475fe4f1b32cfb0fa06b7c84d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/74df3e2e00c4a7c567832a40287830ee81fe2d26"
        },
        "date": 1709919804251,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.253515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.19501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.88046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.99248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.726953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.33271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5337.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.6705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 68.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.43955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1796.9984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.27939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1361.686328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1230.21689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.04423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1552.1203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.3826171875,
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
          "id": "81ae0da9f47b9a95644989e1977c5accaf6ebd62",
          "message": "Add new cases of expected behaviours in troubleshooting doc (#789)\n\n* Add new cases of expected behaviours in troubleshooting doc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added a few more logs and mitigations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* add recommended changes in troubleshooting doc\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-03-08T18:11:57Z",
          "tree_id": "5e7c82e9c6f0bb8e06422ebc993b7b379b98b69c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81ae0da9f47b9a95644989e1977c5accaf6ebd62"
        },
        "date": 1709928670464,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.473828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.0044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.83193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.898828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.944140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5329.92353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.59677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 58.365625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.19599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1690.719921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.282421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1141.21865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 40.691796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1427.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.73701171875,
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
          "id": "1f071e0ee6efb2d50a0ba0aef632f042c8d5e573",
          "message": "Return error from `Uploader::put` on checksum mismatch (#809)\n\n* Return error from Uploader::put on checksum mismatch\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for Uploader::new with sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add fs-level test for sse corruption\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-12T17:09:05Z",
          "tree_id": "98541169c9816ddf4ede77b5fb869c5a79cffadc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1f071e0ee6efb2d50a0ba0aef632f042c8d5e573"
        },
        "date": 1710276108129,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.52822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.214453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.067578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5301.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 60.871875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.15556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1628.952734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.57822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1284.13544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1288.89853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1329.61962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1055.5306640625,
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "cfd46aa1fd79488c01e0a6d13c4187b40541da98",
          "message": "Workflow updates for AL2023\n\n1. Remove Cargo caching -- we have too many build variants in CI at this\n   point, and the cache is limited to 10GB per repo, so in practice it\n   never/rarely hits before evicting random variants.\n2. Update actions to versions that we previously deferred because they\n   required the node20 runtime, which didn't work on AL2.\n3. Fix a syntax thing in the cache build workflow.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T19:26:45Z",
          "tree_id": "865b6c69e925edb15d387a6e6f854e9a8b14d683",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfd46aa1fd79488c01e0a6d13c4187b40541da98"
        },
        "date": 1710277864333,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.42734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.10576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.03349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5352.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.15517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 52.64794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.32978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1667.56103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.8642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1161.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.40244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1631.6197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 928.0841796875,
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
          "id": "4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca",
          "message": "Workflow updates for AL2023 (#814)\n\n* Update workflows to latest versions\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Remove cargo cache\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Replace actions-rs/toolchain\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix a syntax thing for the cache workflow\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Don't publish benchmark results from non-`main` branches\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-13T16:02:04Z",
          "tree_id": "fdc43fabc0f2bf9d62f4b10305ba441d673e9ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca"
        },
        "date": 1710352541910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.378515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.751171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.228125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5087.32119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 63.02294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.878515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1528.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.92119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1320.80615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.06572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.503515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.791796875,
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
          "id": "5a219733940d7f9dd9cfa4aeabe4ddb94606f290",
          "message": "Fix a compiler warning (#817)\n\nWe forgot to re-export ChecksumAlgorithm in the public API.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-15T17:46:14Z",
          "tree_id": "fadf4e68b28f854fbe0bcdf079d9e8a3040860a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a219733940d7f9dd9cfa4aeabe4ddb94606f290"
        },
        "date": 1710531587300,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.5890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.61455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.52685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.05146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.05712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.29970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5210.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.31953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 54.57861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1642.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.9900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 963.05537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1139.3421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.81044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1034.555078125,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29",
          "message": "Fix failing CI jobs (#824)\n\n* Fix clippy errors\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update cargo about in packaging image\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-25T12:02:19Z",
          "tree_id": "287ebbdd68c77528b99a81c6ed8fb0ea3a40c82e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29"
        },
        "date": 1711375161891,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 51.0533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.36865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.49091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.86611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.0998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5223.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.37421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 68.641796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1740.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.8962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.284765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.19453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1550.76455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.509375,
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
          "id": "e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d",
          "message": "Add s3.client.total_bytes metric (#823)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-27T16:47:50Z",
          "tree_id": "646d75c10349a0ebea56db43b1128be306026252",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d"
        },
        "date": 1711564910130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.53173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.40458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5254.14736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.22138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.34921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.17666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1216.1875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1147.54833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.3021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.42421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 938.5302734375,
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
          "id": "b20ca62e69b61aca1f3841245d7bf618e0fdaa61",
          "message": "Add AES256 SSE type (#827)\n\n* Add AES256 sse type\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move CLI flag validation\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix error message, add comment, fix validate_sse_args style\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-28T02:09:56Z",
          "tree_id": "79a3920012ad5610b8b6bae3c47e4c9ea2a1ace9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b20ca62e69b61aca1f3841245d7bf618e0fdaa61"
        },
        "date": 1711598758222,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.97060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.90400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5188.8029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.541796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.2263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1536.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1199.83583984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1110.14287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1349.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.61669921875,
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
          "id": "127fb714e3b279291dacc6f59e9c6291fbf5a611",
          "message": "Adding support for rewinddir by restarting readdir if offset is zero. (#825)\n\n* Adding support for `rewinddir` by restarting readdir if offset is zero.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding mention to rewinddir to semantics doc.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Replace rewind method with a new ReaddirHandle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding a rewind_offset fn.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding more tests.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Creating a fn for creating a default handle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Fix clippy and format.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Rename to readdir_handle. Move to single lock.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-28T15:58:38Z",
          "tree_id": "c5e05cd7cc52294e272b755ea9e527ec0d606640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/127fb714e3b279291dacc6f59e9c6291fbf5a611"
        },
        "date": 1711648585974,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.81806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.90419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.97275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.64599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.8919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5251.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.26513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 56.30322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1495.3263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.17880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1328.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1050.36513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.64658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1393.10537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.032421875,
            "unit": "MiB/s"
          }
        ]
      },
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
          "id": "84827e7b07a1c5f8eca0d9508c71bbb9263099af",
          "message": "Expose memory consumption metrics (#820)\n\n* Add memory consumption metrics for the prefetcher\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Add buffer pool usage metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Report mountpoint total memory usage\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-30T03:42:01Z",
          "tree_id": "75d59e4b9095c5c00d3f8f5671ab60ceda722981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84827e7b07a1c5f8eca0d9508c71bbb9263099af"
        },
        "date": 1711776952167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 26.4201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 50.58271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.6009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.32021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.91865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5218.24638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1641.03203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1353.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1034.6376953125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1711776952635,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}