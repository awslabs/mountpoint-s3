window.BENCHMARK_DATA = {
  "lastUpdate": 1727372871904,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "9542728630fc61d316cb1772662a98d649848cb4",
          "message": "Fix mountpoint-s3-crt-sys build (#1011)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-12T16:53:30Z",
          "tree_id": "19cc4274eef18a10240dd5ffaac764d23afd7193",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9542728630fc61d316cb1772662a98d649848cb4"
        },
        "date": 1726161609060,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.837,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.884,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.3919079,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.1326846,
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
          "id": "abae870d6b3230c5759c7b5876378258ff8c746c",
          "message": "Add tests for network interface configuration in mountpoint-s3-client (#1009)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T11:01:59Z",
          "tree_id": "c6a017662cd84259fc7d367d52e3c949f2fe1bde",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/abae870d6b3230c5759c7b5876378258ff8c746c"
        },
        "date": 1726226846945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.811,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.026,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6907545,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9001956,
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
          "id": "bb42045080c25286f8f544c9bd2184124d11b0ee",
          "message": "Remove multi-NIC feature flag, add documentation (#1014)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-13T13:05:58Z",
          "tree_id": "c1bd0ce3c2f2ebe9c158425e15e87b3d31c0d306",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bb42045080c25286f8f544c9bd2184124d11b0ee"
        },
        "date": 1726234326319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.048,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.817,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.32,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.612179900000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8695611,
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
          "id": "9ed8b6243f4511e2013b2f4303a9197c3ddd4071",
          "message": "Release 1.9.0 (#1016)\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-09-13T13:44:17Z",
          "tree_id": "74c50d58f8bd92175dae44d35c32b1aac022a675",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9ed8b6243f4511e2013b2f4303a9197c3ddd4071"
        },
        "date": 1726236615665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.838,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.926,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.947248199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.8609998,
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
          "id": "720effa8219edf730fd5dfeacaa7c34dd866373b",
          "message": "Enable backpressure in mock-mount-s3 binary (#1017)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-17T09:50:27Z",
          "tree_id": "a4320e58ec56f7edd55fd102859901cf215d2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/720effa8219edf730fd5dfeacaa7c34dd866373b"
        },
        "date": 1726568124504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.852,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.259,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.837736099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.427192400000001,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "ba23586e6defdd5621adb3b1c213d0793af2ad23",
          "message": "Update CRT submodules to latest releases (#1019)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n* Update CHANGELOG for CRT related crates\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2024-09-18T11:56:57Z",
          "tree_id": "576c8eb0b0ab03483414be62c3a170f12d37fb7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba23586e6defdd5621adb3b1c213d0793af2ad23"
        },
        "date": 1726662245599,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.834,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.593,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.0515909,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.2796936,
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
          "id": "de6d145c2343b3bce433d1368c71f7eaf2f2d4d7",
          "message": "Add temporary way to configure amount of data prefetched per file handle (#1021)\n\n* Add temporary way to configure amount of data prefetched per file handle\n\nThis can be removed at any time.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update env_var_key to const\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add comment addressing smaller values\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-18T16:25:13Z",
          "tree_id": "0e524f065a0a6c469cef684e5a0582455f6d7dc0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/de6d145c2343b3bce433d1368c71f7eaf2f2d4d7"
        },
        "date": 1726678316364,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.832,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.087,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.517671199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1319809,
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
          "id": "f430895a096e3ebfe5d0fec59dece36910e133e6",
          "message": "Update CRT submodules to latest releases (#1024)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:45:10Z",
          "tree_id": "cbe85079414d977c48dc8bdcdcefe7569d7fe5ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f430895a096e3ebfe5d0fec59dece36910e133e6"
        },
        "date": 1726737097571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.867,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.56,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.9089054,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1094712,
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
          "id": "321a19f39d61867e459268b8daf184fd331cb39f",
          "message": "Fix bind command-line argument being ignored (#1020)\n\n* Fix bind argument being ignored\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix bad changelog message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-19T08:54:35Z",
          "tree_id": "b3827351b5353fa072b2a3909f4fc1c97a9cfc0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/321a19f39d61867e459268b8daf184fd331cb39f"
        },
        "date": 1726737580945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.816,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.901,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.812935900000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.968157099999999,
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
          "id": "7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549",
          "message": "Expose `s3.client.buffer_pool.forced_used` metric (#1025)\n\n* Expose `s3.client.buffer_pool.forced_used` metric\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-19T10:06:42Z",
          "tree_id": "b273d49ab7246b1f21f4737bb78966cd81af1217",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f7e7f0558c7d9fe62b6f21295d2df3a2a2ea549"
        },
        "date": 1726741999921,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.182,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.885,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.853,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.728323099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.1711604,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "9040066b18bf9922e45d61167939f9dc51b2cc16",
          "message": "Release 1.9.1 (#1026)\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-09-19T13:06:03Z",
          "tree_id": "a2a5ad204d297a4d408f8f3125f2a9af2ac1ae4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9040066b18bf9922e45d61167939f9dc51b2cc16"
        },
        "date": 1726752724417,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.845,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.93,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1058721,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9729819,
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
          "id": "ed8d96bac952836d27521c2fe652daa193370393",
          "message": "Update mock-mount-s3 to require '--max-throughput-gbps' argument (#1018)\n\n* Update mock-mount-s3 to require '--max-throughput-gbps' argument\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix error message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-24T09:39:04Z",
          "tree_id": "0e2974ec6587e7e9efc48451a7aa345c4f28637d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed8d96bac952836d27521c2fe652daa193370393"
        },
        "date": 1727172126749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.824,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.588,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.9033973,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.263778199999999,
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
          "id": "d62413d2b2a3bb65b507558561d5a6a2fe12dea1",
          "message": "Make cache writes async (#1029)\n\n* Make data_cache async\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Write cache block in background\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Revert unnecessary switch to async lock\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-24T10:21:15Z",
          "tree_id": "8deaeb476fcfb0c81585a7af9212dbceeb5b2312",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d62413d2b2a3bb65b507558561d5a6a2fe12dea1"
        },
        "date": 1727174835644,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.191,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.845,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 8.037,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.258649199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.7897736,
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
          "id": "5d5e0ac6ada23cb7075996e27be812681107b9b2",
          "message": "Add memory usage check to the CI (#1028)\n\n* Check resource utilization\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-24T12:46:21Z",
          "tree_id": "9469171f6d722d4ed6ad22f21c8f3825202c29ba",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d5e0ac6ada23cb7075996e27be812681107b9b2"
        },
        "date": 1727183610817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.037,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.838,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.883,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.9556068,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6092703,
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
          "id": "ed4735d71af0432491a361912da747ccaf39a21b",
          "message": "Add new 'mock' feature for 'mock-mount-s3' binary (#1030)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-24T14:52:05Z",
          "tree_id": "7e4a503beeb71640c42ae14d2533df831830337a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed4735d71af0432491a361912da747ccaf39a21b"
        },
        "date": 1727191084944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.861,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.409,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.818878,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.5738264,
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
          "id": "f92bf6c41e8b75f7e51770dc69afcc8332e33569",
          "message": "Add support for concurrent downloads to prefetch_benchmark example (#1022)\n\n* Fix prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add support for concurrent downloads to prefetch_benchmark example\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use CRT runtime\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-24T17:05:39Z",
          "tree_id": "f06430ab3fac7981589aacd6abaabcb9473e3d2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f92bf6c41e8b75f7e51770dc69afcc8332e33569"
        },
        "date": 1727199036182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.835,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.925,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.033441199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.2744596,
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
          "id": "a23665d1cdc982e74f5ba9f579930a85f2d7215f",
          "message": "Fix resource utilization check in the CI (#1033)\n\nOur CI workflows work by checking out the code from branch `gh-pages` to\nretrieve benchmark results from previous commits and compare them to values\nin the current run. However, the resource utilization check was done\nafter the benchmark result check which already has pulled in the branch\n`gh-pages` resulting in errors because the branch already exists. This\nchange fixes that.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-09-25T14:13:53Z",
          "tree_id": "1ebd4a233fc844aba04bdb98fac7cb539b994461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a23665d1cdc982e74f5ba9f579930a85f2d7215f"
        },
        "date": 1727275084504,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.045,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.877,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.973,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1788251,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1307425,
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
          "id": "7e279a3cb11028f9892a5c16cd2b760723f5e339",
          "message": "Add clarification on behavior tenet for ownership/permissions (#1031)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T09:42:07Z",
          "tree_id": "d258d475dc481d2ef6d5dcd457f55e01d98d68e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e279a3cb11028f9892a5c16cd2b760723f5e339"
        },
        "date": 1727345281502,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.835,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.129879599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.6998196,
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
          "id": "6cda3049e6b0d627748c16977c97c6e4f6241645",
          "message": "Allow PR checks to be run against any base branch (#1034)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-09-26T14:15:11Z",
          "tree_id": "46907ea02078b4486e23d70ff4cb9afec650ee5e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6cda3049e6b0d627748c16977c97c6e4f6241645"
        },
        "date": 1727362072715,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.863,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.383,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.128392300000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.2906535,
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
          "id": "0b7d0aed9c034a9e8d501cd7816ced3a7e07b587",
          "message": "Initial implementation of a shared cache on S3 Express (#1032)\n\n* Make cache block size user configurable (default 1024 KiB)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Require Clone on ObjectClient\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Implement initial draft of shared cache in Express\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Encode cache version and block size into keys\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Decouple DataCacheError from io::Error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve error handling\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add unit test\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Allow sharing the cache when mounting with different prefixes\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix flow-control window\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-09-26T17:20:21Z",
          "tree_id": "e2b577fe57ac429d8c8791faa962bd549b18f128",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b7d0aed9c034a9e8d501cd7816ced3a7e07b587"
        },
        "date": 1727372871371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.852,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.893,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.354981,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.0239989,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}