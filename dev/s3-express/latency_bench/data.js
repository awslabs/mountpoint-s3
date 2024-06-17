window.BENCHMARK_DATA = {
  "lastUpdate": 1718641520759,
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
          "id": "fc60045f3358110a93b2b04e3852710b3f50020a",
          "message": "Revert s2n-tls submodule to v1.4.9 (#887)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-23T11:01:35Z",
          "tree_id": "ec57d7893129d834fa2038443052981554f517aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc60045f3358110a93b2b04e3852710b3f50020a"
        },
        "date": 1716463551068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.448,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.728,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.7159632,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.6138764,
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
          "id": "d750b2aa9f1304502cedc852fc8b54e6af802db3",
          "message": "Small refactors of inode code (#888)\n\n* Remove process ID from Inode\n\nThe entire check happens in S3Filesystem anyway, so there's no need for\nthe actual Inode to be aware of the PID.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Normalize WriteHandle/ReadHandle in inode.rs\n\nThere's no reason for start_writing to exist since it's always called\nimmediately on the result of write. Once that change is made, it looks\nhelpful to have a symmetric ReadHandle for the lifecycle of reads, even\nthough it doesn't do much today.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Move more stuff off the Inode\n\n`inc_file_size` belongs on the write handle itself (you have to be\nwriting to increment the file size), and some other stuff here doesn't\nneed to be public.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-05-28T13:39:59Z",
          "tree_id": "72ad23a694c6477d8c1ae4e9e80d034ba8e8cdb6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d750b2aa9f1304502cedc852fc8b54e6af802db3"
        },
        "date": 1716905131766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.121,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.464,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.65,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.384585,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.0266735,
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
          "id": "cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759",
          "message": "Add hourly integration test run (#892)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-05-29T10:24:49Z",
          "tree_id": "df019ca2b8bae2920b00a08ec2e04e6f7bfd9cb1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cffd8f5f63f8bf009d26f48ffb3d9f3e0929b759"
        },
        "date": 1716979814484,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.479,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.317,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8569842,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9701417,
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
          "id": "036ed3bfeb2aec87de9b1717cfd63d4078d9c68f",
          "message": "Save dump files to S3 when tests are failing (#893)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-30T13:57:23Z",
          "tree_id": "84385b2029ab90bbd49aa606ba04d31a2222e741",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/036ed3bfeb2aec87de9b1717cfd63d4078d9c68f"
        },
        "date": 1717078962230,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.472,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.251,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.6676489,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.552646300000001,
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
          "id": "4525331e9bc4896ca983bcd1cd7bb01e1dbe8640",
          "message": "Save associated binary for core dump (#896)\n\n* Save associated binary for core dump\n\nTo be able to analyze the core dump we also need\nthe binary it was generated from. This adds a new\nscript for uploading the binary associated with the\ncore dump when tests are failing in the CI.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update core dump pattern\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-05-31T14:41:07Z",
          "tree_id": "3a6f3e6505b3c597bb40d98fdfe7953a5c51c906",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4525331e9bc4896ca983bcd1cd7bb01e1dbe8640"
        },
        "date": 1717168048964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.112,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.461,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.089,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.402,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.841204699999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.135459800000001,
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
          "id": "4ad9b8a15cd3eac48fb52e49c61936cdf577e32f",
          "message": "Add workflow_dispatch trigger for integration tests (#898)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-03T11:04:46Z",
          "tree_id": "e4c99cc9825a03601f04c2178bcf02f6a79ced14",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ad9b8a15cd3eac48fb52e49c61936cdf577e32f"
        },
        "date": 1717426733322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.114,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.482,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.295,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8589025,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.0931238,
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
          "id": "9bdb2376011d621901c3b7e3f21e1bf93e254267",
          "message": "Improve coredump script for the tests workflow (#899)\n\n* List core dump records when tests are failing\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Improve the coredump script\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-03T15:50:15+01:00",
          "tree_id": "2387b067dc34dee944ceef6dcb8aad68b82c3ae0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9bdb2376011d621901c3b7e3f21e1bf93e254267"
        },
        "date": 1717508107125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.12,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.466,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.132,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.815,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.937023199999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 13.3685796,
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
          "id": "07dcd74236ce196bf9d8082469371196615a0a72",
          "message": "Add troubleshooting entry on slow metadata operations (#897)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-04T13:10:59Z",
          "tree_id": "d9e07d1957d77bcab43eccbffb56999286eda437",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/07dcd74236ce196bf9d8082469371196615a0a72"
        },
        "date": 1717535540429,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.492,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.104,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.168,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.173141300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.705205900000001,
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
          "id": "b0bebe885ce4be9fa17461eda870057b639a7e60",
          "message": "Initialize the CRT eagerly in tests (#900)\n\nWe think the lazy initialization might be the cause of some of our\r\nissues, because it happens on an ephemeral thread. Let's try\r\ninitializing it at load time.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-06-04T16:03:34-05:00",
          "tree_id": "aedd2c8efe8ab87a73675e110b36c3109d79c677",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0bebe885ce4be9fa17461eda870057b639a7e60"
        },
        "date": 1717578104181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.437,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.77,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.4622884,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.0707341,
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
          "id": "09546c1116c91838fd799ebac0162059859689b2",
          "message": "Update CRT submodules to latest releases (#901)\n\n* Revert \"Revert s2n-tls submodule to v1.4.9 (#887)\"\r\n\r\nThis reverts commit fc60045f3358110a93b2b04e3852710b3f50020a.\r\n\r\n* Update CRT submodules to latest releases\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-05T17:04:02+01:00",
          "tree_id": "20813c387dc01e95c520b8b67874bcf18d2804ae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09546c1116c91838fd799ebac0162059859689b2"
        },
        "date": 1717604145081,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.464,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.439,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.2334391,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.193615099999999,
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
          "id": "93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c",
          "message": "Introduced support for the AWS_ENDPOINT_URL environment variable (#895)\n\n* Adding support for AWS_ENDPOINT_URL.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Update CHANGELOG.md and CONFIGURATION.md\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Using rust_fork to run the tests.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Addressing comments.\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n* Adding changes from Danny.\r\n\r\nhttps://github.com/awslabs/mountpoint-s3/commit/2303bd83d0e90bcd29f707bd939d02db6633cf9b\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-06-05T09:52:55+01:00",
          "tree_id": "ed823e29b354854c3aee278096b512618a05c976",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/93ac1b01a7dc46c8f092cdee22cc8a0515d6cf8c"
        },
        "date": 1717662896539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.478,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.787,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.2108242,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.1708399,
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
          "id": "42007f7b5eb0483364cc02cbb5c62f709b5d62f3",
          "message": "Release v1.7.0 (#885)\n\n* Release v1.7.0\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update mountpoint-s3 changelog\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-06T08:12:17Z",
          "tree_id": "a40b569e9fad610659f95c091a2fa1a12051267b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42007f7b5eb0483364cc02cbb5c62f709b5d62f3"
        },
        "date": 1717682463053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.107,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.445,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.531,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.187532599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.3619196,
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
          "id": "90ea28806378796bdf64c737df40ba9b82d5c6e3",
          "message": "Skip scheduled test runs outside of upstream repository (#903)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T09:41:01Z",
          "tree_id": "5266ed1cc2e4fd2d30da057cffafc1c690121c71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90ea28806378796bdf64c737df40ba9b82d5c6e3"
        },
        "date": 1718013939912,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.111,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.471,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.896,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.578387800000002,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.021479099999999,
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
          "id": "cbc8ec8d3886da07430f583d0121d028b5dfd020",
          "message": "Update integration test schedule from hourly to daily at 06:45Z (#905)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-10T10:40:02Z",
          "tree_id": "b0bc74cfd8abca7ffdd78752655c02d6a08a56d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cbc8ec8d3886da07430f583d0121d028b5dfd020"
        },
        "date": 1718017524980,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.471,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.951,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.9347897,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1806075,
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
          "id": "650269904f617f96879f7ee7d93f8bca4e5096e5",
          "message": "Support backpressure for GetObject request (#889)\n\n* Support backpressure for GetObject request\n\nThe CRT has flow-control window feature in the read path (https://github.com/awslabs/aws-c-s3/pull/213)\nto let users control how fast they want to download data. This change\nexposes the backpressure read mechanism in the `get_object` interface.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-11T15:27:54Z",
          "tree_id": "a75778e4c5aba8ae8bf944e5ad9887160f4855e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/650269904f617f96879f7ee7d93f8bca4e5096e5"
        },
        "date": 1718200031751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.47,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.835,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.9272486,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.503091,
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
          "id": "19faf760f3de5dc631aa68594564d926e9a667d3",
          "message": "Restrict `--sse-kms-key-id` to Key ARN only (#908)\n\n* Restrict --sse-kms-key-id to Key ARN only\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix inexistent key test\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove Key ID from the doc, fix tested log message\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Fix format\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-06-12T13:24:51Z",
          "tree_id": "db0b9700e1691e1efffbf8e6915a1dbb43350d8f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19faf760f3de5dc631aa68594564d926e9a667d3"
        },
        "date": 1718274994908,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.116,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.446,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.104,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.236,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.087435,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6975634,
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
          "id": "e62951e87a9cc7f19ffe23f1637d531ca8ea8cab",
          "message": "Add additional logging around mount timeout failures (#910)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-13T10:12:48Z",
          "tree_id": "5eba9ca1b6f75e289e266b3c6c465e7ef91fa587",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e62951e87a9cc7f19ffe23f1637d531ca8ea8cab"
        },
        "date": 1718297761971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.469,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.09,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.444,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 13.3690674,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.2694901,
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
          "id": "657cc787ae838c606525a87d3ff8e7b8926ad0ac",
          "message": "Fix clippy error (#911)\n\nClippy was reporting this error:\n```\nerror: this expression always evaluates to false\n  --> mountpoint-s3/src/build_info.rs:24:44\n   |\n24 |         const UNOFFICIAL_SUFFIX: &str = if COMMIT_HASH_STR.is_empty() {\n   |                                            ^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#const_is_empty\n   = note: `-D clippy::const-is-empty` implied by `-D clippy::all`\n```\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-06-13T16:33:43Z",
          "tree_id": "cb55b11bca02b560660ce481e50e5c9cb830e645",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/657cc787ae838c606525a87d3ff8e7b8926ad0ac"
        },
        "date": 1718297821092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.125,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.465,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.365,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.6568504,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.2612227,
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
          "id": "7155555a365cd2b8e4b330c2b16cff3d1b56cce8",
          "message": "Release v1.7.1 (#912)\n\n* Release v1.7.1\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update changelog\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-14T08:55:26Z",
          "tree_id": "d8b44fa654789f6fb2ab667f0775f9f2796c8100",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7155555a365cd2b8e4b330c2b16cff3d1b56cce8"
        },
        "date": 1718368010433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.115,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.431,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.545,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.4778283,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.110557199999999,
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
          "id": "78df1aeda22f7cdf9a34920596f863cfd4727282",
          "message": "Fix the backpressure test (#916)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-06-17T15:59:24Z",
          "tree_id": "b2e76b42513144048a25da6e79848f8d1d150aed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78df1aeda22f7cdf9a34920596f863cfd4727282"
        },
        "date": 1718641520241,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.106,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.433,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.053,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.781,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.6692295,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.6898257,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}