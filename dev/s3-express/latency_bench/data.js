window.BENCHMARK_DATA = {
  "lastUpdate": 1713930451575,
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
          "id": "4cd3cd57557ed6c825a6108735a312a85dcf2221",
          "message": "Remove fuse_tests from asan (#844)\n\nThey frequently trigger a deadlock inside ASan's allocator. We're really\r\nusing ASan to test the CRT bindings anyway, so the S3 tests are really\r\nwhat matter most.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-10T15:01:38-05:00",
          "tree_id": "50df3f85bdda712eb393abe4ed237640cccc3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cd3cd57557ed6c825a6108735a312a85dcf2221"
        },
        "date": 1712779865401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.51,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.221,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.755761099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.8172558,
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
          "id": "9803ca56d6185e38d10c7590b5c6f08cac18da51",
          "message": "Publish new crate versions (#843)\n\n* Publish new crate versions\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Increment mountpoint-s3-crt* to v0.7.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T22:28:41Z",
          "tree_id": "a116d4cebe7db19caf421e92ef1106cd05fa9a1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9803ca56d6185e38d10c7590b5c6f08cac18da51"
        },
        "date": 1712789623583,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.496,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.462,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.109666599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.5419182,
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
          "id": "1496c13f2078b9b5803d833161139b5600c0ace9",
          "message": " First pass at randomized testing for POSIX semantics (#842)\n\n* Don't use AutoUnmount in FUSE integration tests\n\nIt's the wrong thing to do: the FUSE session is unmounted automatically\nwhen the BackgroundSession drops. AutoUnmount is for the case when the\nmounting process might not unmount on its own, but we always do. Using\nthe option spawns a new thread and leaks a socket until the end of the\nprocess, which means our test processes can run out of open file\ndescriptors if they run many FUSE sessions.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* First pass at randomized testing for POSIX semantics\n\nThe idea is to randomly run real system calls against both a real file\nsystem (a temporary directory on the OS disk) and Mountpoint. We expect\nMountpoint to allow fewer behaviors than a real POSIX file system (e.g.\ncan't read and write the same file handle), so we need some logic for\nallowing a limited set of divergences between the two systems.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-11T02:03:59Z",
          "tree_id": "7f275c15f402814085f71198bbad49d9f4b02a13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1496c13f2078b9b5803d833161139b5600c0ace9"
        },
        "date": 1712802501200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.51,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.899,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.223059300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.6052582,
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
          "id": "29cf8daf8f87aa216e5064c4b1a5fdd46009c164",
          "message": "Improve cancellation test for PutObject write (#845)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-11T11:07:27Z",
          "tree_id": "54dff8c2afb3a209cd9879da719589500a6cbd19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29cf8daf8f87aa216e5064c4b1a5fdd46009c164"
        },
        "date": 1712834887256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.495,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.159,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.696910599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.5976526,
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
          "id": "f0c61a4911f0f5431c88f160a6d165d37c02f945",
          "message": "Update documentation on sse-kms (#847)\n\n* Update documentation on sse-kms\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the changelog\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the links\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* v1.6.0 (April 11, 2024)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Unreleased for now\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T13:57:35Z",
          "tree_id": "399c7a5cf09b9010b3d93dc0a124e999d272be2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0c61a4911f0f5431c88f160a6d165d37c02f945"
        },
        "date": 1712845412600,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.497,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.139,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.72,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.4093549,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.171858,
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
          "id": "ad0f53058710f77d2fc7d64cd7820cfde8847a81",
          "message": "Release v1.6.0 (#848)\n\n* Release v1.6.0\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add other changes, fix header\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T15:49:41Z",
          "tree_id": "9beee3898632bc67ef7e62418873d77034912b55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad0f53058710f77d2fc7d64cd7820cfde8847a81"
        },
        "date": 1712852097037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.496,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.541,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.7773679,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.662446300000001,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nairashwin952013@gmail.com",
            "name": "Ashwin Nair",
            "username": "indianwhocodes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2393b96acf0773a9b11b4b1c34e80538d83ff9e8",
          "message": "S3_ENDPOINT_URL configurable for mountpoint benchmarks (#821)\n\nSigned-off-by: indianwhocodes <nairashwin952013@gmail.com>",
          "timestamp": "2024-04-12T08:40:59Z",
          "tree_id": "a111f1d51e2e3048b2ebba68a77426894c6f9536",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2393b96acf0773a9b11b4b1c34e80538d83ff9e8"
        },
        "date": 1712912421272,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.521,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.205,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 15.2303991,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.4536899,
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
          "id": "620f8407b1f603ace6e5a6a6defe4304419a43a4",
          "message": "Update Rust SDK (#856)\n\nThe SDK supports Express One Zone, so we can remove our workarounds.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-19T01:36:38Z",
          "tree_id": "bf67ddfcc5ba363204a291d0ea34777476c7bfc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/620f8407b1f603ace6e5a6a6defe4304419a43a4"
        },
        "date": 1713491833533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.499,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.81,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.361832300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 15.168348,
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
          "id": "268b672c81b3b8820af29051b599deaf04207b88",
          "message": "Bump rustls from 0.21.10 to 0.21.11 (#857)\n\nBumps [rustls](https://github.com/rustls/rustls) from 0.21.10 to 0.21.11.\n- [Release notes](https://github.com/rustls/rustls/releases)\n- [Changelog](https://github.com/rustls/rustls/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/rustls/rustls/compare/v/0.21.10...v/0.21.11)\n\n---\nupdated-dependencies:\n- dependency-name: rustls\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-21T04:43:37Z",
          "tree_id": "56bb3f4b0bcbae137ece675cfccedd3af1f6b1b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/268b672c81b3b8820af29051b599deaf04207b88"
        },
        "date": 1713676199787,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.518,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.101,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 14.0305492,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 14.9716314,
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
          "id": "bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da",
          "message": "Avoid creating a new rule engine for every endpoint resolution (#860)\n\n* Avoid creating a new rule engine for every endpoint resolution\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Use static rule engine for all endpoint configs\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-04-23T14:59:43Z",
          "tree_id": "583385e18301587c51b8257fd655e5b11f6dddca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da"
        },
        "date": 1713885868143,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.494,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.135,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.318,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8980365,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.7723555,
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
          "id": "1204aed8494cbe78dc6b0c9828d2c7d5143e6afe",
          "message": "Allow building on 32-bit platforms (#852)\n\n* Allow building on 32bit platforms\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n* Fix style\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vladvolodkin@gmail.com>",
          "timestamp": "2024-04-24T03:23:41Z",
          "tree_id": "3b82167c691b85891b490fc629eb0d59572157a1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1204aed8494cbe78dc6b0c9828d2c7d5143e6afe"
        },
        "date": 1713930451001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.494,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.669,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.7920238,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.1858887,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}