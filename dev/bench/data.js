window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "7b4d9d173869d24ebd445762a803203047e6c0b4",
          "message": "Add `max_background` setting to `S3FilesystemConfig` (#1746)\n\nAdd `max_background` setting to `S3FilesystemConfig`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, new version of `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-01-21T15:43:04Z",
          "tree_id": "0a2ca85495f4584b12827545516ba0cde324359e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b4d9d173869d24ebd445762a803203047e6c0b4"
        },
        "date": 1769018489103,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4980.5232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4530.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.636816406251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.14423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.71767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.10166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.325390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6162.04140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.627734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5134.81884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.46806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1627.579296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.66943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1561.5193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1174.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.95029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1447.2498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.15869140625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebe82da2e60e20a4854e63bb5396f68f4c52ceff",
          "message": "Update semantics documentation to describe changes as part of the open-after-close fix (#1752)\n\nUpdate semantics documentation to describe changes done as part of the\nopen-after-close fix in [PR\n#1704](https://github.com/awslabs/mountpoint-s3/pull/1704)\n\nUpdates done to `doc/SEMANTICS.md` documentation and some more details\nadded in`mountpoint-s3/CHANGELOG.md`.\n\n### Does this change impact existing behavior?\n\nNo, documentation update only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, documentation update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2026-01-22T11:26:43Z",
          "tree_id": "24caf93263596e959007c15af7ef3d497292b961",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ebe82da2e60e20a4854e63bb5396f68f4c52ceff"
        },
        "date": 1769089565182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4982.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4524.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5879.098535156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.84208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.87783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.4984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.64609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.13046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.32978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.01455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6235.015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5075.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.3822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1936.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.07412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.38212890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1348.193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1387.593359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.319921875,
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
          "distinct": false,
          "id": "6f34b6826b437ee3fc33e6dda40433964f041592",
          "message": "Udpate docs with cache metrics for OTLP export (#1739)\n\nUpdates documentation with new cache metrics available for OTLP export\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-22T12:04:41Z",
          "tree_id": "1787e28a58736bcfaf6d8a5ca150e09fb991df7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f34b6826b437ee3fc33e6dda40433964f041592"
        },
        "date": 1769091763467,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5008.9947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4471.559375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5831.023242187501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.08505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.01708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.72353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.80107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6272.32939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.13994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5039.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.7037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1724.11953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.0712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1495.968359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1222.79140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.3494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.30439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.03310546875,
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
          "id": "bd86ba1f6e2a65c902f56114fda215c5ad243aa0",
          "message": "Prepare changelogs for new releases (#1754)\n\nUpdate changelogs before publishing crates and releasing Mountpoint.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-22T12:28:00Z",
          "tree_id": "d3b04ec3fdcf7e8c776059ace81ec1999b6cea33",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd86ba1f6e2a65c902f56114fda215c5ad243aa0"
        },
        "date": 1769093234249,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5150.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4541.97001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5914.416894531249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.62705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.20830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.67412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6202.1625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.9146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5125.61962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.6908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1767.98544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.0921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1532.35419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1239.93427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.08984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1733.52421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.6388671875,
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
          "distinct": false,
          "id": "eba4f082edcf2540b9feb1ba9261207e9cbecd98",
          "message": "Require initial-window-size when backpressure is enabled in client_benchmark (#1758)\n\nRequire read-window-size when backpressure is enabled in\nclient_benchmark.\n\nThe client_benchmark was silently defaulting to 0-byte initial read\nwindow when `--initial-window-size` was not provided, causing\nbackpressure tests to fail with minimal throughput (0-32 MiB instead of\nexpected GBs). Merged `--enable-backpressure` and\n`--initial-window-size` into a single `--backpressure-window-size`\nargument whose presence triggers backpressure mode.\n\n### Does this change impact existing behavior?\n\nNo, it fixes it.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-01-29T17:44:51Z",
          "tree_id": "cabdb135d58da6b2201591aa0e6c45d051311e62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eba4f082edcf2540b9feb1ba9261207e9cbecd98"
        },
        "date": 1769717071695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4970.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4509.46728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5812.597460937501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.03876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.95458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.04345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.948046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.42880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6127.7853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5143.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.640234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1749.93447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.778125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1449.73134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1267.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.7966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1433.04189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.23408203125,
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
          "id": "0fbb3de56f645defa5c398b007e60a829fe97c9e",
          "message": "Benchmark: Create s3io_benchmark (#1757)\n\n**What changed and why?** Need to create new fio-like benchmark tool for\nPrefetcher/Uploader level of abstraction that can run several jobs\nconcurrently.\n\nCreated new s3io_benchmark script:\n - Create single shareable instance of `Prefetcher` and `Uploader`\n- Read/Write job logic is mostly adapted/copied from existing separate\n`prefetch_benchmark.rs` and `upload_benchmark.rs` files\n- Random Read implementation logic is copied from\nhttps://github.com/awslabs/mountpoint-s3/pull/1747/changes\n- FIO-like job config file parsing. Precedence order: Job-specific >\nGlobal > Built-in default\n - Uses Tokio runtime for spawning multiple jobs concurrently\n\n**Manual Runs**:\n\n```\ncargo build --example s3io_benchmark\n./target/debug/examples/s3io_benchmark mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\n```\n\n```\nS3 I/O Benchmark\nConfig file: \"mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\"\n\nLoading configuration...\nPreparing and validating jobs...\nFound 5 job(s) to execute\nCreating shared resources...\nExecuting jobs...\nJob 'read_2' completed: 3 iterations, 0.03 GB, 21.83s\nJob 'write_1_0' completed: 3 iterations, 0.03 GB, 6.73s\nJob 'write_1_1' completed: 3 iterations, 0.03 GB, 5.73s\nJob 'write_1_2' completed: 3 iterations, 0.03 GB, 5.23s\nJob 'read_1' completed: 3 iterations, 0.01 GB, 10.08s\nCompleted 5 job(s)\n\nAggregating results...\nWriting results to: example_results.json\n\nBenchmark complete!\n  Total bytes: 127114460\n  Duration: 21.15s\n  Total errors: 0\n```\n\n```\n{\n  \"jobs\": [\n    {\n      \"job_name\": \"read_2\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30000000,\n      \"elapsed_seconds\": 21.152757958,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_0\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 6.731901292,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_1\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.72617075,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_2\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.225869416,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"read_1\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 6281564,\n      \"elapsed_seconds\": 9.367737875,\n      \"errors\": []\n    }\n  ],\n  \"summary\": {\n    \"total_bytes\": 127114460,\n    \"total_elapsed_seconds\": 21.152757958,\n    \"total_errors\": 0\n  }\n}\n```\n\n### Does this change impact existing behavior? No.\n\n### Does this change need a changelog entry? Does it require a version\nchange? No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-29T21:18:54Z",
          "tree_id": "22ecfa4bdfe0b5939cfb1b709cf772739c839dcd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbb3de56f645defa5c398b007e60a829fe97c9e"
        },
        "date": 1769730000471,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.03271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4585.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5922.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.782421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.95615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.55234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.99208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.62646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.094921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6221.49794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5158.0267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.25048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1672.85029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.45419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1709.968359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1361.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.5701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1748.2947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 999.968359375,
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
          "distinct": false,
          "id": "17b7ca6dcf8556f9b09822a40c8dce6cff8393e7",
          "message": "s3io_benchmark: Add peak memory reporting (#1760)\n\n**What changed and why?** Need to track peak memory usage for\n`s3io_benchmark.rs`\n\n- Created memory tracker (adapted from `metrics.rs`)\n- Set default polling interval to 100ms.\n\n### Does this change impact existing behavior?\n\nN/A - benchmark only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - benchmark only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-30T16:06:47Z",
          "tree_id": "fcb4730679608bc9766818a57dfd8c3c3cbabde4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17b7ca6dcf8556f9b09822a40c8dce6cff8393e7"
        },
        "date": 1769797583330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5220.2859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4519.14521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.75546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.009375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.82890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.71357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.35986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6232.000390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.03544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5101.4177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1986.21669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1691.33603515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1247.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.92431640625,
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
          "id": "fc3ed919f2afb2814611453fcabf6166b66fa895",
          "message": "Bump bytes from 1.11.0 to 1.11.1 (#1763)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.11.0 to 1.11.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes v1.11.1</h2>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/417dccdeff249e0c011327de7d92e0d6fbe7cc43\"><code>417dccd</code></a>\nRelease bytes v1.11.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/820\">#820</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/d0293b0e35838123c51ca5dfdf468ecafee4398f\"><code>d0293b0</code></a>\nMerge commit from fork</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.11.0...v1.11.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.11.0&new-version=1.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-04T10:40:11Z",
          "tree_id": "5a9f325f4b5d8f1370003bfbcc36763c3c91e74c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc3ed919f2afb2814611453fcabf6166b66fa895"
        },
        "date": 1770209968236,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5044.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4594.92001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5838.714257812499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.79404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.8126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.27880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6236.8291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.3146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5187.9650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.7849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1719.2533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.13291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1718.21083984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1292.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1527.4697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.50361328125,
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
          "id": "7041070456d2d2f35e068c4aff91c6a9cdb8dc46",
          "message": "Bump git2 from 0.20.3 to 0.20.4 (#1764)\n\nBumps [git2](https://github.com/rust-lang/git2-rs) from 0.20.3 to\n0.20.4.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-lang/git2-rs/blob/git2-0.20.4/CHANGELOG.md\">git2's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.20.4 - 2026-02-02</h2>\n<p><a\nhref=\"https://github.com/rust-lang/git2-rs/compare/git2-0.20.3...git2-0.20.4\">0.20.3...0.20.4</a></p>\n<h3>Fixed</h3>\n<ul>\n<li>Fix undefined behavior when dereferencing empty <code>Buf</code>.\n<a\nhref=\"https://redirect.github.com/rust-lang/git2-rs/pull/1213\">#1213</a></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/8852d7dabd38d0df6d4524e04a1c2ee520ac7203\"><code>8852d7d</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/rust-lang/git2-rs/issues/1214\">#1214</a>\nfrom weihanglo/backport-from-raw-parts</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/0b274f76f70f717c3bda4be1f79ba8e1cb11afd4\"><code>0b274f7</code></a>\nBump to 0.20.4</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/73a5d5d7c49a7eb9d17c2ab6e40dafe3765ebf4d\"><code>73a5d5d</code></a>\nAdd test for dereference of an empty Buf</li>\n<li><a\nhref=\"https://github.com/rust-lang/git2-rs/commit/ce566831eb188b0fdb27962e154b8da6103071bf\"><code>ce56683</code></a>\nfix: check ptr nullity before calling from_raw_parts</li>\n<li>See full diff in <a\nhref=\"https://github.com/rust-lang/git2-rs/compare/git2-0.20.3...git2-0.20.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=git2&package-manager=cargo&previous-version=0.20.3&new-version=0.20.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-05T06:44:30Z",
          "tree_id": "5d6488e1b9743bc2daf1c2654372e11d3c9c7bda",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7041070456d2d2f35e068c4aff91c6a9cdb8dc46"
        },
        "date": 1770282211344,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5025.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4634.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5820.09130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.60869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.94990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.31162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.18212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.687109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.993359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6293.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.1919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5264.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.04453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1832.95263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1670.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1303.20927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.47744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1703.812890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1117.661328125,
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
          "id": "5b164b422cf6efe77225602391a562cf621bda33",
          "message": "Bump time from 0.3.46 to 0.3.47 (#1765)\n\nBumps [time](https://github.com/time-rs/time) from 0.3.46 to 0.3.47.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/time-rs/time/releases\">time's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v0.3.47</h2>\n<p>See the <a\nhref=\"https://github.com/time-rs/time/blob/main/CHANGELOG.md\">changelog</a>\nfor details.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/time-rs/time/blob/main/CHANGELOG.md\">time's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>0.3.47 [2026-02-05]</h2>\n<h3>Security</h3>\n<ul>\n<li>\n<p>The possibility of a stack exhaustion denial of service attack when\nparsing RFC 2822 has been\neliminated. Previously, it was possible to craft input that would cause\nunbounded recursion. Now,\nthe depth of the recursion is tracked, causing an error to be returned\nif it exceeds a reasonable\nlimit.</p>\n<p>This attack vector requires parsing user-provided input, with any\ntype, using the RFC 2822 format.</p>\n</li>\n</ul>\n<h3>Compatibility</h3>\n<ul>\n<li>Attempting to format a value with a well-known format (i.e. RFC\n3339, RFC 2822, or ISO 8601) will\nerror at compile time if the type being formatted does not provide\nsufficient information. This\nwould previously fail at runtime. Similarly, attempting to format a\nvalue with ISO 8601 that is\nonly configured for parsing (i.e. <code>Iso8601::PARSING</code>) will\nerror at compile time.</li>\n</ul>\n<h3>Added</h3>\n<ul>\n<li>Builder methods for format description modifiers, eliminating the\nneed for verbose initialization\nwhen done manually.</li>\n<li><code>date!(2026-W01-2)</code> is now supported. Previously, a space\nwas required between <code>W</code> and <code>01</code>.</li>\n<li><code>[end]</code> now has a <code>trailing_input</code> modifier\nwhich can either be <code>prohibit</code> (the default) or\n<code>discard</code>. When it is <code>discard</code>, all remaining\ninput is ignored. Note that if there are components\nafter <code>[end]</code>, they will still attempt to be parsed, likely\nresulting in an error.</li>\n</ul>\n<h3>Changed</h3>\n<ul>\n<li>More performance gains when parsing.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li>If manually formatting a value, the number of bytes written was one\nshort for some components.\nThis has been fixed such that the number of bytes written is always\ncorrect.</li>\n<li>The possibility of integer overflow when parsing an owned format\ndescription has been effectively\neliminated. This would previously wrap when overflow checks were\ndisabled. Instead of storing the\ndepth as <code>u8</code>, it is stored as <code>u32</code>. This would\nrequire multiple gigabytes of nested input to\noverflow, at which point we've got other problems and trivial\nmitigations are available by\ndownstream users.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/d5144cd2874862d46466c900910cd8577d066019\"><code>d5144cd</code></a>\nv0.3.47 release</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/f6206b050fd54817d8872834b4d61f605570e89b\"><code>f6206b0</code></a>\nGuard against integer overflow in release mode</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/1c63dc7985b8fa26bd8c689423cc56b7a03841ee\"><code>1c63dc7</code></a>\nAvoid denial of service when parsing Rfc2822</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/5940df6e72efb63d246ca1ca59a0f836ad32ad8a\"><code>5940df6</code></a>\nAdd builder methods to avoid verbose construction</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/00881a4da1bc5a6cb6313052e5017dbd7daa40f0\"><code>00881a4</code></a>\nManually format macros everywhere</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/bb723b6d826e46c174d75cd08987061984b0ceb7\"><code>bb723b6</code></a>\nAdd <code>trailing_input</code> modifier to <code>end</code></li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/31c4f8e0b56e6ae24fe0d6ef0e492b6741dda783\"><code>31c4f8e</code></a>\nPermit <code>W12</code> in <code>date!</code> macro</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/490a17bf306576850f33a86d3ca95d96db7b1dcd\"><code>490a17b</code></a>\nMark error paths in well-known formats as cold</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/6cb1896a600be1538ecfab8f233fe9cfe9fa8951\"><code>6cb1896</code></a>\nOptimize <code>Rfc2822</code> parsing</li>\n<li><a\nhref=\"https://github.com/time-rs/time/commit/6d264d59c25e3da0453c3defebf4640b0086a006\"><code>6d264d5</code></a>\nRemove erroneous <code>#[inline(never)]</code> attributes</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/time-rs/time/compare/v0.3.46...v0.3.47\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=time&package-manager=cargo&previous-version=0.3.46&new-version=0.3.47)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-06T10:33:28Z",
          "tree_id": "f1eef22803b696ec2893c78a1676255fbf26b180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5b164b422cf6efe77225602391a562cf621bda33"
        },
        "date": 1770382344900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4988.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4568.32724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5850.756933593751,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.3998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.18994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.71953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6294.008984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.7015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5200.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1826.8853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.24501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1560.8259765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1205.7482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.4703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1879.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.925390625,
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
          "id": "6976976e401b6147b72ebc3eec4c891fd4a3bca2",
          "message": "Bump aws-actions/configure-aws-credentials from 5 to 6 (#1766)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.1.1...v6.0.0\">6.0.0</a>\n(2026-02-04)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Update action to use node24 <em>Note this requires GitHub action\nrunner version <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">v2.327.1</a>\nor later</em> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1632\">#1632</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a7a2c1125c67f40a1e95768f4e4a7d8f019f87af\">a7a2c11</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add support to define transitive tag keys (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1316\">#1316</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/232435c0c05e51137544f0203931b84893d13b74\">232435c</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1628/changes/930ebd9bcaed959c3ba9e21567e8abbc3cae72c0\">930ebd9</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly output <code>aws-account-id</code> and\n<code>authenticated-arn</code> when using role-chaining (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/pull/1633\">#1633</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7ceaf96edc86cc1713cef59eba79feeb23f59da1\">7ceaf96</a>)</li>\n</ul>\n<h2>v5.1.1</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.1.0...v5.1.1\">5.1.1</a>\n(2025-11-24)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 5.1.1 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/56d6a583f00f6bad6d19d91d53a7bc3b8143d0e9\">56d6a58</a>)</li>\n<li>various dependency updates</li>\n</ul>\n<h2>v5.1.0</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.0.0...v5.1.0\">5.1.0</a>\n(2025-10-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>Add global timeout support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1487\">#1487</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/1584b8b0e2062557287c28fbe9b8920df434e866\">1584b8b</a>)</li>\n<li>add no-proxy support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/dde9b22a8e889a0821997a21a2c5a38020ee8de3\">dde9b22</a>)</li>\n<li>Improve debug logging in retry logic (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1485\">#1485</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/97ef425d73aa532439f54f90d0e83101a186c5a6\">97ef425</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly expose getProxyForUrl (introduced in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1486\">#1486</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cea42985ac88b42678fbc84c18066a7f07f05176\">cea4298</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5.0.0...v5.1.0\">5.1.0</a>\n(2025-10-06)</h2>\n<h3>Features</h3>\n<ul>\n<li>Add global timeout support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1487\">#1487</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/1584b8b0e2062557287c28fbe9b8920df434e866\">1584b8b</a>)</li>\n<li>add no-proxy support (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/dde9b22a8e889a0821997a21a2c5a38020ee8de3\">dde9b22</a>)</li>\n<li>Improve debug logging in retry logic (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1485\">#1485</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/97ef425d73aa532439f54f90d0e83101a186c5a6\">97ef425</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>properly expose getProxyForUrl (introduced in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1482\">#1482</a>)\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1486\">#1486</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cea42985ac88b42678fbc84c18066a7f07f05176\">cea4298</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.1...v5.0.0\">5.0.0</a>\n(2025-09-03)</h2>\n<h3>⚠ BREAKING CHANGES</h3>\n<ul>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)</li>\n</ul>\n<h3>Features</h3>\n<ul>\n<li>add skip OIDC option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1458\">#1458</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8c45f6b08196feb86cfdbe431541d5571d9ab2c2\">8c45f6b</a>)</li>\n<li>Cleanup input handling. Changes invalid boolean input behavior (see\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1445\">#1445</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/74b3e27aa80db064b5bb8c04b22fc607e817acf7\">74b3e27</a>)</li>\n<li>support account id allowlist (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1456\">#1456</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c4be498953fc1da2707a50ce4b761a53af3d02af\">c4be498</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.3.0...v4.3.1\">4.3.1</a>\n(2025-08-04)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>update readme to 4.3.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1424\">#1424</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/be2e7ad815e27b890489a89ce2717b0f9e26b56e\">be2e7ad</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v4.2.1...v4.3.0\">4.3.0</a>\n(2025-08-04)</h2>\n<h3>Features</h3>\n<ul>\n<li>depenency update and feature cleanup (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1414\">#1414</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/59489ba544930000b7b67412c167f5fe816568cf\">59489ba</a>),\ncloses <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1062\">#1062</a>\n<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1191\">#1191</a></li>\n<li>Optional environment variable output (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c3b3ce61b02510937ff02916a4eb153874bc5085\">c3b3ce6</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li><strong>docs:</strong> readme samples versioning (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/5b3c89504689ea1ea2b6000b23a6a2aac463662a\">5b3c895</a>)</li>\n<li>the wrong example region for China partition in README (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/37fe9a740bcb30ee8cccd96feb90666c937311f2\">37fe9a7</a>)</li>\n<li>properly set proxy environment variable (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/cbea70821e4ab985ad3be0e5a93390523e257cde\">cbea708</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8df5847569e6427dd6c4fb1cf565c83acfa8afa7\"><code>8df5847</code></a>\nchore(deps): bump fast-xml-parser and <code>@​aws-sdk/xml-builder</code>\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1640\">#1640</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d22a0f8af59e052e453e2f8fbe2b9cbbc1b76b15\"><code>d22a0f8</code></a>\nchore(deps-dev): bump <code>@​types/node</code> from 25.0.10 to 25.2.0\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1635\">#1635</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/f7b8181755fc1413cd909cbac860d8a76dc848f1\"><code>f7b8181</code></a>\nchore(main): release 6.0.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1641\">#1641</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/c367a6acb003ce286b445638569d6ed8d9e846de\"><code>c367a6a</code></a>\nchore: integ tests manual option (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1639\">#1639</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/7ceaf96edc86cc1713cef59eba79feeb23f59da1\"><code>7ceaf96</code></a>\nfix: correct outputs for role chaining (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1633\">#1633</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a7a2c1125c67f40a1e95768f4e4a7d8f019f87af\"><code>a7a2c11</code></a>\nfeat!: update action to use node24 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1632\">#1632</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/6e3375df071cb03cfbf5fa8ae7770ada6633ab7c\"><code>6e3375d</code></a>\nchore: remove release-please release automation (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1631\">#1631</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/98abed784138c9838ce602dfb51633e39a1a02b8\"><code>98abed7</code></a>\nchore: add workflow_dispatch trigger to release workflow (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1630\">#1630</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/bf3adbbb948ac5c9b2dd90a5beecc537dab6ebbf\"><code>bf3adbb</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/db43b8b90ab5e82cf8affce23d07afc7837ae4b2\"><code>db43b8b</code></a>\nchore: re-run linter</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=aws-actions/configure-aws-credentials&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-09T12:43:25Z",
          "tree_id": "e0a15db1a4e15932c19ddf5b2358f18db75c830b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6976976e401b6147b72ebc3eec4c891fd4a3bca2"
        },
        "date": 1770649420095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5031.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4570.77197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5853.022753906251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.35029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.1287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.051171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.72744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.96806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6245.07958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.289453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5234.2693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.90634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1908.81220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.70380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1720.93935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1354.3267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1787.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1027.721484375,
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
          "distinct": false,
          "id": "57e1d2345ceca3a6601fa1ccc308ba5284be33a6",
          "message": "s3io_benchmark: Add test object generator (#1767)\n\n**What changed and why?** Currently, `s3io_benchmark` requires s3 object\nto exist in the bucket (for `read` jobs) which is inconvenient.\n\n- Added ability to automatically generate new test objects during\ninitialization for read jobs.\n- Uses separate S3 CRT/Uploader client stack to not influence benchmark\njobs.\n  - Didn't use Rust AWS SDK as it's slower than CRT\n  - Didn't use Rust Transfer Manager as it's not GA yet\n- Added new config flag `generate_object` with default value of `true`.\n- Manually tested generating 100GB object.\n- Automatically overwrite write part size if it exceeds 10K max parts S3\nMPU limit\n- Do not perform upload if object with correct size already exists\n\n### Does this change impact existing behavior? \n\nOnly benchmark which is currently not used anywhere.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - benchmark script only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-02-10T14:51:20Z",
          "tree_id": "c4cdddb6749a45619b21d41c8dc6b0f9b0bc2a30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57e1d2345ceca3a6601fa1ccc308ba5284be33a6"
        },
        "date": 1770743500898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5144.267871093751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4559.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5599.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.71240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.37255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5829.3013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.99697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4901.9634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.13759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1695.66142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.28974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1445.228125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1251.35810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.63837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1551.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.662109375,
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
          "id": "c888d4aca999a1eeb54b0e4fbe8f6d25169351e9",
          "message": "Upgrade rand to 0.10 (#1771)\n\nUpgrade the `rand` crate to version `0.10` and address minor breaking\nchanges.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-24T13:39:58Z",
          "tree_id": "1ce2c82403864a7633e14f16977672cb357be851",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c888d4aca999a1eeb54b0e4fbe8f6d25169351e9"
        },
        "date": 1771948716064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4961.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4514.26728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5838.0826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.61982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6311.83505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.71865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5169.23388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.99931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1681.49013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.1548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1410.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1256.80263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.3912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1628.2240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1126.3251953125,
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
          "id": "34b47ffe8231583e4da2035d3d9db2bab8d65c08",
          "message": "Fix remaining cargo_bin warnings (#1772)\n\nFix remaining cargo_bin invocations. Leftover from #1742.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-25T15:55:05Z",
          "tree_id": "920dc8f71acc3a3f84dfe205cd062116d0c937ee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/34b47ffe8231583e4da2035d3d9db2bab8d65c08"
        },
        "date": 1772043549461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4967.69794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4454.518359375001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5748.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.03505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.98251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.801171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.74775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.077734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6024.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.2763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5006.20966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.74375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1920.5314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.93115234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1336.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1396.6349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.88876953125,
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
          "id": "0f6bc61dbeb6117116aeccfb522d5e5f2325e31f",
          "message": "Upgrade toolchain to Rust 1.93 (#1773)\n\nUpgrade toolchain to Rust 1.93.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-02-26T08:29:14Z",
          "tree_id": "630c746c454669926d453888956281bbeb5b3879",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f6bc61dbeb6117116aeccfb522d5e5f2325e31f"
        },
        "date": 1772102879924,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4972.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4565.21982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5786.89013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.30546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.4396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.55234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6177.36552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.72294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5124.98359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.3357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1874.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1636.58232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1266.7599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 52.17314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1779.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1072.667578125,
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
          "distinct": false,
          "id": "fae405ff70749a62f764f7d67c249e2c34a47e09",
          "message": "Bump actions/download-artifact from 7 to 8 (#1774)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 7 to 8.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v8.0.0</h2>\n<h2>v8 - What's new</h2>\n<h3>Direct downloads</h3>\n<p>To support direct uploads in <code>actions/upload-artifact</code>,\nthe action will no longer attempt to unzip all downloaded files.\nInstead, the action checks the <code>Content-Type</code> header ahead of\nunzipping and skips non-zipped files. Callers wishing to download a\nzipped file as-is can also set the new <code>skip-decompress</code>\nparameter to <code>false</code>.</p>\n<h3>Enforced checks (breaking)</h3>\n<p>A previous release introduced digest checks on the download. If a\ndownload hash didn't match the expected hash from the server, the action\nwould log a warning. Callers can now configure the behavior on mismatch\nwith the <code>digest-mismatch</code> parameter. To be secure by\ndefault, we are now defaulting the behavior to <code>error</code> which\nwill fail the workflow run.</p>\n<h3>ESM</h3>\n<p>To support new versions of the @actions/* packages, we've upgraded\nthe package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Don't attempt to un-zip non-zipped downloads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/460\">actions/download-artifact#460</a></li>\n<li>Add a setting to specify what to do on hash mismatch and default it\nto <code>error</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/461\">actions/download-artifact#461</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8.0.0\">https://github.com/actions/download-artifact/compare/v7...v8.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/70fc10c6e5e1ce46ad2ea6f2b72d43f7d47b13c3\"><code>70fc10c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/461\">#461</a>\nfrom actions/danwkennedy/digest-mismatch-behavior</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/f258da9a506b755b84a09a531814700b86ccfc62\"><code>f258da9</code></a>\nAdd change docs</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ccc058e5fbb0bb2352213eaec3491e117cbc4a5c\"><code>ccc058e</code></a>\nFix linting issues</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bd7976ba57ecea96e6f3df575eb922d11a12a9fd\"><code>bd7976b</code></a>\nAdd a setting to specify what to do on hash mismatch and default it to\n<code>error</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac21fcf45e0aaee541c0f7030558bdad38d77d6c\"><code>ac21fcf</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/460\">#460</a>\nfrom actions/danwkennedy/download-no-unzip</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/15999bff51058bc7c19b50ebbba518eaef7c26c0\"><code>15999bf</code></a>\nAdd note about package bumps</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/974686ed5098c7f9c9289ec946b9058e496a2561\"><code>974686e</code></a>\nBump the version to <code>v8</code> and add release notes</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fbe48b1d2756394be4cd4358ed3bc1343b330e75\"><code>fbe48b1</code></a>\nUpdate test names to make it clearer what they do</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/96bf374a614d4360e225874c3efd6893a3f285e7\"><code>96bf374</code></a>\nOne more test fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/b8c4819ef592cbe04fd93534534b38f853864332\"><code>b8c4819</code></a>\nFix skip decompress test</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v7...v8\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=7&new-version=8)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:49:36Z",
          "tree_id": "862d172fb443a4c9b1d2451ac56aeee9a8d28c0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fae405ff70749a62f764f7d67c249e2c34a47e09"
        },
        "date": 1772449717034,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5057.084179687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4641.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.64931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.75078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.348828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.714453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.51455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6273.38369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.509375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5155.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1773.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.14404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1615.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1440.43759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.316796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1980.9,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1154.6666015625,
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
          "id": "93974a085d8e00a2290177fd37e536fe5e260385",
          "message": "Bump actions/upload-artifact from 6 to 7 (#1775)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 What's new</h2>\n<h3>Direct Uploads</h3>\n<p>Adds support for uploading single files directly (unzipped). Callers\ncan set the new <code>archive</code> parameter to <code>false</code> to\nskip zipping the file during upload. Right now, we only support single\nfiles. The action will fail if the glob passed resolves to multiple\nfiles. The <code>name</code> parameter is also ignored with this\nsetting. Instead, the name of the artifact will be the name of the\nuploaded file.</p>\n<h3>ESM</h3>\n<p>To support new versions of the <code>@actions/*</code> packages,\nwe've upgraded the package to ESM.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Add proxy integration test by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n<li>Upgrade the module to ESM and bump dependencies by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/762\">actions/upload-artifact#762</a></li>\n<li>Support direct file uploads by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/764\">actions/upload-artifact#764</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/Link\"><code>@​Link</code></a>- made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/754\">actions/upload-artifact#754</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7.0.0\">https://github.com/actions/upload-artifact/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/bbbca2ddaa5d8feaa63e36b76fdaad77386f024f\"><code>bbbca2d</code></a>\nSupport direct file uploads (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/764\">#764</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/589182c5a4cec8920b8c1bce3e2fab1c97a02296\"><code>589182c</code></a>\nUpgrade the module to ESM and bump dependencies (<a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/762\">#762</a>)</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/47309c993abb98030a35d55ef7ff34b7fa1074b5\"><code>47309c9</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/754\">#754</a>\nfrom actions/Link-/add-proxy-integration-tests</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/02a8460834e70dab0ce194c64360c59dc1475ef0\"><code>02a8460</code></a>\nAdd proxy integration test</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-02T08:54:26Z",
          "tree_id": "26639ba3d195645e3f422dcb2b62b79a87e713fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93974a085d8e00a2290177fd37e536fe5e260385"
        },
        "date": 1772449999661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5069.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4603.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5898.646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.590625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6339.34833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5247.9232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.33095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1665.4578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1642.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1271.00908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.4962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.86513671875,
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
          "id": "61f2416088f120238aa393b66247bfc487a7658e",
          "message": "Make `MemoryPool` buffer acquisition async-ready (#1768)\n\n**What changed and why?**\n\nThis PR makes the `MemoryPool` trait async-capable by adding a new\n`get_buffer_async()` method, and wires up the CRT bridge so that buffer\nacquisition on the read path is spawned on a CRT event loop. (Note that\non write-path we must keep doing `get_buffer()` in a sync way due to CRT\nlimitation\n[here](https://github.com/awslabs/aws-c-s3/blob/main/source/s3_meta_request.c#L2618-L2631))\n\nCurrently, when the S3 client needs a memory buffer, it calls\n`get_buffer` and blocks until the buffer is allocated. This works fine\nnow because allocation is instant. But we want to support a future\nscenario where the pool is full and needs to wait for memory to free up.\nAdding `get_buffer_async` lays the groundwork — the actual behavior\ndoesn't change much (allocations are still instant, but they now execute\non a separate Task/Future on the read path), but the infrastructure is\nin place.\n\nThe async future is spawned on existing CRT's `EventLoopGroup`. Note\nthat there is a timing issue: we create the `CrtBufferPoolFactory`\n(wrapping `MemoryPoolFactory`) when building `S3ClientConfig`, but the\n`EventLoopGroup` doesn't exist yet — it's created inside\n`S3CrtClientInner::new()`. So the factory must be constructed before the\nthread pool it needs to reference. The solution is to create wrapper\n`MemoryPoolFactoryWrapper`.\n\n### Does this change impact existing behavior?\n\n- Get buffer on read-path is now fulfilled on a separate spawned\nTask/Future instead of immediately in a sync way.\n- `MemoryPool` trait has now `'static + Send` bounds\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-02T22:57:56Z",
          "tree_id": "8c343884699c4747da1913cb7573998c70b0d541",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61f2416088f120238aa393b66247bfc487a7658e"
        },
        "date": 1772500652645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4964.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4492.417285156251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5814.96083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.690625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.91064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.66533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.266796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6125.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5068.3337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1795.3060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1456.3150390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1284.23974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1419.9642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.89326171875,
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
          "id": "726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f",
          "message": "Upgrade Cargo dependencies (#1777)\n\nUpgrade Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-03T10:45:25Z",
          "tree_id": "b8094bd57bfc31d5559eb6a277e7e4a60ebdbf54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726b0b60bda1709cdb0be1a82fdb0c1f8cb0b41f"
        },
        "date": 1772543077829,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5121.49267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4641.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5852.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.72890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5955.51962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 236.7359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5216.03779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1911.15361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.34931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1794.48984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1290.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.92255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1082.27705078125,
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
          "id": "41ae7ff7e7169de4f25bd33c39cee43c8c1c8555",
          "message": "Add DEVELOPMENT.md doc (#1717)\n\nThis introduces a document describing how to get started as a\ncontributor to Mountpoint. This partially replaces existing internal\ndocumentation that we have.\n\nBy moving it into the repository, it is:\n\n- In an expected location\n- Available to internal and external contributors alike\n- Available for both developers but also AI agents should a developer\nwant to make use of AI tooling\n\n### Does this change impact existing behavior?\n\nNo, project docs change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-03T16:51:54Z",
          "tree_id": "9c75bc8fdbc30b5488075e814acdb510ced61e2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41ae7ff7e7169de4f25bd33c39cee43c8c1c8555"
        },
        "date": 1772565007363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4889.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4468.682812499999,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5832.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.3173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.0796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6259.96533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.07666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5083.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1807.77197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.891015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1248.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.0537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1769.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.3181640625,
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
          "id": "27ca3a014d7f5c8fb087faca52fd823a31a8788f",
          "message": "Bump docker/build-push-action from 6 to 7 (#1783)\n\nBumps\n[docker/build-push-action](https://github.com/docker/build-push-action)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/docker/build-push-action/releases\">docker/build-push-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<ul>\n<li>Node 24 as default runtime (requires <a\nhref=\"https://github.com/actions/runner/releases/tag/v2.327.1\">Actions\nRunner v2.327.1</a> or later) by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1470\">docker/build-push-action#1470</a></li>\n<li>Remove deprecated <code>DOCKER_BUILD_NO_SUMMARY</code> and\n<code>DOCKER_BUILD_EXPORT_RETENTION_DAYS</code> envs by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1473\">docker/build-push-action#1473</a></li>\n<li>Remove legacy export-build tool support for build summary by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1474\">docker/build-push-action#1474</a></li>\n<li>Switch to ESM and update config/test wiring by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1466\">docker/build-push-action#1466</a></li>\n<li>Bump <code>@​actions/core</code> from 1.11.1 to 3.0.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1454\">docker/build-push-action#1454</a></li>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.62.1 to 0.79.0 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1453\">docker/build-push-action#1453</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1472\">docker/build-push-action#1472</a>\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1479\">docker/build-push-action#1479</a></li>\n<li>Bump minimatch from 3.1.2 to 3.1.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1463\">docker/build-push-action#1463</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0\">https://github.com/docker/build-push-action/compare/v6.19.2...v7.0.0</a></p>\n<h2>v6.19.2</h2>\n<ul>\n<li>Preserve port in <code>GIT_AUTH_TOKEN</code> host by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1458\">docker/build-push-action#1458</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2\">https://github.com/docker/build-push-action/compare/v6.19.1...v6.19.2</a></p>\n<h2>v6.19.1</h2>\n<ul>\n<li>Derive <code>GIT_AUTH_TOKEN</code> host from GitHub server URL by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1456\">docker/build-push-action#1456</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1\">https://github.com/docker/build-push-action/compare/v6.19.0...v6.19.1</a></p>\n<h2>v6.19.0</h2>\n<ul>\n<li>Scope default git auth token to <code>github.com</code> by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1451\">docker/build-push-action#1451</a></li>\n<li>Bump brace-expansion from 1.1.11 to 1.1.12 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1396\">docker/build-push-action#1396</a></li>\n<li>Bump form-data from 2.5.1 to 2.5.5 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1391\">docker/build-push-action#1391</a></li>\n<li>Bump js-yaml from 3.14.1 to 3.14.2 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1429\">docker/build-push-action#1429</a></li>\n<li>Bump lodash from 4.17.21 to 4.17.23 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1446\">docker/build-push-action#1446</a></li>\n<li>Bump tmp from 0.2.3 to 0.2.4 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1398\">docker/build-push-action#1398</a></li>\n<li>Bump undici from 5.28.4 to 5.29.0 in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1397\">docker/build-push-action#1397</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0\">https://github.com/docker/build-push-action/compare/v6.18.0...v6.19.0</a></p>\n<h2>v6.18.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.61.0 to 0.62.1 in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1381\">docker/build-push-action#1381</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\n<a\nhref=\"https://docs.docker.com/build/ci/github-actions/build-summary/\">Build\nsummary</a> is now supported with <a\nhref=\"https://docs.docker.com/build-cloud/\">Docker Build Cloud</a>.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0\">https://github.com/docker/build-push-action/compare/v6.17.0...v6.18.0</a></p>\n<h2>v6.17.0</h2>\n<ul>\n<li>Bump <code>@​docker/actions-toolkit</code> from 0.59.0 to 0.61.0 by\n<a href=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in\n<a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1364\">docker/build-push-action#1364</a></li>\n</ul>\n<blockquote>\n<p>[!NOTE]\nBuild record is now exported using the <a\nhref=\"https://docs.docker.com/reference/cli/docker/buildx/history/export/\"><code>buildx\nhistory export</code></a> command instead of the legacy export-build\ntool.</p>\n</blockquote>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0\">https://github.com/docker/build-push-action/compare/v6.16.0...v6.17.0</a></p>\n<h2>v6.16.0</h2>\n<ul>\n<li>Handle no default attestations env var by <a\nhref=\"https://github.com/crazy-max\"><code>@​crazy-max</code></a> in <a\nhref=\"https://redirect.github.com/docker/build-push-action/pull/1343\">docker/build-push-action#1343</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/d08e5c354a6adb9ed34480a06d141179aa583294\"><code>d08e5c3</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1479\">#1479</a>\nfrom docker/dependabot/npm_and_yarn/docker/actions-t...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cbd2dff9a0f0ef650dcce9c635bb2f877ab37be5\"><code>cbd2dff</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/f76f51f12900bb84aa9d1a498f35870ef1f76675\"><code>f76f51f</code></a>\nchore(deps): Bump <code>@​docker/actions-toolkit</code> from 0.78.0 to\n0.79.0</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/7d03e66b5f24d6b390ab64b132795fd3ef4152c8\"><code>7d03e66</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1473\">#1473</a>\nfrom crazy-max/rm-deprecated-envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/98f853d923dd281a3bcbbb98a0712a91aa913322\"><code>98f853d</code></a>\nchore: update generated content</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/cadccf6e8c7385c86d9cb0800cf07672645cc238\"><code>cadccf6</code></a>\nremove deprecated envs</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/03fe8775e325e34fffbda44c73316f8287aea372\"><code>03fe877</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1478\">#1478</a>\nfrom docker/dependabot/github_actions/docker/setup-b...</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/827e36650e1fa7386d09422b5ba3c068fdbe0a1d\"><code>827e366</code></a>\nchore(deps): Bump docker/setup-buildx-action from 3 to 4</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/e25db879d025485a4eebd64fea9bb88a43632da6\"><code>e25db87</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1474\">#1474</a>\nfrom crazy-max/rm-export-build-tool</li>\n<li><a\nhref=\"https://github.com/docker/build-push-action/commit/1ac2573b5c8b4e4621d5453ab2a99e83725242bd\"><code>1ac2573</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/docker/build-push-action/issues/1470\">#1470</a>\nfrom crazy-max/node24</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/docker/build-push-action/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=docker/build-push-action&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-09T09:33:27Z",
          "tree_id": "c9ba3743efd90d6b4ae95a2dad003035dfe5d3ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27ca3a014d7f5c8fb087faca52fd823a31a8788f"
        },
        "date": 1773057093345,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5029.551171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4637.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5877.85009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.39775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.2048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.94609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.34638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6381.6560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5171.18876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1836.49208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.30703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1404.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.88349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1427.88056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.82822265625,
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
          "id": "90bb0b4d4f890bc0a77898f6d7cdbb20895a9650",
          "message": "Fix default data cache limit validation during eviction (#1779)\n\nFixes `is_limit_exceeded()` function used by the data cache when in\ndefault mode (which should keep 5% of space in the cache file system).\nBefore the fix, it was incorrectly considering space reserved by the\nfile system as available space leading to 100% space usage. Now,\nreserved space is considered and the 5% available space is respected. A\nregression test was also added.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-09T16:47:27Z",
          "tree_id": "20f6ef4d0237f2a088335d68be2c71196eaf7748",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bb0b4d4f890bc0a77898f6d7cdbb20895a9650"
        },
        "date": 1773083221941,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4978.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4515.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5775.35673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.83076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.7041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.8802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.30771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.996484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6057.19609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.7083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5122.2365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 230.394921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1634.198828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.23779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1458.8775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1303.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.95888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1878.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.47255859375,
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
          "id": "855fa94bd3b40780018368a90b16ef837eb7e2f4",
          "message": "Fix read issue on concurrent open after truncate (#1781)\n\nFix race condition when 2 concurrent open requests occur after a\ntruncate and resulting in errors on read.\n\nThe issue is caused by a concurrent operation which ignores that the\ninode is still completing an upload and tries to refresh its state by\nperforming a remote lookup to the bucket. By the time the remote lookup\ncompletes, its result may be stale but still be used to overwrite the\nresult of the upload. This fix adds a check for a pending upload instead\nof only relying on the `write_status` field.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog entries for a patch release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T17:42:42Z",
          "tree_id": "beb72a04226e62ebc716133f9c9b272a97fa25ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/855fa94bd3b40780018368a90b16ef837eb7e2f4"
        },
        "date": 1773086568105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4487.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5847.190234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.41630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.05205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.43046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.84580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.04150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6322.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.44208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4913.03818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1863.14970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.8015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1360.30166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1890.3376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 962.8759765625,
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
          "id": "4270f8c47fa0717a9dcc87828eca01d12fc42d7a",
          "message": "Update changelogs for v1.22.1 release (#1784)\n\nUpdate changelogs for v1.22.1 release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T18:29:42Z",
          "tree_id": "c65d8b678eb9cb90ff43817065ad504b9b8cd445",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4270f8c47fa0717a9dcc87828eca01d12fc42d7a"
        },
        "date": 1773089352472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4942.84384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4537.91328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5836.19765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.717578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.7525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.78330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.68466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6218.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4995.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1848.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.8046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.26103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.96025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.99658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.91025390625,
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
          "id": "0e042567569dedfe47397ee0dc023917771faefb",
          "message": "Update CRT submodules to latest releases (#1778)\n\nUpdate the CRT submodules to the latest releases.\n\nUpdated libraries:\n- aws-c-auth: v0.9.5 -> v0.10.0\n- Pick up: support imds endpoint override\n([#286](https://github.com/awslabs/aws-c-auth/pull/286))\n- aws-c-http: v0.10.9 -> v0.10.11\n- aws-c-io: v0.26.0 -> v0.26.1\n- aws-checksums: v0.2.8 -> v0.2.10\n- aws-lc: v1.66.2 -> v1.69.0\n- s2n-tls: v1.6.4 -> v1.7.0\n\n\n<details> <summary>Full CRT changelog:</summary>\n\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth a4409b95..5aefd277:\n  > support imds endpoint override (#286)\n  > Prioritizing profile credentials over credential_process when both are present (#288)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http acf31399..0d8e1a93:\n  > Fail http proxy configuration when using SecItem (#551)\n  > [fix] h2 stream manager initial settings not passed correctly & Log the headers (#544)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io d5ad01ce..bfb0819d:\n  > Add PQ-opt-out pref to supported s2n cases (#786)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 270b15ac..1d5f2f1f:\n  > Add flag to disable unknown pragmas on ARM (#111)\n  > Add XXHash algos (#110)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 728811ee..37d86461:\n  > Return correct error value when parsing PKCS7 authenticated attributes fails (#3061)\n  > Use CRYPTO_memcmp instead of OPENSSL_memcmp for tag verification (#3060)\n  > Ensure all signer certificate chains are verified (#3059)\n  > Prepare v1.69.0 (#3049)\n  > Simplify `d2i_PKCS7` by removing redundant BER-to-DER conversion (#3037)\n  > Key state consistency in PQDSA_KEY setter functions (#3040)\n  > Fix error return values for no-op UI_xxx stub functions (#3025)\n  > Update ACVP documentation (#2960)\n  > Retain flag after custom critical extensions check (#3030)\n  > Fix PKCS7 verify content memleak (#3036)\n  > Fix error reporting and document EC explicit params single-cert behavior (#3044)\n  > Various PKCS7 fixups (#3035)\n  > Fix link in README.md (#2945)\n  > Fix FIPS delocator handling of floating-point immediates on aarch64 (#3029)\n  > Prepare v1.68.0 (#3022)\n  > Refactor PQDSA_KEY set_raw functions to use goto-err cleanup (#2993)\n  > Generate Rust Bindings (#2999)\n  > Support WASM/Emscripten (#2959)\n  > Update Ubuntu 24:04 image compiler verification (#3017)\n  > Fix CI: mariadb (#3015)\n  > Miscellaneous CI improvements (#2978)\n  > Fix argument order in `hmac_copy` (#3014)\n  > Fix OPENSSL_memchr per C23 (#3008)\n  > Fix Windows CI: use `cd /d` in run_windows_tests.bat to handle cross-drive paths (#3012)\n  > Fix CI: gcc-4.8 (#3011)\n  > Reject XOF digests in DH_compute_key_hashed\n  > reject zero-sized digests in HKDF EVP_PKEY\n  > evp: disable EVP_PKEY_derive for KEM method\n  > pkcs8: cap ciphertext length before allocating in pkcs8_pbe_decrypt\n  > 1-byte OOB read in EVP_PKEY_asn1_find_str length calculation\n  > evp: fix DSA keygen error-path UAF/double-free\n  > Correct CCM nids in object definition (#2991)\n  > Ensure public key is set before verifying through ML-DSA verify (#2990)\n  > Remove redundant CPython 3.9 integration test (#2996)\n  > Ensure no overflow in signed output length in do_buf (#2988)\n  > Ensure index argument is not negative in ASN1_BIT_STRING_set_bit (#2987)\n  > Add PyOpenSSL integration test (#2992)\n  > Free potential memory before assigning new pointer (#2989)\n  > Support GCC 4.8 for aarch64 (#2964)\n  > Bump bytes from 1.7.1 to 1.11.1 in /tests/ci/lambda (#2983)\n  > Address some CMake findings (#2979)\n  > Update Wycheproof ECDSA test vectors and fix workflow typo (#2972)\n  > Disable SLP vectorizer for FIPS shared library builds on GCC 14+ (#2977)\n  > Nmap build needs liblinear (#2985)\n  > Add method to get type of ML-DSA instance configured under EVP PKEY (#2980)\n  > Fix aws-lc-rs CI job (#2966)\n  > Simplify FIPS conditional in top-level build script (#2976)\n  > Integrate Wycheproof ML-DSA test vectors (#2973)\n  > Bump mysql cluster version (#2967)\n  > Shorten Windows Build Directory Path (#2974)\n  > Add missing env vars to check-vectors workflow step (#2962)\n  > Fix checkout logic for android-omnibus (#2970)\n  > Ensure pkcs7 checks ASN1_TYPE->type (#2968)\n  > Migrate Android Testing to GitHub Actions (#2969)\n  > Adds a new randomness generation API (#2963)\n  > Model Device Farm CI Resources in CDK (#2965)\n  > Remove FIPS counter framework and other tidying up (#2947)\n  > Fix image-build-windows workflow to only push on workflow_call and workflow_dispatch (#2961)\n  > Move md4 out of FIPS module (#2956)\n  > Initial Framework for Using Doxygen to Document Public Header Files (#2908)\n  > openssl-ca command implementation for self-sign certificates (#2937)\n  > Remove AVX conditional from cmake script (#2958)\n  > Enable Hybrid PQ KeyShares by default (#2531)\n  > Add weekly automated check for outdated third-party test vectors (#2933)\n  > Bump urllib3 from 2.6.0 to 2.6.3 in /tests/ci (#2932)\n  > Prepare v1.67.0 (#2952)\n  > Bump FreeBSD testing to v14.2 and v15.0 (#2955)\n  > Fix CMake CI jobs (#2953)\n  > Update patch for nmap. (#2954)\n  > Cleanup pass on Go code in repository (#2951)\n  > Avoid cross-compilation build failure (#2944)\n  > Integrate Wycheproof ML-KEM test vectors (#2891)\n  > Use existing session context if new is actually NULL (#2946)\n  > Import mldsa-native (#2902)\n  > Windows 7 support (#2940)\n  > Remove Kyber completely (#2941)\n  > Use already defined macro for no inline (#2942)\n  > AES-GCM: Add function pointer trampolines to avoid delocator issue (#2919)\n  > Add support for Big Endian in ACVP tool (#2938)\n  > Service Indicator: Add error call trampoline to avoid delocator issue (#2920)\n  > Fix failing Windows Docker image build (#2931)\n  > Rename volatile state/memory to unique state/memory (#2935)\n  > increase timeout for SDE tests (#2936)\n  > Migrate Wycheproof test vectors for ECDSA, RSA PKCS#1, and some more (#2887)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 3276a087..f5e5e830:\n  > chore: rust binding release v0.3.34 (#5707)\n  > chore: add static lists of supported TLS parameters (#5698)\n  > feat(bindings): expose disable_x509_intent_verification API (#5703)\n  > test (integration): add renegotiate rust test (#5689)\n  > test(integration): add rust test for session resumption (#5683)\n  > chore: move s2n-tls-bench to Codebuild (#5693)\n  > chore: update s2n-tls-hyper crates version to 0.1.0 (#5702)\n  > Mark Kyber as unsupported on all LibCrypto variants (#5701)\n  > chore: bump standard MSRV to 1.83 (#5700)\n  > chore: bump to nixpkgs 2025.05 (#5489)\n  > build(deps): update reqwest requirement from 0.12.7 to 0.13.1 in /tests/pcap in the all-cargo-updates group across 1 directory (#5690)\n  > (chore): Rust bindings bump 0.3.33 (#5694)\n```\n\n\n</details>\n\nConfirmed the crate size is under the 10MiB limit (8.3MiB compressed)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-10T10:36:51Z",
          "tree_id": "8aa074215eb0f1357c6bdf9c18daed19542706ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e042567569dedfe47397ee0dc023917771faefb"
        },
        "date": 1773147342817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5069.53642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4549.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5841.36494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.90302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.17412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.144921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6280.5916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.7376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5160.49765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1945.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1549.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.1232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1734.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1063.00869140625,
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
          "id": "d2c41aba090af32c8d867b0fe4a67ae82169763a",
          "message": "Fix build failure on macOS (#1785)\n\nFix a platform-specific type casting error surfaced on macOS.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-11T10:40:37Z",
          "tree_id": "813a7ad399f17fbc0a4ee3deee0ce08c0ccfcb0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2c41aba090af32c8d867b0fe4a67ae82169763a"
        },
        "date": 1773233972172,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5063.2671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4574.125390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5888.478222656249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.4361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.26318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.65,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.076953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.18603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6456.13408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.3958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5267.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 228.9703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1746.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.3318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1510.64306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1224.80654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.07490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.47998046875,
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
          "id": "43618edd0ccfb65c7264eeeca35cab59e4741cbf",
          "message": "CI: Run Clippy on macOS (#1786)\n\nAdd clippy to the macOS workflow. It will help detect issues like #1785\nearly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-12T12:24:24Z",
          "tree_id": "293d67e3c74b0b61d7e55481a4d31228a782d02c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43618edd0ccfb65c7264eeeca35cab59e4741cbf"
        },
        "date": 1773326605609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5041.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4524.348437500001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.803125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.16533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6365.44677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.14365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5045.67099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1865.640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.46513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1440.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1212.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.61240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1876.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1037.5291015625,
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
          "id": "0a205061c3231ef239d67c6836d1cb94aaaeabb0",
          "message": "Add developer container to support running integration tests, etc. on macOS (#1780)\n\nOn macOS, it is not considered reliable to run the integration tests for\nFUSE. This PR introduces a container for performing development-related\ntasks, but in particular running integration tests.\n\nThis allows developers using a macOS system to run FUSE tests using a\nreal Linux kernel (when using something like Docker Desktop, Colima,\nFinch, etc..).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, developer change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-13T10:23:17Z",
          "tree_id": "97f08ec0d1b4b9c529653eba5a90b5db47d8f6d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a205061c3231ef239d67c6836d1cb94aaaeabb0"
        },
        "date": 1773405732007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5018.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4540.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5856.45537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.86005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.93603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.1099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.09326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.1986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.96611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6315.245703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.946875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5155.58662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1934.74912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.4400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1546.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.90087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.66845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1747.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1092.36650390625,
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
          "id": "7c41baaa3ca29d9f0215573fb3bb9e6303150e9d",
          "message": "Update dev container to support local cache tests depending on loopback fs (#1788)\n\nBefore this change, running integration tests in the container would\nfail as it would not be able to run sudo, create the ext4 filesystem\netc. introduced by #1779.\n\nThis change updates the container to be able to invoke sudo, and adds\nmissing dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dev container change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T14:37:38Z",
          "tree_id": "807ed655a8ee90ed37491395f499f4f382f17ab6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c41baaa3ca29d9f0215573fb3bb9e6303150e9d"
        },
        "date": 1773766774446,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4846.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4539.79521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5859.12490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.71826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6371.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 219.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5080.527734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1542.628515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.92666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1179.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.83701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1953.472265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1054.59716796875,
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
          "id": "57116c95347e5ff868fd45853f33c26e9dad12ee",
          "message": "Update local cache loop device fs tests with better error handling (#1789)\n\nBefore this change, it was difficult to identify what was going wrong\nwith a test that involved creating a new ext4 filesystem using a loop\ndevice. It might fail simply with \"file not found\" when `sudo` was not\ninstalled.\n\nThis change updates the test to use anyhow in order to capture\nadditional context about what went wrong. The use of anyhow is limited\nto the tests and not the source code.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T15:10:16Z",
          "tree_id": "63e9ff6474a19b6807e1285a90c24f50cc03c892",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57116c95347e5ff868fd45853f33c26e9dad12ee"
        },
        "date": 1773769098548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4991.61875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4456.9765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5815.075878906249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.44990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.84697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.85048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.10146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.7634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6164.28515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.6013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5089.45517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 224.49736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1944.9052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.46337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.95107421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1228.20458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1805.26982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1075.56748046875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1773769099703,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}