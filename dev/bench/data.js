window.BENCHMARK_DATA = {
  "lastUpdate": 1667838750519,
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
      }
    ]
  }
}