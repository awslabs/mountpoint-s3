window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
        "date": 1760617935736,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4952.52412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4704.98203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5824.5671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.67705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.64921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.65908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6000.669140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.6994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5086.04384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.83271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1704.68603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.36826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1626.92958984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1285.7939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.53818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1658.51689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1079.86396484375,
            "unit": "MiB/s"
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
        "date": 1760714590323,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4894.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4117.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5750.49951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.51826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.78896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.24931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.003125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.70703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.58994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.29814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6242.25830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.54365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5170.46298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1639.94072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.041796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1733.955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1250.5759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.040625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1421.85234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1046.89990234375,
            "unit": "MiB/s"
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
        "date": 1761061430559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5063.677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4570.00439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5937.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.64462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.91982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.33515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.961328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.60234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6480.62939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.98740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5220.81318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.90458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1852.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.44892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1704.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.08310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1913.02119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1122.7345703125,
            "unit": "MiB/s"
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
        "date": 1761094105468,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5011.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4674.32314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5970.76484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.46318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.7931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.948828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.690234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.00576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6231.62646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.60810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5177.63515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.73056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1822.21904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1559.69833984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1378.4646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1886.33876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.5455078125,
            "unit": "MiB/s"
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
        "date": 1761097617643,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5097.00712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4823.83955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5877.08896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.33544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.94892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.192578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6379.51669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 252.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5232.1318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1959.695703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.81357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1449.96201171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1349.70908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.19150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1450.95595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 985.1697265625,
            "unit": "MiB/s"
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
        "date": 1761098250198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5025.30185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4620.73916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5882.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.27109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.66181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.81767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.87802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.85791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6324.17119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.81806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5184.98662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1725.67939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.5671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1515.97412109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.084375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.29228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1490.24619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.30263671875,
            "unit": "MiB/s"
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
        "date": 1761130818490,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4988.23095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4603.5865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5929.36669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.81103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.66416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.7568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.6013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.66611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6325.6439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.3712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5082.448828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.321875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1734.61787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.26708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.3453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1301.30048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.0310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1646.08037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.0572265625,
            "unit": "MiB/s"
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
        "date": 1761132870635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5001.42177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4574.18662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5848.405859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.7861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.46318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.790625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.826953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.7478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6353.4072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.28408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5114.4724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.078515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1937.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.53046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1554.41865234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1387.16728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.737890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1674.5880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1138.8583984375,
            "unit": "MiB/s"
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
        "date": 1761138323534,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4978.6685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4488.946093750001,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5838.771386718749,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.46064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.28642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.48369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.68759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.21474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.74462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6316.95009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.74521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5218.6083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1710.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.047265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1415.2232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1398.983984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.50986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1815.6900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.99169921875,
            "unit": "MiB/s"
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
        "date": 1761140840695,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5047.9494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4502.945507812499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5880.98349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.8572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.0669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.64794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.54130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.66259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.02890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6239.18837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.221484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5267.02216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.0728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1743.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.1169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1530.480078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.3142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.5025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1412.9294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.44267578125,
            "unit": "MiB/s"
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
        "date": 1761156522933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5048.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4586.89140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5786.895898437499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.1076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.80146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.74619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.924609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.05615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6235.66669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.36845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4960.93759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.83203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1885.3771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1424.9271484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1424.50498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.31220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1669.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1133.89013671875,
            "unit": "MiB/s"
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
        "date": 1761157549109,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4892.09755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4503.537890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5819.161035156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.56220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.76875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.22431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.66328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.63212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.82763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6241.38203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5171.294140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.7431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1696.3947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.0470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1577.78330078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1279.46669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.820703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1766.08154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1140.14404296875,
            "unit": "MiB/s"
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
        "date": 1761219992766,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4994.1005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4476.45615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5887.232519531251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.19951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.65849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.1552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.65888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.83828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.20634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.014453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6399.56064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.57666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5248.2314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.43623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1970.436328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1555.21513671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.04423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.1634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1817.43330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 971.31826171875,
            "unit": "MiB/s"
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
        "date": 1761235568942,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4992.9599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4631.3416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5812.328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.5099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.07607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.07822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.6763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.68564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.5,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.03173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6234.76083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.80869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5206.7740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.0720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1538.98623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1493.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1414.52197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1795.89541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1101.7791015625,
            "unit": "MiB/s"
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
        "date": 1761326057158,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5057.7451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4523.82626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5864.6109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.1427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.96572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.65908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.85849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.26865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6242.75859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.046484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5163.03583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.37421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1874.08564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.641015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1642.25224609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1275.45751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.7162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1947.78154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1130.687109375,
            "unit": "MiB/s"
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
        "date": 1761572477272,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4975.2671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4705.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5866.917578125001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.69365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.65419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.6341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6231.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.27744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5159.4763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1747.39775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.2373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1498.861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1353.8494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.70087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1498.16279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.47919921875,
            "unit": "MiB/s"
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
        "date": 1761573127091,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5025.7943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4512.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5847.1626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.3166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.17763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.79404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.3076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6270.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.0462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5230.07861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 238.66689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1587.15244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.5357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.04384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1221.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.16396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1433.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1144.7173828125,
            "unit": "MiB/s"
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
        "date": 1761594543165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4968.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4722.362109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5863.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.784375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.21025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.66796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.39306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6226.58203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.79609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5067.33671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.47197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1870.13955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.69736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1561.8884765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1326.15390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.95634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1956.494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 972.7353515625,
            "unit": "MiB/s"
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
        "date": 1761612634749,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4991.82470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4503.084179687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5844.30537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.49443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.43154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.546484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.27138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6324.5537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.928515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5209.31513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.61044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1953.95498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.87978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1443.08955078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1268.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.39267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1729.45068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 957.8798828125,
            "unit": "MiB/s"
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
        "date": 1761648954604,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5006.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4528.85791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5797.1244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.97958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.55078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.04765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.319140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.13974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5944.13720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.81396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5170.86298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.90546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.19658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.58544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1579.375390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1251.8091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1934.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1108.453515625,
            "unit": "MiB/s"
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
        "date": 1761653138618,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5027.5921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4697.24453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5831.857519531251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.46884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.68017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6172.24091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.2927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5249.3611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.60107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1739.46904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.9740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1470.54970703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1315.907421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.31328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1608.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.12265625,
            "unit": "MiB/s"
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
        "date": 1761666750163,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5070.59912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4574.351855468751,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5947.707128906251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.98701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.5521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6487.41064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.21494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5018.76982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.743359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1726.8181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1663.77900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1281.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.58583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1817.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1143.5466796875,
            "unit": "MiB/s"
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
        "date": 1761685202636,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5032.47509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4567.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5940.58984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.22548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.5611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.23408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.28837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.090234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6256.0935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.46259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5219.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.04423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1721.9513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1639.52900390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1258.747265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.15107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1406.91142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1076.87353515625,
            "unit": "MiB/s"
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
        "date": 1761693812731,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5023.555078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4575.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5901.04853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.74150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.6041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.94853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.85458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.78427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.70576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6239.848828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.2142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5200.1171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.0861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1749.480859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.67646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1597.9923828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1310.01181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1884.7916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1004.71181640625,
            "unit": "MiB/s"
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
        "date": 1761766752165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5023.15537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4608.71875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5768.7380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.32900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.55927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.49228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.05595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6238.9298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.83486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5242.5857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.35048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1989.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.483984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1498.909765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1344.08876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.59638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1897.79560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.3353515625,
            "unit": "MiB/s"
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
        "date": 1761776318219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4997.13583984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4510.79970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5601.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.7244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.61474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.8595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.4650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.72109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6167.98955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 247.10400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5029.6826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.18544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1815.0806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1654.4681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1219.22646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.25634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1540.3404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.288671875,
            "unit": "MiB/s"
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
        "date": 1761784060710,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4943.85966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4419.4677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5706.76103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.44990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.15859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.65791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.022265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.23662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6273.8083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.01318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5055.81826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.44384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1894.79814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.00009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1529.31220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1243.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.172265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1663.16064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1116.78466796875,
            "unit": "MiB/s"
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
        "date": 1761834398232,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4973.165234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4485.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5881.346484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.89130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.53125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.1712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.44267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.10205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6144.32177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5148.6001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.20810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.73212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1460.82529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1263.72216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1709.01123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1114.88720703125,
            "unit": "MiB/s"
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
        "date": 1761840384613,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5033.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4555.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5680.06767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.2583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.67900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.9087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.62177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.317578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.6765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.07099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6208.61943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.49541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5100.8244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.71533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1811.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.83212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1438.83837890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.64345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.0732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1836.05234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 943.91552734375,
            "unit": "MiB/s"
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
        "date": 1761943600966,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5077.22587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4525.540722656249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5896.598535156249,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.47138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.71650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.16591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.50400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.0609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6436.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.30712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5034.050390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.5798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1964.17421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.52802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1502.08525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1340.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1724.2453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.9453125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1761943602077,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}