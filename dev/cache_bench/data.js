window.BENCHMARK_DATA = {
  "lastUpdate": 1761137464047,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "6ebfad0752a0aa3acc4582a963661dee94208c74",
          "message": "Use OTel's exponential histograms for histogram metrics. (#1624)\n\nWith explicit hitograms, OTel uses fixed bucket bounds, which don't work\nwell for all Mountpoint metrics as they don't fall within the default\nrange. So we need to manually configure the bucket bounds for different\nmetrics with different boundaries. However, with exponential histograms,\nthe bucket boundss are automatically scaled and provide more accurate\nmetrics. However, this relies on OTel SDK's unstable feature.\n\nIn case this isn't supported in the future, we need to switch to\nexplicit Buckets with different bounds for different metrics.\n\n### Does this change impact existing behavior?\n\nNo, changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n\nNo, changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-30T18:17:39Z",
          "tree_id": "3ac3848aedf3c41ee75862d6373b5a10df33f68c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6ebfad0752a0aa3acc4582a963661dee94208c74"
        },
        "date": 1759263443720,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1397.4197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2256.51435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 882.94560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.58857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.6390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.62392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.42255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4313.6291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4658.846875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1389.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1411.4671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1556.34521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1241.3373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 991.10068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.11728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1510.0150390625,
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
          "id": "18bfb9da77cd131ea38a27b8336d918c9e1376a0",
          "message": "Use delta temporality as default for exporting OTLP metrics (#1625)\n\nBy default, we will use Delta temporality instead of Cumulative\ntemporality to minimise the network payload size while exporting\nmetrics. However, cutomers can switch to Cumulative temporality if their\nbackends don't support Delta temporality\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-02T14:19:01Z",
          "tree_id": "951fa54b689dd4e3456a600b7caed5a584a479a8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18bfb9da77cd131ea38a27b8336d918c9e1376a0"
        },
        "date": 1759421837630,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1355.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2500.337109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 896.13837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1681.55390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.051171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 606.91015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.8802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.78466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4256.8349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4422.45625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1257.58359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1419.12177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1405.055078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 809.6767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1018.4240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1070.39990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1422.43701171875,
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
          "id": "baaaf2d4deb94af1821392c7e6b43116c8a5ca86",
          "message": "Fix lifetime elision warnings and other lints (#1626)\n\nTo be ready for newer Rust versions, fix some lints which will start\nfailing builds if we upgrade.\n\n### Does this change impact existing behavior?\n\nNo, this only addresses lints by removing ambiguous code or updating to\nuse new methods that make code clearer.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-02T15:40:15Z",
          "tree_id": "6e79c86e93ac6bcef6b7469cc675332ec775b4ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/baaaf2d4deb94af1821392c7e6b43116c8a5ca86"
        },
        "date": 1759426677130,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1318.86318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2248.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 918.9326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1632.014453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.069140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 477.61025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.07373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 271.9111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4211.4716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4330.2509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1337.05634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1388.65830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 885.856640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1090.21748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1272.37958984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.18720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1446.009765625,
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
          "id": "a911c7b46ed31de610a7f27e06be25f6f0109165",
          "message": "Upgrade toolchain to Rust 1.89 (#1628)\n\nUpgrade toolchain to Rust 1.89. Address relevant clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated crate versions as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-03T14:12:46Z",
          "tree_id": "71a490a5005dcba0128e6af3573eb590ac5da550",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a911c7b46ed31de610a7f27e06be25f6f0109165"
        },
        "date": 1759508024527,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2287.3115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 898.29365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1657.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 673.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 211.56669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4192.44501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4469.5189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1351.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1383.22431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1256.1642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 824.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1349.50869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 946.69013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 981.62890625,
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
          "id": "a0289d73bddbdb4a287ea962392716ce8e0692f1",
          "message": "Update CI approvals to use single job with 'needs' relationship (#1632)\n\nThis change reduces noise from CI approvals by using one single job with\nits own approval, which all other jobs \"need\" before they start.\n\n`needs` definition:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds\n\nReference: https://github.com/awslabs/s3-connector-for-pytorch/pull/373/\n\n### Does this change impact existing behavior?\n\nCI change only. It now has all jobs requiring approval wait on a single\njob to succeed, which is itself gated by the GitHub environment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-06T10:58:34Z",
          "tree_id": "744a0fcb1bf8efb6a795df948f1e81274814172d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0289d73bddbdb4a287ea962392716ce8e0692f1"
        },
        "date": 1759755410797,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1401.25107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2362.69990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 889.752734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1642.47880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.245703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 566.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 418.5791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4180.952734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4666.65732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1372.9572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1388.16123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1617.70048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 829.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1356.56435546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1193.74443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 989.4150390625,
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
          "id": "85833e267c3bb8dd2ed34b86e2b5b74f440f051a",
          "message": "Fix typos in github workflows comments (#1634)\n\nFix a number of typos in the comments in github workflow definition.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T12:00:21Z",
          "tree_id": "fe4722fbfb82b913bfbe297e61f2441b399ab1b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85833e267c3bb8dd2ed34b86e2b5b74f440f051a"
        },
        "date": 1759759234901,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1397.81455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2132.15517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 878.13134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1653.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.0994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 747.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.68154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.33662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4278.982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4453.71240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1239.0703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1411.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 865.62724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 783.22177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1370.1662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1150.4912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1425.66416015625,
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
          "id": "015d318aec8e5f43281d07852353c1f1b8a368cc",
          "message": "Skip fuser tests on macOS in CI (#1636)\n\nAvoid running unit tests in CI for the `mountpoint-s3-fuser` crate on\nmacOS. Since `fuser` also removed their macOS CI, we don't want to\ntrigger spurious failures on a platform we do not support.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T18:13:23Z",
          "tree_id": "ff50d59281f16f62a8c959e6eea1d364317bef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/015d318aec8e5f43281d07852353c1f1b8a368cc"
        },
        "date": 1759781645767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2296.3755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 874.99853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1663.48544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.315234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 795.4447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.57275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4431.38994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4536.86748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1289.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1445.4416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1529.04521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1185.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1415.70390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1187.0115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1394.19794921875,
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
          "id": "f46fd4e5b85d3253e5a26625db0430c42edfe9b1",
          "message": "Upgrade cargo dependencies (#1638)\n\nUpgrade cargo dependencies to latest versions. Required one minor code\nchange in 2 tests to adapt to changes in `nix::fcntl`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated `crt` and `crt-sys` crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T09:28:52Z",
          "tree_id": "3d2c78f32d5530c9b3411488cade56007956e49b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f46fd4e5b85d3253e5a26625db0430c42edfe9b1"
        },
        "date": 1759923024772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1393.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2385.919140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 839.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1642.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.6263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 598.12216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.3904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.03359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4244.24794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4720.24560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1475.55869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1509.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1436.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1245.8990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1296.44462890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.286328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1323.13037109375,
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
          "id": "02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8",
          "message": "Upgrade rand crate (#1639)\n\nVersion 0.9 of the `rand` crate introduced significant breaking changes.\nThis change upgrades the dependency and adopts the new API, following\nthe guidance provided in the [Rust Rand\nBook](https://rust-random.github.io/book/update-0.9.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T13:45:05Z",
          "tree_id": "22257c8d2faa8c330e95ecb7f7018779d42f5f48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8"
        },
        "date": 1759938393452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1369.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2225.37021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 862.37080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1653.16416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.93515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.68828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.8435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.01162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3920.53857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4950.89775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1250.8185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1384.9712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1220.5498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 823.11875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1277.32734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1065.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1226.696875,
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
          "id": "8ad2378bd2ef1f7384a0624c540d2daa47bc102d",
          "message": "Remove dependency from rand_chacha (#1641)\n\nReplace `ChaCha20Rng` with `SmallRng`:\n* Simpler, smaller, and faster generator,\n* One fewer dependency,\n* Not cryptographically secure, but irrelevant for our usage.\n\nSee [comparison of different generators in the Rust Rand\nBook](http://rust-random.github.io/book/guide-rngs.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T16:19:02Z",
          "tree_id": "6df34246190a87a96513561a44329fb9eb38da46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8ad2378bd2ef1f7384a0624c540d2daa47bc102d"
        },
        "date": 1759947922409,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1374.85302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2351.50107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 883.9705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1620.40283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.3564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.663671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.19306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.8751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4361.68583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4412.94150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1265.20703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1427.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 920.248828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1408.44443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1003.1560546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.575,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1626.10283203125,
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
          "id": "0a84b07f3e5f759de17b50f9236b52f135ae9efa",
          "message": "Fix instructions for updating CRT dependencies (#1644)\n\nThe command to fetch tags could fail in case of conflict and bail out\nbefore upgrading the remaining submodules.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-09T12:41:41Z",
          "tree_id": "f3dbc9776d94d3fac2487f917acb4e89ac1cb1d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a84b07f3e5f759de17b50f9236b52f135ae9efa"
        },
        "date": 1760020872179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1412.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2203.69833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 906.25703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1643.2279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.96630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 732.7369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.00478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 260.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4003.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4478.578515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1435.058984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1501.00458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1503.68212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 828.48837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1325.6037109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1250.21142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1219.53818359375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "dbefa1f1d0229833dacf2303c524ce2ed299fc84",
          "message": "Fix typing in benchmark script (#1646)\n\n`any` isn't a type; also no need for the shortcut, instead specify the\nproper return type for the resource monitoring functions.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-09T21:51:32Z",
          "tree_id": "ab3bcc184a310ee59ec075bbd5aa477f99d51345",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dbefa1f1d0229833dacf2303c524ce2ed299fc84"
        },
        "date": 1760053976406,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1375.68115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2177.15146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 890.4998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1647.65068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.5306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 396.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 220.47900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.27734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4506.73310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 5230.71435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1339.258203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1471.6017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1498.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 810.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1260.21572265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.5423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1097.80380859375,
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
          "id": "ff8483df46863cccee72e9f17e13d05a49ce9283",
          "message": "Disable rustdoc tests for mountpoint-s3-crt-sys in CI (#1645)\n\nRemove dedicated rustdoc tests workflow, and enable rustdoc tests by\ndefault in all but `mountpoint-s3-crt-sys` crate.\n\nThe workflow was erroneously added to cover tests not being run, however\nthis is the default behavior unless opted out. This change removes the\nopt-out where we don't want it and drops the now redundant workflow.\n\n### Does this change impact existing behavior?\n\nCI only. No rustdoc tests will be run at all in `mountpoint-s3-crt-sys`.\nThere are no tests currently written anyway today.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no crate behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-09T22:28:07Z",
          "tree_id": "3d2cde86b135fa4ba567139a5b6e707f0955377e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff8483df46863cccee72e9f17e13d05a49ce9283"
        },
        "date": 1760056505587,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1399.05625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2317.96474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 823.1228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1652.87998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.99208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.13818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 235.9,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 280.1732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4505.353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4377.2818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1428.31552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1400.78935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.3162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1310.567578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1294.57255859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1209.012109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1488.858984375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6daf465dadf1d972de1d04aef1b33970ac8cd69",
          "message": "Unstable flag to open a new FD on each fuse thread. (#1642)\n\nThis mimics the libfuse behaviour. This is currently behind a flag\nbecause the performance and compatibility concerns are still being\nconsidered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-10T07:55:13Z",
          "tree_id": "98741d16499a18ef2a9d26ba734ebdbe791bd052",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6daf465dadf1d972de1d04aef1b33970ac8cd69"
        },
        "date": 1760090172104,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1433.81201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2273.75634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 864.56611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 284.044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 438.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4491.352734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4449.887109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1222.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1387.97666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 924.82705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1699.57607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1067.984765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.67529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1466.29306640625,
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
          "id": "83328d05ac69258a440d2fb320e9b8f802a0a08b",
          "message": "Mountpoint Build Tag (#1627)\n\nAdd support for platform-specific build tagging by using environment\nvariable `MOUNTPOINT_S3_AWS_RELEASE_TARGET` that appends platform\nsuffixes to version strings for specific platform releases.\n\n**Example**\nGiven that MOUNTPOINT_S3_AWS_RELEASE_TARGET is \"amzn2023\":\n  - Official build:` mount-s3 1.21.0`\n  - Official build with target: `mount-s3 1.21.0+amzn2023`\n  - Unofficial build: `mount-s3 1.21.0-unofficial+abc1234`\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-10T16:07:09Z",
          "tree_id": "142a5699154f59c5190faf3b7661cdd762d55c01",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83328d05ac69258a440d2fb320e9b8f802a0a08b"
        },
        "date": 1760119741459,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1387.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2319.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 880.23330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1672.86630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.33134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 446.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.68212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.38583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4409.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4756.6568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1496.3095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1381.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 919.17783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1101.976953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1116.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1013.6921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1272.840625,
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
          "id": "b97fa55fc40be0bb7a3f074a6ce2df1f943e312c",
          "message": "Bump astral-sh/setup-uv from 6 to 7 (#1649)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 6\nto 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0 🌈 node24 and a lot of bugfixes</h2>\n<h2>Changes</h2>\n<p>This release comes with a load of bug fixes and a speed up. Because\nof switching from node20 to node24 it is also a breaking change. If you\nare running on GitHub hosted runners this will just work, if you are\nusing self-hosted runners make sure, that your runners are up to date.\nIf you followed the normal installation instructions your self-hosted\nrunner will keep itself updated.</p>\n<p>This release also removes the deprecated input\n<code>server-url</code> which was used to download uv releases from a\ndifferent server.\nThe <a\nhref=\"https://github.com/astral-sh/setup-uv?tab=readme-ov-file#manifest-file\">manifest-file</a>\ninput supersedes that functionality by adding a flexible way to define\navailable versions and where they should be downloaded from.</p>\n<h3>Fixes</h3>\n<ul>\n<li>The action now respects when the environment variable\n<code>UV_CACHE_DIR</code> is already set and does not overwrite it. It\nnow also finds <a\nhref=\"https://docs.astral.sh/uv/reference/settings/#cache-dir\">cache-dir</a>\nsettings in config files if you set them.</li>\n<li>Some users encountered problems that <a\nhref=\"https://github.com/astral-sh/setup-uv?tab=readme-ov-file#disable-cache-pruning\">cache\npruning</a> took forever because they had some <code>uv</code> processes\nrunning in the background. Starting with uv version <code>0.8.24</code>\nthis action uses <code>uv cache prune --ci --force</code> to ignore the\nrunning processes</li>\n<li>If you just want to install uv but not have it available in path,\nthis action now respects <code>UV_NO_MODIFY_PATH</code></li>\n<li>Some other actions also set the env var <code>UV_CACHE_DIR</code>.\nThis action can now deal with that but as this could lead to unwanted\nbehavior in some edgecases a warning is now displayed.</li>\n</ul>\n<h3>Improvements</h3>\n<p>If you are using minimum version specifiers for the version of uv to\ninstall for example</p>\n<pre lang=\"toml\"><code>[tool.uv]\nrequired-version = &quot;&gt;=0.8.17&quot;\n</code></pre>\n<p>This action now detects that and directly uses the latest version.\nPreviously it would download all available releases from the uv repo\nto determine the highest matching candidate for the version specifier,\nwhich took much more time.</p>\n<p>If you are using other specifiers like <code>0.8.x</code> this action\nstill needs to download all available releases because the specifier\ndefines an upper bound (not 0.9.0 or later) and &quot;latest&quot; would\npossibly not satisfy that.</p>\n<h2>🚨 Breaking changes</h2>\n<ul>\n<li>Use node24 instead of node20 <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/608\">#608</a>)</li>\n<li>Remove deprecated input server-url <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/607\">#607</a>)</li>\n</ul>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Respect UV_CACHE_DIR and cache-dir <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/612\">#612</a>)</li>\n<li>Use --force when pruning cache <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/611\">#611</a>)</li>\n<li>Respect UV_NO_MODIFY_PATH <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/603\">#603</a>)</li>\n<li>Warn when <code>UV_CACHE_DIR</code> has changed <a\nhref=\"https://github.com/jamesbraza\"><code>@​jamesbraza</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/601\">#601</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Shortcut to latest version for minimum version specifier <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/598\">#598</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>Bump dependencies <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/613\">#613</a>)</li>\n<li>Fix test-uv-no-modify-path <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/604\">#604</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3259c6206f993105e3a61b142c2d97bf4b9ef83d\"><code>3259c62</code></a>\nBump deps (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/633\">#633</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bf8e8ed895b7f686f85839659243f31a7df4a977\"><code>bf8e8ed</code></a>\nSplit up documentation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/632\">#632</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/9c6b5e9fb575cac8e82bb437dd7fc25a094bd85d\"><code>9c6b5e9</code></a>\nAdd resolution-strategy input to support oldest compatible version\nselection ...</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a5129e99f44f5d2ba22cdc54770745bd6f0d9c33\"><code>a5129e9</code></a>\nAdd copilot-instructions.md (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/630\">#630</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d18bcc753ac29c1ed721aa4a812a90eb937852d6\"><code>d18bcc7</code></a>\nAdd value of UV_PYTHON_INSTALL_DIR to path (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/628\">#628</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bd1f875aba1ebb6d38211b773b094ad1dcca58df\"><code>bd1f875</code></a>\nSet output venv when activate-environment is used (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/627\">#627</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1a91c3851df47749b241e3c5c696350957c93ff0\"><code>1a91c38</code></a>\nchore: update known checksums for 0.9.2 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/626\">#626</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c79f606987cb4a0f3d1a95a3e44bcebfb0a9b303\"><code>c79f606</code></a>\nchore: update known checksums for 0.9.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/625\">#625</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e0249f159931b41f44fc8208c9b4cff085288cc9\"><code>e0249f1</code></a>\nFall back to PR for updating known versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/623\">#623</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/6d2eb15b4979924f7be71aa06908c6211f80ac88\"><code>6d2eb15</code></a>\nCache python installs (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/621\">#621</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-13T10:34:45Z",
          "tree_id": "7ef2199a3ffeb7837f7050a94d8eceeda0aab6c7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b97fa55fc40be0bb7a3f074a6ce2df1f943e312c"
        },
        "date": 1760358805722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1406.49599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2266.87060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 840.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1640.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.60224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 589.8431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.204296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 238.53505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4380.478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4271.90712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1213.725,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1370.672265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 961.5099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 835.61748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1331.38095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.56533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 930.8943359375,
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
          "id": "d1d0ffaf8aad5860cae440679c56af9fb8fde1b8",
          "message": "Document fstab support introduced in v1.18 (#1651)\n\nClarify in `CONFIGURATION.md` that fstab support is only available since\nMountpoint v1.18.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-13T16:12:50Z",
          "tree_id": "cc7f7b0998d82842efa4b55c2add65c8e6fe24f4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1d0ffaf8aad5860cae440679c56af9fb8fde1b8"
        },
        "date": 1760383528297,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1406.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2130.17763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 836.44833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1648.288671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.13916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 387.4806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 206.16328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4371.2263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4513.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1563.48154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1406.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1559.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1407.823828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1232.36015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1273.97900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1164.86787109375,
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
          "id": "cfa515c3deb060557ebb086e6b80e3194ca984e5",
          "message": "Update S3 log analyzer to parse memory usage correctly (#1652)\n\nWe recently updated the log format to include an extra space, which\nbroke parsing of memory usage metric from the logs. With this change,\nlog analyzer should be able to parse units or additional spacing before\nthe metric.\n\n### Does this change impact existing behavior?\n\nNo, only updates log-analyzer\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only updates log-analyzer\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-14T07:06:08Z",
          "tree_id": "d17eded88ef2868b2c8e1d0508b5b4bf84c03086",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfa515c3deb060557ebb086e6b80e3194ca984e5"
        },
        "date": 1760432785092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1397.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2316.484765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 876.115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1710.75810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 312.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 850.175390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 271.28955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4098.96708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4942.17724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1457.85888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1443.92978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.2708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1333.10087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.080859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1015.37197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1251.4728515625,
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
          "id": "c563674856c6d10c7b59b537efece76cdf40b03b",
          "message": "Update CRT submodules to latest releases (#1643)\n\nUpdate the CRT submodules to the latest releases.\n\nChanges of note to us:\n- Updates of S3 endpoint rules\n- New metric getters for CRT\nhttps://github.com/awslabs/aws-c-s3/pull/538\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\na0e41c12 Update CRT submodules to latest releases\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth cd9d6afc..ab03bdd9:\n  > Fix sts_web_identity credentials provider (#275)\n  > change stale issue and discussion handling to run once a week (#273)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#271)\n  > Remove clang-3 from CI (#270)\n  > make exports consistent (#269)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 8703b3e5..cdd052bf:\n  > Fix cmake4 macos builds (#226)\n  > change stale issue and discussion handling to run once a week (#222)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#220)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 2b67a658..31578beb:\n  > Import latest CJSON and libcbor. (#1223)\n  > Add support for direct IO read from file. (#1217)\n  > aws_explicit_aligned_allocator_new (#1147)\n  > change stale issue and discussion handling to run once a week (#1216)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http bfa03928..ce0d6562:\n  > [fix] failed to compile on FreeBSD (#527)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 12cb9f9c..8906a02c:\n  > Default to PQ TLS for s2n handlers if TLSv1.3 is negotiated (#740)\n  > (Darwin) Fix leak on setting unsupported cipher pref  (#757)\n  > Serialized scheduling (#754)\n  > Fix win build when lean and mean specified (#755)\n  > Fix a memory leak from error handling in s2n tls hanlder. (#753)\n  > Scheduled Iteration Mem-release Order (#752)\n  > Fix Dispatch Queue Leak (#750)\n  > Fix memory leaks in NW socket (#749)\n  > Fix warnings found by the Undefined Behavior Sanitizer (#748)\n  > change stale issue and discussion handling to run once a week (#747)\n  > aws_parse_ipv4/6_address (#745)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 70aacd2d..332dd22c:\n  > update the default behaviors on the fio options (#577)\n  > disable the threshold until we have better options (#574)\n  > Auto - Update S3 Ruleset & Partition (#572)\n  > File streaming support (#564)\n  > Auto - Update S3 Ruleset & Partition (#561)\n  > Auto - Update S3 Ruleset & Partition (#555)\n  > Fix recording of early request metrics (#542)\n  > [fix] retry with checksum result in failure (#543)\n  > change stale issue and discussion handling to run once a week (#541)\n  > Revamp checksum - retry will reuse the checksum (#532)\n  > Add more getters for metrics (#538)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b4e504c..8ca0b29b:\n  > Prepare 1.61.4 (#2717)\n  > Check compiler for 'linux/random.h' (#2716)\n  > Fixes for android CI tests (#2713)\n  > Migrate Linux ARM omnibus (#2711)\n  > Migrate linux-x86 jobs to self-hosted runners (#2708)\n  > Pin PyCA version in python integration tests (#2706)\n  > Prepare v1.61.3 (#2705)\n  > CodeBuild GitHub Actions Runner Project (#2704)\n  > Remove jitter entropy tests folder (#2702)\n  > Prepare v1.61.2 (#2699)\n  > Windows/MSBuild doesn't provide 'all' target (#2697)\n  > Fix illumos/OpenSolaris (#2698)\n  > Fix test issues with run_minimal_tests (#2695)\n  > Fix build when path has spaces (#2696)\n  > Update Android CI config (#2687)\n  > Prepare v1.61.1 (#2685)\n  > Support FIPS build for Windows/ARM64 (#2688)\n  > Fix duplicate test names in CodeBuild integration tests (#2686)\n  > More arm64 CI tests (#2674)\n  > Use /FI for MSVC forced-includes (#2684)\n  > Prepare AWS-LC v1.61.0 (#2681)\n  > Make X509 CodeBuild webhook more resilient (#2680)\n  > Use CheckCCompilerFlag to test -Wno-cast-function-type (#2678)\n  > fix: Allow zero-length passwords in PEM key decryption (#2677)\n  > Test ACCP in FIPS mode as well as non-FIPS (#2669)\n  > Wrap compiler when FIPS w/ clang v20+ (#2671)\n  > Increase SSLBuffer size to INT_MAX (#2673)\n  > Fix Keccak MY_ASSEMBLER_IS_TOO_OLD_FOR_512AVX flag (#2670)\n  > Add AES-XTS AArch64 implementation that will eventually be imported from s2n-bignum. (#2632)\n  > ML-DSA service indicator (#2666)\n  > Update SSLProxy patch (#2663)\n  > Fix for zig build (#2668)\n  > Fix typo in ssl_transfer_asn1 (#2665)\n  > Re-import mlkem-native for addition of CFI directives (#2659)\n  > Refactor iOS CI script (#2637)\n  > Import s2n-bignum 2025-09-05-04 (#2667)\n  > Rand small fixes (#2664)\n  > Implement snapsafe fallback entropy source (#2651)\n  > Address clang-ci comments on new x509 code (#2662)\n  > Merge x509 branch into main (#2660)\n  > Fix ternary operator in github workflow (#2653)\n  > TLS Transfer Serialization Improvements (#2616)\n  > Document and statically assert counters can't overflow (#2658)\n  > Add standalone MLKEM supported groups (#2589)\n  > Fix benchmarking issues with FIPS main (#2655)\n  > Update CPU Jitter Entropy dependency to version 3.6.3 (#2654)\n  > Add x86 Keccak implementation (#2619)\n  > Add expandedKey ASN.1 encoding for KEM keys (#2624)\n  > Prepare for v1.60.0 release (#2649)\n  > Implement ragdoll (#2615)\n  > Fix macOS FIPS build w/ clang-20 (#2645)\n  > Migrate from CodeBuild account actor filter to pull request comment filter based on GitHub permissions (#2644)\n  > Implement read/write timeouts for BIO datagram (#2610)\n  > Anchor CodeBuild account-id patterns (#2641)\n  > Prepare release v1.59.0 (#2643)\n  > ML-KEM: Fix mlkem-native importer.sh (#2635)\n  > Remove BIT_INTERLEAVE support (#2628)\n  > X509_REQ_verify for MLDSA44 and MLDSA87 (#2636)\n  > Add CFI directives in md5-armv8.pl (#2627)\n  > Add CMake Configure pre-push checker (#2596)\n  > ML-KEM: import and enable x86_64 backend from mlkem-native (#2631)\n  > Fix Bind9 CI test (#2629)\n  > ML-KEM: Re-import mlkem-native (#2630)\n  > Fix MariaDB integration test (#2625)\n  > Fix clang-21 compile error (#2623)\n  > Apache httpd integration test (#2614)\n  > Allow prasden ci (#2621)\n  > Add back RC4_options from decrepit (#2618)\n  > Add CFI directives to armv8-mont (#2584)\n  > Support other field for PKCS7 (#2603)\n  > Prepare release v1.58.1 (#2609)\n  > Add support for EVP_PKEY_param_check (#2611)\n  > Move check-linkage.sh to util (#2608)\n  > Prepare release v1.58.0 (#2607)\n  > ML-DSA constant-time hardening for caddq, poly_chknorm, decompose (#2602)\n  > Implement SSL_set_verify_result (#2576)\n  > Impl `SSL_client_hello_get1_extensions_present` and friends (#2561)\n  > target.h: more clearly check for ppc64 endianness (#2604)\n  > Add optimized + verified hybrid AArch64 assembly for batched SHA3/SHAKE  (#2600)\n  > Migrate MSVC tests to CodeBuild (#2583)\n  > Fix Win64 unwind info alignment (#2559)\n  > Rewrite 4-fold batched SHAKE to be amenable to batched Keccak-F1600 assembly (#2598)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check (#2565)\n  > Resolve issue with conflicting pkg-config variables (#2601)\n  > Prepare v1.57.0 release (#2593)\n  > Fix nixfmt CI failure (#2588)\n  > Add a couple more no-ops for legacy builds (#2590)\n  > (Experimental) Add SONAME Support to AWS-LC (#2546)\n  > Integrate formally verified AArch64 Keccak-x1 assembly from s2n-bignum/mlkem-native (#2539)\n  > Re-import s2n-bignum after merge of ML-KEM/Keccak functionality (#2595)\n  > Add production stage to CI pipeline (#2483)\n  > Bump tokio from 1.39.3 to 1.43.1 in /tests/ci/lambda (#2552)\n  > Add HMAC SHA3 benchmarks (#2513)\n  > Migrate Openssl-tool parameter parsing (#2501)\n  > ABI monitoring GitHub workflow improvements (#2574)\n  > Reimplement SSL_clear_num_renegotiations (#2586)\n  > Return NULL when a NULL or empty string is passed to NETSCAPE_SPKI_b64_decode. (#2580)\n  > Fix Libwebsocket Build (#2568)\n  > Explicitly test that input length is as expected for ed25519ph (#2585)\n  > Add back X509_STORE_get_verify_cb and X509_STORE_set_lookup_crls_cb (#2581)\n  > Update Windows Docker images (#2579)\n  > ML-KEM: Import AArch64 backend from mlkem-native (#2498)\n  > Offer P521 for signature_algorithms in client Hello (#2572)\n  > Renable NSym CI (#2570)\n  > Bump MySQL version tag to 9.4.0 (#2571)\n  > Update bind9 CI test to use meson (#2562)\n  > Prepare AWS-LC v1.56.0 (#2563)\n  > Revert \"Implement SSL_set_verify_result (#2526)\" (#2569)\n  > Implement SSL_set_verify_result (#2526)\n  > Remove nsym-related CI (#2566)\n  > Document non-support of TLS 1.3 PHA (#2560)\n  > Pull in SSL_get_negotiated_group and TLSEXT_nid_unknown from upstream (#2558)\n  > tool-openssl: Fix warning 'strnlen' specified bound 4096 exceeds source size 128 (#2556)\n  > Implement SSL_CTX_set_client_hello_cb for ClientHello callback (#2490)\n  > Prepare Docker images for upcoming CI changes (#2475)\n  > docs: Add FIPS documentation to BUILDING.md and README.md (#2387)\n  > CI for mingw64 and ucrt64 w/ msys2 (#2502)\n  > Add missing x509 CI to list of tests (#2548)\n  > Dynamically link AWS-LC in cpython integration tests (#2545)\n  > Align -help return codes in tool-openssl CLI to match Openssl (#2543)\n  > Add LC contributors to allowlist (#2547)\n  > Minimize the nginx patch even further (#2537)\n  > Fix python main diff after upstream PR 135402 merge (#2542)\n  > Use SP 800-56Arev3 Section 5.6.2.1.4.b instead of ECDSA PCT method (#2536)\n  > Fix PKCS12 Error Code (#2538)\n  > Improve OpenSSL compatibility (#2540)\n  > Add pkey command to CLI tool  (#2519)\n  > Add prikhap to allow list for CI (#2533)\n  > cpu_ppc64le.c: fix build on FreeBSD (#2520)\n  > Export BF_cfb64_encrypt (#2525)\n  > Implement pkcs8 cli (#2342)\n  > fix: Update Clang version from 18 to 19 in Windows workflow (#2529)\n  > ci: Add GitHub user ID 159580656 to CI allowlist (#2530)\n  > Remove redundant conditions (#2523)\n  > Remove obsolete python main patch (#2522)\n  > Export BIO_f_md for consumers (#2515)\n  > Prepare AWS-LC v1.55.0 (#2521)\n  > s2n-bignum: Add prefix header to _s2n_bignum_internal.h (#2510)\n  > Silence GCC 15 warning for uninitialized variable (#2517)\n  > Rework memory BIOs and implement BIO_seek (3rd try) (#2472)\n  > Temporarily allowlist the webhook actors to AWS-LC (#2514)\n  > Implement HMAC over SHA3 truncated variants (#2484)\n  > Add SSL_CTRL defines for SSL_*_tlsext_status_type (#2496)\n  > Release v1.54.0 (#2511)\n  > Intentionally redefine iovec in headers as CI (#2512)\n  > Add two new APIs to expose TLS 1.3 traffic secrets for kTLS (#2506)\n  > rwlock race tests is not a GoogleTest executable (#2509)\n  > Remove sys headers from bio.h (#2508)\n  > Document that EVP_PKEY_CTX_set_rsa_keygen_pubexp takes ownership (#2503)\n  > Note a couple of typoed struct names that we'll leave alone. (#2499)\n  > Re-remove afunix.h (#2495)\n  > Fix Console Test Suite Execution Locally (#2493)\n  > Order tool output by options provided - x509 (#2454)\n  > Rename SSL test files to match Scrutinice filter (#2491)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 1c5798b8..30f40f23:\n  > feat: Add key update to ktls feature (#5484)\n  > ci: remove duplicate buildspec (#5228)\n  > chore(ci): add sanitizer jobs for openssl-1.0.2-fips (#5508)\n  > chore(ci): add openssl-1.0.2-fips gcc-4.8 job (#5512)\n  > ci: pin libloading which requires MSRV 1.71 (#5520)\n  > chore(ci): Update older integ job to prep for deprecation (#5501)\n  > chore: delete files in preparation for refactor (#5517)\n  > ci: fix clippy (#5516)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 4 updates (#5497)\n  > chore: bindings release 0.3.26 (#5509)\n  > test: Adds test for serializing a previously-serialized connection (#5495)\n  > test(integv2): trim bloated cases (#5453)\n  > docs(usage guide): description connection serialization (#5504)\n  > feat: add async public key support (#5473)\n  > ci: only use git fetch for nix jobs (#5506)\n  > chore(nix): Flip awslc to upstream flake. (#5317)\n  > chore: bump instance size for Valgrind (#5500)\n  > feat: basic security policy builder interface (#5493)\n  > refactor: move new default policies to separate file (#5492)\n  > chore: pin to older pytest-rerunfailures (#5494)\n  > feat: 'latest' option for strict policy (#5488)\n  > build(deps): bump nixbuild/nix-quick-install-action from 32 to 33 in /.github/workflows in the all-gha-updates group (#5487)\n  > feat(integration): add utilities for capability assertions (#5475)\n  > feat: add pure mlkem_1024 definition (#5468)\n  > fix: no server signature scheme expected with rsa kex (#5481)\n  > refactor(tls-harness): avoid implicit shutdown of ossl connection (#5474)\n  > Fix HKDF on big-endian (#5478)\n  > feat: add method to get signature scheme name (#5471)\n  > refactor: signature scheme name adjustment (#5472)\n  > ci: tweak ruff ci failure message (#5485)\n  > chore(release): release s2n-tls v0.3.25 (#5486)\n  > chore(nix): switch to nixpkgs libressl (#5467)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5479)\n  > chore: Adds build file to get new codebuild project running in CI (#5476)\n  > chore(nix): Move nix integ jobs to ec2 fleets (#5461)\n  > Add TLSv1.3 (classical + PQ) policies for CloudFront Upstream (#5460)\n  > refactor: setup replacement default policies (#5464)\n  > ci: fix wikipedia network test + better error message (#5470)\n  > ci: don't include tls/extensions in SAW build (#5466)\n  > refactor(stuffer): Rename s2n_stuffer_has_pem_encapsulated_block (#5465)\n  > test(integration): add record padding test (#5451)\n  > Add fixed version of the rfc9151 policy (#5277)\n  > chore: apply clippy fixes (#5459)\n  > chore: bindings release 0.3.24 (#5455)\n  > refactor(tls-harness): separate benchmark abstractions (#5444)\n  > chore(ci): once a week, clean the nix store for the kTLS job. (#5430)\n  > Add AWS-CRT-SDK-TLSv1.0-2025-PQ (#5403)\n  > chore(ci): tell crt to not check submodule version (#5450)\n  > build(deps): update criterion requirement from 0.6 to 0.7 in /bindings/rust/standard (#5442)\n  > fix(typo): fix a typo in codebuild.yml (#5445)\n  > feat: add integration test for secp384r1_mlkem_1024 (#5438)\n  > chore: add Awslc fips next to CI (#5349)\n  > ci: document how to manually run the codebuild jobs (#5441)\n  > chore: bindings release 0.3.23 (#5439)\n  > test(bench): add api for mutual auth handshake (#5437)\n  > refactor(bench): unify IO methods (#5434)\n  > build(deps): bump cross-platform-actions/action from 0.28.0 to 0.29.0 in /.github/workflows in the all-gha-updates group (#5435)\n  > feature: update default_pq to support secp384r1_mlkem_1024 (#5433)\n  > chore: Nix Corretto version bump/upstream (#5427)\n  > feat(bench): add generic shutdown functionality (#5426)\n  > feat: add secp384r1_mlkem_1024 kem group (#5395)\n  > ci: run rustfmt/clippy on standard crates (#5333)\n  > docs(aws-kms-tls-auth): clarify security impact of failure modes (#5424)\n  > docs(aws-kms-tls-auth): add readme (#5409)\n  > ci: require repo write permissions for codebuild (#5421)\n  > feat(aws-kms-tls-auth): add provider & receiver structs (#5408)\n  > Flip Nix integration tests to use uv/pytest (#5352)\n  > feat: add ML-KEM-1024 kem definition (#5367)\n  > feat(aws-kms-tls-auth): add psk identity (#5402)\n  > ci: Migrate Duvet GitHub Action to duvet-action repo (#5400)\n  > ci: start codebuild jobs from github actions (#5383)\n  > feat(aws-kms-tls-auth): add codec and parsing (#5398)\n  > docs: note that s2n_shutdown may keep reading (#5370)\n  > chore: release 0.3.22 (#5397)\n  > fix(ci): adding set -e to prevent nix develop to hide failing tests (#5393)\n  > feature: new TLS1.2 + FIPS CRT security policy (#5375)\n  > chore: apply clippy and fmt fixes (#5386)\n  > fix: policy util should ignore deprecated TLS1.2 kems if missing (#5372)\n  > build(deps): bump nixbuild/nix-quick-install-action from 31 to 32 in /.github/workflows in the all-gha-updates group (#5371)\n  > build(deps): bump nixbuild/nix-quick-install-action from 30 to 31 in /.github/workflows in the all-gha-updates group (#5366)\n  > tests(integ): add more debug logging (#5363)\n  > tests(integv2): fix flaky session resumption test (#5362)\n  > build(deps): bump baptiste0928/cargo-install from 3.3.0 to 3.3.1 in /.github/workflows in the all-gha-updates group (#5361)\n  > build: prevent needless rebuild with S2N_INTERN_LIBCRYPTO=ON and Ninja (#5356)\n  > Include application message in Debug impl (#5359)\n  > ci: Fix the sslyze test for nix (#5283)\n  > refactor(examples): remove connection pool (#5353)\n  > build(deps): update pprof requirement from 0.14 to 0.15 in /bindings/rust/standard (#5334)\n  > chore(ci): add a cargo timing buildspec (#5176)\n  > fix: do not use \"digest and sign\" for ML-DSA in FIPS mode (#5348)\n  > ci: workaround for nix + gnutls + ubuntu24 issue (#5345)\n  > chore: Bindings release 0.3.20 (#5344)\n  > tests(integ): fix nondeterministic ocsp test shutdown behavior (#5340)\n  > feat(bindings): expose custom critical extension API (#5337)\n  > chore(ci): Pin parking_lot_core, lock_api (#5338)\n  > ci: Use official libcrypto verification model repository (#5336)\n  > feat: add custom critical extension support (#5321)\n  > fix(benches): reuse config for handshakes (#5319)\n  > chore: bindings release 0.3.20 (#5332)\n  > CertificateRequest Rust bindings (#5331)\n  > Add CertificateRequest certificate selection callback (#5318)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5315)\n  > feat(examples): add key log example (#5314)\n  > Remove unused negotiate_kem function causing build failure (#5316)\n  > chore: Bump nixpkgs version to 24.11 (#5294)\n  > tests: policy snapshot test (#5309)\n  > fix(benches): use session ticket for resumption (#5305)\n  > feature: release ML-DSA support (#5307)\n  > feature: support for ML-DSA handshake signatures (#5303)\n  > tests: turn verbose mode off by default in integ tests (#5286)\n  > Revert \"build: add pull requests limit for dependabot\" (#5302)\n  > chore: Update Apache test certificates from RSA1024 to RSA2048 (#5285)\n  > feature: add crypto support for mldsa signing (#5272)\n  > refactor: remove conn->client_hello_version (#5278)\n  > build(deps): unpin test-log because of MSRV updates (#5300)\n  > build: add pull requests limit for dependabot (#5299)\n  > chore: bindings release 0.3.19 (#5298)\n  > build(deps): update strum requirement from 0.25 to 0.27 in /bindings/rust/standard (#5292)\n  > build(deps): update test-log-macros requirement from =0.2.14 to =0.2.17 in /bindings/rust/standard (#5290)\n  > feat: Add `as_ptr()` API for Config (#5274)\n  > tests: reduce integ test flakiness + improve debugability (#5282)\n  > build(deps): update env_logger requirement from 0.10 to 0.11 in /bindings/rust/standard (#5296)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.1.0 to 4.2.0 in /.github/workflows in the all-gha-updates group (#5297)\n  > tests: fix flaky test_serialization (#5288)\n  > chore: bump standard MSRV to 1.82.0 (#5295)\n  > chore: Add comments to track dependency requirements (#5287)\n  > tests: improve coverage for s2n_stream_cipher_null (#5268)\n  > build(deps): bump astral-sh/setup-uv from 5 to 6 in /.github/workflows in the all-gha-updates group (#5273)\n  > chore: bindings release 0.3.18 (#5284)\n  > ci: fix expectations when using system default libcrypto (#5279)\n  > ci: handle 429 from yahoo.com network integ test (#5280)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelogs and ensured version changes are correct.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-14T09:52:07Z",
          "tree_id": "61f810876539acf01d2884e09c76038846876d61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c563674856c6d10c7b59b537efece76cdf40b03b"
        },
        "date": 1760445937861,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.04130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2138.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.38642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1618.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.28720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 431.56103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.76943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.50068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4472.88779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4646.25537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1372.75732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1349.9529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 858.87763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1034.84248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1085.71279296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1017.84287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1069.23837890625,
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
          "id": "c17443394a7c52f6124f47099d543e972f0b21bf",
          "message": "Emit a MOUNTPOINT_EVENT_READY when error logging is enabled (#1647)\n\nEmit an event which signals that mountpoint is ready.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-10-14T12:53:37Z",
          "tree_id": "b4d8099afa5587992b2ade3919838c69924e906b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c17443394a7c52f6124f47099d543e972f0b21bf"
        },
        "date": 1760456858184,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1384.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2172.63125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 908.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1662.5951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 298.85048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 389.8791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.12314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.17470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3888.47568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4549.5287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1293.74873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1392.9099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 997.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1012.25263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1050.9623046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.10595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1138.5146484375,
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
          "id": "1e597586bd601c2d529d723b8fb02582939ec184",
          "message": "Fix fstab tests CI job name (#1654)\n\nFix a typo! Adds fstab job name missing closing bracket.\n\n### Does this change impact existing behavior?\n\nChanges CI job name only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-14T14:44:10Z",
          "tree_id": "4185a4889cd93f8a68b4c9204caca89977cb9de8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e597586bd601c2d529d723b8fb02582939ec184"
        },
        "date": 1760463518133,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1388.625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2095.160546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 870.761328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1636.2052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.1568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 463.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.8251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 254.0328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4462.61826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4913.05068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1306.166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1374.55771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1482.3560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 767.91787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1403.20341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1143.26533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1023.83125,
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
          "id": "280c7e055580b596cedb1c0986899d5a560e1fd4",
          "message": "Update CRT submodules to latest releases (#1659)\n\nUpdate the CRT submodules to the latest releases.\n\nChanges of note to us:\n- Add option ENABLE_SOURCE_MODIFICATION\n[#2739](https://github.com/aws/aws-lc/pull/2739)\n\nThis change also sets ENABLE_SOURCE_MODIFICATION=OFF when building\n`aws-lc`, in order to address #1658.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal cdd052bf..3c6d901a:\n  > Fix asn.1 parser on big endian (#228)\n  > Clean up error handling around unsupported rsa functions (#227)\n  > SHA512 support (#223)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8ca0b29b..5a9df219:\n  > Prepare v1.62.0 (#2743)\n  > Add build-time option to opt-out of CPU Jitter Entropy (#2733)\n  > Simple script to build/run tests (#2736)\n  > Add option ENABLE_SOURCE_MODIFICATION (#2739)\n  > Fix Libwebsockets CI (#2737)\n  > Add CI dimensions for legacy AVX512 flags (#2732)\n  > Adding pkeyutl tool to the CLI (#2575)\n  > Add minimal EC CLI tool implementation (#2640)\n  > Implement coverity suggestions (#2730)\n  > Implement workaround for FORTIFY_SOURCE warning with jitterentropy (#2728)\n  > Add null check on RSA key checks (#2727)\n  > Move udiv and sencond tweak calculations to when needed (#2726)\n  > Implement genrsa command (#2535)\n  > Add ASN.1 decoding for ML-KEM private keys as seeds (#2707)\n  > Implement dgst CLI command (#2638)\n  > crypto/pem: replace strncmp with CRYPTO_memcmp to fix -Wstring-compare error (#2724)\n  > Centralize password handling tool-openssl (#2555)\n  > Type fix in mldsa (#2308)\n  > Bump urllib3 from 2.2.3 to 2.5.0 in /tests/ci (#2551)\n  > Don't ignore CMAKE_C_FLAGS w/ MSVC (#2722)\n  > Delete util/bot directory (#2723)\n  > Migrate integration omnibus (#2715)\n  > Fixing a bug in ML-DSA poly_uniform function (#2721)\n  > Fix tests that assume X25519 will be negotiated (#2682)\n  > nginx now supports AWS-LC (#2714)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-16T10:16:50Z",
          "tree_id": "df59540015905b95ccd6fa291f257e0d678e9336",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/280c7e055580b596cedb1c0986899d5a560e1fd4"
        },
        "date": 1760616929597,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1405.879296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2297.57587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 844.66025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1632.56171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 294.262109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 408.30517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 240.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4282.625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4883.36591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1260.94990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1378.3197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 894.64013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 815.253125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1399.7904296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1190.21630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1575.31279296875,
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
          "id": "5502a861ee11eaa6dc61aa8e711262b2d4388d8c",
          "message": "Release crates including mounpoint-s3-fs 0.8.1 (#1662)\n\nRelease mounpoint-s3-fs 0.8.1 and dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-17T12:21:40Z",
          "tree_id": "79f3727803d407b4dc844f549a675130ac612de2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5502a861ee11eaa6dc61aa8e711262b2d4388d8c"
        },
        "date": 1760713690396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1360.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2154.582421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 832.97744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1650.96357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.03291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.9509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.9140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.9259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4599.65283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4591.0115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1442.135546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1387.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 944.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 783.66162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1375.72529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1198.6646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1654.5119140625,
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
          "id": "e56881a32e22336ceacde1b7b904dcc167d0d3db",
          "message": "Split mkdir tests to cover mkdir local visibility explicitly (#1657)\n\nSimple change to split out tests to explicitly cover two behaviors we're\ninterested in: promotion of local dir to remote dir after file creation,\nand visibility of local directories to operations immediately after.\n\n### Does this change impact existing behavior?\n\nNew tests only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T12:55:00Z",
          "tree_id": "e9173f075c4bf319c9bf51b4cfd4bc6c8b59e5ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e56881a32e22336ceacde1b7b904dcc167d0d3db"
        },
        "date": 1761060513569,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1446.2505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2334.68984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 892.35966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1633.23017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.2005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 789.70830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.68271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 289.86640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4475.0337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4523.5712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1279.321875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1384.783984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 851.80703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 865.59814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1359.28779296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.58212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1034.05009765625,
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
          "id": "3821a489258eece0f5c8b9651e19c4e82a4d06a6",
          "message": "Add Docker build (no publish) in CI, fix image sources, minor style changes (#1665)\n\nBuilding the container images had warnings due to style inconsistencies.\nAdditionally, the base image did not use the ECR images in all cases. On\ntop of addressing these two issues, this PR adds a job to CI to verify\nthat the container images are buildable.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T22:22:43Z",
          "tree_id": "a5222ae996ef0ff431321d334251f932a0dec7ff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3821a489258eece0f5c8b9651e19c4e82a4d06a6"
        },
        "date": 1761093120639,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1365.4689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2121.96474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 869.41044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1638.680078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.04990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.35009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.6890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 273.44091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4689.15322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4584.27998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1521.5708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1395.17333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1557.66650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 808.3025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1142.61630859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 994.01103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1373.77373046875,
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
          "distinct": false,
          "id": "7315459c07f35780a069bd5122cf8445b09224d6",
          "message": "Update default logging level to INFO for Mountpoint, WARN for dependencies (#1668)\n\n## Use WARN as default log level; Mountpoint crates remain at INFO\n\nThis change modifies the default logging configuration to use WARN as\nthe global default log level, while explicitly setting INFO level for\nall `mountpoint_s3` crates.\n\n**What changed:**\n- Changed default log level from `info` to `warn,mountpoint_s3=info`\n- Added `MOUNTPOINT_LOG_TARGET` constant to centralize the crate name\npattern\n\n### Does this change impact existing behavior?\n\n- **No breaking change** \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n**Yes, this needs a changelog entry**\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-21T23:28:03Z",
          "tree_id": "33f8317ae19b422bfdcbf1cbe5b9b9cba953bed0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7315459c07f35780a069bd5122cf8445b09224d6"
        },
        "date": 1761096657065,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1387.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2271.78349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 882.0076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1635.64921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 761.994921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.7927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.03984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4120.24560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4552.83935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1265.99873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1415.462109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1484.1658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 813.558203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1356.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 973.687890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1220.99296875,
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
          "id": "b76df6c44bddab77e19a78e1ce21470b8496c231",
          "message": "Add info logging around FUSE session join (#1664)\n\nThis change adds some new `INFO` logging around exits. In the past,\nwe've seen tickets where Mountpoint \"spontaneously\" unmounts. It's not\nclear what's going on in those tickets and has not been possible to\nreproduce given no access to those systems. This change adds a little\nbit of extra logging to try and give better visibility into what\nMountpoint thinks is happening.\n\n### Does this change impact existing behavior?\n\nNo change to end-user behavior. Only new logs are added at `INFO` level,\nwhich is shown to customers.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a simple logging addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T23:36:46Z",
          "tree_id": "7651be2b7bc916e2f0a55366020a9a86e04bdc78",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b76df6c44bddab77e19a78e1ce21470b8496c231"
        },
        "date": 1761097264213,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1427.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2137.2607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 849.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.647265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.08671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 274.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4126.0677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4284.01923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1279.9625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1287.3814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 953.29609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1612.3673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1205.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1001.21787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1683.7390625,
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
          "id": "1b4bb3e657a10f8e36b12bfabcc585005f88ea1b",
          "message": "Update on_telemetry to use operation_name rather than request_type for metrics (#1669)\n\nPreviously, Mountpoint metrics reported quite a lot of S3 operations as\n`\"Default\"` operations. This was due to leaking of the underlying meta\nrequest abstraction.\n\nThis change replaces that by using the `operation_name` provided by the\nCRT request metrics struct. This should cover all S3 operations we care\nabout.\n\n### Does this change impact existing behavior?\n\nThis change fixes metric attributes. It is not considered a breaking\nchange, as the metric log format is considered \"unstable\".\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor fix to metric attributes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-22T07:52:12Z",
          "tree_id": "0fd6e70a75b7f33f0b613c6e051b40080e55e394",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1b4bb3e657a10f8e36b12bfabcc585005f88ea1b"
        },
        "date": 1761129824548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1406.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2161.8314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.98671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1668.50595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.26640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 387.1458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 222.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4219.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4514.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.737109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.73134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1526.176171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1151.79931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.48857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.67763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 926.8669921875,
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
          "id": "63a6268a8b9905c63b6c7d2026b29a87159bcb6b",
          "message": "Update PUBLISHING_CRATES.md (#1663)\n\nUpdate PUBLISHING_CRATES.md.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-22T08:45:53Z",
          "tree_id": "ce9d90ba3dc72c1f28f2572952e8e510910750ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63a6268a8b9905c63b6c7d2026b29a87159bcb6b"
        },
        "date": 1761131931285,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1373.4837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2275.80927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 862.9953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1686.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 323.80703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 423.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.673046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 268.359765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4666.2744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4510.7,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1289.51826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1412.2154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 871.961328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 775.44033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.8314453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1062.18876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1057.80078125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e82f217ed0d7fa1e593d736012e8d16f34a36fa8",
          "message": "benchmark: Refactor resource monitoring tools into separate classes (#1660)\n\nExtract individual monitoring tools (mpstat, bwm-ng, perf-stat,\nflamegraph) from benchmark ResourceMonitoring class into separate tool\nclasses that implement a common MonitoringTool interface. This improves\nbenchmark code maintainability and makes adding new monitoring tools\neasier.\n\n- Add benchmark/monitoring package with base MonitoringTool ABC\n- Extract MpstatTool, BwmNgTool, PerfStatTool, FlamegraphTool classes\n- Refactor ResourceMonitoring to manage list of tool instances\n- Maintain backward compatibility with existing managed() API\n- Add unit tests\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-22T10:52:07Z",
          "tree_id": "2d8b490bd77bd7eff7f94507ab5662f5a9ff1346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e82f217ed0d7fa1e593d736012e8d16f34a36fa8"
        },
        "date": 1761137462987,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.33798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2310.78701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 889.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1701.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 295.88798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 532.85673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.28076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.898828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4299.49482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4246.6236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1205.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1394.134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1643.0255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 760.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1041.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1038.7373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1329.7951171875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}