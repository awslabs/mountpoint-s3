window.BENCHMARK_DATA = {
  "lastUpdate": 1667583288745,
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
      }
    ]
  }
}