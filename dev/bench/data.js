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
          "id": "0b4c14d077943a79478e7abe7bdb05cb6816f2cb",
          "message": "Update Rustdoc comments in the readdir module (#928)\n\n* Update Rustdoc comments in the readdir module\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move rustdoc above macros\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add clarification on Readdir deduplication behavior\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-02T13:08:47Z",
          "tree_id": "3b3260494d783ba37bdfebdad6163a1c564ac9f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0b4c14d077943a79478e7abe7bdb05cb6816f2cb"
        },
        "date": 1719932781274,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.75439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.09765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 53.6099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.580859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.22236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5194.18447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.45029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 61.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 70.251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1608.54453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.0775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1150.67626953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1198.75,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.84912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.815234375,
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
        "date": 1720032018480,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.71806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.7623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.92548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.92294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.3638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5225.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.1431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 69.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.6265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 836.59384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.55654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1370.09501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 935.74013671875,
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
        "date": 1720183872925,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.85322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 19.2833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.34541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.95517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5168.92041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.79853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.72294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 75.808203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1723.41748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.7615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1348.69853515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1249.78076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.25546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1440.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1085.08076171875,
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
        "date": 1720191971634,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 25.235546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.58251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 55.12529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.58388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.55810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5177.35078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.2982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 67.93544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 77.864453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1754.455859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.01064453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1260.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.858984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1555.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 988.49775390625,
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
        "date": 1720521821192,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 19.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.01259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.47236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.219921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5076.21904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.45419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 73.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1543.790625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1132.837109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1153.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.8318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1441.191796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.628125,
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
        "date": 1720609234064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.77158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.5130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.6689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.9107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.34599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.55,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.883203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5266.06416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 227.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 74.11572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1688.166796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.32705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1369.56142578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.504296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 956.648828125,
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
        "date": 1720633154472,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.66962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.6076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.80458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.9841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.90869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.505078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5225.62080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.746484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.89541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 71.08427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1574.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.97998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1216.38125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1114.17216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.66748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1390.26005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.70166015625,
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
        "date": 1720689943935,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.36005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 20.79833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.72646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.578515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.05224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 4.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.97978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5341.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.47451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 76.48125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1700.6310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.2390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.06005859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1178.46865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1576.37763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 945.6224609375,
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
        "date": 1720785163757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 23.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 18.962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.65478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.1642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.38134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.19619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5257.16123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 231.78037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 79.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 76.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1665.27822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.99912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1581.9998046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.14755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1379.4205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 965.7076171875,
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
        "date": 1722275905416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.59765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.03388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 52.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.48173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.43388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5290.8685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 211.67841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.4884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.07080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1520.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.34931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1131.3138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.41572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.94560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1700.84736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 980.12685546875,
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
        "date": 1722351583756,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 16.44814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.43369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.69921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.27900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 4.44453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.18193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.70693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4959.43037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 210.76904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.19130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 68.7419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1528.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 52.92353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.26787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.54326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1676.563671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.87216796875,
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
        "date": 1722437738713,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.057421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.280859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.7115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.9427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.525,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5230.72470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 209.8953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.3470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1543.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.91337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1305.90126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1210.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.678125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1346.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.7748046875,
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
        "date": 1722439880133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.56728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.59931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 17.21591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 48.92822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.19814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.4001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.9638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.9078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5265.77255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 220.559765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 70.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 70.94765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1617.0015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.62265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1405.59189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1071.3009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 52.77236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1464.10810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.5267578125,
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
        "date": 1722499550832,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 20.8798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.72939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 16.720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 54.5966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.54619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.42080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.26884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5079.424609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 217.6107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 72.3103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 71.574609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1455.2939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.00107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1023.05927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1132.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.8017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1583.346875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 992.28359375,
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
        "date": 1722511354617,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 21.41474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 15.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.6931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.59453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.12734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.01943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5162.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.18466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 73.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.15234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1637.25947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.33125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1255.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1120.79833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1872.81171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.30888671875,
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
          "distinct": false,
          "id": "387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5",
          "message": "Preparing of v1.8.0 release (#964)\n\n* bumping version to 1.8.0\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* update changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* Fix incorrect PR link\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T10:49:00Z",
          "tree_id": "af98206259292c3b582248896df7b7ba21158e27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5"
        },
        "date": 1722516460858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.32763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.98408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.6244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.42333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.2123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.64228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5077.50556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 75.401171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 70.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1343.726953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 54.51201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1229.376953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1058.9193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.84111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1378.56064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 950.77294921875,
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
          "id": "073277047bb412d1f5cf98e4efa5668074dc7626",
          "message": "Replace custom ResultExt with stable Result::inspect_err (#951)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T15:33:09Z",
          "tree_id": "a8c23da91e712e5eb260fa8852cb987496d4abf7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/073277047bb412d1f5cf98e4efa5668074dc7626"
        },
        "date": 1722533489789,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 14.88212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.00556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.2736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 49.33017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.96298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.07939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.32744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 9.82421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5017.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 218.077734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.01162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 72.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1708.3439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 51.679296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1194.495703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.01220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.02548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1641.7830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1081.0119140625,
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
          "id": "d3a070517e4551f99ecf697b33ca11cdde0c7d03",
          "message": "Fix warnings on tests (#966)\n\nA small change to fix \"unused imports\" warning messages when running\n`cargo test`.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T15:56:38Z",
          "tree_id": "fe3e304fbc55c326048316fedae40e281c3acbb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a070517e4551f99ecf697b33ca11cdde0c7d03"
        },
        "date": 1722534864618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.01025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 14.512109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.55673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.27626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.2265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5351.41943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 216.93017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 69.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 68.55166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1478.08212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1422.84619140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1167.03701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 53.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1368.65654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.053125,
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
          "id": "58edaafaaf065f5537202394580cf58c05017aa1",
          "message": "Update PR template to prompt thinking on change log entry (#968)\n\n* Add section on changelog updates to PR template\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add links to changelogs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-02T12:53:08Z",
          "tree_id": "49f0fb64e39106ed93d5b10ce74a726231703107",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58edaafaaf065f5537202394580cf58c05017aa1"
        },
        "date": 1722610268423,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 17.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.88330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 50.51611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.82451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.78544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5236.00048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 215.4771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 74.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 67.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1443.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 55.60498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1285.60068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1132.42919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 55.46787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1400.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 963.28349609375,
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
          "id": "6e9eaa1e316ba486299d7d2f4d275a305126d3af",
          "message": "Consolidate test credential helpers into creds modules (#967)\n\n* Consolidate test creds helpers into creds modules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move creds functions depending on s3_tests feature into their own mod, re-export\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix fork_test\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-06T14:58:20Z",
          "tree_id": "0014a4d2266bdb08110539dc7a66e536127bf937",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e9eaa1e316ba486299d7d2f4d275a305126d3af"
        },
        "date": 1722963263430,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 15.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 39.90859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.32744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 51.50615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.64775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.4537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4920.19287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 56.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 68.1875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1459.56025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 53.05224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1154.7603515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1016.9591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1412.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 927.209765625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1722963263920,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}