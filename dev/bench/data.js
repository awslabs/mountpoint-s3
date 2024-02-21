window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "4eba52d3f0102e997c985ff32e7c8f3238d58fc2",
          "message": "Update and prune some dependencies (#731)\n\n* Update dependencies to remove some duplicate versions\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Sort cargo dependencies (no actual changes)\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Remove fs2 dependency\n\nIt's old and unmaintained, and nix has a statvfs implementation. The only trick\nis that nix makes us do the block-size calculation ourselves, but since we only\ncare about the ratio of free blocks, we actually don't need the block size at all.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Cleanup some default dependency features\n\nA few features we either weren't using at all, or were only using in tests\nand so can remove from the release build.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n---------\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2024-02-05T19:42:05Z",
          "tree_id": "3928861a29bac604618365e66bee358c2fd7daf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4eba52d3f0102e997c985ff32e7c8f3238d58fc2"
        },
        "date": 1707175176938,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.39853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.146875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.87744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.683203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.59248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.82109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4733.55166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.8841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.5970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1414.56044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.1302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1279.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.180859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1571.71005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 947.22802734375,
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
          "id": "05f6cc31581ae02180701675db8e6eda2326a7f2",
          "message": "Use stable Rust for address sanitizer (#734)\n\n* Use stable Rust for address sanitizer\r\n\r\nNightly is broken today, which blocks our CI. This is the third or\r\nfourth time this has happened to us, so let's switch over to using the\r\nRUSTC_BOOTSTRAP hack to use nightly features on stable Rust. This is\r\nscoped only to the ASan makefile target, so it won't actually allow us\r\nto use nightly features in our code, just when running the sanitizers.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Install stable Rust\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-06T10:36:45-06:00",
          "tree_id": "6c34edea9d35c57e1fbabe7ad55f4539bde0acae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f6cc31581ae02180701675db8e6eda2326a7f2"
        },
        "date": 1707248743439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.89365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.4390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.75556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.721484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.71201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4586.76923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.8689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.186328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1344.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.50458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1092.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.9458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1397.0875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.5083984375,
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
          "id": "9bb6ced313e3a4f4cc3f3d31d01796e9ae3f2f9c",
          "message": "Introduce negative_cache feature flag (#733)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-06T18:14:18Z",
          "tree_id": "8d6ac78d68015fa62d2bc2b19ebdbc3d9be41c19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9bb6ced313e3a4f4cc3f3d31d01796e9ae3f2f9c"
        },
        "date": 1707255947921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.48642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.79091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.90556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4491.74501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.1931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 75.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1422.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.7970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.78388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1747.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.366015625,
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
          "id": "53e22be32f9a3c0b0f7550c4d4a247837a7bccc5",
          "message": "Introduce negative metadata cache entries (#696)\n\n* Extract Expiry type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce negative cache\n\nReduce latency when repeatedly looking up non-existing files or directories (when cache is enabled).\n\nThis change adds negative metadata cache entries: whenever a lookup fails because an object does not exist, we cache a “negative” entry with the same TTL as for successful lookups and use it to reply to subsequent kernel requests for the same name.\n\nThe negative entries are maintained separately from the inode tree using the new `NegativeCache` type, which enforces an upper limit to the number of entries and handles their expiration.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Enforce maximum value for metadata TTL (100 years)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Document negative cache limit\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-07T10:14:02Z",
          "tree_id": "5439d3f4271fb7ea02febddef9f9b63441cced7f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53e22be32f9a3c0b0f7550c4d4a247837a7bccc5"
        },
        "date": 1707313539877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.05078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.97158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.1703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.1755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4593.21171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.334765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1379.296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.76865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.01201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.8978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1070.7078125,
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
          "id": "911255fa7df0b093eb52c68e68eb8cef15d901a7",
          "message": "Update to GA release of Rust SDK (#732)\n\nThis is mostly pretty straightforward with the exception of handling S3\nExpress One Zone, which isn't yet supported in the Rust SDK, but the SDK\nis now aware of its existence. The new SDK doesn't understand the\n`sigv4-express` auth scheme that Express buckets resolve to, and falls\nback to no auth at all. And we can't skip over the endpoint resolution\nby leaving out the bucket name any more because the SDK now validates\nthat bucket is present.\n\nOur new workaround is to insert an endpoint resolver that just forces\nSigV4. We still get to use the real endpoint resolver to figure out\neverything else, including the endpoint URL (so that variable can be\nremoved). We can remove this hack once the SDK gains Express support.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-07T15:38:48Z",
          "tree_id": "1feaca574a8fb31ac42498f3d1e21231e22710e3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/911255fa7df0b093eb52c68e68eb8cef15d901a7"
        },
        "date": 1707333061751,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.48515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.9197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.8849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.51748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.83583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.571484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4656.6578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 76.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.72216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1260.95166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1173.25283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.8255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1176.25673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 974.50146484375,
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
          "id": "14e1496716b3dd02d1033951ba045d8d24df7f5f",
          "message": "Update CRT submodules to latest releases (#737)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T16:12:13Z",
          "tree_id": "d4ec4f76c2799c694da9d1e2f42697cb4d520de6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/14e1496716b3dd02d1033951ba045d8d24df7f5f"
        },
        "date": 1707335258313,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.0572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.68203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.6197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.61689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4451.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 216.0240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.33720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.73505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1369.1275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.72021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1167.21640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.00302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1397.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.180078125,
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
          "id": "d959640b34b0607be4ece382482f893a4b851069",
          "message": "run the binary mount-s3 for benchamrks (#739)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-07T22:27:13Z",
          "tree_id": "a939a0e2631e002dbef8a2abe8c4d39ac9eb4fa7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d959640b34b0607be4ece382482f893a4b851069"
        },
        "date": 1707356968290,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.3666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.23818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.7572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.159765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.184765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4567.81943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 76.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1242.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.284765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1144.56630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.1060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1532.26494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1068.56435546875,
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
          "id": "61a0133dfb8ee7e7f1722c6ed89070d9b1141736",
          "message": "Fix the updated clippy error (#742)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-09T15:49:39Z",
          "tree_id": "b091aa65ba5ed58f7ce53df94f8d9852fbe5875a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61a0133dfb8ee7e7f1722c6ed89070d9b1141736"
        },
        "date": 1707505896724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.42314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.03173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.65146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.66708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4660.3484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.59921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.80576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1517.547265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1234.1708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1437.9318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1061.9017578125,
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
          "id": "cfc11cd0020cd6118231d08795484197d890f72c",
          "message": "Fix packaging workflow on AL2023 (#741)\n\nIt sets a much higher ulimit for open files, and that seems to interact\nbadly with `yum` on Centos 7. The net result is that our packaging\nworkflow takes hours\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-09T16:07:02Z",
          "tree_id": "86dd6c761c7ce31b7578ebdda9aae965cf9b6fb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfc11cd0020cd6118231d08795484197d890f72c"
        },
        "date": 1707506994855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.55732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.28017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.60341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4564.26318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.96591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.8451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1375.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.81552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1458.2966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.76064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1447.5509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.66962890625,
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
          "id": "0b980a0fc8c50e75b2a3ef45ba56a8766a51528a",
          "message": "Add support for --sse, --sse-kms-key-id flags under a feature flag (#715)\n\n* Add support for --sse, --sse-kms-key-id flags\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor erroneous_write_sse\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix clippy\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-09T16:32:49Z",
          "tree_id": "f9d3a161ff7c6eadd8529a9c80bdfbb46abd1282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b980a0fc8c50e75b2a3ef45ba56a8766a51528a"
        },
        "date": 1707508510560,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.41591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.56494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.25595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.85751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4551.8513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.73017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 80.5125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.01982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1295.29013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.4482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1331.66708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.280859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1627.65341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.21494140625,
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
          "id": "0ef41589b9e273fc1ca02e05aa3319c26d29b3ba",
          "message": "Update libgit2-sys 0.16.1 to 0.16.2 (#746)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-02-12T11:52:22Z",
          "tree_id": "43ea5f45665640e346ef7dd5a2e6138f34709b0e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0ef41589b9e273fc1ca02e05aa3319c26d29b3ba"
        },
        "date": 1707750877388,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.2634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.64052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4738.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.51845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 105.1001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.67099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1340.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1296.70546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1550.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.31708984375,
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
          "id": "a3e61687ff58fbb9b2b32e81f1e9def07eccc876",
          "message": "Release new mountpoint-s3-client crate version (#747)\n\n* Release new mountpoint-s3 client crate version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the release to v0.7.0\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-12T17:31:34Z",
          "tree_id": "23059aa1f9f81d3d9821e639e646f72540a2dca2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3e61687ff58fbb9b2b32e81f1e9def07eccc876"
        },
        "date": 1707771375403,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.2595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.53916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.4767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.56201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.790625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.82275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4046.2265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.93564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 65.028125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.63388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 937.1140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.5498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 980.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1755.3767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1047.1833984375,
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
          "id": "dce1480c723aa6ecfef7e0caca6581c64266c9c7",
          "message": "Raise filter for metrics tracing spans to WARN (#748)\n\nThis change avoids unnecessary invocations of the CRT log handlers,\nwhich are fairly expensive and therefore worth avoiding, but it's a bit\nof a journey to explain why and how.\n\nThe `MetricsTracingSpanLayer` is how we get end-to-end latencies for\nFUSE operations. It tracks the spans created by the `fuse` module and\nemits latency metrics at the end of them. To do this, it filters for\nthose spans, and that filter specifies both a target name and a maximum\nlevel, which is currently DEBUG. This tracing layer gets added to the\nregistry we construct in `init_tracing_subscriber` at mount time.\n\nBecause this filter asks for DEBUG-level spans, the overall tracing\nsubscriber sets its maximum level to DEBUG, even though (in our default\nconfiguration) we only emit logs at WARN and below. This maximum level\nis how `tracing` and `log` can cheaply check whether to skip\nconstructing a log event -- they check if the log event's level is\nhigher than the maximum level. So setting the maximum level to DEBUG\nmakes this cheap filtering less effective, and some log messages will be\nconstructed but not emitted (because they'll fail the actual, more\nexpensive check) as a result.\n\nOne place that uses this cheap filtering is our CRT log adapter. The CRT\nlogging macros call `get_log_level` to find out what the maximum log\nlevel currently being emitted is, and skip calling the actual log method\nif they're trying to emit a log message at a higher level than that. Our\nimplementation of `get_log_level` checks the maximum level set by the\ntracing subscriber (via `log::max_level()`, which is set by\n`tracing-log`).\n\nThe net result is that the CRT logging macros end up calling their\nactual log methods more often than they need to, because even though we\nset CRT logging to off by default, the `log::max_level()` is set to\nDEBUG because of the logic above. And because of some Rust/C FFI\nweirdness, these methods are somewhat expensive: they need to construct\nthe entire log message before they can filter to decide if the message\nshould actually be emitted (this is what the the\n`aws_crt_s3_rs_logging_shim_log_fn_trampoline` method does). In\nbenchmarks, this log construction can show up in profiles as up to 5% of\nour CPU cycles even though none of these log messages will actually be\nemitted.\n\nTo fix this, we can change the maximum level of the\n`MetricsTracingSpanLayer`'s filter to WARN. The spans it's interested in\nhave been at warning severity for quite a while, so this doesn't change\nanything about our actual logging. But it does mean that the tracing\nsubscriber can now set its maximum level to WARN instead of DEBUG, which\nmakes the cheap filtering effective for the CRT log handlers, avoiding\nconstructing every DEBUG-or-below log message only to throw it away.\n\nAs a simple test, we can use perf to count how often the CRT log handler\nis invoked:\n\n    $ sudo perf probe -x target/release/mount-s3 -a aws_crt_s3_rs_logging_shim_log_fn\n\nBefore this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:05:56.471429Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=33.846617ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                592      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\nAfter this change:\n\n    $ sudo perf stat -e probe_mount:aws_crt_s3_rs_logging_shim_log_fn -- target/release/mount-s3 bornholt-test-bucket ~/mnt -f\n    2024-02-12T20:01:17.588700Z  WARN list_objects{id=0 bucket=\"bornholt-test-bucket\" continued=false delimiter=\"\" max_keys=\"0\" prefix=\"\"}: mountpoint_s3_client::s3_crt_client: meta request failed duration=41.092086ms error=ClientError(Forbidden(\"Access Denied\"))\n    Error: Failed to create S3 client\n\n    Caused by:\n        0: initial ListObjectsV2 failed for bucket bornholt-test-bucket in region us-west-2\n        1: Client error\n        2: Forbidden: Access Denied\n\n    Performance counter stats for 'target/release/mount-s3 bornholt-test-bucket /home/bornholt/mnt -f':\n\n                    8      probe_mount:aws_crt_s3_rs_logging_shim_log_fn\n\n        0.071456784 seconds time elapsed\n\n        0.019072000 seconds user\n        0.012727000 seconds sys\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-13T14:04:05Z",
          "tree_id": "567dd0565fdd8f5903e618e6acd24741334987e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dce1480c723aa6ecfef7e0caca6581c64266c9c7"
        },
        "date": 1707845204896,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.7337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.721875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.1298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.49140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.34453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3259.2498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 75.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 982.06044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.31572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1196.1068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.90205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1482.31943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.16337890625,
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
          "id": "18f774ef6162f8c8bca3bc6a5603ada8224d3045",
          "message": "Set default binary in mountpoint-s3 crate manifest (#753)\n\n* Set default run binary in mountpoint-s3 manifest\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert \"run the binary mount-s3 for benchamrks (#739)\"\n\nThis reverts commit d959640b34b0607be4ece382482f893a4b851069.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-15T16:47:33Z",
          "tree_id": "2075c9ab82c2ab82b1afb563f4fb5ed87d2aff72",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f774ef6162f8c8bca3bc6a5603ada8224d3045"
        },
        "date": 1708027971905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.6990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.46064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4737.86142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.952734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 93.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1385.03701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.51396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1195.094921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1394.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.58798828125,
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
          "id": "77ee71d30d3085c33485b0b2d2b6f5074f69daec",
          "message": "Split up overwrite tests (#756)\n\nSeparate tests should make it easier to isolate workloads with race conditions.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-16T10:20:47Z",
          "tree_id": "7df93f376fafb25ba9e7ef228b4dd699a40692c0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77ee71d30d3085c33485b0b2d2b6f5074f69daec"
        },
        "date": 1708092552189,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.65625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.25615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.67783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.03154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4770.10224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.30166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.6328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1419.74306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1395.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 39.2005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1431.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.366796875,
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
          "id": "dd901f33cdd8483f1988bd692f99cb66799c39ac",
          "message": "Fix issue preventing reads after flush on a file handle (#751)\n\n* Add test to reproduce bad descriptor issue\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix issue preventing reads after flush on a file handle\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Initialize file handle type at open\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore overwrite after read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add entry in CHANGELOG\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Raise logging of file handle type choice to debug\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix panic message in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure consistent behavior in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add test for write-only handle opening empty file and closing it\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry refering to eager file handle initialization\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:08:50Z",
          "tree_id": "1a591bbe417c980a79453bf6edfa2b4cf5e09422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd901f33cdd8483f1988bd692f99cb66799c39ac"
        },
        "date": 1708108425572,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.75830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.9037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.8552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.93408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4735.296484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.7794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.04658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.0744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1393.81630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.31220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1391.14775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.72861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1521.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.93212890625,
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
      }
    ]
  },
  "lastUpdate": 1708539014987,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}