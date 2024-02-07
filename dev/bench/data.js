window.BENCHMARK_DATA = {
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
          "distinct": false,
          "id": "924b86c33ec80ea3fc63ec60bd0f20a38a598e1e",
          "message": "Improve error logs for unsupported operations: File Overwrite, Random Write, Directory Shadowing, Unlink (without mount option) (#699)\n\n* Improved error logs for unsupported operations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved Invalid Inode Status error message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reformatted the entry if match\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Combined the match for next and last entry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed extra line from warn message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-17T17:13:39Z",
          "tree_id": "bf86c2cbdcc53932b54134e16b045fe6542e0425",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/924b86c33ec80ea3fc63ec60bd0f20a38a598e1e"
        },
        "date": 1705524162566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.8634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.62021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.549609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4743.86484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.07841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1505.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1226.46640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1413.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.97275390625,
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
          "id": "7ecbfa82eab871f75d8646a9b53fea574fa818ef",
          "message": "Unmount at end of fork tests (#705)\n\n* Unmount at end of fork tests\n\n`Command::spawn` returns a `Child`, but dropping a `Child` doesn't\nshut down the process, so we leak all these mounts every time the fork\ntests run. That's annoying when you run them a lot, so this change adds\nunmount calls to all the tests that should succeed.\n\nI also took this chance to clean up the test code a little by factoring\nout the \"wait in a loop\" logic.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update h2 dependency for https://rustsec.org/advisories/RUSTSEC-2024-0003\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix non-Express tests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-18T11:04:23Z",
          "tree_id": "60399de66d27661224c6316741e69d0e866fb7a0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7ecbfa82eab871f75d8646a9b53fea574fa818ef"
        },
        "date": 1705588699816,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.0306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.34990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.16953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.90380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.0439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4774.8220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.2466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 97.54541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 54.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1336.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.96083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1397.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.21064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1545.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1048.2615234375,
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
          "id": "06aca78b7fc094ec5b58757c2c7d0b7e608550a9",
          "message": "Release new crate versions (#700)\n\n* Release new crate versions\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update release dates for Jan 18th\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies, bump minor version on CRT anyway\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies (again)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-18T14:20:03Z",
          "tree_id": "cf6603f206cdf1fcdffcb190e7d22869c378c406",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06aca78b7fc094ec5b58757c2c7d0b7e608550a9"
        },
        "date": 1705600495859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.7111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.175390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.35517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.254296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.8830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4604.791796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.81240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.783984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1319.91005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1306.3892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.53564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1093.105078125,
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
          "id": "f5de97e534a7f798a0cf6c347b66c4d85e20d535",
          "message": "Bump version of shlex (#709)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T10:56:53Z",
          "tree_id": "80f6f626b899f0fe2781d990b8d64a654c9828fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5de97e534a7f798a0cf6c347b66c4d85e20d535"
        },
        "date": 1705933871950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.12822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.13193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.831640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.6798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.22216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.7763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4773.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.22177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 97.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.84140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1395.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 39.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1284.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1379.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1085.83017578125,
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
          "id": "ae0f475fce0d62e52632a69c2ad83046dd0e24f8",
          "message": "Support configuring SSE-KMS in S3CrtClient (#693)\n\n* Support configuring SSE-KMS (#534)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix some of the CI jobs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Don't do headers check when request failed, fix test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Hide sse settings behind a feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for error cases\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make the headers check to panic on failure\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Do not run sse tests for express buckets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move out cli changes to a separate PR\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add extraction methods to ServerSideEncryption enum, fix documentation and formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make check_response_headers to check specifically for SSE settings\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Decompose SSE settings provided for S3PutObjectRequest\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove SSE enum, replace test for check_headers with a unit test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers call\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T16:47:37Z",
          "tree_id": "f115424f29f97d63c252bf82e54579125fdc214b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae0f475fce0d62e52632a69c2ad83046dd0e24f8"
        },
        "date": 1705954690938,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.31962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.76259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.46875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4727.0982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.55478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.500390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.49677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1337.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1290.23447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.76220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1609.55341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1028.34072265625,
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
          "id": "c7c64d62b7f00b5a2ece847c65a70b4890788e9f",
          "message": "Bump CRT dependencies (#713)\n\nThis picks up two bug fixes:\n1. In aws-c-auth to fix FULL_URI container credentials that don't have a\n   path component: https://github.com/awslabs/aws-c-auth/pull/225\n2. In aws-c-s3 to fix thread pinning on NUMA hosts with cgroup\n   restrictions applied: https://github.com/awslabs/aws-c-s3/pull/403\n\nSince there's no breaking changes and only a patch version bump, we\ndon't need to do a release of `mountpoint-s3-client`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-25T09:58:49Z",
          "tree_id": "b19492edf2c56b5b8eb350d71419e1f77106d53e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7c64d62b7f00b5a2ece847c65a70b4890788e9f"
        },
        "date": 1706189649012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.434765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.5896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.84697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.08505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4753.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.0958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1362.64296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.9103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.90244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.1822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1619.81181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 983.47451171875,
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
          "id": "85c98faafb443911444658d0d88e3db0640e22f2",
          "message": "Fix decrement of file handle gauge for RW handles that file on existing files (#716)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-25T20:17:31Z",
          "tree_id": "dc1e57b5925061eacd622f1e2c4de911cf9a820c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85c98faafb443911444658d0d88e3db0640e22f2"
        },
        "date": 1706226437211,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.36923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.2095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.04169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.61396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4694.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 86.84453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 52.40849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1418.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.393359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1274.1689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.4712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1402.2017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1042.7640625,
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
          "id": "25aff50f7cae9995f713b655fc4ac6070f81a26d",
          "message": "Fix a race condition on create and forget operations (#711)\n\n* Fix a race condition on create and forget operations\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't panic when cannot remove inode from superblock\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T13:50:42Z",
          "tree_id": "a247585261c3babe8f0347b07f69a1527bf7133b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/25aff50f7cae9995f713b655fc4ac6070f81a26d"
        },
        "date": 1706289966328,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.043359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.1111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.858203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.88896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4654.1142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.781640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.0201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1374.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1349.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.03935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1687.24736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.6466796875,
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
          "id": "e52d68ede985ecdb31f68e8db2beef29b528c8b1",
          "message": "Release v1.4.0 (#720)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T14:45:15Z",
          "tree_id": "d6f3b9957ad512f0a000281dd2e81484202f96cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52d68ede985ecdb31f68e8db2beef29b528c8b1"
        },
        "date": 1706293291837,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.569140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.6248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.66259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.50126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.914453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 202.09423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.6822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.573046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1392.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1327.79609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.68125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1654.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1064.98740234375,
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
          "id": "92aec0a0132aaf8d20093943cb40269bb57ffb2f",
          "message": "Reduce error noise in logging for lookup and throughput configuration (#718)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-31T14:26:06Z",
          "tree_id": "9bc33a9a28479cd7d8967c8f0b0df2ebe0e05e16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/92aec0a0132aaf8d20093943cb40269bb57ffb2f"
        },
        "date": 1706724193644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.11376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.28623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.73193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.04892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.55693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.13203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4601.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.10654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.16650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1187.99169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.66630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1247.41455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1500.039453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.04248046875,
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
          "id": "36e8b6481bb0f7aeb4498792fbb88a55e953752f",
          "message": "Adjust auth tests to fix S3 Express test failures (#726)\n\n* Adjust auth tests to fix S3 Express test failures\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Loop on unmount to give async requests time to finish\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T11:17:33Z",
          "tree_id": "cb197c3d8c2e71bfc59f01f0f0d785f1bb09599b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36e8b6481bb0f7aeb4498792fbb88a55e953752f"
        },
        "date": 1706885527660,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.182421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.44482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 7.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.91455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.85537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4624.5203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 224.3962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.11689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1519.487109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.90947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1277.12587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.88447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.96708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1100.99599609375,
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
          "id": "203b36c98064c165f8bd21b0088a4cbee919beca",
          "message": "Add troubleshooting page for unsupported operations in Mountpoint (#703)\n\n* Added a troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the format of troubleshooting page from table to paragraphs, added its link to bug-report template\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed formatting of yml file\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting and made recommended changes introubleshooting document\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the version that this doc is true to and also added unreleased improved section\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Modified the error message so that it is more readable for user in trouble shooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the link to troubleshooting page in bug report page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected sentence syntax\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* added the troubleshooting page link at top of bug template and other minor formatting changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* made the recommended nit changes about language and also theme of the troubleshooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Add both overwrite errors depending on version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Minor documentation wording changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move bug report form heading to 'label' rather than markdown heading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad copy/paste in writing to an existing file\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-02T15:24:39Z",
          "tree_id": "d0071e5375ed0d7088538e98882638b9b7d72719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/203b36c98064c165f8bd21b0088a4cbee919beca"
        },
        "date": 1706900217895,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.338671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.38251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.3693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.91962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.38056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4668.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.1423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.53720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.89150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.09677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1232.92978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1722.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1010.6158203125,
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
          "id": "e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103",
          "message": "Refactor main.rs into a new module generic in its client (#724)\n\n* Move entire main.rs into cli.rs\n\nThis is the smallest change to make things still compile. Refactoring\ncomes in the next commit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Refactor to make `main` generic in the client\n\nThis will let us run the whole mount-s3 binary with different client\nimplementations\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T15:50:56Z",
          "tree_id": "7a5be2816f6eb6d72994843b5fd5ed4d7106e056",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103"
        },
        "date": 1706901652881,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.99658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.67783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.93671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.8060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.501171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.08212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4697.3884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.8283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.0154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.9353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1460.98291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.08369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1341.0345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.53271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1637.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.1638671875,
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
          "id": "6dc1351f09f5c54b7d6b588b05a4edf551529431",
          "message": "Add a new mock client that simulates GET throughput (#723)\n\n* Add a new mock client that simulates GET throughput\n\nFor performance testing and microbenchmarking, we'd like to be able to\nseparate the S3 service and the CRT datapath from our own client and\nfile system. This mock client can simulate a target network throughput\nby rate-limiting the `get_object` stream. The goal is to be able to use\nthis client in place of a regular `S3CrtClient` when we want to isolate\nperformance questions.\n\nAlong the way, I realized we're including the mock client in our release\nbuilds, because it's an always-on feature of the client crate. This\nchange therefore also does a little dependency refactoring to remove the\nmock and failure clients from the non-test dependency closure. I checked\nthis works by seeing that the release binary is a few MBs smaller, and\nthat `strings mount-s3 | grep mock` no longer includes the mock client's\nsymbols.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adopt mock client as an option in client benchmark\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Dependency fixes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T16:21:43Z",
          "tree_id": "9038a8e01eacaa9abd826e342738312bb816af74",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dc1351f09f5c54b7d6b588b05a4edf551529431"
        },
        "date": 1706904690456,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.77421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.04873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.49326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.2546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.42333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.60283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4728.6458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.7615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.29853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1452.25458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.81337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1365.46015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.99521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.50703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.007421875,
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
          "id": "778aad3ee2379c270c3ff9979e86415f956cb1c5",
          "message": "Update configuration documentation page (#727)\n\n* Update CONFIGURATION.md\n\nupdate the file modifications and deletions section with the release of overwrites \n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n---------\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-02-02T17:49:34Z",
          "tree_id": "01ede06aa332f257045ceb49aeb8f68952a85416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/778aad3ee2379c270c3ff9979e86415f956cb1c5"
        },
        "date": 1706908762833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.7021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.27626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.98564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.22109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4784.532421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 93.053125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.905859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1502.31904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.825,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.46689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1582.63408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.40712890625,
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
      }
    ]
  },
  "lastUpdate": 1707333062225,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}