window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56e653dc44168ba7be3eb475560b15b09a3a1bb1",
          "message": "Extend benchmark.py to run prefetch, crt and client benchmarks. (#1519)\n\nThis change allows us to run benchmarks at different Mountpoint layers\nwith a common input\n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T07:08:09Z",
          "tree_id": "d804a7b7046acfd2ce33f9542548f7e7080cc7f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56e653dc44168ba7be3eb475560b15b09a3a1bb1"
        },
        "date": 1752830617033,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5056.73369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4433.04091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5615.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.08955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.78525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5983.78974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.64375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4982.13505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.52021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1819.0814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.24189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1417.67451171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1438.02138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.12783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1885.5318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1141.88359375,
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
          "distinct": false,
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752851703281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4933.296484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4509.412890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5410.52646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.3205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.80634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.47216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.70576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5295.85625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.38955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4902.82509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.550390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1997.0912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.00751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1662.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1342.2046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.67978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.5806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1021.80078125,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752859020437,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4897.942089843749,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4404.461328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5520.0900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.7462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.30078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.694140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.14423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.30029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.56474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.27119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4756.78671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1774.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.19267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1465.198828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1380.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.9916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1849.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1024.04267578125,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753105067833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4909.68046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4455.644921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5591.514746093751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.72060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.70146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.7583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.01025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6030.06376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.09990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4980.49248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1876.85654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.6478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1459.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1247.8763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1804.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.71875,
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
          "distinct": false,
          "id": "f06dc065a904da06b76a4bc667aa5966ab89e081",
          "message": "Extract meta request type when reserving buffers (#1524)\n\nModify the new `MemoryPool` trait (and the CRT bridge) to propagate the\ntype of the meta request which is reserving the buffer. Requires\nextending bindings to an additional private header from `aws-c-s3` in\norder to access the type of a `aws_s3_meta_request` pointer.\n\n### Does this change impact existing behavior?\n\nNo, the new type information is not used yet.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T12:43:22Z",
          "tree_id": "85098a437513db4098f974f17564649b52e61faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f06dc065a904da06b76a4bc667aa5966ab89e081"
        },
        "date": 1753109681940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4871.16748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4393.36845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5614.174218749999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.70751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.86015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.63046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.39462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.41982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.787890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5843.70517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5014.2666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1734.16953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.69404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1124.73974609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1196.12919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1843.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.8333984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1d416eff9ca92bd805562cedd117fe595e6aff53",
          "message": "Support read sizes up to 1M for fio cached IO benchmarks.  (#1528)\n\nThis change allows configuring fio read sizes for benchmarks. For cached\nIO reads over 256K, the script overwrites the read_ahead_kb on the\ndevice itself.\n\nThis also includes minor cleanup fixes from previous changes. \n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-21T16:50:33Z",
          "tree_id": "c8521a5894d1ed146e45439e6336658b7d16cb3d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1d416eff9ca92bd805562cedd117fe595e6aff53"
        },
        "date": 1753124818689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4921.634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4309.5658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5399.20166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.24609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.319921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.64853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.83232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5433.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.0857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4853.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1466.1388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.0837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1518.21728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.57001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.02431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1591.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1101.088671875,
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
          "id": "5225d343b271ddb37ff54fda2b90f49809f67ae5",
          "message": "Decouple mem_limiter from client (#1525)\n\nMinor refactor to decouple the memory limiter from the client\nimplementation. The memory limiter only requires the client to retrieve\ninformation about its internal memory pool utilization. This change\nwraps that request in a type-erased closure and drop the generic\nparameter from the memory limiter and all related types.\n\n### Does this change impact existing behavior?\n\nNo. Internal refactor only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-22T05:50:37Z",
          "tree_id": "c0f540a8566d905e020ef12a575fb4b53762664a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5225d343b271ddb37ff54fda2b90f49809f67ae5"
        },
        "date": 1753171343269,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4908.6859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4476.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5677.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.32294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.8357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.9810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.32216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5975.3412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.47705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4995.68759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1988.22998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.35556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1426.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.16337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1544.938671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.784765625,
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
          "id": "f73f89b29d673a3bc29e58b5c1f5e96e74ba534e",
          "message": "[Experimental] Support mounting multiple buckets with CSV manifest (#1506)\n\nImplement `ManifestMetablock` which uses SQLite db as a source of object\nmetadata. This implementation also allows mounting multiple buckets\nwithin a single filesystem. This change is not intended to be applied to\nthe regular `mount-s3` binary, only to `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, change is enabled in example only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, of the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T12:55:13Z",
          "tree_id": "dbbd80fbf7eb4fcb2fbfe447a6380f387d20c280",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f73f89b29d673a3bc29e58b5c1f5e96e74ba534e"
        },
        "date": 1753283538438,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4954.96494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4427.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5408.3234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.47099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.90615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.58134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.26484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5653.9390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.5677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4886.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1763.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1206.48515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.31708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.48349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.0158203125,
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
          "id": "65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2",
          "message": "Release crates, mountpoint-s3-fs 0.6.0 (#1531)\n\nUpdate changelogs in preparation for crates release. Crates to be\nreleased:\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n- mountpoint-s3-fs\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T14:29:58Z",
          "tree_id": "55611484499579305e804b526f592752e9440ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2"
        },
        "date": 1753288967986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4864.79609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4477.67685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5492.765332031249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.816015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.45,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.0078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.80908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5937.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.82451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4835.42822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.56796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1748.0861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.38037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 983.879296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1189.8849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.725390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1778.542578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1118.8384765625,
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753291710694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4810.384960937499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4186.534375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5466.63076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.69873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.98662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.725390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.30029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5665.0939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.47919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4902.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.0744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1308.27431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1400.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1199.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1613.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.590234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5732b47f04ed2b9280ada532c5346306625ae218",
          "message": "Add thread ID to log messages. (#1460)\n\nThis helps us to understand what's happening with concurrent operations.\n\n### Does this change impact existing behavior?\n\nChanges log message format slightly by adding thread IDs, which may\nmeans scripts that parse these messages need to change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-07-24T09:15:20Z",
          "tree_id": "350586199d5c03f8d368771e4cf3cd4567db03da",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5732b47f04ed2b9280ada532c5346306625ae218"
        },
        "date": 1753356542101,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5030.11142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4465.9345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5706.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.6771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.80029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.77744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.996875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.025,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.38388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5019.2837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.0583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1791.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.8513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1336.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.09794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1101.69208984375,
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
          "id": "c20dd804d324e55767cb3ee62665ccad264c37ec",
          "message": "Implement Deref on pool buffers (#1533)\n\nMinor usability improvement on the buffers for the newly introduced\nmemory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T10:04:25Z",
          "tree_id": "2a15f64dea6a3d194b44019d00f1e909c8c8b414",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c20dd804d324e55767cb3ee62665ccad264c37ec"
        },
        "date": 1753359484337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4882.42744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4209.73291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5371.61396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.85712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.53173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.04677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5615.66845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.43828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4822.869921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.46083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1786.56259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.4271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1378.49287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1870.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.66845703125,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753364053627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4836.0267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4369.0923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5493.95546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.3974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.49521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.96591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.77080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.301953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5713.97138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.58310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4861.773828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1686.08828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.4361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1535.00859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.30869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1759.20390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.692578125,
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
          "id": "6633db0048d429838f09f65ade1804ff666b6def",
          "message": "Set `mem_limit` in `mount_from_config` example (#1537)\n\nSet `mem_limit` in `mount_from_config` example. The value is retrieved\nfrom a json config.\n\n### Does this change impact existing behavior?\n\nNo, only the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-24T16:52:03Z",
          "tree_id": "dc0a7ab42e8372c268cb4c7db30508a4048c0093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6633db0048d429838f09f65ade1804ff666b6def"
        },
        "date": 1753384011772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4904.44697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4305.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 4985.912402343751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.36572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.531640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.85654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4837.07744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 195.89345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4599.56953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 215.1359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1590.37900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.00341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1431.35283203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1159.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.55625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1598.8474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.79521484375,
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
          "distinct": false,
          "id": "06deaaac0a57e2527c80d90ec2728309ea1ae45a",
          "message": "Fix issue preventing incremental upload to handle very large write part sizes (#1538)\n\nThe append upload queue tries to limit the total memory used to buffer\nthe data to write to 2 GiB. However, when setting `--write-part-size` to\nvalues greater than 2 GiB, it would incorrectly set the queue capacity\nto 0 buffers and panic.\n\nThis change ensures that the queue allows for at least 1 buffer, even if\nthat means exceeding the 2 GiB cap.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:05:59Z",
          "tree_id": "48ab171e8600cb851f60d9a591acd1968efe1fa2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06deaaac0a57e2527c80d90ec2728309ea1ae45a"
        },
        "date": 1753453123516,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4794.3201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4307.65693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5495.03330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.82646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.9412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.95302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.19248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5730.6619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.8904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4732.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.844140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1909.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1329.65322265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1148.16708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1413.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1022.0794921875,
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
          "distinct": false,
          "id": "15fe956a9e7588de2128f52108af9533cf9ea956",
          "message": "Use a unified memory pool in Mountpoint (#1511)\n\nIntroduces a unified memory pool in Mountpoint. The pool adopts the CRT\npool interface, so it can be used by the CRT client when requesting\nbuffers. Ownership of the buffers is then passed to the prefetcher when\nthey are returned from GetObject requests. The same memory pool is also\nused to serve reads from the local disk cache and for incremental\nuploads.\n\nThe main goal is to reduce overall memory usage and mitigate memory\nfragmentation issues. We may also observe performance gains in some\nscenarios since we can avoid copying the data received from GetObject.\n\n### Does this change impact existing behavior?\n\nNo changes in file system behavior. It will publish new memory-related\nmetrics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires entries in the `fs` and `mount-s3` changelogs and new major\nversions.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:06:27Z",
          "tree_id": "cad4f86f83dd9db2ce67cd92790761cbaedfeb08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15fe956a9e7588de2128f52108af9533cf9ea956"
        },
        "date": 1753453377338,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4913.94072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4432.12490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5764.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.16171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.769140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.26787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.5490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.80390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.31572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6229.86669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.83564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5059.20810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.74892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1639.696484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1397.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1447.960546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 907.8623046875,
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
          "distinct": false,
          "id": "097ab2ee264cbde065592f39155d0cdfc9465f76",
          "message": "Replace full key with S3Location in file handles (#1539)\n\nInternal change to directly propagate `S3Location` in file handles\nrather than the derived `full_key` string. The value is used for logging\nand error report, so we can postpone formatting the string until it is\nneeded.\n\n### Does this change impact existing behavior?\n\nMinor change in string formatting in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:11:05Z",
          "tree_id": "7f0e1c8539c41864f9f3143677aca300f98c9a5d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/097ab2ee264cbde065592f39155d0cdfc9465f76"
        },
        "date": 1753453727800,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4879.17314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4520.06796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5790.016796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.25322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.7904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.4259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.80146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6140.27578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5036.575,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.27421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1762.32802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.84755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1398.82822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.81015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1546.64970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1007.87890625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "884323ea89ed9dc7ad612b67c7903cb80e35e9ba",
          "message": "Add usages of INITIAL_READ_WINDOW_SIZE (#1541)\n\nReplaces hard-coded initial read window sizes with usages of the\nconstant `INITIAL_READ_WINDOW_SIZE`.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T15:00:09Z",
          "tree_id": "918432d509e5398a0dc5d3e70734fce49b9dc8ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/884323ea89ed9dc7ad612b67c7903cb80e35e9ba"
        },
        "date": 1753463581157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4908.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4391.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5740.02841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.96533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.771875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.91201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.19541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.75478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.34755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5793.641796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.03134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4838.90751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 221.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1575.162890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.551171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1339.08037109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.88203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.09775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1404.41494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 931.16279296875,
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
          "id": "581fdeb95dc511ca5ee39409093a75e4ddee0767",
          "message": "Enforce valid buffer sizes for the memory pool (#1540)\n\nThe memory pool will only accept buffer sizes in the range (0, 64MiB]\nfor the primary memory (i.e. allocated in pages of 16 buffers). For\nlarger sizes, it will only use secondary memory (i.e. ad-hoc allocation\nfor a single buffer).\n\nThe 64MiB cap reproduces the behavior of the internal CRT memory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - part of the memory pool change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T15:35:33Z",
          "tree_id": "40d197e8687e15aaff1c27602db0f85d11c71282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/581fdeb95dc511ca5ee39409093a75e4ddee0767"
        },
        "date": 1753465710765,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4991.56748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4533.7416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5805.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.559375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.65830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.98603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.74365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.34638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.54267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6109.95732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5081.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1827.02822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.80986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1192.98251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.66533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1881.95166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.383203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "4a5f914f2fda3b4bad1aea57b16da784b41212a4",
          "message": "Make ObjectClient part sizes no longer optional (#1542)\n\nThe `ObjectClient` trait currently defines `read_part_size` and\n`write_part_size` as optional. This abstraction does not apply to any of\nthe existing implementations of the trait and we currently have no plans\nof using it. This change removes this unnecessary abstraction,\nsimplifying the code and avoiding possible confusion.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2025-07-25T16:15:33Z",
          "tree_id": "66d926af874bfa2c6e10d8bfce747ecf98112c80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a5f914f2fda3b4bad1aea57b16da784b41212a4"
        },
        "date": 1753468094396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4870.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4360.07890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5729.507519531249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.6138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.00068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.51376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.319921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.85302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6016.04814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.03349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5015.43642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.14951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1871.71318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.62431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1418.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.0044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.50869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1388.946484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 928.295703125,
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
          "id": "dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e",
          "message": "Prepare for release of the fs crate v0.7.0 (#1544)\n\nUpdate changelogs of the `fs` and `client` crates to prepare for\nrelease.\n\nAlso include previously missing entry in `client` changelog for #1542,\nand increase the crate version number.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSee above.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-28T11:01:31Z",
          "tree_id": "13558d258862673afe79a1f9a4eb98ca18ce89ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dcbbcc1b83bcd28734cc9de828cc7cbcf26e306e"
        },
        "date": 1753708681145,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4935.684375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4492.6548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5780.23466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.0072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.29716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.1544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.17880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.40009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5783.3904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.27431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4934.16279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.578515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1764.1427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1629.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1338.0451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.49775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1485.08642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.86787109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2a9a494442fe164e2119e3c020989c19ce198aae",
          "message": "Automated Benchmark Result Upload (#1527)\n\n### What changed and why?\n\nThis PR adds functionality to automatically upload benchmark results to\nan S3 bucket when benchmarks complete. The implementation includes:\n\n1. A new `detect_result_folder()` function that determines the\nappropriate result folder path and source path based on Hydra's runtime\nconfiguration\n2. A new `upload_results_to_s3()` function that uses AWS CLI to sync\nlocal benchmark results to the specified S3 bucket\n\nThese changes enable automated collection of benchmark results in a\ncentralized S3 location, making it easier to analyze performance trends\nover time.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-07-29T13:13:56Z",
          "tree_id": "a81582905f9e86c18ed7af6a4bd2fb58fc16fe0b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a9a494442fe164e2119e3c020989c19ce198aae"
        },
        "date": 1753802730352,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4887.283984375001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4526.1841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5784.95166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.16943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.09775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.97685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.96728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6105.43974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5006.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.7544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1842.37529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1347.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.80439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1723.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.93505859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "720b2e17720e0b2ff7791e2614d20401c72b1f67",
          "message": "Use release flag for prefetcher benchmark (#1547)\n\nHarmonises the use of `--release` compile time flag across benchmarks.\n\nDoes not need a Changelog entry, as it neither changes existing\nbehaviour nor is customer-facing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:28:44Z",
          "tree_id": "3823efe7516dc0113e8565fbcc0cd226ee3b422b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720b2e17720e0b2ff7791e2614d20401c72b1f67"
        },
        "date": 1753890562815,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4942.12666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4464.411425781251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5778.371679687501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.59287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.79267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.22626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.964453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.97744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.53525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6067.35205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.11640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5074.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.43125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1618.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.21455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1484.7208984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1232.92294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.3001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1778.4408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.53759765625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "315db6035a33a4c9fc568cd9f30a191c0ca3127d",
          "message": "Explicitly specify opt-level, use link-time optimisations (#1548)\n\nExplicitly set the optimisation level for our release builds to 3,\nadditionally enables link time optimisations and uses a single\ncompilation unit -- this enables more optimisations across the full\nlinked codebase.\n\nDoes not need a changelog entry, as it does not change mountpoint's\nbehaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-30T13:35:37Z",
          "tree_id": "4f5c1f207414e5cc5e4a8c90029400a3226e1e35",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/315db6035a33a4c9fc568cd9f30a191c0ca3127d"
        },
        "date": 1753890865774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4989.512109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4515.52138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5856.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.0373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.7623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.22607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.38642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6254.065625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5146.5412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.9171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1761.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.45615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1361.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1364.4505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1428.80107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.4703125,
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
          "id": "8392342436f86c0f05698ab7d545b68a169a54fa",
          "message": "Add versioning of the configuration format in mount_from_config example (#1545)\n\nExample binary `mount_from_config` now accepts `config_version`\nparameter. This may be used to ensure that user is aware of updates to\nthe configuration format and prevent from silent failures.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-31T12:47:38Z",
          "tree_id": "94ffd5ae46b249ae2e2b817a62a3028d22aecdf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8392342436f86c0f05698ab7d545b68a169a54fa"
        },
        "date": 1753974342454,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4970.10166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4498.25107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5587.654492187499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.69609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.56474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.472265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.88125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.18076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5938.26162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.4970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5122.753515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 216.690625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1445.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.46640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1422.14873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1301.63408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.99306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1916.31279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 969.885546875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ed5273266768cddf36c4d04f4b175d0e02fb16f",
          "message": "Update logging docs for CSI Driver v2 (#1551)\n\nUpdate logging docs for CSI Driver v2 as in v2 logs are no longer in\nsyslog.\n\nSee\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/blob/main/docs/LOGGING.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2025-08-04T11:16:16Z",
          "tree_id": "d963e4a4b4c26756dc660760dbe4085622b7c966",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ed5273266768cddf36c4d04f4b175d0e02fb16f"
        },
        "date": 1754314382767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5057.1490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4548.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5867.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.86103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.41513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.209375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.03291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.68349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6344.8787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.2369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5199.91279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.64072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2014.55751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.301171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1757.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1274.97353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.5587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.8548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.5314453125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7f8c622cfb7d861afa36f9f8cb2efa2e266a7050",
          "message": "Fix typo in package/README.md (#1558)\n\nFixes a typo in the packaging readme\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-06T13:56:09Z",
          "tree_id": "f6d080301a061edcc1b18d97904fdde0352e85b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f8c622cfb7d861afa36f9f8cb2efa2e266a7050"
        },
        "date": 1754496781597,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4988.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4458.739453124999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5672.2798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.46142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.69599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.50166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6059.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.350390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5072.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1671.30458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.96337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1283.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1329.67001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.28310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.18779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.43388671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b8e905035064f1040e09ba1e120dde8f0aa6b14f",
          "message": "Add helpful script for generating summary table from benchmark runs (#1557)\n\nAdds a script that parses the benchmark output and autoamtically creates\na table with only the parameters that changed between runs.\n\nDoes not need a changelog entry, as the script only parses hydra runs. \n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-08-06T17:32:47Z",
          "tree_id": "ebca5100846db4d4f196c8688795b2ebe287ae85",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8e905035064f1040e09ba1e120dde8f0aa6b14f"
        },
        "date": 1754509547492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4996.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4489.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5849.6091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.2751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.32958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.47177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.64306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.06162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.60556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6077.67841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.43583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4848.79892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.33515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1825.17001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1442.665625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1233.67109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1550.6859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1058.64912109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "peterxcli@gmail.com",
            "name": "Peter Lee",
            "username": "peterxcli"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816",
          "message": "If using custom endpoint, force path style in benchmark script (#1560)\n\n### What changed and why?\n\n**What changed:**\n- Added `--force-path-style` flag to the `optional_args` in\n`mountpoint-s3/scripts/fs_bench.sh` when `S3_ENDPOINT_URL` is set\n- This change ensures that when using S3-compatible endpoints (like\nApache Ozone, MinIO, etc.), mountpoint-s3 uses path-style addressing\ninstead of virtual hosted-style addressing\n\n**Why:**\n- S3-compatible services often don't support virtual hosted-style\naddressing (e.g., `bucket1.localhost:9878`)\n- By default, mountpoint-s3 uses virtual hosted-style addressing which\ncauses 404 errors when connecting to S3-compatible endpoints\n- The `--force-path-style` flag forces path-style addressing (e.g.,\n`localhost:9878/bucket1/`) which is compatible with most S3-compatible\nservices\n- This fix resolves the \"Invalid response status from request\" error\nwhen connecting to non-AWS S3 endpoints\n\n### Does this change impact existing behavior?\n\n**No breaking changes:**\n- This change only affects the behavior when `S3_ENDPOINT_URL` is\nexplicitly set\n- When using AWS S3 (the default), this change has no impact since AWS\nS3 supports both addressing styles\n- The `--force-path-style` flag is additive and doesn't remove any\nexisting functionality\n- Users connecting to AWS S3 will continue to work exactly as before\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n**Changelog entry:** Yes, recommended\n**Version change:** No, this is a bug fix\n\n**Justification:**\n- This is a bug fix that improves compatibility with S3-compatible\nservices\n- It doesn't introduce new features or breaking changes\n- The fix aligns with existing behavior in other benchmark scripts\n(`fs_latency_bench.sh` and `fs_cache_bench.sh` already have this fix)\n- Users connecting to S3-compatible services will now have a better\nout-of-the-box experience\n\n**Suggested changelog entry:**\n```\n## [Unreleased]\n### Fixed\n- Fixed benchmark scripts to use path-style addressing when connecting to S3-compatible endpoints\n  - Added `--force-path-style` flag to `fs_bench.sh` when `S3_ENDPOINT_URL` is set\n  - This resolves connection issues with Apache Ozone, MinIO, and other S3-compatible services\n```\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: peterxcli <peterxcli@gmail.com>",
          "timestamp": "2025-08-07T12:15:28Z",
          "tree_id": "0a3dd7a8082a91c1ee8e4ce44cb83604527979ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0326fe6d3035a4d10c7d8bbb81d22d3fccfe6816"
        },
        "date": 1754576994188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4900.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4356.0134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5729.4994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.9345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.25517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.75859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6193.18779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.031640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5033.30576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.20625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1687.22666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.4798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1409.94677734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1405.26484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1828.012109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1132.00810546875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a06f2ef58750be6a56a360734d6f6e2f2b1cb61f",
          "message": "Add changelog for #1560 (#1561)\n\nAdds changelog for #1560.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-08-07T13:47:56Z",
          "tree_id": "c7e2061319582a6f64d101c7489db6d64b478776",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a06f2ef58750be6a56a360734d6f6e2f2b1cb61f"
        },
        "date": 1754582749518,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5002.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4436.4626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5744.41259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.851171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.52734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.87373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.14912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6156.803125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.32705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5152.9369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.062890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1497.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.76640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1690.24140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.66923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1814.55478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1107.94248046875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1754582750475,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}