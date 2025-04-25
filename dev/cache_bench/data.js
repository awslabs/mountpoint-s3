window.BENCHMARK_DATA = {
  "lastUpdate": 1745594807839,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743510386198,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1284.6939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1983.63671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 797.105078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.69521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.95615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 284.59990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3649.89521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4088.97646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.92607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1178.4474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1404.4728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 986.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1221.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1007.96748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1266.674609375,
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
          "id": "a776670203be61492db27865158ab5a0fd38a323",
          "message": "Refactor internal S3 client methods to initiate meta-requests (#1337)\n\nRe-organize the group of internal methods in the S3 client used to\ninitiate CRT meta-requests. Follow-up to the changes in #1334.\n\nWith this change, `S3CrtClientInner` provides 4 methods:\n* `meta_request_with_callbacks`: the lowest-level method, which allows\nmore customization through callbacks. It is the basis for the other\nmethods and it is used directly by `get_object` and `put_object`.\n* `meta_request_with_body_payload`: simpler variant that returns the\nresponse body. Used by `list_object` and `get_object_attributes`.\n* `meta_request_with_headers_payload`: variant returning the headers,\nbut no body. Used by `head_object` and `put_object_single`.\n* `meta_request_without_payload`: simplest variant, only returns error.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Internal change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T14:01:57Z",
          "tree_id": "f180fa28ec38620e474990e96c4f5c2d9f485fa0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a776670203be61492db27865158ab5a0fd38a323"
        },
        "date": 1743523307306,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2013.883203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.29775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.68525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 400.74140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 248.8435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3664.42744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4019.02646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.33955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1200.91083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 781.4318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1087.2857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1100.89287109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1079.5224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 928.90185546875,
            "unit": "MiB/s"
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
          "id": "829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4",
          "message": "Bump `mountpoint-s3` version to 1.16.0 (#1341)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:22:09Z",
          "tree_id": "455fb125eca9141a8377ce09f5b30ccedfea1c51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4"
        },
        "date": 1743531758533,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.280859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.3109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.67021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.35634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.963671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 405.87587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.0255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 344.16474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3609.45830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.84189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.4947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1167.977734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 847.9580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 895.76796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1078.9294921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1073.42705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1220.52666015625,
            "unit": "MiB/s"
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
          "id": "c717bdb788024b96da7b5678a8ff62176e24bac8",
          "message": "Release Mountpoint v1.16.0 and Rust crates (#1342)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:59:49Z",
          "tree_id": "d762fcd5550e42bb84246e815dfeac5c788fcf3a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c717bdb788024b96da7b5678a8ff62176e24bac8"
        },
        "date": 1743533943156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.45634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1966.553125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 821.680859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.5427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.47529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 423.82041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.32216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.37958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3639.90185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3961.62919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1196.4451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1148.8654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 889.28994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1391.33310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1301.42275390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1057.23310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1149.5001953125,
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
          "id": "338e400b2e6dae2ad2a231f01e4d2de4149bdd25",
          "message": "Create a package with custom extension (#1340)\n\nAdd a `--pkg-extensions` CLI flag which specifies which packages to\nbuild and how to name them. Package type is inferred from top-level\ncomponent of the provided extension.\n\nAlso add a validation script for such packages.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-02T15:06:43Z",
          "tree_id": "ba352c13bf71fbe020d339a581abd0e4b8f6e095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338e400b2e6dae2ad2a231f01e4d2de4149bdd25"
        },
        "date": 1743613502289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.5626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2006.42255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.63330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.23505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 594.85048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 278.2201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3629.30966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4087.33740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1274.627734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1173.04365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 885.84755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1060.374609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1139.6189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1060.97412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1014.928125,
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
          "id": "6611aaf5822d42dbb208a18e626ab462163a80cf",
          "message": "Reduce memory usage for strings in inode metadata (#1346)\n\nReduce memory usage for strings included in inode metadata, like object\nkeys, etags, and inode names. Using a `Box<str>` instead of a `String`\nensures that no slack capacity is wasted and saves the `usize` field to\nkeep track of the buffer capacity.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-03T12:14:24Z",
          "tree_id": "25051904ee5fec89f725aaa1df0b2bb0cff986a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6611aaf5822d42dbb208a18e626ab462163a80cf"
        },
        "date": 1743689784138,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1958.32158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.32646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.969140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 428.13935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.1599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 339.64326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3699.24580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3940.1873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.894140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.04765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1178.88017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 814.58076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1185.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 998.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1017.95615234375,
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
          "id": "f248ce85c9a43b1a6411050c9129d0cdebfe4670",
          "message": "Release 1.16.1 (#1349)\n\nUpdate the changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T13:04:52Z",
          "tree_id": "b72211dcdd3f5ad08ef54972072c4ce78b027872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f248ce85c9a43b1a6411050c9129d0cdebfe4670"
        },
        "date": 1743692743216,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.19599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1926.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.444140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.3572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.18876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 521.549609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.43984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.85986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3900.835546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3966.42548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1183.56708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1127.859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1423.876171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1490.0255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1067.79892578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.38046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1149.54951171875,
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
          "id": "f488a2d17a96131408602da5cb8b9a46a0116b01",
          "message": "Update changelog for mountpoint-s3-fs 0.1.2 (#1351)\n\nUpdate changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T14:41:22Z",
          "tree_id": "3013fb2a4653732d870d6e1ec6b2c4e31b82f41b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f488a2d17a96131408602da5cb8b9a46a0116b01"
        },
        "date": 1743698529748,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.2140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1987.1841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.34248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1507.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.19453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 447.28037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 209.46787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.87998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3488.43740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3935.14833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1198.1927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.72099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 813.34833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 807.04912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1025.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1218.8740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 970.10888671875,
            "unit": "MiB/s"
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
          "id": "1053739c23bcf5f2e44b46bc0ff84b91ff22e62a",
          "message": "Update tokio versions (#1353)\n\nUpdate tokio to newest version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-07T08:43:36Z",
          "tree_id": "3d1184a87bc0645686b4851484fe84075f4c9872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1053739c23bcf5f2e44b46bc0ff84b91ff22e62a"
        },
        "date": 1744022643247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.722265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1960.4923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.7818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.54052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.06357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 591.848828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 304.99052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3734.7517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4016.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1238.0189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1186.5814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 862.884375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1470.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1053.50517578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1272.08291015625,
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
          "id": "2a2f84fc979af46e6333bbc21cb6592cbe25b713",
          "message": "Update instructions for publishing crates (#1350)\n\nUpdate the guidance for publishing crates to include `mountpoint-s3-fs`\nand `mountpoint-s3-fuser`, in addition to the client crates.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-07T12:18:48Z",
          "tree_id": "a48f3eb0e3a5bf03430d8eb54716991b0b95f9d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a2f84fc979af46e6333bbc21cb6592cbe25b713"
        },
        "date": 1744035406923,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1271.30302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1959.27001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.449609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.65517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.07763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.243359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.37041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3625.96484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3950.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1206.54326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1198.4833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 853.15087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 971.5794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1030.1951171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1103.95390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1219.18720703125,
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
          "id": "fc73518864ad2aac7e1eeb6d1ae2afb58a55663e",
          "message": "Fix an issue where GetObject requests may not be cancelled (#1355)\n\nThe change in #1334 introduced an issue where a GetObject request would\nstill run to completion if the future returned by the `get_object`\nmethod in `S3CrtClient` was dropped before being ready.\n\nIn Mountpoint, this would affect random read workloads where dropped\nprefetcher requests would not always be cancelled, resulting in reduced\nthroughput and increased memory usage.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2025-04-09T11:10:41Z",
          "tree_id": "3896bb8143c896f86c4cad3afaa50c5d7f8fa84f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc73518864ad2aac7e1eeb6d1ae2afb58a55663e"
        },
        "date": 1744204230084,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1289.941796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.98828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.300390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1453.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.613671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.87451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.315625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3606.20224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4049.76943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1187.50029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1309.81171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1076.01376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1389.2740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1014.6462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1068.7240234375,
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
          "id": "a56801141e8c48b3138bf4ce666f900af22ab5e0",
          "message": "Prepare for 1.16.2 release (#1357)\n\nUpdate CHANGELOGs (including changes from\n`mountpoint-s3-client-0.13.3`).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-09T14:03:28Z",
          "tree_id": "7c98bc87c139e924fe379a0b5b4cc650a05ca982",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a56801141e8c48b3138bf4ce666f900af22ab5e0"
        },
        "date": 1744214693356,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2011.13828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 806.953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1446.18125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.9060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.13837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 335.35302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3557.24697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4158.8458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1203.01572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.0619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1378.971484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 993.41650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1065.1849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1062.07294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.65595703125,
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
          "distinct": false,
          "id": "b04724d929f2c529332e71d744a06be7a2c9c1bb",
          "message": "Update client_benchmark to report Gib/s, disable ANSI in logs (#1361)\n\nReport throughput in Gib/s and disable ANSI escape characters in\nbenchmark logs.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-10T13:55:01Z",
          "tree_id": "6e40bdae66b7c4bad63691031ac3c046c43567f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04724d929f2c529332e71d744a06be7a2c9c1bb"
        },
        "date": 1744300351859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.81982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2027.5060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 786.47578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.45673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.90615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 400.60537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 195.04208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.90654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3424.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3938.453515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1180.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1160.81220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 804.54931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 975.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1348.45205078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1200.76279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1113.3509765625,
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
          "id": "e85566e5bd85e295f490b5f80ae05f5d0fe966e3",
          "message": "Make CRT memory limit configurable in Mountpoint's S3 client (#1363)\n\nThis is useful for benchmarking Mountpoint client with different memory\nlimits.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for the client. Updated minor version of `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-11T11:18:49Z",
          "tree_id": "91d35f68fc39337602d0811b5a2ab0f567841a51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e85566e5bd85e295f490b5f80ae05f5d0fe966e3"
        },
        "date": 1744377528858,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.9560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.670703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1467.53896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.2099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 459.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.00830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 287.84892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3607.74560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4028.55361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.23251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1158.36201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1186.16767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1311.4673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.526171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.80478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 997.67451171875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "d3572ed4b64cec0852afc1a14be375bb7667f37d",
          "message": "Return `GetRequestTerminatedUnexpectedly` error if first `GetObject` request terminates early (#1360)\n\nTo read data from S3, we use `read_from_client_stream` method. This\nmethod creates two `GetObject` requests, with different ranges (if there\nare enough data to read):\n1. Starting position to `initial_read_window_size` (by default 1.125\nMiB)\n2. Starting position + `initial_read_window_size` to end position (by\ndefault end of the object)\n\nTo limit memory usage, `read_from_client_stream` applies a back pressure\nbetween these two requests. It doesn't send the second request until the\nhalf of the first request has been consumed (signalled via\n`BackpressureController::send_feedback`). It understands this by using\n`BackpressureLimiter::wait_for_read_window_increment(<second request\nstarting pos>).await`. Therefore, the `read_from_client_stream` assumes\nthat, the consumer will consume first request and then will increase the\nread window. This could fail if a faulty `ObjectClient` returns a\n`GetObject` stream that terminates early before producing the whole\nrequested range.\n\nThis PR fails at runtime if a faulty client returns less data than we\nexpect. Previously, the `read_from_client_stream` would hang at\n`wait_for_read_window_increment` call forever.\n\n\n### Does this change impact existing behavior?\n\nNo breaking change, Mountpoint will return an `read_from_client_stream`\nerror instead of hanging forever if this issue happens.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nProbably doesn't require a changelog entry. This PR also makes some\nbreaking changes on `FailureClient` in `mountpoint-s3-client` crate, but\nthe `FailureClient` seems like doc hidden and not sure if it requires a\nchangelog entry as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:17:27Z",
          "tree_id": "4cce47aaa62b9ae47b854c8792c219e2eb923fdd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3572ed4b64cec0852afc1a14be375bb7667f37d"
        },
        "date": 1744391888030,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1260.46171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2006.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.8142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.63095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.89765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 461.6900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.9482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.18623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3677.72177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4186.97861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.22724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1404.74267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 876.90693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1176.6095703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.2556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1231.4583984375,
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
          "id": "c60658bbafad5fc405746dde8e7af72b7f6597e4",
          "message": "Update CONTRIBUTING.md to describe in more detail version number changes (#1365)\n\nThis change updates the contributing guide following the decision to\ninterpret new features/functionality as \"patch\" versions for unstable\ncrates (0.x.y). We document it here to avoid future ambiguity.\n\nSome minor outdated documentation is also updated.\n\n### Does this change impact existing behavior?\n\nOnly to repository processes - namely how we update versioning. We will\nensure that for unstable crates, behavior changes will update the second\nnumber (0.X.y) while feature additions or bug fixes will update the\nthird number (0.x.Y).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, process and docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-11T15:22:46Z",
          "tree_id": "36aff5f595ac2c6d0a8975afe8daf9f66253b50e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c60658bbafad5fc405746dde8e7af72b7f6597e4"
        },
        "date": 1744392181901,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1278.03359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1996.44296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.98544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1454.169140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.38759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 479.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.998828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 333.50166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3707.40634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4120.70146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1171.046484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1140.701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1339.4390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 890.87548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1117.66708984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 982.3384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.07265625,
            "unit": "MiB/s"
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
          "id": "8571e0b376911b351cd86e1d02188806c4e34a7a",
          "message": "Apply `EnvFilter` as a global filter rather than a per-layer filter (#1364)\n\nCurrently, the `EnvFilter` – the filter that decides which spans and\nevents should be processed or ignored – applied to each layer (i.e.,\nfile layer, syslog layer, and console layer). This would allow us to\ndecide what spans and events should be processed at layer-level, but\ncurrently we use the same filter at each layer.\n\nThis PR updates logging configuration to apply the filter at\nglobal-level rather than at layer-level. The main motivation is adding\nthings like\nhttps://github.com/awslabs/mountpoint-s3/pull/1347/commits/e821cf6fbcd24f473ddfb8619ff1a3bd849b6fd3,\nwhere we could have only one global filter, and we could tweak that\nfilter in some cases. Doing this with per-layer filter would also be\nokay, but it would require a bit more effort to handle/decide.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:24:50Z",
          "tree_id": "965768b536f40ada466ed2740736b9c6ea8df8f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8571e0b376911b351cd86e1d02188806c4e34a7a"
        },
        "date": 1744392822410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1276.9373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1974.16494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 817.01904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.2826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.86318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.74150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.78974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 283.64580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3556.20625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4078.87177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1168.67177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.64296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1283.7783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1463.0490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1060.152734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 989.2962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 972.35625,
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
          "distinct": false,
          "id": "0e0ab01e8373d20228b9ad3e9c22af44594d3dd7",
          "message": "Make fio io engine configurable in benchmark. (#1359)\n\nCurrently we pick a different io engine based on direct io\nconfiguration. However, the io engine configuration should be\nindependent.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-14T09:41:56Z",
          "tree_id": "b169226cec2c64ccc4b787f309c97465989ef4b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e0ab01e8373d20228b9ad3e9c22af44594d3dd7"
        },
        "date": 1744630767671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1269.55947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2000.59453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.6037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1456.39453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.50927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 487.62412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.4671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 295.5421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3656.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4174.18203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1173.41181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.2646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 867.67646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 893.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1061.5591796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1141.6919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 934.19248046875,
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
          "id": "aab77aba23e60ac1f732ffdef38815db0de8673a",
          "message": "Inline ObjectInfo to ReaddirEntry (#1366)\n\nThe type `object_client::ObjectInfo` is `#[non_exhaustive]` so it cannot\nbe constructed outside of the defining crate. In future we may want to\nconstruct `ReaddirEntry`-s without using the client, but from data\nstored on disk. As a workaround we inline ObjectInfo to ReaddirEntry.\n\n### Does this change impact existing behavior?\n\nNo. This change is an implementation detail of the `readdir` module.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-15T11:12:30Z",
          "tree_id": "d6cc3e9d82bb7a7c651ce4b0367b2224cb9836b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aab77aba23e60ac1f732ffdef38815db0de8673a"
        },
        "date": 1744722836745,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.2484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1969.26806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 751.296484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.79208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.37666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 523.462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.6802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 279.32548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3658.72802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4126.95322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1205.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1143.97236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 845.15302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1297.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1062.10947265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1001.31171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1215.13984375,
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
          "id": "0c9c094c50e1b655dbcec43f0678cb0557d8f624",
          "message": "Update benchmark chart max datapoints from 20 to 30 (#1372)\n\nBefore this change, benchmark graphs\n(https://awslabs.github.io/mountpoint-s3/dev/bench/) show up to 20 data\npoints where each data point represents a previous commit. One instance\nwe review this is in a weekly meeting, and we feel that more data points\nwould provide more contextual information of what changed as we could\nhave in excess of 20 commits over a period of one or two weeks.\n\nThis change updates the graphs to maintain 30 data points at the expense\nof clarity.\n\n### Does this change impact existing behavior?\n\nNo changes to Mountpoint or its crates. This will allow future benchmark\nruns to maintain 30 data points in graphs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-17T07:47:39Z",
          "tree_id": "bf7d1bfa466a3ec0f341fb43840bb505df56a4b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c9c094c50e1b655dbcec43f0678cb0557d8f624"
        },
        "date": 1744883390903,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.36484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2025.7498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 817.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.62998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.60859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 408.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.3951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3581.1048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.2158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1175.8787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1182.02919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1085.44501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1402.77607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1104.89169921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1187.99677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 936.7091796875,
            "unit": "MiB/s"
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
        "date": 1744889049844,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1287.7853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.2162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.9154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1464.2740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.812109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 576.57705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.2734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.03369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3710.87294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4015.65146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.71328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.81005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1377.43642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 864.8939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1109.368359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.6060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1347.05546875,
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
          "id": "bde61b2a12350af728aede0c23e7efe6b86974d7",
          "message": "Validate ServerSideEncryption on construction (#1373)\n\nMinor change to validate the server-side encryption configuration\nspecified in the CLI arguments when the `ServerSideEncryption` instance\nis built, rather than in a separate function.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T11:03:58Z",
          "tree_id": "29c4c1d976c80f8fe1d569b4d1096bfab0924918",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bde61b2a12350af728aede0c23e7efe6b86974d7"
        },
        "date": 1744894945097,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1929.39052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.8486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.5806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.48359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 565.25068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.8658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.00927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3527.27646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3982.6466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.51044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1197.24287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1267.608984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1185.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1077.9869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 995.88671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 958.33876953125,
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
          "id": "b397f65b9b9f41623611c9a9a3ecd4b3f6b11556",
          "message": "Isolate metadata cache configuration in CliArgs (#1374)\n\nMinor change to take the metadata cache configuration out of the `mount`\nfunction.\n\n### Does this change impact existing behavior?\n\nNo changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-17T13:33:09Z",
          "tree_id": "4aad9a34de86b303eba15949c51a98f72d216eca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b397f65b9b9f41623611c9a9a3ecd4b3f6b11556"
        },
        "date": 1744904036807,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1280.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.4388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.23193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1499.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.28193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.91044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.48330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3616.3451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4059.2716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.511328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.99091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 754.50341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1129.4419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1329.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.50927734375,
            "unit": "MiB/s"
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
        "date": 1744905153427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.72978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1988.05322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1464.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.63291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.51875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.40986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3581.48466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4053.2685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1194.954296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.93271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1410.23349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 911.557421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1044.67138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1184.73623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1246.09833984375,
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
          "id": "05f39827035890ced5e62a3824057293bc955279",
          "message": "Add feature flags for manifest (#1376)\n\nWe'd like to have implementation of the manifest hidden behind the\nfeature flag. We enable tests in workflows now, so they will be\ntriggered in the subsequent PRs.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-22T10:26:24Z",
          "tree_id": "72a694f20a19e78b44a622b1659f04bae6a3e31c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05f39827035890ced5e62a3824057293bc955279"
        },
        "date": 1745324907299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.1109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.12646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.75029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 485.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 197.34912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.60625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3633.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4119.31455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1135.66826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 951.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 818.65810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1372.850390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1025.4783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 938.314453125,
            "unit": "MiB/s"
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
        "date": 1745499227234,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.2615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 785.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1474.815625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.0685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 520.651953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.413671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.3283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3837.5177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4100.1896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1189.97255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1219.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 860.77412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1446.8212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.36787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 999.87724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1009.05,
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
          "id": "77b1dcc58b14bbedecdc67edad63de0353060d81",
          "message": "Add CRT memory limit config to prefetcher and uploader benchmarks (#1379)\n\nIn some benchmarking, we want to experiment with adjusting the CRT's\nmemory limiter to observe the change in throughput performance.\n\nThis change introduces CLI flags to the benchmark scripts (examples)\nthat allows us to directly configure the CRT memory limiter.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, impacts benchmarking scripts only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-24T16:10:04Z",
          "tree_id": "96e7729f3ee4c5fc442c6dcbe90529e172fab471",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/77b1dcc58b14bbedecdc67edad63de0353060d81"
        },
        "date": 1745518178037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.22119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.1216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.78583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1496.89716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.8384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 554.71845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.62744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.22314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3998.48291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1188.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.9236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 870.9123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1413.7732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1354.4802734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1166.45869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 929.61201171875,
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
          "id": "c336f951a4934724f2975f76df24e22c0d299afc",
          "message": "Implement creation of the internal manifest (#1377)\n\nImplement creation of an SQLite database from an iterator of manifest\nentries (in future reading from a file; now from RAM in tests). For more\ncontext see\n[branch](https://github.com/vladem/mountpoint-s3/pull/7/files) where\nmanifest is used to load metadata of the objects.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-25T09:59:44Z",
          "tree_id": "4807717a33f69fbafc0f56456aaf8ff10d827c26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c336f951a4934724f2975f76df24e22c0d299afc"
        },
        "date": 1745582371667,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.16875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.1734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.75927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1497.04052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.62275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 477.2185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 330.77578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3710.7580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4011.58955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1241.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1218.35576171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 797.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 860.667578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.5697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.9728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1432.956640625,
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
          "id": "1c8721ca3da76db2bdc586edb748a75e5379c1eb",
          "message": "Add metrics log output for prefetcher and uploader benchmarks (#1384)\n\nToday, the prefetcher and uploader benchmarks configure the tracing\nlibrary to output logs to `stderr` however no metric sink is installed.\nThis change reuses the metrics module in `mountpoint-s3-fs` to emit\nmetrics in the same way.\n\nIf we want to leverage this in `mountpoint-s3-client`'s\n`client_benchmark`, we'd have to move this to a crate that the client\ncan depend on. I do not think it is worth doing at this time - we plan\nto review how metrics are emitted later this year.\n\nThe motivation for this change now is to support investigation into\nprefetcher performance.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only adds metrics to layer benchmarks.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-25T12:08:55Z",
          "tree_id": "52425983b70a26014b591bef1da6c24e32b72a1b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1c8721ca3da76db2bdc586edb748a75e5379c1eb"
        },
        "date": 1745590043740,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.2541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.70771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.3287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.39697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 436.57578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.42060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3613.9736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.81171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.65439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1186.56416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 854.601953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1061.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1250.45126953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1005.2029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 995.26220703125,
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
          "id": "0f68e990b54304f31fa9dc0cbdb33f94298d14b1",
          "message": "Use the Runtime type in the prefetcher (#1382)\n\nModify the prefetcher to use the `Runtime` type (previously\n`BoxRuntime`) instead of a generic parameter implementing `Spawn`.\n\nThis change simplifies the type signatures for many types used by the\nPrefetcher, including `ObjectPartStream` and `DataCache`\nimplementations, in a similar way as already done for the Uploader.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-25T13:24:05Z",
          "tree_id": "f78bb6d0ec5eedc80a2f47c726b12a16b58bbc9d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0f68e990b54304f31fa9dc0cbdb33f94298d14b1"
        },
        "date": 1745594807055,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.7005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1957.6203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.4154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1468.05693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.44169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 515.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.53251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.15751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3556.96650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3916.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1227.15283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.67890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.71572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 854.26591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1029.2443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1055.002734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1088.5541015625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}