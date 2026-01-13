window.BENCHMARK_DATA = {
  "lastUpdate": 1768299158988,
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
          "distinct": true,
          "id": "9dfd5ddd9a91d1ee7b76e10083be0f79af980350",
          "message": "Upgrade aws-lc to 1.62.1 (#1683)\n\nUpgrade aws-lc to 1.62.1. In particular, pick up:\n* Do no consider warnings fatal in CPU Jitter for LTO build\n[#2769](https://github.com/aws/aws-lc/pull/2769).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 5a9df219..e0ee14ec:\n  > Prepare v1.62.1 (#2771)\n  > Add more options to genrsa (#2770)\n  > Do no consider warnings fatal in CPU Jitter for LTO build (#2769)\n  > Add Windows Docker Image Build (#2760)\n  > Migrate Graviton2 and Graviton4 from EC2 Test Framework (#2759)\n  > AL2023 x509-limbo container (#2761)\n  > Implement -passin for dgst cli (#2763)\n  > Fix librelp integration CI (#2766)\n  > ci: scope down GitHub Token permissions (#2762)\n  > AWS CodeBuild Fleets Setup (#2758)\n  > Implement more options for x509 CLI (#2735)\n  > Don't log feature probe error message unless requested (#2755)\n  > Consolidate GitHub CodeBuild Projects (#2757)\n  > Fix windows CI job (#2744)\n  > Cipher-stealing: no need for re-loading round keys; they're still in registers. (#2734)\n  > Add OPENSSL_NO_UI_CONSOLE macro (#2751)\n  > Use New Docker Images in GitHub Workflows (#2752)\n  > Add ecr:BatchImportUpstreamImage for first-time cache pull-thru (#2747)\n  > Add Docker Image Build Workflows (#2746)\n  > CodeBuild Setup for GitHub Docker Image Builds (#2745)\n  > Implement ecparam CLI tool (#2718)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-27T22:27:02Z",
          "tree_id": "9dea7f8dc4561e525a4a47b90caa1567c2fa4b60",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9dfd5ddd9a91d1ee7b76e10083be0f79af980350"
        },
        "date": 1761612636294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3542.6796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4902.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8496.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8124.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8175.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 808.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 462.43359375,
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
          "id": "8590e4e6abbbcf4593bc5925c760f743c8e8fac4",
          "message": "Remove CFLAGS workaround from al2023 spec (#1674)\n\nRemove CFLAGS workaround from al2023 spec.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T08:41:45Z",
          "tree_id": "80279ea98baf5bae6d38f46ee2f472cafa75796c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8590e4e6abbbcf4593bc5925c760f743c8e8fac4"
        },
        "date": 1761648956480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3398.515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4800.90234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8386.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8095.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8089.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 770.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.05078125,
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
          "id": "56d8b179e993351e7f7ecf7087f0c4ca10a7887d",
          "message": "Add units for metrics in logs (#1677)\n\nThis change adds units canonical labels to metrics in logs. Currently,\nit only includes units for metrics eligible for OTLP export.\n\n### Does this change impact existing behavior?\n\nYes, it updates the log format\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it updates the log format\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T09:50:41Z",
          "tree_id": "6436d9b459bc9fd691ab820eba8b7387510de680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56d8b179e993351e7f7ecf7087f0c4ca10a7887d"
        },
        "date": 1761653140973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3412.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4907.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8414.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8294.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8278.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 725.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.375,
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
          "id": "66a9ac1b583f96f34925cbdd73a1087b9a186ad2",
          "message": "Add otlp metrics user-agent tag (#1686)\n\nThis adds a user-agent tag when otlp endpoint is configured to get\ninsights into usage of otlp metrics.\n\n### Does this change impact existing behavior?\n\nNo, under a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T13:37:18Z",
          "tree_id": "5498f079aa321b68855296e214b52becd64915f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/66a9ac1b583f96f34925cbdd73a1087b9a186ad2"
        },
        "date": 1761666752249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3399.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4823.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8435.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8274.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8230.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2112.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 746.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.26953125,
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
          "id": "b27977ba9c6cc0b770933fc55e1d32bec9eac8f0",
          "message": "Remove OTLP integration feature flag (#1685)\n\nRemoves the `otlp_integration` feature flag\n\n### Does this change impact existing behavior?\n\nNo, this enables otlp metrics without requiring a feature flag\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added a mountpoint-s3-fs changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-28T18:42:12Z",
          "tree_id": "b41459cc8c7cac4ad6912ad4e9173b6cdd7aed47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b27977ba9c6cc0b770933fc55e1d32bec9eac8f0"
        },
        "date": 1761685204984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3373.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4816.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8401.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8257.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2104.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 549.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 438.66796875,
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
          "id": "0d0ceb9b898c84ff62486c295f257d0143bc953c",
          "message": "Merge al2023 workflow into integration tests (#1689)\n\nAvoids duplicate approval request. Also fixes checkout and requires\napproval for the build SRPM step.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T21:07:52Z",
          "tree_id": "c8cfa475328a9edfb651edba1ce086b0498ba5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d0ceb9b898c84ff62486c295f257d0143bc953c"
        },
        "date": 1761693814960,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3382.42578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4838.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8557.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8162.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8224.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 397.54296875,
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
          "id": "b84f6e2db38744a1b79d870084fd1ea42bff7c2f",
          "message": "Add documentation for OTLP metrics (#1681)\n\nDocument metrics available for OTLP export and how to export them to\nobservability backends.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-29T17:22:59Z",
          "tree_id": "5602bbb6348fc5226aeb00c40328110892b189ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b84f6e2db38744a1b79d870084fd1ea42bff7c2f"
        },
        "date": 1761766754464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 4777.4453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 5123.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8387.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 22.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8223.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8101.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2095.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 755.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.30859375,
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
          "distinct": true,
          "id": "613e4676d25d59e2621c41c4c141097dcc2cf00a",
          "message": "docs: Update LOGGING.md for default INFO level and metrics behavior (#1620)\n\nUpdate documentation to reflect new default logging level\n\n### What changed and why?\n- Updated LOGGING.md to reflect the new default INFO logging level\n(changed from WARN)\n- Added explanation of metrics logging behavior with --log-metrics and\n--debug flags\n- Clarified verbosity levels in documentation\n\nThese changes align the documentation with the implementation changes\nmade in PR #1605.\n\n### Does this change impact existing behavior?\nNo, this is a documentation-only change that reflects already merged\nchanges from PR #1605\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo changelog entry or version change needed as this is only updating\ndocumentation to match existing behavior.\n\n---\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-29T19:58:55Z",
          "tree_id": "d68c93d36fc4038ba611232771d126ed7e598cec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/613e4676d25d59e2621c41c4c141097dcc2cf00a"
        },
        "date": 1761776320008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3541.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4839.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8493.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8190.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8227.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2109.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2105.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 702.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.890625,
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
          "id": "854836ac0d0810f943371082b8f79305f592377d",
          "message": "Update RPM workflow to handle configurable release (#1690)\n\nUpdate the RPM workflow to use a \"version tag\" (`<VERSION>-<RELEASE>`),\nwhich will allow to handle a configurable release in a future change.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-29T22:09:39Z",
          "tree_id": "fbd562fa793b449fba3b079884b323ce0969dad1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/854836ac0d0810f943371082b8f79305f592377d"
        },
        "date": 1761784062336,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3593.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4853.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8491.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8273.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8155.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 806.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 516.05078125,
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761834400092,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3433.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4862.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8493.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8290.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8260.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2113.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 789.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.0625,
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
          "id": "837675f5c83343b882b28cf3e1be1e2368596d6a",
          "message": "Prepare for 1.21.0 release (#1692)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-30T13:48:29Z",
          "tree_id": "784cb19e88184a344fc80236263c8ee250e3abb0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/837675f5c83343b882b28cf3e1be1e2368596d6a"
        },
        "date": 1761840387057,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3459.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4818.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8387.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8171.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8179.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2116.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 714.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 401.32421875,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761943602733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3561.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4826.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8394.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8156.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8254.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2098.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.05859375,
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
          "id": "484b81367e678f504b50d0c3aa049f96015b8559",
          "message": "Correct metric type documentation (#1696)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-11-03T11:05:20Z",
          "tree_id": "6027812a4fc35fae0319fddb700ab70ec154262a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484b81367e678f504b50d0c3aa049f96015b8559"
        },
        "date": 1762176188431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3750.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.67578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8370.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8180.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2117.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 701.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 414.31640625,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765397454783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3465.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4892.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8465.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8227.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8092.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 740.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 501.06640625,
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
          "id": "a3d487c5b4b416478351f90693a17fe1399b6d98",
          "message": "Refactor cache metrics for consistency and completeness (#1721)\n\nThis PR streamlines cache metrics collection across disk and express\ncache implementations.\n\nThis change renames caching metrics for consistency with other OTLP\nmetrics. This change also captures latency, bytes_transferred from/to\ncache and errors consistently across both disk and express cache\nimplementations.\n\n### Does this change impact existing behavior?\n\nYes, updates cache metrics in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-12-10T18:49:08Z",
          "tree_id": "382f4e0f5addcf5fa0ecfe04b5a10b853c56bdc7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3d487c5b4b416478351f90693a17fe1399b6d98"
        },
        "date": 1765401060744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3486.90234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4942.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8454.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8122.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8248.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2100.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 751.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 498.83984375,
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
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765487305204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3990.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4850.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8436.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8163.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8083.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2118.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2108.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 801.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 498.6171875,
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
          "id": "0c5511300aa087bb5664cd7a089e84cf01ade29a",
          "message": "Bump actions/cache from 3 to 5 (#1726)\n\nBumps [actions/cache](https://github.com/actions/cache) from 3 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/releases\">actions/cache's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<blockquote>\n<p>[!IMPORTANT]\n<strong><code>actions/cache@v5</code> runs on the Node.js 24 runtime and\nrequires a minimum Actions Runner version of\n<code>2.327.1</code>.</strong></p>\n<p>If you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<hr />\n<h2>What's Changed</h2>\n<ul>\n<li>Upgrade to use node24 by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1630\">actions/cache#1630</a></li>\n<li>Prepare v5.0.0 release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1684\">actions/cache#1684</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4.3.0...v5.0.0\">https://github.com/actions/cache/compare/v4.3.0...v5.0.0</a></p>\n<h2>v4.3.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Add note on runner versions by <a\nhref=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1642\">actions/cache#1642</a></li>\n<li>Prepare <code>v4.3.0</code> release by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1655\">actions/cache#1655</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1642\">actions/cache#1642</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4...v4.3.0\">https://github.com/actions/cache/compare/v4...v4.3.0</a></p>\n<h2>v4.2.4</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1620\">actions/cache#1620</a></li>\n<li>Upgrade <code>@actions/cache</code> to <code>4.0.5</code> and move\n<code>@protobuf-ts/plugin</code> to dev depdencies by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1634\">actions/cache#1634</a></li>\n<li>Prepare release <code>4.2.4</code> by <a\nhref=\"https://github.com/Link\"><code>@​Link</code></a>- in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1636\">actions/cache#1636</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1620\">actions/cache#1620</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4...v4.2.4\">https://github.com/actions/cache/compare/v4...v4.2.4</a></p>\n<h2>v4.2.3</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use <code>@​actions/cache</code> 4.0.3 package &amp;\nprepare for new release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1577\">actions/cache#1577</a>\n(SAS tokens for cache entries are now masked in debug logs)</li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/cache/pull/1577\">actions/cache#1577</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/cache/compare/v4.2.2...v4.2.3\">https://github.com/actions/cache/compare/v4.2.2...v4.2.3</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/cache/blob/main/RELEASES.md\">actions/cache's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Releases</h1>\n<h2>Changelog</h2>\n<h3>5.0.1</h3>\n<ul>\n<li>Update <code>@azure/storage-blob</code> to <code>^12.29.1</code> via\n<code>@actions/cache@5.0.1</code> <a\nhref=\"https://redirect.github.com/actions/cache/pull/1685\">#1685</a></li>\n</ul>\n<h3>5.0.0</h3>\n<blockquote>\n<p>[!IMPORTANT]\n<code>actions/cache@v5</code> runs on the Node.js 24 runtime and\nrequires a minimum Actions Runner version of <code>2.327.1</code>.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>4.3.0</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to <a\nhref=\"https://redirect.github.com/actions/toolkit/pull/2132\">v4.1.0</a></li>\n</ul>\n<h3>4.2.4</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.5</li>\n</ul>\n<h3>4.2.3</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.3 (obfuscates SAS token in\ndebug logs for cache entries)</li>\n</ul>\n<h3>4.2.2</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.2</li>\n</ul>\n<h3>4.2.1</h3>\n<ul>\n<li>Bump <code>@actions/cache</code> to v4.0.1</li>\n</ul>\n<h3>4.2.0</h3>\n<p>TLDR; The cache backend service has been rewritten from the ground up\nfor improved performance and reliability. <a\nhref=\"https://github.com/actions/cache\">actions/cache</a> now integrates\nwith the new cache service (v2) APIs.</p>\n<p>The new service will gradually roll out as of <strong>February 1st,\n2025</strong>. The legacy service will also be sunset on the same date.\nChanges in these release are <strong>fully backward\ncompatible</strong>.</p>\n<p><strong>We are deprecating some versions of this action</strong>. We\nrecommend upgrading to version <code>v4</code> or <code>v3</code> as\nsoon as possible before <strong>February 1st, 2025.</strong> (Upgrade\ninstructions below).</p>\n<p>If you are using pinned SHAs, please use the SHAs of versions\n<code>v4.2.0</code> or <code>v3.4.0</code></p>\n<p>If you do not upgrade, all workflow runs using any of the deprecated\n<a href=\"https://github.com/actions/cache\">actions/cache</a> will\nfail.</p>\n<p>Upgrading to the recommended versions will not break your\nworkflows.</p>\n<h3>4.1.2</h3>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/cache/commit/9255dc7a253b0ccc959486e2bca901246202afeb\"><code>9255dc7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1686\">#1686</a>\nfrom actions/cache-v5.0.1-release</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/8ff5423e8b66eacab4e638ee52abbd2cb831366a\"><code>8ff5423</code></a>\nchore: release v5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/9233019a152bc768059ac1768b8e4403b5da16c1\"><code>9233019</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1685\">#1685</a>\nfrom salmanmkc/node24-storage-blob-fix</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b975f2bb844529e1063ad882c609b224bcd66eb6\"><code>b975f2b</code></a>\nfix: add peer property to package-lock.json for dependencies</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/d0a0e1813491d01d574c95f8d189f62622bbb2ae\"><code>d0a0e18</code></a>\nfix: update license files for <code>@​actions/cache</code>,\nfast-xml-parser, and strnum</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/74de208dcfcbe85c0e7154e7b17e4105fe2554ff\"><code>74de208</code></a>\nfix: update <code>@​actions/cache</code> to ^5.0.1 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/ac7f1152ead02e89c14b5456d14ab17591e74cfb\"><code>ac7f115</code></a>\npeer</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/b0f846b50b6061d7a2ca6f1a2fea61d4a65d1a16\"><code>b0f846b</code></a>\nfix: update <code>@​actions/cache</code> with storage-blob fix for\nNode.js 24 punycode depr...</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/a7833574556fa59680c1b7cb190c1735db73ebf0\"><code>a783357</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/cache/issues/1684\">#1684</a>\nfrom actions/prepare-cache-v5-release</li>\n<li><a\nhref=\"https://github.com/actions/cache/commit/3bb0d78750a39cefce0c2b5a0a9801052b4359ad\"><code>3bb0d78</code></a>\ndocs: highlight v5 runner requirement in releases</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/cache/compare/v3...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/cache&package-manager=github_actions&previous-version=3&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T11:05:16Z",
          "tree_id": "dd4099e7988ae3967d74ec814e3000514b317c7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c5511300aa087bb5664cd7a089e84cf01ade29a"
        },
        "date": 1765805095897,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3528.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8495.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8239.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8243.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2094.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 788.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 465.79296875,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765812134266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3477.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4861.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8419.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 26.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8223.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8218.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.046875,
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
          "distinct": false,
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765898296590,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3530.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4887.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8527.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8226.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8145.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2103.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 806.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 507.83984375,
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
          "distinct": true,
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765977787944,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3512.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4883.33984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8491.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8108.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8275.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2093.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2104.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 630.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.7578125,
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
          "id": "eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca",
          "message": "Add cache metrics for OTLP export (#1724)\n\nThis change adds cache metrics for OTLP export. \n\n### Does this change impact existing behavior?\n\nYes, adds new metrics for OTLP export\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-17T12:03:15Z",
          "tree_id": "98d1447807f41eeef7647db0e823549431bfe64a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca"
        },
        "date": 1765981353356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3842.59765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4855.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8441.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8141.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8194.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2115.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2103.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 842.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.203125,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765997592501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3640.15234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4911.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8558.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 54.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8191.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8279.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2101.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 752.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 464.32421875,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1766000570829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3536.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4898.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8627.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8158.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8102.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2112.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 793.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.5703125,
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
          "id": "deba195af5cfc231784d226a00468cffc284df27",
          "message": "Align read window with part boundaries + configurable `initial_request_size` (#1707)\n\nRe-created https://github.com/awslabs/mountpoint-s3/pull/1618, in this\nPR:\n\n- we align read window end to the part boundary for the second request\n(see `round_up_to_part_boundary` method);\n- we update mock client to allow testing of this change;\n- we add `PrefetcherConfig::initial_request_size` field and use it in\n`mount_from_config.rs` example.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMinor version change and a change log to `mountpoint-s3-fs`, will add\nlater. Patch version change to the `mountpoint-s3-fs-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T11:19:28Z",
          "tree_id": "8c01e60eb5f63bdbc01ecb41f5c66fcc5b046b1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/deba195af5cfc231784d226a00468cffc284df27"
        },
        "date": 1766410623657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3452.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4875.22265625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8606.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8216.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8240.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2114.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 756.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.29296875,
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
          "id": "7520e72e68a574e2b6839db4638e058d2a2791d9",
          "message": "Release crates, including mountpoint-s3-fs 0.8.4 (#1734)\n\nBump versions / update changelogs of the following crates prior to the\nrelease:\n\n- `mountpoint-s3-crt`\n- `mountpoint-s3-client`\n- `mountpoint-s3-fs`\n\nDiff with the previous release:\nhttps://github.com/awslabs/mountpoint-s3/compare/mountpoint-s3-fs-0.8.3..main\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T14:29:43Z",
          "tree_id": "304205e26732fe787c0e0a854d52a799eea10f3e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7520e72e68a574e2b6839db4638e058d2a2791d9"
        },
        "date": 1766422171936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3524.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4938.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8564.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 23.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8231.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8204.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2116.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 752.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 500.33984375,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766588732458,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3473.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4867.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8451.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8245.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8114.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2113.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2115.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 429.05078125,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767811515192,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3592.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4921.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8522.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 46.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8193.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8263.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 54.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2112.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 774.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 501.04296875,
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
          "id": "a449eead062b530bf8ad4c1aa735045454cf8e3f",
          "message": "Ignore bincode's unmaintained status temporarily (#1740)\n\nUntil we migrate away from bincode, ignore the [unmaintained\nstatus](https://rustsec.org/advisories/RUSTSEC-2025-0141) to unblock the\nbuilds\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-09T16:19:13Z",
          "tree_id": "ce5cd74f403ffc24db87831a33ff08e0b4219f4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a449eead062b530bf8ad4c1aa735045454cf8e3f"
        },
        "date": 1767984048368,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3436.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4839.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8417.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 26.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8217.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8209.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2114.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2116.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 979.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 414.0625,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768241874520,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3570.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4912.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8437.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8234.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8034.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2115.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 856.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.69921875,
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
          "id": "af2480220f9999c62c3c6b15bae6394452c62799",
          "message": "Correct cache io_size metric type to histogram (#1738)\n\nUntil this change, these are incorrectly recorded as counters, which do\nnot help capture the bytes get/put to cache.\n\n### Does this change impact existing behavior?\n\nYes, Changes how these metrics are recorded in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-13T07:54:22Z",
          "tree_id": "b83488b7b5583a1b1d9a9b4cdf14cb559b6ffe48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/af2480220f9999c62c3c6b15bae6394452c62799"
        },
        "date": 1768299158930,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3396.44921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4896.6328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8580.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 27.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8229.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8231.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2115.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 602.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.5625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}