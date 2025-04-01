window.BENCHMARK_DATA = {
  "lastUpdate": 1743524165754,
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
          "id": "6560d0848a2de4d6a7b2dd132d5f802ac02f1281",
          "message": "Update Rust toolchain to 1.85 (#1288)\n\nUpdate Rust toolchain to 1.85\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-26T14:46:46Z",
          "tree_id": "d2c6e697cb878cd635c9786298a1885308cd0416",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6560d0848a2de4d6a7b2dd132d5f802ac02f1281"
        },
        "date": 1740589267852,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17056.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25244.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39607.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 246.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32616.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38634.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11782.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12542.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10771.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.4140625,
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
        "date": 1740654434575,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13936.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24999.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40680.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 237.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37548.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32861.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13286.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13761.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12188.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 425.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.421875,
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
        "date": 1741088429534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16627.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26231.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40697.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 430.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35861.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37805.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13928.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11084.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12647.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.76171875,
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
        "date": 1741280863678,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16369.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24464.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43700.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 215.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 423.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33007.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10487.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12118.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11523.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.5546875,
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
        "date": 1741360182339,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15711.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25432.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39813.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38152.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34270.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12664.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13512.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14620.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.3828125,
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
        "date": 1741366551745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16173.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25897.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 46145.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 184.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39167.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40586.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14279.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11520.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11960.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.67578125,
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
        "date": 1741612242315,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15885.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23203.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36659.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 255.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34714.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35174.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12430.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13340.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10053.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.5546875,
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
          "id": "a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54",
          "message": "Bump `env_logger` to latest version (#1314)\n\n`humantime`, a dependency of `env_logger`, is unmaintained. Latest\nversion of `env_logger` switches maintained `jiff` crate to provide the\nsame functionality.\n\nSee https://rustsec.org/advisories/RUSTSEC-2025-0014\nSee CI failure\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13785440971/job/38552284966#step:4:359\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T15:05:11Z",
          "tree_id": "c178adc5e809b62b2bf7eb48e40ea83cd5c3c65e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54"
        },
        "date": 1741713666604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16095.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28134.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39556.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 203.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 400.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40696.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41091.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13820.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11330.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10102.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.7890625,
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
          "id": "d0ab7b9054d983652a8d4073eb598bf30b478f42",
          "message": "Pass `--foreground` in `mounthelper.go` to easily access Mountpoint logs (#1308)\n\nUpdate sample `mounthelper.go` for FUSE file descriptor mounting to see\nMountpoint logs in stdout to understand what's going on easily.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T19:12:02Z",
          "tree_id": "d0038230a4d52412dfb48e6823e9aa9f3f19678b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ab7b9054d983652a8d4073eb598bf30b478f42"
        },
        "date": 1741728411830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13969.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23975.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34717.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 186.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34923.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38545.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10708.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12008.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11206.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.75390625,
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
          "id": "0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29",
          "message": "Update Cargo dependencies (#1315)\n\nPull in the latest Cargo dependencies. Notably, includes fix for `ring`\nbuild failures: https://github.com/briansmith/ring/issues/2463.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-12T10:11:59Z",
          "tree_id": "24d10ed6534a042c3685b2bac68033c5ec38f7be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29"
        },
        "date": 1741782351263,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15964.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27027.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43360.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 410.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36279.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38642.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11621.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13231.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9688.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.28125,
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
          "distinct": true,
          "id": "0bc2ba532e5f762e72dd262cd80e69c74a180e60",
          "message": "Add optional bandwidth monitoring to benchmark.py (#1289)\n\nUses bwm-ng, which probably needs to be installed, therefore this is\nbehind a default-false configuration flag `with_bwm`. Outputs a csv file\nunder the experiment output with the bandwidth on each NIC every 0.5s.\n\n(cherry picked from commit bff50722e995cd9a24049b4d1ddc3b2b26d90e3e)\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-03-12T14:05:15Z",
          "tree_id": "16c5db0f5f7027e3b8b32f2dcc5b38e65c28dfdd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0bc2ba532e5f762e72dd262cd80e69c74a180e60"
        },
        "date": 1741796287561,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17360.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28318.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37639.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 214.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36162.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35733.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12796.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13451.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12663.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.77734375,
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
          "id": "5a74b446eb106a24445b8acdacc448f00e428efc",
          "message": "Reduce memory used to store inode names (#1305)\n\nEach inode currently stores two separate strings for the key and the\nname (always contained in the key string), resulting in redundant memory\nusage. This change introduces a new `ValidKey` type which avoids the\nduplication by only storing the key and the offset of the name for O(1)\nretrieval.\n`ValidKey` (and the related type `ValidName`) also enforce validation\nfor the name and the whole key at construction time, allowing calling\ncode to rely on the strings to be well-formed.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-13T10:31:00Z",
          "tree_id": "80131daaac7c2c98987392ee3bbb6b646e4c015f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a74b446eb106a24445b8acdacc448f00e428efc"
        },
        "date": 1741869890700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15587.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24879.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43053.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38067.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36222.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12662.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11653.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 7798.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.28125,
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
          "distinct": false,
          "id": "17cfb00ffb727624c45d934bedcdf430b22a6c1b",
          "message": "Extract the mountpoint code into mountpoint-s3-fs library crate (#1304)\n\n* Move the code from `mountpoint-s3/src` binary crate to the new\n`mountpoint-s3-fs` library crate\n* Move all the tests except based on binary path (`cli.rs` and part of\n`fork_tests.rs`) from `mountpoint-s3/tests` to `mountpoint-s3-fs/tests`\n* Move the examples from `mountpoint-s3/examples` to\n`mountpoint-s3-fs/examples`\n* Move the network performance script from `mountpoint-s3/scripts` to\n`mountpoint-s3-fs/scripts`\n* In app's main.rs and in `mock-mount-s3.rs` call the `main` function\nfrom the library crate\n* Add a third argument to the `main` function's interface for passing\ncontext parameters. Currently it's just an app's full version from the\nbuild info which is required for building user agent.\n* Add a third argument to the `mount` function's interface for passing\n`context_params`\n* Move `version` field from `CliArgs` struct to the newly introduced\n`AppCliArgs` which sits in the main app\n* Lock `futures` version as Cargo doesn't allow to publish crates with\nwild-carded dependencies' versions\n* Keep build info inside the `mountpoint-s3` crate to preserve version\ninfo\n* Keep tests based on binary inside the `mountpoint-s3` crate\n* Keep some of the common tests helpers inside the `mountpoint-s3` (code\nduplication)\n* Keep filesystem benchmarks inside the `mountpoint-s3` crate\n\nThis PR is marked as performance to test benchmark scripts.\n\n### Does this change impact existing behavior?\n\nThis change doesn't change the behavior, it changes the repository\nstructure and introduces the new crate.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAs a next step we need to add an entry in the `mountpoint-s3` change log\nmentioning the new `mountpoint-s3-fs` namespace in logs and metrics\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-13T17:11:34Z",
          "tree_id": "6858aae4b841823fa5790484253bf709ab9a46a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17cfb00ffb727624c45d934bedcdf430b22a6c1b"
        },
        "date": 1741893813124,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15203.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25125.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38394.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 379.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36059.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35800.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12876.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14135.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10228.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.91796875,
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
          "id": "02b21c746ee46b875e166f332eeab275004d9a24",
          "message": "Update CRT submodules to latest releases (#1318)\n\n* Update to latest CRT dependencies and prepare release for:\n\n  * `mountpoint-s3-crt-sys`\n  * `mountpoint-s3-crt`\n  * `mountpoint-s3-client`\n\n ```$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\nPackaging mountpoint-s3-crt-sys v0.12.1\n(/local/home/evdolgy/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version change?\n\n`Unreleased` sections were aded in crates' change logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license and I agree to the terms of the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-14T15:28:56Z",
          "tree_id": "bd77f30bc20b14277c67bdc48ea6989881399494",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02b21c746ee46b875e166f332eeab275004d9a24"
        },
        "date": 1741974250423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16678.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26805.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34180.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36510.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38578.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12361.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13185.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12769.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.8828125,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742503227431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17235.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21325.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43361.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34901.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37298.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12581.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12827.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11151.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.03125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "evdolgy@amazon.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7f6b98915b7fce7dacf6703c2a363073484f0",
          "message": "Update the changelog for mountpoint-s3 (#1319)\n\nAs a follow-up for this\n[PR](https://github.com/awslabs/mountpoint-s3/pull/1304#pullrequestreview-2682411235)\nwe add a new entry in the `mountpoint-s3` change log.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log was updated. No version change requred.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-28T13:21:37Z",
          "tree_id": "52fc13f9da26c7fa8752cb1d6fb0cfd72cf087b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7f6b98915b7fce7dacf6703c2a363073484f0"
        },
        "date": 1743176231068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15241.79296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28163.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39779.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39760.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35736.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11534.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12056.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13540.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.05859375,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743444048091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17044.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30041.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37335.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1380.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 439.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 286.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 962.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36827.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40043.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15109.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12154.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10820.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.66796875,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743511232779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15772.1015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25356.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39795.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 413.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1435.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 432.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 966.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38658.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37974.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12136.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14153.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10792.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.734375,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518258899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15135.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26124.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39900.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1327.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 432.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 939.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41975.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41020.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10729.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12881.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11622.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.40625,
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
          "id": "a776670203be61492db27865158ab5a0fd38a323",
          "message": "Refactor internal S3 client methods to initiate meta-requests (#1337)\n\nRe-organize the group of internal methods in the S3 client used to\ninitiate CRT meta-requests. Follow-up to the changes in #1334.\n\nWith this change, `S3CrtClientInner` provides 4 methods:\n* `meta_request_with_callbacks`: the lowest-level method, which allows\nmore customization through callbacks. It is the basis for the other\nmethods and it is used directly by `get_object` and `put_object`.\n* `meta_request_with_body_payload`: simpler variant that returns the\nresponse body. Used by `list_object` and `get_object_attributes`.\n* `meta_request_with_headers_payload`: variant returning the headers,\nbut no body. Used by `head_object` and `put_object_single`.\n* `meta_request_without_payload`: simplest variant, only returns error.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Internal change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T14:01:57Z",
          "tree_id": "f180fa28ec38620e474990e96c4f5c2d9f485fa0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a776670203be61492db27865158ab5a0fd38a323"
        },
        "date": 1743524165705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12156.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26041.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41418.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1280.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 435.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 975.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 295.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37119.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37161.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15048.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13193.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13228.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}