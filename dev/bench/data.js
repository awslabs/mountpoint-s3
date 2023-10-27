window.BENCHMARK_DATA = {
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
          "distinct": false,
          "id": "7e9471129f456ee47b2563b009e611688f94a66b",
          "message": "Refactor signing configuration (#545)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-10-16T22:29:45Z",
          "tree_id": "723ea808ebf4bb0d4f87afe83be35cb0aea4497f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e9471129f456ee47b2563b009e611688f94a66b"
        },
        "date": 1697508152023,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.07978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 35.62607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.7162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 31.75380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.31396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.6853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4672.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 199.6978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 7.64755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 8.80673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1339.46396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.745703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 479.406640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 30.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1243.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.60908203125,
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
        "date": 1697569733623,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.01796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 31.16494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 29.52666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.81611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 4.64052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.75791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 4.65595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 196.28359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 8.2740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 7.73564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1287.02685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.8150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 820.69912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.2767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1249.0826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 919.25107421875,
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
          "id": "f58dbc52fec09394ee60d285bec1c3e082f06391",
          "message": "Allow seeking within a prefetch stream (#556)\n\n* Allow seeking forwards within the prefetch stream\n\nRight now we reset the prefetcher any time it seeks forwards, even if\nthe distance it's seeking could be handled by inflight requests (in the\nworst case, the bytes are already in our buffers, and we just throw them\naway). That's expensive and slow!\n\nThis change allows us to seek forwards a limited distance into the\nprefetch stream. When we see a seek of an acceptable distance, we\nfast-forward through the stream to the desired target offset, dropping\nthe skipped bytes on the floor. We enforce a maximum seek distance,\nwhich is a trade-off between streaming a lot of unnecessary bytes versus\nan extra request's latency. I haven't put any careful thought into the\nnumber.\n\nThis commit also sets us up to support backwards seeking, which will\ncome in the future.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Allow seeking backwards within a prefetch stream\n\nLinux asynchronous readahead confuses our prefetcher by sometimes making\nthe stream appear to go backwards, even though the customer is actually\njust reading sequentially (#488). The problem is that with parallel FUSE\nthreads, the two asynchronous read operations can arrive to the\nprefetcher out of order.\n\nThis change allows us to tolerate a little bit of backwards seeking in a\nprefetch stream. We keep around a little bit of previously read data and\ncan reload it in the event that a seek goes backwards. We do this by\ncreating a fake new request containing the rewound bytes, so that the\nexisting read logic will pick them up. I chose an arbitrary max for the\nbackwards seek buffer, big enough to handle Linux readahead.\n\nThis should fix the readahead issue: in my testing, I no longer saw slow\nsequential reads, and the logs confirmed this seeking logic was being\ntriggered in both directions (forwards and backwards), consistent with\nthe readahead requests sometimes arriving out of order.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Fix Shuttle tests with new request size logic\n\nThe old test was hiding a bug because it used a hard coded part size of\n8MB regardless of what the client used. #552 changed that and now this\ntest runs out of memory a lot because it degrades to doing 1 byte\nrequests. I don't think it's worth playing with the logic because it\nrequires a weird config to get there, so just fix the test.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-18T08:46:49Z",
          "tree_id": "33d924b57855d7830f4a641f426d299c30db9aa4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f58dbc52fec09394ee60d285bec1c3e082f06391"
        },
        "date": 1697631982258,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.5693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.52431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.84443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.60029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4683.3650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.64912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 104.68369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 47.34443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1331.04267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.29921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1363.88310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.19697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1304.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 857.58193359375,
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
          "id": "4159cc4e8cd121cd1e7f7f561d00b572635fd2d5",
          "message": "Improve clarity of LOGGING.md for `--log-directory` argument (#558)\n\n* Improve clarity of LOGGING.md for `--log-directory` argument\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add extra mention of `mount-s3` for arguments after we mention `journalctl`\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-18T08:48:02Z",
          "tree_id": "42dc7ccfca0cdce8c68535b69a7cd6aaf3608f42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4159cc4e8cd121cd1e7f7f561d00b572635fd2d5"
        },
        "date": 1697632012693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 28.8775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.94384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.0880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.0111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.59140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.93046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4718.53193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.1337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 114.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.35087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1342.1140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1239.92880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1497.86640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.38291015625,
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
          "id": "1754fa2677a859ad94c76c197ae430fdf75bb747",
          "message": "Add metadata cache configuration flags behind build-time feature (#559)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-18T08:48:42Z",
          "tree_id": "3691915a0d0fe82dae7fbed45a3831f7ade98e7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1754fa2677a859ad94c76c197ae430fdf75bb747"
        },
        "date": 1697632059336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 29.00595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 21.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.36796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.1623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.48603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.41669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4711.7609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 207.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 114.96474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.3564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1406.60791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.0025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.5298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1292.83759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 973.19267578125,
            "unit": "MiB/s"
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
        "date": 1697672315084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.0234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.1517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.40029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.7048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.59970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4668.17607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 110.173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.2564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1389.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.63330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1320.480078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.6353515625,
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
          "id": "2431807d71773d36c43f4b7aad519feb26064493",
          "message": "Complete the upload on flush (#526)\n\nCurrently, Mountpoint will complete an upload in two cases:\n* on `release`, that is when the last file descriptor pointing to an open file handle is closed.\n  This is transparent for the caller, but does not allow for reporting the outcome of the upload,\n  nor for blocking until it is completed. This means that a read-after-close may not succeed\n  because the upload is still in progress.\n* on `fsync`, which is blocking and can return an error to the caller, but needs to be explicitly\n  invoked before closing a file.\n\nThis change implements the `flush` operation, which is invoked when a file descriptor is closed.\nOn `flush`, like on `fsync`, Mountpoint will complete the upload, block, and return on success or\nfailure. In order to support common usage patterns where it is invoked multiple times, `flush`,\nunlike `fsync`, will be a no-op when invoked before any data has been written or by a different\nprocess than the one that originally opened the file.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-10-19T14:37:24Z",
          "tree_id": "d791318c281bc569877fc3bf1dcbc8dca07d9266",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2431807d71773d36c43f4b7aad519feb26064493"
        },
        "date": 1697739057383,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.4296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.398828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.25751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.88779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.9021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.67861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4616.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 196.89697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.10390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1415.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.47021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1221.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1275.25498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 897.8505859375,
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
          "id": "17f7de579c4eb7606d818e11c58d5b8b7245b307",
          "message": "Add configurable user agent prefix flag for mount-s3 (#548)\n\n* Add configurable user agent prefix flag for mount-s3\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add CHANGELOG.md entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move `--user-agent-prefix` argument to bottom of 'Client options' section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move `--user-agent-prefix` argument to new 'Advanced options' section\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix mountpoint-s3 CHANGELOG.md order\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-19T17:19:30Z",
          "tree_id": "5d237660ca2870d8d40a04a90c7596954d87558c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17f7de579c4eb7606d818e11c58d5b8b7245b307"
        },
        "date": 1697748517122,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.565625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.647265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.4150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.70205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.05400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.773046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4685.51064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 200.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 100.4142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1489.46416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1222.6291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.88193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1368.95625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.4625,
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
          "id": "dbfa87caef3f6d037d7bf64e2b3729d427441955",
          "message": "Expand a few documentation things (#569)\n\nCapturing answers to a few common questions we've had recently that\nweren't obvious from the docs. I also learned about [highlights][]\nand had some fun with them.\n\n[highlights]: https://github.com/orgs/community/discussions/16925\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2023-10-20T16:02:43Z",
          "tree_id": "f817bc58452be9165e65fb7c20c6217ae9fd1905",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dbfa87caef3f6d037d7bf64e2b3729d427441955"
        },
        "date": 1697830686095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.18193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.83466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.93427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.1291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.23388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.25234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4649.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 197.57470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.35302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1108.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1110.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1270.61162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 903.07880859375,
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
          "id": "cb0d26bba55b27b2ef40302542daa2d1bd197d5d",
          "message": "Add new DataCache trait and InMemoryDataCache implementation (#557)\n\n* Add new DataCache trait and InMemoryDataCache implementation\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Replace indices_for_byte_range with block_size, moving responsibility to caller\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Implement PartialEq for ChecksummedBytes when testing, replacing assert_eq_checksummed_bytes macro\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update DataCache to use interior mutability\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix assert_eq! issue (& and &&)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update error types\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update struct/module visibility\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-23T11:00:15Z",
          "tree_id": "347f1ee5cad8fdd953a820ec3c4189faa9742af4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cb0d26bba55b27b2ef40302542daa2d1bd197d5d"
        },
        "date": 1698071628154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 13.39912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.3716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.3392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.821484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.10146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4588.8158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.07919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 99.83779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 46.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1134.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.6072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1186.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1204.42626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 937.57763671875,
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
          "id": "15bec263971818398093ebc6de55bfa18aeaf421",
          "message": "Release v1.1.0 (#565)\n\n* Release v1.1.0\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Update release date\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-23T12:56:58Z",
          "tree_id": "db57cef5b833c2abce92c9dd56d1aef62c84a8f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15bec263971818398093ebc6de55bfa18aeaf421"
        },
        "date": 1698078637951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.12451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.3498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.98662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.94482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.55283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.413671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.59248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4583.5759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.0091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 104.1294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 43.28125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1380.47333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.97626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1302.1595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1381.03330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 940.37265625,
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
        "date": 1698177273215,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.22275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.33515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.6123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.10771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.11865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.41083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.13544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4592.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.53193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 92.96201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1205.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.93828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1013.51943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.47685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1270.41162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 934.76279296875,
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
          "id": "fa0d516ccb71c09881ef4e87fd87b396853b1a00",
          "message": "Add request count tests for FS operations with metadata caching enabled (#567)\n\n* Add counters to MockClient for testing request counts\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add tests verifying request counts after readdir,open,lookup,unlink with caching enabled\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease rustc warnings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Appease clippy warnings\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update OperationCounter::count rustdoc\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add test verifying request counts on open when cache is off\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-10-25T14:20:02Z",
          "tree_id": "bfc2689df726856f7fe26281679af4861d8c4e40",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa0d516ccb71c09881ef4e87fd87b396853b1a00"
        },
        "date": 1698256618915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.45283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.09814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.5787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.2681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.45185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.10380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.2330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4621.26611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 101.740625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1111.1849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.42451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1026.997265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.25185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1222.18125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.44091796875,
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
      }
    ]
  },
  "lastUpdate": 1698431688646,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}