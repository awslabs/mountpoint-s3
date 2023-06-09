window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "6e73c0ffecb56607ab90b370459280a2e5da5c0f",
          "message": "Fix issue with file shadowed by a deleted directory (#256)\n\nThis change fixes an issue where a file that had been shadowed by a directory would still not become visible after the directory was removed from S3.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T15:07:41+01:00",
          "tree_id": "5a2b5e1c6bd90de179b8aa27c5b855a63536dd55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e73c0ffecb56607ab90b370459280a2e5da5c0f"
        },
        "date": 1685111446664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.6328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6718.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.0009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1722.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.8388671875,
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
          "id": "5712ed24687fb442392114575800ce1c77453005",
          "message": "Implement checksummed bytes (#258)\n\n* Implement checksummed bytes\r\n\r\nThis change introduces ChecksummedBytes struct which is a buffer containing\r\nboth the bytes and its checksum. There will be follow-up changes that make\r\nuse of this struct, as we planned to implement some integrity check along\r\nthe read and write path, the ChecksummedBytes will make those changes\r\nsimpler and more efficient.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update the ci to include checksum feature\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update error message\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update per comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-05-26T09:58:57-05:00",
          "tree_id": "f64494d4fe6e8d73141dc016f52fc4c0d90bee4e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5712ed24687fb442392114575800ce1c77453005"
        },
        "date": 1685114494169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.7314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.00390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1056.03125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6829.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 165.65625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1938.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.9853515625,
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
          "id": "fe4d717eba54ad48d17e23a06cffff9bfb6c1591",
          "message": "Integrate new CRT telemetry APIs (#261)\n\n* Integrate new CRT telemetry APIs\r\n\r\nThe telemetry APIs let us get metrics at a per-request granularity. This\r\nlets us deprecate some of the code we used to have for parsing out\r\nthings like request IDs from a meta request, and also break out our\r\nmetrics by request type. The new telemetry callback is invoked once per\r\nrequest sent by the CRT.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Update mountpoint-s3-client/src/s3_crt_client.rs\r\n\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-05-26T09:59:13-05:00",
          "tree_id": "a1ca847c5c2e3f639cb6791f015967a3772a98c2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe4d717eba54ad48d17e23a06cffff9bfb6c1591"
        },
        "date": 1685114508362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.03125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.95703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.1572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1256.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7080.7998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2114.7294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.375,
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
          "id": "04ac3516882b07bacb24bf046b6da20829036b18",
          "message": "Update to aws-c-common v0.8.22 (#264)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-26T16:40:12Z",
          "tree_id": "f4fad569d3ace822a92534abb6b2d9ae83771601",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04ac3516882b07bacb24bf046b6da20829036b18"
        },
        "date": 1685120545411,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 22.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1296.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7020.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 152.4951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2116.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.21875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.044921875,
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
          "id": "81923533e8aa05048a5cab435340b163fa905364",
          "message": "Implement `unlink` operation for remote files (#232)\n\n* Update semantics doc\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Implement unlink\r\n\r\nThis implementation does not attempt to tackle the unbounded growth of the superblock. This should be tackled at a later date.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Incoporate PR feedback\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Move unlink locking to cover whole operation duration\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix grammar in added comment\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Revert \"Move unlink locking to cover whole operation duration\"\r\n\r\nThis reverts commit 52b0bd86c190d67508c639b61df1328eb00d89df.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update unlink to panic if VFS assumptions are broken\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add test for lookup after unlink\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add integration tests for unlink of local writing files\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Add TODO for inode lookup/ref counting\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve expect/expect_err messages\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Appease clippy\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Fix test_lookup_after_unlink for prefixed test case\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-05-31T09:28:29+01:00",
          "tree_id": "b9ca1fdca9eca875c0ce36963c945b4aeb174298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/81923533e8aa05048a5cab435340b163fa905364"
        },
        "date": 1685523054284,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.2900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 27.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1157.6025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6467.43359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1972.2919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.482421875,
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
          "id": "ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d",
          "message": "Add crate version to mountpoint-s3-client user agent (#266)\n\nWe already have this in mountpoint-s3, but for direct users of the\r\nclient crate there's currently no version information. This change just\r\nduplicates our existing mountpoint-s3 logic into the client crate. I\r\nalso removed the \"UNKNOWN\" suffix for builds without git history (i.e.,\r\nevery crates.io build), since it seems spammy -- we can distinguish\r\nthem by the absence of the `-`.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-05-31T10:23:55+01:00",
          "tree_id": "fbefbfdc18607169a8f7b7ee3e6297784af27241",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff4b765b3857e2dfdfa4481866dbe45bc6e34e7d"
        },
        "date": 1685526370708,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.5947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1194.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.4130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6840.18359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 159.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2023.515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.4873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.8173828125,
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
          "id": "e243ef78523119a6a405ea869e862411b123cfa8",
          "message": "Exclude test files from crt-sys crate (#265)\n\nSignificantly reduce the size of the `mountpoint-s3-crt-sys` crate, in order to stay under the 10MB threshold.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T10:38:28+01:00",
          "tree_id": "57d41f424fca0dbc9bf92cd164cc63b0489cc0a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e243ef78523119a6a405ea869e862411b123cfa8"
        },
        "date": 1685527324110,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.5859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1416.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6797.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 166.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1940.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 25.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.4130859375,
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
          "id": "c10c0702f14096e9965af636f8c3ca3aac779b74",
          "message": "Fix build failure outside of git (#269)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T14:43:02+01:00",
          "tree_id": "f57f49ab53668aa75e2f9d5c8b9c67f3420ed4f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c10c0702f14096e9965af636f8c3ca3aac779b74"
        },
        "date": 1685542237680,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.05859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.34375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1034.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.9306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6771.330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.0341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.21484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2130.912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.2236328125,
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
          "id": "e52ecb02e1739c94611ec3d4cb64e2f913a97f65",
          "message": "Increment mountpoint-s3-client version number to 0.2.2 (#270)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-05-31T13:54:08Z",
          "tree_id": "6d8c4892cdf674c8103d04bc0c3c41b42328872a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52ecb02e1739c94611ec3d4cb64e2f913a97f65"
        },
        "date": 1685542648216,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 2.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.4462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 32.9384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1816.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 7030.3701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 156.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.2197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2110.970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.2080078125,
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
          "id": "fb31aba32c9c6bff7486f37e7e3415f78542cc50",
          "message": "Update to aws-c-sdkutils v0.1.11 (#271)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T12:00:21+01:00",
          "tree_id": "2048121c8eb19fabf34e9627645ecd9c9588748b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb31aba32c9c6bff7486f37e7e3415f78542cc50"
        },
        "date": 1685704888778,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 28.46875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.40625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1101.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.1513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6748.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 149.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.6943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2175.7265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 22.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.8193359375,
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
          "id": "768cdfafa06e1cd8b05066f46ac1e757d0feeabd",
          "message": "Remove obsolete unset of AWS_PROFILE envvar in AWS profile test (#272)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-02T13:32:33+01:00",
          "tree_id": "28da93cf2ce0079f34f6bbb9dd82e16a4a846361",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/768cdfafa06e1cd8b05066f46ac1e757d0feeabd"
        },
        "date": 1685710428921,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 30.06640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.5146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1203.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6707.2470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 152.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.1494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1979.1416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.3720703125,
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
          "id": "bd9eb73de8d5f298aaa6b0921b623dadb82b57ec",
          "message": "Correctly handle missing TTFB telemetry (#275)\n\nThe send_end and receive_start times can be missing, which we weren't\r\nhandling.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T09:32:19-05:00",
          "tree_id": "97b863e7f077b28490c1cdc823ceaa3016b03beb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd9eb73de8d5f298aaa6b0921b623dadb82b57ec"
        },
        "date": 1685976811859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.28125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 29.4736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1148.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6698.91796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2405.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.7939453125,
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
          "id": "d3bb128cf18cc866362a105784893e274a525f0b",
          "message": "Update CRT submodules to latest releases (#278)\n\n* Update CRT submodules to latest releases including streaming changes\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up fix: aws_future functions no longer inline\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Pick up aws-checksums segfault fix\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-05T21:32:59Z",
          "tree_id": "3e1edd0dc3a72232157c54e7c3a12065678d9957",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3bb128cf18cc866362a105784893e274a525f0b"
        },
        "date": 1686002043903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.3828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 36.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1074.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.7607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6702.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 150.50390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.99609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2039.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.234375,
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
          "id": "843c9630081e3d8c82c595f31431155763094cd9",
          "message": "Bump xml-rs from 0.8.4 to 0.8.14 (#279)\n\nBumps [xml-rs](https://github.com/kornelski/xml-rs) from 0.8.4 to 0.8.14.\r\n- [Changelog](https://github.com/kornelski/xml-rs/blob/main/Changelog.md)\r\n- [Commits](https://github.com/kornelski/xml-rs/compare/0.8.4...0.8.14)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: xml-rs\r\n  dependency-type: indirect\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-06T05:32:47Z",
          "tree_id": "8ebb6116e56d3606900ecd10b61e81506277f8e7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/843c9630081e3d8c82c595f31431155763094cd9"
        },
        "date": 1686030790967,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.26953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.62109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.4345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1133.744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.3193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6759.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 164.6513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2298.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.3369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.662109375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rostyslav.fridman@gmail.com",
            "name": "Rostyslav",
            "username": "frostyslav"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cf1194c3f50a6ed4aafccd28847ce09674fdcff6",
          "message": "feat: reduce docker image size (#276)\n\n* feat: reduce docker image size\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n* feat: small dockerfile improvements\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Rostyslav Fridman <frir@amazon.com>\r\nCo-authored-by: Rostyslav Fridman <frir@amazon.com>",
          "timestamp": "2023-06-06T10:55:10-05:00",
          "tree_id": "e20bee0af0e6b12f10ee5dada095204d21728057",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf1194c3f50a6ed4aafccd28847ce09674fdcff6"
        },
        "date": 1686068187231,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.9248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 24.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.3857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.01171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1078.498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5.837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6618.60546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 155.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 6.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1970.3759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 22.7470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 22.3154296875,
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
          "id": "03d71562337e978d618f487e41f1f5c4744fc99e",
          "message": "Add HeadBucket NoSuchBucket error to S3CrtClient (#273)\n\n* Add HeadBucket 404 error to S3CrtClient\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update non-existent bucket to \"nosuch..bucket\"\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-06T16:25:55-05:00",
          "tree_id": "07fa805dd55fa27c42cbf84bd5db14f63d0f53bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/03d71562337e978d618f487e41f1f5c4744fc99e"
        },
        "date": 1686088023368,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.2021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 28.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 25.33984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1203.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.0517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6824.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 161.0029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.4814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1783.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 24.3359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 24.833984375,
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
          "id": "56b59c25518bf2a052fa93b8b24e7747b8bfdd77",
          "message": "Implement checksum validation for the prefetcher (#263)\n\n* Implement checksum validation for the prefetcher\r\n\r\nWe want to ensure data integrity while it is within Mountpoint's custody\r\nbut S3 API doesn't support ranged-get checksum at the moment.\r\n\r\nAs a temporary measure, we will calculate CRC checksum for the data as\r\nsoon as we receive it from S3 and do the validation every time we pass it\r\naround our part queue, and right before returning them to FUSE. To do\r\nthis, we will use ChecksummedBytes from previous change instead of Bytes\r\nin the prefetcher.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update per comments\r\n\r\nSigned-off-by: monthonk <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: monthonk <monthonk@amazon.com>",
          "timestamp": "2023-06-08T12:11:54-05:00",
          "tree_id": "404a77f8b9ab7c00e03e013ab68e6da54fd98166",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56b59c25518bf2a052fa93b8b24e7747b8bfdd77"
        },
        "date": 1686245547359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.9716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 30.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.04296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.56640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1312.408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6304.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 154.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1928.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 23.1669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 23.1376953125,
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
          "id": "c2f5f2aabac129669e6cdcd53cb8b9f6ea78c8fb",
          "message": "Force compiler optimizations for aws-checksums (#284)\n\nThe ARM implementations in aws-checksums are written in C, and so\r\ncompiler optimizations are essential to give them reasonable\r\nperformance. We've recently started validating a lot of checksums in our\r\ntests (#263), and that's made the ARM CI much slower (> an hour). This\r\nshould get that back under control. x86 isn't affected because the\r\naws-checksums implementations are mostly hand-written assembly.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-09T09:32:17+01:00",
          "tree_id": "fc379deea98a0f05805634fc152298829f9c9e7c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c2f5f2aabac129669e6cdcd53cb8b9f6ea78c8fb"
        },
        "date": 1686300794281,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.5888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.8779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.0263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1344.837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 6.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6350.2958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 163.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2262.751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 26.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 25.6376953125,
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
          "id": "9c0a462b10cf0267be8bdb01ba9f8307651577f1",
          "message": "Avoid CRT auto-ranged-get for small requests (#285)\n\nThe CRT's auto-ranged-get will always do a HeadObject request when a\r\nrange is specified. For small requests, that's a fairly large latency\r\nhit. Let's avoid using the auto-ranged-get for requests small enough\r\nthat they would be sent as a single part anyway.\r\n\r\nIt would probably be nicer to have a way to turn off this behavior in\r\nthe CRT, but this is a reasonable change for now. We'll have to be\r\ncareful if we ever start relying on any extra behavior of the\r\nauto-ranged-get machinery, like checksum validation, but we're not\r\ncurrently planning anything like that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-09T10:09:47-05:00",
          "tree_id": "2e8c59759af6ca83c7785ff64a02f8133a351e06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9c0a462b10cf0267be8bdb01ba9f8307651577f1"
        },
        "date": 1686324655641,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.2587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.40234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 848.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 9.4755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6594.24609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 216.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 9.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 955.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 31.232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 27.54296875,
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
          "id": "9c0a462b10cf0267be8bdb01ba9f8307651577f1",
          "message": "Avoid CRT auto-ranged-get for small requests (#285)\n\nThe CRT's auto-ranged-get will always do a HeadObject request when a\r\nrange is specified. For small requests, that's a fairly large latency\r\nhit. Let's avoid using the auto-ranged-get for requests small enough\r\nthat they would be sent as a single part anyway.\r\n\r\nIt would probably be nicer to have a way to turn off this behavior in\r\nthe CRT, but this is a reasonable change for now. We'll have to be\r\ncareful if we ever start relying on any extra behavior of the\r\nauto-ranged-get machinery, like checksum validation, but we're not\r\ncurrently planning anything like that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-09T10:09:47-05:00",
          "tree_id": "2e8c59759af6ca83c7785ff64a02f8133a351e06",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9c0a462b10cf0267be8bdb01ba9f8307651577f1"
        },
        "date": 1686325994381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read",
            "value": 1.935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.2666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 34.1728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1302.4228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 11.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6537.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 11.69140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1483.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 31.3154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 30.3291015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1686325994916,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}