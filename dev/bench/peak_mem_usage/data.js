window.BENCHMARK_DATA = {
  "lastUpdate": 1760617937957,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1",
          "message": "Adding Unicode 3 to Accepted Licenses (#1617)\n\n**What changed and why?**\nAdded \"Unicode-3.0\" to the licensing whitelist.\nIt is already included in the /mountpoint-s3/deny.toml\nhttps://github.com/awslabs/mountpoint-s3/blob/main/deny.toml allowlist,\nbut it wasn't added here aswell. This fixes that.\n\nThe license's absense from the attribution.toml also means the command\nto generate our third party dependancies fails.\n\n```rust\ncargo about generate --config package/attribution.toml --output-file THIRD_PARTY_LICENSES package/attribution.hbs\nerror: failed to satisfy license requirements\n   ┌─ /home/user/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/unicode-ident-1.0.18/Cargo.toml:36:36\n   │\n36 │ license = \"(MIT OR Apache-2.0) AND Unicode-3.0\"\n   │                                    -----------\n\n2025-09-25 12:20:14.780429812 +00:00:00 [ERROR] encountered 1 errors resolving licenses, unable to generate output\n\n```\nSo this fix addresses a need for us to be able to generate these\nlicenses at will, outside of the release process.\n\n### Does this change impact existing behaviour?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, very minor bug fix\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-09-25T15:55:59Z",
          "tree_id": "f2e242baa82d8b202b17d8006036db286f297396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5070439e267d2fbeb54fe82ef5b6ad592d4e1bf1"
        },
        "date": 1758823901832,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3650.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4959.97265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8559.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8149.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8310.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.92578125,
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
          "id": "7854f020d9f31efaf0e392367cf844f059c30b47",
          "message": "Use multi-threaded FuseSession in tests (#1462)\n\nTests for the `mountpoint-s3-fs` crates now use the multi-threaded\n`FuseSession` used in `mount-s3` rather than the single-threaded\n`BackgroundSession` from `fuser`.\n\n### Does this change impact existing behavior?\n\nNo, it only affects tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2025-09-25T17:22:01Z",
          "tree_id": "7950e7c591b0f94d9ad587ff4aba8eb7581f993c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7854f020d9f31efaf0e392367cf844f059c30b47"
        },
        "date": 1758829032070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3752.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4938.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8511.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8241.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8207.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 860.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 545.140625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a67f2631964cca1892d4aa2bcc42afef6fa56c37",
          "message": "Switch to real-time recording for OTLP metrics.  (#1615)\n\nSwitch OTLP metrics from batch recording to real-time recording directly\nto OTel SDK instruments. This eliminates the need for batch aggregation\nof histogram samples. This change also adds support for histogram export\nvia OTLP. Log-based metrics remain unchanged.\n\nWith this change, we are also removing the use of counter.absolute()\nmethod as OTel SDK doesn't provide an equivalent method to set absolute\nvalues for counters. We should use gauge or histogram to record absolute\nvalues.\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-26T13:12:37Z",
          "tree_id": "6940a6ae0c872a312ec23baf17cf6fe42ac7f918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a67f2631964cca1892d4aa2bcc42afef6fa56c37"
        },
        "date": 1758900562290,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3659.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4908.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8542.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8203.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8221,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 751.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.43359375,
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
          "id": "b6a64b6129b573ab2ff3758cb948c5a2d15c1e82",
          "message": "Implement integrity checks for the metadata store (#1563)\n\nIntroduce checksum verification of:\n\n1. entries provided in the input CSV manifest (and for the whole file)\n2. entries stored in the metadata store\n\nSlightly refactored `ManifestEntry` in order to avoid huge `match`\nblocks. This PR also adds an example of the manifest creation.\n\n### Does this change impact existing behavior?\n\nNo, only `mount_from_config` example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, an entry for `mountpoint-s3-fs` crate, and a minor version bump of\nthis crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:12:13Z",
          "tree_id": "3c062f3c4a62ce4452388ef7dcad17531e0b0ac5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6a64b6129b573ab2ff3758cb948c5a2d15c1e82"
        },
        "date": 1759148805870,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3557.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4886.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8574.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8276.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8237.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 774.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.15625,
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
          "id": "38714cff667ae612376003567f6e006e6a650086",
          "message": "Add an option to configure cache in `mount_from_config` example (#1616)\n\nAdd an option to configure cache in `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-09-29T10:13:58Z",
          "tree_id": "b5e04047b825ac9d30290d01a146dba9a4b688ff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/38714cff667ae612376003567f6e006e6a650086"
        },
        "date": 1759149022335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3521.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4881.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8375.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8290.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 788.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.1171875,
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
          "id": "c08eb3fe54de0bef794946eae6851579f3812925",
          "message": "Release mountpoint-s3-fs 0.8.0 (#1623)\n\nBump the version of `mountpoint-s3-fs` crate.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-09-30T13:30:12Z",
          "tree_id": "d2a77237bfca5bea93a5620e498ba0f36f07990f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c08eb3fe54de0bef794946eae6851579f3812925"
        },
        "date": 1759247166848,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3564.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4904.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8586.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8268.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 491.15234375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "6ebfad0752a0aa3acc4582a963661dee94208c74",
          "message": "Use OTel's exponential histograms for histogram metrics. (#1624)\n\nWith explicit hitograms, OTel uses fixed bucket bounds, which don't work\nwell for all Mountpoint metrics as they don't fall within the default\nrange. So we need to manually configure the bucket bounds for different\nmetrics with different boundaries. However, with exponential histograms,\nthe bucket boundss are automatically scaled and provide more accurate\nmetrics. However, this relies on OTel SDK's unstable feature.\n\nIn case this isn't supported in the future, we need to switch to\nexplicit Buckets with different bounds for different metrics.\n\n### Does this change impact existing behavior?\n\nNo, changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n\nNo, changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-09-30T18:17:39Z",
          "tree_id": "3ac3848aedf3c41ee75862d6373b5a10df33f68c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6ebfad0752a0aa3acc4582a963661dee94208c74"
        },
        "date": 1759264346479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3489.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4870.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8599.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8187.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8238.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 786.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 508.44921875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "18bfb9da77cd131ea38a27b8336d918c9e1376a0",
          "message": "Use delta temporality as default for exporting OTLP metrics (#1625)\n\nBy default, we will use Delta temporality instead of Cumulative\ntemporality to minimise the network payload size while exporting\nmetrics. However, cutomers can switch to Cumulative temporality if their\nbackends don't support Delta temporality\n\n### Does this change impact existing behavior?\n\nNo, the changes are under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the changes are under a feature flag\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-02T14:19:01Z",
          "tree_id": "951fa54b689dd4e3456a600b7caed5a584a479a8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/18bfb9da77cd131ea38a27b8336d918c9e1376a0"
        },
        "date": 1759422790070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3629.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8506.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8243.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8166.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 776.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.96484375,
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
          "id": "baaaf2d4deb94af1821392c7e6b43116c8a5ca86",
          "message": "Fix lifetime elision warnings and other lints (#1626)\n\nTo be ready for newer Rust versions, fix some lints which will start\nfailing builds if we upgrade.\n\n### Does this change impact existing behavior?\n\nNo, this only addresses lints by removing ambiguous code or updating to\nuse new methods that make code clearer.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-02T15:40:15Z",
          "tree_id": "6e79c86e93ac6bcef6b7469cc675332ec775b4ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/baaaf2d4deb94af1821392c7e6b43116c8a5ca86"
        },
        "date": 1759427603966,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3459.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4844.20703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8525.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8241.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8251.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 725.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 543.6640625,
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
          "id": "a911c7b46ed31de610a7f27e06be25f6f0109165",
          "message": "Upgrade toolchain to Rust 1.89 (#1628)\n\nUpgrade toolchain to Rust 1.89. Address relevant clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated crate versions as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-03T14:12:46Z",
          "tree_id": "71a490a5005dcba0128e6af3573eb590ac5da550",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a911c7b46ed31de610a7f27e06be25f6f0109165"
        },
        "date": 1759509032872,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3536.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4879.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8477.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 20.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8284.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8196.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 737.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 473.2265625,
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
          "id": "a0289d73bddbdb4a287ea962392716ce8e0692f1",
          "message": "Update CI approvals to use single job with 'needs' relationship (#1632)\n\nThis change reduces noise from CI approvals by using one single job with\nits own approval, which all other jobs \"need\" before they start.\n\n`needs` definition:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idneeds\n\nReference: https://github.com/awslabs/s3-connector-for-pytorch/pull/373/\n\n### Does this change impact existing behavior?\n\nCI change only. It now has all jobs requiring approval wait on a single\njob to succeed, which is itself gated by the GitHub environment.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-06T10:58:34Z",
          "tree_id": "744a0fcb1bf8efb6a795df948f1e81274814172d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a0289d73bddbdb4a287ea962392716ce8e0692f1"
        },
        "date": 1759756345174,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3421.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8591.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8205.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 638,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 457.41015625,
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
          "id": "85833e267c3bb8dd2ed34b86e2b5b74f440f051a",
          "message": "Fix typos in github workflows comments (#1634)\n\nFix a number of typos in the comments in github workflow definition.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T12:00:21Z",
          "tree_id": "fe4722fbfb82b913bfbe297e61f2441b399ab1b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/85833e267c3bb8dd2ed34b86e2b5b74f440f051a"
        },
        "date": 1759760166854,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3509.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4874.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8527.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 47.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8135.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8077.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2101.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2094.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 412.71484375,
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
          "id": "015d318aec8e5f43281d07852353c1f1b8a368cc",
          "message": "Skip fuser tests on macOS in CI (#1636)\n\nAvoid running unit tests in CI for the `mountpoint-s3-fuser` crate on\nmacOS. Since `fuser` also removed their macOS CI, we don't want to\ntrigger spurious failures on a platform we do not support.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-06T18:13:23Z",
          "tree_id": "ff50d59281f16f62a8c959e6eea1d364317bef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/015d318aec8e5f43281d07852353c1f1b8a368cc"
        },
        "date": 1759782700624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3560.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4825.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8441.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8237.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8270.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2114.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 803.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 524.7890625,
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
          "id": "f46fd4e5b85d3253e5a26625db0430c42edfe9b1",
          "message": "Upgrade cargo dependencies (#1638)\n\nUpgrade cargo dependencies to latest versions. Required one minor code\nchange in 2 tests to adapt to changes in `nix::fcntl`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated `crt` and `crt-sys` crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T09:28:52Z",
          "tree_id": "3d2c78f32d5530c9b3411488cade56007956e49b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f46fd4e5b85d3253e5a26625db0430c42edfe9b1"
        },
        "date": 1759923946970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3701.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4956.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8549.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8226.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2102.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 851.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 555.7421875,
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
          "id": "02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8",
          "message": "Upgrade rand crate (#1639)\n\nVersion 0.9 of the `rand` crate introduced significant breaking changes.\nThis change upgrades the dependency and adopts the new API, following\nthe guidance provided in the [Rust Rand\nBook](https://rust-random.github.io/book/update-0.9.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T13:45:05Z",
          "tree_id": "22257c8d2faa8c330e95ecb7f7018779d42f5f48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02aa5f1acc3ecc37cc52543fbda4ef370d1dbcc8"
        },
        "date": 1759939273901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3570.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4945.5546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8509.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8258.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8132.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 821.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 554.15625,
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
          "id": "8ad2378bd2ef1f7384a0624c540d2daa47bc102d",
          "message": "Remove dependency from rand_chacha (#1641)\n\nReplace `ChaCha20Rng` with `SmallRng`:\n* Simpler, smaller, and faster generator,\n* One fewer dependency,\n* Not cryptographically secure, but irrelevant for our usage.\n\nSee [comparison of different generators in the Rust Rand\nBook](http://rust-random.github.io/book/guide-rngs.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-08T16:19:02Z",
          "tree_id": "6df34246190a87a96513561a44329fb9eb38da46",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8ad2378bd2ef1f7384a0624c540d2daa47bc102d"
        },
        "date": 1759948793914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3657.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.49609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8520.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 17.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8181.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8078.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 836.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.88671875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0279442c074f667703177f59f5f37be35241d50d",
          "message": "Update S3 request metrics for OTLP export (#1630)\n\nThis PR defines metric configuration for OTLP export and adds support\nfor passing units and filtering stable metrics for otlp export.\n\nThis change also updates S3 request metrics to use the new metric names\nand attributes in both logs and OTLP export.\n\n### Does this change impact existing behavior?\n\nChanges log format for S3 request metrics in logs. The rest of the\nchanges are under the otlp_integration feature flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires a changelog entry as it updates the format of logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-09T12:17:57Z",
          "tree_id": "2244101d8ab391462b5a526bcb30ee08b2e532d9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0279442c074f667703177f59f5f37be35241d50d"
        },
        "date": 1760020435824,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "0a84b07f3e5f759de17b50f9236b52f135ae9efa",
          "message": "Fix instructions for updating CRT dependencies (#1644)\n\nThe command to fetch tags could fail in case of conflict and bail out\nbefore upgrading the remaining submodules.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-09T12:41:41Z",
          "tree_id": "f3dbc9776d94d3fac2487f917acb4e89ac1cb1d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a84b07f3e5f759de17b50f9236b52f135ae9efa"
        },
        "date": 1760021852699,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "dbefa1f1d0229833dacf2303c524ce2ed299fc84",
          "message": "Fix typing in benchmark script (#1646)\n\n`any` isn't a type; also no need for the shortcut, instead specify the\nproper return type for the resource monitoring functions.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-09T21:51:32Z",
          "tree_id": "ab3bcc184a310ee59ec075bbd5aa477f99d51345",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dbefa1f1d0229833dacf2303c524ce2ed299fc84"
        },
        "date": 1760054912922,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "ff8483df46863cccee72e9f17e13d05a49ce9283",
          "message": "Disable rustdoc tests for mountpoint-s3-crt-sys in CI (#1645)\n\nRemove dedicated rustdoc tests workflow, and enable rustdoc tests by\ndefault in all but `mountpoint-s3-crt-sys` crate.\n\nThe workflow was erroneously added to cover tests not being run, however\nthis is the default behavior unless opted out. This change removes the\nopt-out where we don't want it and drops the now redundant workflow.\n\n### Does this change impact existing behavior?\n\nCI only. No rustdoc tests will be run at all in `mountpoint-s3-crt-sys`.\nThere are no tests currently written anyway today.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no crate behavior change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-09T22:28:07Z",
          "tree_id": "3d2cde86b135fa4ba567139a5b6e707f0955377e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff8483df46863cccee72e9f17e13d05a49ce9283"
        },
        "date": 1760057439107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a6daf465dadf1d972de1d04aef1b33970ac8cd69",
          "message": "Unstable flag to open a new FD on each fuse thread. (#1642)\n\nThis mimics the libfuse behaviour. This is currently behind a flag\nbecause the performance and compatibility concerns are still being\nconsidered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-10T07:55:13Z",
          "tree_id": "98741d16499a18ef2a9d26ba734ebdbe791bd052",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6daf465dadf1d972de1d04aef1b33970ac8cd69"
        },
        "date": 1760091068997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "83328d05ac69258a440d2fb320e9b8f802a0a08b",
          "message": "Mountpoint Build Tag (#1627)\n\nAdd support for platform-specific build tagging by using environment\nvariable `MOUNTPOINT_S3_AWS_RELEASE_TARGET` that appends platform\nsuffixes to version strings for specific platform releases.\n\n**Example**\nGiven that MOUNTPOINT_S3_AWS_RELEASE_TARGET is \"amzn2023\":\n  - Official build:` mount-s3 1.21.0`\n  - Official build with target: `mount-s3 1.21.0+amzn2023`\n  - Unofficial build: `mount-s3 1.21.0-unofficial+abc1234`\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-10T16:07:09Z",
          "tree_id": "142a5699154f59c5190faf3b7661cdd762d55c01",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/83328d05ac69258a440d2fb320e9b8f802a0a08b"
        },
        "date": 1760120633261,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b97fa55fc40be0bb7a3f074a6ce2df1f943e312c",
          "message": "Bump astral-sh/setup-uv from 6 to 7 (#1649)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 6\nto 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0 🌈 node24 and a lot of bugfixes</h2>\n<h2>Changes</h2>\n<p>This release comes with a load of bug fixes and a speed up. Because\nof switching from node20 to node24 it is also a breaking change. If you\nare running on GitHub hosted runners this will just work, if you are\nusing self-hosted runners make sure, that your runners are up to date.\nIf you followed the normal installation instructions your self-hosted\nrunner will keep itself updated.</p>\n<p>This release also removes the deprecated input\n<code>server-url</code> which was used to download uv releases from a\ndifferent server.\nThe <a\nhref=\"https://github.com/astral-sh/setup-uv?tab=readme-ov-file#manifest-file\">manifest-file</a>\ninput supersedes that functionality by adding a flexible way to define\navailable versions and where they should be downloaded from.</p>\n<h3>Fixes</h3>\n<ul>\n<li>The action now respects when the environment variable\n<code>UV_CACHE_DIR</code> is already set and does not overwrite it. It\nnow also finds <a\nhref=\"https://docs.astral.sh/uv/reference/settings/#cache-dir\">cache-dir</a>\nsettings in config files if you set them.</li>\n<li>Some users encountered problems that <a\nhref=\"https://github.com/astral-sh/setup-uv?tab=readme-ov-file#disable-cache-pruning\">cache\npruning</a> took forever because they had some <code>uv</code> processes\nrunning in the background. Starting with uv version <code>0.8.24</code>\nthis action uses <code>uv cache prune --ci --force</code> to ignore the\nrunning processes</li>\n<li>If you just want to install uv but not have it available in path,\nthis action now respects <code>UV_NO_MODIFY_PATH</code></li>\n<li>Some other actions also set the env var <code>UV_CACHE_DIR</code>.\nThis action can now deal with that but as this could lead to unwanted\nbehavior in some edgecases a warning is now displayed.</li>\n</ul>\n<h3>Improvements</h3>\n<p>If you are using minimum version specifiers for the version of uv to\ninstall for example</p>\n<pre lang=\"toml\"><code>[tool.uv]\nrequired-version = &quot;&gt;=0.8.17&quot;\n</code></pre>\n<p>This action now detects that and directly uses the latest version.\nPreviously it would download all available releases from the uv repo\nto determine the highest matching candidate for the version specifier,\nwhich took much more time.</p>\n<p>If you are using other specifiers like <code>0.8.x</code> this action\nstill needs to download all available releases because the specifier\ndefines an upper bound (not 0.9.0 or later) and &quot;latest&quot; would\npossibly not satisfy that.</p>\n<h2>🚨 Breaking changes</h2>\n<ul>\n<li>Use node24 instead of node20 <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/608\">#608</a>)</li>\n<li>Remove deprecated input server-url <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/607\">#607</a>)</li>\n</ul>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Respect UV_CACHE_DIR and cache-dir <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/612\">#612</a>)</li>\n<li>Use --force when pruning cache <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/611\">#611</a>)</li>\n<li>Respect UV_NO_MODIFY_PATH <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/603\">#603</a>)</li>\n<li>Warn when <code>UV_CACHE_DIR</code> has changed <a\nhref=\"https://github.com/jamesbraza\"><code>@​jamesbraza</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/601\">#601</a>)</li>\n</ul>\n<h2>🚀 Enhancements</h2>\n<ul>\n<li>Shortcut to latest version for minimum version specifier <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/598\">#598</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>Bump dependencies <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/613\">#613</a>)</li>\n<li>Fix test-uv-no-modify-path <a\nhref=\"https://github.com/eifinger\"><code>@​eifinger</code></a> (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/604\">#604</a>)</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/3259c6206f993105e3a61b142c2d97bf4b9ef83d\"><code>3259c62</code></a>\nBump deps (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/633\">#633</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bf8e8ed895b7f686f85839659243f31a7df4a977\"><code>bf8e8ed</code></a>\nSplit up documentation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/632\">#632</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/9c6b5e9fb575cac8e82bb437dd7fc25a094bd85d\"><code>9c6b5e9</code></a>\nAdd resolution-strategy input to support oldest compatible version\nselection ...</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a5129e99f44f5d2ba22cdc54770745bd6f0d9c33\"><code>a5129e9</code></a>\nAdd copilot-instructions.md (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/630\">#630</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d18bcc753ac29c1ed721aa4a812a90eb937852d6\"><code>d18bcc7</code></a>\nAdd value of UV_PYTHON_INSTALL_DIR to path (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/628\">#628</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/bd1f875aba1ebb6d38211b773b094ad1dcca58df\"><code>bd1f875</code></a>\nSet output venv when activate-environment is used (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/627\">#627</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/1a91c3851df47749b241e3c5c696350957c93ff0\"><code>1a91c38</code></a>\nchore: update known checksums for 0.9.2 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/626\">#626</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c79f606987cb4a0f3d1a95a3e44bcebfb0a9b303\"><code>c79f606</code></a>\nchore: update known checksums for 0.9.1 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/625\">#625</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/e0249f159931b41f44fc8208c9b4cff085288cc9\"><code>e0249f1</code></a>\nFall back to PR for updating known versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/623\">#623</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/6d2eb15b4979924f7be71aa06908c6211f80ac88\"><code>6d2eb15</code></a>\nCache python installs (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/621\">#621</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-13T10:34:45Z",
          "tree_id": "7ef2199a3ffeb7837f7050a94d8eceeda0aab6c7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b97fa55fc40be0bb7a3f074a6ce2df1f943e312c"
        },
        "date": 1760359832783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "88d24b21f9b3e748d4868eac576f48de2431f823",
          "message": "Upgrade toolchain to Rust 1.90 (#1650)\n\nUpgrade toolchain to Rust 1.90. Address clippy issues (use of\n`is_multiple_of`).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-13T15:25:56Z",
          "tree_id": "bd5a1e94a0c27d8d914c0271f55bb77441540f9a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/88d24b21f9b3e748d4868eac576f48de2431f823"
        },
        "date": 1760377430218,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
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
          "id": "d1d0ffaf8aad5860cae440679c56af9fb8fde1b8",
          "message": "Document fstab support introduced in v1.18 (#1651)\n\nClarify in `CONFIGURATION.md` that fstab support is only available since\nMountpoint v1.18.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-13T16:12:50Z",
          "tree_id": "cc7f7b0998d82842efa4b55c2add65c8e6fe24f4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d1d0ffaf8aad5860cae440679c56af9fb8fde1b8"
        },
        "date": 1760384488735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 0,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 0,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "cfa515c3deb060557ebb086e6b80e3194ca984e5",
          "message": "Update S3 log analyzer to parse memory usage correctly (#1652)\n\nWe recently updated the log format to include an extra space, which\nbroke parsing of memory usage metric from the logs. With this change,\nlog analyzer should be able to parse units or additional spacing before\nthe metric.\n\n### Does this change impact existing behavior?\n\nNo, only updates log-analyzer\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only updates log-analyzer\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-14T07:06:08Z",
          "tree_id": "d17eded88ef2868b2c8e1d0508b5b4bf84c03086",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfa515c3deb060557ebb086e6b80e3194ca984e5"
        },
        "date": 1760433701646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3644.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4943.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8394.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 47.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8206.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8314.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 851.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.16796875,
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
          "id": "c563674856c6d10c7b59b537efece76cdf40b03b",
          "message": "Update CRT submodules to latest releases (#1643)\n\nUpdate the CRT submodules to the latest releases.\n\nChanges of note to us:\n- Updates of S3 endpoint rules\n- New metric getters for CRT\nhttps://github.com/awslabs/aws-c-s3/pull/538\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\na0e41c12 Update CRT submodules to latest releases\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth cd9d6afc..ab03bdd9:\n  > Fix sts_web_identity credentials provider (#275)\n  > change stale issue and discussion handling to run once a week (#273)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#271)\n  > Remove clang-3 from CI (#270)\n  > make exports consistent (#269)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 8703b3e5..cdd052bf:\n  > Fix cmake4 macos builds (#226)\n  > change stale issue and discussion handling to run once a week (#222)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#220)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 2b67a658..31578beb:\n  > Import latest CJSON and libcbor. (#1223)\n  > Add support for direct IO read from file. (#1217)\n  > aws_explicit_aligned_allocator_new (#1147)\n  > change stale issue and discussion handling to run once a week (#1216)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http bfa03928..ce0d6562:\n  > [fix] failed to compile on FreeBSD (#527)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 12cb9f9c..8906a02c:\n  > Default to PQ TLS for s2n handlers if TLSv1.3 is negotiated (#740)\n  > (Darwin) Fix leak on setting unsupported cipher pref  (#757)\n  > Serialized scheduling (#754)\n  > Fix win build when lean and mean specified (#755)\n  > Fix a memory leak from error handling in s2n tls hanlder. (#753)\n  > Scheduled Iteration Mem-release Order (#752)\n  > Fix Dispatch Queue Leak (#750)\n  > Fix memory leaks in NW socket (#749)\n  > Fix warnings found by the Undefined Behavior Sanitizer (#748)\n  > change stale issue and discussion handling to run once a week (#747)\n  > aws_parse_ipv4/6_address (#745)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 70aacd2d..332dd22c:\n  > update the default behaviors on the fio options (#577)\n  > disable the threshold until we have better options (#574)\n  > Auto - Update S3 Ruleset & Partition (#572)\n  > File streaming support (#564)\n  > Auto - Update S3 Ruleset & Partition (#561)\n  > Auto - Update S3 Ruleset & Partition (#555)\n  > Fix recording of early request metrics (#542)\n  > [fix] retry with checksum result in failure (#543)\n  > change stale issue and discussion handling to run once a week (#541)\n  > Revamp checksum - retry will reuse the checksum (#532)\n  > Add more getters for metrics (#538)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b4e504c..8ca0b29b:\n  > Prepare 1.61.4 (#2717)\n  > Check compiler for 'linux/random.h' (#2716)\n  > Fixes for android CI tests (#2713)\n  > Migrate Linux ARM omnibus (#2711)\n  > Migrate linux-x86 jobs to self-hosted runners (#2708)\n  > Pin PyCA version in python integration tests (#2706)\n  > Prepare v1.61.3 (#2705)\n  > CodeBuild GitHub Actions Runner Project (#2704)\n  > Remove jitter entropy tests folder (#2702)\n  > Prepare v1.61.2 (#2699)\n  > Windows/MSBuild doesn't provide 'all' target (#2697)\n  > Fix illumos/OpenSolaris (#2698)\n  > Fix test issues with run_minimal_tests (#2695)\n  > Fix build when path has spaces (#2696)\n  > Update Android CI config (#2687)\n  > Prepare v1.61.1 (#2685)\n  > Support FIPS build for Windows/ARM64 (#2688)\n  > Fix duplicate test names in CodeBuild integration tests (#2686)\n  > More arm64 CI tests (#2674)\n  > Use /FI for MSVC forced-includes (#2684)\n  > Prepare AWS-LC v1.61.0 (#2681)\n  > Make X509 CodeBuild webhook more resilient (#2680)\n  > Use CheckCCompilerFlag to test -Wno-cast-function-type (#2678)\n  > fix: Allow zero-length passwords in PEM key decryption (#2677)\n  > Test ACCP in FIPS mode as well as non-FIPS (#2669)\n  > Wrap compiler when FIPS w/ clang v20+ (#2671)\n  > Increase SSLBuffer size to INT_MAX (#2673)\n  > Fix Keccak MY_ASSEMBLER_IS_TOO_OLD_FOR_512AVX flag (#2670)\n  > Add AES-XTS AArch64 implementation that will eventually be imported from s2n-bignum. (#2632)\n  > ML-DSA service indicator (#2666)\n  > Update SSLProxy patch (#2663)\n  > Fix for zig build (#2668)\n  > Fix typo in ssl_transfer_asn1 (#2665)\n  > Re-import mlkem-native for addition of CFI directives (#2659)\n  > Refactor iOS CI script (#2637)\n  > Import s2n-bignum 2025-09-05-04 (#2667)\n  > Rand small fixes (#2664)\n  > Implement snapsafe fallback entropy source (#2651)\n  > Address clang-ci comments on new x509 code (#2662)\n  > Merge x509 branch into main (#2660)\n  > Fix ternary operator in github workflow (#2653)\n  > TLS Transfer Serialization Improvements (#2616)\n  > Document and statically assert counters can't overflow (#2658)\n  > Add standalone MLKEM supported groups (#2589)\n  > Fix benchmarking issues with FIPS main (#2655)\n  > Update CPU Jitter Entropy dependency to version 3.6.3 (#2654)\n  > Add x86 Keccak implementation (#2619)\n  > Add expandedKey ASN.1 encoding for KEM keys (#2624)\n  > Prepare for v1.60.0 release (#2649)\n  > Implement ragdoll (#2615)\n  > Fix macOS FIPS build w/ clang-20 (#2645)\n  > Migrate from CodeBuild account actor filter to pull request comment filter based on GitHub permissions (#2644)\n  > Implement read/write timeouts for BIO datagram (#2610)\n  > Anchor CodeBuild account-id patterns (#2641)\n  > Prepare release v1.59.0 (#2643)\n  > ML-KEM: Fix mlkem-native importer.sh (#2635)\n  > Remove BIT_INTERLEAVE support (#2628)\n  > X509_REQ_verify for MLDSA44 and MLDSA87 (#2636)\n  > Add CFI directives in md5-armv8.pl (#2627)\n  > Add CMake Configure pre-push checker (#2596)\n  > ML-KEM: import and enable x86_64 backend from mlkem-native (#2631)\n  > Fix Bind9 CI test (#2629)\n  > ML-KEM: Re-import mlkem-native (#2630)\n  > Fix MariaDB integration test (#2625)\n  > Fix clang-21 compile error (#2623)\n  > Apache httpd integration test (#2614)\n  > Allow prasden ci (#2621)\n  > Add back RC4_options from decrepit (#2618)\n  > Add CFI directives to armv8-mont (#2584)\n  > Support other field for PKCS7 (#2603)\n  > Prepare release v1.58.1 (#2609)\n  > Add support for EVP_PKEY_param_check (#2611)\n  > Move check-linkage.sh to util (#2608)\n  > Prepare release v1.58.0 (#2607)\n  > ML-DSA constant-time hardening for caddq, poly_chknorm, decompose (#2602)\n  > Implement SSL_set_verify_result (#2576)\n  > Impl `SSL_client_hello_get1_extensions_present` and friends (#2561)\n  > target.h: more clearly check for ppc64 endianness (#2604)\n  > Add optimized + verified hybrid AArch64 assembly for batched SHA3/SHAKE  (#2600)\n  > Migrate MSVC tests to CodeBuild (#2583)\n  > Fix Win64 unwind info alignment (#2559)\n  > Rewrite 4-fold batched SHAKE to be amenable to batched Keccak-F1600 assembly (#2598)\n  > Add EVP_PKEY_check and EVP_PKEY_public_check (#2565)\n  > Resolve issue with conflicting pkg-config variables (#2601)\n  > Prepare v1.57.0 release (#2593)\n  > Fix nixfmt CI failure (#2588)\n  > Add a couple more no-ops for legacy builds (#2590)\n  > (Experimental) Add SONAME Support to AWS-LC (#2546)\n  > Integrate formally verified AArch64 Keccak-x1 assembly from s2n-bignum/mlkem-native (#2539)\n  > Re-import s2n-bignum after merge of ML-KEM/Keccak functionality (#2595)\n  > Add production stage to CI pipeline (#2483)\n  > Bump tokio from 1.39.3 to 1.43.1 in /tests/ci/lambda (#2552)\n  > Add HMAC SHA3 benchmarks (#2513)\n  > Migrate Openssl-tool parameter parsing (#2501)\n  > ABI monitoring GitHub workflow improvements (#2574)\n  > Reimplement SSL_clear_num_renegotiations (#2586)\n  > Return NULL when a NULL or empty string is passed to NETSCAPE_SPKI_b64_decode. (#2580)\n  > Fix Libwebsocket Build (#2568)\n  > Explicitly test that input length is as expected for ed25519ph (#2585)\n  > Add back X509_STORE_get_verify_cb and X509_STORE_set_lookup_crls_cb (#2581)\n  > Update Windows Docker images (#2579)\n  > ML-KEM: Import AArch64 backend from mlkem-native (#2498)\n  > Offer P521 for signature_algorithms in client Hello (#2572)\n  > Renable NSym CI (#2570)\n  > Bump MySQL version tag to 9.4.0 (#2571)\n  > Update bind9 CI test to use meson (#2562)\n  > Prepare AWS-LC v1.56.0 (#2563)\n  > Revert \"Implement SSL_set_verify_result (#2526)\" (#2569)\n  > Implement SSL_set_verify_result (#2526)\n  > Remove nsym-related CI (#2566)\n  > Document non-support of TLS 1.3 PHA (#2560)\n  > Pull in SSL_get_negotiated_group and TLSEXT_nid_unknown from upstream (#2558)\n  > tool-openssl: Fix warning 'strnlen' specified bound 4096 exceeds source size 128 (#2556)\n  > Implement SSL_CTX_set_client_hello_cb for ClientHello callback (#2490)\n  > Prepare Docker images for upcoming CI changes (#2475)\n  > docs: Add FIPS documentation to BUILDING.md and README.md (#2387)\n  > CI for mingw64 and ucrt64 w/ msys2 (#2502)\n  > Add missing x509 CI to list of tests (#2548)\n  > Dynamically link AWS-LC in cpython integration tests (#2545)\n  > Align -help return codes in tool-openssl CLI to match Openssl (#2543)\n  > Add LC contributors to allowlist (#2547)\n  > Minimize the nginx patch even further (#2537)\n  > Fix python main diff after upstream PR 135402 merge (#2542)\n  > Use SP 800-56Arev3 Section 5.6.2.1.4.b instead of ECDSA PCT method (#2536)\n  > Fix PKCS12 Error Code (#2538)\n  > Improve OpenSSL compatibility (#2540)\n  > Add pkey command to CLI tool  (#2519)\n  > Add prikhap to allow list for CI (#2533)\n  > cpu_ppc64le.c: fix build on FreeBSD (#2520)\n  > Export BF_cfb64_encrypt (#2525)\n  > Implement pkcs8 cli (#2342)\n  > fix: Update Clang version from 18 to 19 in Windows workflow (#2529)\n  > ci: Add GitHub user ID 159580656 to CI allowlist (#2530)\n  > Remove redundant conditions (#2523)\n  > Remove obsolete python main patch (#2522)\n  > Export BIO_f_md for consumers (#2515)\n  > Prepare AWS-LC v1.55.0 (#2521)\n  > s2n-bignum: Add prefix header to _s2n_bignum_internal.h (#2510)\n  > Silence GCC 15 warning for uninitialized variable (#2517)\n  > Rework memory BIOs and implement BIO_seek (3rd try) (#2472)\n  > Temporarily allowlist the webhook actors to AWS-LC (#2514)\n  > Implement HMAC over SHA3 truncated variants (#2484)\n  > Add SSL_CTRL defines for SSL_*_tlsext_status_type (#2496)\n  > Release v1.54.0 (#2511)\n  > Intentionally redefine iovec in headers as CI (#2512)\n  > Add two new APIs to expose TLS 1.3 traffic secrets for kTLS (#2506)\n  > rwlock race tests is not a GoogleTest executable (#2509)\n  > Remove sys headers from bio.h (#2508)\n  > Document that EVP_PKEY_CTX_set_rsa_keygen_pubexp takes ownership (#2503)\n  > Note a couple of typoed struct names that we'll leave alone. (#2499)\n  > Re-remove afunix.h (#2495)\n  > Fix Console Test Suite Execution Locally (#2493)\n  > Order tool output by options provided - x509 (#2454)\n  > Rename SSL test files to match Scrutinice filter (#2491)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 1c5798b8..30f40f23:\n  > feat: Add key update to ktls feature (#5484)\n  > ci: remove duplicate buildspec (#5228)\n  > chore(ci): add sanitizer jobs for openssl-1.0.2-fips (#5508)\n  > chore(ci): add openssl-1.0.2-fips gcc-4.8 job (#5512)\n  > ci: pin libloading which requires MSRV 1.71 (#5520)\n  > chore(ci): Update older integ job to prep for deprecation (#5501)\n  > chore: delete files in preparation for refactor (#5517)\n  > ci: fix clippy (#5516)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 4 updates (#5497)\n  > chore: bindings release 0.3.26 (#5509)\n  > test: Adds test for serializing a previously-serialized connection (#5495)\n  > test(integv2): trim bloated cases (#5453)\n  > docs(usage guide): description connection serialization (#5504)\n  > feat: add async public key support (#5473)\n  > ci: only use git fetch for nix jobs (#5506)\n  > chore(nix): Flip awslc to upstream flake. (#5317)\n  > chore: bump instance size for Valgrind (#5500)\n  > feat: basic security policy builder interface (#5493)\n  > refactor: move new default policies to separate file (#5492)\n  > chore: pin to older pytest-rerunfailures (#5494)\n  > feat: 'latest' option for strict policy (#5488)\n  > build(deps): bump nixbuild/nix-quick-install-action from 32 to 33 in /.github/workflows in the all-gha-updates group (#5487)\n  > feat(integration): add utilities for capability assertions (#5475)\n  > feat: add pure mlkem_1024 definition (#5468)\n  > fix: no server signature scheme expected with rsa kex (#5481)\n  > refactor(tls-harness): avoid implicit shutdown of ossl connection (#5474)\n  > Fix HKDF on big-endian (#5478)\n  > feat: add method to get signature scheme name (#5471)\n  > refactor: signature scheme name adjustment (#5472)\n  > ci: tweak ruff ci failure message (#5485)\n  > chore(release): release s2n-tls v0.3.25 (#5486)\n  > chore(nix): switch to nixpkgs libressl (#5467)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5479)\n  > chore: Adds build file to get new codebuild project running in CI (#5476)\n  > chore(nix): Move nix integ jobs to ec2 fleets (#5461)\n  > Add TLSv1.3 (classical + PQ) policies for CloudFront Upstream (#5460)\n  > refactor: setup replacement default policies (#5464)\n  > ci: fix wikipedia network test + better error message (#5470)\n  > ci: don't include tls/extensions in SAW build (#5466)\n  > refactor(stuffer): Rename s2n_stuffer_has_pem_encapsulated_block (#5465)\n  > test(integration): add record padding test (#5451)\n  > Add fixed version of the rfc9151 policy (#5277)\n  > chore: apply clippy fixes (#5459)\n  > chore: bindings release 0.3.24 (#5455)\n  > refactor(tls-harness): separate benchmark abstractions (#5444)\n  > chore(ci): once a week, clean the nix store for the kTLS job. (#5430)\n  > Add AWS-CRT-SDK-TLSv1.0-2025-PQ (#5403)\n  > chore(ci): tell crt to not check submodule version (#5450)\n  > build(deps): update criterion requirement from 0.6 to 0.7 in /bindings/rust/standard (#5442)\n  > fix(typo): fix a typo in codebuild.yml (#5445)\n  > feat: add integration test for secp384r1_mlkem_1024 (#5438)\n  > chore: add Awslc fips next to CI (#5349)\n  > ci: document how to manually run the codebuild jobs (#5441)\n  > chore: bindings release 0.3.23 (#5439)\n  > test(bench): add api for mutual auth handshake (#5437)\n  > refactor(bench): unify IO methods (#5434)\n  > build(deps): bump cross-platform-actions/action from 0.28.0 to 0.29.0 in /.github/workflows in the all-gha-updates group (#5435)\n  > feature: update default_pq to support secp384r1_mlkem_1024 (#5433)\n  > chore: Nix Corretto version bump/upstream (#5427)\n  > feat(bench): add generic shutdown functionality (#5426)\n  > feat: add secp384r1_mlkem_1024 kem group (#5395)\n  > ci: run rustfmt/clippy on standard crates (#5333)\n  > docs(aws-kms-tls-auth): clarify security impact of failure modes (#5424)\n  > docs(aws-kms-tls-auth): add readme (#5409)\n  > ci: require repo write permissions for codebuild (#5421)\n  > feat(aws-kms-tls-auth): add provider & receiver structs (#5408)\n  > Flip Nix integration tests to use uv/pytest (#5352)\n  > feat: add ML-KEM-1024 kem definition (#5367)\n  > feat(aws-kms-tls-auth): add psk identity (#5402)\n  > ci: Migrate Duvet GitHub Action to duvet-action repo (#5400)\n  > ci: start codebuild jobs from github actions (#5383)\n  > feat(aws-kms-tls-auth): add codec and parsing (#5398)\n  > docs: note that s2n_shutdown may keep reading (#5370)\n  > chore: release 0.3.22 (#5397)\n  > fix(ci): adding set -e to prevent nix develop to hide failing tests (#5393)\n  > feature: new TLS1.2 + FIPS CRT security policy (#5375)\n  > chore: apply clippy and fmt fixes (#5386)\n  > fix: policy util should ignore deprecated TLS1.2 kems if missing (#5372)\n  > build(deps): bump nixbuild/nix-quick-install-action from 31 to 32 in /.github/workflows in the all-gha-updates group (#5371)\n  > build(deps): bump nixbuild/nix-quick-install-action from 30 to 31 in /.github/workflows in the all-gha-updates group (#5366)\n  > tests(integ): add more debug logging (#5363)\n  > tests(integv2): fix flaky session resumption test (#5362)\n  > build(deps): bump baptiste0928/cargo-install from 3.3.0 to 3.3.1 in /.github/workflows in the all-gha-updates group (#5361)\n  > build: prevent needless rebuild with S2N_INTERN_LIBCRYPTO=ON and Ninja (#5356)\n  > Include application message in Debug impl (#5359)\n  > ci: Fix the sslyze test for nix (#5283)\n  > refactor(examples): remove connection pool (#5353)\n  > build(deps): update pprof requirement from 0.14 to 0.15 in /bindings/rust/standard (#5334)\n  > chore(ci): add a cargo timing buildspec (#5176)\n  > fix: do not use \"digest and sign\" for ML-DSA in FIPS mode (#5348)\n  > ci: workaround for nix + gnutls + ubuntu24 issue (#5345)\n  > chore: Bindings release 0.3.20 (#5344)\n  > tests(integ): fix nondeterministic ocsp test shutdown behavior (#5340)\n  > feat(bindings): expose custom critical extension API (#5337)\n  > chore(ci): Pin parking_lot_core, lock_api (#5338)\n  > ci: Use official libcrypto verification model repository (#5336)\n  > feat: add custom critical extension support (#5321)\n  > fix(benches): reuse config for handshakes (#5319)\n  > chore: bindings release 0.3.20 (#5332)\n  > CertificateRequest Rust bindings (#5331)\n  > Add CertificateRequest certificate selection callback (#5318)\n  > build(deps): bump the all-gha-updates group across 1 directory with 3 updates (#5315)\n  > feat(examples): add key log example (#5314)\n  > Remove unused negotiate_kem function causing build failure (#5316)\n  > chore: Bump nixpkgs version to 24.11 (#5294)\n  > tests: policy snapshot test (#5309)\n  > fix(benches): use session ticket for resumption (#5305)\n  > feature: release ML-DSA support (#5307)\n  > feature: support for ML-DSA handshake signatures (#5303)\n  > tests: turn verbose mode off by default in integ tests (#5286)\n  > Revert \"build: add pull requests limit for dependabot\" (#5302)\n  > chore: Update Apache test certificates from RSA1024 to RSA2048 (#5285)\n  > feature: add crypto support for mldsa signing (#5272)\n  > refactor: remove conn->client_hello_version (#5278)\n  > build(deps): unpin test-log because of MSRV updates (#5300)\n  > build: add pull requests limit for dependabot (#5299)\n  > chore: bindings release 0.3.19 (#5298)\n  > build(deps): update strum requirement from 0.25 to 0.27 in /bindings/rust/standard (#5292)\n  > build(deps): update test-log-macros requirement from =0.2.14 to =0.2.17 in /bindings/rust/standard (#5290)\n  > feat: Add `as_ptr()` API for Config (#5274)\n  > tests: reduce integ test flakiness + improve debugability (#5282)\n  > build(deps): update env_logger requirement from 0.10 to 0.11 in /bindings/rust/standard (#5296)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.1.0 to 4.2.0 in /.github/workflows in the all-gha-updates group (#5297)\n  > tests: fix flaky test_serialization (#5288)\n  > chore: bump standard MSRV to 1.82.0 (#5295)\n  > chore: Add comments to track dependency requirements (#5287)\n  > tests: improve coverage for s2n_stream_cipher_null (#5268)\n  > build(deps): bump astral-sh/setup-uv from 5 to 6 in /.github/workflows in the all-gha-updates group (#5273)\n  > chore: bindings release 0.3.18 (#5284)\n  > ci: fix expectations when using system default libcrypto (#5279)\n  > ci: handle 429 from yahoo.com network integ test (#5280)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelogs and ensured version changes are correct.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-14T09:52:07Z",
          "tree_id": "61f810876539acf01d2884e09c76038846876d61",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c563674856c6d10c7b59b537efece76cdf40b03b"
        },
        "date": 1760447780781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3521.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4997.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8419.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 46.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8235.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8198.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 678.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.2890625,
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
          "id": "c17443394a7c52f6124f47099d543e972f0b21bf",
          "message": "Emit a MOUNTPOINT_EVENT_READY when error logging is enabled (#1647)\n\nEmit an event which signals that mountpoint is ready.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-10-14T12:53:37Z",
          "tree_id": "b4d8099afa5587992b2ade3919838c69924e906b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c17443394a7c52f6124f47099d543e972f0b21bf"
        },
        "date": 1760458747236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3505.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4918.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8492.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8127.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8180.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 618.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.53125,
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
          "id": "1e597586bd601c2d529d723b8fb02582939ec184",
          "message": "Fix fstab tests CI job name (#1654)\n\nFix a typo! Adds fstab job name missing closing bracket.\n\n### Does this change impact existing behavior?\n\nChanges CI job name only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-14T14:44:10Z",
          "tree_id": "4185a4889cd93f8a68b4c9204caca89977cb9de8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1e597586bd601c2d529d723b8fb02582939ec184"
        },
        "date": 1760465388811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3459.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8451.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 20.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8176.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2104.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2102.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 626.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 428.97265625,
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
          "id": "280c7e055580b596cedb1c0986899d5a560e1fd4",
          "message": "Update CRT submodules to latest releases (#1659)\n\nUpdate the CRT submodules to the latest releases.\n\nChanges of note to us:\n- Add option ENABLE_SOURCE_MODIFICATION\n[#2739](https://github.com/aws/aws-lc/pull/2739)\n\nThis change also sets ENABLE_SOURCE_MODIFICATION=OFF when building\n`aws-lc`, in order to address #1658.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal cdd052bf..3c6d901a:\n  > Fix asn.1 parser on big endian (#228)\n  > Clean up error handling around unsupported rsa functions (#227)\n  > SHA512 support (#223)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8ca0b29b..5a9df219:\n  > Prepare v1.62.0 (#2743)\n  > Add build-time option to opt-out of CPU Jitter Entropy (#2733)\n  > Simple script to build/run tests (#2736)\n  > Add option ENABLE_SOURCE_MODIFICATION (#2739)\n  > Fix Libwebsockets CI (#2737)\n  > Add CI dimensions for legacy AVX512 flags (#2732)\n  > Adding pkeyutl tool to the CLI (#2575)\n  > Add minimal EC CLI tool implementation (#2640)\n  > Implement coverity suggestions (#2730)\n  > Implement workaround for FORTIFY_SOURCE warning with jitterentropy (#2728)\n  > Add null check on RSA key checks (#2727)\n  > Move udiv and sencond tweak calculations to when needed (#2726)\n  > Implement genrsa command (#2535)\n  > Add ASN.1 decoding for ML-KEM private keys as seeds (#2707)\n  > Implement dgst CLI command (#2638)\n  > crypto/pem: replace strncmp with CRYPTO_memcmp to fix -Wstring-compare error (#2724)\n  > Centralize password handling tool-openssl (#2555)\n  > Type fix in mldsa (#2308)\n  > Bump urllib3 from 2.2.3 to 2.5.0 in /tests/ci (#2551)\n  > Don't ignore CMAKE_C_FLAGS w/ MSVC (#2722)\n  > Delete util/bot directory (#2723)\n  > Migrate integration omnibus (#2715)\n  > Fixing a bug in ML-DSA poly_uniform function (#2721)\n  > Fix tests that assume X25519 will be negotiated (#2682)\n  > nginx now supports AWS-LC (#2714)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-16T10:16:50Z",
          "tree_id": "df59540015905b95ccd6fa291f257e0d678e9336",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/280c7e055580b596cedb1c0986899d5a560e1fd4"
        },
        "date": 1760617937901,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3587.84765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4975.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8493.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 22.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8115.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8105.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 824.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 555.74609375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}