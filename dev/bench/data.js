window.BENCHMARK_DATA = {
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
          "id": "b1c1781637cced1c4143176739050eec8d99b500",
          "message": "Cleanup cache dir at mount and exit (#620)\n\n* Update data cache to use sub-directory, cleaned on mount and exit\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update to clear managed cache directory rather than remove it\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove close for ManagedCacheDir, move ownership and drop of that dir to FuseSession\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-21T18:05:46Z",
          "tree_id": "778dfc4a04ca16b95845e51013234a06cc34fe63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b1c1781637cced1c4143176739050eec8d99b500"
        },
        "date": 1700602279899,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.3140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.5728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.905859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4626.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.91728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.27265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.14013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1324.0283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.65068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.02177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.762109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.159765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.20244140625,
            "unit": "MiB/s"
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
        "date": 1700607393330,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.62197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.57470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.04267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.19619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4728.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.89736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1227.96767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.88330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1149.986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1368.58798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 952.22353515625,
            "unit": "MiB/s"
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
        "date": 1700607508359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.30625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.976171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.39404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.7494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.148046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.1595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.499609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4692.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.866015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.63701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.4119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1091.06240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.7677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1255.21728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1438.233203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.16357421875,
            "unit": "MiB/s"
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
        "date": 1700607907355,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.9515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 24.1294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.1162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4768.63837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.30859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.0517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1397.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.1638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1294.02802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.59287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1405.991796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.64306640625,
            "unit": "MiB/s"
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
        "date": 1700659633618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.09013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.623828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.53798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.16943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.57490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.36748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4676.45068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 106.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.93017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1446.47705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.4552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.1236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1589.77861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 958.05673828125,
            "unit": "MiB/s"
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
        "date": 1700661310076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.47646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.07783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.16474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.53388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.06982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.33203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4562.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.83310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 78.84052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.92109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1466.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.9640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.371484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.35595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1383.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.69765625,
            "unit": "MiB/s"
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
        "date": 1700665043681,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.237109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.84912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.42021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.87265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.29287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.37724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.9796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.26650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4795.31396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.63017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.8328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.94755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1556.1556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1402.7205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.72529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1358.11103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.15322265625,
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
        "date": 1700688454125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.3212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.3068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.126171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4668.80634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.3525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.7033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1317.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.57822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.2796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1527.618359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 955.3228515625,
            "unit": "MiB/s"
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
        "date": 1700744721878,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.98271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.020703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.89833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.88271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.505078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4782.85224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.9220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.11904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.85751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1166.75322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.22744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1253.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.43955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1568.4705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.42255859375,
            "unit": "MiB/s"
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
        "date": 1701178790366,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.84169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.67490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.37431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.8947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.40517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 7.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4765.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 226.697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.02734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1359.26640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.40146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1269.7890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.531640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1597.65205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.46103515625,
            "unit": "MiB/s"
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
        "date": 1701181090078,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.55732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.96767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.95458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.59619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.65771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.59775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4775.19130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.63125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 110.4876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1522.53505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1221.4005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 38.48740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1382.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1081.109765625,
            "unit": "MiB/s"
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
        "date": 1701182930918,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.2322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.93740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.68388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.54580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.95556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.96884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.28154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4743.10439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.3208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 53.167578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1277.8751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.94326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1321.98505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.68916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1661.74736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.9734375,
            "unit": "MiB/s"
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
        "date": 1701197395228,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.0462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.910546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.56337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.46796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4655.252734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.5603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 91.85732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1609.32158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.8626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1243.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.46083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1447.8224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 961.49248046875,
            "unit": "MiB/s"
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
        "date": 1701198806170,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.47646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.50361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.32783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.5388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.137109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.26533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.43447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4752.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.344921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.576953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.5435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1364.25400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.8947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1347.3095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.14130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.54287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 926.192578125,
            "unit": "MiB/s"
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
        "date": 1701206693263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.3935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.7599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.12265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.91396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.56689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.60419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4789.23525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.81357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.687890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1225.775,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.78681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1485.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.322265625,
            "unit": "MiB/s"
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
          "id": "3f25f323ed61b6a79f89b127ef3553beef460176",
          "message": "Exclude unused files from mountpoint-s3-crt-sys crate (#646)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-28T19:34:37Z",
          "tree_id": "d489e3876a4bf98bdb10b7b75a417d72ca38e7cc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3f25f323ed61b6a79f89b127ef3553beef460176"
        },
        "date": 1701211343848,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.9087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.54130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.700390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.948046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.790234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4814.79169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.0677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1509.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 38.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1152.76865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1572.0119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1071.76025390625,
            "unit": "MiB/s"
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
          "id": "099638eede5fc34756e46b9eb6af6582c8fe1a55",
          "message": "Fix crash on invalid part size (#649)\n\n* Return CRT client initialization error instead of panicking\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Simplify handling of initialization errors\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-29T17:37:44Z",
          "tree_id": "5069f4802f987ff6745d34a3db6683c10762d804",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/099638eede5fc34756e46b9eb6af6582c8fe1a55"
        },
        "date": 1701292074353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.7529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.58046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.44404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.67578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.49033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4756.25244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 206.7033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.47880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.99677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1397.29287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.18818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1321.65400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1621.6251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.05146484375,
            "unit": "MiB/s"
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
          "id": "cc20c75bc036fae7b63675d7c00815c209024e87",
          "message": "Add workflow to verify crate packaging (#650)\n\n* Add workflow to verify crate packaging\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix indentation of workflow\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-30T08:58:13Z",
          "tree_id": "0b02989328a9c2a105759d10ae8777f034a07d2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc20c75bc036fae7b63675d7c00815c209024e87"
        },
        "date": 1701347240350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.49716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.64296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.63916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4723.43837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.1427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.108203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.2115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.74912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.9275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1233.66005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1451.76787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.73037109375,
            "unit": "MiB/s"
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
          "id": "963258fbf9cea26adb93d69643f1fea5684288e1",
          "message": "Update CRT submodules to latest releases (#652)\n\n* Update CRT submodules to latest releases (aws-c-s3 0.4.3)\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 dc90010..de36fee:\n  > Bypass for CreateSession reqeust (#384)\n  > Mem limiter validation (#385)\n  > Fix tests to use net_test_case (#383)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update S3CrtClient test to reflect loosened part size constraint\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T12:12:11Z",
          "tree_id": "c994bd0895147c6c801639a60df7159b6943e938",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/963258fbf9cea26adb93d69643f1fea5684288e1"
        },
        "date": 1701358963578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.5001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.4646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.3220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.47861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.61826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.27509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.70107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4720.82275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.67490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.25126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.67939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1420.11982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.0166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1244.29658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1453.991796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.75048828125,
            "unit": "MiB/s"
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
          "id": "7530462558e9edde1127cd8642ad3e7ce84e88a2",
          "message": "Release v1.3.1 (#654)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-30T16:40:36Z",
          "tree_id": "b49784de3208e570bc83a529f1572a75dd2a58b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7530462558e9edde1127cd8642ad3e7ce84e88a2"
        },
        "date": 1701375123913,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.8982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.11708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.21552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.60419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4770.3734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.49921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.51689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.17890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1329.911328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.91376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1104.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.1447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1377.53505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1018.93671875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1701375124779,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}