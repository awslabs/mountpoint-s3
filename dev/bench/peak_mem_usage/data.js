window.BENCHMARK_DATA = {
  "lastUpdate": 1745590999332,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743511237984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11876.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21659.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33979.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 924.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 842.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36354.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34666.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10321.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11640.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11040.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 546.421875,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518254382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13014.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21903.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34497.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 926.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 378.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37112.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36579.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10171.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10687.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11617.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 862.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.2578125,
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
          "id": "a776670203be61492db27865158ab5a0fd38a323",
          "message": "Refactor internal S3 client methods to initiate meta-requests (#1337)\n\nRe-organize the group of internal methods in the S3 client used to\ninitiate CRT meta-requests. Follow-up to the changes in #1334.\n\nWith this change, `S3CrtClientInner` provides 4 methods:\n* `meta_request_with_callbacks`: the lowest-level method, which allows\nmore customization through callbacks. It is the basis for the other\nmethods and it is used directly by `get_object` and `put_object`.\n* `meta_request_with_body_payload`: simpler variant that returns the\nresponse body. Used by `list_object` and `get_object_attributes`.\n* `meta_request_with_headers_payload`: variant returning the headers,\nbut no body. Used by `head_object` and `put_object_single`.\n* `meta_request_without_payload`: simplest variant, only returns error.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Internal change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T14:01:57Z",
          "tree_id": "f180fa28ec38620e474990e96c4f5c2d9f485fa0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a776670203be61492db27865158ab5a0fd38a323"
        },
        "date": 1743524224121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12978.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20312.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31246.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 904.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34217.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34205.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10343.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11601.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12383.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 632.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.28515625,
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
          "id": "829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4",
          "message": "Bump `mountpoint-s3` version to 1.16.0 (#1341)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:22:09Z",
          "tree_id": "455fb125eca9141a8377ce09f5b30ccedfea1c51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4"
        },
        "date": 1743532640909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11436.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16935.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31617.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 925.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 761.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35284.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29490.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10725.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11349.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11527.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 599.875,
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
          "id": "338e400b2e6dae2ad2a231f01e4d2de4149bdd25",
          "message": "Create a package with custom extension (#1340)\n\nAdd a `--pkg-extensions` CLI flag which specifies which packages to\nbuild and how to name them. Package type is inferred from top-level\ncomponent of the provided extension.\n\nAlso add a validation script for such packages.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-02T15:06:43Z",
          "tree_id": "ba352c13bf71fbe020d339a581abd0e4b8f6e095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338e400b2e6dae2ad2a231f01e4d2de4149bdd25"
        },
        "date": 1743614411655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12775.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20665.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32785.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 368.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 941.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 379.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 294.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 852.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34629.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36439.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10134.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9471.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11156.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.53515625,
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
          "id": "6611aaf5822d42dbb208a18e626ab462163a80cf",
          "message": "Reduce memory usage for strings in inode metadata (#1346)\n\nReduce memory usage for strings included in inode metadata, like object\nkeys, etags, and inode names. Using a `Box<str>` instead of a `String`\nensures that no slack capacity is wasted and saves the `usize` field to\nkeep track of the buffer capacity.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-03T12:14:24Z",
          "tree_id": "25051904ee5fec89f725aaa1df0b2bb0cff986a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6611aaf5822d42dbb208a18e626ab462163a80cf"
        },
        "date": 1743690645157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12744.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21734.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34782.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 905.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 825.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31456.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30599.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9534.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10579.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12154.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 874.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.89453125,
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
          "id": "f248ce85c9a43b1a6411050c9129d0cdebfe4670",
          "message": "Release 1.16.1 (#1349)\n\nUpdate the changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T13:04:52Z",
          "tree_id": "b72211dcdd3f5ad08ef54972072c4ce78b027872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f248ce85c9a43b1a6411050c9129d0cdebfe4670"
        },
        "date": 1743693672253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11301.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22697.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32866.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 908.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 773.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32757.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35802.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9199.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8783.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11301.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 861.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 513.7578125,
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
          "id": "f488a2d17a96131408602da5cb8b9a46a0116b01",
          "message": "Update changelog for mountpoint-s3-fs 0.1.2 (#1351)\n\nUpdate changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T14:41:22Z",
          "tree_id": "3013fb2a4653732d870d6e1ec6b2c4e31b82f41b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f488a2d17a96131408602da5cb8b9a46a0116b01"
        },
        "date": 1743699464601,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13693.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21775.1328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36262.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 923.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 817.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36226.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40110.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9265.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10032.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11358.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 844.08203125,
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
          "id": "59391ff3850b3b6fc76e904095c61f47692f4bc1",
          "message": "`GetObjectResponse` returns part content as `Bytes` rather than `Box<[u8]>` (#1348)\n\nModify the `GetBodyPart` type streamed from `GetObjectResponse` so that\nit exposes the part content as a `Bytes` type, rather than as a\n`Box<[u8]>`. This is an API breaking change for `mountpoint-s3-client`,\nwhich will require minor adjustments for users consuming the part\ncontent. The switch to `Bytes` will enable the introduction of different\nbuffer allocation strategies in future releases.\n\n### Does this change impact existing behavior?\n\nNo functional changes, but it is a minor API breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it changes `mountpoint-s3-client` public API.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-04T15:42:58Z",
          "tree_id": "29daff49b3e017df05f0335eea6222067446765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59391ff3850b3b6fc76e904095c61f47692f4bc1"
        },
        "date": 1743789344024,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13627.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21675.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31681.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 892.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 796.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37078.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36296.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8894.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12144.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10032.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 735.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.64453125,
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
          "distinct": true,
          "id": "1053739c23bcf5f2e44b46bc0ff84b91ff22e62a",
          "message": "Update tokio versions (#1353)\n\nUpdate tokio to newest version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-04-07T08:43:36Z",
          "tree_id": "3d1184a87bc0645686b4851484fe84075f4c9872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1053739c23bcf5f2e44b46bc0ff84b91ff22e62a"
        },
        "date": 1744023521539,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14009.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21242.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34975.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 908.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 378.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 807.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34398.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36726,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10406.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9820.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12337.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 784.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.37890625,
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
          "id": "2a2f84fc979af46e6333bbc21cb6592cbe25b713",
          "message": "Update instructions for publishing crates (#1350)\n\nUpdate the guidance for publishing crates to include `mountpoint-s3-fs`\nand `mountpoint-s3-fuser`, in addition to the client crates.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-07T12:18:48Z",
          "tree_id": "a48f3eb0e3a5bf03430d8eb54716991b0b95f9d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2a2f84fc979af46e6333bbc21cb6592cbe25b713"
        },
        "date": 1744036328603,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15065.7578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20455.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31312.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 910.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 824.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33150.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 369.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34566.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9932.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11179.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12775.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 748.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 418.28515625,
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
          "id": "fc73518864ad2aac7e1eeb6d1ae2afb58a55663e",
          "message": "Fix an issue where GetObject requests may not be cancelled (#1355)\n\nThe change in #1334 introduced an issue where a GetObject request would\nstill run to completion if the future returned by the `get_object`\nmethod in `S3CrtClient` was dropped before being ready.\n\nIn Mountpoint, this would affect random read workloads where dropped\nprefetcher requests would not always be cancelled, resulting in reduced\nthroughput and increased memory usage.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2025-04-09T11:10:41Z",
          "tree_id": "3896bb8143c896f86c4cad3afaa50c5d7f8fa84f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fc73518864ad2aac7e1eeb6d1ae2afb58a55663e"
        },
        "date": 1744205138494,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11783.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20200.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36452.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30053.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35481.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12573.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11452.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12054.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 745.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.5390625,
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
          "id": "a56801141e8c48b3138bf4ce666f900af22ab5e0",
          "message": "Prepare for 1.16.2 release (#1357)\n\nUpdate CHANGELOGs (including changes from\n`mountpoint-s3-client-0.13.3`).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-09T14:03:28Z",
          "tree_id": "7c98bc87c139e924fe379a0b5b4cc650a05ca982",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a56801141e8c48b3138bf4ce666f900af22ab5e0"
        },
        "date": 1744215579036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13760.1015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20205.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37567.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34629.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34246.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11841.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9443.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12270.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.5859375,
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
          "id": "b04724d929f2c529332e71d744a06be7a2c9c1bb",
          "message": "Update client_benchmark to report Gib/s, disable ANSI in logs (#1361)\n\nReport throughput in Gib/s and disable ANSI escape characters in\nbenchmark logs.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-10T13:55:01Z",
          "tree_id": "6e40bdae66b7c4bad63691031ac3c046c43567f6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04724d929f2c529332e71d744a06be7a2c9c1bb"
        },
        "date": 1744301252335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13001.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22044.8984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33317.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34265.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37173.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10491.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12720.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12717.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 516.5390625,
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
          "id": "e85566e5bd85e295f490b5f80ae05f5d0fe966e3",
          "message": "Make CRT memory limit configurable in Mountpoint's S3 client (#1363)\n\nThis is useful for benchmarking Mountpoint client with different memory\nlimits.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, for the client. Updated minor version of `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-11T11:18:49Z",
          "tree_id": "91d35f68fc39337602d0811b5a2ab0f567841a51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e85566e5bd85e295f490b5f80ae05f5d0fe966e3"
        },
        "date": 1744378515833,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14613.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22643.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33430.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34995.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36443.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11212.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12689.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13114.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 270.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 795.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 535.38671875,
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
          "distinct": false,
          "id": "d3572ed4b64cec0852afc1a14be375bb7667f37d",
          "message": "Return `GetRequestTerminatedUnexpectedly` error if first `GetObject` request terminates early (#1360)\n\nTo read data from S3, we use `read_from_client_stream` method. This\nmethod creates two `GetObject` requests, with different ranges (if there\nare enough data to read):\n1. Starting position to `initial_read_window_size` (by default 1.125\nMiB)\n2. Starting position + `initial_read_window_size` to end position (by\ndefault end of the object)\n\nTo limit memory usage, `read_from_client_stream` applies a back pressure\nbetween these two requests. It doesn't send the second request until the\nhalf of the first request has been consumed (signalled via\n`BackpressureController::send_feedback`). It understands this by using\n`BackpressureLimiter::wait_for_read_window_increment(<second request\nstarting pos>).await`. Therefore, the `read_from_client_stream` assumes\nthat, the consumer will consume first request and then will increase the\nread window. This could fail if a faulty `ObjectClient` returns a\n`GetObject` stream that terminates early before producing the whole\nrequested range.\n\nThis PR fails at runtime if a faulty client returns less data than we\nexpect. Previously, the `read_from_client_stream` would hang at\n`wait_for_read_window_increment` call forever.\n\n\n### Does this change impact existing behavior?\n\nNo breaking change, Mountpoint will return an `read_from_client_stream`\nerror instead of hanging forever if this issue happens.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nProbably doesn't require a changelog entry. This PR also makes some\nbreaking changes on `FailureClient` in `mountpoint-s3-client` crate, but\nthe `FailureClient` seems like doc hidden and not sure if it requires a\nchangelog entry as well.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:17:27Z",
          "tree_id": "4cce47aaa62b9ae47b854c8792c219e2eb923fdd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3572ed4b64cec0852afc1a14be375bb7667f37d"
        },
        "date": 1744392829130,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13703.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18176.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38419.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35075.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36573.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11225.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9774.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13755.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 830.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 565.29296875,
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
          "id": "8571e0b376911b351cd86e1d02188806c4e34a7a",
          "message": "Apply `EnvFilter` as a global filter rather than a per-layer filter (#1364)\n\nCurrently, the `EnvFilter` – the filter that decides which spans and\nevents should be processed or ignored – applied to each layer (i.e.,\nfile layer, syslog layer, and console layer). This would allow us to\ndecide what spans and events should be processed at layer-level, but\ncurrently we use the same filter at each layer.\n\nThis PR updates logging configuration to apply the filter at\nglobal-level rather than at layer-level. The main motivation is adding\nthings like\nhttps://github.com/awslabs/mountpoint-s3/pull/1347/commits/e821cf6fbcd24f473ddfb8619ff1a3bd849b6fd3,\nwhere we could have only one global filter, and we could tweak that\nfilter in some cases. Doing this with per-layer filter would also be\nokay, but it would require a bit more effort to handle/decide.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-11T15:24:50Z",
          "tree_id": "965768b536f40ada466ed2740736b9c6ea8df8f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8571e0b376911b351cd86e1d02188806c4e34a7a"
        },
        "date": 1744393756892,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14823.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22426.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34369.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 377.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34899.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33193.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10710.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12589.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10160.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 687.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 544.38671875,
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
          "id": "0e0ab01e8373d20228b9ad3e9c22af44594d3dd7",
          "message": "Make fio io engine configurable in benchmark. (#1359)\n\nCurrently we pick a different io engine based on direct io\nconfiguration. However, the io engine configuration should be\nindependent.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-04-14T09:41:56Z",
          "tree_id": "b169226cec2c64ccc4b787f309c97465989ef4b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e0ab01e8373d20228b9ad3e9c22af44594d3dd7"
        },
        "date": 1744631704857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14743.5625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24221.625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41554.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36528.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36389.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10947.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10573.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12159.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 484.92578125,
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
          "id": "aab77aba23e60ac1f732ffdef38815db0de8673a",
          "message": "Inline ObjectInfo to ReaddirEntry (#1366)\n\nThe type `object_client::ObjectInfo` is `#[non_exhaustive]` so it cannot\nbe constructed outside of the defining crate. In future we may want to\nconstruct `ReaddirEntry`-s without using the client, but from data\nstored on disk. As a workaround we inline ObjectInfo to ReaddirEntry.\n\n### Does this change impact existing behavior?\n\nNo. This change is an implementation detail of the `readdir` module.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-15T11:12:30Z",
          "tree_id": "d6cc3e9d82bb7a7c651ce4b0367b2224cb9836b0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aab77aba23e60ac1f732ffdef38815db0de8673a"
        },
        "date": 1744723759659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14204.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21350.4296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36821.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30858.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36579.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11676.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10744.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12575.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 823.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.03515625,
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
          "id": "0c9c094c50e1b655dbcec43f0678cb0557d8f624",
          "message": "Update benchmark chart max datapoints from 20 to 30 (#1372)\n\nBefore this change, benchmark graphs\n(https://awslabs.github.io/mountpoint-s3/dev/bench/) show up to 20 data\npoints where each data point represents a previous commit. One instance\nwe review this is in a weekly meeting, and we feel that more data points\nwould provide more contextual information of what changed as we could\nhave in excess of 20 commits over a period of one or two weeks.\n\nThis change updates the graphs to maintain 30 data points at the expense\nof clarity.\n\n### Does this change impact existing behavior?\n\nNo changes to Mountpoint or its crates. This will allow future benchmark\nruns to maintain 30 data points in graphs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-17T07:47:39Z",
          "tree_id": "bf7d1bfa466a3ec0f341fb43840bb505df56a4b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0c9c094c50e1b655dbcec43f0678cb0557d8f624"
        },
        "date": 1744884218040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12773.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20892.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33813.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33659.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34919.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11049.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11766.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11945.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 760.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 446.85546875,
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
        "date": 1744889953554,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14386.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24211.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31816.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34640.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33013.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11421.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9708.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11148.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 681.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.3046875,
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
      }
    ]
  }
}