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
          "id": "71277e796bde3b729ed2a52814ab29fe47e91f78",
          "message": "Replace use of Range with RangeBounds for DataCache trait (#579)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-26T15:06:24Z",
          "tree_id": "d7bdfea0c1c9ff00ee015b298f738b6c9639e2b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/71277e796bde3b729ed2a52814ab29fe47e91f78"
        },
        "date": 1698346015709,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.60947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.41015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.305078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.12275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.14384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.06962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.03291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4652.0982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.15244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.36875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.64404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1203.80986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1053.9146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.44658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1267.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 863.85849609375,
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
          "id": "524eac6b3d0102d7413b17465ff4e257c09ec399",
          "message": "Improve ChecksummedBytes::extend and clarify data integrity guarantee (#575)\n\n* Move ChecksummedBytes into a new module\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Improve ChecksummedBytes::extend and clarify data integrity guarantee\n\nChecksummedBytes maintains a data buffer and a checksum and guarantees that only validated data can be accessed. Transformations such as `split_off`, `extend`, or `slice` (introduced in this change), may trigger a validation (and return an IntegrityError on failure), or propagate existing checksum(s) if possible, allowing for later validation.\n\nThis change clarifies the data integrity guarantee in the docs and optimizes the extend method to avoid re-validation when the checksums for both slices can be combined. It also avoid a redundant buffer allocation.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add split_off tests\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Make clearer that shrink_to_fit does not copy data\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-26T18:22:18Z",
          "tree_id": "f618984e46d80f811dd6b916b1dcc524dc52a6b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/524eac6b3d0102d7413b17465ff4e257c09ec399"
        },
        "date": 1698357673593,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.71083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.38974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.0576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.62763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4698.9734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 97.8818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.440234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1508.18720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.22783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1125.14326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.60498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1309.69794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 839.9662109375,
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
          "id": "04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0",
          "message": "Fix readme links (#580)\n\nThe GitHub highlights thing seems to break relative links.\n\nFixes #578.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-26T18:54:27Z",
          "tree_id": "cd6a012cba5ada8149056662c5db353f2134748c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0"
        },
        "date": 1698359574578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.77490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.31591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.56572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.4421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.61748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.609765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4740.2208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 198.7927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 105.0462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.7216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1329.97939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.0939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.71796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.2166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1476.6521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 926.74912109375,
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
          "id": "04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0",
          "message": "Fix readme links (#580)\n\nThe GitHub highlights thing seems to break relative links.\n\nFixes #578.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-26T18:54:27Z",
          "tree_id": "cd6a012cba5ada8149056662c5db353f2134748c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/04f7499f6e7ac01ff340f4edf2ba09a073ffe5e0"
        },
        "date": 1698411462715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.72314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.04619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.540234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.980859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4649.18984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 197.87158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 108.3017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.06279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1210.78798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 30.185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1354.4310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 910.24990234375,
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
          "id": "eac02e6a77eae78a7e66f04362c313d9372067bd",
          "message": "Rename CacheConfig field 'prefer_s3' to 'serve_lookup_from_cache' (#573)\n\n* Rename internal CacheConfig field 'prefer_s3' to 'serve_lookup_from_cache'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add trace log when inode cannot be updated in place\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-24T16:17:02Z",
          "tree_id": "ddaf4274cd6987f66e7b864bba87b8f1ed3da46b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eac02e6a77eae78a7e66f04362c313d9372067bd"
        },
        "date": 1698411498759,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.54287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.33837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.933203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.60537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.7806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4707.24189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.1283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 104.26220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.93779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1341.183203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.0705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1289.43701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 31.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1325.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.92314453125,
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
          "id": "a50f1caa82caa872ade6520127a47757320b3208",
          "message": "Implement prefer_s3 toggle in mountpoint-s3::fs::CacheConfig (#547)\n\nThis plumbs in checks for if the filesystem should maintain strong consistency for operations like open.\nThere is no way to configure mountpoint-s3 itself to relax the consistency model - this change only impacts internals.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-17T15:38:49Z",
          "tree_id": "8c62156f996849c6bf9a0687a4d8d3ae8e975ce4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a50f1caa82caa872ade6520127a47757320b3208"
        },
        "date": 1698411515348,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.53720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.94443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 28.1927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.74296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.7552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4687.0091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 200.128515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.9359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1300.75126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.9771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 713.97998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 29.3423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1296.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 908.990625,
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
          "id": "8e5688dc45f5a76d145d03a859ad0160a12e43c8",
          "message": "Allow repeated readdir offsets (#581)\n\n* Allow repeated readdir offsets\n\nPOSIX allows seeking an open directory handle, which in FUSE means the\n`offset` can be any offset we've previously returned. This is pretty\nannoying for us to implement since we're streaming directory entries\nfrom S3 with ListObjects, which can't resume from an arbitrary index,\nand can't fit its continuation tokens into a 64-bit offset anyway. So\nwe're probably never going to truly support seeking a directory handle.\n\nBut there's a special case we've seen come up a couple of times (#477, #520):\nsome applications read one page of directory entries and then seek back\nto 0 and do it again. I don't fully understand _why_ they do this, but\nit's common enough that it's worth special casing.\n\nThis change makes open directory handles remember their most recent\nresponse so that they can repeat it if asked for the same offset again.\nIt's not too complicated other than needing to make sure we do\nreaddirplus correctly (managing the lookup counts for entries that are\nbeing returned a second time).\n\nI've tested this by running the PHP example from #477, which now works.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog and docs\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-27T15:02:35Z",
          "tree_id": "0a00dc019105785c874c199e01518a49c7a52e28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e5688dc45f5a76d145d03a859ad0160a12e43c8"
        },
        "date": 1698431688169,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.31181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 33.61611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.51611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 40.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.20576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.61513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.81611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4632.26630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 182.4859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.83173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 42.57470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1147.56572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.1126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1124.50888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.13828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1437.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.833984375,
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
          "id": "8e5688dc45f5a76d145d03a859ad0160a12e43c8",
          "message": "Allow repeated readdir offsets (#581)\n\n* Allow repeated readdir offsets\n\nPOSIX allows seeking an open directory handle, which in FUSE means the\n`offset` can be any offset we've previously returned. This is pretty\nannoying for us to implement since we're streaming directory entries\nfrom S3 with ListObjects, which can't resume from an arbitrary index,\nand can't fit its continuation tokens into a 64-bit offset anyway. So\nwe're probably never going to truly support seeking a directory handle.\n\nBut there's a special case we've seen come up a couple of times (#477, #520):\nsome applications read one page of directory entries and then seek back\nto 0 and do it again. I don't fully understand _why_ they do this, but\nit's common enough that it's worth special casing.\n\nThis change makes open directory handles remember their most recent\nresponse so that they can repeat it if asked for the same offset again.\nIt's not too complicated other than needing to make sure we do\nreaddirplus correctly (managing the lookup counts for entries that are\nbeing returned a second time).\n\nI've tested this by running the PHP example from #477, which now works.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* PR feedback\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Changelog and docs\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-27T15:02:35Z",
          "tree_id": "0a00dc019105785c874c199e01518a49c7a52e28",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8e5688dc45f5a76d145d03a859ad0160a12e43c8"
        },
        "date": 1698447281687,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.82734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.07197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.73427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.24462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.34541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4692.309765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 208.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 103.72119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.848046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1242.4923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.113671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1164.64072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.59443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1351.34599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.14716796875,
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
      }
    ]
  },
  "lastUpdate": 1700282083351,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}