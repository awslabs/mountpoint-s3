window.BENCHMARK_DATA = {
  "lastUpdate": 1741359346830,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1739553639283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3381,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3227.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3340.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3353.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37714.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2970.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3277.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3290.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3418.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.12109375,
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
        "date": 1739840219279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3338.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3339.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3432.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25511.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3212.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3375.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3284.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3348.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.92578125,
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
        "date": 1739985604821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3306.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3390.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3199.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3260.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26403.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3214.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3315.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3136.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3338.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.8828125,
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
        "date": 1739986485977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3334.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3335.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3387.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 241.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22037.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3065.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3250.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13258.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3272.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.3515625,
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
        "date": 1740129269566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3147.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3254.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3093.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3197.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22569.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3268.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3268.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3374.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3205.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.09765625,
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
        "date": 1740405831409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3370.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3408.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3248.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29227.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3276.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3445.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3452.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3307.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.86328125,
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
        "date": 1740409868931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3260.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3379.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3160.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30769.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3372.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3386.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3361.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.77734375,
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
        "date": 1740513913105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3335.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3259.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3303.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3199.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24661.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3177.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3187.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3411.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3323.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.56640625,
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
        "date": 1740573619667,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3315.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3235.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3334.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3226.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28764.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3269.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3582.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3385.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3416.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.8046875,
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
        "date": 1740576394886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3224.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3247.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3335.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3281.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22627.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3304.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3447.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3354.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3451.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.91796875,
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
        "date": 1740586434894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3305.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3307.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3295.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3289.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16386.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3356.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3301,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3554.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2950.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.50390625,
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
        "date": 1740588430775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3351.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3298.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19534.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3113.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3206.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3251.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3177.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.609375,
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
        "date": 1740653549692,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3214.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3185.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3183.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3160.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28560.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 355.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3104.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3260.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3367.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12874.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.28515625,
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
        "date": 1740699013102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3276.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3110.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3194.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3236.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 201.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32042.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3411.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3303.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3418.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3133.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.484375,
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
        "date": 1741087393276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3229.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3295.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3320.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3373.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19743.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3406.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3298.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3334.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3349.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.1796875,
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
          "id": "3d56190ef82ce45002287f0e8f160c84120393ec",
          "message": "Rename Mountpoint's fuser fork (#1295)\n\n### Overview\nWe renamed our fuser fork and reset its version info as we're staring to\npublish it to crates.io.\nIn this PR we\n* revert the submodule approach for consuming the fork's crate\n* move the code from `vendor/fuser` to `mountpoint-s3-fuser` folder\n* consume the renamed and synched FUSER Fork  from `fuser/fork`\n* update dependency\n* change `vendor/fuser` to `mountpoint-s3-fuser` in aux scripts and\ndocumentation\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior it only affects the\nproject's structure.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nIt does not require neither version change not change log entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-04T09:27:06Z",
          "tree_id": "759c407fe58982ea916eb18c2b45410396467382",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3d56190ef82ce45002287f0e8f160c84120393ec"
        },
        "date": 1741087588844,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3408.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3434.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3420.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3507.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15494.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3345.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3185.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 245.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3447.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3443.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.546875,
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
        "date": 1741181248963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3306.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3233.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3305.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3271.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37539.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3333.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3339,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3340.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3458.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.70703125,
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
          "id": "3246e7f6a227895c019a7fc1f5d067fd1f427788",
          "message": "Add Python lints to CI (#1301)\n\nBefore this change, there is no linting or style checks enforced on\nPython code outside of manual review.\n\nThis change introduces both using [Ruff](https://docs.astral.sh/ruff/),\na linter/checker written by the same organization owning\n[uv](https://docs.astral.sh/uv/) which we use as the package\nmanager/runner in `benchmark/` project.\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint. No functional changes to the Python scripts.\nTwo new GitHub CI jobs are introduced to add checks on the Python code.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint itself nor its crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-05T14:59:17Z",
          "tree_id": "6b695c93d72bfd145ea7304a91eedfee963b9083",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3246e7f6a227895c019a7fc1f5d067fd1f427788"
        },
        "date": 1741193973981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3321.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3312.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3372.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3277.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24187.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3099.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3260.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3369.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3373.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.234375,
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
        "date": 1741280091511,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3182.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3312.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3293.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3335.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13205.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 334.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3523.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3228.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 16622.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3224.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 239.73828125,
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
        "date": 1741359346781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3091.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3158.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3295.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3340.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27267.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3202.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3147.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 18598.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3300.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.63671875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}