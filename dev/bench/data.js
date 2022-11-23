window.BENCHMARK_DATA = {
  "lastUpdate": 1669174673596,
  "repoUrl": "https://github.com/awslabs/s3-file-connector",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2ec3a27bed7883de488373caa0069f65811768a6",
          "message": "Fix missing permission",
          "timestamp": "2022-11-01T13:58:58Z",
          "tree_id": "9c0ce11ac9f94422402e27d0b3a562e5f30decbb",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2ec3a27bed7883de488373caa0069f65811768a6"
        },
        "date": 1667312137320,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 72554,
            "range": "± 12762",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 9299553519,
            "range": "± 1949379157",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 8188106273,
            "range": "± 1372572382",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": false,
          "id": "2ec3a27bed7883de488373caa0069f65811768a6",
          "message": "Fix missing permission",
          "timestamp": "2022-11-01T13:58:58Z",
          "tree_id": "9c0ce11ac9f94422402e27d0b3a562e5f30decbb",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2ec3a27bed7883de488373caa0069f65811768a6"
        },
        "date": 1667313274107,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 63426,
            "range": "± 4050",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2575355454,
            "range": "± 152183174",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2297846188,
            "range": "± 113849772",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "b28493d44c95f4df19695971924c82835aa2e95c",
          "message": "Move bench job to self-hosted runner",
          "timestamp": "2022-11-02T13:44:43Z",
          "tree_id": "51066163e75c2ae4096fd6d7ba137997aed8da06",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b28493d44c95f4df19695971924c82835aa2e95c"
        },
        "date": 1667397044263,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 68346,
            "range": "± 1113",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1203659675,
            "range": "± 217975352",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 918108402,
            "range": "± 3231499576",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lukernel@amazon.com",
            "name": "Luke Nelson",
            "username": "lukenels"
          },
          "committer": {
            "email": "lukernel@amazon.com",
            "name": "Luke Nelson",
            "username": "lukenels"
          },
          "distinct": true,
          "id": "f59199b27f0419bcd2ded0d21da9a9f7ce6db02a",
          "message": "Add AsyncInputStream to connect async Read into CRT InputStream",
          "timestamp": "2022-11-03T14:30:42-07:00",
          "tree_id": "b4d01e126f6b03fdca5cd0775cc051945ba2b1cf",
          "url": "https://github.com/awslabs/s3-file-connector/commit/f59199b27f0419bcd2ded0d21da9a9f7ce6db02a"
        },
        "date": 1667511819471,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 59205,
            "range": "± 4218",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2674035045,
            "range": "± 238762162",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2313406390,
            "range": "± 72350376",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "44d5572c3bdfa2d3d9a6056c706a1063be9ca702",
          "message": "Change binary name back to s3-file-connector",
          "timestamp": "2022-11-04T13:36:03Z",
          "tree_id": "7ea96f1a6cb30f791b1d1dc93fcbe605e0426961",
          "url": "https://github.com/awslabs/s3-file-connector/commit/44d5572c3bdfa2d3d9a6056c706a1063be9ca702"
        },
        "date": 1667569670884,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 64383,
            "range": "± 5408",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2632047154,
            "range": "± 238600391",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2507559628,
            "range": "± 219724533",
            "unit": "ns/iter"
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
            "email": "djonesoa@amazon.com",
            "name": "Daniel Carl Jones",
            "username": "dannycjones"
          },
          "distinct": true,
          "id": "53b1ce432e2626f5a08102e8db82d0a6c56a64bb",
          "message": "Add quick instructions for building and using the connector",
          "timestamp": "2022-11-04T17:21:51Z",
          "tree_id": "a35fd8f89239f84deba28a095ad399dcff72fe97",
          "url": "https://github.com/awslabs/s3-file-connector/commit/53b1ce432e2626f5a08102e8db82d0a6c56a64bb"
        },
        "date": 1667583284145,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 59571,
            "range": "± 2272",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2584493026,
            "range": "± 336477606",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2439673882,
            "range": "± 144130554",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "d1403700cc978edc461c005f9725b6ab49414031",
          "message": "Fix typo",
          "timestamp": "2022-11-05T17:52:29-05:00",
          "tree_id": "d766be788136199dbbf032839783b970f3bfef49",
          "url": "https://github.com/awslabs/s3-file-connector/commit/d1403700cc978edc461c005f9725b6ab49414031"
        },
        "date": 1667689427835,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 59925,
            "range": "± 3071",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2813315985,
            "range": "± 268499155",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2295699490,
            "range": "± 176348359",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "737609a06dd39569eb5dcc78902e3f5818d795d8",
          "message": "Factor out async runtime",
          "timestamp": "2022-11-05T18:41:56-05:00",
          "tree_id": "1c17beb0652934f58bdee0e7908e272446493e45",
          "url": "https://github.com/awslabs/s3-file-connector/commit/737609a06dd39569eb5dcc78902e3f5818d795d8"
        },
        "date": 1667692408954,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 65020,
            "range": "± 5340",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2505537339,
            "range": "± 214991532",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2325753458,
            "range": "± 348035541",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "95ab7a3f0a77e89e5bb18a98bc38db4dcae9fc88",
          "message": "Sick new Clippy lints just dropped",
          "timestamp": "2022-11-05T18:41:26-05:00",
          "tree_id": "22e3d9dd90d004f6acbff5142d69f2719e8e45c5",
          "url": "https://github.com/awslabs/s3-file-connector/commit/95ab7a3f0a77e89e5bb18a98bc38db4dcae9fc88"
        },
        "date": 1667692418550,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 66560,
            "range": "± 5278",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 2585538693,
            "range": "± 278717067",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2326695731,
            "range": "± 318388307",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "4e610f7d0d2a50b487864f7e922b254cfe32099c",
          "message": "Factor out async runtime",
          "timestamp": "2022-11-05T19:06:31-05:00",
          "tree_id": "8eb966129708d6efb9a8ba04eb8dc5bad6c13531",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4e610f7d0d2a50b487864f7e922b254cfe32099c"
        },
        "date": 1667694132074,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 79565,
            "range": "± 19189",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 5821007266,
            "range": "± 1434163139",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 5849135915,
            "range": "± 972027452",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": false,
          "id": "4e610f7d0d2a50b487864f7e922b254cfe32099c",
          "message": "Factor out async runtime",
          "timestamp": "2022-11-05T19:06:31-05:00",
          "tree_id": "8eb966129708d6efb9a8ba04eb8dc5bad6c13531",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4e610f7d0d2a50b487864f7e922b254cfe32099c"
        },
        "date": 1667694815488,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 66526,
            "range": "± 10268",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 4842030912,
            "range": "± 1058100879",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 4582619141,
            "range": "± 1071307970",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "70d38df8b1d6af2e188652d7d8c911f5767835e9",
          "message": "Add some Shuttle tests for prefetching\n\nThis is just a rough first pass. We'd like to also have Shuttle\ntests for `inode.rs`, tests that fail requests, etc.",
          "timestamp": "2022-11-05T19:20:17-05:00",
          "tree_id": "7f9bd8ff023b05022e4b7fbc2a0dc466ab54e63f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/70d38df8b1d6af2e188652d7d8c911f5767835e9"
        },
        "date": 1667694982156,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 78209,
            "range": "± 7587",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 7845039797,
            "range": "± 569056462",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 7818275137,
            "range": "± 2549171148",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "29b4b22a7a4777631184a1c399c2156053a76f0d",
          "message": "Add some Shuttle tests for prefetching\n\nThis is just a rough first pass. We'd like to also have Shuttle\ntests for `inode.rs`, tests that fail requests, etc.",
          "timestamp": "2022-11-05T19:24:05-05:00",
          "tree_id": "2ccc1b69d0c4197d789c217646a42c003bc16097",
          "url": "https://github.com/awslabs/s3-file-connector/commit/29b4b22a7a4777631184a1c399c2156053a76f0d"
        },
        "date": 1667695327954,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 88350,
            "range": "± 12681",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 8499989100,
            "range": "± 1812217048",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 8045782902,
            "range": "± 1413930385",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "committer": {
            "email": "bornholt@cs.utexas.edu",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": false,
          "id": "29b4b22a7a4777631184a1c399c2156053a76f0d",
          "message": "Add some Shuttle tests for prefetching\n\nThis is just a rough first pass. We'd like to also have Shuttle\ntests for `inode.rs`, tests that fail requests, etc.",
          "timestamp": "2022-11-05T19:24:05-05:00",
          "tree_id": "2ccc1b69d0c4197d789c217646a42c003bc16097",
          "url": "https://github.com/awslabs/s3-file-connector/commit/29b4b22a7a4777631184a1c399c2156053a76f0d"
        },
        "date": 1667695939397,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 71761,
            "range": "± 7528",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 3032752300,
            "range": "± 166412041",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 2690770352,
            "range": "± 408115380",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "b0daf2a5d94aab4d510fecbbaa0d218376544561",
          "message": "Move bench job to self-hosted runner",
          "timestamp": "2022-11-07T16:25:08Z",
          "tree_id": "f610e225e02094c9db2c2a2b41528983616b564c",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b0daf2a5d94aab4d510fecbbaa0d218376544561"
        },
        "date": 1667838749366,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 72462,
            "range": "± 1158",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1207069868,
            "range": "± 362262301",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 848239297,
            "range": "± 48699028",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": false,
          "id": "b0daf2a5d94aab4d510fecbbaa0d218376544561",
          "message": "Move bench job to self-hosted runner",
          "timestamp": "2022-11-07T16:25:08Z",
          "tree_id": "f610e225e02094c9db2c2a2b41528983616b564c",
          "url": "https://github.com/awslabs/s3-file-connector/commit/b0daf2a5d94aab4d510fecbbaa0d218376544561"
        },
        "date": 1667840409301,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 69945,
            "range": "± 995",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1183195800,
            "range": "± 355138712",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 961800672,
            "range": "± 848568707",
            "unit": "ns/iter"
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
          "id": "e6ee42a9fe4b9d8b1bb581d4a82a63c0ff37c9b2",
          "message": "Fix build on macOS",
          "timestamp": "2022-11-07T11:39:44-06:00",
          "tree_id": "bfecce3a0960c0b111baf4526ffd85621df998e8",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e6ee42a9fe4b9d8b1bb581d4a82a63c0ff37c9b2"
        },
        "date": 1667843174785,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 70156,
            "range": "± 1101",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1075045061,
            "range": "± 3225279076",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 966299862,
            "range": "± 109651349",
            "unit": "ns/iter"
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
          "distinct": false,
          "id": "e6ee42a9fe4b9d8b1bb581d4a82a63c0ff37c9b2",
          "message": "Fix build on macOS",
          "timestamp": "2022-11-07T11:39:44-06:00",
          "tree_id": "bfecce3a0960c0b111baf4526ffd85621df998e8",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e6ee42a9fe4b9d8b1bb581d4a82a63c0ff37c9b2"
        },
        "date": 1667851682742,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 68912,
            "range": "± 1415",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1034388205,
            "range": "± 277325823",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 991729211,
            "range": "± 171461092",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2b2a6f21b5e492952673ca1319a520431e807c8d",
          "message": "Swap arguments order and validate mount point first",
          "timestamp": "2022-11-08T10:39:24Z",
          "tree_id": "3ed8a7dc74fff8d1e31455561ebba6221aed36c3",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2b2a6f21b5e492952673ca1319a520431e807c8d"
        },
        "date": 1667904355813,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 67260,
            "range": "± 2079",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1091692263,
            "range": "± 253521270",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 912032459,
            "range": "± 108594748",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "fa6fb38c2948cf28d5d4595b7e92d5999c05fbdb",
          "message": "Swap arguments order and validate mount point first",
          "timestamp": "2022-11-08T10:45:17Z",
          "tree_id": "5559f1233d1c5c75d63c5b3da945ae48f59586d4",
          "url": "https://github.com/awslabs/s3-file-connector/commit/fa6fb38c2948cf28d5d4595b7e92d5999c05fbdb"
        },
        "date": 1667905090219,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 75228,
            "range": "± 1510",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1126922879,
            "range": "± 87583201",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 926696049,
            "range": "± 149359069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "151225c88567f3f662c6650d0b3bcccac0026b22",
          "message": "Add some cli tests",
          "timestamp": "2022-11-08T11:56:43Z",
          "tree_id": "ceb44015d5bfc2744b1116b17ba5d099f3deee4f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/151225c88567f3f662c6650d0b3bcccac0026b22"
        },
        "date": 1667908965516,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 71973,
            "range": "± 2387",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1237085707,
            "range": "± 890576850",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 998607667,
            "range": "± 187009916",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": false,
          "id": "151225c88567f3f662c6650d0b3bcccac0026b22",
          "message": "Add some cli tests",
          "timestamp": "2022-11-08T11:56:43Z",
          "tree_id": "ceb44015d5bfc2744b1116b17ba5d099f3deee4f",
          "url": "https://github.com/awslabs/s3-file-connector/commit/151225c88567f3f662c6650d0b3bcccac0026b22"
        },
        "date": 1667913510830,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 74368,
            "range": "± 1251",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1112426207,
            "range": "± 186885637",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 857340748,
            "range": "± 83282528",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "1d521cbddbacdeb9529a33785b910f376b296e1e",
          "message": "Use smaller io size",
          "timestamp": "2022-11-08T14:38:36Z",
          "tree_id": "80208a36a9e294ffef103f5353eac62004050ced",
          "url": "https://github.com/awslabs/s3-file-connector/commit/1d521cbddbacdeb9529a33785b910f376b296e1e"
        },
        "date": 1667918749530,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 74876,
            "range": "± 2279",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read",
            "value": 1063454008,
            "range": "± 255731850",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_delayed_start",
            "value": 1097350801,
            "range": "± 65775245",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_direct_io",
            "value": 907584472,
            "range": "± 70718746",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "8b8b8d349299beb1d7e2f67799a574c9fe02e406",
          "message": "Use smaller io size",
          "timestamp": "2022-11-08T14:56:57Z",
          "tree_id": "cdf6a7a95e0fa62ac47987c9271af5f5737afb16",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8b8b8d349299beb1d7e2f67799a574c9fe02e406"
        },
        "date": 1667919988221,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 69627,
            "range": "± 2203",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read",
            "value": 1170707010,
            "range": "± 251796180",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_delayed_start",
            "value": 1096763355,
            "range": "± 82045118",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_direct_io",
            "value": 985249494,
            "range": "± 150676175",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/random_read",
            "value": 9343052769,
            "range": "± 509703173",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "8f899075bac7bae17602053c934a806f7cd35985",
          "message": "Add benchmark for random read from a small file",
          "timestamp": "2022-11-08T18:09:32Z",
          "tree_id": "0010f69709e4733ef30e619c347b328fb0d319a2",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8f899075bac7bae17602053c934a806f7cd35985"
        },
        "date": 1667931541291,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 76322,
            "range": "± 3233",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read",
            "value": 1052286392,
            "range": "± 196481486",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_delayed_start",
            "value": 1068080306,
            "range": "± 113581600",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_direct_io",
            "value": 906628912,
            "range": "± 102803667",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/random_read_small_file",
            "value": 1384086543,
            "range": "± 205573210",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/random_read_big_file",
            "value": 4709380897,
            "range": "± 498772781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "97e9d57813240816f039a6bd212ea0cd3762a53f",
          "message": "Add multiple threads read benchmark",
          "timestamp": "2022-11-09T13:05:55Z",
          "tree_id": "0a83df3826e4d69df6d9c936cc7d1668200a06b1",
          "url": "https://github.com/awslabs/s3-file-connector/commit/97e9d57813240816f039a6bd212ea0cd3762a53f"
        },
        "date": 1667999713866,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 74937,
            "range": "± 1465",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "fa2ffd6e341f559b16bc7ffe3a648b46dccfb0bf",
          "message": "Add multiple threads read benchmark",
          "timestamp": "2022-11-09T13:30:05Z",
          "tree_id": "b4ee79d700f84684da120a127d30e92f69f43099",
          "url": "https://github.com/awslabs/s3-file-connector/commit/fa2ffd6e341f559b16bc7ffe3a648b46dccfb0bf"
        },
        "date": 1668001034310,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 70162,
            "range": "± 1157",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read",
            "value": 1185792443,
            "range": "± 198722755",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_four_threads",
            "value": 1963356615,
            "range": "± 425139963",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_delayed_start",
            "value": 1054885390,
            "range": "± 194018159",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/sequential_read_direct_io",
            "value": 916484959,
            "range": "± 84286536",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/random_read_small_file",
            "value": 1221796434,
            "range": "± 175325394",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/random_read_big_file",
            "value": 4084748574,
            "range": "± 197665674",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "bcd7056caa3bce9cf631ff592623e0595ccb07ce",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T11:33:17Z",
          "tree_id": "330d69145f89e00cdaeab077887d0c4c0497f0b6",
          "url": "https://github.com/awslabs/s3-file-connector/commit/bcd7056caa3bce9cf631ff592623e0595ccb07ce"
        },
        "date": 1668167402016,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 848.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 568.89,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 839.57,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1.2229,
            "unit": "GiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.8812,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.3885,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "141920db672b2a4ebb89a39fab73a3cb7ce12f3b",
          "message": "Don't run reftests with asan",
          "timestamp": "2022-11-11T13:54:08Z",
          "tree_id": "16c9200b13c591c6e5f84a467bf2f0558b90acc9",
          "url": "https://github.com/awslabs/s3-file-connector/commit/141920db672b2a4ebb89a39fab73a3cb7ce12f3b"
        },
        "date": 1668175127532,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 72233,
            "range": "± 2170",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1005249162,
            "range": "± 69690892",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 946205536,
            "range": "± 101725575",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "4009e9b4b9c7002e1390ed93abf62af628be01e6",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T13:51:29Z",
          "tree_id": "314617aadc9d37ee67e72755adee92114e8baa44",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4009e9b4b9c7002e1390ed93abf62af628be01e6"
        },
        "date": 1668175205376,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 968.91,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 575.16,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1000.2,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1202.7904,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.5693,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5026,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": false,
          "id": "4009e9b4b9c7002e1390ed93abf62af628be01e6",
          "message": "Collect bench result as throughput instead of ns/iter",
          "timestamp": "2022-11-11T13:51:29Z",
          "tree_id": "314617aadc9d37ee67e72755adee92114e8baa44",
          "url": "https://github.com/awslabs/s3-file-connector/commit/4009e9b4b9c7002e1390ed93abf62af628be01e6"
        },
        "date": 1668176035859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 780.51,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 513,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 900.98,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 548.02,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.8713,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.2662,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "83a1585ef46d06a9785b4c1eed308cc4b0931f83",
          "message": "Remove proptests from asan",
          "timestamp": "2022-11-11T14:25:28Z",
          "tree_id": "d0773afec7ed93bafc5e8b9cff9384b2da79691a",
          "url": "https://github.com/awslabs/s3-file-connector/commit/83a1585ef46d06a9785b4c1eed308cc4b0931f83"
        },
        "date": 1668177114873,
        "tool": "cargo",
        "benches": [
          {
            "name": "event_loop_future",
            "value": 73491,
            "range": "± 2046",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file",
            "value": 1030135962,
            "range": "± 345969817",
            "unit": "ns/iter"
          },
          {
            "name": "read_file_benchmark/read_file_direct_io",
            "value": 872060183,
            "range": "± 117440179",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "08361626362fdec52e26fc2920121a1f4e8955fe",
          "message": "Really remove proptests from asan",
          "timestamp": "2022-11-11T15:07:02Z",
          "tree_id": "88bd3ca8451a855459f540a842903c3f92bb5218",
          "url": "https://github.com/awslabs/s3-file-connector/commit/08361626362fdec52e26fc2920121a1f4e8955fe"
        },
        "date": 1668179825013,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 813.82,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 583.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 901.43,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1092.5056,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.6673,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5049,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "440f4c62b0eb6555a488bc6016f1b972f1dd7cdc",
          "message": "Don't run reftests or proptests with asan",
          "timestamp": "2022-11-11T16:01:55Z",
          "tree_id": "88bd3ca8451a855459f540a842903c3f92bb5218",
          "url": "https://github.com/awslabs/s3-file-connector/commit/440f4c62b0eb6555a488bc6016f1b972f1dd7cdc"
        },
        "date": 1668183541693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 865.73,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 521.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 949.97,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1199.2064,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.4446,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.2179,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "ce8b93aa3948b9e9e3fcf83b6cdf504174c90c6e",
          "message": "Put throughput target for benchmark",
          "timestamp": "2022-11-11T17:07:46Z",
          "tree_id": "d1fb45e68ac95b8450719ad0310a68c86aad7daa",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ce8b93aa3948b9e9e3fcf83b6cdf504174c90c6e"
        },
        "date": 1668186998390,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 839.72,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 611.73,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1022.8,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 788.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 8.397,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.3083,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "distinct": true,
          "id": "2afe112f2427689692b7916c3df31ed2c848f9a2",
          "message": "Put throughput target for benchmark",
          "timestamp": "2022-11-11T17:27:24Z",
          "tree_id": "660907fb4b11ef36c210a7e1ec5c59870d0a8e19",
          "url": "https://github.com/awslabs/s3-file-connector/commit/2afe112f2427689692b7916c3df31ed2c848f9a2"
        },
        "date": 1668188290905,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 854.81,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 514.68,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 908.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1108.1728,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.192,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.5573,
            "unit": "MiB/s"
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
          "id": "8381226d6b2e587cb08f26d266938302ca3ce396",
          "message": "Update vendored fuser to bb3c123",
          "timestamp": "2022-11-11T17:46:19Z",
          "tree_id": "93895244d8d34dc333bcb5d504cc3dc7e211cb68",
          "url": "https://github.com/awslabs/s3-file-connector/commit/8381226d6b2e587cb08f26d266938302ca3ce396"
        },
        "date": 1668189287148,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 925.26,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 593.33,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 992.81,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1314.7136,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.3785,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.6107,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "660af80372ae5255b93a2b8d9d3c35fea224fd7f",
          "message": "Create a separate ci for benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/17/commits/660af80372ae5255b93a2b8d9d3c35fea224fd7f"
        },
        "date": 1668513504774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 907.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 526.74,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 966.35,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 932.46,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 9.5053,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.333,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "cc73afe754d4bcff89b145462d5626d3d02800d2",
          "message": "Create a separate ci for benchmark",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/17/commits/cc73afe754d4bcff89b145462d5626d3d02800d2"
        },
        "date": 1668605311993,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 961.19,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 615.22,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1034.4448,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1250.6112,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.4067,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.4118,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "47974768+monthonk@users.noreply.github.com",
            "name": "monthonk",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3253a10262bc2504807b23dfdc4729016bef8747",
          "message": "Merge pull request #17 from awslabs/bench-ci\n\nCreate a separate ci for benchmark",
          "timestamp": "2022-11-16T14:36:06Z",
          "tree_id": "bf7fa9424f78c0bb0bb316436ef17fb232c37ba1",
          "url": "https://github.com/awslabs/s3-file-connector/commit/3253a10262bc2504807b23dfdc4729016bef8747"
        },
        "date": 1668609877900,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 860.67,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 565.63,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 867.38,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1044.5824,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 8.1083,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.64,
            "unit": "MiB/s"
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
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "e257d71e4f9d69b5003d7d8d45e71377610a4734",
          "message": "Fixes for address sanitizer tests\n\ntrack_caller is unstable and seems to now be guarded behind a feature flag:\nhttps://github.com/rust-lang/rust/issues/74042\n\nWe also have one test for large objects that is very slow under ASan.",
          "timestamp": "2022-11-18T16:33:21-06:00",
          "tree_id": "8b35782ad26483106f06bd74f46de92b623c1217",
          "url": "https://github.com/awslabs/s3-file-connector/commit/e257d71e4f9d69b5003d7d8d45e71377610a4734"
        },
        "date": 1668811319750,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 999.05,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 613.12,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 915.66,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1309.2864,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.0325,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.1935,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "committer": {
            "email": "43651355+jorajeev@users.noreply.github.com",
            "name": "Rajeev Joshi",
            "username": "jorajeev"
          },
          "distinct": true,
          "id": "9708447929e726a6597e0c082c1e8ce8849aec6d",
          "message": "Added failing test",
          "timestamp": "2022-11-19T02:16:24Z",
          "tree_id": "f3762a09ea82e0f14935fae26c9c2731d3f4e5e0",
          "url": "https://github.com/awslabs/s3-file-connector/commit/9708447929e726a6597e0c082c1e8ce8849aec6d"
        },
        "date": 1668824860910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 439.44,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 532.66,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 905.38,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1057.0752,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.5746,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 2.0319,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "dbf188dee10985b0fdf2352a5e0f0fccc6611aa3",
          "message": "Increase IO size for benchmark to 20GB",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/20/commits/dbf188dee10985b0fdf2352a5e0f0fccc6611aa3"
        },
        "date": 1669136942111,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1018.4,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 608.88,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 840.37,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 1199.0016,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.1511,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 1.9878,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "committer": {
            "name": "awslabs",
            "username": "awslabs"
          },
          "id": "2bef171c6e7586f07b692ee0943291ab9f75a2ae",
          "message": "Increase IO size for benchmark to 20GB",
          "timestamp": "2022-11-08T13:28:21Z",
          "url": "https://github.com/awslabs/s3-file-connector/pull/20/commits/2bef171c6e7586f07b692ee0943291ab9f75a2ae"
        },
        "date": 1669138454811,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1711.616,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1397.6576,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1470.2592,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2830.0288,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2158.592,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 7.1176,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.72,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.co.uk",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "jamesbornholt@gmail.com",
            "name": "James Bornholt",
            "username": "jamesbornholt"
          },
          "distinct": true,
          "id": "ead23df60bacb9d8ff52f5c417bd7f8256d59789",
          "message": "Add multiple threads read with direct io benchmark",
          "timestamp": "2022-11-22T21:17:44-06:00",
          "tree_id": "b7a51b2be5954303bd48e46efd83d7ca15e18e71",
          "url": "https://github.com/awslabs/s3-file-connector/commit/ead23df60bacb9d8ff52f5c417bd7f8256d59789"
        },
        "date": 1669174672083,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "fs/sequential_read",
            "value": 1445.1712,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads",
            "value": 1361.8176,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_delayed_start",
            "value": 1591.9104,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_direct_io",
            "value": 2869.3504,
            "unit": "MiB/s"
          },
          {
            "name": "fs/sequential_read_four_threads_direct_io",
            "value": 2124.4928,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_small_file",
            "value": 6.5056,
            "unit": "MiB/s"
          },
          {
            "name": "fs/random_read_big_file",
            "value": 0.7,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}