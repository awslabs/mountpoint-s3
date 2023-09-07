window.BENCHMARK_DATA = {
  "lastUpdate": 1694108056081,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
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
          "id": "d74c745b7ce39ab3c8ad927020913db5591c190f",
          "message": "Improve benchmark script (#458)\n\n* Run throughput benchmark multiple times\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update name for sequential write direct io job\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update benchmark doc\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update config for write benchmarks\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-16T15:13:01Z",
          "tree_id": "188ba2852a6664ec3977edf3c91a45c355099486",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d74c745b7ce39ab3c8ad927020913db5591c190f"
        },
        "date": 1692200844963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.717,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.928175,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 104.23079209999999,
            "unit": "milliseconds"
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
          "id": "578f47fce24e041017f1809d39a3e66d83b40831",
          "message": "Stub out unimplemented FUSE operations (#460)\n\nRight now if you try to do something that's totally unsupported, like\nrename, there won't be a log entry unless you're debug logging, and even\nthen it will only be a fuser log entry rather than something more\nspecific to Mountpoint. This makes it hard for customers to know what's\nhappening when an operation fails, and hard for us to debug with them.\nSo let's stub out all the FUSE methods we haven't implemented in a way\nthat will log the failure as a warning, like our other \"unsupported\"\nsemantics.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-17T10:31:23Z",
          "tree_id": "804a0f8836a5fc9df485e3ef334393fed6ca31e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/578f47fce24e041017f1809d39a3e66d83b40831"
        },
        "date": 1692270527795,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.197,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.071,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.46591790000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.950397,
            "unit": "milliseconds"
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
          "id": "dd61aeb8e79196be356bfbbb18243ec3af856e9a",
          "message": "Add new metrics for IO, handles, throughput (#461)\n\nThis change adds a bunch of new metrics for investigating performance.\nIt lets us track per-IO read/write size, number of open read/write\nhandles, directory listing throughput, and meta request throughput for\nuploads and downloads.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-18T09:21:41Z",
          "tree_id": "34af4508ea0888d5b5563f36facb2afe2875ae24",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd61aeb8e79196be356bfbbb18243ec3af856e9a"
        },
        "date": 1692558498502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.2220439,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 100.5611664,
            "unit": "milliseconds"
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
          "id": "5556377c39ed69921a3977a5cb4ba3afa327925a",
          "message": "Small docs fixes (#464)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-21T10:54:39Z",
          "tree_id": "edd53bf1caf9ae1427c80e01dc185f77245c4f54",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5556377c39ed69921a3977a5cb4ba3afa327925a"
        },
        "date": 1692617443180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.462,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.4151954,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.70144379999999,
            "unit": "milliseconds"
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
          "id": "b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601",
          "message": "Bump AWS SDKs to latest version (#476)\n\nThis removes webpki from our dependencies to fix this: https://rustsec.org/advisories/RUSTSEC-2023-0052\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-23T21:28:50Z",
          "tree_id": "d2a7a159ef1bbf9e5ea3f5e7cf4e672fe26c30d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b9f7e913fb2e0ddf5beff1f1f3121b4ca1a20601"
        },
        "date": 1692827847116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.693,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.80853570000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.5830357,
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
          "id": "6103a2f3ca90a603bec34d4d064099b13ce3bfe6",
          "message": "Make allow_other and allow_root mutually exclusive (#475)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-08-24T10:59:17Z",
          "tree_id": "f19be32f858092c7ab03020a1f813ecaa9e33988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6103a2f3ca90a603bec34d4d064099b13ce3bfe6"
        },
        "date": 1692877156724,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.621,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.6507243,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.27618059999999,
            "unit": "milliseconds"
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
          "id": "c7464d043a0792a164aa6ecbb189974b2e2dfeeb",
          "message": "Fixes for Rust 1.72 (#479)\n\n* Fixes for Rust 1.72\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix tracing\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-25T15:38:27Z",
          "tree_id": "0ff6bd84f859a7b1fff3f2e95a32a004d6b80a45",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7464d043a0792a164aa6ecbb189974b2e2dfeeb"
        },
        "date": 1692980275812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.888,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 103.8612371,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.0403998,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmar.suhail@gmail.com",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7e12ec872d2b51f77f7fc2b9b11b4cba0305f56",
          "message": "Updates encryption documentation for SSE-KMS, DSSE-KMS (#480)\n\n* improves encryption documentation\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\n\r\n* Update doc/CONFIGURATION.md\r\n\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\r\nSigned-off-by: ahmarsuhail <ahmar.suhail@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nSigned-off-by: ahmarsuhail <ahmar.suhail@gmail.com>\r\nCo-authored-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\r\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-08-25T13:05:48-05:00",
          "tree_id": "8bdb885b6bf0211e6c94ce228ab1b96881a632b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7e12ec872d2b51f77f7fc2b9b11b4cba0305f56"
        },
        "date": 1692987391644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.54,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 97.5525328,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.968853,
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
          "distinct": true,
          "id": "f10dc5b34edeed6d9640911054bef1366751f11e",
          "message": "Bump aws-actions/configure-aws-credentials from 2 to 3 (#484)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 2 to 3.\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v2...v3)\n\n---\nupdated-dependencies:\n- dependency-name: aws-actions/configure-aws-credentials\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-08-28T17:31:03Z",
          "tree_id": "e4ee11c1b6513cb4048abdcf47c05c785f3af657",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f10dc5b34edeed6d9640911054bef1366751f11e"
        },
        "date": 1693246290233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.809,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.8370987,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.1544018,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "67096+lesserwhirls@users.noreply.github.com",
            "name": "Sean Arms",
            "username": "lesserwhirls"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09f556edf6ed4233ff6c419dbf9331ac082c11d5",
          "message": "Support building with Clang 16 (#486)\n\nIn order to build with Clang 16, the bindgen dependency needs to be\nupgraded to at least version 0.62.0 (this change bumps to the latest,\nwhich is 0.66.1). See awslabs/mountpoint-s3#485\n\nSigned-off-by: Sean Arms <67096+lesserwhirls@users.noreply.github.com>",
          "timestamp": "2023-08-28T18:06:18Z",
          "tree_id": "6bcf53c04dad3ed4eb2a512919978aee74deda1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09f556edf6ed4233ff6c419dbf9331ac082c11d5"
        },
        "date": 1693248083489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.193,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.185,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.3870611,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.508068200000004,
            "unit": "milliseconds"
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
          "id": "73a27c1d494e07354cab0d4b06a3a4499f6d466d",
          "message": "Small fixes for S3 on Outposts (#470)\n\nThis fixes two issues that were preventing Mountpoint from working\nagainst Outposts buckets:\n1. Outposts doesn't include the bucket name in ListObjectsV2 responses.\n   We weren't actually using that output anyway, so I just removed it.\n2. For GetObject requests, we were sending a HTTP header like\n   `Accept: application/xml,*/*`. While technically valid HTTP, it's\n   weird to accept */* as well as something else, and it was confusing\n   Outposts' request signing. So I switched to overwriting the existing\n   header, which is what the comment suggested the code was intended to\n   do anyway.\n\nI also took this chance to make a little cleanup to parsing\nListObjectsV2 responses: the `parse` functions shouldn't be defined on\nthe generic `ListObjectsResult` structs, which are shared by all\nclients.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-30T16:35:40Z",
          "tree_id": "444bdf0455dc0f3ab4c24c722bed5db5e1733938",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73a27c1d494e07354cab0d4b06a3a4499f6d466d"
        },
        "date": 1693415889919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.843,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.2288027,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.819065,
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
          "id": "5626e204259e6a8141d798dbc0837ce3e3e3c3c3",
          "message": "Allow reading restored GFR/GDA objects (#434) (#467)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2023-08-30T22:33:46Z",
          "tree_id": "b6e1559cd71f934917f8e13028b3f7ddb68ef46a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5626e204259e6a8141d798dbc0837ce3e3e3c3c3"
        },
        "date": 1693437064719,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.271,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.112,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.574,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.7493373,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.6989397,
            "unit": "milliseconds"
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
          "id": "5e8d834c2df2269d2f8670f38bc3c764d10a90f7",
          "message": "Close input/output handles when running in background (#489)\n\nWhen we run in background mode, the child process inherits the\nstdin/stdout/stderr of the parent. That's good because we can print\nmount errors from the child and have them reach the parent. But once\nwe're mounted and the parent exits, the child still holds onto those\nhandles. This is bad if those handles are pipes, which are often used\nwhen trying to launch a daemon (e.g. Python subprocess.check_output). In\nthat case, the pipes will never close and the caller will keep waiting\nfor output on them forever.\n\nWe need to close these handles once we're successfully daemonized. This\nwill prevent us from seeing anything the process prints after they're\nclosed, but from that point we should be logging anyway, so shouldn't be\nprinting. Printing still works (doesn't panic or anything), just doesn't\ngo anywhere.\n\nWith this change, a Python script like\n\n    import subprocess\n    subprocess.check_output(['mount-s3', 'doc-example-bucket', '/bucket'])\n\nworks correctly: once the mount has succeeded, it returns. Without this\nchange, this program blocks until the bucket is unmounted.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-08-31T12:42:20Z",
          "tree_id": "4b2c3032f1df614a94637e0d1e1aa4b45ca30025",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e8d834c2df2269d2f8670f38bc3c764d10a90f7"
        },
        "date": 1693487974539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.879,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.2566887,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.2557248,
            "unit": "milliseconds"
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
          "id": "7643a22ac362e6ace91b2a266f4cc91b7e6570bc",
          "message": "Bump version of Mountpoint to v1.0.1 (#494)\n\n* Bump version of Mountpoint to v1.0.1\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added latest PRs to CHANGELOG.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added description of changes in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added PR in the changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T09:11:10Z",
          "tree_id": "eace6e6893afca2d09c22b628c500710f6a04933",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7643a22ac362e6ace91b2a266f4cc91b7e6570bc"
        },
        "date": 1693561670598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.667,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.9257521,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.0004244,
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
          "distinct": false,
          "id": "cc7f31e0f7db834b907ad84760c945c97f675f57",
          "message": "Update documentation for live editing use case (#491)\n\n* Make it clear that live editing is not a good fit for mountpoint\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update README.md\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2023-09-01T14:27:57Z",
          "tree_id": "83b64928c20eeb775938d8a370c161616c10a3f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc7f31e0f7db834b907ad84760c945c97f675f57"
        },
        "date": 1693580669985,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.633,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.44031659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 96.3176158,
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
          "id": "efb334dc6dbb1c72f21be20d26377ccf79989166",
          "message": "Change release title in the workflow (#496)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-01T14:28:08Z",
          "tree_id": "62869c00cee5eb34bd3ed0e8acf104e409bde630",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/efb334dc6dbb1c72f21be20d26377ccf79989166"
        },
        "date": 1693580684165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.123,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.754,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 57.065677,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.18084990000001,
            "unit": "milliseconds"
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
          "id": "534c3ed7f53289587b9aa47778a7ffa76109f81e",
          "message": "Added Unreleased section in changelog (#497)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-01T15:57:58Z",
          "tree_id": "7fb39eccb7cba98135a54cd7b5f5f4eeeb3dfd9f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534c3ed7f53289587b9aa47778a7ffa76109f81e"
        },
        "date": 1693585713065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.808,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.1876625,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.2393769,
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
          "id": "b632bbe9645f1f6af26ed839e791b8a34ab74b36",
          "message": "Use default thread config for benchmark (#504)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-06T13:14:32Z",
          "tree_id": "9c286583dea66a5ed85a09f85bd51c4bc1938e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b632bbe9645f1f6af26ed839e791b8a34ab74b36"
        },
        "date": 1694008263721,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.588,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.1583657,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.906332,
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
          "distinct": false,
          "id": "4db11adabc77c365d052ad99b4d64fd19b7e73bb",
          "message": "Cancel unused in-flight prefetch tasks (#505)\n\nPreviously, mountpoint-s3 would not cancel prefetch tasks that it was going to ignore.\nInstead, they would continue to be polled by the executor despite the results never being checked.\nThis change ensures that the task handles are dropped which cancels the task/future.\n\nIn the future, we may want to retain some of these tasks where the prefetcher may still be able to make use of them.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-06T16:52:01Z",
          "tree_id": "a0e86d27049a74a659b94beb839ff541891b1e61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4db11adabc77c365d052ad99b4d64fd19b7e73bb"
        },
        "date": 1694021415915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.207,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.24,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.4224647,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.5045155,
            "unit": "milliseconds"
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
          "id": "57d1bd6e525131ab58cd6a449e735aa04d9a06c3",
          "message": "Added accesspoint variables in integration.yml (#508)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-07T16:56:58Z",
          "tree_id": "9d5fa6f294a3f3fe2d3b77943c85db1ed244f855",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57d1bd6e525131ab58cd6a449e735aa04d9a06c3"
        },
        "date": 1694108055549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.934,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.797243,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.8760978,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}