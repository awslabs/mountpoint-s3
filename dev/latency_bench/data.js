window.BENCHMARK_DATA = {
  "lastUpdate": 1700677846887,
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
          "id": "3d9b8a9f671a70742a751f8823fd80a09068df06",
          "message": "Use a unique target for request spans (#615)\n\nThese spans are emitted at a high level (WARN), which is annoying for\nclients that want to use an adapter to the `log` facade, where `tracing`\nwill emit an event whenever a span is created. To help these clients\nfilter out these span events, let's use a unique target for them.\n\nI verified that log messages for requests are still emitting this span\nmetadata when Mountpoint requests log, so this only affects clients that\naren't using `tracing`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-21T15:01:05Z",
          "tree_id": "8a5e550b7723e55762b291ce35097ff4de9e897e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d9b8a9f671a70742a751f8823fd80a09068df06"
        },
        "date": 1700580781682,
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
            "value": 1.134,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.514,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 98.2335416,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 71.17007029999999,
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
          "id": "2719a5fc9ad807bdcd63cae57dac593d50c2a630",
          "message": "Release new crate versions (#621)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-21T17:00:15Z",
          "tree_id": "3d222a39c053baf97fa097c9fe0d279979415274",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2719a5fc9ad807bdcd63cae57dac593d50c2a630"
        },
        "date": 1700588293269,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.083,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.154,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.434,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 82.8343509,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 55.373911799999995,
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
          "id": "b1c1781637cced1c4143176739050eec8d99b500",
          "message": "Cleanup cache dir at mount and exit (#620)\n\n* Update data cache to use sub-directory, cleaned on mount and exit\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update to clear managed cache directory rather than remove it\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove close for ManagedCacheDir, move ownership and drop of that dir to FuseSession\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-21T18:05:46Z",
          "tree_id": "778dfc4a04ca16b95845e51013234a06cc34fe63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b1c1781637cced1c4143176739050eec8d99b500"
        },
        "date": 1700591602421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.177,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.306,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.889,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 70.3300629,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.5064582,
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
          "id": "b0e7358a5bce1827258e930837ec96f5c77c33c3",
          "message": "Improve cache metrics and logging (#619)\n\nRework how metrics for the cache are collected:\n* The disk data cache will collect metrics on block hit/miss/errors and the duration of reads, writes, and eviction.\n* The prefetcher will track how many blocks are served from the cache vs requested to the client and also measure the total cache update time (write + eviction).\n\nAlso downgrades the level of logs by the cache from error to warning.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-21T19:27:25Z",
          "tree_id": "59650251b5932c041ac6af85f16626bfbb98f282",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b0e7358a5bce1827258e930837ec96f5c77c33c3"
        },
        "date": 1700596756645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.175,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.195,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 58.522085,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 51.717999299999995,
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
          "id": "8d8c07bb907df48c85f67780b2698de1f2b8a8b9",
          "message": "Update block file name (#623)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-21T19:29:20Z",
          "tree_id": "e5d83dc1354965612c33748c27c64fc363ab0e5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8d8c07bb907df48c85f67780b2698de1f2b8a8b9"
        },
        "date": 1700596875443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.168,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.086,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.467,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 67.40856720000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.332633,
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
          "id": "3c5f93d496c6a11c29d5cdbc6e4e8ece881cfb4e",
          "message": "Implement O_DIRECT for open to bypass metadata cache (#614)\n\n* Implement O_DIRECT for open to bypass metadata cache if enabled\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Re-organize integration test modules to be able to run O_DIRECT tests serially\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add Rustdoc for the common test module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Configure the direct_io tests with the correct feature (\"fuse_tests\")\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-21T19:29:58Z",
          "tree_id": "cdf416b7a12e10d08325476802743c6e246c3d0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c5f93d496c6a11c29d5cdbc6e4e8ece881cfb4e"
        },
        "date": 1700597295439,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.078,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.003,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.4722766,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 52.805758299999994,
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
          "id": "6d5bb1fa841299954faa035fa196217430c417cf",
          "message": "Remove the temporary caching feature flag (#622)\n\n* Remove the temporary caching feature flag\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update changelog\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-22T09:57:57Z",
          "tree_id": "af1bf161f973ce2a0808ac5aac7c5a3198548284",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6d5bb1fa841299954faa035fa196217430c417cf"
        },
        "date": 1700648998267,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.169,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.081,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.382,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.24667690000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 65.4603527,
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
          "id": "3f25c61ee7a77350cd3349159e172e7469b646b9",
          "message": "Add documentation for object metadata and data caching (#587)\n\n* Add initial caching documentation\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on optional cache configuration\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Promote caching to its own documentation section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update documentation based on PR feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note emphasising that unencrypted object content will be written to the caching directory\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on requirement for cache directory to be empty\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo \"CACHE-DIR\" -> \"CACHE_DIR\"\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update wording on unencrypted cache notice\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update MP cache dir wording\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Drop 'file' from 'Object/file content'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add guidance on using unique directories when running with multiple processes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add guidance on using O_DIRECT option to bypass Mountpoint's caches\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update default TTL mentioned in docs from 60m to 1s\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add example of stale cached content behavior\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on cache eviction\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update documented O_DIRECT behavior\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move O_DIRECT to semantics doc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Minor doc fixes\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on how to configure metadata TTL\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move multi-process to its own sub-section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add instructions on how to use RAM disk\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add newline to fix GitHub markdown issue\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix GitHub markdown issue\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typos\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Tweaks\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-22T10:26:06Z",
          "tree_id": "2dbb29084807710b0503d7e61d20c4d23a26d55f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3f25c61ee7a77350cd3349159e172e7469b646b9"
        },
        "date": 1700650689475,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.092,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.5,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 104.5561381,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 63.026387299999996,
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
          "id": "211503b9b08f95708116701477b916d3f6169798",
          "message": "Release v1.2.0 (#624)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-22T11:28:59Z",
          "tree_id": "3f6aec93ab990aa18352f1094a7c32179f9ce158",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/211503b9b08f95708116701477b916d3f6169798"
        },
        "date": 1700654437304,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.069,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.119,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.333,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 55.980126,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 59.8136339,
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
          "id": "6922c9c0c322982705f9d07c9458c22dc33f007e",
          "message": "Add file system details to cache doc (#625)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-22T17:58:25Z",
          "tree_id": "18d183ecfcb31c468d0358a9da69863c2db64ff1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6922c9c0c322982705f9d07c9458c22dc33f007e"
        },
        "date": 1700677846365,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.149,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 100.6295926,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 92.32641629999999,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}