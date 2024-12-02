window.BENCHMARK_DATA = {
  "lastUpdate": 1733139171347,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
        "date": 1732626854695,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15581.75,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25989.265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40958.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31339.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39324.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12355.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12632.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11416.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 366.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.51171875,
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
        "date": 1732627774478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14947.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24919.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38050.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 143.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35425.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 413.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37742.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13982.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11254.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8578.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.78125,
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
        "date": 1732638761063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15421.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25850.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36419.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 422.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 317.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38864.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39458.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12139.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14267.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9353.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.89453125,
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
        "date": 1732639853537,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14060.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25931.6796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42192.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 187.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35386.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40485.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10850.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11152.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12075.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 391.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.25,
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
        "date": 1732725482149,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13716.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26648.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40048.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36070.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41447.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12923.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12878.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9967.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.53515625,
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
          "distinct": true,
          "id": "b04177565a641e7c5f6be18cbefe6fcdc583732e",
          "message": "Fix Clippy warnings on Rust 1.83 (#1175)\n\nRust 1.83 has been released with new Clippy lints, and it [broke our\nCI](https://github.com/awslabs/mountpoint-s3/actions/runs/12072806349/job/33667591504?pr=1103)\nas we use stable toolchain.\n\nThis PR fixes Clippy warnings on Rust 1.83. Most fixes are done with\n`cargo clippy --fix` and manually checked.\n\n### Does this change impact existing behavior?\n\nNone expected, it just changes the code style.\n\n### Does this change need a changelog entry?\n\nNo, as there is no behavioral change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-28T21:25:18Z",
          "tree_id": "f55ad261e9c05377bf58e76e528730db2b4866bf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04177565a641e7c5f6be18cbefe6fcdc583732e"
        },
        "date": 1732837213240,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28756.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43797.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 161.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39287.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39484.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12870.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13401.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8931.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.60546875,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732900608549,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13461.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28132.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37152.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 162.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 206.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 320.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39810.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 414.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35215.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12460.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12828.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11222.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.765625,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733139171308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15922.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25335.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42313.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 320.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36515.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36066.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12411.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12879.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10337.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.90625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}