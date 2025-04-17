window.BENCHMARK_DATA = {
  "lastUpdate": 1744905154908,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743443199141,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3338.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3371.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3233,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3390.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36984.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3473.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3288.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3485.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3340.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.0703125,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743510388025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3425.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3189.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3301.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3284.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27807.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3344.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3131.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 225.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3192.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3249.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.2109375,
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
        "date": 1743523309132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3237.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3328.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3397.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3346.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29716.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3343.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3147.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3415.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3194.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.8671875,
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
        "date": 1743531760393,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2940.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3168.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3185.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3330.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21087.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3228.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3234.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3361.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3123.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.26953125,
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
          "id": "c717bdb788024b96da7b5678a8ff62176e24bac8",
          "message": "Release Mountpoint v1.16.0 and Rust crates (#1342)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:59:49Z",
          "tree_id": "d762fcd5550e42bb84246e815dfeac5c788fcf3a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c717bdb788024b96da7b5678a8ff62176e24bac8"
        },
        "date": 1743533946148,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3340.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3280.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3468.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3257.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23434.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3296.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3185.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3312.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3294.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.20703125,
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
        "date": 1743613503589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3443.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3272.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3417.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3274.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32591.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3516.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3363.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3349.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3316.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.859375,
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
        "date": 1743689785591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3225.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3111.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3320.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3295.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 243.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23006.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3208.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 356.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3286.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 204.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15096.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3330.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.4140625,
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
        "date": 1743692745047,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3524.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 323.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3344.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3444.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3235.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39003.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3208.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3375.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 241.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3425.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4329.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.8671875,
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
        "date": 1743698531489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3128.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3119.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3266.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3161.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22746.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3418.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3324.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3407.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13289.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.25390625,
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
        "date": 1744022645016,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3081.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3334.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3368.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3389.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40160.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 355.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3436.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3198.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3412.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3458.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.90234375,
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
        "date": 1744035408541,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3355.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3069.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3540.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3108.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24418.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3432.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3535.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3454.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3203.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231,
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
        "date": 1744204231205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3119.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3330.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3394.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3211.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26495.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3289.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3436.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3271.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3890.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.84765625,
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
        "date": 1744214694821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3334.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3453.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3420.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3357.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21247.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3174.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3431.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 228.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3194.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3334.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.4765625,
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
        "date": 1744300353777,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3475.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3087.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3325.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3157.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 13674.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3380.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12007.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4691.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 220.34375,
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
        "date": 1744377530306,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3249.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 341.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3075.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3212.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23456.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3204.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3391.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3343.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3309.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.27734375,
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
        "date": 1744391889786,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3052.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3377.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3128.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3384.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28005.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3299.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3007.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3404.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3492.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 225.7890625,
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
          "id": "c60658bbafad5fc405746dde8e7af72b7f6597e4",
          "message": "Update CONTRIBUTING.md to describe in more detail version number changes (#1365)\n\nThis change updates the contributing guide following the decision to\ninterpret new features/functionality as \"patch\" versions for unstable\ncrates (0.x.y). We document it here to avoid future ambiguity.\n\nSome minor outdated documentation is also updated.\n\n### Does this change impact existing behavior?\n\nOnly to repository processes - namely how we update versioning. We will\nensure that for unstable crates, behavior changes will update the second\nnumber (0.X.y) while feature additions or bug fixes will update the\nthird number (0.x.Y).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, process and docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-04-11T15:22:46Z",
          "tree_id": "36aff5f595ac2c6d0a8975afe8daf9f66253b50e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c60658bbafad5fc405746dde8e7af72b7f6597e4"
        },
        "date": 1744392183647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3331.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 341.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3290.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3079.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3430.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32213.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2917.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3374.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3353.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3044.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.765625,
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
        "date": 1744392824182,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3413.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3370.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3254.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3257.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19987.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2923.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3008.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 239.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3284.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3219.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.49609375,
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
        "date": 1744630769223,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3161.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3371.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3311.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3319.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24631.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3472.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3305.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3368.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3168.39453125,
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
        "date": 1744722838681,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3110.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3351.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3334.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 18056.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3396.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3375.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3409.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3387.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.0703125,
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
      }
    ]
  }
}