window.BENCHMARK_DATA = {
  "lastUpdate": 1732724713189,
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
          "id": "9d26b3c315ae83fbfbec257d0c2324542f8561f8",
          "message": "Add empty data cache test  (#1149)\n\n## Description of change\n\nAdds an empty cache retrieval test\n\nFixes express cache to now pass new empty cache test\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes - shared cache no longer emits request failed when reading from an\nobject that doesn't exist\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-20T15:37:18Z",
          "tree_id": "d20f381e662cc600a84ce3e311bc21e12b002cd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d26b3c315ae83fbfbec257d0c2324542f8561f8"
        },
        "date": 1732124294495,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3329.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3351.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2926.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26187.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3291.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3432.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3226.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3215.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.265625,
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
          "id": "021da951173e310a0fc476ae285e42db51e1d524",
          "message": "Remove `express_cache` feature flag (#1145)\n\n## Description of change\n\n- Removes the feature flag so the shared cache may be included in the\nnext build;\n- Adds a changelog entry introducing the feature.\n\n(update and merge this after:\nhttps://github.com/awslabs/mountpoint-s3/pull/1144)\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, a new feature added.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes, adding one in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T16:56:06Z",
          "tree_id": "47175363acc44c7e677760642d4185b10ae0659f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/021da951173e310a0fc476ae285e42db51e1d524"
        },
        "date": 1732128995476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3400.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3197.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3141.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21214.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3246.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3365.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3234.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12286.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.953125,
            "unit": "MiB"
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
          "id": "cdeb1cdbe23169434e39656a4c900f83df6568cc",
          "message": "Update documentation to fix installation on Ubuntu 24.04 (#1150)\n\nOn Ubuntu 24.04, installation was failing with the following error:\n\"mount-s3 : Depends: libfuse2 but it is not installable\".\n\nThis change tells users to update the package index, such that the\nneeded package `libfuse2t64` can be found, fixing installation errors in\nUbuntu 24.04.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@hagemeier.ch>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T10:48:08Z",
          "tree_id": "96f847671fd8749b3a940e7e5448db393a758268",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cdeb1cdbe23169434e39656a4c900f83df6568cc"
        },
        "date": 1732193362855,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3208.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 339.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3311.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3170.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22430.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3400.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3224.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 230.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3515.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3272.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.2578125,
            "unit": "MiB"
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
          "id": "2255c4cb42a8550d555490f5fa98b6cd360648d5",
          "message": "Add documentation for shared cache (#1153)\n\nAdd documentation for shared cache feature\n\n### Does this change impact existing behavior?\n\nNo change in behaviour, only documentation updates.\n\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-21T10:54:40Z",
          "tree_id": "8b69154870ec3995469cccd01e750a8f25786114",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2255c4cb42a8550d555490f5fa98b6cd360648d5"
        },
        "date": 1732193619253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3371.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3231.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3209.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24415.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3445.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3234.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 203.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8157.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3175.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.46875,
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
          "id": "848434133368799358f46695ad50e1f5c3b261b7",
          "message": "Release v1.11.0 (#1152)\n\nBump the version to v1.11.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-21T11:36:19Z",
          "tree_id": "8e87b10e2b05c63663ec27b5d82639d191f6a819",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/848434133368799358f46695ad50e1f5c3b261b7"
        },
        "date": 1732196175976,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3147.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 321.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3473.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3418.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3346.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41609.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3244.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3251.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3312.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9349.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.87109375,
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
          "id": "ff191c1159e7d32b9fdeb2b0f0ca84628958c60a",
          "message": "Fix warnings for test struct variant not used (#1151)\n\nThis addresses the only build warning we have in Mountpoint's own\ncrates. The remaining build warnings come from the fuser forked crate,\nwhich we plan to address through an upstream contribution.\n\n### Does this change impact existing behavior?\n\nNo, avoids import of unused code in a test only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-21T15:05:50Z",
          "tree_id": "b622a43ba2266970019ee419fe25ee45d32db6f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff191c1159e7d32b9fdeb2b0f0ca84628958c60a"
        },
        "date": 1732208828466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3357.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3358.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3238.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3336.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31968.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3297.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3260.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3335.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3255.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.04296875,
            "unit": "MiB"
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732211126285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3418.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3164.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3282.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3198.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16576.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3456.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3172.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3309.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11830.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.0859375,
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
          "distinct": false,
          "id": "2337bf97ebcd5a016590732232c40f3ecd0728d2",
          "message": "Fix compilation error on macOS/arm (#1156)\n\nAdd a cast in the new `statfs` test: `libc::fsfilcnt_t` is not `u64` on\nall platforms.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:12:28Z",
          "tree_id": "68865d2183ede13e86586bb99ce19978c1ff8093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2337bf97ebcd5a016590732232c40f3ecd0728d2"
        },
        "date": 1732273945063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 318.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3326.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 342.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3227.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3167.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27788.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3232.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3143.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3223.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3358.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.67578125,
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
          "id": "ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e",
          "message": "Fix build on macOS CI runners (#1158)\n\nIn order to work around a homebrew issue with pkg-config on github\nrunners (see https://github.com/actions/runner-images/issues/10984),\ntemporarily run a command to uninstall `pkg-config@0.29.2`.\n\n### Does this change impact existing behavior?\n\nNo. Workflow change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T09:24:07Z",
          "tree_id": "6aba7e44177506e395ec9a9d51a40d5c2de1f559",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea5c63738a7cf59434b6e4dc7c3a3d54de663d6e"
        },
        "date": 1732274533961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3057.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3182.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3312.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3412.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19602.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3417.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3425.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3243.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3414.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 217.1328125,
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
          "id": "4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b",
          "message": "Update vendored fuser to bc31e4d2 (#1159)\n\nThis change pulls in the current state of our fuser fork, recently\nrebased on the latest commits upstream. Most importantly, we want to\ntackle build warnings which should be resolved by\nhttps://github.com/cberner/fuser/pull/315.\n\n### Does this change impact existing behavior?\n\nNo, build warning fixes only.\n\n### Does this change need a changelog entry?\n\nNo, no API or behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-22T10:25:11Z",
          "tree_id": "771eef70d5bb240a786b7dfb591f6eb48d3b84e8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4bb64e1d90dc24919222d5ac02bbf2f8d4e3825b"
        },
        "date": 1732278291922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3133.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3383.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3313.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3197.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22503.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3476.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3333.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3234.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3342.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.08984375,
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
          "id": "47e1d56e8899806b5c6f217cee291a8f9c57c4a9",
          "message": "Refactor MemoryLimiter to specify tracked 'area' when reserving memory (#1161)\n\nThe memory limiter currently tracks the amount of memory reserved for\nprefetching. We plan to extend this as part of supporting appends in S3\nExpress One Zone (#1160).\n\nThis change (originally authored by @monthonk) refactors the memory\nlimiter API to allow specifying the \"area\" we'd like to reserve in, for\nthe purpose of metrics for now.\n\n### Does this change impact existing behavior?\n\nNo change to existing behavior.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-11-22T12:59:03Z",
          "tree_id": "3ea920b54b9b8a47eefad798421f49cd86a90af3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/47e1d56e8899806b5c6f217cee291a8f9c57c4a9"
        },
        "date": 1732287526445,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3323.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3271.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3402.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3239.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26042.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3157.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3304.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3268.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3181.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.0703125,
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
          "id": "458ffdcd17717d7af944c2d7af8384c4f7b2d111",
          "message": "Improve support for additional checksum algorithms in mountpoint-s3-client (#1157)\n\nAllows to specify any of the supported checksum algorithms when\nuploading objects.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nYes, adding an entry to the `mountpoint-s3-client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-22T14:13:13Z",
          "tree_id": "87dbdf991dd2ef2df65ebcbee18f08b30c36b845",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/458ffdcd17717d7af944c2d7af8384c4f7b2d111"
        },
        "date": 1732291964031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3227.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3351.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18575.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3249.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 219.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2969.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.5234375,
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
          "id": "61dc41779154633ea8c6e15e07ed9e75348870bb",
          "message": "Introduce incremental upload mode and support for append (#1165)\n\nIntroduce a new option for Mountpoint to upload files incrementally and\nsupport appending to existing files. The new option can be enabled by\nsetting the `--incremental-upload` flag at mount time and is available\nwhen mounting directory buckets in S3 Express One Zone.\n\nAddresses https://github.com/awslabs/mountpoint-s3/issues/1160.\n\n### Does this change impact existing behavior?\n\nNo changes under default settings.\n\n### Does this change need a changelog entry?\n\nYes, added entry to the `mountpoint-s3` changelog, under \"New Features\".\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T12:39:32Z",
          "tree_id": "b1a5ead0ea75de63b7dd8fe5209eea4e57412a09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/61dc41779154633ea8c6e15e07ed9e75348870bb"
        },
        "date": 1732545597829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3351.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3224.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3336.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28160.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3098.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3301.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3340.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3133.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.69921875,
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
          "id": "c66546af1b31b1908d74ecd82c403142ef728aa2",
          "message": "Release v1.12.0 (#1166)\n\nBump version to 1.12.0\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo, just added a section for the release today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T13:17:49Z",
          "tree_id": "a2988234c7d2f7f37305f6eeb6d0c2cc270bbe91",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c66546af1b31b1908d74ecd82c403142ef728aa2"
        },
        "date": 1732547857250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3367.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3281.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3434.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3303.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28501.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3325.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3386.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3382.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.33984375,
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
          "id": "e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e",
          "message": "Remove old TODO (#1167)\n\nThe issue has already been addressed in Cancel S3 requests when dropped\n[#794](https://github.com/awslabs/mountpoint-s3/pull/794).\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-25T17:20:29Z",
          "tree_id": "97be414ede808c088863bc696d7602794a2b26f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7ce3a0a2d4536c7fa28f8276ed5bc2f00241f6e"
        },
        "date": 1732562452497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3450.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3326.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3273.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3323.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25422.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3343.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3322.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3425.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3179.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 203.0703125,
            "unit": "MiB"
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1732626095213,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3452.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3165.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3246.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3164.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24244.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 335.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3170.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3467.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3356.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3266.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.61328125,
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
          "id": "4ec847aa49b05c04b072540a50253139e7e6dfb1",
          "message": "Upgrade cargo-deny action, remove deprecated deny configurations (#1168)\n\nThe `cargo-deny` action we depend on release v2 in August, and with it\nmade breaking changes. Dependabot was unable to merge due to these\nbreaking changes: https://github.com/awslabs/mountpoint-s3/pull/969/\n\nThis change removes the deprecated configurations. `cargo-deny` now\nmarks all of those we configured as denied rather than allowing the\nviolations to be downgraded to warnings or allowed. This impacts us only\nfor 'unmaintained' crates which is fine, if needed we can always create\nan exception entry.\n\n### Does this change impact existing behavior?\n\nThis is a CI change only. We upgrade, removing unused and deprecated\nfields. Unmaintained crates will now fail CI.\n\n### Does this change need a changelog entry?\n\nNo, there is no customer-facing change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T11:16:25Z",
          "tree_id": "1d1cb34260301af398846e1b8de7766a9a4eced7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4ec847aa49b05c04b072540a50253139e7e6dfb1"
        },
        "date": 1732627113074,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3139.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3481.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3105.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28956.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3227.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3337.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3250.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3244.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.984375,
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
          "id": "13687edd9f9ff04b11ac2cb932a0ef5d3033a57b",
          "message": "Add additional Rustdoc to incremental upload module (#1169)\n\nJust adding more Rustdoc to help give pointers and get new readers up to\nspeed.\n\n### Does this change impact existing behavior?\n\nNo, documentation / style change only.\n\n### Does this change need a changelog entry?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-26T14:18:55Z",
          "tree_id": "af4a94cb2c47da8c87e41f2344452205339d8080",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/13687edd9f9ff04b11ac2cb932a0ef5d3033a57b"
        },
        "date": 1732637968434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3382.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3410.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3363.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3282.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21842.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3266.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3388.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3355.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3142.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.07421875,
            "unit": "MiB"
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
          "id": "896a10bb9c6c70d6928c19d04f4bd4168b289cd8",
          "message": "Fix flaky write_with_sse_kms_key_id_ok test (#1140)\n\nFixes the flakiness of write_with_sse_kms_key_id_ok test, which was\ncaused by not properly unmounting and dropping child.\n\nThis is not a breaking change; no changelog entry required (as this just\nfixes a test).\n\n\nBefore this change, this test fails in ~10 out of 100 runs, after this\nchange it fails 0 times out of 100 runs.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-26T14:37:17Z",
          "tree_id": "0d9a1126b207277215874e303deb01a097575a2b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/896a10bb9c6c70d6928c19d04f4bd4168b289cd8"
        },
        "date": 1732639121146,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3276.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3256.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3309.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21295.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3284.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3313.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 219.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3313.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3383.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.97265625,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732724713149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3328.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3405.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3349.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3443.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 206.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36175.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3315.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3254.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 242.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3379.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13199.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.25390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}