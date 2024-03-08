window.BENCHMARK_DATA = {
  "lastUpdate": 1709887722795,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "committer": {
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "080fda178ddb94d0db8bb0cc71bd9ffb588a6339",
          "message": "Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-26T10:37:07Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/080fda178ddb94d0db8bb0cc71bd9ffb588a6339"
        },
        "date": 1708965396852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.164,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.552,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.28,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.54,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 25.0945013,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.5750171,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "080fda178ddb94d0db8bb0cc71bd9ffb588a6339",
          "message": "Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-26T10:37:07Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/080fda178ddb94d0db8bb0cc71bd9ffb588a6339"
        },
        "date": 1709031840138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.156,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.546,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.291,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.182,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 25.2974094,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.334791,
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
            "email": "sauraank@amazon.co.uk",
            "name": "Ankit Saurabh",
            "username": "sauraank"
          },
          "distinct": true,
          "id": "310cf4387fddac8a9b9a517bb07643a6b9f12c37",
          "message": "Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T10:06:50Z",
          "tree_id": "374c66d99ba667109393fb701cedf4a9f1eff04f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/310cf4387fddac8a9b9a517bb07643a6b9f12c37"
        },
        "date": 1709115512152,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.526,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.272,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.267,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.731965,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.578615199999998,
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
          "id": "f090603d4cdb89f5022f69981b094c0a872ab397",
          "message": "Add benchmarks for S3 express one zone bucket and automate creation of files for benchmark (#779)\n\n* Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Changed the Assume Role duration to 6 hours for latency benchmarks also\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Testing to have s3 express and standard s3 on same plot\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting the test change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-28T15:42:50Z",
          "tree_id": "b6c86900e6c112289d56d50798eb4440b4a9debd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f090603d4cdb89f5022f69981b094c0a872ab397"
        },
        "date": 1709136558685,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.526,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.213,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.421,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.3975324,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.8166779,
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
          "id": "abead60f771717e148f980da744c30eccecebceb",
          "message": "Bump mio from 0.8.10 to 0.8.11 (#798)\n\nBumps [mio](https://github.com/tokio-rs/mio) from 0.8.10 to 0.8.11.\n- [Release notes](https://github.com/tokio-rs/mio/releases)\n- [Changelog](https://github.com/tokio-rs/mio/blob/master/CHANGELOG.md)\n- [Commits](https://github.com/tokio-rs/mio/compare/v0.8.10...v0.8.11)\n\n---\nupdated-dependencies:\n- dependency-name: mio\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-03-05T09:41:32Z",
          "tree_id": "9069d3c52a4b00123004e3bc9eb8a67ca6b70d9b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abead60f771717e148f980da744c30eccecebceb"
        },
        "date": 1709633374714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.52,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.274,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.508,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.6282618,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.2094862,
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
          "id": "0640bac19327829c5f9769c3dd75b1b1fca68f83",
          "message": "Enable negative cache when using `--cache` (#757)\n\n* Mention negative metadata caching in semantics doc\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Enable negative cache without feature flag\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove negative_cache feature flag from integration tests workflow\n\nWe will remove the flag from cargo.toml in a separate PR to allow the workflow currently on main to still find it when running on this PR.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update doc/SEMANTICS.md\n\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>\nSigned-off-by: Alessandro Passaro <alessandro.passaro@gmail.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nCo-authored-by: James Bornholt <jamesbornholt@gmail.com>",
          "timestamp": "2024-03-06T09:52:40Z",
          "tree_id": "654d7d8975b88842677f6beb77fcbdf7bb0f6d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0640bac19327829c5f9769c3dd75b1b1fca68f83"
        },
        "date": 1709720354424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.208,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.572,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.385,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.382,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.404640899999997,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.8370212,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "0a7b9e94f31c7e986f11c7b9c72558585805750d",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-06T10:24:42Z",
          "tree_id": "089297cc57ed3e4647366f70d418693bb34aab18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a7b9e94f31c7e986f11c7b9c72558585805750d"
        },
        "date": 1709734973844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.549,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.306,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.572,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.4396525,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 24.418074100000002,
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
          "id": "ab39c1d4400a9bba3804d420065c1dbb1b931d70",
          "message": "Cancel S3 requests when dropped  (#794)\n\n* Cancel S3 requests when dropped\n\nToday we don't cancel S3 requests when dropped. For our prefetcher that\nmeans we keep streaming (up to) 2GB of data that will never be used.\nThis change cancels in-flight requests when dropped, so that the CRT\nwill stop streaming them. Some bytes might still be in flight or\ndelivered, which is fine. Canceling requests is a no-op if they've\nalready completed.\n\nThe tricky case for this change is PutObject. Our current implementation\nof `PutObjectRequest::write` blocks until the bytes it provides are\nconsumed by the client. But sometimes the client might stop reading from\nthe stream because the request has failed. That case happens to work\ntoday because we don't retain a reference to the meta request ourselves,\nand so the failed request's destructors run immediately after the\nfailure, which unblocks the writer and returns it an error. But now we do\nhold onto a reference, and the destructors can't run until the last\nreference is released, so the writer is never unblocked. To fix this, we\nmake the `write` and `complete` methods of the `PutObjectRequest` poll\n_both_ the write stream and the request itself in parallel. If the request\ncompletes, this gives us a chance to bail out of the write rather than\nblocking forever.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Adjust client metrics to account for canceled requests\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Disable large object PUT abort test\n\nThe CRT abort is best-effort -- part uploads can succeed after the Abort\nsucceeds, which effectively recreates the MPU. This is mentioned in the\nAbortMultipartUpload documentation.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Expand a comment\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-06T16:33:24Z",
          "tree_id": "00274afc220c34e17d320e2f157ee7321d4ef760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab39c1d4400a9bba3804d420065c1dbb1b931d70"
        },
        "date": 1709744520486,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.265,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.035,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.910877600000003,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.2135581,
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
          "id": "d54a8412066700f2e688fa1eac1c939c8233cb72",
          "message": "Bump CRT dependecies (#796)\n\n* Bump CRT dependecies\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Additional bump for aws-c-common fix\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T00:41:56Z",
          "tree_id": "92dab3c0176f0a9a1af9ce7a717463d44ac5a0f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d54a8412066700f2e688fa1eac1c939c8233cb72"
        },
        "date": 1709773622500,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.511,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.243,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.004,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.1470612,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.6796286,
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
          "id": "896c6d3c80b3c5442679f637c0fc7fac83e90e52",
          "message": "Account already downloaded data when resetting a prefetcher (#797)\n\n* Account already downloaded data when resetting a prefetcher\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refactor to use absolute offsets\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Refine naming and imports\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Use std::sync, reorder code in push\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [2]\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Reorder code in push [3], ignore shuttle prefetch tests\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Be precise when checking available data\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:42:38Z",
          "tree_id": "beac76695707ccd9f719bc5c80951555f3be7622",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896c6d3c80b3c5442679f637c0fc7fac83e90e52"
        },
        "date": 1709773662016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.244,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.28,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.80407,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.1676657,
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
          "id": "0fbc8e9d73079fe762d60806f223d9ab0a0eaa72",
          "message": "Add fio job to benchmark read-skip-read pattern (#799)\n\n* Add fio job to benchmark read-skip-read pattern\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Rename the benchmark\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-03-07T00:43:29Z",
          "tree_id": "0c5d6e9e6258e17df23168ee6be7468cd9f4cac0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbc8e9d73079fe762d60806f223d9ab0a0eaa72"
        },
        "date": 1709804923217,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.225,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.286,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.2673403,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.0671791,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "77476b751afc1cc17e79be4caea4992daaeed639",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T09:38:37Z",
          "tree_id": "5c34c94f0ae5728da675462b29266d63c77c12a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77476b751afc1cc17e79be4caea4992daaeed639"
        },
        "date": 1709811781649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.519,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.286,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.401,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.0663981,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.279349800000002,
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
          "id": "d61d688f93ffb3f35fa1019a0b36f6c2e8228107",
          "message": "Record seek_distance metrics whether or not the seek triggers a reset (#800)\n\nBy always recording the length of a seek attempt, we should get a better picture of the read pattern. The `out_of_order` metric can already be used to determine whether or not the seek could be performed without resetting the prefetcher.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T11:16:43Z",
          "tree_id": "ed96e6c7ad34c0ec4ac7da40278fda7b058f06f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d61d688f93ffb3f35fa1019a0b36f6c2e8228107"
        },
        "date": 1709814681898,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.516,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.248,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.534,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.2947208,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.662889399999997,
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
          "id": "846f026e87ade3e59afbaabaa5c2adf9967aee5f",
          "message": "Add request ID to meta request failures and add tests (#790)\n\nA side effect of https://github.com/awslabs/mountpoint-s3/pull/669 was\nthat there's now no way to get request IDs for failed requests at the\ndefault logging settings, as only DEBUG-level messages include the\nrequest IDs. This change adds request IDs to the meta request failure\nmessage when available, so that these WARN-level messages still include\nrequest IDs.\n\nI also added some new infrastructure to test metrics and log messages.\nFor metrics, we build a new `metrics::Recorder` that collects all the\nmetrics and can then be searched to find them. For log messages, we\nbuild a `tracing_subscriber::Layer` that collects all tracing events\nemitted while enabled. In both cases, the new objects aren't thread\nsafe, as both `Recorder`s and `Layer`s are global state. So these tests\nneed to continue to use `rusty_fork` to split into a new process per\ntest.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T12:05:58Z",
          "tree_id": "0325df875d36498b013aeec3f2f2e81a05f60972",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/846f026e87ade3e59afbaabaa5c2adf9967aee5f"
        },
        "date": 1709820478439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.141,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.514,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.278,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.984,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.808343,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.7155274,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "a82d1d261d9dfabb82bc150c5905ee5a406c1180",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T13:57:16Z",
          "tree_id": "7ee9966a0adc2791a7c23a096946f04b8dd1985f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a82d1d261d9dfabb82bc150c5905ee5a406c1180"
        },
        "date": 1709824472150,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.517,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.243,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.952,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.1338455,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3208865,
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
          "id": "56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647",
          "message": "Release v1.5.0 (#801)\n\n* Release v1.5.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add CRT change\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-03-07T14:49:54Z",
          "tree_id": "b6750d5d5d3efa2d4f04a0ea66ab5d785cc30a75",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56591e7b6dd2b49acefa9ce8df7eaacb5f3f9647"
        },
        "date": 1709834552873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.523,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.289,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.538,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 24.0006828,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 23.138090899999998,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "9aecc8cda680228b149d8aba37c6ce5ddfd12a12",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T17:52:08Z",
          "tree_id": "98a46e7fa1f8d9345aecbb5a800173d55fc12440",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9aecc8cda680228b149d8aba37c6ce5ddfd12a12"
        },
        "date": 1709849805970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.519,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.227,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 9.002,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 21.322874300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.3913442,
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
          "id": "f5436c6ac8ae5438932b0a0fa629285780f8eddd",
          "message": "Re-enable Shuttle tests (#804)\n\nThe Shuttle issue was fixed by https://github.com/awslabs/shuttle/pull/139\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-03-07T22:18:35Z",
          "tree_id": "e4c1fe6bba7a8221b14b84ac07af56790a49335d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5436c6ac8ae5438932b0a0fa629285780f8eddd"
        },
        "date": 1709851525812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.528,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.293,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.528,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 23.1306547,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.9771759,
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
          "id": "afd42dd6f8eb33a2d6546173fd87c616f4cfe11b",
          "message": "Adding benchmarks that use caching. (#783)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-07T22:21:07Z",
          "tree_id": "b721d6a5afd6d6f0111c172beda953b9be70f590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/afd42dd6f8eb33a2d6546173fd87c616f4cfe11b"
        },
        "date": 1709851645501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.529,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.285,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.667,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.7953212,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 22.977201,
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
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "distinct": true,
          "id": "004d41315be731d1f9d02e4eafb5e587e53abe9f",
          "message": "Update documentation for benchmarking and make env var name consistent.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-08T08:20:49Z",
          "tree_id": "d58949c7e48899056f818a9f160a418064c88381",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/004d41315be731d1f9d02e4eafb5e587e53abe9f"
        },
        "date": 1709887722322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.538,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.281,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.989,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 22.5432808,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 21.9568933,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}