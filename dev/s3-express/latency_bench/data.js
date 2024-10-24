window.BENCHMARK_DATA = {
  "lastUpdate": 1729758361649,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
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
          "id": "5abbce51cb47b4db9176992308cf037c2729e7be",
          "message": "Tidy up the fs module (#1051)\n\n* Refactor fs into submodules\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Reorder types in fs module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-07T08:47:24Z",
          "tree_id": "60b95595d6b1f9df7d227e1a603d4eddc3be50b5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5abbce51cb47b4db9176992308cf037c2729e7be"
        },
        "date": 1728292462767,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.888,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.273,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.9118034,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9345274,
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
          "id": "548c0deab18b9d1795d39fa51ad4484847497fd1",
          "message": "Add tests for fstat during writing covering breaking cases (#1044)\n\n* Add tests for fstat during writing covering breaking cases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-08T16:07:09Z",
          "tree_id": "53ff847bf2d3f4816394751d41b74907d0622fb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/548c0deab18b9d1795d39fa51ad4484847497fd1"
        },
        "date": 1728405047682,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.192,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.858,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.245,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.1264611,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.1939394,
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
          "id": "0415b5c9e9e0be906ce17446834f2aadc2655b79",
          "message": "Update documentation related to the prefetcher (#1049)\n\n* Update documentation related to the prefetcher\n\nUpdate changelog to include changes in the prefetcher and document the\nunstable configuration to set maximum prefetch window size.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Change wording\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Apply PR suggestion\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-10-10T17:28:26Z",
          "tree_id": "958c3f335cc3f766fe9bcb55350473a7d9b75f1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0415b5c9e9e0be906ce17446834f2aadc2655b79"
        },
        "date": 1728582912759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.044,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.893,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.3650995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1343636,
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
          "id": "9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb",
          "message": "Add support for single PutObject in mountpoint-s3-client (#1046)\n\n* Reintroduce the CRT InputStream as an option for the Message body\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address PR feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up comments and tests on InputStream\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments to PutObjectTrailingChecksums and S3Operation\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce separate params type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-11T21:40:18Z",
          "tree_id": "36ba1fef659d9a9b638854ce10fc9e95e08ab5f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ea9c7ed421b4fa0878b9f680da5d2b5b96c77eb"
        },
        "date": 1728684381437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.929,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.145,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.0130605,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.5953106,
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
          "id": "534918e96337dee222b158df9d4bd92a05d791b9",
          "message": "Add a type-safe wrapper for open flags (#1054)\n\n* Introduce OpenFlags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Tidy up\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix linux build\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Support attributes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore example code\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Address access mode flags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-14T17:21:36Z",
          "tree_id": "0056110fae025f51fe2b596bbd0cb666f13cc696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/534918e96337dee222b158df9d4bd92a05d791b9"
        },
        "date": 1728927915892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.044,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.856,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.896,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1310635,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.227704300000001,
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
          "id": "5954f539c9e07e565ee1519e6f73e64dc42eea77",
          "message": "Add support for custom headers in PUT requests (#1059)\n\n* Add custom headers to put_object_single\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add custom headers to put_object\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T10:20:36Z",
          "tree_id": "ae843188149e0b169bf57b86b7767b5098459a8a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5954f539c9e07e565ee1519e6f73e64dc42eea77"
        },
        "date": 1728989233307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.89,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.652,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.037275900000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.628736400000001,
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
          "id": "2b0161600400c7ab7ccb1d6811abb9774facef5d",
          "message": "Release v1.10.0 (#1060)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-15T13:16:36Z",
          "tree_id": "f50831bf5cefbec38e30e8b5ffabe04b56bc2e30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2b0161600400c7ab7ccb1d6811abb9774facef5d"
        },
        "date": 1728999747818,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.887,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.634,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.424448199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.148165,
            "unit": "milliseconds"
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
          "id": "6acbd206f246d2f89c68711951c9ecd1b70e0c16",
          "message": "Update benchmark CI configuration (#1063)\n\n* Update benchmark CI configuration\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Enable comments for throughput benchmarks\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-15T14:45:19Z",
          "tree_id": "7d169ae610d77b9a2e68103920abb7b5ea8754e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6acbd206f246d2f89c68711951c9ecd1b70e0c16"
        },
        "date": 1729005139971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.872,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.225,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.132617,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8951231,
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
          "id": "e98a5c2271e2370e2380e25b055ff4f437e923df",
          "message": "Return the new object ETag in PutObjectResult (#1057)\n\n* Return the ETag in PutObjectResult\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of response headers\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Move ETag to a separate module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-15T15:53:03Z",
          "tree_id": "e4cc93f8fa298728674031afda3192564852e862",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e98a5c2271e2370e2380e25b055ff4f437e923df"
        },
        "date": 1729009133841,
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
            "value": 0.879,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.025,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.796015,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.760734699999999,
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
          "distinct": true,
          "id": "6a8a483ad5e54cf321fe62d10925189daec18075",
          "message": "Add support for writing object metadata with PutObject (#1062)\n\n* Add support for writing object metadata with PutObject\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Make changes from code review\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n* Fix merge conflicts\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-16T09:59:04Z",
          "tree_id": "dc8021087652f81bb6bf3697c52ab6794d647fd7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a8a483ad5e54cf321fe62d10925189daec18075"
        },
        "date": 1729074281774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.045,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.857,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.766,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8772914,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.528931199999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e411e02a42a6931ed701bf0582cde7c5a09752a4",
          "message": "Update CRT submodules to latest releases (#1061)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated mountpoint-s3-client changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T15:21:34Z",
          "tree_id": "b26b63c19e5ae32eaf2c058aac881197197f11d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e411e02a42a6931ed701bf0582cde7c5a09752a4"
        },
        "date": 1729093711112,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.869,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.203,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.810915,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.8440362,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "rajdchak@amazon.co.uk",
            "name": "rajdchak",
            "username": "rajdchak"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "de6c1bc20781b947595f97f6f076dee5c29f13b2",
          "message": "Copy object operation (#1052)\n\n* Copy operation\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Rebased from main\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressed some comments\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Addressing commentds\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n* Updated changelog comment\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>\n\n---------\n\nSigned-off-by: rajdchak <rajdchak@amazon.co.uk>",
          "timestamp": "2024-10-16T16:05:39Z",
          "tree_id": "c99cda568f5b8457f46bf6ff36f713fe7d6bafd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6c1bc20781b947595f97f6f076dee5c29f13b2"
        },
        "date": 1729096170391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.9,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.708,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.7677393,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.403117400000001,
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
          "id": "d1b662b7692e60b46e63a74ec1e63acc158a892e",
          "message": "Add entries for new PUT features to the client changelog  (#1067)\n\n* Add entries for new PUT features to the client changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove subsection\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-16T16:37:38Z",
          "tree_id": "3d13d596b3210b5047dbcc049b87ca1a6a07ead5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1b662b7692e60b46e63a74ec1e63acc158a892e"
        },
        "date": 1729098189114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.899,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.63,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.7229918,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.6698301,
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
          "id": "587df3b1988441acf3cf86983aa096f7b50d151f",
          "message": "Update CRT submodules to latest releases (#1069)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update non-existent network interface initialization test\n\nCRT was returning error during first operation before if it provided\nwith a non-existent network interface name. But with\nhttps://github.com/awslabs/aws-c-s3/pull/456, it started failing\nduring the client creation phase. Our tests were written for the\nprevious behaviour and was expecting client creation to succeed even\nwith an invalid network interface. The test is updated to expect\nerrors during client creation.\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG\n\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Burak <unexge@gmail.com>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak <unexge@gmail.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-10-17T14:16:47Z",
          "tree_id": "094a67417e5b700769c6dbc2b2b1f4f90ffe5b7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/587df3b1988441acf3cf86983aa096f7b50d151f"
        },
        "date": 1729176178170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.893,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.243,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.347072,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.764148,
            "unit": "milliseconds"
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
          "id": "7d43629e78ec3a3709a0d4bebae74cac66440fe6",
          "message": "Release new crate versions (#1070)\n\n* Release new crate versions\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for `mountpoint-s3-crt`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-17T15:47:19Z",
          "tree_id": "7ddd775a9582cfb8d0ffa3271cdedb2325ffaf43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d43629e78ec3a3709a0d4bebae74cac66440fe6"
        },
        "date": 1729181557400,
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
            "value": 0.839,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.128,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.3825072,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.073775,
            "unit": "milliseconds"
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
          "id": "39c58a112576e5c31863291f322fc43ab5689baa",
          "message": "Pin Rust to 1.81.0 (#1073)\n\n* Pin Rust to 1.81.0\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Revert GitHub action changes\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Use `actions-rust-lang/setup-rust-toolchain@v1` to install Rust\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Disable default RUSTFLAGS\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Add `rust-src` to components in `rust-toolchain.toml`\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-10-22T12:27:14Z",
          "tree_id": "ac6d416b1111ddc104d31ca905fe71e47aa9047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/39c58a112576e5c31863291f322fc43ab5689baa"
        },
        "date": 1729601572080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.878,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.165,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1082049,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.4847,
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
          "id": "6d3488b7a5b9802fba3d16949f6471aa29f6996a",
          "message": "Suggest a workaround to random write errors in our troubleshooting guide (#1074)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-10-23T09:04:13Z",
          "tree_id": "981b50223c175f374d6dfa03af2e9c601b126c59",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d3488b7a5b9802fba3d16949f6471aa29f6996a"
        },
        "date": 1729675625776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.045,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.907,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.251,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.1300037,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.4448415,
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
          "id": "286d348bd80e6d99dbad404e8bf193e765b0617b",
          "message": "Add failure hook for put_object_single (#1077)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-10-23T09:52:44Z",
          "tree_id": "c1901844e21f0d07aa1054cbf880b77b9a5c85f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/286d348bd80e6d99dbad404e8bf193e765b0617b"
        },
        "date": 1729678534297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.854,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.638,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.7768115,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.1740449,
            "unit": "milliseconds"
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
          "id": "d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc",
          "message": "Bump to stable Rust (1.82) (#1075)\n\n* Use `stable` Rust channel\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Pass `+whole-archive` linker flag for `aws-c-common` in debug build\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n* Replace deprecated PanicInfo type alias\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\n(cherry picked from commit bbaead293880eaa84cc12f0136b8c50de368afd4)\n\n* Always pass `+whole-archive` modifier for `aws-c-common`\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-10-23T11:20:48Z",
          "tree_id": "0e4dd1480fbe470006167e4082bc362a70f272cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4a31ee13abb4cce71e42a70a1eab4fd7da11ddc"
        },
        "date": 1729683915220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.851,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.715,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.227412699999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6931801,
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
          "id": "4dc8e7db1754e543977eeb32ee6670824d29dd44",
          "message": "Remove use of ObjectInfo in S3 client HeadObject response (#1058)\n\n* Remove use of ObjectInfo in S3 client HeadObject response\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Change HeadObjectResult etag field from String to ETag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-10-24T08:02:29Z",
          "tree_id": "a811bc5dd139884d431dc5351357eec29eac1307",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dc8e7db1754e543977eeb32ee6670824d29dd44"
        },
        "date": 1729758361080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.856,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.527,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.634711099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.861422300000001,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}