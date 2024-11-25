window.BENCHMARK_DATA = {
  "lastUpdate": 1732563238702,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "02f8dda257177db60771033445afbc31bd6768af",
          "message": "Retrieve server-side encryption setting on HeadObject (#1143)\n\n## Description of change\n\nAdd two new fields to `HeadObjectResult`: \n* `sse_type`: The server-side encryption algorithm used to store the\nobject (header: \"x-amz-server-side-encryption\"),\n* `sse_kms_key_id`: The ID of the KMS key was used for object\nencryption, if present (header:\n\"x-amz-server-side-encryption-aws-kms-key-id\").\n\n## Does this change impact existing behavior?\n\nNo. Only adds fields to a non-exhaustive type.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes: `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-19T11:16:56Z",
          "tree_id": "1288023535a01babbf21054209f701e3eebaf39c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02f8dda257177db60771033445afbc31bd6768af"
        },
        "date": 1732023121946,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14931.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23655.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40075.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 153.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37901.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41676.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13112.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11276.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9359.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.00390625,
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
          "id": "b61f4b966f616ed3d231857403946149520aad2a",
          "message": "Express cache cleanup (#1142)\n\n## Description of change\n\nRemove unneeded todo\n\nRelevant issues:\nhttps://github.com/awslabs/mountpoint-s3/pull/1141#discussion_r1846841259\n\n## Does this change impact existing behavior?\n\nNo\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-19T16:53:40Z",
          "tree_id": "d8291a54b3efb561d89bdee136233e17a36748de",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b61f4b966f616ed3d231857403946149520aad2a"
        },
        "date": 1732043176686,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17712.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24455.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37896.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35653.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38024.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14232.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13370.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8475.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.390625,
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
          "id": "84c3e5467d252830d5297d1d6b67f5915e32933b",
          "message": "Rename the shared cache CLI flag (#1144)\n\n## Description of change\n\nRename the CLI flag for the shared cache. New help message:\n\n```bash\n--cache-xz <BUCKET>\n    Enable caching of object content to the specified bucket on S3 Express One Zone (same region only)\n```\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo, it's behind a feature flag.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-20T10:05:27Z",
          "tree_id": "b7946c1f0149cfed9838ace088cbec96f2ee3b92",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84c3e5467d252830d5297d1d6b67f5915e32933b"
        },
        "date": 1732105190587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16013.72265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28872.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43886.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 231.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32917.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39233.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14044.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14150.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10999.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.25390625,
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
        "date": 1732106175512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15546.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26803.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39464.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34066.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39557.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13671.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13684.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14424.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.1171875,
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
        "date": 1732116047099,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15380.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24727.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41797.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37726.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35918.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13530.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15846.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11593.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.1328125,
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
        "date": 1732125081745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15634.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26760.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39875.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33803.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37746.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11430.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12283.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13450.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.4765625,
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
        "date": 1732129704758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13814.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26641.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39852.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35613.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35844.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11178.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12125.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11515.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.75390625,
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
        "date": 1732130615474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15461.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26230.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40141.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 162.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 332.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39624.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36029.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11831.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13706.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11987.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.71484375,
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
        "date": 1732194432851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15998.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29268.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39992.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 170.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39330.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37395.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11968.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14173.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8755.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.375,
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
        "date": 1732197003881,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16480.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27508.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41229.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 231.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38411.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38282.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12630.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10878.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9730.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.078125,
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
        "date": 1732209562928,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15633.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25030.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45395.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39601.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38229.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12085.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12377.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12330.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.109375,
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
        "date": 1732211859235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15162.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29242.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42228.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38061.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37508.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14360.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13123.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11638.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.859375,
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
        "date": 1732274734508,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17583.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25944.90234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38159.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39015.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38846.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12591.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12783.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12030.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.23046875,
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
        "date": 1732275355821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14752.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27067.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38837.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 332.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37012.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35896.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11621.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12807.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10279.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0078125,
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
        "date": 1732279197239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13825.23828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24263.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39727.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 161.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 180.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31849.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39967.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10957.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10903.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14182.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.35546875,
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
        "date": 1732288298453,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17539.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26006.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37867.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 189.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38944.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36185.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13385.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12702.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12393.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.75390625,
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
        "date": 1732292798322,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14225.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27731.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39859.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39297.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37706.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13736.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11836.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14411.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 357.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.1484375,
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
        "date": 1732546423490,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17189.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24551.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39283.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37373.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35277.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12123.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13349.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9270.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 358.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.734375,
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
        "date": 1732548657944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16476.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25912.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43097.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40390.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37095.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12120.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12906.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8991.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.421875,
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
        "date": 1732563238662,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17226.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25466.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36736.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38717.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38003.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12902.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13004.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10983.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.76171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}