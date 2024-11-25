window.BENCHMARK_DATA = {
  "lastUpdate": 1732545597868,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "1e30bff37aa35be2e54e06a0bc92f7a684414bc8",
          "message": "Update user-agent on express cache usage (#1122)\n\n## Description of change\n\nAdd `mp-cache-express` to the user agent when caching in express is\nenabled.\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nNo.\n\n## Does this change need a changelog entry in any of the crates?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-11-18T12:27:52Z",
          "tree_id": "aac263066f2f280609c1413e05ad01a64b2ec469",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e30bff37aa35be2e54e06a0bc92f7a684414bc8"
        },
        "date": 1731940013868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3325.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3228.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3124.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3063.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36312.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3093.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3299.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3094.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.78125,
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
          "id": "378a56c2efbdbc423d745bbcf7cf3018d770dc7c",
          "message": "Validate that shared cache bucket is usable (#1141)\n\n## Description of change\n\n- Validates the shared cache bucket is write-able\n- Validates the shared cache bucket supports the `EXPRESS_ONEZONE`\nstorage class\n\nRelevant issues: N/A\n\n## Does this change impact existing behavior?\n\nYes, the shared cache bucket is now validated that it supports the\n`EXPRESS_ONEZONE` storage class\n\n## Does this change need a changelog entry in any of the crates?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-11-18T16:04:15Z",
          "tree_id": "f3f7e68465c924b7f18f84e29f68d921bd948dd1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/378a56c2efbdbc423d745bbcf7cf3018d770dc7c"
        },
        "date": 1731953066739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3168.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3322.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3393.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3254.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22980.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3214.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3194.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 234.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3467.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3204.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.48828125,
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
          "id": "02f8dda257177db60771033445afbc31bd6768af",
          "message": "Retrieve server-side encryption setting on HeadObject (#1143)\n\n## Description of change\n\nAdd two new fields to `HeadObjectResult`: \n* `sse_type`: The server-side encryption algorithm used to store the\nobject (header: \"x-amz-server-side-encryption\"),\n* `sse_kms_key_id`: The ID of the KMS key was used for object\nencryption, if present (header:\n\"x-amz-server-side-encryption-aws-kms-key-id\").\n\n## Does this change impact existing behavior?\n\nNo. Only adds fields to a non-exhaustive type.\n\n## Does this change need a changelog entry in any of the crates?\n\nYes: `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-19T11:16:56Z",
          "tree_id": "1288023535a01babbf21054209f701e3eebaf39c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02f8dda257177db60771033445afbc31bd6768af"
        },
        "date": 1732022359882,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3312.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3269.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3361.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3243.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20930.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3305.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3335.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 209.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3356.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3267.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 220.5234375,
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
        "date": 1732042457186,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3287.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3299.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3372.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22057,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 357.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3305.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3353.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3337.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3203.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.01953125,
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
        "date": 1732104398729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3478.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3275.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3371.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18507.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3163.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3237.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3386.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3558.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.15234375,
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
        "date": 1732105312799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3388.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3373.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3266.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3130.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 240.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27932.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3319.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 359.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3327.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3331.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9006.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.05859375,
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
        "date": 1732115248059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3202.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3367.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3366.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3242.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23441.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3157.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3343.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3248.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3109.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.296875,
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
      }
    ]
  }
}