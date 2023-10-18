window.BENCHMARK_DATA = {
  "lastUpdate": 1697621349319,
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
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8086f0e26044217b16caa21a929f6b3ed8e839b8",
          "message": "Added accesspoint and transfer acceleration tests (#417)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-14T16:23:48Z",
          "tree_id": "c760de3ebbc76103bf93522b9a1e4d376c38e62b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8086f0e26044217b16caa21a929f6b3ed8e839b8"
        },
        "date": 1694711122616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.088,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.151,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.576,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.402678,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 90.94622240000001,
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
          "id": "7bb17a04869ff7b4d6ae16148b3fab9d0e3bdc0a",
          "message": "Rearrange client crate and improve its docs (#511)\n\n* Rearrange client crate and improve its docs\n\nThe current docs page for the client crate is pretty indecipherable.\nWhile we're not currently suggesting customers use it directly, we know\na few already are, and we'd like the docs to be legible. So this commit\nmoves around a bunch of the public structure of the client crate to be\nconsistent and intentional.\n\nThere's no semantics changes here, this is all just rearranging and\ncommenting stuff that wasn't commented before.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix typo\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-09-15T14:38:12Z",
          "tree_id": "907857ff1594a237336e10962550779309db6d91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7bb17a04869ff7b4d6ae16148b3fab9d0e3bdc0a"
        },
        "date": 1694790930839,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.6,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.0456029,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 80.02400279999999,
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
          "id": "b89117ad1384490a3c226e9f7cd90ec1b6d19124",
          "message": "Update HistogramFn impl to log failure to record rather than panic (#513)\n\n* Update HistogramFn impl to log failure to record rather than panic\n\nWhen writing 50GiB of data to a file, mountpoint-s3 panicked due to an unexpected \"ValueOutOfRangeResizeDisabled\" error.\nWhen creating the Histogram, we limit it with an upper bound of 300000000. For time durations in microsecond precision, that's 300 seconds.\n\nThis change allows the histogram to fail only with a log message for values in excess of 300 seconds.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update Histogram to auto-resize\n\nPreviously, the histogram would be capped at a maximum value of 300,000,000. Now, the histogram will automatically resize.\nThis does come with the implication that more memory may be allocated if values of larger than 300,000,000 are recorded.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-15T14:39:02Z",
          "tree_id": "b6691d6b356ac67b2510cad257c728d0ac670e6a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b89117ad1384490a3c226e9f7cd90ec1b6d19124"
        },
        "date": 1694791039908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.873,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 67.5820458,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.34666390000001,
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
          "id": "171c4200df20223e831dcc856103d52bc4029e15",
          "message": "Improve logging and error handling in benchmark script (#507)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-09-15T14:40:01Z",
          "tree_id": "5ceef93a7ccacff27d8a3786e112104808a86f98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/171c4200df20223e831dcc856103d52bc4029e15"
        },
        "date": 1694791121977,
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
            "value": 1.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.662,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.519034,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.18925309999999,
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
          "id": "11def4796d9479f8462fc78c7195dd5296c8b08f",
          "message": "Build releases on CentOS 7 (#517)\n\nThis gets us compatibility back to glibc 2.17. The tricky part is that\r\nCentOS 7 by default packages a GCC that's too old to build the CRT and a\r\nClang that's too old to run bindgen. But they also distribute optional\r\npackages (devtoolsets) that update these toolchains and stick them in a\r\nseparate directory. So this change adopts those, and tweaks the\r\nenvironment variables on the builder to point at the newer tools.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-09-19T10:15:06+01:00",
          "tree_id": "e142d4d3790b37b2345d8eccbb771534675adc83",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/11def4796d9479f8462fc78c7195dd5296c8b08f"
        },
        "date": 1695115549054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.653,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 97.37342170000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.5651175,
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
          "id": "3a81908788f289729a93af20c4b59d58049c3a9b",
          "message": "Set timeout for benchmark jobs and expose mountpoint logs when failing. (#528)\n\nWe have seen multiple timeouts from the benchmark recently and the default\n6 hours timeout is too long. We should be able to fail faster because\nwe know how long each benchmark should be running from the job definitions.\n\nWe also want to get mountpoint logs from the failed job so that we can\ninvestigate into the problem.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-09-21T17:04:19Z",
          "tree_id": "6365490ca6e8b2edfad85917790e1b813fc23489",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a81908788f289729a93af20c4b59d58049c3a9b"
        },
        "date": 1695318394893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.922,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.188342,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 91.60070859999999,
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
          "id": "c722533103716a9311b2feba4a149ec15df732f9",
          "message": "Update CRT submodules (#529)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix mountpoint-s3-crt after CRT update\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-09-22T07:13:05Z",
          "tree_id": "299ed89f127660cbec1c883119b2acec664e08bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c722533103716a9311b2feba4a149ec15df732f9"
        },
        "date": 1695369309579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.066,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.437,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.5687128,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.17976909999999,
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
          "id": "3696a0ee645abf9872e966376bcb36be173598b8",
          "message": "Bump version of mountpoint-s3 to v1.0.2 (#530)\n\n* Bump version of mountpoint-s3 to v1.0.2\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added recommended sentence phrasing in changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Updated changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed CRT update from changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Re added CRT submodule update to changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Rephrased the sentence of CRT update\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-22T16:26:53Z",
          "tree_id": "3ae89d8f025570ebf039a7a4853dabf5237507f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3696a0ee645abf9872e966376bcb36be173598b8"
        },
        "date": 1695402253635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.104,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.535,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.66911879999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.6390938,
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
          "id": "5383dd7102c7a9b1130c09870b0f3d881e7d8c9d",
          "message": "ust added ##Unreleased section as described in the Cookbook. (#531)\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-25T14:30:40Z",
          "tree_id": "b71530609561e5872890c4cd08d33c0ce339f1fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5383dd7102c7a9b1130c09870b0f3d881e7d8c9d"
        },
        "date": 1695654272736,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.285,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.102,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.613,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.8351156,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.1119013,
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
          "id": "63e4a7485a6189c039680a29f79ae83dba072d1f",
          "message": "Correct region warning when endpoint url provided (#535)\n\n* Corrected the warn message condition for region detection\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added test for documenting endpoint_url argument behaviour\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the assert for signing region to document it\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-26T09:10:40Z",
          "tree_id": "bc9516802c3f6e4bd9f951908b280d1833ea9aa5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63e4a7485a6189c039680a29f79ae83dba072d1f"
        },
        "date": 1695721593129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.084,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.088,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 72.48456440000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.73293129999999,
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
          "id": "9d141b16dfc59751bf62ba3862f391bd54b47975",
          "message": "Release new crate versions (#536)\n\nIt's been 3 months, and I want to get #511 out, so this change bundles\nup all the changes to all 3 crates. The changes to the two CRT crates\nprobably aren't strictly breaking changes, but I haven't inspected the\nCRT changelogs closely enough to be sure.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-09-26T20:19:12Z",
          "tree_id": "f464b4d0718825bea14f7067bc8f78563352b4d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d141b16dfc59751bf62ba3862f391bd54b47975"
        },
        "date": 1695761806820,
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
            "value": 1.092,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.217,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.9906545,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 73.1137447,
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
          "id": "502ea1074eaeeb9a2255e262488754b345911e6c",
          "message": "Update vendored fuser to sync with upstream fuser (#538)\n\n* Update vendored fuser to 174a807\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Updated the version of fuser\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the updated mountpoint-s3-client and mountpoint-s3-crt versions\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Reverting abi change\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-09-27T16:47:56Z",
          "tree_id": "f3ff3a09365c91b04faf79462e51ecf40bae3da6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/502ea1074eaeeb9a2255e262488754b345911e6c"
        },
        "date": 1695835500397,
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
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.513,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 85.3779948,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.0686558,
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
          "id": "73328cc64a2dbca78e879730d4d264aedd881c60",
          "message": "Silence unnecessary-cast clippy error on linux arm64 (#539)\n\nOn linux arm64 `::libc::c_char` (returned by `aws_log_subject_name`) is defined as `u8`,\nso a cast to `u8` is flagged as unnecessary by clippy, but it is required on other platforms.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-09-28T17:55:20Z",
          "tree_id": "a0ce5d536b517b256bd659209ff23308db318e09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73328cc64a2dbca78e879730d4d264aedd881c60"
        },
        "date": 1695925951091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.92,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 79.2489662,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.7403348,
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
          "id": "16efe55c27781f8a8728491b10d5040a492bd014",
          "message": "Update CONFIGURATION.md to mention HTTPS endpoint explicitly (#541)\n\nSome users reached out to clarify if mountpoint-s3 will use HTTPS or HTTP to access Amazon S3. By updating this documentation, this is mentioned and can be found when performing text searches, etc..\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-05T13:50:44Z",
          "tree_id": "8490834445020a8c4d96e10826752bd2707a0fe3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/16efe55c27781f8a8728491b10d5040a492bd014"
        },
        "date": 1696515995093,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.148,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.17,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.3471138,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 118.88460979999999,
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
          "id": "9db1d24904173d720ab2a79dd3549d502032bf43",
          "message": "Improve the instructions to add benchmark files manually (#543)\n\n* Improved the instructions to add benchmark files manually in doc/BENCHMARKING.md\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added all the steps for creating benchmark files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected job name\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed filename argument to create directory\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* corrected the recommendations\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added mount-dir variable\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Corrected the ordering\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary space\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-10-16T20:35:13Z",
          "tree_id": "0c90ff1efcdaaa4b24c6f1d2a0ac44073a7a5bea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9db1d24904173d720ab2a79dd3549d502032bf43"
        },
        "date": 1697490718276,
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
            "value": 1.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.269,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 116.2393625,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 100.39361170000001,
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
          "id": "8490e8b8b4a0e5bbc71f6bdeb914cf75c4cc8580",
          "message": "Introduce new abstraction between the prefetcher and GetObject calls (#552)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-16T21:28:27Z",
          "tree_id": "75fd1405c73e55c7b7d4c3f0084bc2047d83e507",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8490e8b8b4a0e5bbc71f6bdeb914cf75c4cc8580"
        },
        "date": 1697493996364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.944,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 84.05870809999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.3162143,
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
          "id": "7e9471129f456ee47b2563b009e611688f94a66b",
          "message": "Refactor signing configuration (#545)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-10-16T22:29:45Z",
          "tree_id": "723ea808ebf4bb0d4f87afe83be35cb0aea4497f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e9471129f456ee47b2563b009e611688f94a66b"
        },
        "date": 1697497511969,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.911,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.771945,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.7174957,
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
          "id": "a50f1caa82caa872ade6520127a47757320b3208",
          "message": "Implement prefer_s3 toggle in mountpoint-s3::fs::CacheConfig (#547)\n\nThis plumbs in checks for if the filesystem should maintain strong consistency for operations like open.\nThere is no way to configure mountpoint-s3 itself to relax the consistency model - this change only impacts internals.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-17T15:38:49Z",
          "tree_id": "8c62156f996849c6bf9a0687a4d8d3ae8e975ce4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a50f1caa82caa872ade6520127a47757320b3208"
        },
        "date": 1697559094702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.07,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.122,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.50825309999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.4492492,
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
          "id": "f58dbc52fec09394ee60d285bec1c3e082f06391",
          "message": "Allow seeking within a prefetch stream (#556)\n\n* Allow seeking forwards within the prefetch stream\n\nRight now we reset the prefetcher any time it seeks forwards, even if\nthe distance it's seeking could be handled by inflight requests (in the\nworst case, the bytes are already in our buffers, and we just throw them\naway). That's expensive and slow!\n\nThis change allows us to seek forwards a limited distance into the\nprefetch stream. When we see a seek of an acceptable distance, we\nfast-forward through the stream to the desired target offset, dropping\nthe skipped bytes on the floor. We enforce a maximum seek distance,\nwhich is a trade-off between streaming a lot of unnecessary bytes versus\nan extra request's latency. I haven't put any careful thought into the\nnumber.\n\nThis commit also sets us up to support backwards seeking, which will\ncome in the future.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Allow seeking backwards within a prefetch stream\n\nLinux asynchronous readahead confuses our prefetcher by sometimes making\nthe stream appear to go backwards, even though the customer is actually\njust reading sequentially (#488). The problem is that with parallel FUSE\nthreads, the two asynchronous read operations can arrive to the\nprefetcher out of order.\n\nThis change allows us to tolerate a little bit of backwards seeking in a\nprefetch stream. We keep around a little bit of previously read data and\ncan reload it in the event that a seek goes backwards. We do this by\ncreating a fake new request containing the rewound bytes, so that the\nexisting read logic will pick them up. I chose an arbitrary max for the\nbackwards seek buffer, big enough to handle Linux readahead.\n\nThis should fix the readahead issue: in my testing, I no longer saw slow\nsequential reads, and the logs confirmed this seeking logic was being\ntriggered in both directions (forwards and backwards), consistent with\nthe readahead requests sometimes arriving out of order.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix Shuttle tests with new request size logic\n\nThe old test was hiding a bug because it used a hard coded part size of\n8MB regardless of what the client used. #552 changed that and now this\ntest runs out of memory a lot because it degrades to doing 1 byte\nrequests. I don't think it's worth playing with the logic because it\nrequires a weird config to get there, so just fix the test.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-18T08:46:49Z",
          "tree_id": "33d924b57855d7830f4a641f426d299c30db9aa4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f58dbc52fec09394ee60d285bec1c3e082f06391"
        },
        "date": 1697621338084,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.737,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.478888,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 101.10651390000001,
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
          "id": "4159cc4e8cd121cd1e7f7f561d00b572635fd2d5",
          "message": "Improve clarity of LOGGING.md for `--log-directory` argument (#558)\n\n* Improve clarity of LOGGING.md for `--log-directory` argument\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add extra mention of `mount-s3` for arguments after we mention `journalctl`\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-18T08:48:02Z",
          "tree_id": "42dc7ccfca0cdce8c68535b69a7cd6aaf3608f42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4159cc4e8cd121cd1e7f7f561d00b572635fd2d5"
        },
        "date": 1697621348705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.85,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.7923706,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.7772378,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}