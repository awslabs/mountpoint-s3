window.BENCHMARK_DATA = {
  "lastUpdate": 1761942610409,
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
        "date": 1761129826740,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2328.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2447.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2194.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2365.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2238.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2181.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 37.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2168.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.8828125,
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
        "date": 1761131933489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2194.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2416.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2288.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 24.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2319.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2173.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2180.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2199.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.1640625,
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
        "date": 1761137464793,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2209.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2200.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 48.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2230.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2172.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2173.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.171875,
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
        "date": 1761139899959,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2170.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2184.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 41.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2195.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2173.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2178.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2402.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2193.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.4609375,
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
        "date": 1761155609865,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2182.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2175.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2193.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2181.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.36328125,
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
        "date": 1761156527665,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2267.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2182.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2180.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2182.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2232.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.49609375,
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
        "date": 1761219045778,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2200.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2168.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2183.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 50.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2210.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2318.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2166.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2173.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 34.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.41796875,
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
        "date": 1761234639134,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2182.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2179.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 40.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2410.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2190.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2195.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2171.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2186.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.60546875,
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
        "date": 1761325075515,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 35.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2181.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2186.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2327.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2194.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2203.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.08203125,
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
        "date": 1761571502747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2440.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2186.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2304.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2196.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 38.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2203.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 34.2734375,
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
        "date": 1761572083958,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2188.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2198.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 48.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 42.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2206.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2171.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2175.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.8125,
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
        "date": 1761593635943,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2180.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2412.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2175.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2196.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2166.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2192.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 27.609375,
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
        "date": 1761648011200,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2196.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2433.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2191.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 50.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2178.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2545.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.28515625,
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
        "date": 1761652160864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2186.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2200.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2473.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2391.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2184.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2185.8359375,
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
        "date": 1761665824325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2368.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2215.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2188.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2190.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2412.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2190.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2190.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2204.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 38.09375,
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
        "date": 1761684301759,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 35.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 59.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2182.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2185.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2200.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.97265625,
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
        "date": 1761692837284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2224.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2186.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2175.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 32.27734375,
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
        "date": 1761765852348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2169.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2197.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.48046875,
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
        "date": 1761775371301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2192.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2185.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2179.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2172.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2303.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2194.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2201,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2199.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.66015625,
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
        "date": 1761783099167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2302.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 35.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2176.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3097.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2197.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2598.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2168.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2187.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.92578125,
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
        "date": 1761833501945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2194.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2187.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2217.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 39.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2453.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2193.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.54296875,
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
        "date": 1761839424979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2184.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.78515625,
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
        "date": 1761942610353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2341.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.1015625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}