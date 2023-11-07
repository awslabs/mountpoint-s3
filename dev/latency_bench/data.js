window.BENCHMARK_DATA = {
  "lastUpdate": 1699329273583,
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
          "id": "1754fa2677a859ad94c76c197ae430fdf75bb747",
          "message": "Add metadata cache configuration flags behind build-time feature (#559)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-18T08:48:42Z",
          "tree_id": "3691915a0d0fe82dae7fbed45a3831f7ade98e7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1754fa2677a859ad94c76c197ae430fdf75bb747"
        },
        "date": 1697621416390,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.16,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.285,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.5084861,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 58.8935361,
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
          "distinct": false,
          "id": "7eae9e18e3800a740f843f30ed5049a2746031dc",
          "message": "Bump rustix from 0.36.14 to 0.36.16 (#562)\n\nBumps [rustix](https://github.com/bytecodealliance/rustix) from 0.36.14 to 0.36.16.\n- [Release notes](https://github.com/bytecodealliance/rustix/releases)\n- [Commits](https://github.com/bytecodealliance/rustix/compare/v0.36.14...v0.36.16)\n\n---\nupdated-dependencies:\n- dependency-name: rustix\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-18T20:05:03Z",
          "tree_id": "6a71dc097bb5ed1a90ff66a28b298eeeca33f950",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7eae9e18e3800a740f843f30ed5049a2746031dc"
        },
        "date": 1697661681714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.2,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.931,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.5239995,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.6745603,
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
          "id": "2431807d71773d36c43f4b7aad519feb26064493",
          "message": "Complete the upload on flush (#526)\n\nCurrently, Mountpoint will complete an upload in two cases:\n* on `release`, that is when the last file descriptor pointing to an open file handle is closed.\n  This is transparent for the caller, but does not allow for reporting the outcome of the upload,\n  nor for blocking until it is completed. This means that a read-after-close may not succeed\n  because the upload is still in progress.\n* on `fsync`, which is blocking and can return an error to the caller, but needs to be explicitly\n  invoked before closing a file.\n\nThis change implements the `flush` operation, which is invoked when a file descriptor is closed.\nOn `flush`, like on `fsync`, Mountpoint will complete the upload, block, and return on success or\nfailure. In order to support common usage patterns where it is invoked multiple times, `flush`,\nunlike `fsync`, will be a no-op when invoked before any data has been written or by a different\nprocess than the one that originally opened the file.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-19T14:37:24Z",
          "tree_id": "d791318c281bc569877fc3bf1dcbc8dca07d9266",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2431807d71773d36c43f4b7aad519feb26064493"
        },
        "date": 1697728405995,
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
            "value": 1.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.957,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.05025959999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.380574200000005,
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
          "id": "17f7de579c4eb7606d818e11c58d5b8b7245b307",
          "message": "Add configurable user agent prefix flag for mount-s3 (#548)\n\n* Add configurable user agent prefix flag for mount-s3\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CHANGELOG.md entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move `--user-agent-prefix` argument to bottom of 'Client options' section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move `--user-agent-prefix` argument to new 'Advanced options' section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix mountpoint-s3 CHANGELOG.md order\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-19T17:19:30Z",
          "tree_id": "5d237660ca2870d8d40a04a90c7596954d87558c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17f7de579c4eb7606d818e11c58d5b8b7245b307"
        },
        "date": 1697737831133,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.686,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 127.4233823,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 54.363839,
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
          "id": "dbfa87caef3f6d037d7bf64e2b3729d427441955",
          "message": "Expand a few documentation things (#569)\n\nCapturing answers to a few common questions we've had recently that\nweren't obvious from the docs. I also learned about [highlights][]\nand had some fun with them.\n\n[highlights]: https://github.com/orgs/community/discussions/16925\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-20T16:02:43Z",
          "tree_id": "f817bc58452be9165e65fb7c20c6217ae9fd1905",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dbfa87caef3f6d037d7bf64e2b3729d427441955"
        },
        "date": 1697820051313,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.022,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 129.8291458,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 95.2353278,
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
          "id": "cb0d26bba55b27b2ef40302542daa2d1bd197d5d",
          "message": "Add new DataCache trait and InMemoryDataCache implementation (#557)\n\n* Add new DataCache trait and InMemoryDataCache implementation\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace indices_for_byte_range with block_size, moving responsibility to caller\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Implement PartialEq for ChecksummedBytes when testing, replacing assert_eq_checksummed_bytes macro\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataCache to use interior mutability\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix assert_eq! issue (& and &&)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update error types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update struct/module visibility\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-23T11:00:15Z",
          "tree_id": "347f1ee5cad8fdd953a820ec3c4189faa9742af4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb0d26bba55b27b2ef40302542daa2d1bd197d5d"
        },
        "date": 1698060951030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.358,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 107.9390539,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 105.1544981,
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
          "id": "15bec263971818398093ebc6de55bfa18aeaf421",
          "message": "Release v1.1.0 (#565)\n\n* Release v1.1.0\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update release date\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-23T12:56:58Z",
          "tree_id": "db57cef5b833c2abce92c9dd56d1aef62c84a8f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15bec263971818398093ebc6de55bfa18aeaf421"
        },
        "date": 1698068010306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.155,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.88,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.7355927,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 67.1178386,
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
          "id": "eac02e6a77eae78a7e66f04362c313d9372067bd",
          "message": "Rename CacheConfig field 'prefer_s3' to 'serve_lookup_from_cache' (#573)\n\n* Rename internal CacheConfig field 'prefer_s3' to 'serve_lookup_from_cache'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add trace log when inode cannot be updated in place\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-24T16:17:02Z",
          "tree_id": "ddaf4274cd6987f66e7b864bba87b8f1ed3da46b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eac02e6a77eae78a7e66f04362c313d9372067bd"
        },
        "date": 1698166563077,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.145,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.908,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 103.82980590000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 84.9003507,
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
          "id": "fa0d516ccb71c09881ef4e87fd87b396853b1a00",
          "message": "Add request count tests for FS operations with metadata caching enabled (#567)\n\n* Add counters to MockClient for testing request counts\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add tests verifying request counts after readdir,open,lookup,unlink with caching enabled\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease rustc warnings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy warnings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update OperationCounter::count rustdoc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add test verifying request counts on open when cache is off\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-25T14:20:02Z",
          "tree_id": "bfc2689df726856f7fe26281679af4861d8c4e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa0d516ccb71c09881ef4e87fd87b396853b1a00"
        },
        "date": 1698245976965,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.939,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.3556861,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 78.7599909,
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
          "id": "71277e796bde3b729ed2a52814ab29fe47e91f78",
          "message": "Replace use of Range with RangeBounds for DataCache trait (#579)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-26T15:06:24Z",
          "tree_id": "d7bdfea0c1c9ff00ee015b298f738b6c9639e2b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/71277e796bde3b729ed2a52814ab29fe47e91f78"
        },
        "date": 1698335364666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.138,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.049,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 121.14648240000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 74.3893315,
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
          "id": "524eac6b3d0102d7413b17465ff4e257c09ec399",
          "message": "Improve ChecksummedBytes::extend and clarify data integrity guarantee (#575)\n\n* Move ChecksummedBytes into a new module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve ChecksummedBytes::extend and clarify data integrity guarantee\n\nChecksummedBytes maintains a data buffer and a checksum and guarantees that only validated data can be accessed. Transformations such as `split_off`, `extend`, or `slice` (introduced in this change), may trigger a validation (and return an IntegrityError on failure), or propagate existing checksum(s) if possible, allowing for later validation.\n\nThis change clarifies the data integrity guarantee in the docs and optimizes the extend method to avoid re-validation when the checksums for both slices can be combined. It also avoid a redundant buffer allocation.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add split_off tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Make clearer that shrink_to_fit does not copy data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-26T18:22:18Z",
          "tree_id": "f618984e46d80f811dd6b916b1dcc524dc52a6b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/524eac6b3d0102d7413b17465ff4e257c09ec399"
        },
        "date": 1698347034253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.27,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.048,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 119.42166970000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.1834439,
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
          "id": "04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0",
          "message": "Fix readme links (#580)\n\nThe GitHub highlights thing seems to break relative links.\n\nFixes #578.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-26T18:54:27Z",
          "tree_id": "cd6a012cba5ada8149056662c5db353f2134748c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0"
        },
        "date": 1698348888366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.196,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.124,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.093,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 127.29028659999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 61.222796100000004,
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
          "id": "8e5688dc45f5a76d145d03a859ad0160a12e43c8",
          "message": "Allow repeated readdir offsets (#581)\n\n* Allow repeated readdir offsets\n\nPOSIX allows seeking an open directory handle, which in FUSE means the\n`offset` can be any offset we've previously returned. This is pretty\nannoying for us to implement since we're streaming directory entries\nfrom S3 with ListObjects, which can't resume from an arbitrary index,\nand can't fit its continuation tokens into a 64-bit offset anyway. So\nwe're probably never going to truly support seeking a directory handle.\n\nBut there's a special case we've seen come up a couple of times (#477, #520):\nsome applications read one page of directory entries and then seek back\nto 0 and do it again. I don't fully understand _why_ they do this, but\nit's common enough that it's worth special casing.\n\nThis change makes open directory handles remember their most recent\nresponse so that they can repeat it if asked for the same offset again.\nIt's not too complicated other than needing to make sure we do\nreaddirplus correctly (managing the lookup counts for entries that are\nbeing returned a second time).\n\nI've tested this by running the PHP example from #477, which now works.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog and docs\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-27T15:02:35Z",
          "tree_id": "0a00dc019105785c874c199e01518a49c7a52e28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e5688dc45f5a76d145d03a859ad0160a12e43c8"
        },
        "date": 1698421116559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.205,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.726,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.85587140000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.8740317,
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
          "id": "301ee162bf9a325b46988f6fce7d2f4c5cf5627c",
          "message": "Use O_APPEND for logs and log version number (#588)\n\nIn background mode we have two processes both racing on the log file,\nand they can scribble each other's log entries (I saw this in #566).\nO_APPEND should fix that. We should also log the version number as a\npoint of reference.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-31T09:38:02Z",
          "tree_id": "95e586464e43be39ca5537a6cd23193971482dff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/301ee162bf9a325b46988f6fce7d2f4c5cf5627c"
        },
        "date": 1698747173840,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.015,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 140.5511171,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.0800454,
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
          "id": "404ba9c9965a9efc83bb84acabf01af4b03ce3ec",
          "message": "Remove unused generic in DataCache (#589)\n\n* Remove unused generic in DataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataCache RustDoc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-31T16:11:47Z",
          "tree_id": "cd4c68d699585b4bcc87220b1dc93e9003644eae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/404ba9c9965a9efc83bb84acabf01af4b03ce3ec"
        },
        "date": 1698770723052,
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
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.367,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 123.8504538,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 76.010123,
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
          "id": "9a4cfd8a5f59cf744268c19ceaa608354db45e7a",
          "message": "Implement disk-based DataCache with no eviction (#593)\n\n* Implement disk-based DataCache with no checksums or eviction\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typos\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64URL encoding with Base64URLUnpadded encoding for data cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Ensure cached indicies are sorted in DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add trace message when creating block in cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* WIP: Add checksums to on-disk cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove cached_block_indices implementation on DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move version identifier to constant\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace SerializableCrc32c with u32\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataBlock::new(..) to return Result\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add verification of block metadata to unpack after reading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64 encoding with SHA256 hash\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add TODO to split directories into sub-directories to avoid hitting any FS-specific max number of dir entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove intermediate buffers when (de)serializing DataBlock with bincode\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add cache version identifer to the start of blocks written to disk\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix comment on ETag::into_inner\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add rustdoc to DataBlock::new\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo in rustdoc for DataBlock::data\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add expected version to data block read error message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Split DataBlock header fields into BlockHeader\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add checksum validation on on-disk cache DataBlock header contents\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove outdated TODO\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add test for detecting when DataBlock requires version bump\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Refactor errors for DataBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename DataBlock to DiskBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-03T12:27:22Z",
          "tree_id": "7fa4785ab17d82d9e72ffb42bedbf87de7682baa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9a4cfd8a5f59cf744268c19ceaa608354db45e7a"
        },
        "date": 1699016803189,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.165,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.336,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 127.3275642,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 96.6775164,
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
          "id": "faebbef09df4eff6ca9270a536bb89e81a882d5c",
          "message": "Expose DataCache module and CacheKey fields (#596)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T10:12:42Z",
          "tree_id": "386506ee213da57dd953f342f5b942dbb90a492c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/faebbef09df4eff6ca9270a536bb89e81a882d5c"
        },
        "date": 1699268015028,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.594,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 92.9618724,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.723398,
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
          "id": "84c8a722acc38ba7be5ff598d710031e6997e409",
          "message": "Fix various clippy warnings about unused code and variables (#597)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T15:02:02Z",
          "tree_id": "34697dc75aa55b266eec033b9f31289f71cece7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c8a722acc38ba7be5ff598d710031e6997e409"
        },
        "date": 1699285329551,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.481,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 105.1243924,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 85.2787408,
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
          "id": "164789b7df3071d5d949cb0387de50dde1e8345f",
          "message": "Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md (#591)\n\n* Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update WantedBy target from default to remote-fs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update documentation based on PR feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-07T03:23:56Z",
          "tree_id": "b6995122ca2aae9cbe14098cdb603bacefbf2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/164789b7df3071d5d949cb0387de50dde1e8345f"
        },
        "date": 1699329273088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.174,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.085,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.292,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 112.45731,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.8632405,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}