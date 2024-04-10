window.BENCHMARK_DATA = {
  "lastUpdate": 1712759504747,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "cfd46aa1fd79488c01e0a6d13c4187b40541da98",
          "message": "Workflow updates for AL2023\n\n1. Remove Cargo caching -- we have too many build variants in CI at this\n   point, and the cache is limited to 10GB per repo, so in practice it\n   never/rarely hits before evicting random variants.\n2. Update actions to versions that we previously deferred because they\n   required the node20 runtime, which didn't work on AL2.\n3. Fix a syntax thing in the cache build workflow.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T19:26:45Z",
          "tree_id": "865b6c69e925edb15d387a6e6f854e9a8b14d683",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfd46aa1fd79488c01e0a6d13c4187b40541da98"
        },
        "date": 1710272273220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.137,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.279,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.562,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.2104249,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.988270699999998,
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "de1af8a7375f16002399d3b944f31837b8aea3a2",
          "message": "Workflow updates for AL2023\n\n1. Remove Cargo caching -- we have too many build variants in CI at this\n   point, and the cache is limited to 10GB per repo, so in practice it\n   never/rarely hits before evicting random variants.\n2. Update actions to versions that we previously deferred because they\n   required the node20 runtime, which didn't work on AL2.\n3. Switch how we install Rust, since actions-rs/toolchain is deprecated.\n4. Move ASan workflows to run on ARM runners, which are much faster.\n5. Fix a syntax thing in the cache build workflow.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T21:44:05Z",
          "tree_id": "96019e2500a2f27ed74325002b43e98deb40e9ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de1af8a7375f16002399d3b944f31837b8aea3a2"
        },
        "date": 1710280683606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.246,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.487,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.744509899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3353006,
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "be52b609c1a314f6cb9c1ddd99f76f61ca086594",
          "message": "Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:25:09Z",
          "tree_id": "a8d1a82f6598133ee1b6d721a861966c74591916",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be52b609c1a314f6cb9c1ddd99f76f61ca086594"
        },
        "date": 1710283307477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.515,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.284,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.606,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.6129115,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3682015,
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
            "email": "bornholt@amazon.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "b74b6b4444acda566a5421cad1a8dddecb58e5f8",
          "message": "Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:46:21Z",
          "tree_id": "0a6deb768b46608b3d7b20792e8d880fbd07c5d4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b74b6b4444acda566a5421cad1a8dddecb58e5f8"
        },
        "date": 1710294956609,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.499,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.267,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.351,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.982847399999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.3222443,
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
          "id": "5cba78ff99dd094d6158730fd048e8c3228da858",
          "message": "Small docs updates (#810)\n\nFour small changes:\n1. The notice about 1.4.0 was stale now that we've released newer\n   version(s).\n2. The build-from-source instructions were hard to copy/paste because\n   they required interactive input.\n3. The CSI driver wasn't mentioned in the docs.\n4. The AUR repo is unmaintained (not updated since last July), so we\n   shouldn't point customers to it.\n\nI also did a little bit of minor clarifying/editing.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-12T22:54:59Z",
          "tree_id": "2542d05585a732ecaf67dcf6afabe7260f1a640d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5cba78ff99dd094d6158730fd048e8c3228da858"
        },
        "date": 1710295074798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.5,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.25,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.928,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.9804561,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.966501,
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
          "id": "4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca",
          "message": "Workflow updates for AL2023 (#814)\n\n* Update workflows to latest versions\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Remove cargo cache\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Replace actions-rs/toolchain\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix a syntax thing for the cache workflow\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Run ASan on ARM runners\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Don't publish benchmark results from non-`main` branches\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-13T16:02:04Z",
          "tree_id": "fdc43fabc0f2bf9d62f4b10305ba441d673e9ae1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ac1fcf995a9fac76fdd9fea7cfc086eb82fa7ca"
        },
        "date": 1710346979670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.504,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.265,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.319,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.052134600000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.140458600000002,
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
          "id": "5a219733940d7f9dd9cfa4aeabe4ddb94606f290",
          "message": "Fix a compiler warning (#817)\n\nWe forgot to re-export ChecksumAlgorithm in the public API.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-15T17:46:14Z",
          "tree_id": "fadf4e68b28f854fbe0bcdf079d9e8a3040860a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a219733940d7f9dd9cfa4aeabe4ddb94606f290"
        },
        "date": 1710526054528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.242,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.056,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.5596072,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.7035129,
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
          "id": "b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29",
          "message": "Fix failing CI jobs (#824)\n\n* Fix clippy errors\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update cargo about in packaging image\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-25T12:02:19Z",
          "tree_id": "287ebbdd68c77528b99a81c6ed8fb0ea3a40c82e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b1198e5f1fe5ed69635f9a4bd5bf336f6dcd9e29"
        },
        "date": 1711369611063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.507,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.264,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.756,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.2084877,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.691160399999998,
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
          "id": "e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d",
          "message": "Add s3.client.total_bytes metric (#823)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-27T16:47:50Z",
          "tree_id": "646d75c10349a0ebea56db43b1128be306026252",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e3ccca6e3eefa257aed1c41100a4c1f04eb06a9d"
        },
        "date": 1711559321349,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.493,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.271,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.487,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.4851758,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.9691472,
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
          "id": "b20ca62e69b61aca1f3841245d7bf618e0fdaa61",
          "message": "Add AES256 SSE type (#827)\n\n* Add AES256 sse type\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Move CLI flag validation\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix error message, add comment, fix validate_sse_args style\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-28T02:09:56Z",
          "tree_id": "79a3920012ad5610b8b6bae3c47e4c9ea2a1ace9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b20ca62e69b61aca1f3841245d7bf618e0fdaa61"
        },
        "date": 1711593284263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.496,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.275,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.4729266,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.631491399999998,
            "unit": "milliseconds"
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
          "id": "127fb714e3b279291dacc6f59e9c6291fbf5a611",
          "message": "Adding support for rewinddir by restarting readdir if offset is zero. (#825)\n\n* Adding support for `rewinddir` by restarting readdir if offset is zero.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding mention to rewinddir to semantics doc.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Replace rewind method with a new ReaddirHandle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding a rewind_offset fn.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding more tests.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Creating a fn for creating a default handle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Fix clippy and format.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Rename to readdir_handle. Move to single lock.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-28T15:58:38Z",
          "tree_id": "c5e05cd7cc52294e272b755ea9e527ec0d606640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/127fb714e3b279291dacc6f59e9c6291fbf5a611"
        },
        "date": 1711643058069,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.491,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.301,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.414,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.5495472,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 25.3854428,
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
          "id": "84827e7b07a1c5f8eca0d9508c71bbb9263099af",
          "message": "Expose memory consumption metrics (#820)\n\n* Add memory consumption metrics for the prefetcher\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Add buffer pool usage metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Report mountpoint total memory usage\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-30T03:42:01Z",
          "tree_id": "75d59e4b9095c5c00d3f8f5671ab60ceda722981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84827e7b07a1c5f8eca0d9508c71bbb9263099af"
        },
        "date": 1711771432403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.517,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.256,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.829,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.9898968,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.8561142,
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
          "id": "a187420bff60d97efe133754233bd370b6243c5a",
          "message": "Increase default max retries and expose environment variable to override (#830)\n\n* Increase default max retries and expose environment variable to override\n\nWe were using the SDK's default retry configuration (actually, slightly\nwrong -- it's supposed to be 3 total attempts, but we configured 3\n*retries*, so 4 attempts). This isn't a good default for file systems,\nas it works out to only retrying for about 2 seconds before giving up,\nand applications are rarely equipped to gracefully handle transient\nerrors.\n\nThis change increases the default to 10 total attempts, which takes\nabout a minute on average. This is in the same ballpark as NFS's\ndefaults (3 attempts, 60 seconds linear backoff), though still a little\nmore aggressive. There's probably scope to go even further (20?), but\nthis is a reasonable step for now.\n\nTo allow customers to further tweak this, the S3CrtClient now respects\nthe `AWS_MAX_ATTEMPTS` environment variable, and its value overrides the\ndefaults. This is only a partial solution, as SDKs are supposed to also\nrespect the `max_attempts` config file setting, but we don't have any of\nthe infrastructure for that today (similar issue as #389).\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Surprised Clippy doesn't yell about this\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-02T19:05:22Z",
          "tree_id": "b51d26a75fe15c3580cc4a51198d8381b8ff2b43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a187420bff60d97efe133754233bd370b6243c5a"
        },
        "date": 1712086248297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.488,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.223,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.729,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.1131918,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.4003216,
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
          "id": "a34b682afbaec424bf90ab76adc456665c839b25",
          "message": "Update h2 dependency (#835)\n\nAddress vulnerability found by cargo deny:\n    = ID: RUSTSEC-2024-0332\n    = Advisory: https://rustsec.org/advisories/RUSTSEC-2024-0332\n    = An attacker can send a flood of CONTINUATION frames, causing `h2` to process them indefinitely.\n      This results in an increase in CPU usage.\n\n      Tokio task budget helps prevent this from a complete denial-of-service, as the server can still\n      respond to legitimate requests, albeit with increased latency.\n\n      More details at \"https://seanmonstar.com/blog/hyper-http2-continuation-flood/.\n\n      Patches available for 0.4.x and 0.3.x versions.\n    = Solution: Upgrade to ^0.3.26 OR >=0.4.4 (try `cargo update -p h2`)\n    = h2 v0.3.24\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T15:59:07Z",
          "tree_id": "73f9f47dea1feb4c2d8c58a73b1139f9d9d5793c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a34b682afbaec424bf90ab76adc456665c839b25"
        },
        "date": 1712248501668,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.473,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.261,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.369,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.089388800000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.0295964,
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
          "id": "759f3efd16f01453f8c6f4ae98f6dc641528a418",
          "message": "Update CRT submodules to latest releases (#822)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T19:02:22Z",
          "tree_id": "63be9409ceb65eda7ce0cf64f013ac38201a9bd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/759f3efd16f01453f8c6f4ae98f6dc641528a418"
        },
        "date": 1712258623637,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.489,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.269,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.738,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.6185678,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.5508244,
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
          "id": "cecd7e829fad24cdb52707a96260ca3c60a14845",
          "message": "Update CRT submodules to latest releases (#838)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-09T07:58:03Z",
          "tree_id": "7244ca953854c34512447bf25af063459d5c3cd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cecd7e829fad24cdb52707a96260ca3c60a14845"
        },
        "date": 1712652237881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.209,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.571,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.2032417,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.178033699999999,
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
          "id": "2f2884b7c10387a677c5f16abcc3f4ac5fe862f8",
          "message": "Add new troubleshooting section for 'slower throughput than expected' (#834)\n\n* Add new troubleshooting section for 'slower performance than expected'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on cp copying in serial\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-04-09T23:19:39Z",
          "tree_id": "c2abbc0c1cc8095a1f30065c5245da968a3360d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2f2884b7c10387a677c5f16abcc3f4ac5fe862f8"
        },
        "date": 1712705984257,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.479,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.472,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.699021400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.664568699999998,
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
          "id": "cf5fc24cf824bdd9f70058cc0f9c534aca2dd992",
          "message": "Remove the sse_kms feature flag from the CI (#840)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-10T08:37:10Z",
          "tree_id": "2e2e75b91b9ddca9ce35f0c79da52631226e62c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf5fc24cf824bdd9f70058cc0f9c534aca2dd992"
        },
        "date": 1712739706808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.51,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.203,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.802,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.8925955,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.103004199999999,
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
          "id": "8af2fb239872a8b1e501be7edd951840014b472b",
          "message": "Update SSE documentation and remove the feature flag (#839)\n\n* Update documentation, remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove the sse_kms feature flag from the CI\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\n\n* Remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-04-10T10:52:59Z",
          "tree_id": "16acd71b059b4f4c68a4c1927045f016420a8d1d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8af2fb239872a8b1e501be7edd951840014b472b"
        },
        "date": 1712747771335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.505,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.159,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.195,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.5594962,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.7419999,
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
          "id": "2767c856d96984a523aad6a92f0f322e461ccdaf",
          "message": "Adopt new async write API for PutObject requests (#832)\n\n* Add failing test for concurrent put_objects\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add failing test for multiple files open for write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Adopt async write API to feed data into a PutObject request\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Wait for CreateMultiPartUpload\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* FutureVoid wrapper\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure a MetaRequestWrite holds exclusive access to the meta-request until completion\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename on_telemetry callback (in mountpoint-s3-client)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename callbacks on_request_finish/on_meta_request_finish\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use RequestMetric::error()\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T14:06:53Z",
          "tree_id": "9fe356ae5937e9d7ebe2ea077ac8085470ac5f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2767c856d96984a523aad6a92f0f322e461ccdaf"
        },
        "date": 1712759504195,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.508,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.198,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.267,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.1935536,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.344102099999999,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}