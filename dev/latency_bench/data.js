window.BENCHMARK_DATA = {
  "lastUpdate": 1689613650544,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "75670d947e72607349bc66c6d1b948b5f5bd2f91",
          "message": "add read-only mount option (#353)\n\n* add read-only mount option\r\n\r\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\r\n\r\n* Update mountpoint-s3/src/main.rs\r\n\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\r\nSigned-off-by: Josh Chorlton <jchorl@users.noreply.github.com>\r\n\r\n* add test\r\n\r\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\r\n\r\n* suggestions\r\n\r\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Josh Chorlton <jchorlton@gmail.com>\r\nSigned-off-by: Josh Chorlton <jchorl@users.noreply.github.com>\r\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2023-07-06T15:29:38+01:00",
          "tree_id": "1ce4879d6ad41951419d2cb42ba60c324dcdf0d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/75670d947e72607349bc66c6d1b948b5f5bd2f91"
        },
        "date": 1688654415094,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.851,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.02003359999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.377373399999996,
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
          "id": "44763b1e066a1b05fd2a889f021dbbab43104b86",
          "message": "Add sequential write benchmark (#352)\n\n* Add sequential write benchmark\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Update document\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-06T10:19:39-05:00",
          "tree_id": "4ad5facea807f0263bb17356dcb3ac483d827a98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44763b1e066a1b05fd2a889f021dbbab43104b86"
        },
        "date": 1688657402114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.004,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.8759935,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.3542647,
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
          "id": "35a19317b60ac9a24e8831c154d7c0d75b73bea9",
          "message": "Fix cli help for prefix option (#360)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-06T17:42:53Z",
          "tree_id": "4125407f21e900452939fbf0ceaf726eb26cbaaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/35a19317b60ac9a24e8831c154d7c0d75b73bea9"
        },
        "date": 1688666018408,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.906,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.253801,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.7399751,
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
          "id": "2d697695ec8ca2dc88136bb123b96b4337f83bcd",
          "message": "Rust Wrapper for CRT endpoint resolver (#317)\n\n* Squashing commits to rebase\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the error message and released the leaking pointer\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Consolidate tests with test cases for endpoint resolver\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Tested Invalid cases\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added region failure test\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n* Added the recommended changes\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-07-06T14:31:03-05:00",
          "tree_id": "029c5f0d1ef3a52add957029ea2fc906f7684f67",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d697695ec8ca2dc88136bb123b96b4337f83bcd"
        },
        "date": 1688672509884,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.164,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.7621079,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.1717309,
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
          "id": "52f5ddc2fc2ee691ddb99952d11abc344f9b5762",
          "message": "Tweak discussion of `.` and `..` (#361)\n\nThis was confusing -- it's about object keys, not files/directories. We\r\nwant to highlight that they work the same way you'd expect.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T07:15:56+01:00",
          "tree_id": "6802dfb54b68954342f077d9d4950c0d651a5095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/52f5ddc2fc2ee691ddb99952d11abc344f9b5762"
        },
        "date": 1688711226382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.074,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.048177,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 60.4042076,
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
          "id": "6cb1a3d71b74f9b56a8a7153b7a84109442f4005",
          "message": "Capture panics and pipe them to `tracing` (#357)\n\nWe want to make sure panics are captured in logs so we can debug them.\r\nThis change adds a new panic hook that pulls out the payload, location,\r\nand backtrace of a panic and emits them at error level through\r\n`tracing`. The `main.rs` file is getting a bit out of hand so I tried to\r\nleave it a little better than I found it by moving the logging stuff\r\ninto a submodule.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-07T10:44:40+01:00",
          "tree_id": "8df352b36562290d6b1b3f4be1fb882ebb53fd65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cb1a3d71b74f9b56a8a7153b7a84109442f4005"
        },
        "date": 1688723727062,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.057,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.2900233,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.1424544,
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
          "id": "1ce21dfb55e9832a83f27421d28d63a9795c4693",
          "message": "Implement forget (#359)\n\n* Implement forget\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix comparison\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* fix fmt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Split readdir and readdirplus in fs\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove TODO\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-07T11:16:28-05:00",
          "tree_id": "988016ea49705858dcbda5e62078f0a75f9e4518",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ce21dfb55e9832a83f27421d28d63a9795c4693"
        },
        "date": 1688747231699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.821,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 74.27080720000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.8178659,
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
          "id": "ed542e726de9232f8cfbdbeeb3a5a37988ada891",
          "message": "Add some tests for UTF-8 filenames (#362)\n\nLinux filesystems allow UTF-8 in filenames, and S3 allows UTF-8 in keys,\r\nso we expect this to work. It does! But it did expose a bug in our mock\r\nclient's ListObjects implementation, which was dealing with bytes\r\ninstead of characters (unlike the real S3).\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-09T13:03:55+01:00",
          "tree_id": "63ed2df4c8b2c72b6e48cbe57025f1c0c108aab0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed542e726de9232f8cfbdbeeb3a5a37988ada891"
        },
        "date": 1688904867587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.889,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.5125029,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.783694700000005,
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
          "id": "5feb0e596c471e3bf24f6ee947d8f862d69cf163",
          "message": "Update CRT submodules to latest releases (#365)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-10T14:09:41+01:00",
          "tree_id": "bf30fd59e6a63e498fe1bf113c1790f0ea789d65",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5feb0e596c471e3bf24f6ee947d8f862d69cf163"
        },
        "date": 1688995228424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.801,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.4622428,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.5536919,
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
          "id": "b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907",
          "message": "Remove closed issue warnings (#366)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-11T10:29:45+01:00",
          "tree_id": "951937452359dbfa781a00799f97d198a63d5486",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6493af0c136bd49d0e3b00d6da3ce2fc7e2f907"
        },
        "date": 1689068414087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.067,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.491,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.41202320000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.1768019,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "122115681+eslrahc-swa@users.noreply.github.com",
            "name": "Charles",
            "username": "eslrahc-swa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a516cc8ba299becad398c7564755c16c9e8d5ff4",
          "message": "Introduce release workflow. (#356)\n\nWe adopt two Github Action to automate release for Mounpoint-S3\r\n* Github Action ID: [taiki-e/create-gh-release-action](https://github.com/taiki-e/create-gh-release-action) for create Github Release.\r\n    * During the release, operator must have consensus with team on version,\r\n      draft, prefix and title as workflow inputs.\r\n    * This workflow can also take changelog as inputs, we can opt in\r\n      that once we have a change log format ready.\r\n* Github Action ID: [taiki-e/upload-rust-binary-action](https://github.com/taiki-e/upload-rust-binary-action) for uploading Mountpoint-S3 binary and all other artifacts.\r\n    * This workflow uploads compiled binary on target platforms. When we\r\n      do the release, artifacts must includes: bin, LICENSE, archive and\r\n      checksum.\r\n\r\nSigned-off-by: Charles Zhang <zyaoshen@amazon.com>\r\nCo-authored-by: Yaosheng Zhang <zyaoshen@amazon.com>",
          "timestamp": "2023-07-12T14:41:52-07:00",
          "tree_id": "6c4c4ffe626009d2f9e3692bb8a2cf33c2f6a451",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a516cc8ba299becad398c7564755c16c9e8d5ff4"
        },
        "date": 1689198739126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.881,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.2494675,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.5845077,
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
          "id": "862625f2ef55926f6444948f60c481058cf47a0f",
          "message": "Disable new `items_after_test_module` Clippy lint (#372)\n\nThis is new in 1.71, but seems to get confused by the test_case macro.\r\nIt was supposedly fixed in\r\nhttps://github.com/rust-lang/rust-clippy/pull/10992 but that seems to\r\nnot have entirely worked.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:20:36Z",
          "tree_id": "bdb22a4a2ffc9565d4ec86c32cf8003ae5f49a91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/862625f2ef55926f6444948f60c481058cf47a0f"
        },
        "date": 1689265906241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.992,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 96.6025681,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.4940176,
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
          "id": "caeff99448ec64b64bf6dfbbd7dbdebea13d847e",
          "message": "Add unlink to reference model tests (#368)\n\nThis is pretty annoying because of some weird edge cases around implicit\r\ndirectories being removed while local children are present. I think in\r\nthe long term we want to fix this, but it's a similar problem to what we\r\nsaw in #359 -- we need `readdir` to clean up removed directories\r\nproperly. So for now, I've changed the reference model to match our\r\ncurrent semantics, which is that if an ancestor of a local\r\nfile/directory is removed, that file/directory will no longer be visible\r\nthrough the filesystem. Of course, once that file/directory becomes\r\nremote it will become visible, and the model still captures that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-13T16:52:46Z",
          "tree_id": "fb7e90556bf7d806ff78ac94090986ec32396177",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caeff99448ec64b64bf6dfbbd7dbdebea13d847e"
        },
        "date": 1689267772801,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.022,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.2886128,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.5983596,
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
          "id": "146b9d3d777e41d68a5383a911021feea003c869",
          "message": "Remove checksum feature from the workflow (#379)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:46:49+01:00",
          "tree_id": "37e8bdcb9d89f483203260f792c507f30603d57e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/146b9d3d777e41d68a5383a911021feea003c869"
        },
        "date": 1689343055279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.79,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 65.4656049,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.0913398,
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
          "id": "d335a48ee2b2d2bb87408b557345af2166e7085d",
          "message": "Remove the temporary checksum feature (#378)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-14T14:18:22Z",
          "tree_id": "329e09fadd5876c558ae99a2fd8e3b0bf4325eff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d335a48ee2b2d2bb87408b557345af2166e7085d"
        },
        "date": 1689344937718,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.156,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 76.132757,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.778100200000004,
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
          "id": "7be6f2f3816591794134e90d3e615e79f66a5668",
          "message": "Compute checksums on write and compare with trailing checksums (#367)\n\n* Revert workaround for empty PutObject requests in #295\r\n\r\nCRT now supports empty PutObject requests with no ContentLength header\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move crc32c-related functions into Crc32c type\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Add support for upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Compute checksums on write and review on upload\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksum types to mountpoint-s3-client\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Rename/review UploadReview types\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Simplify handling of upload review callback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Remove ChecksummedSlice\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Address PR feedback\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Move checksums back to mountpoint-s3-crt\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-07-14T16:00:10-05:00",
          "tree_id": "f7ca2d33165a79b9dcd24d8667fa436d9ec31bb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7be6f2f3816591794134e90d3e615e79f66a5668"
        },
        "date": 1689369059540,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.75,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.0515479,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.254796799999994,
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
          "id": "8d44b12bdd387ee9e7359f754e62d294ad267003",
          "message": "Allow omitting commit hash from version when specified as official release (#376)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:31:27-05:00",
          "tree_id": "372fb86afbbff454325b9cb6fd64d2fded7af972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8d44b12bdd387ee9e7359f754e62d294ad267003"
        },
        "date": 1689370919455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.065,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.664,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.0760811,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.1819435,
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
          "id": "6e2551a73643c04983fb6b1eed375d00c3df477b",
          "message": "Disable logging to file by default (#373)\n\n* Disable logging to file by default\r\n\r\nThis is a breaking change.\r\n\r\nLogging to disk is now disabled by default.\r\nLogs will not longer be written to `$HOME/.mountpoint-s3/` and should be configured using `--log-directory <DIRECTORY>`.\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Cleanup argument a little\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Improve clarity of documentation around foreground logging\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n* Update log file name to improve timestamp clarity\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-14T16:33:59-05:00",
          "tree_id": "8a2826148e4e0ec24461d0475240f43a47a66cb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e2551a73643c04983fb6b1eed375d00c3df477b"
        },
        "date": 1689371066600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.06,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.158,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.091,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.691,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.5670674,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.5059055,
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
          "id": "3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e",
          "message": "Fix merge conflict (#381)\n\n:(\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-14T22:36:34Z",
          "tree_id": "03de622de34cf468c05e6869ae21681e5e89f51d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a1db05de2fb506d3814b5dbb5c9628d4e2ed41e"
        },
        "date": 1689374825290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.057,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.539,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 68.479334,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.0886764,
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
          "id": "1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae",
          "message": "Tweak some of the CLI help text (#382)\n\n- desired throughput -> maximum throughput\r\n- move AWS credentials above mount options\r\n- change placeholder name for mount point to match `mount`'s docs\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-07-17T17:56:46+01:00",
          "tree_id": "16fb32e481d08a6d6e1d1fbb5f653c937b949c61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c2ba5bf5d0bde16df52a000c8fb2d2791f1c4ae"
        },
        "date": 1689613649986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.195,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.823,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.2223161,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.6356135,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}