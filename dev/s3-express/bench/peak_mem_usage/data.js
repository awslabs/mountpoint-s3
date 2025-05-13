window.BENCHMARK_DATA = {
  "lastUpdate": 1747134025488,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "a88bdf3157419313e550da7f9ba4fdbc307b252a",
          "message": "Compile instance types into rust function  (#1369)\n\nFollow up to #1368.\n\nChanges the script to automatically generate a single rust match\nexpression (wrapped in a function) to get the instance throughput,\ninstead of parsing a `json` file. Additionally, now queries all regions.\n\nThis allows for better maintainability in the future, as we can see any\nchanges to the throughput numbers by looking at the diff in the\ngenerated function.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-17T09:26:27Z",
          "tree_id": "e81ec621eef76ef9a118dd3262587773d78d47c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a88bdf3157419313e550da7f9ba4fdbc307b252a"
        },
        "date": 1744889888127,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17628.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27889.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39770.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37027.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38359.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14679.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12378.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11841.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.3046875,
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744895738164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14305.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26024.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42049.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37575.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37755.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14057.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13514.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11736.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 270.56640625,
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
        "date": 1744904915978,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14767.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29222.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35354.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 214.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37876.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38906.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12734.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12074.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13305.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.9140625,
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
        "date": 1744905963903,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12916.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29802.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37426.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 415.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35318.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40278.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13657.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14335.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11428.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.1171875,
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
        "date": 1744914212371,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17340.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23448.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45609.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42025.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33613.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11033.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12919.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13052.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 470.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.19140625,
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
        "date": 1745325731305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17292.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25398.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39010.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 158.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 213.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39554.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33152.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10983.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12790.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12822.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.3984375,
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
        "date": 1745500000774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15393.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26670.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39072.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 176.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37068.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41846.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14914.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13566.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10658.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.3671875,
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
        "date": 1745518942608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16557.625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28048.0390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43241.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 398.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 211.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 83.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40189.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38775.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13550.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14334.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8765.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.78515625,
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
        "date": 1745583199232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14068.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23728.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37252.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37045.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39399.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12949.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14039.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11325.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.5390625,
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
        "date": 1745590868354,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15039.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26035.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45411.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 399.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36328.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36961.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13033.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12777.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10262.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.7890625,
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
        "date": 1745595548400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14950.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28392.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39233.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 412.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39100.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40409.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11049.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13532.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12936.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.25,
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
        "date": 1745603089474,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16587.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26609.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41682.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34758.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36877.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11929.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13547.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10759.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 373.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.6484375,
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
        "date": 1745839505817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14416.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22762.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37656.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 401.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41112.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40400.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12069.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15391.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11582.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 352.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.0625,
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
        "date": 1745844093873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14033.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28509.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41837.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 331.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 334.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36127.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37737.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12263.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15463.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10487.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.91015625,
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
        "date": 1745929006968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17133.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27473.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39312.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34633.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37614.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11111.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12716.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12690.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 389.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.9765625,
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
        "date": 1745948054610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14859.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27683.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43266.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 246.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37766.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34364.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11306.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13772.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10503.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.83984375,
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
        "date": 1745951854890,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17756.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28817.984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43885.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 162.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 195.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39047.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 47809.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12377.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12398.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10516.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.2265625,
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
        "date": 1746015759937,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16545.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25687.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40294.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 225.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37703.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36213.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12551.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11789.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8906.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.82421875,
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
        "date": 1746192571022,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16334.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26105.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41812.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 411.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41319.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36159.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12559.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15365.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11577.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.02734375,
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
        "date": 1746210215397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16961.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25593.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40767.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 429.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 333.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40570.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38226.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10776.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13368.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13640.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.046875,
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
        "date": 1746246520821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15429.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 31232.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37297.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 387.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35738.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36553.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12625.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15128.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11109.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.3359375,
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
        "date": 1746546101088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15908.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28217.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40388.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38238.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 44675.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13033.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13322.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11944.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.21875,
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
        "date": 1746551938494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16893.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27112.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43745.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 414.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 217.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39449.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39912.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12844.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12620.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11796.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.5,
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
        "date": 1746619638256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15853.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27971.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41496.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 266.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 405.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35936.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35815.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12540.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12746.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12634.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.7265625,
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
        "date": 1746635098691,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14960.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26940.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41767.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 185.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 318.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39788.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36512.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12192.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10748.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12224.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.953125,
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
        "date": 1746793129901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17136.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30195.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36689.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40050.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36714.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13632.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14841.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11566.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.6640625,
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
        "date": 1746803515817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14844.765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25767.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41764.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 156.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 240.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36100.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41457.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12232.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13268.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12645.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.53125,
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
        "date": 1746807326763,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15510.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26042.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42142.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 166.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37959.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40706.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12173.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13213.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11351.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 370.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.02734375,
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
        "date": 1747052101106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15488.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27541.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41111.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 228.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36259.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41983.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13501.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13112.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12484.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.6640625,
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
        "date": 1747134025437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13407.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25565.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41121.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 336.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35728.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36598.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12136.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12413.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10998.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 366.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.8515625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}