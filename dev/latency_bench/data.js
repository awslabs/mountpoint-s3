window.BENCHMARK_DATA = {
  "lastUpdate": 1700568746337,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "6dead834c3867e4ed1625ca1cfa080ce5e6deef0",
          "message": "Update vendored fuser to 82bd70c (v0.14.0) (#599)\n\n* Update vendored fuser to 82bd70c (v0.14.0)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update fuser dependency to v0.14.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-07T15:21:02Z",
          "tree_id": "382b6f9bdc695a261ea499efcc262086236692fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dead834c3867e4ed1625ca1cfa080ce5e6deef0"
        },
        "date": 1699372670770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.178,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.163,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.556,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 125.0754998,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.2232942,
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
          "id": "c6b2a17e405a6754926c4f726f646efe9ef2bd2a",
          "message": "Introduce Prefetch trait (#595)\n\nIntroduce a new `Prefetch` trait to abstract how `S3Filesystem` fetches object data from an `ObjectClient`. While this change does not introduce any functional change, this abstraction will be used to implement optional object data caching.\n\nThe existing `Prefetcher` struct has been adapted to implement the new `Prefetch` trait. The main changes are:\n* it is generic on the `ObjectPartStream` (previously `ObjectPartFeed`), rather than using dynamic dispatch,\n* it does not own an `ObjectClient` instance, instead one is required when initiating a `prefetch` request,\n* the logic to spawn a new task for each `GetObject` request and handle the object body parts returned was moved into `ObjectPartStream`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-08T14:26:45Z",
          "tree_id": "1b6103bf65da935f6950522e3207dfec4d77296b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6b2a17e405a6754926c4f726f646efe9ef2bd2a"
        },
        "date": 1699456125027,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.122,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.783,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 110.9395376,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 83.522471,
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
          "id": "9768f31cdb62884ea3e145311236f1c8252378b6",
          "message": "Update CRT submodules to latest releases (#601)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-09T10:50:12Z",
          "tree_id": "ad0db3334c651795cbd0a847cd4bf021038052d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9768f31cdb62884ea3e145311236f1c8252378b6"
        },
        "date": 1699528920280,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.739,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.8039256,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.2233104,
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
          "id": "689ebe3a93196b6c7f568f13267cb80c0985712e",
          "message": "Add ETag into DiskDataCache hashed block path (#594)\n\n* Move ETag into DiskDataCache hashed block path\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Test hash_cache_key separately from get_path_for_key/get_path_for_block\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CACHE_VERSION to hash computed on cache_key\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-10T16:53:40Z",
          "tree_id": "2839291d2a4dc372c483627d3bd7df7c74972144",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/689ebe3a93196b6c7f568f13267cb80c0985712e"
        },
        "date": 1699637117159,
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
            "value": 1.14,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.336,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.9364887,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 70.0521842,
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
          "id": "493fc236846d0c28246fb6b728c2dc17fb5810e7",
          "message": "Update CRT submodules to latest releases (#604)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-14T11:40:50Z",
          "tree_id": "d38f043e9d7000471ac4791bb3e39d3c16cf670b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/493fc236846d0c28246fb6b728c2dc17fb5810e7"
        },
        "date": 1699964231402,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.611,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 101.5873472,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 75.36829759999999,
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
          "id": "d38d45fd6e68568839c62a71d1d70996947854f5",
          "message": "Change local file/directory expiry TTL from NEVER_EXPIRE to 100ms (#584)\n\n* Change validity of files and directory from NEVER_EXPIRE to 100 ms while create()\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Used cache config value instead to set validity\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Trying to check if removing file validity assertions works as no way to test on local system\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed Invalid Inode Stat test for setattr\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Modified test for setattr on invalid stat as now it should be able to reset the stat expiry\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added validity update of local inode for lookup\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added resetting of InodeStat expiry in setattr as well\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added the change in Changelog\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed unnecessary cloning of inode\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-11-14T11:54:11Z",
          "tree_id": "add3dba664a949801d27f5e92e6cd520df7299d6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d38d45fd6e68568839c62a71d1d70996947854f5"
        },
        "date": 1699964772616,
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
            "value": 1.144,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 11.679,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.1410102,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.8655558,
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
          "id": "efc4c0e3f89c5f45797663b31312fe592c33c4cd",
          "message": "Release v1.1.1 (#605)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-14T13:55:42Z",
          "tree_id": "54c9ab000ed44b36cf9cd2c374910265774c879a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/efc4c0e3f89c5f45797663b31312fe592c33c4cd"
        },
        "date": 1699972352807,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.118,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.327,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 62.3814147,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.97185040000001,
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
          "id": "a1e4d861b92ff30db2153b327bebd8fcf11b8308",
          "message": "Add caching Prefetch implementation (#598)\n\n* Integrate cache in Prefetcher\n\nIntroduce a new implementation of the Prefetch trait which uses a DataCache. This change also adds CLI args to Mountpoint to enable the on-disk data cache. The new args are only available under the \"caching\" feature and are subject to change.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Introduce unified RequestRange::align\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments and address other feedback\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Assert invariants when populating the cache from the GetObject result\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-15T18:55:49Z",
          "tree_id": "67b2a661ce3b7110d8e14fcd1cb956b44cb7ae01",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1e4d861b92ff30db2153b327bebd8fcf11b8308"
        },
        "date": 1700076469708,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.17,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.636,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.0491659,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 72.9451263,
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
          "id": "52dfe2970d1fc2a7c68822bf3a4ef4ecb80c6d3d",
          "message": "Remove unused 'cached_block_indices' method in DataCache trait (#607)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-16T02:15:28Z",
          "tree_id": "bbe52e4431a3c2490524d4882c839cccc941521f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/52dfe2970d1fc2a7c68822bf3a4ef4ecb80c6d3d"
        },
        "date": 1700102857319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.179,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.143,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.567,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 123.3952723,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.58642640000001,
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
          "id": "3264f2b08f2931a0a2c04e15d4780d99ce18de2a",
          "message": "Split cache hashed directory keys to avoid any FS-specific limits (#606)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-16T10:45:10Z",
          "tree_id": "1926a365ff857c5900b2a38d16e35fff395a2564",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3264f2b08f2931a0a2c04e15d4780d99ce18de2a"
        },
        "date": 1700133408281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.172,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.147,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.638,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 106.623895,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8219484,
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
          "id": "68e36c90f36c7debebfc0df3b9ab25b8113674ba",
          "message": "Fix bug in ChecksummedBytes::into_inner (#609)\n\n* Fix bug in ChecksummedBytes::into_inner\n\n`ChecksummedBytes::into_inner()` was returning data from `self` rather than from the `shrink_to_fit` result. Added regression tests for `ChecksummedBytes` and for `DiskDataCache` (only caller of the `into_inner()`).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Mark ChecksummedBytes as must_use\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-16T11:10:09Z",
          "tree_id": "f155471568093b77865f062dd3f0efc7cbfb7358",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68e36c90f36c7debebfc0df3b9ab25b8113674ba"
        },
        "date": 1700134920513,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.075,
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
            "value": 10.291,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 81.252362,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.6211172,
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
          "id": "65cb1a7a9f1aabdfe4411cad0f4e7e824a7a9920",
          "message": "Implement cache eviction (#610)\n\n* Implement cache eviction\n\nIntroduce a `CacheLimit` argument for the `DiskDataCache` to configure the eviction policy. If a limit is set, the cache will track usage of the stored blocks. On put, it will check if the limit has been exceeded and start removing the least recently used blocks if required.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Avoid writing to the cache after eviction failure\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-16T17:16:30Z",
          "tree_id": "57e50add349f2632fde591d22116f1ec78380913",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65cb1a7a9f1aabdfe4411cad0f4e7e824a7a9920"
        },
        "date": 1700157213190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.943,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 73.0591271,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.308432200000006,
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
          "id": "06a1d7d78388344621cbc4d94f96a2883e64fad8",
          "message": "Add instance and config metadata to user agent (#608)\n\n* Add instance and config metadata to user agent\n\nWe'd like to record the same metadata that AWS SDKs gather so we can\nbetter understand how different Mountpoint features are used. This\nchange adds support for detecting platform and instance metadata and\nincluding it in HTTP User-agents. We follow the SDK template for\nserializing this metadata.\n\nTo make this cleaner, I moved the instance info logic into the client\ncrate so that all users can get this kind of user agent. The new\n`UserAgent` struct supports addings arbitrary key/value pairs, and we\nuse that in Mountpoint to record basic configurations.\n\nUser agents are always a bit annoying to test, but I manually verified\nin a few cases (caching enabled/disabled) that this change was sending\nthe expected headers.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix typo\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-16T19:20:04Z",
          "tree_id": "a68e805c59fe657df916a6547ab12ac2c1185d73",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06a1d7d78388344621cbc4d94f96a2883e64fad8"
        },
        "date": 1700164313871,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.171,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.113,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.476,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 90.8073345,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 56.213719,
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
          "id": "b23eacae53fe2c2108eb684b015d9d26a7982920",
          "message": "Store block offsets in disk data cache (#611)\n\n* Store block offsets in disk data cache\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add the block offset to the methods in data cache\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Fix typo\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Remove redundant variable\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-17T15:35:06Z",
          "tree_id": "21ed8ad674d0ad98ed1352cdd9be37aa44341b23",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b23eacae53fe2c2108eb684b015d9d26a7982920"
        },
        "date": 1700237228303,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.073,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.128,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.577,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 95.8821109,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 77.1083469,
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
          "id": "7d38be79f3a41ad7c60539be027790c3c553a94c",
          "message": "Simplify and rename cache configuration flags (#612)\n\n* Simplify and rename cache configuration flags\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add details to the cache flag help\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Shorten help text\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use MiB and change default to 5% of available space\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-17T16:47:24Z",
          "tree_id": "5aeb159c4f632fd3dd701594805bf55f264e9300",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7d38be79f3a41ad7c60539be027790c3c553a94c"
        },
        "date": 1700241559415,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.08,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.18,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.136,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.364,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 99.9839374,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 57.913483,
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
          "id": "aeb5574208af2014e2da18772b85fd3477ab6be1",
          "message": "Use top-level file in write benchmark (#613)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-18T01:04:06Z",
          "tree_id": "4b9d83fc1c63d684d8986b8290de3a567beb0e1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aeb5574208af2014e2da18772b85fd3477ab6be1"
        },
        "date": 1700271370391,
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
            "value": 1.217,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.71,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.563649,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.8478284,
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
          "id": "7b1b4b3b471c878fdd02393176c4f353e36c81cb",
          "message": "Disable data cache when setting --max_cache_size=0 (#616)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-21T03:58:19Z",
          "tree_id": "90d44313d1cdd5cec2ea69cc5da2554664419ebc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b1b4b3b471c878fdd02393176c4f353e36c81cb"
        },
        "date": 1700541015467,
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
            "value": 1.117,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.399,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.5564039,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.5709528,
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
          "id": "661d0fbedec99fb86b228384707e2c3b35663ed1",
          "message": "Improve logging for ETags and FUSE operation flags (#618)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-21T11:40:44Z",
          "tree_id": "59906c6109e0250b13fb6c390f0f44253cf238d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/661d0fbedec99fb86b228384707e2c3b35663ed1"
        },
        "date": 1700568745801,
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
            "value": 1.105,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.873,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 113.71218040000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.8558271,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}