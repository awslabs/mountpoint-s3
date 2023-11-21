window.BENCHMARK_DATA = {
  "entries": {
    "Benchmark": [
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
        "date": 1698757838477,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.43349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.30283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 5.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.71025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.0265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 0.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4592.719140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.18857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 106.5193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.30419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1103.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1003.3099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.42626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1295.51005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 925.167578125,
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
          "id": "404ba9c9965a9efc83bb84acabf01af4b03ce3ec",
          "message": "Remove unused generic in DataCache (#589)\n\n* Remove unused generic in DataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataCache RustDoc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-31T16:11:47Z",
          "tree_id": "cd4c68d699585b4bcc87220b1dc93e9003644eae",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/404ba9c9965a9efc83bb84acabf01af4b03ce3ec"
        },
        "date": 1698781421428,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.270703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.96337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.84248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 0.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.51650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4539.79091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.71845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.528125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.63173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1198.88798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.32529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1010.97001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1239.3572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1015.78203125,
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
          "id": "9a4cfd8a5f59cf744268c19ceaa608354db45e7a",
          "message": "Implement disk-based DataCache with no eviction (#593)\n\n* Implement disk-based DataCache with no checksums or eviction\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typos\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64URL encoding with Base64URLUnpadded encoding for data cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Ensure cached indicies are sorted in DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add trace message when creating block in cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* WIP: Add checksums to on-disk cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove cached_block_indices implementation on DiskDataCache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move version identifier to constant\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace SerializableCrc32c with u32\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataBlock::new(..) to return Result\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add verification of block metadata to unpack after reading\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace Base64 encoding with SHA256 hash\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add TODO to split directories into sub-directories to avoid hitting any FS-specific max number of dir entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove intermediate buffers when (de)serializing DataBlock with bincode\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add cache version identifer to the start of blocks written to disk\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix comment on ETag::into_inner\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add rustdoc to DataBlock::new\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix typo in rustdoc for DataBlock::data\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add expected version to data block read error message\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Split DataBlock header fields into BlockHeader\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add checksum validation on on-disk cache DataBlock header contents\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove outdated TODO\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add test for detecting when DataBlock requires version bump\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Refactor errors for DataBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Rename DataBlock to DiskBlock\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-03T12:27:22Z",
          "tree_id": "7fa4785ab17d82d9e72ffb42bedbf87de7682baa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9a4cfd8a5f59cf744268c19ceaa608354db45e7a"
        },
        "date": 1699027435945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.23486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.26201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.20517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.38818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.06708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.5244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4637.30341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.43076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.5671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.2677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1252.73759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1139.667578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.457421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1302.53427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.767578125,
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
          "id": "faebbef09df4eff6ca9270a536bb89e81a882d5c",
          "message": "Expose DataCache module and CacheKey fields (#596)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T10:12:42Z",
          "tree_id": "386506ee213da57dd953f342f5b942dbb90a492c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/faebbef09df4eff6ca9270a536bb89e81a882d5c"
        },
        "date": 1699278641813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.659765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.3455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.8126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.8216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4675.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.746875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1368.35234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.66484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1171.60390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.82958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1296.381640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 923.24658203125,
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
          "id": "84c8a722acc38ba7be5ff598d710031e6997e409",
          "message": "Fix various clippy warnings about unused code and variables (#597)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-06T15:02:02Z",
          "tree_id": "34697dc75aa55b266eec033b9f31289f71cece7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c8a722acc38ba7be5ff598d710031e6997e409"
        },
        "date": 1699295980981,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.34619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.39345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.8953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.94140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4647.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.78056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.74951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.7466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1316.1837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.47158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.0740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1435.09140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.94755859375,
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
          "id": "164789b7df3071d5d949cb0387de50dde1e8345f",
          "message": "Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md (#591)\n\n* Add instructions on mounting S3 bucket across reboots to CONFIGURATION.md\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update WantedBy target from default to remote-fs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update documentation based on PR feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-07T03:23:56Z",
          "tree_id": "b6995122ca2aae9cbe14098cdb603bacefbf2369",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/164789b7df3071d5d949cb0387de50dde1e8345f"
        },
        "date": 1699339933796,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.537890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.12802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.20869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.275,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.49013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.6798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.25791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4655.49833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.71689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.64140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1377.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.40732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1219.27470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.698828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1236.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 886.9193359375,
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
          "id": "6dead834c3867e4ed1625ca1cfa080ce5e6deef0",
          "message": "Update vendored fuser to 82bd70c (v0.14.0) (#599)\n\n* Update vendored fuser to 82bd70c (v0.14.0)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Update fuser dependency to v0.14.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-07T15:21:02Z",
          "tree_id": "382b6f9bdc695a261ea499efcc262086236692fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6dead834c3867e4ed1625ca1cfa080ce5e6deef0"
        },
        "date": 1699383319254,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.516015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.3384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.41982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.51767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.52294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.82001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4710.221484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.13310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.45712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1349.16875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.1892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1204.5953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1408.37314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.77529296875,
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
          "id": "c6b2a17e405a6754926c4f726f646efe9ef2bd2a",
          "message": "Introduce Prefetch trait (#595)\n\nIntroduce a new `Prefetch` trait to abstract how `S3Filesystem` fetches object data from an `ObjectClient`. While this change does not introduce any functional change, this abstraction will be used to implement optional object data caching.\n\nThe existing `Prefetcher` struct has been adapted to implement the new `Prefetch` trait. The main changes are:\n* it is generic on the `ObjectPartStream` (previously `ObjectPartFeed`), rather than using dynamic dispatch,\n* it does not own an `ObjectClient` instance, instead one is required when initiating a `prefetch` request,\n* the logic to spawn a new task for each `GetObject` request and handle the object body parts returned was moved into `ObjectPartStream`.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-08T14:26:45Z",
          "tree_id": "1b6103bf65da935f6950522e3207dfec4d77296b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6b2a17e405a6754926c4f726f646efe9ef2bd2a"
        },
        "date": 1699466844593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.09619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.05595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.73671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.39306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.598828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4634.17822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 192.06552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.44033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 40.2357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1514.2298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 31.70341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 31.33037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1353.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.67275390625,
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
          "id": "9768f31cdb62884ea3e145311236f1c8252378b6",
          "message": "Update CRT submodules to latest releases (#601)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-09T10:50:12Z",
          "tree_id": "ad0db3334c651795cbd0a847cd4bf021038052d3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9768f31cdb62884ea3e145311236f1c8252378b6"
        },
        "date": 1699539566697,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.1119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.59423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.90537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.48310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.65400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4726.9337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 194.90224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.94931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.7994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1335.09453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1220.8796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.98349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1465.483984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 918.52236328125,
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
          "id": "689ebe3a93196b6c7f568f13267cb80c0985712e",
          "message": "Add ETag into DiskDataCache hashed block path (#594)\n\n* Move ETag into DiskDataCache hashed block path\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Test hash_cache_key separately from get_path_for_key/get_path_for_block\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CACHE_VERSION to hash computed on cache_key\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-10T16:53:40Z",
          "tree_id": "2839291d2a4dc372c483627d3bd7df7c74972144",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/689ebe3a93196b6c7f568f13267cb80c0985712e"
        },
        "date": 1699647761253,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.23828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.08115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.5380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.57275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.940625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4822.9068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 199.86787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 105.1724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.45830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1226.16611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.4259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1244.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.8146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1528.3908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 940.09248046875,
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
          "id": "493fc236846d0c28246fb6b728c2dc17fb5810e7",
          "message": "Update CRT submodules to latest releases (#604)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-14T11:40:50Z",
          "tree_id": "d38f043e9d7000471ac4791bb3e39d3c16cf670b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/493fc236846d0c28246fb6b728c2dc17fb5810e7"
        },
        "date": 1699974857093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.4322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.24267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4540.919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.891015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 103.8669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.76484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1621.05537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.02939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1307.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.29052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1480.11083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 967.187890625,
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
          "id": "aeb5574208af2014e2da18772b85fd3477ab6be1",
          "message": "Use top-level file in write benchmark (#613)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-18T01:04:06Z",
          "tree_id": "4b9d83fc1c63d684d8986b8290de3a567beb0e1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aeb5574208af2014e2da18772b85fd3477ab6be1"
        },
        "date": 1700282082864,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.8447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.16669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.88037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.2384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4538.28984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.32255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 84.03466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 38.945703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1365.21572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1132.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1369.57421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.9,
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
          "id": "7b1b4b3b471c878fdd02393176c4f353e36c81cb",
          "message": "Disable data cache when setting --max_cache_size=0 (#616)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-11-21T03:58:19Z",
          "tree_id": "90d44313d1cdd5cec2ea69cc5da2554664419ebc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b1b4b3b471c878fdd02393176c4f353e36c81cb"
        },
        "date": 1700551674725,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.42734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.29189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.9328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.40478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.68955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.36875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.47060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4640.62099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.0857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.88740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.266015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 928.12421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.80927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1186.4556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.25205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1677.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.15498046875,
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
          "id": "661d0fbedec99fb86b228384707e2c3b35663ed1",
          "message": "Improve logging for ETags and FUSE operation flags (#618)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-11-21T11:40:44Z",
          "tree_id": "59906c6109e0250b13fb6c390f0f44253cf238d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/661d0fbedec99fb86b228384707e2c3b35663ed1"
        },
        "date": 1700579385161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.9775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.76123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.77314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.170703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.716015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.09873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4546.28837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.6869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 945.37490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.83251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 936.52763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1349.13515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.408984375,
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
          "distinct": true,
          "id": "3d9b8a9f671a70742a751f8823fd80a09068df06",
          "message": "Use a unique target for request spans (#615)\n\nThese spans are emitted at a high level (WARN), which is annoying for\nclients that want to use an adapter to the `log` facade, where `tracing`\nwill emit an event whenever a span is created. To help these clients\nfilter out these span events, let's use a unique target for them.\n\nI verified that log messages for requests are still emitting this span\nmetadata when Mountpoint requests log, so this only affects clients that\naren't using `tracing`.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-21T15:01:05Z",
          "tree_id": "8a5e550b7723e55762b291ce35097ff4de9e897e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d9b8a9f671a70742a751f8823fd80a09068df06"
        },
        "date": 1700591435833,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.3232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.65771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.52353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.65947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.9078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4446.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 91.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.16083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1407.579296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.12421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1115.41708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.530859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1405.7798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1075.99072265625,
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
          "distinct": true,
          "id": "2719a5fc9ad807bdcd63cae57dac593d50c2a630",
          "message": "Release new crate versions (#621)\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-11-21T17:00:15Z",
          "tree_id": "3d222a39c053baf97fa097c9fe0d279979415274",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2719a5fc9ad807bdcd63cae57dac593d50c2a630"
        },
        "date": 1700598912840,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.92783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.19189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.94345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.64111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.855078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4438.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 212.364453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.64208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.9904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.665625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.02041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1058.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.0927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1481.521875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 933.9162109375,
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
      }
    ]
  },
  "lastUpdate": 1700607907899,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}