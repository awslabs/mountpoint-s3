window.BENCHMARK_DATA = {
  "lastUpdate": 1748611436527,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746545284188,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.72919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2023.7744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.86533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.497265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.494921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 398.55849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.29560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3549.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3946.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.1763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1136.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 924.116796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 870.9505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1098.1927734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1018.01318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1161.2478515625,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746551216666,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1195.16220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.73291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 484.26328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.15263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3872.7064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.45908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 883.62587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 950.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1116.15146484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 980.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1169.38642578125,
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
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746618881162,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.05244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1981.78935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.16259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.13037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.57119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 416.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.18310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3682.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4136.16083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1134.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1381.2046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 929.384375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.4287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1234.07509765625,
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
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746634388523,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.73037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.98076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1433.74375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.31015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 418.757421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 326.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3632.941796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4203.8419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1220.7927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.98388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1302.86357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1014.4615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.1673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 996.978125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1082.98828125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746792340093,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.15927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.8048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.4078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 413.15966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.199609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.55439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3608.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3988.61650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1179.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.218359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 939.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.83720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 907.15166015625,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746802675894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.45693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1480.5248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.65576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.53681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.28798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.56875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3546.738671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3953.92841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.49609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1163.66513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1112.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 932.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.60751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1220.8451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 919.729296875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746806591356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.21728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1948.89560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.9091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 421.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 306.4943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3624.33447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4061.84990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.79375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 878.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 889.030078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.01513671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1086.0177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.79619140625,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747051306728,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.9408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.63837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 807.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 448.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.22333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.16484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3665.91826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3955.76376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 876.47099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 833.67587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1105.93916015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1138.69501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 977.3021484375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747133274819,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.174609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.6849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.448046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.67568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 412.81904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.1755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.253515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3657.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.7974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1186.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 874.36279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1324.6505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1038.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1074.5083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1243.17578125,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747145632504,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1279.40947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.03662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 815.82841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1493.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.33017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.776953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.27978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3645.95478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4031.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.27412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.41259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 848.05146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1023.50966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1114.0689453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1008.14150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1405.31513671875,
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
          "id": "a1a162a36a9157699656ed97f3b178d345254114",
          "message": "Bump astral-sh/setup-uv from 5 to 6 (#1390)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 5\nto 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0 🌈 activate-environment and working-directory</h2>\n<h2>Changes</h2>\n<p>This version contains some breaking changes which have been gathering\nup for a while. Lets dive into them:</p>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#activate-environment\">Activate\nenvironment</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#working-directory\">Working\nDirectory</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#default-cache-dependency-glob\">Default\n<code>cache-dependency-glob</code></a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#use-default-cache-dir-on-self-hosted-runners\">Use\ndefault cache dir on self hosted runners</a></li>\n</ul>\n<h3>Activate environment</h3>\n<p>In previous versions using the input <code>python-version</code>\nautomatically activated a venv at the repository root.\nThis led to some unwanted side-effects, was sometimes unexpected and not\nflexible enough.</p>\n<p>The venv activation is now explicitly controlled with the new input\n<code>activate-environment</code> (false by default):</p>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv and\nactivate the environment\n  uses: astral-sh/setup-uv@v6\n  with:\n    activate-environment: true\n- run: uv pip install pip\n</code></pre>\n<p>The venv gets created by the <a\nhref=\"https://docs.astral.sh/uv/pip/environments/\"><code>uv\nvenv</code></a> command so the python version is controlled by the\n<code>python-version</code> input or the files\n<code>pyproject.toml</code>, <code>uv.toml</code>,\n<code>.python-version</code> in the <code>working-directory</code>.</p>\n<h3>Working Directory</h3>\n<p>The new input <code>working-directory</code> controls where we look\nfor <code>pyproject.toml</code>, <code>uv.toml</code> and\n<code>.python-version</code> files\nwhich are used to determine the version of uv and python to install.</p>\n<p>It can also be used to control where the venv gets created.</p>\n<pre lang=\"yaml\"><code>- name: Install uv based on the config files in\nthe working-directory\n  uses: astral-sh/setup-uv@v6\n  with:\n    working-directory: my/subproject/dir\n</code></pre>\n<blockquote>\n<p>[!CAUTION]</p>\n<p>The inputs <code>pyproject-file</code> and <code>uv-file</code> have\nbeen removed.</p>\n</blockquote>\n<h3>Default <code>cache-dependency-glob</code></h3>\n<p><a href=\"https://github.com/ssbarnea\"><code>@​ssbarnea</code></a>\nfound out that the default <code>cache-dependency-glob</code> was not\nsuitable for a lot of users.</p>\n<p>The old default</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c7f87aa956e4c323abf06d5dec078e358f6b4d04\"><code>c7f87aa</code></a>\nbump to v6 in README (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/382\">#382</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aadfaf08d64f83cdd98eea14fdab8eb08f73656c\"><code>aadfaf0</code></a>\nChange default cache-dependency-glob (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a0f9da6273a171f2d94cce2036eaf5a07fefa23c\"><code>a0f9da6</code></a>\nNo default UV_CACHE_DIR on selfhosted runners (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ec4c6916287cf1471f9f803d79ef6a0a04520e81\"><code>ec4c691</code></a>\nnew inputs activate-environment and working-directory (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aa1290542ebcd3b6932d825ed2b40807f82b2fdd\"><code>aa12905</code></a>\nchore: update known checksums for 0.6.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/378\">#378</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fcaddda076a8158a712b6d64986baf606c446694\"><code>fcaddda</code></a>\nchore: update known checksums for 0.6.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fb3a0a97fac846cb3395265a3087ab94ad3ca2a0\"><code>fb3a0a9</code></a>\nlog info on venv activation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/375\">#375</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T08:03:22Z",
          "tree_id": "530db272c1f8159fc1ebb78eef733907b3d97719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1a162a36a9157699656ed97f3b178d345254114"
        },
        "date": 1747216955116,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1961.82900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 774.75888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.3978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.8060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 553.287890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.11728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 284.5705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3836.344140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4252.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.0544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.70546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1493.10302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.76279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 993.77958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1166.40078125,
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
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747234381956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1249.8853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2033.73251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.3826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.3146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.80283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 548.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3585.4966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4159.62763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1181.69697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1183.299609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1120.93369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1188.7873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1139.8505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.4484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 910.876953125,
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
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747239854961,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.95224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2030.04423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.8072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.13486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.412890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.9150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.53515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 290.18310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3655.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4097.16708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1174.62275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1181.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1327.11435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 906.8375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1224.225390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.62060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 970.41689453125,
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
          "id": "09a22a9c025816872a6c6607166ed8ef0f80d3d6",
          "message": "Remove unused read timeout from prefetcher configuration (#1421)\n\nPrefetcher read timeouts were removed in commit 0ca2c771. The motivation\nthere was that timeouts were added due to deadlock issues early in\ndevelopment of Mountpoint, and that they had since been eliminated.\nThere is an open next step to introduce timeouts at a FUSE operation\nlevel which has not yet been completed (see\nhttps://github.com/awslabs/mountpoint-s3/issues/124).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes internal config struct only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-15T09:26:02Z",
          "tree_id": "c016737272a4116b9a05d18a765e2482c621cc16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a22a9c025816872a6c6607166ed8ef0f80d3d6"
        },
        "date": 1747308314536,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.64677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.15009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.90029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.24521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 447.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.34765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.903125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3596.97421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4050.81689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.9552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.02587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 902.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 966.1623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1046.0337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 936.088671875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "be792de9ef2e76f6993bc6126db679bb2cb34fc0",
          "message": "Adding fstab tag to user agent headers (#1420)\n\n### What changed and why?\n\n- This PR adds a new mp-fstab tag to the user agent header when\nMountpoint is launched via an fstab entry.\n- Introduces an is_fstab field to CliArgs, which is set to true when\nparsing arguments from fstab.\n- This allows downstream consumers (like the product team) to detect and\nanalyze fstab-based usage of Mountpoint for Amazon S3, supporting\nproduct analytics and future UX improvements.\n\nExample Request Header\n<img width=\"719\" alt=\"image\"\nsrc=\"https://github.com/user-attachments/assets/10561b96-b893-496f-bab4-3f00ae568e68\"\n/>\n\n\n### Does this change impact existing behavior?\n\n- No breaking changes.\n- The only impact is the addition of the mp-fstab tag in the user agent\nheader for fstab-based mounts.\n- All other mounting methods and user agent construction remain\nunchanged.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-15T10:16:23Z",
          "tree_id": "615c10da9bea9d73cb8eaecd4d1cfecc767eab31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be792de9ef2e76f6993bc6126db679bb2cb34fc0"
        },
        "date": 1747311379219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.906640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1960.96845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.01767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.04287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 625.77939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.65546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.99345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3637.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3900.4515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1166.0119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1185.32119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 849.52861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 807.7576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1084.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1069.68701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1017.50009765625,
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
          "id": "676157b668a0b76b3387acb3f67d3bce58d2774e",
          "message": "Add errno check to FS mock S3 tests (#1424)\n\nSimple update to the test to check error number. We check this in other\nparts of the code, but this provides integration testing using the mock\nS3 HTTP server tests.\n\nProvides some basic coverage related to #1422.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-16T11:57:29Z",
          "tree_id": "e4a9ba6ba6b16ff193851b4ddef74cc132179ef3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/676157b668a0b76b3387acb3f67d3bce58d2774e"
        },
        "date": 1747403852812,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.14189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 802.05166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.59150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.17451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 519.18720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.9333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3522.02568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3899.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1159.0568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1176.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 823.70302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.97119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1256.77421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.880078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 906.3583984375,
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
          "id": "172b4a14f53004bec00bca69110a88a895348b22",
          "message": "Propagate S3 response with `PrefetchReadError` (#1411)\n\nFor logging purposes we want S3 response (http_code, error_code,\nerror_message) to be retrievable via `fs::Error` when errors occur\nduring `S3FuseFilesystem::read` operation.\n\nTo achieve that we preserve this information during `PrefetchReadError\n-> fs::Error` conversion in `PrefetchReadError::get_request_failed`\nmethod. We also adjust `mountpoint-s3-client` to parse and store S3\nresponse with the following errors:\n\n1. GetObjectError::NoSuchBucket\n1. GetObjectError::NoSuchKey\n1. GetObjectError::PreconditionFailed\n1. S3RequestError::Forbidden\n1. S3RequestError::ResponseError\n1. S3RequestError::Throttled\n1. S3RequestError::IncorrectRegion\n1. Other `S3RequestError` variants occur before the response arrives and\nthus don't provide metadata\n\n### Does this change impact existing behavior?\n\nIn logs, read errors do not contain redundant token:\n> ..read failed with errno 5: get request failed: ~get object request\nfailed:~ Client error: ..\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAn entry for the `mountpoint-s3-client` changelog and a minor version\nbump (`0.14.1` -> `0.15.0`) to account for changes to error enum\nvariants?\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-19T13:02:01Z",
          "tree_id": "bf7371a714593d161ada9ab239fc11073ae65ba1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/172b4a14f53004bec00bca69110a88a895348b22"
        },
        "date": 1747666988115,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1975.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.24931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.81943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.65830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 527.02861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.615625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 279.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3609.391015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3978.39443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.21435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1157.66376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 935.14345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 820.76220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1198.24296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 988.8693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 983.16845703125,
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
          "id": "5d806d69faf2af77c2484122b5343cc435151047",
          "message": "Add cache block serialization benchmark (#1426)\n\nIntroduce a criterion benchmark to measure the performance of reading a\nsingle cache block. In order to establish a performance baseline, we\nalso include a separate benchmark for reading a file the size of a\nblock.\n\nUpdates `criterion` to `v0.6.0`.\n\nThe benchmark can be run with this command:\n\n```\ncargo bench --bench cache_serialization\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-20T10:03:34Z",
          "tree_id": "4b156d9809f55665e3087cbfc2165601dc21b561",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d806d69faf2af77c2484122b5343cc435151047"
        },
        "date": 1747742616117,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.3529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.71591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.9521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1492.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 457.46513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.72392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.18056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3608.7521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3925.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1246.97734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1178.20400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1466.774609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 812.3873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1189.17470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.2283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 918.983203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "87494144+tadiwa-aizen@users.noreply.github.com",
            "name": "Tadiwa Magwenzi",
            "username": "tadiwa-aizen"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "54a1cb7760e5372f48a87a1d1d69ab37e4433678",
          "message": "Fstab cliargs roundtrip tests (#1414)\n\n### Fstab cliargs roundtrip tests\n\n\n\nThis PR adds a property-based test that ensures roundtrip conversion\nbetween CliArgs and FsTabCliArgs behaves as expected. Specifically, we:\n\nImplemented a custom FstabCompatibleCliArgs strategy for generating\nvalid CliArgs inputs.\n\nSerialise these into fstab-style CLI arguments.\n\nParse them back into CliArgs through the FsTabCliArgs path.\n\nAssert equality with the original input.\n\nThis responds to a prior review comment requesting a test for round-trip\nparsing of CLI arguments.\n\n\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact runtime behavior. It only adds\nnon-breaking test code under #[cfg(test)].\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo changelog entry is required. This is an internal test-only\nenhancement and does not affect functionality or the public interface.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-20T14:20:06Z",
          "tree_id": "7b580da15d6a2e1010a97294d88d6126c47d0ee9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a1cb7760e5372f48a87a1d1d69ab37e4433678"
        },
        "date": 1747758042373,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1231.175390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.3833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.06396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.07705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.9375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.3310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.846484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3566.22568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3921.13564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1274.76083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.08046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1021.85380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1047.123828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.5390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1053.066015625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46f6db41bd261670267fdf6f33a03d9e1ec67d38",
          "message": "Add fstab to GitHub CI (#1419)\n\nAdd integration tests to Github CI\n\nTests passed here:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15135395318/job/42545885483\n\n\n### Does this change impact existing behavior?\n- fstab now forces runs in the background instead of the foreground\n- When ran through fstab, Mountpoint now ignores the `nodev` and\n`nosuid` options, as we default to these capabilities.\n\nNo breaking changes, as fstab is not released.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-20T15:31:26Z",
          "tree_id": "dbe80da7b387e058d50cfdb5620f4d9096b4c015",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46f6db41bd261670267fdf6f33a03d9e1ec67d38"
        },
        "date": 1747762448112,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1261.69736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.99072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.9083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.63349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.72685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 595.203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 278.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3650.033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3915.883203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.05,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1175.73798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1295.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 969.01240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1115.43232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.8146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1203.19033203125,
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
          "id": "8dde952a1813af5a3f2b6412eb3c545205950e8a",
          "message": "Improve safety checks when reading disk cache blocks (#1427)\n\nWhen reading data from the disk cache, we were not checking the declared\nlength of strings (such as the S3 key or ETag) and data, potentially\nleading to allocations for the wrong size in case of corruption of the\ncache block. While the corrupted block would still be detected later by\nthe integrity check and never returned to the user, the read could still\ncause memory overflow in the worst case.\n\nThis change reworks the deserialization of a cache block from disk and\nensures that the length of strings is always within a fixed limit\n(`10000`, using `bincode` configuration) and the data size is checked\nagainst the cache block size (1 MiB).\n\nIn addition, we updated the `bincode` crate to the latest version\n(`2.0.1`).\n\n### Does this change impact existing behavior?\n\nThe change affect the on disk cache format, but it does not result in\nany behavior change for the user.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in the `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-21T14:08:01Z",
          "tree_id": "740da280e29d52dce38b57e11d9fedb998ce7d6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8dde952a1813af5a3f2b6412eb3c545205950e8a"
        },
        "date": 1747843731653,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1255.747265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.48310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.64375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.050390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.7869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.39169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3739.09052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4104.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1229.77392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1165.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1072.5861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 926.9068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1068.9962890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 930.6853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.72392578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5",
          "message": "Add \"nofail\" to list of ignored arguments in fstab (#1429)\n\nAdded \"nofail\" to the list of ignored arguments with fstab. Whilst\n`systemd` removed `nofail` when launching Mountpoint, `mount` did not,\nwhich meant `mount -a` could fail when systemd launched Mountpoint fine.\n\n### Does this change impact existing behavior?\n\nYes, Mountpoint no longer crashes if given `nofail` with fstab\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-21T16:09:48Z",
          "tree_id": "5d6a698e7fe81c4d495c45964192fba4cce9a2c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5"
        },
        "date": 1747850959807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.49384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.82119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.21328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 620.78154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.1185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.6609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3545.36552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3989.60322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1157.92138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 863.63681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1317.92509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1070.38349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1158.94130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1433.2841796875,
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
          "id": "ee6d44ac1096251bd7d18601587f6bc3da3392a4",
          "message": "Update CRT submodules to latest releases (#1430)\n\nUpdate the CRT libraries to the latest releases. \n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T08:36:19Z",
          "tree_id": "7c9069bfb532b9dd1630e0e8fa60f3c9fc716208",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ee6d44ac1096251bd7d18601587f6bc3da3392a4"
        },
        "date": 1747996628540,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.52529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1946.908984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 837.2251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.36875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.07431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.10595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.996875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3580.65146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4042.44638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.57373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 896.2447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 909.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1215.50810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1052.128515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.7490234375,
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
          "id": "a861849f21edf0d9c072da8965ea3dc6f37e04e0",
          "message": "Logging errors in a structured format (#1416)\n\nImplement an `FileErrorLogger` and use it to write errors occurring\nduring supported fuse calls in `S3FuseFilesystem`. This logging is not\nenabled in the main executable, only in the `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, only used in the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in the example.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-05-23T09:58:44Z",
          "tree_id": "2b544694b6a1d3c00e5e4410eb80b0df49961517",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a861849f21edf0d9c072da8965ea3dc6f37e04e0"
        },
        "date": 1748001439656,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1975.94462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.04638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1474.787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.741796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 575.4138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.11240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.59423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3475.80234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3907.7673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1190.64384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.68359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1167.83798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 923.93447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1202.17529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1013.2142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1048.51630859375,
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
          "id": "4e9fe1d0b9e51f66475620ce990860416739d237",
          "message": "Revert \"Update CRT submodules to latest releases (#1430)\" (#1435)\n\nThis reverts #1430 (commit ee6d44ac1096251bd7d18601587f6bc3da3392a4).\n\nAfter merging the latest change to the CRT we have seen benchmark runs\nfailing (e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15206336823/job/42770250949).\nWe are reverting the change while we further investigate the issue.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nReverts the previous changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T14:43:38Z",
          "tree_id": "148ee1304bd81ee40b0109c6a9704f7670bdabf9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e9fe1d0b9e51f66475620ce990860416739d237"
        },
        "date": 1748018667995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1245.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1979.06025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.45078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.24091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.47861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.966015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.07568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3419.84716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4126.34033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1171.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.1314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 859.2205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 852.12685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1036.88505859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1001.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 988.8357421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "chagem@amazon.com",
            "name": "Christian Hagemeier",
            "username": "c-hagem"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7",
          "message": "Prepare crate changelog before releasing up to fs-crate (#1437)\n\nAdjusts the Changelogs for the `mountpoint-s3-fs` crate and it's\ndependencies.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-27T15:09:05Z",
          "tree_id": "e278b19ec0ac48c790b41fc78eaceffeb8135caa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7"
        },
        "date": 1748365769497,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1232.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.48046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.97001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1487.2998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.75185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 566.43974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 204.55556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.38212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3428.2865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3982.42265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1216.91298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 923.57119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 871.23798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.5193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 961.05576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1097.64951171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0344b0b3c4ab0ee04467486bc036cfeebead6d59",
          "message": "Add support for passing S3 URIs as part of the bucket name field (#1434)\n\nAllows invoking Mountpoint with an S3 URI in the 'bucket name' parameter\n\n\n- When using an S3 URI, a prefix can also be supplied. When it is, the\n`--prefix` option cannot be given.\n- Allows using an S3 URI with the `--cache-xz` parameter, but without a\nprefix.\n- Documentation entry for the feature was introduced\n\n### Does this change impact existing behavior?\n\nYes, the 'bucket name' and 'cache-xz' parameters now can take S3 URIs.\nThere are no breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry was made. Needs minor version bump.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T09:32:42Z",
          "tree_id": "0648435f0fd96f4763d631777ba173a0dac7af2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0344b0b3c4ab0ee04467486bc036cfeebead6d59"
        },
        "date": 1748604790135,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.49326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1962.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 789.7794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1484.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.930078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.91669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.64130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.625390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3920.02119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1188.0701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.1658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 809.4484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 987.670703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1271.2720703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1180.0390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 965.78291015625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d71b040b53261f0e133b1937adf436bdc2fd489d",
          "message": "Remove fstab feature flag (#1446)\n\nRemoves fstab feature flag\n\n### Does this change impact existing behavior?\n\nYes, enables fstab feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - changelog is included in this PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/1441\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T10:31:47Z",
          "tree_id": "878963d0abc5939147ee13d791f649d8ffd09354",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71b040b53261f0e133b1937adf436bdc2fd489d"
        },
        "date": 1748608162585,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.71494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1929.1287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.0693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1501.60107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.66728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.329296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.79189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3633.88310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3963.69228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.59521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.6607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1373.90947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1033.1650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1226.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1160.8060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 951.7703125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c4ce5abafd546bff3f01a0159ae9561a364abaa",
          "message": "Package fstab file (#1442)\n\nDraft PR because I want to remove the fstab feature outside this PR\n\nAdds `mount.mount-s3` symlink to our rpm and deb installers. This file\nis placed in `/usr/sbin` in the host when installed.\n\n### Does this change impact existing behavior?\n\nYes, a new `mount.mount-s3` file is added during installation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:05:35Z",
          "tree_id": "4ef3452cd65154566194a327cc71965dfea73b0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c4ce5abafd546bff3f01a0159ae9561a364abaa"
        },
        "date": 1748610287879,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1998.14140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.63369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.5443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.48857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3514.16826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4138.61083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1151.5669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1125.06865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 937.644921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 912.03408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1140.3806640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1216.15419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 993.62060546875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "5381483+muddyfish@users.noreply.github.com",
            "name": "Simon Beal",
            "username": "muddyfish"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fa7b9d711a69128826a7ff026fc5fdf4c4e51e61",
          "message": "Remove fstab feature flag (#1447)\n\nRemoves fstab file from cargo.toml - previous commit removed from CI as\nwell as code usages. This is just cleaning up.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:23:44Z",
          "tree_id": "f41202e3376f4adaa6bd338639929816b164aab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa7b9d711a69128826a7ff026fc5fdf4c4e51e61"
        },
        "date": 1748611435613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1246.5529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1982.6966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.17734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1499.4404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.7904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 596.50126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.74111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 318.037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3445.94296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4101.47705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1203.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.79375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1149.5185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1259.94189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.70234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1048.2828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1018.10908203125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}