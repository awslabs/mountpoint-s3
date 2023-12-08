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
          "id": "5bdf9dd20c89b712423baa58cb22554413484d7e",
          "message": "Add actions variables for S3 Express One Zone test (#648)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-01T12:04:16Z",
          "tree_id": "be62356cdb4bea6feb0f53213d88207632839c05",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5bdf9dd20c89b712423baa58cb22554413484d7e"
        },
        "date": 1701445114044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.09775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.09296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.73720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.15927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.5140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.60390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4722.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.27763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.260546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1601.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.81982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1378.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.98974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1376.00791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 978.16884765625,
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
          "id": "53543a5e58adaf9ee962d990cb6af88fc3372817",
          "message": "Release new crate versions (#657)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T13:13:55Z",
          "tree_id": "bc76d407e8730cf2008342fa3e94e8a14db6b6f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/53543a5e58adaf9ee962d990cb6af88fc3372817"
        },
        "date": 1701447689224,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.7365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.74658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.78505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.36533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.41875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4714.91494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 205.47646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 112.16484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 45.903125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.90703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.30068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1305.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.55498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1538.78076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.86611328125,
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
          "id": "27bac02854e0290e2de057e0258f189c07ed0262",
          "message": "Add more details to CRT update guide (#655)\n\n* Add more details to CRT update guide\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Use numbered list with explicit numbered items\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add note to check size of mountpoint-s3-crt-sys crate\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-01T17:49:31Z",
          "tree_id": "d473f55e39ae1a1739003df495090a4da135da3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/27bac02854e0290e2de057e0258f189c07ed0262"
        },
        "date": 1701465511387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.8173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.04443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.18515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.20615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.1751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4641.2580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 103.043359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1386.91748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1390.67236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1745.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.90673828125,
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
          "id": "0b027d56d0ef63d168642d5da98135ddf34544e7",
          "message": "Update maintainer documentation for releasing new S3 client crates (#663)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-04T13:59:06Z",
          "tree_id": "a78750d6a4766c08105453b4a3f558ef3f40a327",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b027d56d0ef63d168642d5da98135ddf34544e7"
        },
        "date": 1701710941949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 18.8126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.55322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.08740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.58369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.3171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4814.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.63642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 98.15947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.47685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1528.09365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.85361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1265.4189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.19482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1381.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.82236328125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andres.santana@gmail.com",
            "name": "andres santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ecc21622948f2315100f45fa5c69aff01975bb38",
          "message": "Fix intermittent issue with metrics tests. (#662)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-04T14:01:39Z",
          "tree_id": "8095c11895349cd83d6c4e39a8e9eb89e616c5a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ecc21622948f2315100f45fa5c69aff01975bb38"
        },
        "date": 1701711492839,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.973046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.54482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.11591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.354296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4910.28603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.24765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 50.83046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1621.9330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.8611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.4126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.0248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.29765625,
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
          "id": "90f85a3b33cfc43e95e48559a0dba48329cfb1d7",
          "message": "Fix clippy warnings (#661)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-04T14:52:49Z",
          "tree_id": "43d906b8a5e7d26770b7b40390e363c3b7712458",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90f85a3b33cfc43e95e48559a0dba48329cfb1d7"
        },
        "date": 1701714498349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.381640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.89296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.05439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4737.27333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 213.86953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 94.34404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.47490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1507.65224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.25107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1364.83330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 33.95419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1565.86416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1037.2126953125,
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
          "distinct": false,
          "id": "64dc9c65685be417d323e1a6323baf9d91dbe675",
          "message": "Add S3 Express One Zone tests to the CI (#660)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2023-12-06T10:24:05Z",
          "tree_id": "e4c75a4b6e2107ecba0ef7290043b3e1b5fe6633",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/64dc9c65685be417d323e1a6323baf9d91dbe675"
        },
        "date": 1701871089774,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.5833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.2572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.0216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.71064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.59248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4818.110546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 225.793359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 111.3875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.678515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1456.33525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 35.1599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1239.0630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 35.57587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1446.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1047.06220703125,
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
          "id": "6fc30b904be158179d2731400678a0eced7a46ef",
          "message": "Update Clippy CI to deny warnings (#639)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-06T13:26:05Z",
          "tree_id": "c8d75fa20fb8d8206acd502fd2695ee8695dc058",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fc30b904be158179d2731400678a0eced7a46ef"
        },
        "date": 1701885410916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.87900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.29736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.6791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.41396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.92431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.3748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.34775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4731.98115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.79013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.1375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.76689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1434.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.6234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.52265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 37.0021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1479.688671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.96845703125,
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
          "id": "e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588",
          "message": "Remove duplicate S3 test helper functions (#664)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-06T14:33:59Z",
          "tree_id": "4e15b868e1d9cadf7cfc9238b87c92d1a75273af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e9d7043e4b5665d5ed79d2cd0fa9a6039cfe0588"
        },
        "date": 1701885744151,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 22.07626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.1693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.04248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.206640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.884375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.30068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.93203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.192578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4922.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 216.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 48.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1456.38349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 36.10283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1455.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1727.40048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1082.24853515625,
            "unit": "MiB/s"
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
          "id": "825bdf7ecebd13bccaea17953516a9d651f438b9",
          "message": "Add filename at Error and Warn level in logs (#665)\n\n* Added key in inode.rs\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added filename in warn span\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Removed the InodeError distinguishing *deleted marker and other recommended changes\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Added parent info in FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n* Improved the formatting of FileDoesNotExist error\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ankit Saurabh <sauraank@amazon.co.uk>",
          "timestamp": "2023-12-07T11:45:41Z",
          "tree_id": "1cbe691c7754c30045db0bbede8c9e0ce7ad46ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/825bdf7ecebd13bccaea17953516a9d651f438b9"
        },
        "date": 1701962036916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.03310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.61455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4691.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 203.32646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.3896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 44.434375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1399.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 33.66494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1170.09306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 34.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1508.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.8783203125,
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
          "id": "a8c29674bdcb7844a5d2b8bf18ef3164397806b0",
          "message": "Update documentation for S3 Express One Zone (#667)\n\n* Update documents for S3 Express One Zone\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update storage classes section\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update doc/CONFIGURATION.md\n\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>",
          "timestamp": "2023-12-07T13:21:28Z",
          "tree_id": "ac68ea4010c4a6864a806397f5be0f4cd0791793",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a8c29674bdcb7844a5d2b8bf18ef3164397806b0"
        },
        "date": 1701967834757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.4900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.553125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.52880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4556.7873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 201.39873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 49.03916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1396.71337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 34.05947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1257.214453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.2462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1467.665625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 960.07724609375,
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
          "id": "ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d",
          "message": "Add field for cli arguments to the bug report form (#640)\n\nAlso expand the description of the behavior field to include reproduction steps.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2023-12-07T20:07:03Z",
          "tree_id": "57bc12eef9422b1aa8bec61772e78d4d7e20b2b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca3f28fc428f673215acf8d8ca1c5d29ecd2f38d"
        },
        "date": 1701992798792,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.7263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.33779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.4958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.63779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4795.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 96.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 51.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.00478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 37.1716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1401.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 36.30830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1367.7091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 964.62734375,
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
          "id": "b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa",
          "message": "Add docs clarifications about which FS operations can be served from cache and when (#627)\n\n* Add clarification on which file system operations can be served from cache\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on caching behavior with writing\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update based on feedback\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T00:56:42Z",
          "tree_id": "2970551ed2a78be52c844a5cc46c366976f8314e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b50ecb4ec14bd3f95d1c72166b9f8c6de676a2aa"
        },
        "date": 1702010271219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 36.49716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.5677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.3216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.233984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.28359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4679.06708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 194.8236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 95.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1416.30654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.9421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1403.15419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.8353515625,
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
          "id": "863087df20e999f9e90c278ab0f0c7b8afa4e9fc",
          "message": "Add CRT error to CRT request logs, move CRT per-request logs to DEBUG (#669)\n\n* Add CRT error to underlying request log entries\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move all CRT request logging to debug even on error\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2023-12-08T01:04:11Z",
          "tree_id": "b3d5c9bfa42c7626519410fbcc30c5a11c34a7ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/863087df20e999f9e90c278ab0f0c7b8afa4e9fc"
        },
        "date": 1702010518044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.05390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 37.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.98564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.94365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.640234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 6.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 6.37236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4749.1375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 191.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 90.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.98984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1510.532421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 32.95751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1318.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1369.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.114453125,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "6fdc7830e55f6b09ca665a2fca89795553d6b2d8",
          "message": "Print successful mount for both foreground and background modes. (#668)\n\nAlso, update documentation for the `--no-log` argument.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2023-12-08T10:22:05Z",
          "tree_id": "e993751de460027dbf8281ec0bd09e8d93f546b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6fdc7830e55f6b09ca665a2fca89795553d6b2d8"
        },
        "date": 1702044109715,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 24.0287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.52978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 5.6376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.213671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 5.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4713.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 204.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 85.9787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 41.95205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1204.016015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 30.72548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1267.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 32.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1416.71455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.86591796875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1702044110308,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}