window.BENCHMARK_DATA = {
  "lastUpdate": 1770209030328,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761833500020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1398.323828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2349.3625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 880.73896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1697.4076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.20712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 491.9046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.39228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.0892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4478.91259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4792.49892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1242.13056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1437.9443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 816.75712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1425.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1012.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1077.76591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1007.4560546875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "837675f5c83343b882b28cf3e1be1e2368596d6a",
          "message": "Prepare for 1.21.0 release (#1692)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-30T13:48:29Z",
          "tree_id": "784cb19e88184a344fc80236263c8ee250e3abb0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/837675f5c83343b882b28cf3e1be1e2368596d6a"
        },
        "date": 1761839422461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1387.1625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2212.391796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 833.90966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1612.6787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.383203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 498.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4154.201953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4686.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1343.04921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1461.8154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1501.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 797.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1107.0185546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1279.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 989.5810546875,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761942608659,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1373.3763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2293.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.52451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.728125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.24423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 498.57880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 212.39677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4169.546484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4414.7759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1249.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1402.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1491.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1145.74794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1149.10712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1016.655859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1525.7712890625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "484b81367e678f504b50d0c3aa049f96015b8559",
          "message": "Correct metric type documentation (#1696)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-11-03T11:05:20Z",
          "tree_id": "6027812a4fc35fae0319fddb700ab70ec154262a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484b81367e678f504b50d0c3aa049f96015b8559"
        },
        "date": 1762175274897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1375.78759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2420.358203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 835.261328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1655.33310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.2984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 349.53203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4472.21650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4850.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1456.433203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1546.971875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1761.52255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1292.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 977.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1522.233203125,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765396465930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1424.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2188.43994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 879.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1632.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 320.15341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 547.25126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 335.31162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4618.3119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4386.96982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1312.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1398.8951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1534.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1175.4212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1348.1412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1048.9984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 983.75087890625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d487c5b4b416478351f90693a17fe1399b6d98",
          "message": "Refactor cache metrics for consistency and completeness (#1721)\n\nThis PR streamlines cache metrics collection across disk and express\ncache implementations.\n\nThis change renames caching metrics for consistency with other OTLP\nmetrics. This change also captures latency, bytes_transferred from/to\ncache and errors consistently across both disk and express cache\nimplementations.\n\n### Does this change impact existing behavior?\n\nYes, updates cache metrics in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-12-10T18:49:08Z",
          "tree_id": "382f4e0f5addcf5fa0ecfe04b5a10b853c56bdc7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3d487c5b4b416478351f90693a17fe1399b6d98"
        },
        "date": 1765400114688,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1376.48759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2226.49375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 881.98291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.8921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 470.7029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.81845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4347.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4519.13720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1268.1267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1407.45927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1119.3705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1207.5439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1227.6423828125,
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
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765486441892,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1359.844140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2228.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.36298828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1660.35341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.3740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 409.17666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 261.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 283.85927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4148.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4317.50419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1319.490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1383.6888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1374.67783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 822.85869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1301.81787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.68505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1185.9625,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765811229787,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1344.0625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2285.36103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 889.21240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1628.88681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 514.440625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.4271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.23642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4394.4849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4731.12685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1410.82646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1480.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1577.9302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 842.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1036.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.73486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1288.13037109375,
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
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765897424090,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1336.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2278.92197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 891.8068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1684.0576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 303.227734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 647.53701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.89306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4165.0189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4392.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1254.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1405.1921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 918.24306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 769.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1424.776171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.70478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1118.115625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765976877156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1382.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2301.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.38017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.50751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.5234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 769.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 230.7826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 323.7431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4143.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4476.6810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1550.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1362.4490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1165.03818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1242.9314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1068.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1161.4728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1587.93974609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca",
          "message": "Add cache metrics for OTLP export (#1724)\n\nThis change adds cache metrics for OTLP export. \n\n### Does this change impact existing behavior?\n\nYes, adds new metrics for OTLP export\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-17T12:03:15Z",
          "tree_id": "98d1447807f41eeef7647db0e823549431bfe64a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca"
        },
        "date": 1765980404944,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1384.60341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2445.86455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.84072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.03671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 382.37265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.36943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 371.80390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4222.74365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4854.91845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1273.5919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1506.00126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1258.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 820.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1412.196484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1091.46328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1281.18525390625,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765996673042,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1320.4771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2173.81630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.42041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1644.683984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 468.71220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.59306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.65751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4523.2220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4810.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1270.35771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1376.869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1647.8078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 794.28310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.661328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1262.22001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1209.94560546875,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1765999533126,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1407.21337890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2368.25654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 883.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1684.94189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 310.8625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 736.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 177.74033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.65869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3939.89404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4449.0888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1447.72392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1373.88408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1421.0697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 811.91240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1405.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1104.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1253.31103515625,
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
          "id": "deba195af5cfc231784d226a00468cffc284df27",
          "message": "Align read window with part boundaries + configurable `initial_request_size` (#1707)\n\nRe-created https://github.com/awslabs/mountpoint-s3/pull/1618, in this\nPR:\n\n- we align read window end to the part boundary for the second request\n(see `round_up_to_part_boundary` method);\n- we update mock client to allow testing of this change;\n- we add `PrefetcherConfig::initial_request_size` field and use it in\n`mount_from_config.rs` example.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMinor version change and a change log to `mountpoint-s3-fs`, will add\nlater. Patch version change to the `mountpoint-s3-fs-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T11:19:28Z",
          "tree_id": "8c01e60eb5f63bdbc01ecb41f5c66fcc5b046b1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/deba195af5cfc231784d226a00468cffc284df27"
        },
        "date": 1766409723711,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1437.9666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2388.258203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 842.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1674.8771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.91103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 390.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.96171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.6111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4332.9841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4721.86552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.9478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1351.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 906.4431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1345.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1124.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1189.90283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1302.202734375,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766587706949,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2261.42978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 901.2396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1665.52890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 316.5703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.74775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 220.91630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 264.3330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3898.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4327.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1243.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1360.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1275.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1068.84970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1258.56943359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.2310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1178.05009765625,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767810506850,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1345.309765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2330.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 831.74873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1608.31806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 343.66103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 650.33046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 221.11162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 287.37861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4383.0142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4350.34375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1313.745703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1368.3447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 879.78408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1095.07470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1064.43671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1094.97431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1430.471875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a449eead062b530bf8ad4c1aa735045454cf8e3f",
          "message": "Ignore bincode's unmaintained status temporarily (#1740)\n\nUntil we migrate away from bincode, ignore the [unmaintained\nstatus](https://rustsec.org/advisories/RUSTSEC-2025-0141) to unblock the\nbuilds\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-09T16:19:13Z",
          "tree_id": "ce5cd74f403ffc24db87831a33ff08e0b4219f4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a449eead062b530bf8ad4c1aa735045454cf8e3f"
        },
        "date": 1767983104144,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.535546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2294.7595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 840.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1698.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.3580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 786.3216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.27158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4515.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4457.3693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1557.9435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1384.26552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 786.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1042.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1100.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1407.41669921875,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768240907854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1347.8587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2183.729296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.254296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1651.503125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.22978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 739.5330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.389453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.30205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4448.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4236.40009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1437.5732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1343.74453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 869.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1249.5623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1254.4328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.8970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.308984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af2480220f9999c62c3c6b15bae6394452c62799",
          "message": "Correct cache io_size metric type to histogram (#1738)\n\nUntil this change, these are incorrectly recorded as counters, which do\nnot help capture the bytes get/put to cache.\n\n### Does this change impact existing behavior?\n\nYes, Changes how these metrics are recorded in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-13T07:54:22Z",
          "tree_id": "b83488b7b5583a1b1d9a9b4cdf14cb559b6ffe48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/af2480220f9999c62c3c6b15bae6394452c62799"
        },
        "date": 1768298257862,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1386.109765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2117.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 844.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1690.68056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 304.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 855.32255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 228.60263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4540.4353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4672.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1266.98623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1421.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1339.9423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1056.21328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1071.98544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1149.7892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1664.96142578125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "23bffa176933a7ab15fbeb0e6d548595da65a1c8",
          "message": "Update maximum S3 object size in docs to 50TB (#1729)\n\n**What changed and why?**\n\nUpdated maximum object size limits for multipart uploads in\ndocumentation.\n\nS3 recently increased max object size from 5 to 50 TB: \n\n\nhttps://aws.amazon.com/about-aws/whats-new/2025/12/amazon-s3-maximum-object-size-50-tb/\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - just doc updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-13T18:34:42Z",
          "tree_id": "a9e3f800f72e2315b557e50e094f40d0e351313e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/23bffa176933a7ab15fbeb0e6d548595da65a1c8"
        },
        "date": 1768336726125,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1366.5158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2324.33525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 900.45732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1660.15068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.62158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 748.999609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 233.3642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.475390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4025.63857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4637.31318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1409.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1329.616015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1564.21884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 806.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1368.7767578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1269.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1320.64716796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "763ac0f9dac0c57059c60957373ea34fa10f161c",
          "message": "Update Mountpoint's semantics to enable opening a new file handle on an inode if all the existing open handles have been flushed (#1704)\n\nUpdate Mountpoint's semantics to enable opening a new file handle on an\ninode if **all** the existing open handles have been flushed.\n\nThis allows for the filesystem to not depend on a `release` request to\ncomplete pending (delayed) upload and cleanup the internal state of the\ninode within Mountpoint; alleviating situations where an `open` request\nmade immediately after a close(`flush`) request leads to a race\ncondition between the `release` following the close and the new `open`,\nwhich is sometimes an issue when the upload to S3 has been delayed until\n`release`.\n\n### Does this change impact existing behavior?\n\nThe semantics continue to allow **only one writer OR one/many readers**\nconcurrently active for a file; however, now a new handle can be opened\nwhich can override the current active handles (despite not being\nofficially released) if all the active handles are marked \"flushed\".\nAs part of opening the new handle, Mountpoint will also attempt\nuploading any pending data written for the previous file handle. All the\nrequests to the overridden handle(s) will then start to fail or be\nno-op.\nMultiple concurrent writers or concurrent readers and writers are still\nnot allowed.\n\nA handle is marked \"flushed\" when a close/`flush` is called on a file\ndescriptor mapped to that handle. A following `read`/`write` request\nwill revert that flushed state and signify that the handle is actively\nin use and can not be overridden. We maintain this information at the\nindividual handle level and also in an inode-locked map of handles.\n\nBreaking changes:\n- Requests made to a duplicate file descriptor for a flushed file handle\nwill start to fail (for e.g. a `read`/`write` would fail with `EBADF:\nfile handle has been invalidated by a newer handle opened`) or be no-op\n(for e.g. `flush`, `release`) if a new `open` has overridden the flushed\nhandle(s).\n- A race condition can occur between a `read`/`write` request for a\nduplicate file descriptor on an existing (flushed) handle and multiple\nconcurrent `open` requests, and any of them might succeed due to\nparallel processing of FUSE requests within Mountpoint. However, only\none of them will ever succeed and there cannot be two concurrent writers\nor reader+writer for the inode at any point in time.\n- An `open` request for an inode might fail if the pending upload to S3\nfails. This is independent of whether the file has been truncated in the\nsecond `open`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it needs a changelog entry and update to the semantics.md. Yes it\nalso requires a version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-14T19:13:24Z",
          "tree_id": "15a4bfce27a0cdfc0d625226b5aa90d567d5ff5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/763ac0f9dac0c57059c60957373ea34fa10f161c"
        },
        "date": 1768425427911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1348.5087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2242.01728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.15498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1652.36025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.59228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 425.39873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 223.758984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.00791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4102.9203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4599.7705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1474.6169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1374.621875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1498.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1758.95693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1267.36728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1117.9537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1485.40322265625,
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
          "id": "8ed4ae4287e8b302a18e12c7fcbd593439f4dba6",
          "message": "Update CRT submodules to latest releases (#1744)\n\nUpdate the CRT submodules to the latest releases.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth ab03bdd9..a4409b95:\n  > Add proxy settings for profile credential provider (#285)\n  > Add proxy config for credential providers (#281)\n  > swap to use aws_ecc_decode_signature_der_to_raw_padded for login provider (#279)\n  > add aws login provider (#278)\n  > create a common base for http client, migrate sso (#276)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 3c6d901a..1cb94121:\n  > Support static buffers in ecc signature helpers (#243)\n  > Add helper to convert signature to padded r and s pair (#242)\n  > Fix byo for ecc from asn1 (#241)\n  > Relax EC keygen to work on all platforms (#240)\n  > Remove skip test (#239)\n  > Move Linux from openssl_hkdf to ref_hkdf (#238)\n  > Fix warning when using cpp compiler (#236)\n  > Add functions for sha512 hmac hkdf (#234)\n  > SHA512 HMAC (#233)\n  > Export logic for ec keys (#232)\n  > Refactor ec key import (#229)\n  > Add helpers for encoding/decoding der ecdsa signatures to raw (#230)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 31578beb..95515a8b:\n  > Base64url support (#1229)\n  > Add va_end call (#1228)\n  > Remove no-op from CMakeLists.txt (#1226)\n  > Extend Platform Helper Functions (#1225)\n  > Remove apple-specific pthread_getname compile definition (#1224)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f951ab2b..d8264e64:\n  > change stale issue and discussion handling to run once a week (#76)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#74)\n  > make exports consistent (#73)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ce0d6562..acf31399:\n  > Revert \"Fix CI issues\" (#542)\n  > Automate the renew of the cert used in test (#540)\n  > Add helper to check for transient errors (#537)\n  > update cert as it's expired  (#539)\n  > Fix CI issues (#538)\n  > Configurable ports for HTTP/1.1 mock server (#535)\n  > Update mock server (#534)\n  > Add no_proxy_hosts configuration to proxy options/config. (#532)\n  > Move away from https://postman-echo.com (#533)\n  > Fix warnings found by the Undefined Behavior Sanitizer (#530)\n  > change stale issue and discussion handling to run once a week (#529)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8906a02c..d5ad01ce:\n  > Return error on using tls13 on macOS (#788)\n  > change to net test case (#789)\n  > Revert to commit 4c48e60 (#787)\n  > Fix compilation warnings (#783)\n  > Add helper to check for transient errors (#782)\n  > macOS dispatch queue and secitem (#758)\n  > Fix typos for DSA (#768)\n  > Disable clang-9 CI job (#780)\n  > Clean up cond var after all referencing threads are joined (#772)\n  > Thread name too long on CPU with more than 100 cores (#770)\n  > Expose Event Loop Type of ELG (#765)\n  > Correct PQ-opt-out s2n policy (#759)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 332dd22c..e9d1bde:\n  > [fix]S3express backpressure (#612)\n  > Revert \"Skip test on Apple\" (#611)\n  > Auto - Update S3 Ruleset & Partition (#610)\n  > Skip test on Apple (#606)\n  > Update rule set (#599)\n  > regression test for wrong assertion (#605)\n  > don't crash for server error. Handle it nicely (#604)\n  > disable hedging for s3 express (#602)\n  > fix the read window update from the same thread (#601)\n  > Delivery exact bytes for read window (#600)\n  > Accept memory limit setting from envrionment variable (#598)\n  > Fix the deadlock for pause/cancel (#596)\n  > fix compiler warnings (#593)\n  > Dynamic default part size (#575)\n  > Auto - Update S3 Ruleset & Partition (#590)\n  > Auto - Update S3 Ruleset & Partition (#585)\n  > Add new metrics (#578)\n  > Auto - Update S3 Ruleset & Partition (#583)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 9978ba2c..270b15ac:\n  > Add combine functions for crc32/64 (#109)\n  > change stale issue and discussion handling to run once a week (#106)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc e0ee14ec..728811ee:\n  > Prepare v1.66.2 (#2930)\n  > Fix ppc64le; Improve platform detection (#2926)\n  > Replace password string with proper class (#2925)\n  > Consolidate FORMAT_DER/PEM in tool-openssl (#2929)\n  > fix(target): fix mipseb 64bit compile (#2923)\n  > Add randomized unit testing for EVP_CIPHERs (#2922)\n  > Remove pkcs8 expected in test (#2924)\n  > Fix the libwebsockets integration test script (#2912)\n  > Fix incorrect assembler directive in AArch64 code (#2910)\n  > Speed up legacy AVX CI (#2876)\n  > Prepare v1.66.1 (#2918)\n  > ML-DSA: Missing Private Key Validation Checks (#2874)\n  > Fix extension processing order in x509 cli (#2916)\n  > Add stdin support for pkcs8 tool (#2915)\n  > Add openssl genpkey cli utility tool (#2907)\n  > Remove OPENSSL_NO_BF for real (#2914)\n  > Fix socat integration test (#2911)\n  > Iterate through all DNS entries in connect CLI (#2906)\n  > Prepare v1.66.0 release (#2900)\n  > Implement enc CLI (#2877)\n  > Several CLI Fixes (#2898)\n  > [tool-openssl] basic asn1parse support (#2882)\n  > Remove rsa expected in test (#2901)\n  > Support stdin for openssl rsa tool (#2899)\n  > Blowfish OFB Block Cipher Mode Support (#2892)\n  > Run ACCP integration tests on aarch64 (#2894)\n  > Bump urllib3 from 2.5.0 to 2.6.0 in /tests/ci (#2886)\n  > Add RSA_X931_PADDING to rsa.h (#2889)\n  > tool-openssl: pkcs8 error output on decrypt (#2883)\n  > Fix openssl comparison tests (#2888)\n  > Add sha1 CLI (#2885)\n  > Route ML-DSA ACVP to the right APIs (#2884)\n  > Add support for external contexts in ML-DSA ACVP (#2880)\n  > Clarify comments and API behaviour for equal-preference for TLS 1.3  (#2873)\n  > Add encap/decapKeyCheck support in ACVP (#2872)\n  > Prepare v1.65.1 (#2870)\n  > Move dk to Tests in ML-KEM ACVP (#2867)\n  > Add support for HMAC-SHA3 to ACVP tool (#2866)\n  > Add ACVP support for AES CFB128 (#2861)\n  > Replicate OpenSSL 1.1.1 behavior for BIO_s_mem BIO_NOCLOSE (#2864)\n  > Verify size of mlen in ML-DSA external mu mode (#2841)\n  > Add conversion and traceability for third-party test vectors (#2839)\n  > Add EVP_bf_cfb64 (#2851)\n  > Exclude .git from source size metric reporting (#2858)\n  > Fix AWS-LC Analytics Job (#2855)\n  > s_client: Add TLS 1.2 and 1.3 protocol selection flags (#2850)\n  > Adjust image-build-android concurrency group (#2848)\n  > Prepare AWS-LC v1.65.0 (#2844)\n  > Adjust script to handle other event types (#2845)\n  > Add authorization environments (#2843)\n  > Match req CLI behavior with OpenSSL (#2836)\n  > Bump openssl from 0.10.66 to 0.10.73 in /tests/ci/lambda (#2550)\n  > Add CFI directives in aesv8-armx.pl (#2634)\n  > Add CFI directives to chacha-armv8.pl (#2633)\n  > Set SSL_R_NO_CIPHER_MATCH when failing to set ciphers (#2840)\n  > Guard for __NR_getrandom use (#2834)\n  > Grant OIDC Token Permissions to Top-Level Image Build Workflow (#2837)\n  > Make N1 cpucap a subset of that of V1 and V2 (#2815)\n  > AES-XTS Enc Dec test on rand incremental length inputs (#2795)\n  > Add infrastructure for managing third-party test vectors (#2811)\n  > [SCRUTINICE] Avoid NULL dereference (#2823)\n  > Fix workflow permissions for formal verification & windows (#2831)\n  > Android Docker Image Build (#2830)\n  > Fix HAProxy CI failures (#2829)\n  > Fix OCSP CI failure (#2828)\n  > Refactor the staging repository to make the name consistent for writing IAM policies (#2824)\n  > Fix tpm2-tss CI; update patches (#2827)\n  > Fix apache httpd; keep pytest <7.0 (#2825)\n  > [SCRUTINICE] Fix unchecked return value (#2773)\n  > Fix bind9 CI failure (#2817)\n  > Remove Docker Image build infrastructure from CodePipeline (#2822)\n  > Setup OIDC for exchanging GitHub Token for AWS Credentials (#2819)\n  > Fix openldap; regenerate configure script (#2818)\n  > Remove unused Wycheproof test vectors (#2792)\n  > Disable old Windows jobs (#2812)\n  > Use new images for fuzzing and x509 (#2804)\n  > Prepare release v1.64.0 (#2810)\n  > Ensure HMAC_Init_ex reinitializes data properly (#2806)\n  > Implement more options for req CLI (#2775)\n  > Extend grv asan timeout for Golang to allow completion (#2805)\n  > Rename fork to fork UBE (#2803)\n  > Make poly_chknorm constant flow (#2788)\n  > Support NetBSD (#2754)\n  > Migrate analytics job to be GitHub triggered (#2779)\n  > Use right compiler with ruby CI (#2801)\n  > Migrate to macos-15-intel (#2802)\n  > Bump MySQL version tag to 9.5.0 (#2768)\n  > Rename snapsafe to VM UBE (#2800)\n  > Remove dead code (#2797)\n  > Use GitHub-based Verification Images (#2798)\n  > Add scrutinice pull permissions for aws-lc/amazonlinux repository (#2799)\n  > Support \"openssl dhparam\" (#2790)\n  > Use C++11 atomics to update session stats (#2786)\n  > GitHub-based Formal Verification Image Build (#2796)\n  > Additional options for \"openssl c_client\" (#2791)\n  > Remove python codebuild patches (#2793)\n  > Support more \"openssl rsa\" options (#2777)\n  > ECR Repositories for Android and Formal Verification Images (#2794)\n  > Update max polyz value (#2787)\n  > Prepare release v1.63.0 (#2789)\n  > AES-XTS on AArch64: Set w19 earlier before cipher-stealing of 1 block + tail. (#2785)\n  > Tool util functions in tool_util.cc (#2778)\n  > Failing no-op implementations for several UI functions (#2772)\n  > Ci add rpmbuild job (#2774)\n  > Add compiler to 24.04 docker image (#2783)\n  > Migrate Windows Omnibus to GitHub Workflow (#2780)\n  > Fix Ruby integration CI (#2765)\n  > Fix tpm2-tss CI (#2767)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 30f40f23..3276a087:\n  > Fix unit test build errors under -Werror (#5686)\n  > test(integration): add BoringSSL cohort to expand mTLS coverage (#5659)\n  > test(integration): add rust test for prefer low latency (#5684)\n  > test: confirm errors for no matching parameters (#5679)\n  > fix: incorrect group reported for TLS 1.2 session resumption (#5673)\n  > Fix: Unpin the rust nightly toolchain version (#5682)\n  > Fix: print diagnostics to stdout in s2n_resume_test (#5660)\n  > build(deps): bump cross-platform-actions/action from 0.31.0 to 0.32.0 in /.github/workflows in the all-gha-updates group (#5685)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5675)\n  > test(integration): refactor PQ tests to utilize in-memory harness (#5667)\n  > test(integration): add async cert verify and offload 'stress' test (#5653)\n  > feat: add handshake event (#5635)\n  > chore: Fix increase in Rust unit test timings (#5677)\n  > feat: verify certificate issuer intent by default (#5657)\n  > (chore): Revert \"feat(build): Improve OpenSSL libcrypto discovery (#5572)\" (#5664)\n  > ci: update clang format version (#5661)\n  > (chore): Rust bindings bump 0.3.32 (#5662)\n  > test: update CRL certs to comply with intent validation (#5651)\n  > feat(build): Improve OpenSSL libcrypto discovery (#5572)\n  > Import Cloudfront PQ TLS Policies (#5539)\n  > ci: add typo check to ci (#5491)\n  > build(deps): bump ytanikin/pr-conventional-commits from 1.4.2 to 1.5.1 in /.github/workflows in the all-gha-updates group (#5656)\n  > fix: refactor negotiate loop to fix issue with async callback (#5641)\n  > tests(integration): cases for TLS 1.3 group selection (#5652)\n  > refactor(tls-harness): use single test pair IO to allow for decryption (#5648)\n  > feat: Ability to set \"strongly preferred\" groups (#5634)\n  > test(integration): add mTLS integration tests (#5638)\n  > fix: allow for warning level TLS alerts prior to version negotiation (#5646)\n  > chore(bindings-release): s2n-tls v0.3.31 release (#5649)\n  > feat: add additional application context into Connection (#5637)\n  > test(integv2): remove dynamic record sizing test and related cleanup (#5644)\n  > test: add test certs for cert intent validation (#5630)\n  > feat: additional rfc9151 compat policy without sha1 hmac (#5645)\n  > feat: improve performance of getting validated cert chain from libcrypto (#5622)\n  > feat: add rfc9151 compat policies (#5615)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5640)\n  > chore: s2n-tls-hyper version bump (#5636)\n  > chore: Rust bindings release 0.3.30 (#5633)\n  > feat: add client hello random getter  (#5620)\n  > fix: enable -Wcast-qual flag for libcrypto=awslc (#4735)\n  > docs: Adds note about serialization error case (#5617)\n  > ci: add rust integration test to codebuild start script (#5623)\n  > test: require both MLKem and MLDsa capabilities for pure MLKEM tests (#5621)\n  > refactor(harness): Extend handshake logic to support TLS 1.2 (#5614)\n  > fix: replace `uint8_t` in for loops (#5619)\n  > ci: move the integnix job to us-west-2 (#5604)\n  > fix(ci): check Amazon copyright statement (#5611)\n  > feat: add pure ML-KEM support (#5586)\n  > ci: exclude `validate-pr-title` from merge queue (#5613)\n  > ci: update cmake version (#5612)\n  > test(integration): add dynamic record sizing test (#5608)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5605)\n  > fix(ci): add `build` to the validate-pr-title CI job (#5610)\n  > ci: PR conventional commit lint GHA (#5603)\n  > docs: add dev docs on handshake and io (#5596)\n  > Revert \"feat: basic security policy builder interface (#5493)\" (#5599)\n  > docs: update pull request template (#5591)\n  > fix: update memory usage test assertions (#5592)\n  > fix: update action user name (#5600)\n  > feat(integration): enable CodeBuild and Nix for rust integration tests (#5578)\n  > chore: Rust bindings release 0.3.29 (#5595)\n  > refactor: remove unused s2n_socket_set_read_size method (#5594)\n  > docs: comments for blob, stuffer methods (#5326)\n  > test: add memory profiler test (#5329)\n  > ci: scope down GitHub Token permissions (#5570)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 2 updates (#5585)\n  > refactor: Adds tls13 ciphersuites to default/default_fips policy (#5560)\n  > fix: update test_pq_only policy snapshot (#5583)\n  > feat: add PQ only policy support (#5545)\n  > feat: output utility for security policy (#5502)\n  > fix: update test broken by Openssl dhe generation change (#5580)\n  > ci: pin to older kissat version to unblock CBMC (#5581)\n  > feat: Improve supported cipher suites in RFC9151 policy (#5559)\n  > build(deps): update regex requirement from =1.9.6 to =1.12.1 in /bindings/rust/extended (#5556)\n  > build(deps): update zeroize requirement from =1.7.0 to =1.8.2 in /bindings/rust/extended (#5537)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5548)\n  > docs: update nix integration test instructions for uvinteg function (#5550)\n  > fix(test): Reduce s2n_security_policies_test duration (#5558)\n  > refactor 2/2: Fix security policy version in tests to numbered string (#5553)\n  > fix(aws-kms-tls-auth): supress logging & version bump (#5554)\n  > build(deps): update rtshark requirement from 3.1.0 to 4.0.0 in /tests/pcap in the all-cargo-updates group across 1 directory (#5555)\n  > refactor: add psk receiver (#5552)\n  > refactor 1/2: Fix security policy version in tests to numbered string (#5549)\n  > chore: update bindgen version to v0.69.0 (#5396)\n  > refactor(aws-kms-tls-auth): psk provider using HMAC psks (#5530)\n  > chore(bindings): revert dependency pins (#5544)\n  > fix: validate protocol version during connection deserialization (#5523)\n  > chore: add new team member (#5542)\n  > chore: bindings release 0.3.28 (#5540)\n  > feat(bindings): expose cert validation callback (#5357)\n  > bindings(rust): bump extended crates MSRV to 1.72.0 (#5534)\n  > fix(usage-guide): Update book.toml for mdbook 0.5 release (#5535)\n  > chore: bindings release 0.3.27 (#5526)\n  > refactor(aws-kms-tls-auth): add hmac based psk derivation (#5519)\n  > ci: install missing rust component for gitthub action workflows (#5528)\n  > docs: Small doc changes for KTLS (#5521)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-15T11:51:53Z",
          "tree_id": "53accad6b151ab89edcdd1f87976bc0c37b4fb71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8ed4ae4287e8b302a18e12c7fcbd593439f4dba6"
        },
        "date": 1768485319412,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1344.863671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2417.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.5505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1652.4158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.04091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 662.43740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.68447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4256.6478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4496.24375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1228.8423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1364.6814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 949.3478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1096.7955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1208.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 973.32236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1209.23408203125,
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
          "id": "3fd98410a7b05ca146eb4ba2c0020315238af37b",
          "message": "Upgrade toolchain to Rust 1.92 (#1748)\n\nUpgrade toolchain to Rust 1.92.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-16T12:36:14Z",
          "tree_id": "962ecad6da58428677b0da93e33635a6bb318d7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fd98410a7b05ca146eb4ba2c0020315238af37b"
        },
        "date": 1768574364747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1420.0822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2292.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.33857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.8724609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.0755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.7923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.3720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4318.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4414.2572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1271.3576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1381.933984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 897.5638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 776.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1137.5857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.665625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 933.93759765625,
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
          "id": "0e71446993dd83762e4556dcecac4fa2357bf52c",
          "message": "Upgrade aws-sdk-s3 dependency (in tests) (#1750)\n\nUpgrade `aws-sdk-s3` dependency (used in tests) to\n[v1.120.0](https://crates.io/crates/aws-sdk-s3/1.120.0).\n\nAddresses\n[RUSTSEC-2026-0002](https://rustsec.org/advisories/RUSTSEC-2026-0002.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-21T14:35:28Z",
          "tree_id": "6a50f5735970f428c781c47839c64d66dac9028b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e71446993dd83762e4556dcecac4fa2357bf52c"
        },
        "date": 1769013523463,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1342.9861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2242.546484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 875.51015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1652.7177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.26240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 504.66435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 206.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.39033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4570.973828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4786.99072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1257.65263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1358.1611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1304.76435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1644.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1015.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1211.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 997.45302734375,
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
          "id": "7b4d9d173869d24ebd445762a803203047e6c0b4",
          "message": "Add `max_background` setting to `S3FilesystemConfig` (#1746)\n\nAdd `max_background` setting to `S3FilesystemConfig`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, new version of `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-01-21T15:43:04Z",
          "tree_id": "0a2ca85495f4584b12827545516ba0cde324359e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b4d9d173869d24ebd445762a803203047e6c0b4"
        },
        "date": 1769017598624,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1396.62802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2254.56865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 837.20771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1736.09072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.59130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 709.08603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.5279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.13974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3876.23935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4388.92236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1414.79326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1403.23232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 810.8232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 809.82431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1334.56904296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1111.78037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1311.86826171875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ebe82da2e60e20a4854e63bb5396f68f4c52ceff",
          "message": "Update semantics documentation to describe changes as part of the open-after-close fix (#1752)\n\nUpdate semantics documentation to describe changes done as part of the\nopen-after-close fix in [PR\n#1704](https://github.com/awslabs/mountpoint-s3/pull/1704)\n\nUpdates done to `doc/SEMANTICS.md` documentation and some more details\nadded in`mountpoint-s3/CHANGELOG.md`.\n\n### Does this change impact existing behavior?\n\nNo, documentation update only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, documentation update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2026-01-22T11:26:43Z",
          "tree_id": "24caf93263596e959007c15af7ef3d497292b961",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ebe82da2e60e20a4854e63bb5396f68f4c52ceff"
        },
        "date": 1769088668044,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1419.28212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2194.77294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 874.16796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1686.6625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 315.2521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.32587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 213.6318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.08359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4471.6748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4376.493359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1332.6419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1388.73896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1457.88515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1654.54287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1065.2681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1039.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1435.7083984375,
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
          "distinct": false,
          "id": "eba4f082edcf2540b9feb1ba9261207e9cbecd98",
          "message": "Require initial-window-size when backpressure is enabled in client_benchmark (#1758)\n\nRequire read-window-size when backpressure is enabled in\nclient_benchmark.\n\nThe client_benchmark was silently defaulting to 0-byte initial read\nwindow when `--initial-window-size` was not provided, causing\nbackpressure tests to fail with minimal throughput (0-32 MiB instead of\nexpected GBs). Merged `--enable-backpressure` and\n`--initial-window-size` into a single `--backpressure-window-size`\nargument whose presence triggers backpressure mode.\n\n### Does this change impact existing behavior?\n\nNo, it fixes it.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-01-29T17:44:51Z",
          "tree_id": "cabdb135d58da6b2201591aa0e6c45d051311e62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eba4f082edcf2540b9feb1ba9261207e9cbecd98"
        },
        "date": 1769716169614,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1382.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2255.82509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1633.46181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.842578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 427.88603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 202.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 300.44765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4186.46875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4500.54443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1267.9111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1418.88076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 945.74541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1180.4724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1121.762890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1221.91806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1341.34228515625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fbb3de56f645defa5c398b007e60a829fe97c9e",
          "message": "Benchmark: Create s3io_benchmark (#1757)\n\n**What changed and why?** Need to create new fio-like benchmark tool for\nPrefetcher/Uploader level of abstraction that can run several jobs\nconcurrently.\n\nCreated new s3io_benchmark script:\n - Create single shareable instance of `Prefetcher` and `Uploader`\n- Read/Write job logic is mostly adapted/copied from existing separate\n`prefetch_benchmark.rs` and `upload_benchmark.rs` files\n- Random Read implementation logic is copied from\nhttps://github.com/awslabs/mountpoint-s3/pull/1747/changes\n- FIO-like job config file parsing. Precedence order: Job-specific >\nGlobal > Built-in default\n - Uses Tokio runtime for spawning multiple jobs concurrently\n\n**Manual Runs**:\n\n```\ncargo build --example s3io_benchmark\n./target/debug/examples/s3io_benchmark mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\n```\n\n```\nS3 I/O Benchmark\nConfig file: \"mountpoint-s3-fs/examples/s3io_benchmark/examples/example.toml\"\n\nLoading configuration...\nPreparing and validating jobs...\nFound 5 job(s) to execute\nCreating shared resources...\nExecuting jobs...\nJob 'read_2' completed: 3 iterations, 0.03 GB, 21.83s\nJob 'write_1_0' completed: 3 iterations, 0.03 GB, 6.73s\nJob 'write_1_1' completed: 3 iterations, 0.03 GB, 5.73s\nJob 'write_1_2' completed: 3 iterations, 0.03 GB, 5.23s\nJob 'read_1' completed: 3 iterations, 0.01 GB, 10.08s\nCompleted 5 job(s)\n\nAggregating results...\nWriting results to: example_results.json\n\nBenchmark complete!\n  Total bytes: 127114460\n  Duration: 21.15s\n  Total errors: 0\n```\n\n```\n{\n  \"jobs\": [\n    {\n      \"job_name\": \"read_2\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30000000,\n      \"elapsed_seconds\": 21.152757958,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_0\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 6.731901292,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_1\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.72617075,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"write_1_2\",\n      \"workload_type\": \"write\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 30277632,\n      \"elapsed_seconds\": 5.225869416,\n      \"errors\": []\n    },\n    {\n      \"job_name\": \"read_1\",\n      \"workload_type\": \"read\",\n      \"iterations_completed\": 3,\n      \"total_bytes\": 6281564,\n      \"elapsed_seconds\": 9.367737875,\n      \"errors\": []\n    }\n  ],\n  \"summary\": {\n    \"total_bytes\": 127114460,\n    \"total_elapsed_seconds\": 21.152757958,\n    \"total_errors\": 0\n  }\n}\n```\n\n### Does this change impact existing behavior? No.\n\n### Does this change need a changelog entry? Does it require a version\nchange? No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-29T21:18:54Z",
          "tree_id": "22ecfa4bdfe0b5939cfb1b709cf772739c839dcd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fbb3de56f645defa5c398b007e60a829fe97c9e"
        },
        "date": 1769729056255,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1378.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2253.23701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 856.56533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.61591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 301.065234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 462.16494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 209.83037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 429.16689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4213.73642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4309.27509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1372.42900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.2916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 757.12919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1030.29599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 990.62578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1598.26376953125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "17b7ca6dcf8556f9b09822a40c8dce6cff8393e7",
          "message": "s3io_benchmark: Add peak memory reporting (#1760)\n\n**What changed and why?** Need to track peak memory usage for\n`s3io_benchmark.rs`\n\n- Created memory tracker (adapted from `metrics.rs`)\n- Set default polling interval to 100ms.\n\n### Does this change impact existing behavior?\n\nN/A - benchmark only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - benchmark only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-30T16:06:47Z",
          "tree_id": "fcb4730679608bc9766818a57dfd8c3c3cbabde4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17b7ca6dcf8556f9b09822a40c8dce6cff8393e7"
        },
        "date": 1769796626643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1409.0208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2223.25615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.08896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1647.20576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.1125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.81103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 218.9193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.96083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4306.2150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5124.59013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1347.38955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1339.47197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1568.29462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 914.88740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1385.2890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1209.5162109375,
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
          "id": "fc3ed919f2afb2814611453fcabf6166b66fa895",
          "message": "Bump bytes from 1.11.0 to 1.11.1 (#1763)\n\nBumps [bytes](https://github.com/tokio-rs/bytes) from 1.11.0 to 1.11.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/releases\">bytes's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Bytes v1.11.1</h2>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/tokio-rs/bytes/blob/master/CHANGELOG.md\">bytes's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.11.1 (February 3rd, 2026)</h1>\n<ul>\n<li>Fix integer overflow in <code>BytesMut::reserve</code></li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/417dccdeff249e0c011327de7d92e0d6fbe7cc43\"><code>417dccd</code></a>\nRelease bytes v1.11.1 (<a\nhref=\"https://redirect.github.com/tokio-rs/bytes/issues/820\">#820</a>)</li>\n<li><a\nhref=\"https://github.com/tokio-rs/bytes/commit/d0293b0e35838123c51ca5dfdf468ecafee4398f\"><code>d0293b0</code></a>\nMerge commit from fork</li>\n<li>See full diff in <a\nhref=\"https://github.com/tokio-rs/bytes/compare/v1.11.0...v1.11.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=bytes&package-manager=cargo&previous-version=1.11.0&new-version=1.11.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-02-04T10:40:11Z",
          "tree_id": "5a9f325f4b5d8f1370003bfbcc36763c3c91e74c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc3ed919f2afb2814611453fcabf6166b66fa895"
        },
        "date": 1770209029088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1410.618359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2399.00859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 902.978125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1626.5421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 299.41123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 802.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.5376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.91484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4448.738671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4548.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1444.78115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1387.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 957.153515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1594.710546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1315.2140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1161.75341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1165.54501953125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}