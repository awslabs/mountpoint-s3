window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729689489694,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.58720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.16376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.72314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5696.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2142.27744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.17197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1636.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.8435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1228.6146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1349.2181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1681.13408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.41259765625,
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729763938900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.32958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.528125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.59482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.570703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5708.58701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.285546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2100.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 94.72490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1824.51982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.230078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1381.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.74560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1317.6271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 936.01845703125,
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
          "id": "e72d7ac4fd9ab3f37b9c30048320032a2a9808a7",
          "message": "Upgrade dependencies (#1081)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-24T16:55:46Z",
          "tree_id": "ccf2e2057d3c2557a6b11f927acdbe08af351456",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e72d7ac4fd9ab3f37b9c30048320032a2a9808a7"
        },
        "date": 1729795986456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.02021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.726171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.98759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.257421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5692.1896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.7552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2057.6763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.48115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1556.238671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.740625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.1767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1595.99296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.5072265625,
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
          "distinct": false,
          "id": "8f2770b32389f415626c249e46282b9995b428e7",
          "message": "Add ability to request checksum in an S3 HeadObject request (#1083)\n\n* Add option to retrieve additional checksums with HeadObject\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry and comment\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove import condition for s3express_tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-28T13:55:13Z",
          "tree_id": "3e7e43ffee37c0d772a529c2798e112f107cddd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f2770b32389f415626c249e46282b9995b428e7"
        },
        "date": 1730130805854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.14755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.0123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.08486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.68876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5857.0900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.42783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2120.960546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.50810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1435.22587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.25654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.0025390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1165.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.2546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1674.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.86015625,
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
          "id": "05a50dade864bb06e767ea4d6e6473ed4c51dc06",
          "message": "Add additional checksum algorithms in mountpoint-s3-crt crate (#1082)\n\n* Add support for SHA1\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove implementation of std::hash::Hasher for checksum types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add benchmark for SHA1 checksum\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix Rustdoc, length checks for c_int\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRC64, SHA256\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry for adding bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add PR links for change log entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove mountpoint-s3-client changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update SHA1 tests to be consistent with SHA256 tests\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add ByteBuf wrapper for aws_byte_buf\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CRT IO lib init call on benchmark lib load\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-28T18:00:34Z",
          "tree_id": "9286818519bfd4e848ad59fea260216ee5f45e9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05a50dade864bb06e767ea4d6e6473ed4c51dc06"
        },
        "date": 1730145503975,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.962109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.3845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.29013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.37275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.76826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.58291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5705.707421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.19140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2136.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 89.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1596.834375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.47353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1230.71708984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1304.89892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.66083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1551.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.08427734375,
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
          "id": "ed999df7c9622236a477294ea50b85adacdc942f",
          "message": "Fix ESTALE after upload (#1085)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-10-29T10:27:15Z",
          "tree_id": "83e427e24588f049e71124fde3ea15c4b801d077",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed999df7c9622236a477294ea50b85adacdc942f"
        },
        "date": 1730204712349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.022265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.29287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.24013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.956640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.77939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.7888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5769.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2116.5173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.08388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1866.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1319.7693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1255.20615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.127734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.801953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.37373046875,
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
          "distinct": false,
          "id": "3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa",
          "message": "Remove unused dependencies (#1087)\n\n* Remove unused dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Restore whitespace in Cargo.toml for mountpoint-s3-* crate dependencies\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T10:29:55Z",
          "tree_id": "9cfbfd42a4e4c19113377f1623b014c49767c009",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3608046cebeb6689ce3ffb1bfc5a7dfb1a0b98aa"
        },
        "date": 1730204817525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.65458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 27.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.45791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.43115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5698.58486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2102.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.31103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1883.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1417.04951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.75986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1474.671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.58916015625,
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
          "distinct": false,
          "id": "726220684057f40c7bf89b6cf78a42cb9a0fdc1d",
          "message": "Address CRT documentation warnings, add deny statements for bare_urls and broken_intra_doc_links (#1091)\n\n## Description of change\n\nSince updating our GitHub Actions configuration, we now have a number of\nwarnings directly surfaced in our PRs.\n\nThis change takes a quick stab at eliminating some low-hanging fruit. It\nalso will now fail the build if these issues are reintroduced when\nmaking changes to the CRT crate.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo behavior changes. Docs and build process only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, no behavior or API changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:07:23Z",
          "tree_id": "29a38b0973516c75be794e6c152bc648a937f1b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/726220684057f40c7bf89b6cf78a42cb9a0fdc1d"
        },
        "date": 1730217884231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.3625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.58447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.64931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.53369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.82109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.1482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5894.94150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2155.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.9828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1591.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.40126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1252.0265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.0552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.805078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1678.9279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.98447265625,
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
          "id": "db33036c56cc83435fbe1ff89020d03b9ed41ff9",
          "message": "Update PR template to reflect how PR metadata is used in PR merges (#1090)\n\n## Description of change\n\nWe have updated pull request settings to use the description of the PR\nin the commit message rather than the list of individual commits in the\npull request.\n\nThis change explains the importance of the title and description in how\nthey are used to create the squash commit. We want to encourage PR\nauthors to be aware of this and keep the metadata up-to-date.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, PR template change only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, there are no code changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T14:23:56Z",
          "tree_id": "2174748aa3a91efab3a856a519c1001c810d3448",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db33036c56cc83435fbe1ff89020d03b9ed41ff9"
        },
        "date": 1730218820316,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.28935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.5560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.6908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.85732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.1603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5751.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2222.9080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.0849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.8890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.6828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1340.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1319.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1579.79443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 929.36953125,
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
          "id": "856c31de291e9ed012a36aeca7e689252f216c47",
          "message": "Add checksum algorithm to ListObjectsV2 response (#1086)\n\n## Description of change\n\nFor a consumer of the S3 client, we need to return the checksum\nalgorithm used with objects.\n\nThis change exposes the checksum algorithm that is sometimes returned as\npart of a ListObjectsV2 request. This functionality is not opt-in, and\nwill now simply be exposed to be used by consumers of Mountpoint S3\nclient where supported.\n\nThis change also updates `ChecksumAlgorithm` to have a new `Unknown`\nvariant. This is a common pattern in AWS SDKs. This will allow clients\nto recognize where an unknown algorithm is returned (should the S3\nservice start supporting additional algorithms), and avoid either\nreturning `None` (if optional) or panicking when the error may be\nrecoverable.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, it changes the `ObjectInfo` and `ChecksumAlgorithm` structs.\nSpecifically, they are now marked `non_exhaustive` meaning that new\nfields could be added in the future (as has been done in this PR).\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, relevant change logs for breaking change (`non_exhaustive`) as well\nas new feature (exposing checksum algorithm) have been added to\n`mountpoint-s3-client`'s changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-29T15:13:32Z",
          "tree_id": "1ec1c5b3f53de9d8622a353a8be26edfef2cf5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/856c31de291e9ed012a36aeca7e689252f216c47"
        },
        "date": 1730221887047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.6890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.66142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.1267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.10576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.346875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.96513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5799.7271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.54765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2094.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 95.744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1754.012109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.55517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1316.89521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1225.21845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.6505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1564.09541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.32900390625,
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
          "id": "ce5473941f173d0128d2669eb666c356581263f0",
          "message": "Update fuser to v0.15.0 (#1088)\n\n## Description of change\n\nUpdate fuser to the latest release,\n[v0.15.0](https://github.com/cberner/fuser/releases/tag/v0.15.0).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-29T17:03:29Z",
          "tree_id": "6f6e0c2140ce462128091ddb00b332508a6b5197",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ce5473941f173d0128d2669eb666c356581263f0"
        },
        "date": 1730228374665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.95927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.65537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.59814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.0951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.38818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.80185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5739.7740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2132.4927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 93.01669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1786.0630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.907421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1300.10478515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1214.545703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.6263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1376.0146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 960.54951171875,
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
          "id": "fb3832ba0dc4ea970eac01a4b9d610dd91dea4f2",
          "message": "Update ChecksumAlgorithm field of client's ObjectInfo struct to be Vec over single element (#1093)\n\n## Description of change\n\nOn reviewing the S3 API documentation, the checksum algorithm field is a\nlist of algorithms. Additionally, when reviewing other SDKs such as the\n[Rust SDK, we see that they are presenting this field as\n`Option<Vec<String>>`](https://docs.rs/aws-sdk-s3/latest/aws_sdk_s3/types/struct.Object.html)\nrather than a single optional element. (Note, we do drop the `Option`\nstill.\n\nWe'd prefer to align with the SDK interface. Our tenet here is to ensure\nour S3 client is consistent with the official SDKs where there's no\nsignificant effort required. This is making a breaking change while\nwe're already planning to make a number of breaking changes to the\nclient.\n\nRelevant issues:\n\n- Follow up on #1086, which added checksum algorithms to the list\nobjects response.\n\n## Does this change impact existing behavior?\n\nYes, it changes the S3 client behavior to return a different type. We\nare however merging this before a new crate release, so this will not be\nan additional breaking change.\n\nThere's no behavior change to Mountpoint file system.\n\n## Does this change need a changelog entry in any of the crates?\n\nThere is already an existing entry in `mountpoint-s3-client`'s\nchangelog. This PR has been added to the list of PRs for that entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-01T13:17:48Z",
          "tree_id": "c2b02e3ec1e0d948b16bb7e6239145c4dc3d6d0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3832ba0dc4ea970eac01a4b9d610dd91dea4f2"
        },
        "date": 1730474148220,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.4220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.2603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.4333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.83515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.56474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.85224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.43173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5776.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.2482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2112.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1783.6134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.92216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.59375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1369.86513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.9666015625,
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
          "id": "98f75363d4513319f899fe3168df506de70aaccf",
          "message": "Update macOS unit tests to use latest macOS (#1097)\n\n## Description of change\n\nThis change updates the CI to use the latest version of macOS available\non GitHub runners (currently macOS 15), updating from macOS 12.\n\nWe are seeing GitHub CI failing in some cases. We wanted to update\nversion anyway, and I suspect the issues we are seeing is due to the\ndeprecation (maybe).\n\nI update to latest since we don't strictly support macOS, so just\nchecking that unit tests pass on the latest version is enough for us.\n\nRelevant issues:\n- https://github.com/github/roadmap/issues/986\n\n## Does this change impact existing behavior?\n\nCI change only. No behavior change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-04T16:04:41Z",
          "tree_id": "aaf04462f5af46d8d2ae11994a3b85084414e12f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98f75363d4513319f899fe3168df506de70aaccf"
        },
        "date": 1730743424827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.05458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.78046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.19072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.883984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.17294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5753.01201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.134375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2005.69228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.14140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1627.71689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.20927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1326.808203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1270.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.20390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1599.97197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.162109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4814f8164404de8f7672a7131fa20711f3c69e78",
          "message": "Encapsulate test resources in `TestSession` struct (#1096)\n\n## Description of change\n\nCurrently we return tuples from session constructor functions. This\nmakes adding new resources to testing session challenging. Wrapping all\ntesting resources in `TestSession` will help us to add new resources\neasily and it will also simply the type signatures of the functions\nusing the test session.\n\n## Does this change impact existing behavior?\n\nNo, just tests.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-04T16:53:33Z",
          "tree_id": "b4f441adb926a652fbcafccbb6c16101b65452d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4814f8164404de8f7672a7131fa20711f3c69e78"
        },
        "date": 1730746268827,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.4869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.479296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.75263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.97431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.6962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.30224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5783.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.18125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2100.91259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.39716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1433.37666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.83154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.73359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1202.312109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1511.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.8140625,
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
          "distinct": false,
          "id": "c3277ef4623eca11ab089527df19de1cbbe9a422",
          "message": "Update bucket name examples to use recommended 'amzn-s3-demo-bucket' (#1099)\n\n## Description of change\n\nMountpoint currently uses an outdated example bucket name. AWS\ndocumentation is using the bucket name prefix `amzn-s3-demo-bucket`\nacross all documentation.\n\nWe plan to update for consistency with AWS documentation (such as the\nAmazon S3 User Guide).\n\nWhen reviewing AWS documentation, it is typically\n([1](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-bucket-intro.html),\n[2](https://docs.aws.amazon.com/AmazonS3/latest/userguide/UsingBucket.html))\npresented lowercase but as a code highlight. We also use that same\nformat now in our documentation.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, changes documentation and unit test source code only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-04T21:21:18Z",
          "tree_id": "3853fec91f0ded083a5b6a998f23b2ee34bb697a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3277ef4623eca11ab089527df19de1cbbe9a422"
        },
        "date": 1730762322421,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.2609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.80615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.40341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.81103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.148828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5679.51591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.0345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2102.79189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.72666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1606.5796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.4701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1342.89970703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1307.459375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.16025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1529.94296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.07578125,
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
          "id": "a54596b3f41d82dcda1a03d3b44a97a829b866db",
          "message": "Decouple S3FileSystem and S3FuseFileSystem constructors (#1100)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactor `S3FuseFileSystem::new` to accept an `S3FileSystem` instance\nrather than creating a new one. The change highlights that\n`S3FuseFileSystem` is only a wrapper for `S3FileSystem` and will make it\neasier to modify `S3FileSystem` construction in future changes.\n\n## Does this change impact existing behavior?\n\nNo, it's only a minor internal refactor.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-05T10:08:12Z",
          "tree_id": "4c4896c9523dc06ad586abd5a79616f79a67adba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a54596b3f41d82dcda1a03d3b44a97a829b866db"
        },
        "date": 1730808276343,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.55341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.5205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.03994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.97236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 6.465234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.38935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5747.9958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.08515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2049.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.9908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1786.7677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.14609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1435.830859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1206.57197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1368.7259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.52373046875,
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
          "id": "2a95d141ffc094f9a50f0916ecc27b6edaa6b453",
          "message": "Support running integration test against custom endpoints (#1094)\n\n## Description of change\n\nThis allows contributors to run mountpoint integration tests against\ncustom S3 compatible endpoints.\n\n## Does this change impact existing behavior?\n\nNo, test only\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-05T12:24:27Z",
          "tree_id": "18941a74c8441c6693efa8f635df8a16bab8402b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a95d141ffc094f9a50f0916ecc27b6edaa6b453"
        },
        "date": 1730816519836,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.82333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.64580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.587109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.25400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.98212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5837.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.57197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2115.2712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.6703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1753.80712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.098046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1468.79443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1245.00625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1398.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 939.86494140625,
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
          "id": "db4571fa61b0c346da91a5e9d05435c6a291b220",
          "message": "Implement checksums for MockClient upload path (#1102)\n\n## Description of change\n\nThis change updates the mock client's write path to compute and store\nchecksums, matching behavior approximate to S3. We want this so that we\ncan use the mock client for both uploads and downloads and verify\nchecksum behavior for the client.\n\nThe change stores the checksums as strings, as this is the observed\nbehavior of S3. We can always update if this turns out to be a bad\nassumption.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nThis change updates the `mountpoint-s3-client` mock client to add\nchecksum persistence to the write path. This was previously a gap in the\nmock client.\n\n## Does this change need a changelog entry in any of the crates?\n\nI do not think this needs a changelog entry, as it does not change the\nbehavior of the S3 client itself. Happy to discuss.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-05T13:46:55Z",
          "tree_id": "d378b0251527cbe572573659230fda913fcc3170",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/db4571fa61b0c346da91a5e9d05435c6a291b220"
        },
        "date": 1730821360801,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.0513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.5119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.99482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5872.14873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2129.68798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.53642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1760.38798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.20771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.97578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.89326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.03134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1382.9416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1057.92158203125,
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
          "id": "53197c99e464933f7aef9eee18e5a4714c489ed0",
          "message": "Multilevel cache (#1064)\n\n## Description of change\n\nAllow using both caches when `--cache-express <bucket> --cache\n<directory>` options are specified, local cache is queried first.\n\nRelevant issues: No\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, will add in one of the future PRs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-06T17:01:07Z",
          "tree_id": "d3ba1fd9bb48664282835018870e46b3a2d61394",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53197c99e464933f7aef9eee18e5a4714c489ed0"
        },
        "date": 1730919684111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.06884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.22841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.50087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.43291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 5.00517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.83271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.1482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5808.841015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.73017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2129.65087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1643.2236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1345.70703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1245.9626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1418.88408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.49755859375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrew.peace@gmail.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "50433e6a7b37b692abd5075aff355976f233006b",
          "message": "Don't run benchmarks with debug, plus minor refactoring (#1104)\n\n## Description of change\n\nRemove the `--debug` flag when mounting S3 for the benchmarks.\n\nThis is now available via an S3_DEBUG environment variable which, when\nset, will add `--debug` back again.\n\nAlso, within `fs_bench.sh`, merge the read and write benchmark methods\ninto a single one, which is paramterized, since they were almost\nidentical. This avoids having to make the change described above in two\nplaces and simplifies the code going forwards.\n\n## Does this change impact existing behavior?\n\nThis changes the benchmarks to run without --debug to the mount command,\nwhich creates a discontinuity in benchmark results, and may improve them\n(though there's no actual performance improvement here).\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2024-11-06T17:27:39Z",
          "tree_id": "b59d054c2a27fb760c820897a25be27b71464afd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/50433e6a7b37b692abd5075aff355976f233006b"
        },
        "date": 1730921116072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.25361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.262109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5959.63359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.8478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2098.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 103.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1711.99892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.5150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1473.64365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1316.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1427.08154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.22685546875,
            "unit": "MiB/s"
          }
        ]
      }
    ],
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "011043e1a336888254df2c5451d644eba4742341",
          "message": "Add descriptive name to benchmarks, enable CI summaries (#1109)\n\n## Description of change\n\nThis change leverages our benchmark action's GitHub Action's job summary\nintegration to display a summary for throughput and latency benchmarks.\nBefore this change, we would need to check the webpage or the JSON\noutput to compare. For pull requests, only the JSON output would be\navailable. This change applies to both commits on `main` as well as pull\nrequests.\n\nThis should also address issues we had in the past where commit comments\ndid not describe which benchmark failed. See implementation:\nhttps://github.com/benchmark-action/github-action-benchmark/blob/6bae118c112083251560ad8b3a1ff2e43aa23351/src/write.ts#L203-L239\n\nMore information on benchmark GH Action's integration:\nhttps://github.com/benchmark-action/github-action-benchmark?tab=readme-ov-file#job-summary\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo impact to Mountpoint file system or client.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:10:32Z",
          "tree_id": "d1aaf31b582c86345aeb8a2e0489f046d98d4ad9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/011043e1a336888254df2c5451d644eba4742341"
        },
        "date": 1730981233784,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.300390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.86435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.6353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.534375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.19677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.983984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5952.29521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.57685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2099.04453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.47373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1993.7154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.26982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1300.4740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1371.65390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.2287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1465.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1049.7591796875,
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
          "id": "0faeac4f7a4e8c7378ad00ab22f021a347069aa6",
          "message": "Add GitHub runner architecture to CI cache key (#1110)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nThis change adds the architecture of the runner to the cache key. In a\nprevious change where we upgraded macOS runners from macOS 12 to macOS\n15, the architecture changed however the cache was not invalidated.\n\nLikely we should find a way to key the cache on the actual operating\nsystem version used however there doesn't seem to be an obvious way to\ndo that right now. This quick fix should at least protect us from\narchitecture changes (which macOS runners do have, but I understand its\nonly for larger runners at this time).\n\nRelevant issues: #1097\n\n## Does this change impact existing behavior?\n\nNo, only CI change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo, only CI change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:33:22Z",
          "tree_id": "ebd89a8ffd256c498bb1a40f7fb715bc7f630360",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0faeac4f7a4e8c7378ad00ab22f021a347069aa6"
        },
        "date": 1730982532026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.9771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.05712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.41416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.31435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.562890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5889.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.9724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2146.8728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 104.35908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1914.49560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1668.60458984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1402.97138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1455.13466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.4671875,
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
          "distinct": false,
          "id": "cc3b46b7e44d8566a85b9f78fe8c77dca008ede2",
          "message": "Update PyTorch example with clearer getting started section (#1092)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nI've been using this example for some talks I've been preparing. I'm\nupdating the steps to be clearer on what action needs to be taken by the\nreader (since I kept missing steps when preparing new instances).\n\nIn this change, I also update the mentioned bucket names to follow the\nexample bucket names recommended across AWS documentation.\n\nRelevant issues: N/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T10:47:30Z",
          "tree_id": "e07d0a3db93f67eaf49c1f9af51c6d07929010fd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3b46b7e44d8566a85b9f78fe8c77dca008ede2"
        },
        "date": 1730983490145,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.4099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.68564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.91650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.99072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.36123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.67421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.9802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.32783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5939.7580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2112.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.2115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1772.03544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1390.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1375.71953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1530.3021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.17470703125,
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
          "id": "e48c6bfd515632ecee03519c7e8aa71fa6736038",
          "message": "Update README example bucket name (#1113)\n\n## Description of change\n\nThe Mountpoint README currently uses an outdated example bucket name.\nAWS documentation is using the bucket name prefix `amzn-s3-demo-bucket`\nacross all documentation.\n\nThis is a change missed in #1099.\n\nRelevant issues: #1099\n\n## Does this change impact existing behavior?\n\nNo, changes documentation and unit test source code only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-07T11:00:41Z",
          "tree_id": "868424b4905a6dcd36c15bde173a738cdf8def85",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e48c6bfd515632ecee03519c7e8aa71fa6736038"
        },
        "date": 1730984303126,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.2650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.08447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 5.9373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.99580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 5.8833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5951.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.759375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2215.7005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 98.91923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.06494140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1389.28125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1629.5607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.24501953125,
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
          "distinct": false,
          "id": "89e13a1f8dc6656de17da919f5900df192964ac8",
          "message": "Add `Headers.get_as_optional_string` and `get_as_string` (#1114)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactors `Headers` to have two new public methods:\n`get_as_optional_string` and `get_as_string`.\n\nRefactor `head_object` and `put_object` to use new header methods rather\nthan custom implementations\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nChanges log format slightly by making \"Header string was not valid\" text\npart of HeadersError.\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-07T15:11:54Z",
          "tree_id": "8240ed2a73cace705b9d2857dd98fb9a50f8c883",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89e13a1f8dc6656de17da919f5900df192964ac8"
        },
        "date": 1730999361355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.01591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.1705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.706640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.66962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5995.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2138.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1944.5873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.10185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1544.7689453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1459.26875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1682.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1050.736328125,
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
          "distinct": false,
          "id": "9d48a7207dc0feec9d2176e6e86f40350b0ddf84",
          "message": "Add GetObject support for object metadata (#1065)\n\n## Description of change\n\n<!-- Please describe your contribution here. What and why? -->\n\nAdds support for fetching user defined object metadata in GetObject\ncalls.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, for mountpoint-s3-client.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-07T15:28:42Z",
          "tree_id": "86102dca7576a85c9e8f02354ce72d9c66efead3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d48a7207dc0feec9d2176e6e86f40350b0ddf84"
        },
        "date": 1731000358611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.56787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.90166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.5357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.59052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.98564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5988.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.536328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2163.834375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 103.4109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1759.75517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.8326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1395.3005859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1233.20693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.06552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1424.65029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.2125,
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
          "id": "e3540671baac9d34d280e6815f3d58778dac7eed",
          "message": "Ensure that the file system in tests is unmounted before removing the temp dir (#1116)\n\n## Description of change\n\nEnsure that the file system in integration tests is unmounted before\nremoving the temporary directory. The introduction of `TestSession` in\n#1096 inadvertently changed the order in which the temporary directory\nand the FUSE session are dropped. Previously it was hidden in the\ndeclaration order. This change makes it explicit in `drop`.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-07T17:03:39Z",
          "tree_id": "e43376caad9c90efa6772986f7d033c45ce6ea68",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3540671baac9d34d280e6815f3d58778dac7eed"
        },
        "date": 1731006002591,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.10234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5720.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.15654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2080.5470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.92998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.03173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1380.12158203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1385.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.61337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1581.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.9974609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@hagemeier.ch",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bfb9a4183a3fe35c34effd2adf7a3232d2717092",
          "message": "Add debug print for inode number in mknod (#1111)\n\n## Description of change\n\n`mknod` now prints the newly created inode number. This can help with\ntracing the lifetime of an inode between FUSE requests.\n\n## Does this change impact existing behavior?\n\nNo, small debug log addition only.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: Christian Hagemeier <>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-08T13:52:45Z",
          "tree_id": "a7f83fab59b361993e6e7e7cce0adc4510a6daa8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bfb9a4183a3fe35c34effd2adf7a3232d2717092"
        },
        "date": 1731081035340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.637109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 5.12353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.797265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.72578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.28056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.5833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2119.063671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 100.5369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1716.596484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.85576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.3185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.85791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1741.81708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.16015625,
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
          "id": "c4ec299af6f2dd4076f5942fec086fad49143c8a",
          "message": "Fix ANSI escape codes being included in log files on macOS (#1115)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nBefore this change, log files written on macOS would include ANSI escape\ncodes (#1050). It's unclear why this is not reproducible on Linux.\n\nThis change reorders the logging layers such that the console layer\n(with ANSI) is evaluated last, and so the mutations to add ANSI escapes\nis not applied when writing log files. This issue appears related:\nhttps://github.com/tokio-rs/tracing/issues/658.\n\nRelevant issues: #1050 \n\n## Does this change impact existing behavior?\n\nThis fixes log files written on macOS (which is an unsupported\nplatform).\n\n## Does this change need a changelog entry in any of the crates?\n\nThis is a minor bug fix on an unsupported platform, so no changelog\nentry needed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-08T14:23:37Z",
          "tree_id": "40f87fdb33e428eb9082b185ca050405fbcffb59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c4ec299af6f2dd4076f5942fec086fad49143c8a"
        },
        "date": 1731082746208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 27.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 23.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.29013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 6.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6124.64208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.4373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2191.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 103.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1856.60244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1530.52099609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1273.25,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.68671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1740.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1030.271875,
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
          "id": "7d0188555c07e3d75b0b7495d03a2520713d7bf1",
          "message": "Use separate endpoint URLs for benchmark CI (#1112)\n\n## Description of change\n\nThis allows integration test workflows and benchmark workflows to run\nagainst different endpoint URLs.\n\n## Does this change impact existing behavior?\n\nNo, only CI change.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-08T16:24:29Z",
          "tree_id": "0add5a30ae8c656eb5143033dc7f888143a432b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d0188555c07e3d75b0b7495d03a2520713d7bf1"
        },
        "date": 1731090425513,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.08603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.35458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.61845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.20986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.31123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5627.98916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.47548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2096.96044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 99.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1957.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.2125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.8388671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1254.293359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1436.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.61689453125,
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
          "id": "b644b7e58d06c37427fb9cb5ea5453614806f5e3",
          "message": "Refactor `ObjectClient.get_object` to use an `GetObjectParams` parameter (#1121)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\nRefactor `ObjectClient.get_object` to use an `&GetObjectParams`\nparameter.\n\nMigrates the two existing parameters, `range` and `if_match` to\n`GetObjectParams` and changes all call sites.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes. Breaking change in mountpoint-s3-client. \n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T00:02:13Z",
          "tree_id": "475a0f75b91d3155a61eb67dd3c7160b92e275d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b644b7e58d06c37427fb9cb5ea5453614806f5e3"
        },
        "date": 1731290372277,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.54033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.996875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.97958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.04736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.40166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5851.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.49365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2124.7775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 97.15439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.36123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.77255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1374.6326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.593359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1592.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.2798828125,
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
          "distinct": false,
          "id": "ef011228e62945645a312012d5e39392f2d75e70",
          "message": "Enable metric emission in benchmark runs (#1120)\n\n## Description of change\n\nWe opted to disable debug logging in #1104 as this may impact\nperformance, however it was not known that the memory usage monitoring\nwas dependent on metrics being emitted implicitly due to `--debug`. This\nchange restores metrics in logs to fix the peak memory usage\nbenchmarking.\n\nRelevant issues: #1104\n\n## Does this change impact existing behavior?\n\nNo change to Mountpoint.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-11T15:14:53Z",
          "tree_id": "97c865f3407f6be22c87a7bb112b0d8618b93eba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef011228e62945645a312012d5e39392f2d75e70"
        },
        "date": 1731345095015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 57.7001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 6.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.7943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5932.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.26162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2167.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 102.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1983.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.01845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.72822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.89580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1428.62373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.34912109375,
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
          "id": "e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0",
          "message": "Add support for getting object checksums in GetObject (#1123)\n\n<!--\nThe title and description of pull requests will be used when creating a\nsquash commit to the base branch (usually `main`).\nPlease keep them both up-to-date as the code change evolves, to ensure\nthat the commit message is useful for future readers.\n-->\n\n## Description of change\n\n- Adds new method `get_object_checksum` to `get_object` to retrieve the\nwhole object checksum.\n- Adds new parameter `checksum_mode` to `GetObjectParams` to configure\nif we want to request checksums from S3.\n- If checksums aren't requested, `get_object_checksum` returns an error.\n- Refactor `S3CrtClient` to store a cell of the object headers rather\nthan metadata.\n\n<!--\n    Please describe your contribution here.\n    What is the change and why are you making it?\n-->\n\nRelevant issues: <!-- Please add issue numbers. -->\n\n## Does this change impact existing behavior?\n\nNo\n\n<!-- Please confirm there's no breaking change, or call our any behavior\nchanges you think are necessary. -->\n\n## Does this change need a changelog entry in any of the crates?\n\nYes\n\n<!--\n    Please confirm yes or no.\n    If no, add justification. If unsure, ask a reviewer.\n\n    You can find the changelog for each crate here:\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-client/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt/CHANGELOG.md\n-\nhttps://github.com/awslabs/mountpoint-s3/blob/main/mountpoint-s3-crt-sys/CHANGELOG.md\n-->\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-11T15:27:43Z",
          "tree_id": "94e98dac006159667d8dc0d4b62f44ca8c001033",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e544f8f6c3d8b3eb7d7ef77a30afad44e9bc0ab0"
        },
        "date": 1731345918745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.85400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 24.03076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.88564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.8462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 6.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6007.29775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.104296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2114.374609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 105.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1796.10869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1593.17822265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1252.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.66201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1736.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.1216796875,
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
          "id": "822712cf8d11227e1572ce4196ab1cc858f8d90f",
          "message": "Avoid joining the fuse background thread when dropping test sessions (#1124)\n\n## Description of change\n\nThe change #1116 fixed the order in which the file system was unmounted\nand the temporary mount directory was removed. In order to unmount, we\nadded a call to `join()` on the FUSE session, which also waits for its\nbackground thread to join and can occasionally fail with a\n`ECONNABORTED` (ConnectionAborted, \"Software caused connection abort\")\nerror.\nThis change addresses the issue by only dropping the FUSE session,\nwithout waiting for the thread to terminate.\n\n## Does this change impact existing behavior?\n\nNo. Only affects tests.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo. Only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-11T18:06:23Z",
          "tree_id": "fd1c0cef4022ce67bed2f7da65541170a65d7fa3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/822712cf8d11227e1572ce4196ab1cc858f8d90f"
        },
        "date": 1731355361778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.5072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.173046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 56.93447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.7423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.12255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5716.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.14052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2114.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 101.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.8767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1394.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1336.45947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1401.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.3966796875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1731355362355,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}