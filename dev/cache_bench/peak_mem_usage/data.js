window.BENCHMARK_DATA = {
  "lastUpdate": 1761097266310,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1758899616789,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2191.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2268.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2248.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2226.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.5859375,
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
        "date": 1759148146155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2274.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2191.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2188.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2479.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2194.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2172.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.46484375,
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
        "date": 1759246277097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2193.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2193.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2213.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 40.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2194.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2476.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2442.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2215.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2394.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.0390625,
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
        "date": 1759263446043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2195.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2514.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2453.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2213.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2188.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2193.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2205.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 37.28125,
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
        "date": 1759421839369,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2380.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2299.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2314.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2280.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2187.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.03125,
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
        "date": 1759426678793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2181.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2292.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2194.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2181.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2189.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2312.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2586.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 29.17578125,
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
        "date": 1759508026811,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2400.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2245.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2552.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 52.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2416.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 40.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2165.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2171.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.74609375,
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
        "date": 1759755412443,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2214.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2329.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2196.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2202.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2205.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2171.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2405.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2170.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.97265625,
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
        "date": 1759759236777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2519.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2227.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2189.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2529.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 23.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2518.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2170.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2169.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 37.42578125,
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
        "date": 1759781647630,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2350.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2200,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2170.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 40.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2171.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2218.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2413.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2407.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.359375,
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
        "date": 1759923027050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2192.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2366.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2341.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 40.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2375.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2209.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2249.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.59765625,
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
        "date": 1759938395817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2577.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2416.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 54.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2310.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2385.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2313.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2247.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 30.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2510.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2228.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.98046875,
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
        "date": 1759947924634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2481.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2198.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 48.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2381.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2471.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2250.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2200.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.33984375,
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
        "date": 1760020874480,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760053978242,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760056507712,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760090174048,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760119743263,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760358807836,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760383530680,
        "tool": "customSmallerIsBetter",
        "benches": [
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
        "date": 1760432786892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2191.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 29.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2213.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2495.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2171.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2246.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2249.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2198.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.32421875,
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
        "date": 1760445939861,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2171.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2191.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2198.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2205.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2184.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2184.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.578125,
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
        "date": 1760456860533,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2190.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2445.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2529.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2192.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2177.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2432.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2463.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.6953125,
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
        "date": 1760463520197,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2296.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2173.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2190.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2283.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2183.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2398.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2199.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.22265625,
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
        "date": 1760616931468,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2288.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2192.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2162.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2831.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2198.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 31.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2195.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2169.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2177.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.6796875,
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
          "id": "5502a861ee11eaa6dc61aa8e711262b2d4388d8c",
          "message": "Release crates including mounpoint-s3-fs 0.8.1 (#1662)\n\nRelease mounpoint-s3-fs 0.8.1 and dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-17T12:21:40Z",
          "tree_id": "79f3727803d407b4dc844f549a675130ac612de2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5502a861ee11eaa6dc61aa8e711262b2d4388d8c"
        },
        "date": 1760713692947,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2179.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2200.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2832.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 40.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2504.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2203.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2390.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2172.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.61328125,
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
          "id": "e56881a32e22336ceacde1b7b904dcc167d0d3db",
          "message": "Split mkdir tests to cover mkdir local visibility explicitly (#1657)\n\nSimple change to split out tests to explicitly cover two behaviors we're\ninterested in: promotion of local dir to remote dir after file creation,\nand visibility of local directories to operations immediately after.\n\n### Does this change impact existing behavior?\n\nNew tests only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T12:55:00Z",
          "tree_id": "e9173f075c4bf319c9bf51b4cfd4bc6c8b59e5ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e56881a32e22336ceacde1b7b904dcc167d0d3db"
        },
        "date": 1761060515907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2177.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2184.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2188.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2187.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2182.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2191.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2252.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.9609375,
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
          "id": "3821a489258eece0f5c8b9651e19c4e82a4d06a6",
          "message": "Add Docker build (no publish) in CI, fix image sources, minor style changes (#1665)\n\nBuilding the container images had warnings due to style inconsistencies.\nAdditionally, the base image did not use the ECR images in all cases. On\ntop of addressing these two issues, this PR adds a job to CI to verify\nthat the container images are buildable.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T22:22:43Z",
          "tree_id": "a5222ae996ef0ff431321d334251f932a0dec7ff",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3821a489258eece0f5c8b9651e19c4e82a4d06a6"
        },
        "date": 1761093122792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2189.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2167.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2201.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2164.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2179.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2185.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2188.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2185.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.15625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "7315459c07f35780a069bd5122cf8445b09224d6",
          "message": "Update default logging level to INFO for Mountpoint, WARN for dependencies (#1668)\n\n## Use WARN as default log level; Mountpoint crates remain at INFO\n\nThis change modifies the default logging configuration to use WARN as\nthe global default log level, while explicitly setting INFO level for\nall `mountpoint_s3` crates.\n\n**What changed:**\n- Changed default log level from `info` to `warn,mountpoint_s3=info`\n- Added `MOUNTPOINT_LOG_TARGET` constant to centralize the crate name\npattern\n\n### Does this change impact existing behavior?\n\n- **No breaking change** \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\n**Yes, this needs a changelog entry**\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-21T23:28:03Z",
          "tree_id": "33f8317ae19b422bfdcbf1cbe5b9b9cba953bed0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7315459c07f35780a069bd5122cf8445b09224d6"
        },
        "date": 1761096659237,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2182.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2170.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2168.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2185.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2198.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.23046875,
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
          "id": "b76df6c44bddab77e19a78e1ce21470b8496c231",
          "message": "Add info logging around FUSE session join (#1664)\n\nThis change adds some new `INFO` logging around exits. In the past,\nwe've seen tickets where Mountpoint \"spontaneously\" unmounts. It's not\nclear what's going on in those tickets and has not been possible to\nreproduce given no access to those systems. This change adds a little\nbit of extra logging to try and give better visibility into what\nMountpoint thinks is happening.\n\n### Does this change impact existing behavior?\n\nNo change to end-user behavior. Only new logs are added at `INFO` level,\nwhich is shown to customers.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a simple logging addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-21T23:36:46Z",
          "tree_id": "7651be2b7bc916e2f0a55366020a9a86e04bdc78",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b76df6c44bddab77e19a78e1ce21470b8496c231"
        },
        "date": 1761097266253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2572.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2176.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2204.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2194.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2191.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2178.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.59765625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}