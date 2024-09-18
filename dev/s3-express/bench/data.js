window.BENCHMARK_DATA = {
  "lastUpdate": 1726683821482,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "13ab4d9332b611bd6f702e1c5462d13f97c467ef",
          "message": "Use separate bucket for bench results, run on PRs (#985)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-20T15:13:00Z",
          "tree_id": "70f577df0795fba77f6433164411c8df7cca7682",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13ab4d9332b611bd6f702e1c5462d13f97c467ef"
        },
        "date": 1724173833106,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 89.7572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 131.83515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 74.72314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 152.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 18.04189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 31.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 14.3603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 26.21357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6027.09267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 531.3677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1287.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 267.471484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1836.37646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 132.71845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1609.88173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1399.3177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1517.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1107.61025390625,
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
          "id": "2cb9c72e747097c32c0ed34a7d18ebabdf26871b",
          "message": "Start second request only if required (#984)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-22T12:53:50Z",
          "tree_id": "5ab8ff6340712fa17310471bb6a29568c70c3d13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2cb9c72e747097c32c0ed34a7d18ebabdf26871b"
        },
        "date": 1724338418099,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.4173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.8607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 165.4056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.0005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.50263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6110.94033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.1548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1293.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 235.69423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1868.7205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1556.85625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1432.92109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1011.358984375,
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
          "id": "fd0bc1a55265c54f09bbce67c4429a6eef33ca28",
          "message": "Add `UNSTABLE_CACHE_KEY` environment variable (#990)\n\n* Add `UNSTABLE_CACHE_KEY` environment variable\n\nUsing `UNSTABLE_CACHE_KEY` allows users to specify a cache path disambiguator\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Format correctly\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Rename to `UNSTABLE_MOUNTPOINT_CACHE_KEY`\n\nTidy up cache_directory.rs\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make `ManagedCacheDir::new_from_parent_with_cache_key` take an `Option<OsString>`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Add comment with explanation of functionality of cache_key\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Add more comments describing cache_key functionality\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Inline `create_cache_dir`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Simplify `hash_cache_key`\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-08-29T09:42:20Z",
          "tree_id": "d73ae89ce7b0ac18fcd0bf76f614de3a7ee712a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd0bc1a55265c54f09bbce67c4429a6eef33ca28"
        },
        "date": 1724931630985,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.03330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.0724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.36376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.11748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.834765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6071.3427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 515.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1267.65693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 233.633203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2042.180078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.73125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.921484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1417.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.470703125,
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
          "id": "0f04ea4daa4f3fa68421c69b0179d09bae044d6c",
          "message": "Run bench once a day, no scheduled on forks, store commit id (#992)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-30T08:13:02Z",
          "tree_id": "d83d2ac7b9b97c9ba5464f64e51f334652136cee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f04ea4daa4f3fa68421c69b0179d09bae044d6c"
        },
        "date": 1725012547833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.96953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 163.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.480078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.39345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.33466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5935.89775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.16806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1269.5818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.92109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1918.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1589.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1356.62490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1547.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.04599609375,
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
          "id": "ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba",
          "message": "Update mountpoint-s3-crt-sys crate excludes to reduce package size (#989)\n\n* Update mountpoint-s3-crt-sys crate excludes to reduce package size\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert removal of aws-lc/ssl/\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-03T09:12:13Z",
          "tree_id": "f465761fd81eea74f40a2d4a6981df9722144b09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba"
        },
        "date": 1725361850670,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.95302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.2576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.370703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.08515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.04619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6263.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.48115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1336.68037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.97822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1849.60498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.823046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.3994140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1287.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.6013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1446.5869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.803515625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "unexge@gmail.com",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "3c371f3088d17cc8e35a06dcf0915416c9d067e1",
          "message": "Update CRT submodules to latest (#997)\n\n* Update mountpoint-s3-crt-sys crate excludes to reduce package size\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* WIP: Add testing for https://github.com/awslabs/mountpoint-s3/issues/927\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Gate scoped credential test\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update `test_credential_process_behind_source_profile` to use role\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove unused import\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove TODOs from CHANGELOG\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CRT submodules to latest\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Remove feature gate from `test_credential_process_behind_source_profile`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Fix Clippy failures\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* More Clippy fixes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Fix formatting\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update test failure message\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-09-04T17:03:50Z",
          "tree_id": "044619a5959658926d14fce236e5ae9a3b280a5b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c371f3088d17cc8e35a06dcf0915416c9d067e1"
        },
        "date": 1725476731799,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.31875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.44375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 165.5216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.33798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.73212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.87587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.47041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6182.9453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.5490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1262.8646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.65458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1911.76357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.67607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1539.03740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1269.23603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.94619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1498.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1183.95771484375,
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
          "id": "c27abd27bbfdb042572896f6e2df7eae1029fab5",
          "message": "Fix clippy warning in throughput_client.rs (#1001)\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T11:00:39Z",
          "tree_id": "e79f4d749e07088cdb0e67f11ecf2462f2363627",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c27abd27bbfdb042572896f6e2df7eae1029fab5"
        },
        "date": 1725627490098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 106.43564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.5619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.25849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.47216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.79228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.47587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5927.3615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.53701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1289.112890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.867578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1925.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 127.61025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1401.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.540234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 130.05517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1430.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1138.03251953125,
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
          "id": "5d1535012312a8830725047b35c40f7a6ebac5fb",
          "message": "Add support for concurrent downloads to client_benchmark example (#1000)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-06T13:19:40Z",
          "tree_id": "02fd47d39f8189a6b9154d07050e104b2a8b7fea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d1535012312a8830725047b35c40f7a6ebac5fb"
        },
        "date": 1725635927458,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 105.43955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.7185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.88525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.78916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.47900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.528125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5912.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 516.31875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1278.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1732.73681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 126.0822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.0095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1380.60498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.33896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1480.34462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.33935546875,
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
          "id": "1db78f38c8df2826b449409a54ed1e578c5c6985",
          "message": "Backwards seek window does not affect the read window (#999)\n\n* Use part's offset to calculate remaining window\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Add names to DataRead variant's fields\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Make new code more uniform with the rest of it\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T13:29:46Z",
          "tree_id": "a3d64a2c2104c61859c6c321e484952d321585a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1db78f38c8df2826b449409a54ed1e578c5c6985"
        },
        "date": 1725636602056,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.73125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.3595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.08935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.6134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.8896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.41669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6046.81494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 507.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1326.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.26015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1781.91513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.2103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1464.7357421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.43876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.2642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1472.7654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.77216796875,
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
          "id": "813f95d644ef7e4f02acb072ac54690699e34974",
          "message": "Upload benchmark results to S3 when the check step failed (#998)\n\n* Save benchmark results to S3 when the check step failed\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Update all job defenitions\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T15:42:13Z",
          "tree_id": "b722266b9588a256a847f9e48f0fb7f891f72353",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813f95d644ef7e4f02acb072ac54690699e34974"
        },
        "date": 1725644415493,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.95087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.739453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.8228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.93720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.5525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.84404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6106.93759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.38359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1272.7140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.33896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2003.5837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.4611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1487.906640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.59775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1465.10380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.44267578125,
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
          "id": "6d498852520ba2f22ca3c76409f7b3faad9e2106",
          "message": "Update nix dependency from 0.27.1 to 0.29.0 (#1003)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-06T17:00:41Z",
          "tree_id": "1afbc653d279290796a7a6ab38338c500265fe29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d498852520ba2f22ca3c76409f7b3faad9e2106"
        },
        "date": 1725649005392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.1462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.15185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.78486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 168.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.148046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.5322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.18623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.8666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5835.268359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.73173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1253.12568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 230.8412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1949.87705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.8248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1605.79501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1416.46884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.852734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1483.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1179.5763671875,
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
          "id": "cdb8ccdabff7d6ad3a6be379317f2ff7341d834f",
          "message": "Avoid extending part on backward seek (#1005)\n\n* Avoid extending part on backward seek\n\nCurrently, we combine parts from the seek window to `current_part` in the\npart queue whenever we seek backward which mean we also have to re-compute\nchecksums for this combined part. It particularly affect read throughput in\nsome use cases where backward seek rate is high. This change should improve\nthe throughput for those use cases.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-09T13:05:39Z",
          "tree_id": "360e3d8af2c73f8865d5d0ea88be24afac2d1ab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cdb8ccdabff7d6ad3a6be379317f2ff7341d834f"
        },
        "date": 1725894235404,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.13955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.68798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.27265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5994.03056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 509.7435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2373.397265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 239.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1952.2810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1457.17763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1259.021875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1963.690234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.38564453125,
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
          "id": "67aaade83ccb265849776eedee121c8127dd7aab",
          "message": "Release new crate versions (#1010)\n\n* Release new crate versions\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Add multi-nic entry to changelog\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Make crates 0.9.0\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T15:42:27Z",
          "tree_id": "efdceaa1903fe3a7106de10ac9ec2672630c7adf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/67aaade83ccb265849776eedee121c8127dd7aab"
        },
        "date": 1726162866442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.6173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.13984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.71015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.0240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.26259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5902.28916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 508.29169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2346.70810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.45234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1845.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.8037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1546.12041015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1298.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1472.2466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 984.63349609375,
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
          "id": "9542728630fc61d316cb1772662a98d649848cb4",
          "message": "Fix mountpoint-s3-crt-sys build (#1011)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T16:53:30Z",
          "tree_id": "19cc4274eef18a10240dd5ffaac764d23afd7193",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9542728630fc61d316cb1772662a98d649848cb4"
        },
        "date": 1726167065161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.24443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.18623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.1830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.2166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.66884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.01728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.30615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5929.29140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.54384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2434.0689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.18017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2099.65302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 124.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1597.59375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1322.6671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 126.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1523.31318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1153.0109375,
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
          "id": "abae870d6b3230c5759c7b5876378258ff8c746c",
          "message": "Add tests for network interface configuration in mountpoint-s3-client (#1009)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T11:01:59Z",
          "tree_id": "c6a017662cd84259fc7d367d52e3c949f2fe1bde",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abae870d6b3230c5759c7b5876378258ff8c746c"
        },
        "date": 1726232371809,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.32197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 145.77548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.88251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.89921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.86923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.01953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6005.94638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 519.14130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2365.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 240.844921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2022.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.7310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1535.35,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1311.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.96416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1712.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.89892578125,
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
          "id": "bb42045080c25286f8f544c9bd2184124d11b0ee",
          "message": "Remove multi-NIC feature flag, add documentation (#1014)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T13:05:58Z",
          "tree_id": "c1bd0ce3c2f2ebe9c158425e15e87b3d31c0d306",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb42045080c25286f8f544c9bd2184124d11b0ee"
        },
        "date": 1726239861087,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.10791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.6859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.83701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.264453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.32373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6028.16103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 517.8919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2354.47412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.39423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1850.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.223828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1434.67763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.918359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 906.70810546875,
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
          "id": "9ed8b6243f4511e2013b2f4303a9197c3ddd4071",
          "message": "Release 1.9.0 (#1016)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-13T13:44:17Z",
          "tree_id": "74c50d58f8bd92175dae44d35c32b1aac022a675",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ed8b6243f4511e2013b2f4303a9197c3ddd4071"
        },
        "date": 1726242119705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.3833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.66845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 91.6431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.7060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.1931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.96767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.35322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.1041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6160.06103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.50791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2434.49052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.8234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1977.8470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 122.27490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1586.8095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1421.0251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.501171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.5771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1102.41015625,
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
          "id": "720effa8219edf730fd5dfeacaa7c34dd866373b",
          "message": "Enable backpressure in mock-mount-s3 binary (#1017)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-17T09:50:27Z",
          "tree_id": "a4320e58ec56f7edd55fd102859901cf215d2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720effa8219edf730fd5dfeacaa7c34dd866373b"
        },
        "date": 1726573664262,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.41162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.94111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 90.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 167.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.27060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.97939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.93388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.59736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6051.22734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 512.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2380.40859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.5533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2011.95830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.9806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1548.00966796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1275.9078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.89306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1640.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.11962890625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ba23586e6defdd5621adb3b1c213d0793af2ad23",
          "message": "Update CRT submodules to latest releases (#1019)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for CRT related crates\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-09-18T11:56:57Z",
          "tree_id": "576c8eb0b0ab03483414be62c3a170f12d37fb7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba23586e6defdd5621adb3b1c213d0793af2ad23"
        },
        "date": 1726667703237,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.08681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 142.755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 92.39150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 166.1361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.60078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.1080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.2873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6226.3919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 514.67451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2396.77392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.84736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1923.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.29404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1493.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.02578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.16787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1567.81865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1145.91591796875,
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
          "id": "de6d145c2343b3bce433d1368c71f7eaf2f2d4d7",
          "message": "Add temporary way to configure amount of data prefetched per file handle (#1021)\n\n* Add temporary way to configure amount of data prefetched per file handle\n\nThis can be removed at any time.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update env_var_key to const\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add comment addressing smaller values\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-18T16:25:13Z",
          "tree_id": "0e524f065a0a6c469cef684e5a0582455f6d7dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6d145c2343b3bce433d1368c71f7eaf2f2d4d7"
        },
        "date": 1726683821007,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 103.65869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 144.59541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.96513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.41611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.44404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6023.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 520.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 2329.3048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2042.40966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1558.20673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1396.85595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1489.0466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.3193359375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}