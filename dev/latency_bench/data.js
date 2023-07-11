window.BENCHMARK_DATA = {
  "lastUpdate": 1689068414558,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "38263d7856835b4a29798fee79245c49bc844a85",
          "message": "Bump aws-actions/configure-aws-credentials from 1 to 2 (#335)\n\nBumps [aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials) from 1 to 2.\r\n- [Release notes](https://github.com/aws-actions/configure-aws-credentials/releases)\r\n- [Changelog](https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md)\r\n- [Commits](https://github.com/aws-actions/configure-aws-credentials/compare/v1...v2)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: aws-actions/configure-aws-credentials\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-major\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-06-30T15:07:57Z",
          "tree_id": "05c1c09cf91288b890c0fc37fd35f22d4376a7a6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38263d7856835b4a29798fee79245c49bc844a85"
        },
        "date": 1688138288953,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.814,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 52.272917,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.8541226,
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
          "id": "e1eed3830f1a4b7a254396db35419fbd72ef379b",
          "message": "Enforce maximum upload size (#329)\n\n* Expose part size from ObjectClient\r\n\r\nSome users of the client need to know what part size it's using\r\ninternally. Rather than plumbing that around everywhere, and deferring\r\nto CRT defaults if unspecified, let's just make it explicit everywhere.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Allow FUSE tests to set a part size\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce maximum upload size\r\n\r\nUploads can fail if they require more than 10,000 parts. Right now we\r\nonly find out about that failure asynchronously when the CRT actually\r\nconstructs the 10,0001th part. This is bad because unlike other upload\r\nerrors, this one is a deterministic failure that we should be able to\r\nreport up front.\r\n\r\nOne trick here is that the kernel appears to retry failed writes from\r\npage cache when returning EFBIG, so we need to remember the reason the\r\nwrite failed.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Enforce part size bounds\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:09:42-05:00",
          "tree_id": "a130fc75afd1352b9c7db5c9a492b38c39fc1f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e1eed3830f1a4b7a254396db35419fbd72ef379b"
        },
        "date": 1688138428929,
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
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.83,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.5299244,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.600050700000004,
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
          "id": "e7bad12eca37ee46f91e9ecccfd1cd2657815f4e",
          "message": "Turn write support on (#327)\n\n* Turn write support on\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Enable delete feature in workflows\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Only run unlink tests under delete feature\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T16:15:47+01:00",
          "tree_id": "12376fb46b7bf8d60ee2a5ff3982ea62ee26d80d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7bad12eca37ee46f91e9ecccfd1cd2657815f4e"
        },
        "date": 1688138811215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.092,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.91,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.1057823,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.4612985,
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
          "id": "d71d4b437f3055eea8e53bf36b6ee67502ef9d11",
          "message": "Limit dependabot to focus on lockfile updates only (#342)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T10:34:28-05:00",
          "tree_id": "d26a1458fd0ef396572b60011e22a1b0510fccea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71d4b437f3055eea8e53bf36b6ee67502ef9d11"
        },
        "date": 1688139893011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.936,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.5062983,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 50.1459948,
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
          "id": "d992c790941ebf3490caf4501c694b89f6b533db",
          "message": "Disable dependabot for cargo (#347)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T11:28:38-05:00",
          "tree_id": "027ec96056595d9f9d7203b7a1fad9656ed72dd3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d992c790941ebf3490caf4501c694b89f6b533db"
        },
        "date": 1688143139138,
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
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.799,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 61.4702381,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.954018700000006,
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
          "id": "69d9f90334fd77f54c7c1ae331e0ffb900fec60c",
          "message": "Abort upload on out-of-order writes (#341)\n\n* Add fuse test for out-of-order writes\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n* Abort upload after an out-of-order write attempt.\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-30T11:29:44-05:00",
          "tree_id": "6656b398c77c324d0bb836ba0673fa3c6936b936",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/69d9f90334fd77f54c7c1ae331e0ffb900fec60c"
        },
        "date": 1688143226753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.068,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.034,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 50.703101100000005,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.932501,
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
          "id": "15b062835a3d99c4b17d3742af1cba1b0bafdc7f",
          "message": "Explicitly prevent mounting over an existing mount (#348)\n\nIt's valid to mount multiple file systems to the same directory, but\r\ndoing so requires the first one to be mounted read-write, which is why\r\nthis wasn't a problem for us until #327. It seems libfuse2's version of\r\nfusermount explicitly checked this(?), but libfuse3 no longer rejects\r\nit.\r\n\r\nIn principle this might be something we'd want to allow, but I think the\r\nless surprising/error-prone customer experience is to refuse to do it,\r\nso let's explicitly forbid it.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T18:47:00+01:00",
          "tree_id": "7218efb2e8616010d994131c38fcda7608cdacd6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15b062835a3d99c4b17d3742af1cba1b0bafdc7f"
        },
        "date": 1688147854261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.064,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.105,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.778,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.2906655,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.1077466,
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
          "id": "eb5677d081b6e07457408b59bbf632ab47dd624e",
          "message": "Add automation to warn on comment visibility for closed issues (#333)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-03T17:22:02+01:00",
          "tree_id": "9d7c83f3f709000f57c1c62a2309afbba60db845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb5677d081b6e07457408b59bbf632ab47dd624e"
        },
        "date": 1688401967892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.819,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.3588139,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.8015049,
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
          "id": "6c80bb294460ee2b9dcbf6daf8b7a5010e97c54e",
          "message": "Pick up process credentials provider support (#351)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-07-04T11:57:10+01:00",
          "tree_id": "fb6dbb3226be14afe3a26ba76586155e98531268",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c80bb294460ee2b9dcbf6daf8b7a5010e97c54e"
        },
        "date": 1688468881331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.21,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.09,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.144,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.5633896,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.3915033,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sum12@users.noreply.github.com",
            "name": "Sumit",
            "username": "sum12"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "780cc75419b4ed228245ea655834695d151bea7c",
          "message": "Add expected bucket owner configuration (#349)\n\n* allow setting expected bucket owner and use it as condition for requests\r\n\r\nSigned-off-by: sum12 <sumitjami@gmail.com>\r\n\r\n* Update mountpoint-s3/src/main.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update mountpoint-s3/src/main.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update mountpoint-s3-client/src/s3_crt_client.rs\r\n\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\n\r\n* Update `--expected-bucket-owner` placeholder and help text\r\n\r\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\r\n\r\n---------\r\n\r\nSigned-off-by: sum12 <sumitjami@gmail.com>\r\nSigned-off-by: Sumit <sum12@users.noreply.github.com>\r\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\r\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>\r\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\r\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-07-04T14:26:46+01:00",
          "tree_id": "9c462286f3ccb2aaeea2f5a0ae99c1d9e70fd1c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/780cc75419b4ed228245ea655834695d151bea7c"
        },
        "date": 1688477831791,
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
            "value": 1.095,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.706,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.5892918,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.2461419,
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
      }
    ]
  }
}