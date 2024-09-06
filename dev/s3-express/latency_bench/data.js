window.BENCHMARK_DATA = {
  "lastUpdate": 1725631003691,
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
          "distinct": false,
          "id": "073277047bb412d1f5cf98e4efa5668074dc7626",
          "message": "Replace custom ResultExt with stable Result::inspect_err (#951)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T15:33:09Z",
          "tree_id": "a8c23da91e712e5eb260fa8852cb987496d4abf7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/073277047bb412d1f5cf98e4efa5668074dc7626"
        },
        "date": 1722527962472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.847,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.3712959,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1249031,
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
          "id": "d3a070517e4551f99ecf697b33ca11cdde0c7d03",
          "message": "Fix warnings on tests (#966)\n\nA small change to fix \"unused imports\" warning messages when running\n`cargo test`.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T15:56:38Z",
          "tree_id": "fe3e304fbc55c326048316fedae40e281c3acbb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a070517e4551f99ecf697b33ca11cdde0c7d03"
        },
        "date": 1722529373783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.795,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.228,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.2559435,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.1585408,
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
          "id": "58edaafaaf065f5537202394580cf58c05017aa1",
          "message": "Update PR template to prompt thinking on change log entry (#968)\n\n* Add section on changelog updates to PR template\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add links to changelogs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-02T12:53:08Z",
          "tree_id": "49f0fb64e39106ed93d5b10ce74a726231703107",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58edaafaaf065f5537202394580cf58c05017aa1"
        },
        "date": 1722604777460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.806,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.547,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.845030099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.320464900000001,
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
          "id": "6e9eaa1e316ba486299d7d2f4d275a305126d3af",
          "message": "Consolidate test credential helpers into creds modules (#967)\n\n* Consolidate test creds helpers into creds modules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move creds functions depending on s3_tests feature into their own mod, re-export\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix fork_test\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-06T14:58:20Z",
          "tree_id": "0014a4d2266bdb08110539dc7a66e536127bf937",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e9eaa1e316ba486299d7d2f4d275a305126d3af"
        },
        "date": 1722957784034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.858,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.864,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8634846,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.5468277,
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
          "id": "6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa",
          "message": "Make s3 client able to report read window offset (#971)\n\n* Make s3 client able to report read window offset\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update CHANGELOG.md\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-07T10:20:11Z",
          "tree_id": "3aa7e908d6ee4a317253b881303ff3b970bd4d27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa"
        },
        "date": 1723027485749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.047,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.845,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.517,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.7173359,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.8699758,
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
          "id": "d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f",
          "message": "Update NoSigningCredentials error message, add troubleshooting entry (#975)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-07T12:23:15Z",
          "tree_id": "693c7ffef8137f8b9475cbf602ca3957f3a47edb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f"
        },
        "date": 1723035060015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.809,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.853,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.9442278,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9757411,
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
          "id": "09a18544164920ed521d7d3d0084d3ea730ad97e",
          "message": "Refactor object part stream (#972)\n\n* Refactor object part stream\n\nVarious refactorings, including a new config type for object part stream\ntask, introducing structs for part composers, consolidating error handling\nflow in request reader and part composer.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T08:47:46Z",
          "tree_id": "1ca44780f09320a623c3374d0be807b2449c09c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a18544164920ed521d7d3d0084d3ea730ad97e"
        },
        "date": 1723194766048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.862,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.284,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.4074032,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6457709,
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
          "id": "299f19ef4f684890ecac4a0bc9ce42f5930b734c",
          "message": "Add support for distributing requests over multiple NW interfaces behind feature flag (#943)\n\n* Add initial plumbing for multiple NIC support\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace comma-delimited network interfaces arg with bind arg\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-09T11:07:44Z",
          "tree_id": "23f251b355e25e8aed5e71f942b7b182f2496679",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/299f19ef4f684890ecac4a0bc9ce42f5930b734c"
        },
        "date": 1723203163707,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.813,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.812,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.301150300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.650982599999999,
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
          "id": "8869934ec5710e52fcd0a985e76edd7e542ba466",
          "message": "Allow running install-dependencies script as root (#978)\n\nCurrently, we always run privilege commands in the script with `sudo`.\nThis makes the script unusable if running as the root user, which we\nmight want to do in some environments such as in a container.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T11:43:46Z",
          "tree_id": "a5421e592260249f902e2bb81a4ae7d2c11d42d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8869934ec5710e52fcd0a985e76edd7e542ba466"
        },
        "date": 1723205410949,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.192,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.821,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.229,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.267743699999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.762459699999999,
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
          "id": "264d28e4bc8b96fcbdffd53dbb8a586d9433e932",
          "message": "Leverage async stream (#977)\n\n* Leverage async stream\n\nWhen reading data from `GetObject` request in `ObjectPartStream`, return\nthem as `Stream` instead of writing into a channel. This makes the flow\neasier to follow.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T17:19:04Z",
          "tree_id": "c9bbb1ff453bcd27521a7f2c6722d603d001768c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/264d28e4bc8b96fcbdffd53dbb8a586d9433e932"
        },
        "date": 1723225504024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.808,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.189,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.711576800000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.5577635,
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
          "id": "7f78cc4f43c6dd7ab3b785b1fb6b795f4c38053e",
          "message": "Re-implement the prefetcher using backpressure mechanism (#980)\n\n* Re-implement the prefetcher using backpressure mechanism\n\nThe prefetcher now uses only one GetObject request to fetch data in advance.\nThis request has a range of entire object but use backpressure mechanism\nto control how much data it wants to fetch into the part queue instead of\nspawning up to two requests in parallel.\n\nThis should make the throughput more stable because previously the two\nrequest tasks could compete with each other when fetching data from S3.\nAlso, it will be easier to control how much data we want to store in the\npart queue.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Fix an issue where EmptyReadWindow error could be reported when request is already completed\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-15T14:57:15Z",
          "tree_id": "b2952c57ddd4db150fb3e0328da8e7fb508abd8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f78cc4f43c6dd7ab3b785b1fb6b795f4c38053e"
        },
        "date": 1723735237062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.86,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.289,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.534765,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6010173,
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
          "id": "ba5cfc3f4a64aba02b7e39db3ea9bffa46cab0f9",
          "message": "Run benchmarks on schedule (#983)\n\n* Store bench results in S3\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n* Use different prefixes for standard and express\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-19T20:17:08Z",
          "tree_id": "be264d6c54816137ec4cb1256fec0b61a1552287",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba5cfc3f4a64aba02b7e39db3ea9bffa46cab0f9"
        },
        "date": 1724100217601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.826,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.398,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.512848400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.7693546,
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
          "distinct": false,
          "id": "13ab4d9332b611bd6f702e1c5462d13f97c467ef",
          "message": "Use separate bucket for bench results, run on PRs (#985)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-20T15:13:00Z",
          "tree_id": "70f577df0795fba77f6433164411c8df7cca7682",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13ab4d9332b611bd6f702e1c5462d13f97c467ef"
        },
        "date": 1724168309259,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.852,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.74,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.5890477,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.628587699999999,
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
          "distinct": false,
          "id": "2cb9c72e747097c32c0ed34a7d18ebabdf26871b",
          "message": "Start second request only if required (#984)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-22T12:53:50Z",
          "tree_id": "5ab8ff6340712fa17310471bb6a29568c70c3d13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2cb9c72e747097c32c0ed34a7d18ebabdf26871b"
        },
        "date": 1724332888586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.844,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.217,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.3376964,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.6896564,
            "unit": "milliseconds"
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
        "date": 1724947969618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.839,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.443,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.5926625,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8443868,
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
          "distinct": false,
          "id": "0f04ea4daa4f3fa68421c69b0179d09bae044d6c",
          "message": "Run bench once a day, no scheduled on forks, store commit id (#992)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-08-30T08:13:02Z",
          "tree_id": "d83d2ac7b9b97c9ba5464f64e51f334652136cee",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f04ea4daa4f3fa68421c69b0179d09bae044d6c"
        },
        "date": 1725041644913,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.865,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.752,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.919699099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.5183615,
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
          "id": "ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba",
          "message": "Update mountpoint-s3-crt-sys crate excludes to reduce package size (#989)\n\n* Update mountpoint-s3-crt-sys crate excludes to reduce package size\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert removal of aws-lc/ssl/\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-03T09:12:13Z",
          "tree_id": "f465761fd81eea74f40a2d4a6981df9722144b09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae4f909c8acfc3405ffb0be2f8f758ed25afe0ba"
        },
        "date": 1725356354793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.829,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.421,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.370473800000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.1293782,
            "unit": "milliseconds"
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
        "date": 1725471197779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.828,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.199,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.604203,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8463645,
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
          "id": "c27abd27bbfdb042572896f6e2df7eae1029fab5",
          "message": "Fix clippy warning in throughput_client.rs (#1001)\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-09-06T11:00:39Z",
          "tree_id": "e79f4d749e07088cdb0e67f11ecf2462f2363627",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c27abd27bbfdb042572896f6e2df7eae1029fab5"
        },
        "date": 1725621945978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.821,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.916,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6054499,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.795360800000001,
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
          "id": "5d1535012312a8830725047b35c40f7a6ebac5fb",
          "message": "Add support for concurrent downloads to client_benchmark example (#1000)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-06T13:19:40Z",
          "tree_id": "02fd47d39f8189a6b9154d07050e104b2a8b7fea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d1535012312a8830725047b35c40f7a6ebac5fb"
        },
        "date": 1725631003207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.836,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.528,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1869336,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.571363300000002,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}