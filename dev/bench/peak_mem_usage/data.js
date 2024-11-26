window.BENCHMARK_DATA = {
  "lastUpdate": 1732627899672,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "84c3e5467d252830d5297d1d6b67f5915e32933b",
          "message": "Rename the shared cache CLI flag (#1144)\n\n## Description of change\n\nRename the CLI flag for the shared cache. New help message:\n\n```bash\n--cache-xz <BUCKET>\n    Enable caching of object content to the specified bucket on S3 Express One Zone (same region only)\n```\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it's behind a feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:05:27Z",
          "tree_id": "b7946c1f0149cfed9838ace088cbec96f2ee3b92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c3e5467d252830d5297d1d6b67f5915e32933b"
        },
        "date": 1732105253278,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9588.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18875.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 29305.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29208.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29268.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7579.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10080.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9951.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 708.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 468.71484375,
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
          "id": "87ce33f3376e98e91fea351187bc0c9048ea543c",
          "message": "Improve the corrupted block test (#1147)\n\n## Description of change\n\nJust test improvements. Addresses comments from the\nhttps://github.com/awslabs/mountpoint-s3/pull/1139.\n\nRelevant issues: N/A.\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:22:48Z",
          "tree_id": "46e17a13aaedf014b55589a894220ff007d27565",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/87ce33f3376e98e91fea351187bc0c9048ea543c"
        },
        "date": 1732106200954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9577.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19809.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32560.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32498.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33388.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9339.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9279.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10495.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.8515625,
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
          "id": "1e331a4c66f287d0124085258be32024baedb88c",
          "message": "Move PR desc instructions from template to CONTRIBUTING.md (#1134)\n\n## Description of change\n\nUntil this change, we were using HTML comments in the PR template to\nprovide instructions to contributors so they know what to include in a\nPR title and description. Since changing the default on GitHub to use\nthe PR description as the squash commit message, we now see the HTML\ncomments in comment messages which is not desired at all.\n\nThis change replaces HTML comments with non-comment TODOs which should\nbe addressed and removed. These are visible to reviewers, who should\nprompt the author to address them before merging.\n\nWe move some of the more detailed instructions into `CONTRIBUTING.md`\nwhich is where we describe the contribution process more broadly.\n\nThere's some minor simplification to the template given we can no longer\nprovide clear instructions via HTML comment.\n\n## Does this change impact existing behavior?\n\nThis changes the default description for code contributions to the\nrepository only.\n\nNo change to the file system or S3 client crates.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-20T13:07:07Z",
          "tree_id": "ed6523d18bac9a25810e36e7384d8a74cbe3b6af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e331a4c66f287d0124085258be32024baedb88c"
        },
        "date": 1732116117770,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12035.43359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17595.1875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 26000.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31298.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29028.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7588.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 252.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7680.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8880.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 741.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 501.5,
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
          "id": "9d26b3c315ae83fbfbec257d0c2324542f8561f8",
          "message": "Add empty data cache test  (#1149)\n\n## Description of change\n\nAdds an empty cache retrieval test\n\nFixes express cache to now pass new empty cache test\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes - shared cache no longer emits request failed when reading from an\nobject that doesn't exist\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-20T15:37:18Z",
          "tree_id": "d20f381e662cc600a84ce3e311bc21e12b002cd5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d26b3c315ae83fbfbec257d0c2324542f8561f8"
        },
        "date": 1732125118376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10543.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18896.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31838.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30916.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29975.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9380,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9505.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10783.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 806.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.83203125,
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
        "date": 1732129810285,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12742.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18400.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31424.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 78.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28739.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30942.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8223.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9333.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9135.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 532.2578125,
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
          "id": "f7b4524e80095300b1fc5219c832b3c8db470fd7",
          "message": "Add metrics to express data cache (#1146)\n\n## Description of change\n\nAdds metrics to express data cache\nFixes a bug where getting a cache miss would be reported as an error\nrather than a cache miss\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nAdds metrics, no user facing functionality changes.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-20T17:11:45Z",
          "tree_id": "3adc8ba7f6eecd95b7ed277e567db2f25a80f683",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f7b4524e80095300b1fc5219c832b3c8db470fd7"
        },
        "date": 1732130726790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10073.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17699.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28875.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29699.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 27177.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8483.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9572.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9565.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 514.38671875,
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
        "date": 1732194193397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11559.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19984.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33200.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30567.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 369.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29750.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9143.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8816.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9521.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 711.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 531.390625,
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
        "date": 1732197035132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11725.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19046.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 29955.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 76.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27956.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34724.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8737.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9950.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9281.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 529.48046875,
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
        "date": 1732209588367,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11355.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18182.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 28970.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32333.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32259.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9565.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8014.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8862.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 792.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.1171875,
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
        "date": 1732211906166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 9661.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17329.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33805.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32363.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32145.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8326.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9868.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8846.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.83984375,
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
        "date": 1732274799158,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13623.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19332.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36115.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34229.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33450.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9515.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9692.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12783.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.2890625,
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
        "date": 1732275386468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12165.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23613.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32866.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 103.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34693.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36045.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10650.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11521.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12992.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 795.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.00390625,
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
        "date": 1732279185894,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13961.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21399.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35769.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36518.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36968.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 415.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11660.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10252.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12622.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 842.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 464.8828125,
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
        "date": 1732288366448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13395.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21784.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30681.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33365.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35408.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10210.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10054.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10907.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 745.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 501.52734375,
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
        "date": 1732292818906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13242.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20006.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34608.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30521.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35784.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10783.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12405.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12859.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 825.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.26953125,
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
        "date": 1732546590026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12455.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19954.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33967.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30785.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 378.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37073.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8709.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10465.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13140.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 749.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.28515625,
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
        "date": 1732548714448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12937.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21319.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34706.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36936.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34495.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11402.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10539.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13339.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 647.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 471.3984375,
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
        "date": 1732563295145,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11694.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21911.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38619.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34628.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34698.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10919.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10271.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11447.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 812.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.01171875,
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
        "date": 1732626943375,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12529.96875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21492.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33676.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35340.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34360.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9014.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11808.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11485.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 599.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.5234375,
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
        "date": 1732627899633,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11045.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21421.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32107.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30042.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34517.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7774.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11196.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12511.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 746.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.01171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}