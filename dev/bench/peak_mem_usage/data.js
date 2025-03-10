window.BENCHMARK_DATA = {
  "lastUpdate": 1741612223823,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "49c55bb73315bf3b0dca5326d6632cdf6453207e",
          "message": "Update caching documentation (#1267)\n\nUpdated the caching documentation to specify how the metadata cache\ninteracts with the data cache options.\n\nCloses #1263.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-02-14T15:20:08Z",
          "tree_id": "1fcff08e5c24399a87a6d8d7c97c7ac9b5622d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49c55bb73315bf3b0dca5326d6632cdf6453207e"
        },
        "date": 1739554498181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12328.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17610.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35905.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30438.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32253.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10914.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9458.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11662.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 866.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 496.1875,
            "unit": "MiB"
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
          "id": "d70f9195740f616eca0e4a739b83aa34065e3261",
          "message": "Enforce sse on writes to the xz cache (#1257)\n\nWith this PR, flags `--sse` and `--sse-kms-key-id` will also apply to\nobject uploads to the xz cache.\n\n### Does this change impact existing behavior?\n\nYes, bumped the version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-17T22:57:28Z",
          "tree_id": "180c78283657fbca46ba80d09c29b0976dd709a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d70f9195740f616eca0e4a739b83aa34065e3261"
        },
        "date": 1739841127796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13304.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22152.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35591.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 312.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34198.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 372.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37126.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10360.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14192.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12806.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.2890625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "454e1fab291e1d020fe1a1917799f7a7f8d2cac7",
          "message": "chore(clippy): remove exclusions for false positive rules (#1271)\n\n### Overview\nWe removed exclusions for false positive Clippy rules as they were fixed\nand this workaround is no longer needed.\n\n### Does this change impact existing behavior?\nNo, this is a small boilerplate change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nChange log and version changes are not needed.\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:19:10Z",
          "tree_id": "ec72709f8a00be840dacf4c142a5db7ef9c0428e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/454e1fab291e1d020fe1a1917799f7a7f8d2cac7"
        },
        "date": 1739986467501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12397.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16412.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33331.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32554.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 376.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35325.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9641.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9027.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13013.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 792.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.03125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d2a50bbdf765b1a5652e6b9a5e89919feaf212be",
          "message": "Fuser fork submodule (#1269)\n\n### Overview\nTo be prepared for further refactoring we want to ease the supporting\neffort for the FUSER fork we're using.\nAs a first step we want to embed it as a git submodule which will be\nusing the existing `fuser/fork` branch as a remote.\nThis will allow us to keep the current sync flow with the original FUSER\n[repo](https://github.com/cberner/fuser) but skip the manual sync step\nin our `main` branch.\n\nWe will be able to update the fork by running `git submodule update\n--remote mountpoint-s3-fuser` which is more idiomatic. So we still be\nable to test changes locally w/o publishing the fork.\n\n*NB* We will need to commit the changes (dirty indices) after\nsubmodule's update.\n\n### Does this change impact existing behavior?\n\nThis change is completely internal and does not impact customer-facing\nbehavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis change does not require version or changelog changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:34:36Z",
          "tree_id": "56231be5cdb9a08a04d49dbf5c17de883229d997",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2a50bbdf765b1a5652e6b9a5e89919feaf212be"
        },
        "date": 1739987358188,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11481.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22235.80859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28980.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34599.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33987.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8306.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9808.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9161.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.3046875,
            "unit": "MiB"
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
          "id": "bacb676bf7303208dc39cf8e91aff56b5ccc89d2",
          "message": "Add initial version of benchmark experiment runner (#1266)\n\nIn order to investigate performance in Mountpoint, we want to be able to\nvary different parameters. In fact, it can be very useful to vary these\nparameters together to see how performance (such as sequential read\nthroughput) changes as we vary two parameters together.\n\nThis change introduces a new benchmark running script which uses the\nPython framework Hydra to enumerate combinations of parameters, and then\nexecute some function with each combination. The script manages the\nlifecycle of the `mount-s3` file system and collecting data into an\noutput folder.\n\nThe change currently does not reuse the FIO definitions used by our\nregression benchmarks. In the mid-term, these should be reconciled.\n\nThis pull request (PR) supersedes a previous PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/986.\n\n### Does this change impact existing behavior?\n\nNo, this adds a new benchmark runner and benchmark definitions. This\ndoes not impact the Mountpoint file system.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint file system or crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-21T07:13:35Z",
          "tree_id": "f41549c9170abd8427c12f5c7a56563584dfa834",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bacb676bf7303208dc39cf8e91aff56b5ccc89d2"
        },
        "date": 1740130083086,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13269.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20154.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32214.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29842.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31449.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8081.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9998.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11244.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 580.171875,
            "unit": "MiB"
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
          "id": "ea00e0dfffafa35e6ef2339a299c235fa1356d62",
          "message": "Add ETag to complete upload debug log (#1282)\n\nSmall change to add etag to debug logs when an MPU completes.\n\nWe already have size and object key, so this is the only missing\ninformation.\n\n### Does this change impact existing behavior?\n\nAdds etag to debug logs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T12:03:10Z",
          "tree_id": "bb4aeac896bbb845482469de8e7b1df4846647bb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea00e0dfffafa35e6ef2339a299c235fa1356d62"
        },
        "date": 1740406698812,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11369.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22841.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34559.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30362.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34864.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11261.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10335.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12974.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 662.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.4140625,
            "unit": "MiB"
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
          "id": "a5147a158407b8ed26a8953eabd218d3d79cfcc1",
          "message": "Add EC2 instance ID to benchmark output metadata (#1281)\n\nWe want to include the instance type in the metadata for a given\nbenchmark run.\n\nThis change adds a check into IMDS to query this data and add the EC2\ninstance type if available.\n\n### Does this change impact existing behavior?\n\nIt adds a new field to the benchmark output metadata file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no change to Mountpoint itself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T13:10:39Z",
          "tree_id": "e59b936e6f9b45b485f1e843ece5451832ba5e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a5147a158407b8ed26a8953eabd218d3d79cfcc1"
        },
        "date": 1740410727246,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13176.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20705.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32884.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36070.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37323.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10716.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12254.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13001.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 731.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 419.08203125,
            "unit": "MiB"
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
          "id": "0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa",
          "message": "Add ability to specify multiple network interfaces to benchmark script (#1285)\n\nTo investigate multiple network card performance, we want to run\nexperiments with and without multiple network cards. This change adds\nthe ability to run the benchmark experiment runner and specify both\nnetwork interfaces and the maximum network throughput parameter.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, new feature on benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no Mountpoint change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-25T18:02:35Z",
          "tree_id": "557d94cef6ae02f5344dc7298cb3b32037fa250f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa"
        },
        "date": 1740514764543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12607.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17747.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31953.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29758.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31654.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9223.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9814.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8956.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 690.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.85546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "191584906+sahityadg@users.noreply.github.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe",
          "message": "Add FUSE background and congestion threshold config to benchmark script (#1286)\n\nTo investigate Mountpoint performance, we want to run experiments with\ndifferent FUSE max background and congestion threshold settings.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-02-26T10:38:53Z",
          "tree_id": "5b46086209bed0903ee2eb52308aa3a1ef8c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe"
        },
        "date": 1740574511920,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11359.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23371.94140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36493.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32820.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35885.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11047.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11500.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11220.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 455.78515625,
            "unit": "MiB"
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
          "id": "59ccecfd3b7edf540504bb524f1ef7e7afae7ecc",
          "message": "Build and validate SLES package (#1278)\n\nBuild a separate package for SUSE Linux Enterprise Server (SLES), where\n`libfuse.so.2` is delivered by `libfuse2` rpm package (as compared to\n`fuse-libs` for AL2).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMay be? Added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-26T11:23:36Z",
          "tree_id": "427e5dc432f730ffa7fb9590d0d6635dba92c1ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59ccecfd3b7edf540504bb524f1ef7e7afae7ecc"
        },
        "date": 1740577461001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14711.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21457.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38098.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34393.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32753.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 415.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11418.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9596.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11444.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 766.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 528.53515625,
            "unit": "MiB"
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
          "id": "241d1195588ffed40c3fe508eede2befd80ce27f",
          "message": "Remove function pointer comparison in EventLoopGroup initialization (#1287)\n\nTrying to run `clippy` with Rust 1.85 fails with the following error:\n```\nerror: function pointer comparisons do not produce meaningful results since their addresses are not guaranteed to be unique\n  --> mountpoint-s3-crt/src/common/ref_count.rs:30:13\n   |\n30 |     assert!(callback.shutdown_callback_fn == Some(shutdown_callback));\n   |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n   |\n   = note: the address of the same function can vary between different codegen units\n   = note: furthermore, different functions could have the same address after being merged together\n   = note: for more information visit <https://doc.rust-lang.org/nightly/core/ptr/fn.fn_addr_eq.html>\n   = note: `-D unpredictable-function-pointer-comparisons` implied by `-D warnings`\n   = help: to override `-D warnings` add `#[allow(unpredictable_function_pointer_comparisons)]`\n```\n\nThis change reworks the affected code by inlining the shutdown callback\nfunctions into `EventLoopGroup::new_default` (the only caller), which\nmakes the assertion redundant.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-26T14:12:12Z",
          "tree_id": "eabe649b5d5eb0ad848fb82651238fdcf5c6b2f8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/241d1195588ffed40c3fe508eede2befd80ce27f"
        },
        "date": 1740587364308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14809.27734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22199.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32512.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34083.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36339.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8693.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11262.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13354.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 738.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.26171875,
            "unit": "MiB"
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
          "id": "6560d0848a2de4d6a7b2dd132d5f802ac02f1281",
          "message": "Update Rust toolchain to 1.85 (#1288)\n\nUpdate Rust toolchain to 1.85\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-26T14:46:46Z",
          "tree_id": "d2c6e697cb878cd635c9786298a1885308cd0416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6560d0848a2de4d6a7b2dd132d5f802ac02f1281"
        },
        "date": 1740589318307,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14444.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24759.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34964.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35333.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35415.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9979.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11328.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9676.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 601.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.53515625,
            "unit": "MiB"
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
          "id": "9b05724af7d9299e50ed7eb7a35a54f92c960297",
          "message": "Release v1.15.0 (#1291)\n\nUpdate changelog for any missing changes, and prepare for v1.15.0\nrelease.\n\nWhen complete, this release will close:\n- https://github.com/awslabs/mountpoint-s3/issues/1207\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog reviewed and updated, version change already correct.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-27T08:51:28Z",
          "tree_id": "5f698674028444e48d67b012950468047bf7b52e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9b05724af7d9299e50ed7eb7a35a54f92c960297"
        },
        "date": 1740654409358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13792.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25145.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32164.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31416.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33240.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10034.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10000.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12887.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 465.59765625,
            "unit": "MiB"
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
          "id": "0c51de8dbd7f57d1a368ddcf522d09c7d89ecd34",
          "message": "Increment mountpoint-s3 version number for future release (#1292)\n\nUpdate the version number to what the next expected version is (patch\nminimum).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-27T21:31:07Z",
          "tree_id": "3082ba5b0dea71cbb13267988ca5297ed1c7d23a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c51de8dbd7f57d1a368ddcf522d09c7d89ecd34"
        },
        "date": 1740699914149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11368.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23756.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34255.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 104.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38437.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37939.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11386.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11324.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9613.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 550.51953125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "burakvar@amazon.co.uk",
            "name": "Burak Varlı",
            "username": "unexge"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0",
          "message": "Install active toolchain by default with `rustup` in `package/Dockerfile` (#1299)\n\nStarting with v1.28, `rustup` will not install active toolchain\nautomatically:\nhttps://blog.rust-lang.org/2025/03/02/Rustup-1.28.0.html#whats-new-in-rustup-1280.\nThis PR updates `package/Dockerfile` to install active toolchain\nautomatically if it's not installed.\n\nThis should fix our recent CI failures in packaging step:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13633623152/job/38107451366\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-04T09:23:50Z",
          "tree_id": "519892fb68a6953f7ef5f4023d750544e9954b46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/79deea48d50e6e1dd29a37a4bdf73b98f9eb97d0"
        },
        "date": 1741088294009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12662.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26518.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37908.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37016.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36472.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11712.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9363.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9667.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.78515625,
            "unit": "MiB"
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
          "id": "ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae",
          "message": "Fix benchmark script column names for sweeped params (#1280)\n\nIf the column names are not defined in the Hydra script, they will be\nprefixed by `+`. In order to keep things simple on the analysis side,\nwe'll name the columns with placeholder values which will be replaced\nwhen running the script with multiple experiments.\n\n### Does this change impact existing behavior?\n\nIt changes output of the benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no changelog entry or version change as no change to Mountpoint\nitself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-05T11:26:43Z",
          "tree_id": "0935df6eff19d6c2a420ac938995a8c991e2b781",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ba70ef2d64a456c1739733fc4e14b7d6c84dd1ae"
        },
        "date": 1741182111907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11064.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21083.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36674.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35095.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33298.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11757.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10110.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9952.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.99609375,
            "unit": "MiB"
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
          "id": "d4dc7569154cb2e42b4568f9975339ce9e405936",
          "message": "Remove prefix from inodes (#1303)\n\nWhen Mountpoint is configured with the `--prefix` flag, all S3 requests\ncontain the specified prefix as part of the key. Currently, the prefix\nis duplicated in each `Inode` entry in the `full_key` field. This change\nremove the unnecessary duplication by only storing the partial `key` and\nreconstructing the `full_key` by adding the prefix before performing any\nS3 request.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n`mountpoint-s3` changelog entry. No version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-06T14:53:44Z",
          "tree_id": "603a5be7a26d27aed6daaa7b3ffd896a922b70e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d4dc7569154cb2e42b4568f9975339ce9e405936"
        },
        "date": 1741280937896,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13592.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19833.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36799.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34168.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32632.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11216.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12618.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9148.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 813.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.671875,
            "unit": "MiB"
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
          "id": "6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5",
          "message": "Update Cargo dependencies (#1306)\n\nUpdate Cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo change in behavior.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-07T12:55:38Z",
          "tree_id": "9b393ea325557646752e984e5ad4e12ac77860fc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e6d198704d2f83a6a8ac0aa7d6efc944a8259e5"
        },
        "date": 1741360213044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14535.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20727.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36640.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33047.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34190.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8997.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11773.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11792.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 649.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.90625,
            "unit": "MiB"
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
          "id": "631fe4cd2a2377bbd96f0f018d182ba7c2fb632b",
          "message": "Prevent failures in benchmark actions (#1307)\n\nBenchmarks currently fail when recording a worse than 2x regression.\nHowever, failed runs are not included in the workflow summary or in the\n[performance\ncharts](https://github.com/awslabs/mountpoint-s3/blob/main/doc/BENCHMARKING.md).\nWith this change, a regression will only result in an alert, and not\nlead to an action failure.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-07T14:43:19Z",
          "tree_id": "c755dfa3d813352466348597c2232f761972a463",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631fe4cd2a2377bbd96f0f018d182ba7c2fb632b"
        },
        "date": 1741366613212,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13834.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21768.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34680.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31517.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34105.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10066.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11487.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10972.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 251.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 825.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.73046875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e54b477a76b16a730d2a1d6e53c30f883e4daab",
          "message": "Set \"ring\" version to \"0.17.12\" (#1310)\n\nWe set `ring = \"=0.17.12\"` because the latest version ring = \"=0.17.13\"\nhas the [issue](https://github.com/briansmith/ring/issues/2463) with old\nGNU builds.\n\n`ring` is a test dependency of Mountpoint. Update was done previously in\nthis [PR](https://github.com/awslabs/mountpoint-s3/pull/1306/files) to\naddress vulnerability warnings.\nPinned version is also fine from RustSec point of view\n([link](https://rustsec.org/advisories/RUSTSEC-2025-0009.html))\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior \n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-10T10:55:01Z",
          "tree_id": "8d01828a4688e66e478e2e1df4ccf1e1a6f56461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e54b477a76b16a730d2a1d6e53c30f883e4daab"
        },
        "date": 1741612223775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14911.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23641.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33909.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32150.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 415.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32739.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11069.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12860.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11474.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 665.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}