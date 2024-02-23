window.BENCHMARK_DATA = {
  "lastUpdate": 1708714463031,
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
          "distinct": true,
          "id": "18f774ef6162f8c8bca3bc6a5603ada8224d3045",
          "message": "Set default binary in mountpoint-s3 crate manifest (#753)\n\n* Set default run binary in mountpoint-s3 manifest\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Revert \"run the binary mount-s3 for benchamrks (#739)\"\n\nThis reverts commit d959640b34b0607be4ece382482f893a4b851069.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-15T16:47:33Z",
          "tree_id": "2075c9ab82c2ab82b1afb563f4fb5ed87d2aff72",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f774ef6162f8c8bca3bc6a5603ada8224d3045"
        },
        "date": 1708017425973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.246,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.1905733,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.81547909999999,
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
          "id": "77ee71d30d3085c33485b0b2d2b6f5074f69daec",
          "message": "Split up overwrite tests (#756)\n\nSeparate tests should make it easier to isolate workloads with race conditions.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-02-16T10:20:47Z",
          "tree_id": "7df93f376fafb25ba9e7ef228b4dd699a40692c0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77ee71d30d3085c33485b0b2d2b6f5074f69daec"
        },
        "date": 1708081943964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.745,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.53205109999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 73.29146109999999,
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
          "id": "dd901f33cdd8483f1988bd692f99cb66799c39ac",
          "message": "Fix issue preventing reads after flush on a file handle (#751)\n\n* Add test to reproduce bad descriptor issue\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix issue preventing reads after flush on a file handle\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Initialize file handle type at open\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ignore overwrite after read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add entry in CHANGELOG\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Raise logging of file handle type choice to debug\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix panic message in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure consistent behavior in read test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add test for write-only handle opening empty file and closing it\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry refering to eager file handle initialization\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:08:50Z",
          "tree_id": "1a591bbe417c980a79453bf6edfa2b4cf5e09422",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd901f33cdd8483f1988bd692f99cb66799c39ac"
        },
        "date": 1708097802054,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.442,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 93.2787843,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.0330528,
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
          "id": "1c00fd3084d59a8b72db2b4cf39785342ea87736",
          "message": "Release v1.4.1 (#758)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-16T15:58:36Z",
          "tree_id": "5b3ac2f4989cae21137add0b87ca6d59e3010be9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c00fd3084d59a8b72db2b4cf39785342ea87736"
        },
        "date": 1708099767555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.887,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.8144135,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.5770723,
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
          "id": "022f915f76535e517175a8e11291eedaeec92932",
          "message": "Add example for low-level CRT S3 client (#760)\n\nThis is just to have a simple benchmark for estimating entitlement when\nmost of the Rust datapath is out of the picture.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-19T17:07:30Z",
          "tree_id": "6b475fa94980471600e9c858b3f4b16043f1ad02",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/022f915f76535e517175a8e11291eedaeec92932"
        },
        "date": 1708363970315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.809,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.1949437,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.1748867,
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
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708528394975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.648,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.0749807,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 68.76308279999999,
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
          "id": "d136fb45d4f2540f36ee8e5038c0217b6222f3a0",
          "message": "Allow branches which names start with wf-changes/ to trigger workflows. (#765)\n\n* Allow branches which names start with wf-changes/ to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Only on push allow branches wf-changes/** to trigger workflows.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Remove extra `]`.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T14:47:17Z",
          "tree_id": "bf4c1eb6fd89bd8ec0fd527534040482d5c52ea1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d136fb45d4f2540f36ee8e5038c0217b6222f3a0"
        },
        "date": 1708528597615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.488,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.2571152,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.7909384,
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
          "id": "79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce",
          "message": "Fixing the benchmark tool to be customBiggerIsBetter.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:06:41Z",
          "tree_id": "223186e5f2570285810c699dd553261fd9878ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79dad0d2aff7bb5a7d68684e0ae4181f9ea264ce"
        },
        "date": 1708528819635,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.444,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 59.8887592,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.61385,
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
          "id": "f7278d7f2a209770579d876deb0785d9dae54777",
          "message": "Make caching benchmark do 10 iterations.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-21T15:37:23Z",
          "tree_id": "651de54e211fda4c7d9a02874fedfacd23e7d60e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f7278d7f2a209770579d876deb0785d9dae54777"
        },
        "date": 1708534505116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.13,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.117,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 57.231568100000004,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.883121700000004,
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
          "id": "6a67f78995879857cff5003ff900f5793d945abc",
          "message": "update caching docs (#763)\n\nSigned-off-by: andrewatamzn <158502535+andrewatamzn@users.noreply.github.com>",
          "timestamp": "2024-02-22T01:12:31Z",
          "tree_id": "65a84a5bd829b46bb56d2c3fd3afd4b4fbc08a5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a67f78995879857cff5003ff900f5793d945abc"
        },
        "date": 1708565847846,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.162,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.371,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.8969205,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.7937735,
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
          "id": "f005b582948894e38053679841fc64a9b70d516d",
          "message": "Checking the number of files before starting fio job for creating files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T15:40:59Z",
          "tree_id": "561230d5e2d4d99b9212690b82ed821fc14cef74",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f005b582948894e38053679841fc64a9b70d516d"
        },
        "date": 1708616843528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "time_to_first_byte_read",
            "value": 79.8358999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.5688284,
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
          "id": "6cf6753be2d7193ca551fd72114734fe151886a2",
          "message": "Checking the number of files before starting fio job for creating files\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-22T16:02:08Z",
          "tree_id": "c55bd481f52f5e9fec49276ffa3dd1b77f2788b6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cf6753be2d7193ca551fd72114734fe151886a2"
        },
        "date": 1708618412890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.271,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.05015159999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.887647799999996,
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
          "id": "53a99635e9a300df165bf87978f7bd701b1a021c",
          "message": "Just read 2GB when testing caching due to disk space.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-22T16:15:36Z",
          "tree_id": "5c1310deaaa6ac88b1682cd58d8b86332573c7c1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53a99635e9a300df165bf87978f7bd701b1a021c"
        },
        "date": 1708619225994,
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
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 77.9464428,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.2502546,
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
          "id": "718420bd4960e26af23d513b82721dfe0c31c362",
          "message": "Read up to 2GB of the file to cache it.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-22T17:00:57Z",
          "tree_id": "907ddc0079b87442f2ad046324444478a59853bd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/718420bd4960e26af23d513b82721dfe0c31c362"
        },
        "date": 1708621918511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.507,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 63.708529799999994,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 69.4514432,
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
          "id": "161c362bb584984903d547706367bddddb461cf3",
          "message": "Fix links in bug report template (#772)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-02-23T01:08:19Z",
          "tree_id": "2d63645277df79b68c58b30c319d09837a9ccb47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/161c362bb584984903d547706367bddddb461cf3"
        },
        "date": 1708652167142,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.142,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.551,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.0818157,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.20491159999999,
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
          "id": "4eed49b6e0ea74ccb4277421d955020d78aa23c1",
          "message": "Add benchmarks for S3 express one zone bucket\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-23T11:42:28Z",
          "tree_id": "1eb31090e878090faf5199fbac9293023ec23f16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4eed49b6e0ea74ccb4277421d955020d78aa23c1"
        },
        "date": 1708689207386,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.09,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.073,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 69.4791875,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.1098957,
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
          "id": "926524ce2244d9a8e3f86bbc81dcfafae8f3c94e",
          "message": "Add README notice on v1.4.0 bug (#780)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-02-23T14:09:00Z",
          "tree_id": "f28ce4c4598e2571dd720febbeb92ffdd155fd40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/926524ce2244d9a8e3f86bbc81dcfafae8f3c94e"
        },
        "date": 1708703209035,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.7,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.43281979999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.0682198,
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
          "id": "865966f401a9d9eff0eff1a11fcefdb97b8cdebb",
          "message": "Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-23T15:35:57Z",
          "tree_id": "7a4879827d315f231bf827afcf6eaaf0adac6577",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/865966f401a9d9eff0eff1a11fcefdb97b8cdebb"
        },
        "date": 1708703279356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.145,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 64.3110663,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 48.80016,
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
          "id": "8f1660f1ec8f95032b9a119c4fb38aa69f88a0e1",
          "message": "Changed the mode of file creation to create_only as it reduces the time it takes to run the benchmark\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2024-02-23T16:10:00Z",
          "tree_id": "f8befe30e45b6305b0ca5ab703ffd8ccb83cca07",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8f1660f1ec8f95032b9a119c4fb38aa69f88a0e1"
        },
        "date": 1708705274824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.442,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 60.6596161,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.5058729,
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
          "id": "2fd440ecf2f9a58d840986d9c153150632abd035",
          "message": "Adding benchmarks that use caching.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-02-23T18:42:11Z",
          "tree_id": "eb577495504390b45581ac76b37985bb8063bd88",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2fd440ecf2f9a58d840986d9c153150632abd035"
        },
        "date": 1708714462581,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.563,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 94.1626999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.818972200000005,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}