window.BENCHMARK_DATA = {
  "lastUpdate": 1722500274844,
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
          "distinct": true,
          "id": "2dcb7cb8a3f6702ba552408b926613399ae94196",
          "message": "Use MaybeUninit when getting thread ID from CRT request metrics (#922)\n\n* Use MaybeUninit when getting thread ID from CRT request metrics\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Drop null pointer check since we know the pointer is always non-null (even if the memory may not be initialized)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T15:21:29Z",
          "tree_id": "623d50483288af987dbff1f44eddf3b5d41ab4be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2dcb7cb8a3f6702ba552408b926613399ae94196"
        },
        "date": 1719336413845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1209.177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2046.0796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 769.400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1546.27421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.57783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 439.2349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.2095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.058203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3783.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4073.09697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 514.81123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1303.2693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 997.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1025.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1209.05419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1122.06318359375,
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
          "id": "115cc6fa7954ee89fb3890e3bdbcc8ae01130680",
          "message": "Add troubleshooting entry on uploads larger than 78GiB (#921)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T16:17:48Z",
          "tree_id": "f88e27bbb84947b8bcc8b1256875d8b979d97760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/115cc6fa7954ee89fb3890e3bdbcc8ae01130680"
        },
        "date": 1719339536362,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1235.33349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2088.4349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.468359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1562.48251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.73544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.937890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.29853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3774.274609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4073.58173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 563.67822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1329.72353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 756.12841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1297.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1253.7169921875,
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
          "id": "4569a4b0c09369657c46950d6b8d9ae2dbd38b02",
          "message": "Bump docker/build-push-action from 5 to 6 (#920)\n\nBumps [docker/build-push-action](https://github.com/docker/build-push-action) from 5 to 6.\n- [Release notes](https://github.com/docker/build-push-action/releases)\n- [Commits](https://github.com/docker/build-push-action/compare/v5...v6)\n\n---\nupdated-dependencies:\n- dependency-name: docker/build-push-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2024-06-25T16:56:48Z",
          "tree_id": "ef31ea4885526c9a8bf6cc569ccd57c1bd867640",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4569a4b0c09369657c46950d6b8d9ae2dbd38b02"
        },
        "date": 1719342047269,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.6212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2168.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.0150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1592.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 354.10361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.6103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.51982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 299.20625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3976.6556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4031.84111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 563.64912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1300.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1322.02333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1533.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.4537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1357.48076171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37d980986555df887f7cb6cccdf2d442c92fbb4f",
          "message": "Release new crate versions (#923)\n\n* updates dependencies\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* addresses review feedback\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates change log\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T12:28:40Z",
          "tree_id": "38086a7371fc2d97b57119473a411eb1195600b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/37d980986555df887f7cb6cccdf2d442c92fbb4f"
        },
        "date": 1719412395683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2074.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.40380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1563.7880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 314.21220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 209.21923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3792.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4141.5982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 569.6740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1307.7009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1251.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1512.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1291.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1016.22275390625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cc8d3094f1a43df420470204d78c52670cd5f7d1",
          "message": "include test files in cargo (#924)\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>",
          "timestamp": "2024-06-26T16:14:41Z",
          "tree_id": "e1302c0b125475220680150b56554cf761acca9e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc8d3094f1a43df420470204d78c52670cd5f7d1"
        },
        "date": 1719426056703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.78486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2086.1400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 757.4251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1604.371875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.8564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.87041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.44287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3800.02236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3973.153125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 544.35634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1381.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1199.27236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1402.62607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1245.49873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1349.495703125,
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
          "id": "08aa2b828627418549109ba081e8daaa46db7fda",
          "message": "Add link to CSI driver LOGGING.md to Mountpoint LOGGING.md (#925)\n\nWe added a new logging document in the CSI Driver project, which helps support locating the logs on the underlying host. This isn't visible from the Mountpoint repository including troubleshooting guides, so let's link it from MP's logging documentation.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-01T09:21:08Z",
          "tree_id": "cf95c57e4798e0f14f29999f3b1082ece07616a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/08aa2b828627418549109ba081e8daaa46db7fda"
        },
        "date": 1719833158154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.28896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.4544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 762.79140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1539.0826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 330.72197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 612.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.5783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 297.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3999.8650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4155.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 580.4779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1307.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1419.6490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1417.69150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1205.83115234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1103.7193359375,
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
          "id": "0b4c14d077943a79478e7abe7bdb05cb6816f2cb",
          "message": "Update Rustdoc comments in the readdir module (#928)\n\n* Update Rustdoc comments in the readdir module\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move rustdoc above macros\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on Readdir deduplication behavior\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-02T13:08:47Z",
          "tree_id": "3b3260494d783ba37bdfebdad6163a1c564ac9f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b4c14d077943a79478e7abe7bdb05cb6816f2cb"
        },
        "date": 1719933252387,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1210.76171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2001.35283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1570.98798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 320.9388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.4517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.8765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 287.44091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3725.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3953.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 523.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1325.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1158.2224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 881.04013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1186.87177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1071.51416015625,
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
          "distinct": true,
          "id": "936b805b1de5ace88faf083b0c6242232de2db63",
          "message": "Fixing 'package' CI workflow after CentOS 7 reached end of life. (#931)\n\n* Fixing 'package' CI workflow after CentOS 7 reached end of life.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Separate the installation of epel-release and centos-release-scl.\n\nI suspect this is why some packages like fakeroot are not found.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Using http instead of https for the repo URIs.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying removing repo centos-release-scl.\n\nWant to try this to see if it helps for ARM build.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding centos-release-scl back.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Trying CentOS 8.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Changing to dnf and using group install for dev tools.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n* Adding James' suggestion.\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>\n\n---------\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-03T16:42:43Z",
          "tree_id": "3df02f65f8a300904695a67bdba481d83852e59d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936b805b1de5ace88faf083b0c6242232de2db63"
        },
        "date": 1720032535093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1202.2353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2071.4919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.476171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1580.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 330.366015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 563.1099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.07958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 296.223046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3737.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4466.4546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 585.35341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1297.67099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1188.19814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1003.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1320.07548828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.1423828125,
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
          "id": "805c501f0bce2deb21433701a0b1a77bc890761d",
          "message": "Reset prefetcher on any error (#933)\n\n* Add test of PartQueue invariant failure\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Reset prefetcher on any error\n\nThe prefetcher did not reset its internal state (and cancel current tasks) when encountering an error on a forward seek.\nAs a result, successive reads could try and read from a part queue in an invalid state. This change ensures that the prefetcher\nis always reset when encountering an error, whether while reading or seeking.\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Fix prefetcher reset on integrity error\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-07-05T10:54:06Z",
          "tree_id": "3a8eccb457e9db179321866e0c3cd62474395ba0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/805c501f0bce2deb21433701a0b1a77bc890761d"
        },
        "date": 1720184263487,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.69580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2024.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 827.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1565.29833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.48798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3750.66259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3909.28896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 532.9537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1339.866796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1258.89091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 727.9134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1280.50009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.704296875,
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
          "id": "becbd554c6d8e3e7a9751f16b61e3f643f682a83",
          "message": "Move mapping of PrefetchReadErrors into the fs::error module (#750)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-07-05T13:10:52Z",
          "tree_id": "52fd397cb689399ac727682e24c87302c2186bea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/becbd554c6d8e3e7a9751f16b61e3f643f682a83"
        },
        "date": 1720192336027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1201.16494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2118.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 750.03828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1584.44404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 341.85478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 560.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 227.58125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.4314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3833.9591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4212.333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 539.0466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1379.62529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1264.4865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1494.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1143.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1398.24462890625,
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
          "id": "5855859fa4f87bf76af5f670205bc65169f5b2db",
          "message": "Fix cache benchmark to include results for read skip test. (#934)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-09T08:45:55Z",
          "tree_id": "892a0756d6e85bd814008363b61b47f65e432012",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5855859fa4f87bf76af5f670205bc65169f5b2db"
        },
        "date": 1720522292742,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1229.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2107.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1595.8025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.479296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 630.43564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 211.54609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 280.57939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3908.5458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3871.96708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 549.8064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1313.1443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1356.7642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1176.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1178.22197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1182.32109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1014.4041015625,
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
          "id": "278c42975ee93b9ab81b9f04054ba4ab5097a6bd",
          "message": "Add additional trace logging during mount (#937)\n\n* Add additional trace logging during mount\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove old block used to gate SSE behind compile-time flag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-10T09:02:41Z",
          "tree_id": "ecd3eaa674a46302985e0fa01d08a791bf7a26e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/278c42975ee93b9ab81b9f04054ba4ab5097a6bd"
        },
        "date": 1720609657320,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1233.98505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2066.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.136328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1564.56083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 337.1990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 568.96884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.32431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3755.60947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4291.0529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 549.79248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1323.6861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1167.3884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1385.67080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1168.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1111.3091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1153.12099609375,
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
          "id": "a3c6f8229227d224e8776062dc94470087465cce",
          "message": "Update CRT libraries and set operation_name for DEFAULT meta-requests (#935)\n\n* Update CRT submodules to latest releases\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 96c47e3..11fc684:\n  > Make AES GCM more consistent cross platform (#189)\n  > Pin AWS-LC until it's fixed for manylinux1 (#188)\n  > Implement runtime check on libcrypto linkage (#186)\n  > clang-format 18 (#187)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 06cf4d8..6d974f9:\n  > cbor support  (#1131)\n  > Fix default thread options for windows to not pin to any cpu_id (#1126)\n  > Use CBMC 6.0.0 (#1128)\n  > latest_submodules.py uses AWS-LC-FIPS releases in aws-crt-java (#1125)\n  > Use CBMC version 5.95.1 (#1124)\n  > clang-format 18 (#1113)\n  > disable optimization was not working (#1123)\n  > Fix memtracer bad assumptions on the size of stack trace (#1122)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 6588f9a..cb431ba:\n  > test_helper.py improvements (#442)\n  > Fix shutdown_callback or returning NULL contract for meta_request (#440)\n  > BREAKING CHANGE: operation_name must be set for DEFAULT meta-requests (#439)\n  > clang-format 18 (#438)\n  > Auto - Update S3 Ruleset & Partition (#436)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 92bf532..4368aaa:\n  > Fix for loading JCA stripped private keys (#1658)\n  > Prepare for release v1.30.1 (#1657)\n  > Revert  `_CET_ENDBR` (#1656)\n  > Close FD in Snapsafe test function (#1649)\n  > Prepare for release v1.30.0 (#1646)\n  > Snapsafe-type uniqueness breaking event detection (#1640)\n  > Add EVP_md_null and SSL_set_ciphersuites (#1637)\n  > Add de-randomized ML-KEM modes to experimental EVP API (#1578)\n  > Patch for OpenVPN certificate setting behavioral difference (#1643)\n  > Require newer assembler for _CET_ENDBR (#1641)\n  > OpenVPN error codes, SSL_get_peer_signature_* funcs, and first patch file (#1584)\n  > NIST.SP.800-56Cr2 One-Step Key Derivation (#1607)\n  > Upstream merge 2024-06-13 (#1636)\n  > More minor symbols for Ruby support (#1581)\n  > Add support for NETSCAPE_SPKI_print (#1624)\n  > align gcc version with curl's CI (#1633)\n  > Fix spelling nits\n  > Generated ASM files\n  > Add Intel Indirect Branch Tracking support.\n  > [EC] Unify point addition for P-256/384/521 (#1602)\n  > Upstream merge 2024 06 03 (#1621)\n  > Fix AES key size for AES256 in ABI test (#1629)\n  > Move SSL_CIPHER_get_version test to SSLVersionTest.Version (#1631)\n  > Use 'nasm' not 'yasm' (#1630)\n  > Prepare for release 1.29.0 (#1626)\n  > Implement SSL_CIPHER_get_version for recent TLS versions (#1627)\n  > Add integration tests for OpenSSL-linking 3p modules (#1587)\n  > Prevent non-constant-time code in Kyber-R3 and ML-KEM implementation (#1619)\n  > Update ec2-test-framework to use gv2 (#1623)\n  > Script for creating compilation database (#1617)\n  > Fixes for building with `-pedantic` (#1608)\n  > Fix SSL_BUILD_CHAIN_FLAG_IGNORE_ERROR behavior (#1620)\n  > Update for FIPS documentation (#1610)\n  > Disable CI for gcc-14/FIPS until relocation issue is resolved (#1622)\n  > Add support for ocsp get id (#1609)\n  > Add libevent to GitHub integration CI (#1615)\n  > Upstream merge 2024 05 17 (#1600)\n  > add back ASN1_dup with tests (#1591)\n  > Remove special aarch64 valgrind logic (#1618)\n  > Fix NTP integ test (#1616)\n  > Pin aws-lc-rs integ to nightly-2024-05-22 (#1612)\n  > Cleanse the right amount of bytes in HMAC. (#1613)\n  > add support for X509_CRL_http_nbio (#1596)\n  > Add `all_fuzz_tests` build target (#1605)\n  > Fix mariadb ssl_crl patch (#1606)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 6d92b46..073c7b4:\n  > bug: Fixing bash error (#4624)\n  > chore: make cbmc proof build more strict by adding -Werror flag (#4606)\n  > Perform 2-RTT Handshake to upgrade to PQ when possible (#4526)\n  > test(bindings/s2n-tls): refactor testing::s2n-tls tests (#4613)\n  > docs: add timeout note to blinding delay docs (#4621)\n  > docs: Add back suggested FIPS + TLS1.3 policy (#4605)\n  > ci: shallow clone musl repo (#4611)\n  > example(bindings): add async ConfigResolver (#4477)\n  > chore: use CBMC version 5.95.1 (#4586)\n  > s2n-tls rust binding: expose selected application protocol (#4599)\n  > test: add pcap testing crate (#4604)\n  > testing(bindings): add new test helper (#4596)\n  > chore(bindings): fix shebang in generate.sh (#4603)\n  > fix(s2n_session_ticket_test): correct clock mocking (#4602)\n  > Fix: update default cert chain for unit tests (#4582)\n  > refactor(binding): more accurate naming for const str helper (#4601)\n  > fix: error rather than empty cipher suites (#4597)\n  > chore: update s2n_stuffer_printf CBMC harness (#4531)\n  > ci(nix): Fix integ pq test in a devShell (#4576)\n  > feature: new compatibility-focused security policy preferring ECDSA (#4579)\n  > compliance: update generate_report.sh to point to compliance directory (#4588)\n  > ci: fix cppcheck errors (#4589)\n  > chore: cleanup duplicate duvet citations (#4587)\n  > Merge pull request from GHSA-52xf-5p2m-9wrv\n  > chore(bindings): release 0.2.7 (#4580)\n  > fix: Validate received signature algorithm in EVP verify (#4574)\n  > refactor: add try_compile feature probe for RSA-PSS signing (#4569)\n  > feat: Configurable blinding (#4562)\n  > docs: document s2n_cert_auth_type behavior (#4454)\n  > fix: init implicit iv for serialization feature (#4572)\n  > [Nix] adjust pytest retrys (#4558)\n  > fix: cert verify test fix (#4545)\n  > fix: update default security policies (#4523)\n  > feat(bindings): Associate an application context with a Connection (#4563)\n  > chore(bindings): version bump (#4566)\n  > Additional test cases for s2n_constant_time_equals() (#4559)\n  > test: backwards compatibility test for the serialization feature (#4548)\n  > chore(bench): upgrade rustls (#4554)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Try to reduce package size\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Set operation_name when using MetaRequestType::Default\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Introduce S3Operation type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-07-10T15:44:46Z",
          "tree_id": "14139e717ee4461f49f9d6a774d0733ca0a54108",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3c6f8229227d224e8776062dc94470087465cce"
        },
        "date": 1720633657599,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1231.78955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2131.85263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 755.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1571.88857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 346.73876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 482.630078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.02529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.55283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3789.3236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4041.25068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 632.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1316.78095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1443.437109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 994.6064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1191.93662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.94287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1170.70986328125,
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
          "id": "ad7ce808f01609777cb305babc43c730de68517f",
          "message": "Introduce `event_log` feature flag  (#936)\n\n* Run tests for the event_log feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove unused negative_cache feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-11T07:28:20Z",
          "tree_id": "c2fb4b27e3be74717c54444323158558e7805219",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad7ce808f01609777cb305babc43c730de68517f"
        },
        "date": 1720690396506,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1245.57138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2083.97939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1578.88427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 420.1888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.748828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.2515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3808.25341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3942.7404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 591.711328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.9109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1152.32021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1327.42353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1203.80341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1074.3044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1079.0861328125,
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
          "id": "ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0",
          "message": "Update CRT submodules to latest releases (#940)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-12T09:55:22Z",
          "tree_id": "fe8a91bcf90942bdbe5e5ce66e8d1cb507cc8f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0"
        },
        "date": 1720785548724,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.24755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2111.91123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.2150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1552.04609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.97158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.1072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 255.94677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.31044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3768.8830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4021.3072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 625.26435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1474.4298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1331.28095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1184.37001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1178.841796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.81748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1366.5931640625,
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
          "id": "b4e11b8e4046eee141fc70ab60778dbf15db3ab2",
          "message": "Rename docs_rs config condition to docsrs (#956)\n\nThis change is made to avoid config condition errors now that check config is run by default in Rust 1.80+.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-29T16:00:51Z",
          "tree_id": "98a756cb7c33601e8f88e6dcb2926b00b72a285e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b4e11b8e4046eee141fc70ab60778dbf15db3ab2"
        },
        "date": 1722276489349,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.2365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2066.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 819.0583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1578.20302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.70458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 509.81826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 237.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 352.2076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3694.262109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4178.13701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 575.21787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1394.41611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1449.989453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1349.522265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1197.537890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1226.3765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 908.456640625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hahadaxigua@gmail.com",
            "name": "Ryan Tan",
            "username": "crrow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fff1320c2344171a7334a5f05f53832db4aa1f1",
          "message": "Add arguments to specify GET and PUT part size independently (#949)\n\n* feat: separate part-size for PUT & GET\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* chore: follow import style\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* fix: simplify cli help; make separated part-size conflict with old one; use read_part_size when get\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Verify new separated part size arg is conflicted with old one\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Drop Option<u64> on part-size\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Move part-size back\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n---------\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>",
          "timestamp": "2024-07-30T13:00:45Z",
          "tree_id": "0a12881106bb7aa8e6cc959342b4d82069d41431",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fff1320c2344171a7334a5f05f53832db4aa1f1"
        },
        "date": 1722352192846,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1233.30625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2122.20087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 748.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1600.08017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 307.08095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 546.0955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.4400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 335.29765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3783.54140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3969.09072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 531.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1328.62041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1374.69755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1245.9046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1221.0953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.455859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1369.249609375,
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
          "id": "42ad47a5637ba218a0a9b0765280aed3debf5808",
          "message": "Update CRT submodules to latest releases (#962)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-31T12:58:02Z",
          "tree_id": "e836c756eef3d96308e675c7b5f8a1c17b216110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42ad47a5637ba218a0a9b0765280aed3debf5808"
        },
        "date": 1722438285725,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1223.5015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2065.645703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.0265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1599.54375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 536.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.74189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 307.97587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3666.4890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4091.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 578.66044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1285.72294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1396.63720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1185.0724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1197.91259765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1199.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1176.83046875,
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
          "distinct": false,
          "id": "3efed3d8e0152229b3ba9972ac105cc6a61ebafc",
          "message": "Decompose request reading and body splitting logic (#957)\n\n* Split request reading and body splitting logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Log and increase metric once\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Review comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-31T13:35:16Z",
          "tree_id": "c0abc9e736518c1d8f1ff034d1bee7353f2c047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3efed3d8e0152229b3ba9972ac105cc6a61ebafc"
        },
        "date": 1722440530297,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1217.18935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2062.63076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 779.037890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1573.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.49853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 537.52578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.8228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 330.60888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3771.85478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3929.029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 602.56181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1304.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1253.5361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 740.55234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1229.6833984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1068.24189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1414.17919921875,
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
          "id": "0db2844594b0e0df6f9aeb630fa133a93563adf8",
          "message": "Update documentation for new read/write specific part size arguments (#960)\n\n* Update documentation for new read/write specific part size arguments\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T06:08:08Z",
          "tree_id": "5296832e9c5e575af30ef658c2687484df34ce55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0db2844594b0e0df6f9aeb630fa133a93563adf8"
        },
        "date": 1722500274391,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1225.277734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2054.36943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1582.12294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 592.1181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.92392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3658.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3930.4251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 518.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1253.830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1300.0125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1203.27021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1237.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1141.234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1245.7861328125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}