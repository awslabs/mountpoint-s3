window.BENCHMARK_DATA = {
  "lastUpdate": 1722511336041,
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
          "id": "115cc6fa7954ee89fb3890e3bdbcc8ae01130680",
          "message": "Add troubleshooting entry on uploads larger than 78GiB (#921)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-06-25T16:17:48Z",
          "tree_id": "f88e27bbb84947b8bcc8b1256875d8b979d97760",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/115cc6fa7954ee89fb3890e3bdbcc8ae01130680"
        },
        "date": 1719339130865,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.67412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.08642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.62412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.38046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.24892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.54853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.2189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5582.3072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.5931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 158.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 214.36015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1878.1994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 114.335546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1455.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1302.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.8736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.19853515625,
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
        "date": 1719341642380,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.6021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.91904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.3703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.50869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.9380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.56298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5586.178125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 476.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 132.2845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.055859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1913.14228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1478.459375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1277.8716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 121.01298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.8123046875,
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
        "date": 1719411957208,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 93.6912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.27626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 21.9544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.7724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5582.62548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 487.0822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.884375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 205.4525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1813.21826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.20146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1410.092578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1334.8734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 118.45556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1883.734765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 959.9025390625,
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
        "date": 1719425526647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.4080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.161328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.5275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.6193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5603.87529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 479.144140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 132.40830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 204.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1849.99443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1589.07978515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1858.54189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.87744140625,
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
        "date": 1719832726773,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.58271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.86123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 176.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.52060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.6390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5562.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.61884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2045.39716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 117.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1461.9240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1357.33369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.14111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1417.10009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1057.32666015625,
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
        "date": 1719932786192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.95517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.52353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 174.22861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.93486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.86708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.58095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5595.4869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 479.72099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 207.68818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1930.65546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 109.2630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1367.79345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1924.36328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.526953125,
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
        "date": 1720032005303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.89248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.1533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 96.63271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 172.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.29775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.8255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.0814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.35068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.5419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 148.5923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 209.10458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.9216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 115.76767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1500.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1254.5498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.1328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1744.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.42265625,
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
        "date": 1720183871157,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.87255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 95.74033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.21376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.3279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.9490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5535.090234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 483.60615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 143.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1831.995703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 120.2642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1478.22265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1443.296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 125.41982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1639.449609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 966.60244140625,
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
        "date": 1720191979545,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.14541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.0677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.66064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.02724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.47265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.19619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5495.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.30654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 151.991015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 2060.52080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 118.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1600.4646484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1311.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.96171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1398.80400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 947.0447265625,
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
        "date": 1720521796627,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 99.67314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.70986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.8521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.3478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.3955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5557.60029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 478.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 139.75673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 207.34951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1665.6822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1521.90537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.58701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 117.9322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1378.9634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 991.99130859375,
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
        "date": 1720609225457,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 98.20283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 137.26513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 170.9482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 23.76640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.0654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.3775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 31.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5610.4875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 476.24521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 152.5541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1783.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 118.89375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1446.26630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1286.50283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.82626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1405.35625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.3654296875,
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
        "date": 1720633155017,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.021875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.06083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.28408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 171.73271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.42294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.555859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5533.38759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 483.360546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 148.35009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 206.711328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1993.6115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.85693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1518.61396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1482.2474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 119.586328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1377.54521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.66005859375,
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
        "date": 1720689946693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.82451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.009375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 94.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.066796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.42216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.0568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 22.88193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5554.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 483.80966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 140.886328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.14423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1734.12119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 118.69677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1437.42578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1368.651171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1799.95078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1040.33916015625,
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
        "date": 1720785161748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 102.7572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.43857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.554296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.14580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.5576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5530.41044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 482.61005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 157.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 209.36982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1865.38427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1396.65302734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1204.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.70009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1910.58291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.33427734375,
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
        "date": 1722275895732,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 143.2451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 98.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.8673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.09384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 34.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5518.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 486.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 155.44638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 213.45625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.8001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 125.1359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1392.0076171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.1498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 122.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1666.3630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 976.5458984375,
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
        "date": 1722351603442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.79033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 139.13271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.56904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.551953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.7951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5587.8041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 134.23984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.78779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1850.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 113.18291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1448.78857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1223.80673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1777.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.4021484375,
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
        "date": 1722437779564,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.662890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 138.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.04189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 173.73251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.08046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.45712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5435.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 481.25390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 203.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1869.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 119.84951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1558.86591796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1323.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 124.28623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1926.11337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 994.0447265625,
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
        "date": 1722439894664,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 104.45478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 141.63115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 100.76923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 177.64580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 25.26181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 35.46220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 24.04482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 33.42373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5595.74091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 484.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 145.5216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 207.891796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1979.96689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 121.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1377.19521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1417.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 120.44833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1612.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1153.24189453125,
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
        "date": 1722499611618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 100.741015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 136.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 169.686328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.60380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 33.15869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.199609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.17646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5786.2732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 477.27314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 142.1201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 202.621484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 123.1935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1555.40927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1256.87626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1392.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1112.11787109375,
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
          "id": "5d6faa94d18983c137b38f27b40c8a61f21252bc",
          "message": "Update CRT submodules to latest releases (#963)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T09:26:29Z",
          "tree_id": "b93fb78d804bb889fb0f77474f81e2d1de2f7ff4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d6faa94d18983c137b38f27b40c8a61f21252bc"
        },
        "date": 1722511335588,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 101.802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 140.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 97.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 175.40205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 24.5138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 34.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 23.450390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 32.94970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5542.15693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 481.622265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 153.69482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.7591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1854.43349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 115.69765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1440.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1293.80810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 123.63798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1501.95859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 844.8693359375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}