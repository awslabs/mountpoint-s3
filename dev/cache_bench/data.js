window.BENCHMARK_DATA = {
  "lastUpdate": 1713891790060,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "127fb714e3b279291dacc6f59e9c6291fbf5a611",
          "message": "Adding support for rewinddir by restarting readdir if offset is zero. (#825)\n\n* Adding support for `rewinddir` by restarting readdir if offset is zero.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding mention to rewinddir to semantics doc.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Replace rewind method with a new ReaddirHandle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding a rewind_offset fn.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding more tests.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Creating a fn for creating a default handle.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Fix clippy and format.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Rename to readdir_handle. Move to single lock.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-03-28T15:58:38Z",
          "tree_id": "c5e05cd7cc52294e272b755ea9e527ec0d606640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/127fb714e3b279291dacc6f59e9c6291fbf5a611"
        },
        "date": 1711649088427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1276.30166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2054.4775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.9943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1583.8935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.4412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.44619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3729.69521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4021.3837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 709.57646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1303.325,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1286.95078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1461.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1206.30224609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1175.4203125,
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
          "id": "84827e7b07a1c5f8eca0d9508c71bbb9263099af",
          "message": "Expose memory consumption metrics (#820)\n\n* Add memory consumption metrics for the prefetcher\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Add buffer pool usage metrics\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Report mountpoint total memory usage\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-03-30T03:42:01Z",
          "tree_id": "75d59e4b9095c5c00d3f8f5671ab60ceda722981",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84827e7b07a1c5f8eca0d9508c71bbb9263099af"
        },
        "date": 1711777375715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1229.61640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2058.5021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 767.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1586.133984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 361.73330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 530.92294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 204.99140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3901.33388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3898.662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 644.0419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1369.473828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1221.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1348.89794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.64521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1082.56865234375,
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
          "id": "a187420bff60d97efe133754233bd370b6243c5a",
          "message": "Increase default max retries and expose environment variable to override (#830)\n\n* Increase default max retries and expose environment variable to override\n\nWe were using the SDK's default retry configuration (actually, slightly\nwrong -- it's supposed to be 3 total attempts, but we configured 3\n*retries*, so 4 attempts). This isn't a good default for file systems,\nas it works out to only retrying for about 2 seconds before giving up,\nand applications are rarely equipped to gracefully handle transient\nerrors.\n\nThis change increases the default to 10 total attempts, which takes\nabout a minute on average. This is in the same ballpark as NFS's\ndefaults (3 attempts, 60 seconds linear backoff), though still a little\nmore aggressive. There's probably scope to go even further (20?), but\nthis is a reasonable step for now.\n\nTo allow customers to further tweak this, the S3CrtClient now respects\nthe `AWS_MAX_ATTEMPTS` environment variable, and its value overrides the\ndefaults. This is only a partial solution, as SDKs are supposed to also\nrespect the `max_attempts` config file setting, but we don't have any of\nthe infrastructure for that today (similar issue as #389).\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* Surprised Clippy doesn't yell about this\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-02T19:05:22Z",
          "tree_id": "b51d26a75fe15c3580cc4a51198d8381b8ff2b43",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a187420bff60d97efe133754233bd370b6243c5a"
        },
        "date": 1712092139463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1214.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2079.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 778.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1578.7369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.71552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 452.20517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3844.46982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3987.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 690.64228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1300.08017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1373.06025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 759.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1281.0767578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1102.6494140625,
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
          "id": "a34b682afbaec424bf90ab76adc456665c839b25",
          "message": "Update h2 dependency (#835)\n\nAddress vulnerability found by cargo deny:\n    = ID: RUSTSEC-2024-0332\n    = Advisory: https://rustsec.org/advisories/RUSTSEC-2024-0332\n    = An attacker can send a flood of CONTINUATION frames, causing `h2` to process them indefinitely.\n      This results in an increase in CPU usage.\n\n      Tokio task budget helps prevent this from a complete denial-of-service, as the server can still\n      respond to legitimate requests, albeit with increased latency.\n\n      More details at \"https://seanmonstar.com/blog/hyper-http2-continuation-flood/.\n\n      Patches available for 0.4.x and 0.3.x versions.\n    = Solution: Upgrade to ^0.3.26 OR >=0.4.4 (try `cargo update -p h2`)\n    = h2 v0.3.24\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T15:59:07Z",
          "tree_id": "73f9f47dea1feb4c2d8c58a73b1139f9d9d5793c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a34b682afbaec424bf90ab76adc456665c839b25"
        },
        "date": 1712254502114,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1190.6625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2061.20830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 753.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1562.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 343.05966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.96171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 243.3388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.9646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3588.74658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4012.8880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 727.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1298.94970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1244.680078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1433.3109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1238.8375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1109.67861328125,
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
          "id": "759f3efd16f01453f8c6f4ae98f6dc641528a418",
          "message": "Update CRT submodules to latest releases (#822)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-04T19:02:22Z",
          "tree_id": "63be9409ceb65eda7ce0cf64f013ac38201a9bd4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/759f3efd16f01453f8c6f4ae98f6dc641528a418"
        },
        "date": 1712264750161,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.89599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2066.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 771.5306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1589.14658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.55009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 568.15732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.52763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3873.251171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3877.41357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 720.31650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1357.7896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1379.90537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1029.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1205.60595703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 976.13134765625,
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
          "id": "cecd7e829fad24cdb52707a96260ca3c60a14845",
          "message": "Update CRT submodules to latest releases (#838)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-09T07:58:03Z",
          "tree_id": "7244ca953854c34512447bf25af063459d5c3cd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cecd7e829fad24cdb52707a96260ca3c60a14845"
        },
        "date": 1712658135232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1185.336328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2114.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1583.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.81162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 220.7671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.45810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3496.9337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4008.34541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 684.4013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1374.237109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1275.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1230.90009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1252.32294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1344.0513671875,
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
          "id": "2f2884b7c10387a677c5f16abcc3f4ac5fe862f8",
          "message": "Add new troubleshooting section for 'slower throughput than expected' (#834)\n\n* Add new troubleshooting section for 'slower performance than expected'\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note on cp copying in serial\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-04-09T23:19:39Z",
          "tree_id": "c2abbc0c1cc8095a1f30065c5245da968a3360d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2f2884b7c10387a677c5f16abcc3f4ac5fe862f8"
        },
        "date": 1712712007838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1220.64521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2045.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1567.755078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.71181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.89658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 234.42255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 285.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3684.2283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3920.44130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 626.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1292.9,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1286.709375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1391.64716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1187.057421875,
            "unit": "MiB/s"
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
          "id": "cf5fc24cf824bdd9f70058cc0f9c534aca2dd992",
          "message": "Remove the sse_kms feature flag from the CI (#840)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-10T08:37:10Z",
          "tree_id": "2e2e75b91b9ddca9ce35f0c79da52631226e62c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cf5fc24cf824bdd9f70058cc0f9c534aca2dd992"
        },
        "date": 1712745673710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1175.39658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2052.202734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 749.3333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1566.21923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.75458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 547.7388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.9404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.012109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4162.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4259.31005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 670.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1291.501171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1335.5658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1530.09521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.7033203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 933.22939453125,
            "unit": "MiB/s"
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
          "id": "8af2fb239872a8b1e501be7edd951840014b472b",
          "message": "Update SSE documentation and remove the feature flag (#839)\n\n* Update documentation, remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove the sse_kms feature flag from the CI\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\n\n* Remove the feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2024-04-10T10:52:59Z",
          "tree_id": "16acd71b059b4f4c68a4c1927045f016420a8d1d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8af2fb239872a8b1e501be7edd951840014b472b"
        },
        "date": 1712753695475,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1223.6298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2052.79775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 765.2568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1600.19228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.49375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 432.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.50302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 273.61865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3770.70224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4043.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 644.6654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1321.24833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1299.65458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1012.49658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1185.24580078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1196.298828125,
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
          "id": "2767c856d96984a523aad6a92f0f322e461ccdaf",
          "message": "Adopt new async write API for PutObject requests (#832)\n\n* Add failing test for concurrent put_objects\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Add failing test for multiple files open for write\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Adopt async write API to feed data into a PutObject request\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Wait for CreateMultiPartUpload\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* FutureVoid wrapper\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Ensure a MetaRequestWrite holds exclusive access to the meta-request until completion\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename on_telemetry callback (in mountpoint-s3-client)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Rename callbacks on_request_finish/on_meta_request_finish\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Use RequestMetric::error()\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Comments\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T14:06:53Z",
          "tree_id": "9fe356ae5937e9d7ebe2ea077ac8085470ac5f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2767c856d96984a523aad6a92f0f322e461ccdaf"
        },
        "date": 1712765393945,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.09130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.1529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1623.39912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 317.19814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 450.44521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 246.800390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.93896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.92978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4030.24765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 648.560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1351.51748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1309.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 743.5837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1161.13251953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1137.68984375,
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
          "id": "4cd3cd57557ed6c825a6108735a312a85dcf2221",
          "message": "Remove fuse_tests from asan (#844)\n\nThey frequently trigger a deadlock inside ASan's allocator. We're really\r\nusing ASan to test the CRT bindings anyway, so the S3 tests are really\r\nwhat matter most.\r\n\r\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-10T15:01:38-05:00",
          "tree_id": "50df3f85bdda712eb393abe4ed237640cccc3fc6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4cd3cd57557ed6c825a6108735a312a85dcf2221"
        },
        "date": 1712785855129,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1176.90712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2058.8025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 767.9009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1634.8908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.0365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 493.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 209.93330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.11494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3844.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4033.055859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 682.59677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1313.56806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1460.52138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1358.45849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1263.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.88720703125,
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
          "id": "9803ca56d6185e38d10c7590b5c6f08cac18da51",
          "message": "Publish new crate versions (#843)\n\n* Publish new crate versions\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n* Increment mountpoint-s3-crt* to v0.7.0\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-10T22:28:41Z",
          "tree_id": "a116d4cebe7db19caf421e92ef1106cd05fa9a1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9803ca56d6185e38d10c7590b5c6f08cac18da51"
        },
        "date": 1712795652320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1225.4609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2030.1083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 754.80556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1597.0939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 319.60126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 507.52431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3945.69873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4383.09150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 738.6150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1377.1142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1422.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 785.744921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1237.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1000.0083984375,
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
          "id": "1496c13f2078b9b5803d833161139b5600c0ace9",
          "message": " First pass at randomized testing for POSIX semantics (#842)\n\n* Don't use AutoUnmount in FUSE integration tests\n\nIt's the wrong thing to do: the FUSE session is unmounted automatically\nwhen the BackgroundSession drops. AutoUnmount is for the case when the\nmounting process might not unmount on its own, but we always do. Using\nthe option spawns a new thread and leaks a socket until the end of the\nprocess, which means our test processes can run out of open file\ndescriptors if they run many FUSE sessions.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n* First pass at randomized testing for POSIX semantics\n\nThe idea is to randomly run real system calls against both a real file\nsystem (a temporary directory on the OS disk) and Mountpoint. We expect\nMountpoint to allow fewer behaviors than a real POSIX file system (e.g.\ncan't read and write the same file handle), so we need some logic for\nallowing a limited set of divergences between the two systems.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>\n\n---------\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-11T02:03:59Z",
          "tree_id": "7f275c15f402814085f71198bbad49d9f4b02a13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1496c13f2078b9b5803d833161139b5600c0ace9"
        },
        "date": 1712808537374,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1183.13564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2056.667578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.97666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1574.58681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.23671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 403.026953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.13046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 292.2740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3652.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3937.0623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 672.77333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1322.5919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1328.24912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1167.383984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1205.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1127.3900390625,
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
          "id": "29cf8daf8f87aa216e5064c4b1a5fdd46009c164",
          "message": "Improve cancellation test for PutObject write (#845)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-04-11T11:07:27Z",
          "tree_id": "54dff8c2afb3a209cd9879da719589500a6cbd19",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29cf8daf8f87aa216e5064c4b1a5fdd46009c164"
        },
        "date": 1712840923989,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1210.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2070.79375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.20361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1579.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.86474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 525.06279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.5978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.162890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3756.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 719.69365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1393.48154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.9865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1085.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1067.40888671875,
            "unit": "MiB/s"
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
          "id": "f0c61a4911f0f5431c88f160a6d165d37c02f945",
          "message": "Update documentation on sse-kms (#847)\n\n* Update documentation on sse-kms\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the changelog\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Update the links\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* v1.6.0 (April 11, 2024)\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Unreleased for now\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T13:57:35Z",
          "tree_id": "399c7a5cf09b9010b3d93dc0a124e999d272be2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f0c61a4911f0f5431c88f160a6d165d37c02f945"
        },
        "date": 1712851360052,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.07705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2067.3203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1590.41220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.216015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 447.49140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.19052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.87822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3738.794140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4089.53330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 786.79404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1288.4326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1324.96279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1300.81279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1177.5060546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 963.4134765625,
            "unit": "MiB/s"
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
          "id": "ad0f53058710f77d2fc7d64cd7820cfde8847a81",
          "message": "Release v1.6.0 (#848)\n\n* Release v1.6.0\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Add other changes, fix header\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-04-11T15:49:41Z",
          "tree_id": "9beee3898632bc67ef7e62418873d77034912b55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad0f53058710f77d2fc7d64cd7820cfde8847a81"
        },
        "date": 1712858156849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1210.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2079.5150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 769.60625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1591.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 333.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 519.11552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.1859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.1154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3645.6853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4221.2404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 767.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1314.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1248.99453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1403.22939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1261.9375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1357.78720703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "nairashwin952013@gmail.com",
            "name": "Ashwin Nair",
            "username": "indianwhocodes"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2393b96acf0773a9b11b4b1c34e80538d83ff9e8",
          "message": "S3_ENDPOINT_URL configurable for mountpoint benchmarks (#821)\n\nSigned-off-by: indianwhocodes <nairashwin952013@gmail.com>",
          "timestamp": "2024-04-12T08:40:59Z",
          "tree_id": "a111f1d51e2e3048b2ebba68a77426894c6f9536",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2393b96acf0773a9b11b4b1c34e80538d83ff9e8"
        },
        "date": 1712918414312,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1211.68330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2054.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 776.20517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1621.61201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.45263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.9322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 316.5140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4117.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4250.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 677.2193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1296.7224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.049609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1461.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.340625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1402.737890625,
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
          "id": "620f8407b1f603ace6e5a6a6defe4304419a43a4",
          "message": "Update Rust SDK (#856)\n\nThe SDK supports Express One Zone, so we can remove our workarounds.\n\nSigned-off-by: James Bornholt <bornholt@amazon.com>",
          "timestamp": "2024-04-19T01:36:38Z",
          "tree_id": "bf67ddfcc5ba363204a291d0ea34777476c7bfc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/620f8407b1f603ace6e5a6a6defe4304419a43a4"
        },
        "date": 1713498034821,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1192.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2059.5548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 761.83896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1580.42109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 318.0498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 470.64873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 225.01875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 295.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3680.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4103.74267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 628.99716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1312.4330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1225.9986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1478.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1216.2873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1164.6267578125,
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
          "distinct": true,
          "id": "268b672c81b3b8820af29051b599deaf04207b88",
          "message": "Bump rustls from 0.21.10 to 0.21.11 (#857)\n\nBumps [rustls](https://github.com/rustls/rustls) from 0.21.10 to 0.21.11.\n- [Release notes](https://github.com/rustls/rustls/releases)\n- [Changelog](https://github.com/rustls/rustls/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/rustls/rustls/compare/v/0.21.10...v/0.21.11)\n\n---\nupdated-dependencies:\n- dependency-name: rustls\n  dependency-type: indirect\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-04-21T04:43:37Z",
          "tree_id": "56bb3f4b0bcbae137ece675cfccedd3af1f6b1b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/268b672c81b3b8820af29051b599deaf04207b88"
        },
        "date": 1713681991880,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1222.84111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2072.99501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 788.51796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1584.59560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.39873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 572.463671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 234.96591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.05048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4025.21865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3972.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 674.098828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1329.55791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1226.101171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1248.17001953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1332.44169921875,
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
          "id": "bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da",
          "message": "Avoid creating a new rule engine for every endpoint resolution (#860)\n\n* Avoid creating a new rule engine for every endpoint resolution\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Use static rule engine for all endpoint configs\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-04-23T14:59:43Z",
          "tree_id": "583385e18301587c51b8257fd655e5b11f6dddca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bc1a7cb7574e6f3596b96705fb0f5e0f0ca100da"
        },
        "date": 1713891789336,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1214.88115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2069.173046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 747.84765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1593.23837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 332.7751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 569.8205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 228.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.45810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3966.583203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4118.89306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 683.84052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1401.97529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1346.181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1306.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1181.91259765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1185.68662109375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}