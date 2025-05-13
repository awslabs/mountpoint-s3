window.BENCHMARK_DATA = {
  "lastUpdate": 1747146404072,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744895869604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12693.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20974.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31532.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32712.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32859.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9439.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9486.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11176.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 755.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.1796875,
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904945401,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12075.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21278.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32659.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32828.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36580.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11261.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11969.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11675.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 497.7890625,
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
          "id": "1dcafbb49b0f9060b558f451ffab1d41eeec7861",
          "message": "Allow changing log level dynamically with `USR2` signal  (#1367)\n\nThis PR makes Mountpoint capable of changing log verbosity dynamically\nwith `USR2` Unix signal. The users can send a `USR2` signal to\nMountpoint process, e.g., `kill -USR2 <mount-s3-pid>`, to toggle between\nthe following log verbosity levels:\n  1. Default logging verbosity\n  2. Debug logging for all except CRT (i.e., `debug,awscrt=off`)\n  3. Debug logging for all (i.e., `debug,awscrt=debug`)\n  4. Trace logging for all except CRT (i.e., `trace,awscrt=off`)\n  5. Trace logging for all (i.e., `trace,awscrt=trace`)\n\n### Does this change impact existing behavior?\n\nNo breaking change, a new runtime behavior with `USR2` Unix signal.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, will update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-17T13:52:06Z",
          "tree_id": "6d5f6cdff76b161f33ccb8173ed1b7bae72f4f31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1dcafbb49b0f9060b558f451ffab1d41eeec7861"
        },
        "date": 1744906061518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13567.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23073.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33624.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31718.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36200.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9208.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11967.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10077.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 815.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 514.6484375,
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
          "id": "2e293cf8334db3db4bfa3aae53e63d820a91c127",
          "message": "Move FuseSessionConfig out of cli (#1375)\n\nRefactor `FuseSessionConfig` out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T16:09:25Z",
          "tree_id": "6f2a9ebc10aa77c1413d618eb3dfff22120c6f11",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e293cf8334db3db4bfa3aae53e63d820a91c127"
        },
        "date": 1744914269331,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12659.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19246.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35258.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38690.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31756.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8968.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11042.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10410.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 565.5234375,
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745325834858,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15384.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24377.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35171.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32692.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37400.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12728.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8699.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12370.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.03515625,
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
          "id": "f2f2a597b2737a84a54f20893076aebb7c2511a0",
          "message": "Add `fstab` CLI parser (#1362)\n\nIntroduce support for invoking Mountpoint with fstab style arguments:\n```\n./mount-s3 example-bucket /mnt/mountpoint -o rw,auto-unmount,allow-root\n```\n\n### Does this change impact existing behavior?\n\nNo breaking changes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, but not yet. This is still WIP\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-04-24T10:53:24Z",
          "tree_id": "49e84d64c478f8a338ef7d2e63f5fb1595e070ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f2f2a597b2737a84a54f20893076aebb7c2511a0"
        },
        "date": 1745500150305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14390.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23916.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36469.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33794.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 379.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36309.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10773.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12833.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13051.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 794.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.09765625,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745519087225,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12120.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17655.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33667.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32455.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32518.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 7855.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9744.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11105.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 2324.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 644.14453125,
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745583262059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12971.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19595.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33046.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34136.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36696.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10558.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13123.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12030.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.53515625,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590999281,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13304.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22252.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32239.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33204.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35700.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10498.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10274.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11740.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 879.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 517.28515625,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745595700679,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10821.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22362.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36433.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31459.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36342.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 409.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10601.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12033.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10959.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 935.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 550.48828125,
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
          "id": "2063e98a96f4b70fb7753af59c2d634b9fbc5aba",
          "message": "Extract ClientConfig from CliArgs (#1380)\n\nThe new `ClientConfig` type captures all the configuration settings used\nto initialize the S3 client. A `ClientConfig` instance can be built from\nthe relevant arguments in `CliArgs`, integrated with the settings\ndetected from `InstanceInfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T15:30:14Z",
          "tree_id": "4843b7a5a432fcabaa7d23f7a278160d718b8f7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2063e98a96f4b70fb7753af59c2d634b9fbc5aba"
        },
        "date": 1745603193878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13401.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19275.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32334.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 351.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33911.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33462.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10224.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10467.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9319.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 960.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 601.9296875,
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
          "id": "28278732ffe316bba78560829259cd1590d9c172",
          "message": "Use manifest in readdir and lookup operations (#1383)\n\nUse metadata stored in an sqlite database instead of s3, when performing\nlookup and readdir.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-28T09:07:25Z",
          "tree_id": "6a8e4cbdd5b12523180c4fa1104f10fd5db0acab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/28278732ffe316bba78560829259cd1590d9c172"
        },
        "date": 1745839622605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12212.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20375.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35075.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38414.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35745.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10587.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10684.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13341.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 630.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.2421875,
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
          "id": "fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b",
          "message": "Extract file system configuration from CliArgs (#1387)\n\nMinor change to extract a `S3FilesystemConfig` from `CliArgs`. Part of\nthe effort to move `CliArgs` out of the `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-28T10:28:42Z",
          "tree_id": "852ed279033cf08b021ab42ac8b398ae15fda01f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fe2ed2f3a3b01b5551018a216a237d3d42ea4a2b"
        },
        "date": 1745844141743,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14216.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20933.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34899.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 366.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33663.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40339.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12935.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12238.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10883.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.859375,
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
          "id": "b170c5355e085f9b324b4fd882a1c253fdb20fb5",
          "message": "Disable ANSI colors where not supported for fs and client examples (#1385)\n\nSimple change - currently, redirecting the logs to a file will keep ANSI\ncolors. With this change, the scripts will automatically turn off ANSI\ncolors when the standard error output is redirected.\n\nThis change is not urgent as users can turn off ANSI colors using\n`NO_COLOR=1`.\n\n### Does this change impact existing behavior?\n\nFor relevant examples/benchmarks only, ANSI color will be disabled when\nnot supported (i.e. not console output).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-29T10:02:07Z",
          "tree_id": "3d71b5cdead38a987fc6ef47b3582598d33c79cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b170c5355e085f9b324b4fd882a1c253fdb20fb5"
        },
        "date": 1745929116915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13797.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19874.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33821.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34569.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33520.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8607.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11758.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11406.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 779.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 498.59765625,
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
          "id": "2d811308c3e1ed7f62f45fa6fa8538076b074bc3",
          "message": "Remove Prefetch trait (#1388)\n\nSimplify the type signature of `S3Filesystem` and related types by\nremoving the `Prefetch` trait and replacing it with a single\n`Prefetcher` implementation, which has an `ObjectClient` generic\nparameter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T15:20:30Z",
          "tree_id": "8cd468e41a7e85c77349c86f2c06fa1722161e8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2d811308c3e1ed7f62f45fa6fa8538076b074bc3"
        },
        "date": 1745948186817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12253.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24863.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35247.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 370.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33404.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36465.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11115.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11060.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13389.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 516.48046875,
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
          "id": "be17e42d1e9c1e859ac9e203beef5e870dc339bf",
          "message": "Adopt finish_non_exhaustive in manual Debug implementations (#1393)\n\nMinor change to improve manual `Debug` implementations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-29T16:23:20Z",
          "tree_id": "e2ed10a362552378fa47d5f30e45a1327e896da3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be17e42d1e9c1e859ac9e203beef5e870dc339bf"
        },
        "date": 1745951998519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11967.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19014.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32014.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 350.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34618.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35007.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9729.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11679.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10885.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 859.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 561.48828125,
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
          "id": "dac707f5639842a6d1dfd7aaf27b43e703e15c7d",
          "message": "Add `disk_data_cache.disk_usage_mib` metric (#1392)\n\nAdd a metric to record the amount of space used by cache as estimated by\nMP internally. Relevant for\nhttps://github.com/awslabs/mountpoint-s3/issues/1389.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-30T10:08:46Z",
          "tree_id": "36914fe0b2e80ff06496de9a8159a89bc410732c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dac707f5639842a6d1dfd7aaf27b43e703e15c7d"
        },
        "date": 1746016009424,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13737.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22852.625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34735.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35432.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36770.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10870.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 252.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11900.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11931.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 757.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.0625,
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
          "id": "cc3e8aab685367cd8ab8284812970b9a3f51993e",
          "message": "Update benchmark script to always copy env vars (#1394)\n\nThis commit changes the way environment variables are populated when\nrunning the benchmark script. There's no reason for us not to copy\nenvironment variables from the script into the launched subprocesses,\nand adding the functionality allows us to manipulate settings like the\nlogging level without making changes to `benchmark/benchmark.py`.\n\n### Does this change impact existing behavior?\n\nThis change updates the way when using benchmark scripts, FIO and\nMountpoint are launched in `benchmark/` to copy over the existing\nenvironment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-02T09:24:35Z",
          "tree_id": "c541c24d1e2f7b46f5083d2fd6ba19cd14639c77",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cc3e8aab685367cd8ab8284812970b9a3f51993e"
        },
        "date": 1746186302886,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14087.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21081.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36822.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 313.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37664.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34816.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12599.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11470.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10459.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 597.47265625,
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
          "id": "6c89ebe8a879c49b37dc79f9599074ed72f746ca",
          "message": "Combine configuration for supported data cache types (#1395)\n\nIntroduce a new `DataCacheConfig` type to combine configuration for the\ndata cache in Mountpoint. The new type can be configured to enable a\nlocal disk cache, a shared cache in S3 Express One Zone, or both.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T11:15:07Z",
          "tree_id": "c77e81452b0111f2f73bfcb82658c80b2f789988",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c89ebe8a879c49b37dc79f9599074ed72f746ca"
        },
        "date": 1746192636713,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11916.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20469.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32871.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 296.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32322.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33619.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11517.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10236.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12202.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 937.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 598.22265625,
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
          "id": "764f431d5e588e86dee0facd335f19db9f5d48b5",
          "message": "Introduce MountpointConfig (#1400)\n\nExtract the configuration and the logic to create a new Mountpoint FUSE\nsession out of the `cli` module.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-02T16:08:21Z",
          "tree_id": "bb65735360884a42506a09c6bdaeab2edc6041b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/764f431d5e588e86dee0facd335f19db9f5d48b5"
        },
        "date": 1746246641044,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13292.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20565.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37951.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 293.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32823.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32639.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10304.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9580.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10989.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1066.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 629.41015625,
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
          "id": "18f66c493c83c922cc8a9572d2f424ac889f306e",
          "message": "Enable credentials caching with `--profile` flag (#1398)\n\nAdd a caching layer to the profile credentials provider, enabled by\n`--profile` flag.\n\nThis change should provide a fix/mitigation for\nhttps://github.com/awslabs/mountpoint-s3/issues/1358.\n\n### Does this change impact existing behavior?\n\nYes, credentials will be cached for up to 15 minutes, when `--profile`\nflag is used.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added. Version `1.17.0` is the correct one for this change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-06T13:29:08Z",
          "tree_id": "757ec8c8c9059b55cf54d0aff1140a6cd3fa2016",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18f66c493c83c922cc8a9572d2f424ac889f306e"
        },
        "date": 1746546177797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10171.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16968.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33056.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33383.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33936.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10109.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9700.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11215.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 970.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 677.609375,
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
          "id": "ab791c6d67445b5824629110ce1957001f210179",
          "message": "Move CliArgs and main code to the mountpoint-s3 crate (#1401)\n\nComplete the decoupling of the configuration code from the specific\nCliArgs and initialization logic in the `mount-s3` binary. The latter\nare now in the `mountpoint-s3` crate, while configuring Mountpoint is\nnow part of the `mountpoint-s3-fs` API.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-06T15:05:01Z",
          "tree_id": "ba56fc65648b2f41500a886d094229fd55ff45c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab791c6d67445b5824629110ce1957001f210179"
        },
        "date": 1746552104148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12622.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18407.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31227.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 294.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32543.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32038.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8961.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8371.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11546.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 886.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 596.828125,
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746619787114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10019.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22597.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32740.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33293.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36500.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10591.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12207.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11926.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 841.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 563.08984375,
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746635261236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10790.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17539.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33966.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30800.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32379.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9993.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10732.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1119.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 674.02734375,
            "unit": "MiB"
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
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746793275657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14283.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21504.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33748.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37956.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38699.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12705.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11099.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10407.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 643.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.796875,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746803611255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13015.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21098.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36612.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32736.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33640.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10302.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11229.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11878.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 517.32421875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746807531029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12039.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19734.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30112.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 348.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33588.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33024.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9946.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12276.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11300.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 877.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.80078125,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747052175376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13489.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22549.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35375.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36834.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32617.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10750.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10270.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13705.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 615.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.61328125,
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
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747134187421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12953.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22210.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36205.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33814.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32772.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8657.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10785.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12924.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 800.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.78515625,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747146404021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13386.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22037.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36422.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 82.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32533.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32153.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9518.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10940.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13031.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 776.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.77734375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}