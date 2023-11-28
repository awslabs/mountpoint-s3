window.BENCHMARK_DATA = {
  "lastUpdate": 1701196009735,
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
          "id": "801e4c175cb85e21f713cf919e0f18ac8d2a9188",
          "message": "Add scripts to validate a release package (#626)\n\n* Add scripts to validate a release package\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Set executable bit\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add minimal readme\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-23T09:36:06Z",
          "tree_id": "f23812c080a69ac38b47504b513d2b14dd06d62a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/801e4c175cb85e21f713cf919e0f18ac8d2a9188"
        },
        "date": 1700734082962,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.079,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.103,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.265,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 89.647907,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 81.2151068,
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
          "id": "f2860e74cd35681747a4c677c18776b5bd476021",
          "message": "Update cache directory to create content with MP owner access only (#637)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T10:10:10Z",
          "tree_id": "863597d1f9a4643af8bc0652345f3503233677b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2860e74cd35681747a4c677c18776b5bd476021"
        },
        "date": 1701168154357,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.076,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.166,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.11,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.67,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 126.3754289,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 86.8557153,
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
          "id": "c3521f3de23dbbc9aaa752d5d29c88ef0a5e566c",
          "message": "Update CRT submodules to latest releases (#633)\n\n* Update CRT submodules to latest releases\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update aws_s3_request_type bindings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T10:19:29Z",
          "tree_id": "ff7a34643526791088e8c5edb1c433a329640947",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3521f3de23dbbc9aaa752d5d29c88ef0a5e566c"
        },
        "date": 1701170474249,
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
            "value": 1.097,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.391,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 83.6396907,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 64.7779776,
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
          "id": "0245bc6c167bde595fa9a173eb689af71aabf244",
          "message": "Create .gitallowed for allowlisting secrets for git-secrets (#638)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T11:19:28Z",
          "tree_id": "088f6a8b81d39c514e33260593b79a3651df52e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0245bc6c167bde595fa9a173eb689af71aabf244"
        },
        "date": 1701172281853,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.098,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.167,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.127,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.473,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 86.9693783,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 53.916488799999996,
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
          "id": "042a710a17576879ede1bc4a42712b5b84c22600",
          "message": "Update CRT submodules to latest releases (#641)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-11-28T15:42:18Z",
          "tree_id": "83650ef352ad65f2ab99bac688fbb7dc7ca72d53",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/042a710a17576879ede1bc4a42712b5b84c22600"
        },
        "date": 1701186796358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.1,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.437,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 80.910663,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 79.99384429999999,
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
          "id": "f4146fa3f33b332fa0625cd5142108ca64cc7cdc",
          "message": "Support S3 Express One Zone (#642)\n\n* Support S3 Express One Zone\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Implement support for unordered readdir\r\n\r\nListObjectsV2 is unordered on S3 Express. This is an issue for our\r\nshadowing semantics in readdir, which does a merge-sort of the local and\r\nremote keys, assuming they're both ordered.\r\n\r\nWe are going to give up on readdir being ordered on Express -- it's not\r\nrequired by VFS, and the alternative would be to buffer all directory\r\nentries in memory before returning any, which would be too expensive on\r\nlarge directories. So this change introduces a new unordered variant of\r\nthe readdir implementation. It just returns directory entries verbatim\r\nfrom ListObjectsV2, and then returns all otherwise-unreturned local\r\nentries at the end of the iterator.\r\n\r\nDoing this requires Mountpoint to know whether the bucket is a directory\r\nbucket or not, and so I added both a command-line flag and\r\nauto-detection for that.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n* Add new unordered list implementation that shuffles the entire prefix\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Add prefixed versions of list tests\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\n\r\n* Small update to the test\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\n\r\n---------\r\n\r\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>\r\nCo-authored-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-28T16:05:35Z",
          "tree_id": "f88a94a2ab18a5f0296d364e55622f3b0d34f565",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4146fa3f33b332fa0625cd5142108ca64cc7cdc"
        },
        "date": 1701188184808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.074,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.173,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.126,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.316,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 91.07362020000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 66.39713429999999,
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
          "id": "c34e70172e0b150b4e3b6246371109db00077ab4",
          "message": "Release new crate versions (#645)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-11-28T18:15:56Z",
          "tree_id": "a0b8dd24929bbe3533e8294048983ee728e79253",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c34e70172e0b150b4e3b6246371109db00077ab4"
        },
        "date": 1701196009197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.082,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.194,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 1.129,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 10.537,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 75.2348982,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 62.8762798,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}