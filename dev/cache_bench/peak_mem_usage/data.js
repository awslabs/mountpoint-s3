window.BENCHMARK_DATA = {
  "lastUpdate": 1747133276835,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "0c9c094c50e1b655dbcec43f0678cb0557d8f624",
          "message": "Update benchmark chart max datapoints from 20 to 30 (#1372)\n\nBefore this change, benchmark graphs\n(https://awslabs.github.io/mountpoint-s3/dev/bench/) show up to 20 data\npoints where each data point represents a previous commit. One instance\nwe review this is in a weekly meeting, and we feel that more data points\nwould provide more contextual information of what changed as we could\nhave in excess of 20 commits over a period of one or two weeks.\n\nThis change updates the graphs to maintain 30 data points at the expense\nof clarity.\n\n### Does this change impact existing behavior?\n\nNo changes to Mountpoint or its crates. This will allow future benchmark\nruns to maintain 30 data points in graphs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-17T07:47:39Z",
          "tree_id": "bf7d1bfa466a3ec0f341fb43840bb505df56a4b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c9c094c50e1b655dbcec43f0678cb0557d8f624"
        },
        "date": 1744883392487,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3194.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 341.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3301.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3403.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3134.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16902.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3156.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3121.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 241.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3391.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 16466.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 204.54296875,
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
          "id": "a88bdf3157419313e550da7f9ba4fdbc307b252a",
          "message": "Compile instance types into rust function  (#1369)\n\nFollow up to #1368.\n\nChanges the script to automatically generate a single rust match\nexpression (wrapped in a function) to get the instance throughput,\ninstead of parsing a `json` file. Additionally, now queries all regions.\n\nThis allows for better maintainability in the future, as we can see any\nchanges to the throughput numbers by looking at the diff in the\ngenerated function.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-17T09:26:27Z",
          "tree_id": "e81ec621eef76ef9a118dd3262587773d78d47c4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a88bdf3157419313e550da7f9ba4fdbc307b252a"
        },
        "date": 1744889051234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3351.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3377.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3361.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3236.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36802.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3232.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3281.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3300.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3414.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.74609375,
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
        "date": 1744894947037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3437.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3197.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3374.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 277.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3220.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21297.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3465.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3434.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3376.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3385.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.7421875,
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
        "date": 1744904038783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3381.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3428.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3116.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21199.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3298.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 358.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3453.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12225.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3426.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.421875,
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
        "date": 1744905154857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3347.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3311.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3199.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3341.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28384.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3304.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3225.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3334.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3141.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.7890625,
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
        "date": 1745324909058,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3255.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3389.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3290.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3394.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27298.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 356.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3486.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3373.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15943.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13300.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.0546875,
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
        "date": 1745499229220,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3239.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3244.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3332.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3349.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30918.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3137.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3078.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3363.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3558.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.5625,
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
        "date": 1745518179783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3247.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3310.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3257.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3448.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28832.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3107.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3165.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3113.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3339.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.2734375,
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
        "date": 1745582373656,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3330.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3257.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3191.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3431.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 245.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17343.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3259.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3348.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14108.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 234.02734375,
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
        "date": 1745590045107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3196.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3343.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3400.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3222.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27488.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3357.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3320.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3428.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.14453125,
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
        "date": 1745594808385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3078.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3293.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3275.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19159.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3319.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3440.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3244.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3427.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.33203125,
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
        "date": 1745602200400,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3206.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 341.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3129.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3302.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3176.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23234.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3269.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3213.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 242.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3450.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3405.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.9921875,
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
        "date": 1745838736794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3417.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3427.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3388.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22474.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3350.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3423.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3405,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3317.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.4296875,
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
        "date": 1745843273778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3495.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3115.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3109.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3399.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38448.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3226.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3311.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3418.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3112.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.125,
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
        "date": 1745928300470,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3479.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3481.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3466.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3297.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33674.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3533.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3556.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 206.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3405.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3112.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.0546875,
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
        "date": 1745947246606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3282.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3275.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3348.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3147.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34878.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3219.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3364.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3437.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5358.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.12890625,
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
        "date": 1745951014116,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3261.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3198.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3354.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3509.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21298.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3343.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3296.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 241.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3445.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13411.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.89453125,
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
        "date": 1746014988455,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3192.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3230.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3374.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24508.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3304.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3426.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3042.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3304.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.25390625,
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
        "date": 1746191687981,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3513.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3296.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3270.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3503.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30942.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3495.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3421.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3329.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11733.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.359375,
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
        "date": 1746209266510,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3094.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3386.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3389.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27964.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3463.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3396.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3305.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 24770.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.890625,
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
        "date": 1746209409387,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3070.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3216.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3231.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3308.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27924.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3277.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3450.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2968.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3472.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.0078125,
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
        "date": 1746545286157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3158.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3251.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3528.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3093.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16202.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3174.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3342.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3297.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3289.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.9609375,
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
        "date": 1746551218754,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3274.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3279.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3284.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3298.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31224.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3302.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3281.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3398.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3242.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.6484375,
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
        "date": 1746618883268,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3474.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3362.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3269.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3271.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31139.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3255.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3275.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3251.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2879.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.14453125,
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
        "date": 1746634390505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3376.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3248.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3258.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3146.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35634.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3368.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3234.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3199.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.28515625,
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
        "date": 1746792341827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3517.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 344.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3316.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3424.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3163.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16260.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3387.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3269.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3216.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3474.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.46875,
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
        "date": 1746802677423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3278.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3264.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22616.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3332.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3218.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10295.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10090.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.328125,
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
        "date": 1746806592758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3076.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3175.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27330.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3283.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3253.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7631.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.09375,
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
        "date": 1747051308620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3187.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3379.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3382.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3364.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28898.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3362.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3372.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13254.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.1875,
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
        "date": 1747133276783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3035.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3243.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3362.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16728.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3427.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3617.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3318.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.1171875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}