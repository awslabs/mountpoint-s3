window.BENCHMARK_DATA = {
  "lastUpdate": 1707238085792,
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
          "distinct": true,
          "id": "93394c8f666453cf04e6824b5a81d1f0d80a1010",
          "message": "Set CI parameters for sse-kms tests (#698)\n\n* Set CI parameters for sse-kms tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-12T19:50:48Z",
          "tree_id": "3b01bef31d62b3da3bc425dd9744fbd5ae5d2371",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93394c8f666453cf04e6824b5a81d1f0d80a1010"
        },
        "date": 1705091162406,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.37,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6404995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.9921057,
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
          "id": "0030b0a527638a76b29fe387cfa6ae22b0ad1c92",
          "message": "Allow file overwrites (#487)\n\n* Allow file overwrites\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't start upload on flush\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-16T14:55:52Z",
          "tree_id": "0865cc916897ae4f9942feefa9a3fc25034a6821",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0030b0a527638a76b29fe387cfa6ae22b0ad1c92"
        },
        "date": 1705419379564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.101,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.645,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.7557786,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.4005801,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jchorl@users.noreply.github.com",
            "name": "Josh Chorlton",
            "username": "jchorl"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "804b8d0cda2a817cd883f0cb5f73dfc49a84b66c",
          "message": "update network performance autotune values (#702)\n\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>",
          "timestamp": "2024-01-17T15:18:40Z",
          "tree_id": "eb067b4ad5ff41c941729f74530bbb1f9b0a2693",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/804b8d0cda2a817cd883f0cb5f73dfc49a84b66c"
        },
        "date": 1705506699111,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.415,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.46105659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.32473859999999,
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
          "distinct": false,
          "id": "924b86c33ec80ea3fc63ec60bd0f20a38a598e1e",
          "message": "Improve error logs for unsupported operations: File Overwrite, Random Write, Directory Shadowing, Unlink (without mount option) (#699)\n\n* Improved error logs for unsupported operations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved Invalid Inode Status error message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reformatted the entry if match\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Combined the match for next and last entry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed extra line from warn message\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-17T17:13:39Z",
          "tree_id": "bf86c2cbdcc53932b54134e16b045fe6542e0425",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/924b86c33ec80ea3fc63ec60bd0f20a38a598e1e"
        },
        "date": 1705513533536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.36,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.0368546,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.5170688,
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
          "id": "7ecbfa82eab871f75d8646a9b53fea574fa818ef",
          "message": "Unmount at end of fork tests (#705)\n\n* Unmount at end of fork tests\n\n`Command::spawn` returns a `Child`, but dropping a `Child` doesn't\nshut down the process, so we leak all these mounts every time the fork\ntests run. That's annoying when you run them a lot, so this change adds\nunmount calls to all the tests that should succeed.\n\nI also took this chance to clean up the test code a little by factoring\nout the \"wait in a loop\" logic.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update h2 dependency for https://rustsec.org/advisories/RUSTSEC-2024-0003\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix non-Express tests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-18T11:04:23Z",
          "tree_id": "60399de66d27661224c6316741e69d0e866fb7a0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7ecbfa82eab871f75d8646a9b53fea574fa818ef"
        },
        "date": 1705578103746,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.279,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.1363995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.030251899999996,
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
          "id": "06aca78b7fc094ec5b58757c2c7d0b7e608550a9",
          "message": "Release new crate versions (#700)\n\n* Release new crate versions\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update release dates for Jan 18th\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies, bump minor version on CRT anyway\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad dependencies (again)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-18T14:20:03Z",
          "tree_id": "cf6603f206cdf1fcdffcb190e7d22869c378c406",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06aca78b7fc094ec5b58757c2c7d0b7e608550a9"
        },
        "date": 1705589888179,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.73,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.4465922,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.1745109,
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
          "id": "f5de97e534a7f798a0cf6c347b66c4d85e20d535",
          "message": "Bump version of shlex (#709)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T10:56:53Z",
          "tree_id": "80f6f626b899f0fe2781d990b8d64a654c9828fb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5de97e534a7f798a0cf6c347b66c4d85e20d535"
        },
        "date": 1705923226754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.199,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.172,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.0816613,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.56857070000001,
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
          "id": "ae0f475fce0d62e52632a69c2ad83046dd0e24f8",
          "message": "Support configuring SSE-KMS in S3CrtClient (#693)\n\n* Support configuring SSE-KMS (#534)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix some of the CI jobs\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Don't do headers check when request failed, fix test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Hide sse settings behind a feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add tests for error cases\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make the headers check to panic on failure\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Do not run sse tests for express buckets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move out cli changes to a separate PR\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add extraction methods to ServerSideEncryption enum, fix documentation and formatting\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Make check_response_headers to check specifically for SSE settings\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Decompose SSE settings provided for S3PutObjectRequest\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove SSE enum, replace test for check_headers with a unit test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor check_response_headers call\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Improve comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-01-22T16:47:37Z",
          "tree_id": "f115424f29f97d63c252bf82e54579125fdc214b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ae0f475fce0d62e52632a69c2ad83046dd0e24f8"
        },
        "date": 1705944086757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 88.8775287,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.405139,
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
          "id": "c7c64d62b7f00b5a2ece847c65a70b4890788e9f",
          "message": "Bump CRT dependencies (#713)\n\nThis picks up two bug fixes:\n1. In aws-c-auth to fix FULL_URI container credentials that don't have a\n   path component: https://github.com/awslabs/aws-c-auth/pull/225\n2. In aws-c-s3 to fix thread pinning on NUMA hosts with cgroup\n   restrictions applied: https://github.com/awslabs/aws-c-s3/pull/403\n\nSince there's no breaking changes and only a patch version bump, we\ndon't need to do a release of `mountpoint-s3-client`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-01-25T09:58:49Z",
          "tree_id": "b19492edf2c56b5b8eb350d71419e1f77106d53e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c7c64d62b7f00b5a2ece847c65a70b4890788e9f"
        },
        "date": 1706179058649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.254,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.6816762,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.8081673,
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
          "id": "85c98faafb443911444658d0d88e3db0640e22f2",
          "message": "Fix decrement of file handle gauge for RW handles that file on existing files (#716)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-01-25T20:17:31Z",
          "tree_id": "dc1e57b5925061eacd622f1e2c4de911cf9a820c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85c98faafb443911444658d0d88e3db0640e22f2"
        },
        "date": 1706215828565,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.557,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.840007,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.64379559999999,
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
          "id": "25aff50f7cae9995f713b655fc4ac6070f81a26d",
          "message": "Fix a race condition on create and forget operations (#711)\n\n* Fix a race condition on create and forget operations\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Don't panic when cannot remove inode from superblock\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T13:50:42Z",
          "tree_id": "a247585261c3babe8f0347b07f69a1527bf7133b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/25aff50f7cae9995f713b655fc4ac6070f81a26d"
        },
        "date": 1706279293634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.483,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.59858290000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.8019193,
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
          "id": "e52d68ede985ecdb31f68e8db2beef29b528c8b1",
          "message": "Release v1.4.0 (#720)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-01-26T14:45:15Z",
          "tree_id": "d6f3b9957ad512f0a000281dd2e81484202f96cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e52d68ede985ecdb31f68e8db2beef29b528c8b1"
        },
        "date": 1706282689478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.143,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.902982,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.8665123,
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
          "id": "92aec0a0132aaf8d20093943cb40269bb57ffb2f",
          "message": "Reduce error noise in logging for lookup and throughput configuration (#718)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-01-31T14:26:06Z",
          "tree_id": "9bc33a9a28479cd7d8967c8f0b0df2ebe0e05e16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/92aec0a0132aaf8d20093943cb40269bb57ffb2f"
        },
        "date": 1706713591461,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.123,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.2959824,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.8350994,
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
          "id": "36e8b6481bb0f7aeb4498792fbb88a55e953752f",
          "message": "Adjust auth tests to fix S3 Express test failures (#726)\n\n* Adjust auth tests to fix S3 Express test failures\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Loop on unmount to give async requests time to finish\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T11:17:33Z",
          "tree_id": "cb197c3d8c2e71bfc59f01f0f0d785f1bb09599b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/36e8b6481bb0f7aeb4498792fbb88a55e953752f"
        },
        "date": 1706874916119,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.151,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.57914670000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.1037295,
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
          "id": "203b36c98064c165f8bd21b0088a4cbee919beca",
          "message": "Add troubleshooting page for unsupported operations in Mountpoint (#703)\n\n* Added a troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the format of troubleshooting page from table to paragraphs, added its link to bug-report template\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed formatting of yml file\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the formatting and made recommended changes introubleshooting document\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the version that this doc is true to and also added unreleased improved section\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Modified the error message so that it is more readable for user in trouble shooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the link to troubleshooting page in bug report page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected sentence syntax\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* added the troubleshooting page link at top of bug template and other minor formatting changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* made the recommended nit changes about language and also theme of the troubleshooting page\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Add both overwrite errors depending on version\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added troubleshooting page for unsupported operations in Mountpoint\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Minor documentation wording changes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move bug report form heading to 'label' rather than markdown heading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad copy/paste in writing to an existing file\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-02T15:24:39Z",
          "tree_id": "d0071e5375ed0d7088538e98882638b9b7d72719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/203b36c98064c165f8bd21b0088a4cbee919beca"
        },
        "date": 1706889586412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.033,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.903874,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.7274665,
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
          "id": "e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103",
          "message": "Refactor main.rs into a new module generic in its client (#724)\n\n* Move entire main.rs into cli.rs\n\nThis is the smallest change to make things still compile. Refactoring\ncomes in the next commit.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Refactor to make `main` generic in the client\n\nThis will let us run the whole mount-s3 binary with different client\nimplementations\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T15:50:56Z",
          "tree_id": "7a5be2816f6eb6d72994843b5fd5ed4d7106e056",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e4bdd1ce65cd3ab6689f5f6cc5dc051a21c31103"
        },
        "date": 1706891046312,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.207,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.79563259999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.9689521,
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
          "id": "6dc1351f09f5c54b7d6b588b05a4edf551529431",
          "message": "Add a new mock client that simulates GET throughput (#723)\n\n* Add a new mock client that simulates GET throughput\n\nFor performance testing and microbenchmarking, we'd like to be able to\nseparate the S3 service and the CRT datapath from our own client and\nfile system. This mock client can simulate a target network throughput\nby rate-limiting the `get_object` stream. The goal is to be able to use\nthis client in place of a regular `S3CrtClient` when we want to isolate\nperformance questions.\n\nAlong the way, I realized we're including the mock client in our release\nbuilds, because it's an always-on feature of the client crate. This\nchange therefore also does a little dependency refactoring to remove the\nmock and failure clients from the non-test dependency closure. I checked\nthis works by seeing that the release binary is a few MBs smaller, and\nthat `strings mount-s3 | grep mock` no longer includes the mock client's\nsymbols.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adopt mock client as an option in client benchmark\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Dependency fixes\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-02T16:21:43Z",
          "tree_id": "9038a8e01eacaa9abd826e342738312bb816af74",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dc1351f09f5c54b7d6b588b05a4edf551529431"
        },
        "date": 1706894084103,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.519,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.5146786,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.670777799999996,
            "unit": "milliseconds"
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
        "date": 1706898141564,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.153,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.549,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.7995803,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.0287728,
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
          "id": "4eba52d3f0102e997c985ff32e7c8f3238d58fc2",
          "message": "Update and prune some dependencies (#731)\n\n* Update dependencies to remove some duplicate versions\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Sort cargo dependencies (no actual changes)\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Remove fs2 dependency\n\nIt's old and unmaintained, and nix has a statvfs implementation. The only trick\nis that nix makes us do the block-size calculation ourselves, but since we only\ncare about the ratio of free blocks, we actually don't need the block size at all.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n* Cleanup some default dependency features\n\nA few features we either weren't using at all, or were only using in tests\nand so can remove from the release build.\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>\n\n---------\n\nSigned-off-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2024-02-05T19:42:05Z",
          "tree_id": "3928861a29bac604618365e66bee358c2fd7daf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4eba52d3f0102e997c985ff32e7c8f3238d58fc2"
        },
        "date": 1707164521824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 12.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 121.0062475,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 89.2941498,
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
          "id": "05f6cc31581ae02180701675db8e6eda2326a7f2",
          "message": "Use stable Rust for address sanitizer (#734)\n\n* Use stable Rust for address sanitizer\r\n\r\nNightly is broken today, which blocks our CI. This is the third or\r\nfourth time this has happened to us, so let's switch over to using the\r\nRUSTC_BOOTSTRAP hack to use nightly features on stable Rust. This is\r\nscoped only to the ASan makefile target, so it won't actually allow us\r\nto use nightly features in our code, just when running the sanitizers.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Install stable Rust\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-06T10:36:45-06:00",
          "tree_id": "6c34edea9d35c57e1fbabe7ad55f4539bde0acae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f6cc31581ae02180701675db8e6eda2326a7f2"
        },
        "date": 1707238085293,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.133,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.187,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.2082804,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.4997249,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}