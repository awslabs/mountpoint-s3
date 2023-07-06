window.BENCHMARK_DATA = {
  "lastUpdate": 1688657403573,
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
          "id": "005b590b8cbac1681924d179dbe94d54b688f5cd",
          "message": "Checkout PR branch when running ASAN workflow (#324)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T14:42:35Z",
          "tree_id": "8035ce8ca411cc7f63cb2ee9df551f5dbdf4d6eb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/005b590b8cbac1681924d179dbe94d54b688f5cd"
        },
        "date": 1688050465256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.161,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.97,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 118.4739165,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 46.9014751,
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
          "id": "5c1c831822e608a9a7c118c5ee51e072149e41c5",
          "message": "Enable trailing checksums on PUT (#320)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T09:58:42-05:00",
          "tree_id": "680f13b07ac51675f54fa6c1a5c2b63e778c1257",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5c1c831822e608a9a7c118c5ee51e072149e41c5"
        },
        "date": 1688051374277,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.215,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.266,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 104.3809696,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.0013036,
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
          "id": "c89f05d1f6478696f113930cc3013daa970992de",
          "message": "Implement fsync and handle write errors (#313)\n\nImplement `fsync` to allow users to complete a put request and receive confirmation that it succeeded or failed. If a file handle is released without a call to `fsync`, `release` will still complete the upload as before. \r\n\r\nWrap the `UploadRequest` in the file handle in a new `UploadState` enum, in order to detect:\r\n* on `release`, whether the request had been already completed by an `fsync` call,\r\n* `write` is invoked after an `fsync`,\r\n* `write` (or `fsync`) is invoked after a previous call failed.\r\n\r\nAlso adds support for put failures to FailureClient.\r\n\r\n---------\r\n\r\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-06-29T10:11:28-05:00",
          "tree_id": "497e1a9c8fa5edd1482b94b652c92d4652207fac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c89f05d1f6478696f113930cc3013daa970992de"
        },
        "date": 1688052122504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.368,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.58964809999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.07827279999999,
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
          "id": "62ac31da3bccbbc2ac73022626dcb38ea750bbbc",
          "message": "Restrict log files access by default (#321)\n\nMountpoint log directories and files are currently created with operating\r\nsystem default permissions, which allows other users in the system to read\r\nlog files. In this commit, we set the log directories and files to 750\r\nand 640 respectively to limit access to the logs.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:12:05-05:00",
          "tree_id": "972cf426682c402e1a9ec52f1638d5c2b1318e7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/62ac31da3bccbbc2ac73022626dcb38ea750bbbc"
        },
        "date": 1688052161885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.063,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.143,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 78.6018498,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.55572179999999,
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
          "id": "971b7575668dc658ce55e6731ebe8eef47b215a6",
          "message": "Optimize part size for checksummed read (#315)\n\n* Optimize part size for checksummed read\r\n\r\nThe prefetcher stores data received from each input stream as a part in\r\nthe part queue structure. Usually, the part size is pretty big (8 MB or\r\nmore) and the checksum validation always has to be done against an entire\r\npart even if we only read a small portion of that part.\r\n\r\nThis makes checksummed read much slower than non-checksummed read. We could\r\nmake it more efficient by making the part smaller or ideally align the part\r\nsize to the read size so that we don't have to compute the checksum on\r\nunnecessary bytes.\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Address PR comments\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-06-29T10:31:11-05:00",
          "tree_id": "2396fc27e4e988000e28b565d6f2db663bd46a62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/971b7575668dc658ce55e6731ebe8eef47b215a6"
        },
        "date": 1688053333794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.061,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.016,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.07149709999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.5426615,
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
          "id": "df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb",
          "message": "Avoid a copy when optimizing part size for checksums (#328)\n\nThe `chunks` iterator returns slices, so creating the `Bytes` for each\r\nchunk needs to do a copy. We can instead just do the `Bytes` conversion\r\nupfront from the `Box<[u8]>`, and then do O(1) splits of that `Bytes`\r\nobject for each chunk.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T10:15:04+01:00",
          "tree_id": "2cb7678c80405139d5e942e9f255c4b209a7d767",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/df53a92f4d0b92b92dfc0b2530e9a94731b9d1fb"
        },
        "date": 1688117156711,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.741,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.0057872,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.1311285,
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
          "id": "5946bb83b5baab5c75ca0f487aea9b1b2edd1184",
          "message": "Configure Dependabot to update Cargo and GitHub Action dependencies (#331)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-06-30T15:38:05+01:00",
          "tree_id": "550a4df365c6fd93bbc5697b0b1a587551a5ad30",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5946bb83b5baab5c75ca0f487aea9b1b2edd1184"
        },
        "date": 1688136527068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.871,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.5859402,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.340309,
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
          "id": "f90adbe516c0da7119c61c9facddad4c16ffd2b2",
          "message": "Readme shuffling and updates (#330)\n\n* Readme shuffling and updates\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Missing space\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-06-30T09:58:52-05:00",
          "tree_id": "e62f893e600f47da4b4de89efddb4913cecd852c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f90adbe516c0da7119c61c9facddad4c16ffd2b2"
        },
        "date": 1688137763899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.087,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.485,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.17311529999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.6233372,
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
      }
    ]
  }
}