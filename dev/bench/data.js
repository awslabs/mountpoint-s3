window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718362417665,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.39990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 35.1849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.979296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.92451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5284.5421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.87890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 79.1587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.97392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1759.473828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.41953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.775390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1246.4794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.8359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1707.135546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.4953125,
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
          "id": "5795b38fe73ecafc76b682bc7ba44168568623f0",
          "message": "Add guidance on KMS permissions when using SSE-KMS (#913)\n\n* Add guidance on KMS permissions when using SSE-KMS\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix missing permission for object upload, add link to docs for more info\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-14T12:03:38Z",
          "tree_id": "7facd9a6adbcaa6166c6561bc50b8909f5977d6c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5795b38fe73ecafc76b682bc7ba44168568623f0"
        },
        "date": 1718373613198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.4625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.712109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4904.8162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.40244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 79.5572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1679.8708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.63642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.31044921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.88447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.1833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1380.54677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.81142578125,
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
          "id": "78df1aeda22f7cdf9a34920596f863cfd4727282",
          "message": "Fix the backpressure test (#916)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-17T15:59:24Z",
          "tree_id": "b2e76b42513144048a25da6e79848f8d1d150aed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78df1aeda22f7cdf9a34920596f863cfd4727282"
        },
        "date": 1718647010903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.912890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.10068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.77587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.01796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.16357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.990625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.77529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5175.5998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.75703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 64.158984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 70.37763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1712.1501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1212.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1169.50224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.784765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1460.24013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1067.39365234375,
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
          "id": "e299e2b71b3e5a2882b2d16035df6875476b3588",
          "message": "Fix an issue where mountpoint-s3-client could interpret a HTTP 206 Partial success response as an error (#917)\n\nWe are removing a workaround in mountpoint-s3-client that reduced the number of requests to S3 and is no longer needed. When introduced in #285, the workaround used a default CRT meta-request instead of an auto-ranged-get for small requests, which avoided a redundant HeadObject request that the CRT performed on every auto-ranged-get. Since then, the CRT has been updated to avoid the extra requests when a range is specified, so we can always use auto-ranged-get.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-06-17T18:32:41Z",
          "tree_id": "cb9b94acd16984d684e6374d36e6b4db602f87c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e299e2b71b3e5a2882b2d16035df6875476b3588"
        },
        "date": 1718656204946,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.18232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.83818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.037890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.04814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.664453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5291.1736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 229.6654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.79296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 69.52333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1669.66865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.11640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.8416015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1220.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.8630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.4708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.837109375,
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
          "id": "d3b632d1b98dd32f37ab7ba0633c825933ececb9",
          "message": "Release v1.7.2 (#918)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-17T19:11:24Z",
          "tree_id": "8e4df354984977ea97c50a2386c3c6f737fadbc2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3b632d1b98dd32f37ab7ba0633c825933ececb9"
        },
        "date": 1718658505831,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.062890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.76064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.77109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.852734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5330.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.89931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 76.37353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1729.0193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.08134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1418.9138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.21640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.87470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1381.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 939.7544921875,
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
          "id": "f01381ae6ed1562f413769354f82bb371de80cff",
          "message": "Provide `ErrorMetadata` to `crate::fuse` layer with errors from the client (#882)\n\n* Provide ErrorMetadata with S3RequestError::Forbidden (up to fuse.rs on lookup)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* rename EMPTY_ERROR_METADATA, add InodeError::client_error constructor\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Provide error_code, bucket and key with InodeError::ClientError\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Allow detecting throttled on lookup()\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the throttle error on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a test for the forbidden/404 on lookup\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* CI fixes\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Propogate error message from S3 for frobidden and http_status for unhandled error\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor err! macro\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove logging, disable forbidden test for express, move policy helper to mod.rs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move error_code, bucket and key out from the client crate\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Return RequestCanceled on AWS_ERROR_S3_CANCELED\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* simplify client_error constructor, rename metadata fields, flatten error parser calls\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* allow constructing metadata on the flight in ProvideErrorMetadata\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Delete big comment, flatten or_else chain, provide context in readdir\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove box from forbidden\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add a comment explaining error parsing logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-19T12:53:22Z",
          "tree_id": "2bb3cf214ef4c7ccc42ff08218328109968c49c5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f01381ae6ed1562f413769354f82bb371de80cff"
        },
        "date": 1718808857020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.1341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.3115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.0298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.53427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.97646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.5853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.80751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5377.59873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.190234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.98671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.7775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1550.7228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.09033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1365.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1195.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.959765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1373.491015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 946.78603515625,
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
          "id": "2dcb7cb8a3f6702ba552408b926613399ae94196",
          "message": "Use MaybeUninit when getting thread ID from CRT request metrics (#922)\n\n* Use MaybeUninit when getting thread ID from CRT request metrics\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Drop null pointer check since we know the pointer is always non-null (even if the memory may not be initialized)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T15:21:29Z",
          "tree_id": "623d50483288af987dbff1f44eddf3b5d41ab4be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2dcb7cb8a3f6702ba552408b926613399ae94196"
        },
        "date": 1719335947443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.42001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.08798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.6705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.2853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.72646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.47490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.91376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5318.8466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.46455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 67.903515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1665.89755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.23505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1251.903125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1190.35263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.3125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1361.39287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 936.379296875,
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
          "id": "115cc6fa7954ee89fb3890e3bdbcc8ae01130680",
          "message": "Add troubleshooting entry on uploads larger than 78GiB (#921)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T16:17:48Z",
          "tree_id": "f88e27bbb84947b8bcc8b1256875d8b979d97760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/115cc6fa7954ee89fb3890e3bdbcc8ae01130680"
        },
        "date": 1719339108565,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.01591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.5517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.0580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.54462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.47861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.94296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.39599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5151.6185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.0833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1554.02958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.1955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1200.623046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1343.5396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.27861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1490.4896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.4625,
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
          "id": "4569a4b0c09369657c46950d6b8d9ae2dbd38b02",
          "message": "Bump docker/build-push-action from 5 to 6 (#920)\n\nBumps [docker/build-push-action](https://github.com/docker/build-push-action) from 5 to 6.\n- [Release notes](https://github.com/docker/build-push-action/releases)\n- [Commits](https://github.com/docker/build-push-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: docker/build-push-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-25T16:56:48Z",
          "tree_id": "ef31ea4885526c9a8bf6cc569ccd57c1bd867640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4569a4b0c09369657c46950d6b8d9ae2dbd38b02"
        },
        "date": 1719341666217,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.4982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.18056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.26455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.6673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.65322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5349.14345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.1642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 80.15654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 69.878125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1671.95615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.84658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1612.060546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.913671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1497.758203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 954.159375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37d980986555df887f7cb6cccdf2d442c92fbb4f",
          "message": "Release new crate versions (#923)\n\n* updates dependencies\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* addresses review feedback\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates change log\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T12:28:40Z",
          "tree_id": "38086a7371fc2d97b57119473a411eb1195600b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/37d980986555df887f7cb6cccdf2d442c92fbb4f"
        },
        "date": 1719411966410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.59091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.93828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.19814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.43798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.87998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.81728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5458.84423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.7146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.42080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1726.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.69873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1338.1580078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1265.80947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.4583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1393.971484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.042578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc8d3094f1a43df420470204d78c52670cd5f7d1",
          "message": "include test files in cargo (#924)\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T16:14:41Z",
          "tree_id": "e1302c0b125475220680150b56554cf761acca9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc8d3094f1a43df420470204d78c52670cd5f7d1"
        },
        "date": 1719425551920,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.82021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.48818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.682421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.05859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.03994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4978.73125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.44521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 78.0201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.37236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1471.61943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.7388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.9888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1282.92783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.23701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.78369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 942.84111328125,
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
          "id": "08aa2b828627418549109ba081e8daaa46db7fda",
          "message": "Add link to CSI driver LOGGING.md to Mountpoint LOGGING.md (#925)\n\nWe added a new logging document in the CSI Driver project, which helps support locating the logs on the underlying host. This isn't visible from the Mountpoint repository including troubleshooting guides, so let's link it from MP's logging documentation.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-01T09:21:08Z",
          "tree_id": "cf95c57e4798e0f14f29999f3b1082ece07616a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/08aa2b828627418549109ba081e8daaa46db7fda"
        },
        "date": 1719832720001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.84912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.70869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.62802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.16728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.87666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.4396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.93408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5348.26875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.48349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 76.00400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 75.87841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1581.338671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.97763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.35986328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1253.8537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1848.11845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.7640625,
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
          "id": "0b4c14d077943a79478e7abe7bdb05cb6816f2cb",
          "message": "Update Rustdoc comments in the readdir module (#928)\n\n* Update Rustdoc comments in the readdir module\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move rustdoc above macros\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on Readdir deduplication behavior\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-02T13:08:47Z",
          "tree_id": "3b3260494d783ba37bdfebdad6163a1c564ac9f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b4c14d077943a79478e7abe7bdb05cb6816f2cb"
        },
        "date": 1719932781274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.75439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.6099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.22236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5194.18447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.45029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 70.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1608.54453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1198.75,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.84912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.815234375,
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
          "id": "936b805b1de5ace88faf083b0c6242232de2db63",
          "message": "Fixing 'package' CI workflow after CentOS 7 reached end of life. (#931)\n\n* Fixing 'package' CI workflow after CentOS 7 reached end of life.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Separate the installation of epel-release and centos-release-scl.\n\nI suspect this is why some packages like fakeroot are not found.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Using http instead of https for the repo URIs.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying removing repo centos-release-scl.\n\nWant to try this to see if it helps for ARM build.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding centos-release-scl back.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying CentOS 8.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Changing to dnf and using group install for dev tools.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding James' suggestion.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-03T16:42:43Z",
          "tree_id": "3df02f65f8a300904695a67bdba481d83852e59d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936b805b1de5ace88faf083b0c6242232de2db63"
        },
        "date": 1720032018480,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.71806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.7623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.92548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.92294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.3638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5225.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 69.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.6265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 836.59384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.74013671875,
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
          "id": "805c501f0bce2deb21433701a0b1a77bc890761d",
          "message": "Reset prefetcher on any error (#933)\n\n* Add test of PartQueue invariant failure\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Reset prefetcher on any error\n\nThe prefetcher did not reset its internal state (and cancel current tasks) when encountering an error on a forward seek.\nAs a result, successive reads could try and read from a part queue in an invalid state. This change ensures that the prefetcher\nis always reset when encountering an error, whether while reading or seeking.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Fix prefetcher reset on integrity error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-07-05T10:54:06Z",
          "tree_id": "3a8eccb457e9db179321866e0c3cd62474395ba0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/805c501f0bce2deb21433701a0b1a77bc890761d"
        },
        "date": 1720183872925,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.85322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.34541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.95517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5168.92041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.79853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.72294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 75.808203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1723.41748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.7615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1348.69853515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.78076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.25546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1440.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1085.08076171875,
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
          "id": "becbd554c6d8e3e7a9751f16b61e3f643f682a83",
          "message": "Move mapping of PrefetchReadErrors into the fs::error module (#750)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-07-05T13:10:52Z",
          "tree_id": "52fd397cb689399ac727682e24c87302c2186bea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/becbd554c6d8e3e7a9751f16b61e3f643f682a83"
        },
        "date": 1720191971634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.235546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.58251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.58388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.55810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5177.35078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.2982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.93544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 77.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1754.455859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.01064453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.858984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1555.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.49775390625,
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
          "distinct": false,
          "id": "5855859fa4f87bf76af5f670205bc65169f5b2db",
          "message": "Fix cache benchmark to include results for read skip test. (#934)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-09T08:45:55Z",
          "tree_id": "892a0756d6e85bd814008363b61b47f65e432012",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5855859fa4f87bf76af5f670205bc65169f5b2db"
        },
        "date": 1720521821192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.219921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5076.21904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.45419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1543.790625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1132.837109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1153.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.8318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1441.191796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.628125,
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
          "id": "278c42975ee93b9ab81b9f04054ba4ab5097a6bd",
          "message": "Add additional trace logging during mount (#937)\n\n* Add additional trace logging during mount\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove old block used to gate SSE behind compile-time flag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-10T09:02:41Z",
          "tree_id": "ecd3eaa674a46302985e0fa01d08a791bf7a26e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/278c42975ee93b9ab81b9f04054ba4ab5097a6bd"
        },
        "date": 1720609234064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.77158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.5130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.9107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.34599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.55,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.883203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5266.06416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 74.11572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1688.166796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.32705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.56142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.648828125,
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
          "id": "a3c6f8229227d224e8776062dc94470087465cce",
          "message": "Update CRT libraries and set operation_name for DEFAULT meta-requests (#935)\n\n* Update CRT submodules to latest releases\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 96c47e3..11fc684:\n  > Make AES GCM more consistent cross platform (#189)\n  > Pin AWS-LC until it's fixed for manylinux1 (#188)\n  > Implement runtime check on libcrypto linkage (#186)\n  > clang-format 18 (#187)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 06cf4d8..6d974f9:\n  > cbor support  (#1131)\n  > Fix default thread options for windows to not pin to any cpu_id (#1126)\n  > Use CBMC 6.0.0 (#1128)\n  > latest_submodules.py uses AWS-LC-FIPS releases in aws-crt-java (#1125)\n  > Use CBMC version 5.95.1 (#1124)\n  > clang-format 18 (#1113)\n  > disable optimization was not working (#1123)\n  > Fix memtracer bad assumptions on the size of stack trace (#1122)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 6588f9a..cb431ba:\n  > test_helper.py improvements (#442)\n  > Fix shutdown_callback or returning NULL contract for meta_request (#440)\n  > BREAKING CHANGE: operation_name must be set for DEFAULT meta-requests (#439)\n  > clang-format 18 (#438)\n  > Auto - Update S3 Ruleset & Partition (#436)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 92bf532..4368aaa:\n  > Fix for loading JCA stripped private keys (#1658)\n  > Prepare for release v1.30.1 (#1657)\n  > Revert  `_CET_ENDBR` (#1656)\n  > Close FD in Snapsafe test function (#1649)\n  > Prepare for release v1.30.0 (#1646)\n  > Snapsafe-type uniqueness breaking event detection (#1640)\n  > Add EVP_md_null and SSL_set_ciphersuites (#1637)\n  > Add de-randomized ML-KEM modes to experimental EVP API (#1578)\n  > Patch for OpenVPN certificate setting behavioral difference (#1643)\n  > Require newer assembler for _CET_ENDBR (#1641)\n  > OpenVPN error codes, SSL_get_peer_signature_* funcs, and first patch file (#1584)\n  > NIST.SP.800-56Cr2 One-Step Key Derivation (#1607)\n  > Upstream merge 2024-06-13 (#1636)\n  > More minor symbols for Ruby support (#1581)\n  > Add support for NETSCAPE_SPKI_print (#1624)\n  > align gcc version with curl's CI (#1633)\n  > Fix spelling nits\n  > Generated ASM files\n  > Add Intel Indirect Branch Tracking support.\n  > [EC] Unify point addition for P-256/384/521 (#1602)\n  > Upstream merge 2024 06 03 (#1621)\n  > Fix AES key size for AES256 in ABI test (#1629)\n  > Move SSL_CIPHER_get_version test to SSLVersionTest.Version (#1631)\n  > Use 'nasm' not 'yasm' (#1630)\n  > Prepare for release 1.29.0 (#1626)\n  > Implement SSL_CIPHER_get_version for recent TLS versions (#1627)\n  > Add integration tests for OpenSSL-linking 3p modules (#1587)\n  > Prevent non-constant-time code in Kyber-R3 and ML-KEM implementation (#1619)\n  > Update ec2-test-framework to use gv2 (#1623)\n  > Script for creating compilation database (#1617)\n  > Fixes for building with `-pedantic` (#1608)\n  > Fix SSL_BUILD_CHAIN_FLAG_IGNORE_ERROR behavior (#1620)\n  > Update for FIPS documentation (#1610)\n  > Disable CI for gcc-14/FIPS until relocation issue is resolved (#1622)\n  > Add support for ocsp get id (#1609)\n  > Add libevent to GitHub integration CI (#1615)\n  > Upstream merge 2024 05 17 (#1600)\n  > add back ASN1_dup with tests (#1591)\n  > Remove special aarch64 valgrind logic (#1618)\n  > Fix NTP integ test (#1616)\n  > Pin aws-lc-rs integ to nightly-2024-05-22 (#1612)\n  > Cleanse the right amount of bytes in HMAC. (#1613)\n  > add support for X509_CRL_http_nbio (#1596)\n  > Add `all_fuzz_tests` build target (#1605)\n  > Fix mariadb ssl_crl patch (#1606)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 6d92b46..073c7b4:\n  > bug: Fixing bash error (#4624)\n  > chore: make cbmc proof build more strict by adding -Werror flag (#4606)\n  > Perform 2-RTT Handshake to upgrade to PQ when possible (#4526)\n  > test(bindings/s2n-tls): refactor testing::s2n-tls tests (#4613)\n  > docs: add timeout note to blinding delay docs (#4621)\n  > docs: Add back suggested FIPS + TLS1.3 policy (#4605)\n  > ci: shallow clone musl repo (#4611)\n  > example(bindings): add async ConfigResolver (#4477)\n  > chore: use CBMC version 5.95.1 (#4586)\n  > s2n-tls rust binding: expose selected application protocol (#4599)\n  > test: add pcap testing crate (#4604)\n  > testing(bindings): add new test helper (#4596)\n  > chore(bindings): fix shebang in generate.sh (#4603)\n  > fix(s2n_session_ticket_test): correct clock mocking (#4602)\n  > Fix: update default cert chain for unit tests (#4582)\n  > refactor(binding): more accurate naming for const str helper (#4601)\n  > fix: error rather than empty cipher suites (#4597)\n  > chore: update s2n_stuffer_printf CBMC harness (#4531)\n  > ci(nix): Fix integ pq test in a devShell (#4576)\n  > feature: new compatibility-focused security policy preferring ECDSA (#4579)\n  > compliance: update generate_report.sh to point to compliance directory (#4588)\n  > ci: fix cppcheck errors (#4589)\n  > chore: cleanup duplicate duvet citations (#4587)\n  > Merge pull request from GHSA-52xf-5p2m-9wrv\n  > chore(bindings): release 0.2.7 (#4580)\n  > fix: Validate received signature algorithm in EVP verify (#4574)\n  > refactor: add try_compile feature probe for RSA-PSS signing (#4569)\n  > feat: Configurable blinding (#4562)\n  > docs: document s2n_cert_auth_type behavior (#4454)\n  > fix: init implicit iv for serialization feature (#4572)\n  > [Nix] adjust pytest retrys (#4558)\n  > fix: cert verify test fix (#4545)\n  > fix: update default security policies (#4523)\n  > feat(bindings): Associate an application context with a Connection (#4563)\n  > chore(bindings): version bump (#4566)\n  > Additional test cases for s2n_constant_time_equals() (#4559)\n  > test: backwards compatibility test for the serialization feature (#4548)\n  > chore(bench): upgrade rustls (#4554)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Try to reduce package size\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Set operation_name when using MetaRequestType::Default\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Introduce S3Operation type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-07-10T15:44:46Z",
          "tree_id": "14139e717ee4461f49f9d6a774d0733ca0a54108",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3c6f8229227d224e8776062dc94470087465cce"
        },
        "date": 1720633154472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.66962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.90869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.505078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5225.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.746484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.89541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 71.08427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.97998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1216.38125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.17216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.26005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.70166015625,
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
          "id": "ad7ce808f01609777cb305babc43c730de68517f",
          "message": "Introduce `event_log` feature flag  (#936)\n\n* Run tests for the event_log feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove unused negative_cache feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-11T07:28:20Z",
          "tree_id": "c2fb4b27e3be74717c54444323158558e7805219",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad7ce808f01609777cb305babc43c730de68517f"
        },
        "date": 1720689943935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.79833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.72646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.578515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.05224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.97978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5341.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.47451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 76.48125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1700.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.2390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.06005859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1178.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1576.37763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.6224609375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1720689944397,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}