window.BENCHMARK_DATA = {
  "lastUpdate": 1761840387105,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1760714592793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3605.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4980.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8488.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8238.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8163.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2107.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 606.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 478.3203125,
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
        "date": 1761061432738,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3372.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4785.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8709,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 24.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8189.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8193.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 432.359375,
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
        "date": 1761094107617,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3419.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4831.59375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8498.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8095.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8182.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2114.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 711.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.25390625,
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
        "date": 1761097619958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3438.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4837.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8401.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8183.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8188.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2095.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2111.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 668.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 435.03515625,
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
        "date": 1761098251893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3394.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4850.59765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8485.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8150.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8256.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2096.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2111.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 663.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 468.75390625,
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
          "id": "1b4bb3e657a10f8e36b12bfabcc585005f88ea1b",
          "message": "Update on_telemetry to use operation_name rather than request_type for metrics (#1669)\n\nPreviously, Mountpoint metrics reported quite a lot of S3 operations as\n`\"Default\"` operations. This was due to leaking of the underlying meta\nrequest abstraction.\n\nThis change replaces that by using the `operation_name` provided by the\nCRT request metrics struct. This should cover all S3 operations we care\nabout.\n\n### Does this change impact existing behavior?\n\nThis change fixes metric attributes. It is not considered a breaking\nchange, as the metric log format is considered \"unstable\".\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor fix to metric attributes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-10-22T07:52:12Z",
          "tree_id": "0fd6e70a75b7f33f0b613c6e051b40080e55e394",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1b4bb3e657a10f8e36b12bfabcc585005f88ea1b"
        },
        "date": 1761130820714,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3480.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4880.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8466.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 51.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 18.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8178.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8216.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 746.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.5,
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
          "id": "63a6268a8b9905c63b6c7d2026b29a87159bcb6b",
          "message": "Update PUBLISHING_CRATES.md (#1663)\n\nUpdate PUBLISHING_CRATES.md.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-22T08:45:53Z",
          "tree_id": "ce9d90ba3dc72c1f28f2572952e8e510910750ef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63a6268a8b9905c63b6c7d2026b29a87159bcb6b"
        },
        "date": 1761132872674,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3452.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4862.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8466.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 48.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8254.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8252.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 499.54296875,
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
          "id": "e82f217ed0d7fa1e593d736012e8d16f34a36fa8",
          "message": "benchmark: Refactor resource monitoring tools into separate classes (#1660)\n\nExtract individual monitoring tools (mpstat, bwm-ng, perf-stat,\nflamegraph) from benchmark ResourceMonitoring class into separate tool\nclasses that implement a common MonitoringTool interface. This improves\nbenchmark code maintainability and makes adding new monitoring tools\neasier.\n\n- Add benchmark/monitoring package with base MonitoringTool ABC\n- Extract MpstatTool, BwmNgTool, PerfStatTool, FlamegraphTool classes\n- Refactor ResourceMonitoring to manage list of tool instances\n- Maintain backward compatibility with existing managed() API\n- Add unit tests\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-10-22T10:52:07Z",
          "tree_id": "2d8b490bd77bd7eff7f94507ab5662f5a9ff1346",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e82f217ed0d7fa1e593d736012e8d16f34a36fa8"
        },
        "date": 1761138325088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3498.85546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4847.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8514.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 53.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8189.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8229.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2107.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2114.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2106.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 794.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 486.01953125,
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
          "id": "695d29b07524679686f9a559838a5a7cfba0c1cd",
          "message": "Update S3 and FUSE metrics for clarity  (#1653)\n\nRename S3 and FUSE metrics in preparation for OTLP export. Update FUSE\nidle threads from gauge to histogram for better visibility into threads\nutilisation, instead of point of time values.\n\nThis change also adds integration tests for metrics verification, and\nupdates documentation with new metric names.\n\n### Does this change impact existing behavior?\n\nYes, it changes metrics names in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, needs a changelog entry and version change for mountpoint-s3-fs\ncrate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-22T11:32:58Z",
          "tree_id": "93008a55736c23df8be3f36152b205aa3b4676a2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/695d29b07524679686f9a559838a5a7cfba0c1cd"
        },
        "date": 1761140842919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3558.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4850.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8505.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8173.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8275.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 51.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2105.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 626.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 527.2578125,
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
          "id": "40be375ac43093f12d655f8368c540e889b19109",
          "message": "Add AL2023 Packaging and CI (#1637)\n\n**What changed and why?**\n\nAdded AL2023 rpm packaging infrastructure allowing for al2023 rpm\nbuilds, and spec file creation.\n\nIn addition, added new GitHub Actions workflow that automatically tests\nRPM package builds for Amazon Linux 2023. The workflow creates both\nsource and binary RPMs using mock in a clean AL2023 container\nenvironment, then validates the installation and basic functionality of\nthe mount-s3 package.\n\n\n**Does this change impact existing behavior?**\n\nNo\n\n**Does this change need a changelog entry? Does it require a version\nchange?**\n\nNo\n\n---\n\n\n\n\n\n\n\n\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-22T15:54:16Z",
          "tree_id": "34dc0f852ccfef9581584c0243b5704f18da1b71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/40be375ac43093f12d655f8368c540e889b19109"
        },
        "date": 1761156524956,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3574.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4938.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8508.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8195.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8211.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2111.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2107.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 511.0234375,
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
          "id": "82779ea70a849f02d17eb89381fe1f53ef0185b3",
          "message": "Fix readdir race condition with concurrent deletions (#1648)\n\nFix \"File does not exist\" errors in readdir operations\n([#1614](https://github.com/awslabs/mountpoint-s3/pull/1614)) that could\noccur during concurrent directory listing.\n\nRoot Cause: update_from_remote fails when processing a local entry in\nReaddirHandle::next() because the inode is removed from the parent’s\nwriting_children. This was incorrectly treated as FileDoesNotExist.\n\n\nChanges made:\n\n- Altered inode update logic for readdir: when a ReaddirEntry is known\nto be local, the update is skipped.\n\n- Updated directory listing to handle concurrent modifications\ngracefully.\n\n- Ensures that files removed from writing_children are skipped without\ncausing errors.\n\n### Does this change impact existing behavior?\n\nNo breaking changes. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, this requires a changelog entry\nNo version change needed.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-22T16:04:08Z",
          "tree_id": "5377abdbca5e4700852563856560a4e624390111",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/82779ea70a849f02d17eb89381fe1f53ef0185b3"
        },
        "date": 1761157551327,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3625.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4888.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8483.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8244.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8089.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2108.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2109.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 846.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.2734375,
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
          "id": "d38a81f79fbdddbbff49eb24348b7eab49b70fb0",
          "message": "Add integration test for OTel integration (#1656)\n\nThis change tests Mountpoint metrics integration with OTel collector\n\n\n\n### Does this change impact existing behavior?\n\nNo, adds an integration test\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, adds an integration test\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-23T09:31:51Z",
          "tree_id": "0fa8794b7a107730527fcef52824fc79c4d5a03c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d38a81f79fbdddbbff49eb24348b7eab49b70fb0"
        },
        "date": 1761219994905,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3578.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4885.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8351.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 48.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8248.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8228.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2097.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2103.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2101.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 826.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.76171875,
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
          "id": "a76b4814e6f4c6824537b0174b2e5e4da03658a2",
          "message": "Propagate -O flags when building aws-lc (#1673)\n\nAddress an issue with our build of `aws-lc` using the `cmake` crate\nwhere optimization flags were not propagated during the configure step\nand could resulting in failed builds under certain configurations (e.g.\nrpmbuild).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-23T13:49:07Z",
          "tree_id": "49ecf4d633ae0f51cde79351a666d75b41dec09f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a76b4814e6f4c6824537b0174b2e5e4da03658a2"
        },
        "date": 1761235571214,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3589.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4897.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8623.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8177.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8070.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2106.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2112.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2100.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 547.5703125,
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
          "id": "c8b45ba1816b6f482b8975e1b89bf3b551825b2d",
          "message": "Keep a constant memory reservation for backwards seek for each fh (#1631)\n\nCurrently we reserve memory for backwards seek only when an actual seek\noccurs. The memory is used even if there is no such seek. Also we\nreserve too few memory, up to `1MiB`, while the whole extra buffer of\nsize `part_size` may be kept in RAM.\n\nWith this change MP makes a memory reservation upon the creation of\n`PrefetchGetObject` and releases memory once it is dropped. This is done\nin addition to the existing mechanism which reserves memory in\n`PartQueue::push_front`.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nPatch version change and a change log to `mountpoint-s3-fs`, will add\nlater.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-24T14:57:33Z",
          "tree_id": "6e2734f5acba1db6ce5eeb6f2ecc7e635d25decc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8b45ba1816b6f482b8975e1b89bf3b551825b2d"
        },
        "date": 1761326059541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3481.69140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4861.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8495.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8254.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8135.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 52.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2106.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 767.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.02734375,
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
          "id": "026d40f8f5805e4c6e31c85756b5db1e58a5b39d",
          "message": "Bump actions/download-artifact from 4 to 6 (#1679)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 4 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README for download-artifact v5 changes by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/417\">actions/download-artifact#417</a></li>\n<li>Update README with artifact extraction details by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/424\">actions/download-artifact#424</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v6.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/438\">actions/download-artifact#438</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/431\">actions/download-artifact#431</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v5...v6.0.0\">https://github.com/actions/download-artifact/compare/v5...v6.0.0</a></p>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/407\">actions/download-artifact#407</a></li>\n<li>BREAKING fix: inconsistent path behavior for single artifact\ndownloads by ID by <a\nhref=\"https://github.com/GrantBirki\"><code>@​GrantBirki</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/416\">actions/download-artifact#416</a></li>\n</ul>\n<h2>v5.0.0</h2>\n<h3>🚨 Breaking Change</h3>\n<p>This release fixes an inconsistency in path behavior for single\nartifact downloads by ID. <strong>If you're downloading single artifacts\nby ID, the output path may change.</strong></p>\n<h4>What Changed</h4>\n<p>Previously, <strong>single artifact downloads</strong> behaved\ndifferently depending on how you specified the artifact:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (direct)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/my-artifact/</code> (nested)</li>\n</ul>\n<p>Now both methods are consistent:</p>\n<ul>\n<li><strong>By name</strong>: <code>name: my-artifact</code> → extracted\nto <code>path/</code> (unchanged)</li>\n<li><strong>By ID</strong>: <code>artifact-ids: 12345</code> → extracted\nto <code>path/</code> (fixed - now direct)</li>\n</ul>\n<h4>Migration Guide</h4>\n<h5>✅ No Action Needed If:</h5>\n<ul>\n<li>You download artifacts by <strong>name</strong></li>\n<li>You download <strong>multiple</strong> artifacts by ID</li>\n<li>You already use <code>merge-multiple: true</code> as a\nworkaround</li>\n</ul>\n<h5>⚠️ Action Required If:</h5>\n<p>You download <strong>single artifacts by ID</strong> and your\nworkflows expect the nested directory structure.</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/018cc2cf5baa6db3ef3c5f8a56943fffe632ef53\"><code>018cc2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/438\">#438</a>\nfrom actions/danwkennedy/prepare-6.0.0</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/815651c680ffe1c95719d0ed08aba1a2f9d5c177\"><code>815651c</code></a>\nRevert &quot;Remove <code>github.dep.yml</code>&quot;</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/bb3a066a8babc8ed7b3e4218896c548fe34e7115\"><code>bb3a066</code></a>\nRemove <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fa1ce46bbd11b8387539af12741055a76dfdf804\"><code>fa1ce46</code></a>\nPrepare <code>v6.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/4a24838f3d5601fd639834081e118c2995d51e1c\"><code>4a24838</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/431\">#431</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/5e3251c4ff5a32e4cf8dd4adaee0e692365237ae\"><code>5e3251c</code></a>\nReadme: spell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/abefc31eafcfbdf6c5336127c1346fdae79ff41c\"><code>abefc31</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/424\">#424</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/ac43a6070aa7db8a41e756e7a2846221edca7027\"><code>ac43a60</code></a>\nUpdate README with artifact extraction details</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/de96f4613b77ec03b5cf633e7c350c32bd3c5660\"><code>de96f46</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/417\">#417</a>\nfrom actions/yacaovsnc/update_readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/7993cb44e9052f2f08f9b828ae5ef3ecca7d2ac7\"><code>7993cb4</code></a>\nRemove migration guide for artifact download changes</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v4...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=4&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T11:27:22Z",
          "tree_id": "96851d2fe66eb073294c7bacd185736752836da9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/026d40f8f5805e4c6e31c85756b5db1e58a5b39d"
        },
        "date": 1761572479153,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3427.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4881,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8535.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 20.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8214.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8244.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2105.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.984375,
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
          "id": "3ad82143185cad3545d69f4d014d25ced59c09e2",
          "message": "Bump actions/upload-artifact from 4 to 5 (#1680)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 4 to 5.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v5.0.0</h2>\n<h2>What's Changed</h2>\n<p><strong>BREAKING CHANGE:</strong> this update supports Node\n<code>v24.x</code>. This is not a breaking change per-se but we're\ntreating it as such.</p>\n<ul>\n<li>Update README.md by <a\nhref=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li>Update README.md by <a\nhref=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li>Readme: spell out the first use of GHES by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n<li>Bump <code>@actions/artifact</code> to <code>v4.0.0</code></li>\n<li>Prepare <code>v5.0.0</code> by <a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/734\">actions/upload-artifact#734</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/GhadimiR\"><code>@​GhadimiR</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/681\">actions/upload-artifact#681</a></li>\n<li><a href=\"https://github.com/nebuk89\"><code>@​nebuk89</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/712\">actions/upload-artifact#712</a></li>\n<li><a\nhref=\"https://github.com/danwkennedy\"><code>@​danwkennedy</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/727\">actions/upload-artifact#727</a></li>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/725\">actions/upload-artifact#725</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5.0.0\">https://github.com/actions/upload-artifact/compare/v4...v5.0.0</a></p>\n<h2>v4.6.2</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.3.2 package &amp; prepare for new\nupload-artifact release by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/685\">actions/upload-artifact#685</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.2\">https://github.com/actions/upload-artifact/compare/v4...v4.6.2</a></p>\n<h2>v4.6.1</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Update to use artifact 2.2.2 package by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/673\">actions/upload-artifact#673</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.1\">https://github.com/actions/upload-artifact/compare/v4...v4.6.1</a></p>\n<h2>v4.6.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>Expose env vars to control concurrency and timeout by <a\nhref=\"https://github.com/yacaovsnc\"><code>@​yacaovsnc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/662\">actions/upload-artifact#662</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v4.6.0\">https://github.com/actions/upload-artifact/compare/v4...v4.6.0</a></p>\n<h2>v4.5.0</h2>\n<h2>What's Changed</h2>\n<ul>\n<li>fix: deprecated <code>Node.js</code> version in action by <a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n<li>Add new <code>artifact-digest</code> output by <a\nhref=\"https://github.com/bdehamer\"><code>@​bdehamer</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/656\">actions/upload-artifact#656</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/hamirmahal\"><code>@​hamirmahal</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/578\">actions/upload-artifact#578</a></li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/330a01c490aca151604b8cf639adc76d48f6c5d4\"><code>330a01c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/734\">#734</a>\nfrom actions/danwkennedy/prepare-5.0.0</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/03f282445299bbefc96171af272a984663b63a26\"><code>03f2824</code></a>\nUpdate <code>github.dep.yml</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/905a1ecb5915b264cbc519e4eb415b5d82916018\"><code>905a1ec</code></a>\nPrepare <code>v5.0.0</code></li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2d9f9cdfa99fedaddba68e9b5b5c281eca26cc63\"><code>2d9f9cd</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/725\">#725</a>\nfrom patrikpolyak/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9687587dec67f2a8bc69104e183d311c42af6d6f\"><code>9687587</code></a>\nMerge branch 'main' into patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/2848b2cda0e5190984587ec6bb1f36730ca78d50\"><code>2848b2c</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/727\">#727</a>\nfrom danwkennedy/patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/9b511775fd9ce8c5710b38eea671f856de0e70a7\"><code>9b51177</code></a>\nSpell out the first use of GHES</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/cd231ca1eda77976a84805c4194a1954f56b0727\"><code>cd231ca</code></a>\nUpdate GHES guidance to include reference to Node 20 version</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/de65e23aa2b7e23d713bb51fbfcb6d502f8667d8\"><code>de65e23</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/712\">#712</a>\nfrom actions/nebuk89-patch-1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/8747d8cd7632611ad6060b528f3e0f654c98869c\"><code>8747d8c</code></a>\nUpdate README.md</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v4...v5\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=4&new-version=5)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T11:36:44Z",
          "tree_id": "d4454ef26a8fab29b6110d4e62b432b07f6125a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3ad82143185cad3545d69f4d014d25ced59c09e2"
        },
        "date": 1761573129109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3456.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4831.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8497.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 50.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8188.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 50.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8068.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2100.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2113.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2112.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 616.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.29296875,
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
          "id": "a931969e3482d5dd76e1ae778537d8a95852563e",
          "message": "Release crates including mounpoint-s3-fs 0.8.2 (#1682)\n\nRelease mounpoint-s3-fs 0.8.2 and dependencies.\n\nChanges since last release:\n[compare](https://github.com/awslabs/mountpoint-s3/compare/5502a861ee11eaa6dc61aa8e711262b2d4388d8c...main).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-10-27T17:23:18Z",
          "tree_id": "b94b58918882329a36767c147240eee78e02962d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a931969e3482d5dd76e1ae778537d8a95852563e"
        },
        "date": 1761594545160,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3330.87890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4833.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8432.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 46.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 17.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8200.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8124.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2110.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2109.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 738.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 412.265625,
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
      }
    ]
  }
}