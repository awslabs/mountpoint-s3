window.BENCHMARK_DATA = {
  "lastUpdate": 1719927229240,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "90ea28806378796bdf64c737df40ba9b82d5c6e3",
          "message": "Skip scheduled test runs outside of upstream repository (#903)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T09:41:01Z",
          "tree_id": "5266ed1cc2e4fd2d30da057cffafc1c690121c71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90ea28806378796bdf64c737df40ba9b82d5c6e3"
        },
        "date": 1718013921835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.909,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.573,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 40.6094344,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 41.530866200000006,
            "unit": "milliseconds"
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
          "id": "cbc8ec8d3886da07430f583d0121d028b5dfd020",
          "message": "Update integration test schedule from hourly to daily at 06:45Z (#905)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T10:40:02Z",
          "tree_id": "b0bc74cfd8abca7ffdd78752655c02d6a08a56d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cbc8ec8d3886da07430f583d0121d028b5dfd020"
        },
        "date": 1718017474909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.943,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.967,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 36.875891100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 36.6165347,
            "unit": "milliseconds"
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
          "id": "650269904f617f96879f7ee7d93f8bca4e5096e5",
          "message": "Support backpressure for GetObject request (#889)\n\n* Support backpressure for GetObject request\n\nThe CRT has flow-control window feature in the read path (https://github.com/awslabs/aws-c-s3/pull/213)\nto let users control how fast they want to download data. This change\nexposes the backpressure read mechanism in the `get_object` interface.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-11T15:27:54Z",
          "tree_id": "a75778e4c5aba8ae8bf944e5ad9887160f4855e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/650269904f617f96879f7ee7d93f8bca4e5096e5"
        },
        "date": 1718121171427,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.054,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.891,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.909,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 61.5183959,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.1523854,
            "unit": "milliseconds"
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
          "id": "19faf760f3de5dc631aa68594564d926e9a667d3",
          "message": "Restrict `--sse-kms-key-id` to Key ARN only (#908)\n\n* Restrict --sse-kms-key-id to Key ARN only\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix inexistent key test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove Key ID from the doc, fix tested log message\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix format\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-12T13:24:51Z",
          "tree_id": "db0b9700e1691e1efffbf8e6915a1dbb43350d8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19faf760f3de5dc631aa68594564d926e9a667d3"
        },
        "date": 1718200097572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.947,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.505,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 47.341919600000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.255117799999994,
            "unit": "milliseconds"
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
          "id": "e62951e87a9cc7f19ffe23f1637d531ca8ea8cab",
          "message": "Add additional logging around mount timeout failures (#910)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-13T10:12:48Z",
          "tree_id": "5eba9ca1b6f75e289e266b3c6c465e7ef91fa587",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e62951e87a9cc7f19ffe23f1637d531ca8ea8cab"
        },
        "date": 1718275034188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.895,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.469,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 35.9322793,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.9283745,
            "unit": "milliseconds"
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
          "id": "657cc787ae838c606525a87d3ff8e7b8926ad0ac",
          "message": "Fix clippy error (#911)\n\nClippy was reporting this error:\n```\nerror: this expression always evaluates to false\n  --> mountpoint-s3/src/build_info.rs:24:44\n   |\n24 |         const UNOFFICIAL_SUFFIX: &str = if COMMIT_HASH_STR.is_empty() {\n   |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#const_is_empty\n   = note: `-D clippy::const-is-empty` implied by `-D clippy::all`\n```\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-13T16:33:43Z",
          "tree_id": "cb55b11bca02b560660ce481e50e5c9cb830e645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/657cc787ae838c606525a87d3ff8e7b8926ad0ac"
        },
        "date": 1718297812662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.91,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.991,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 49.7604323,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.0120145,
            "unit": "milliseconds"
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718356693955,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.966,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.989,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 41.1432935,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.6527515,
            "unit": "milliseconds"
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
        "date": 1718368058308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.871,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.231,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 35.4712964,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.530159600000005,
            "unit": "milliseconds"
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
        "date": 1718641501593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.152,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.255,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 51.630346,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.7165734,
            "unit": "milliseconds"
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
        "date": 1718650659063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.025,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.485,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 40.850978399999995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 47.9042091,
            "unit": "milliseconds"
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
        "date": 1718652926281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.909,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.339,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 40.675825,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 34.5378615,
            "unit": "milliseconds"
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
        "date": 1718803286296,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.056,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.979,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.586,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 53.972973700000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.358086,
            "unit": "milliseconds"
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
        "date": 1719010949199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.055,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.929,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.698,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 47.7896599,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.5823775,
            "unit": "milliseconds"
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
        "date": 1719330404793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.979,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.073,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 49.692490899999996,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.2316745,
            "unit": "milliseconds"
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
        "date": 1719333558932,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.131,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.97,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.62,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 37.6305812,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 33.236203,
            "unit": "milliseconds"
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
        "date": 1719336103793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.052,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.15,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.897,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.363,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 34.3772967,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 39.1183131,
            "unit": "milliseconds"
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
        "date": 1719406387103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.051,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.945,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.43,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 41.0015589,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.382931299999996,
            "unit": "milliseconds"
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
        "date": 1719419953481,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.059,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.886,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.209,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 71.2327254,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.393449700000005,
            "unit": "milliseconds"
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
        "date": 1719827171689,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.852,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.147,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 49.6469161,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 49.2927267,
            "unit": "milliseconds"
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
        "date": 1719927228767,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.872,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.718,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 61.6195249,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 41.2293823,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}