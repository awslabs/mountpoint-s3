window.BENCHMARK_DATA = {
  "lastUpdate": 1744378384814,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b21c746ee46b875e166f332eeab275004d9a24",
          "message": "Update CRT submodules to latest releases (#1318)\n\n* Update to latest CRT dependencies and prepare release for:\n\n  * `mountpoint-s3-crt-sys`\n  * `mountpoint-s3-crt`\n  * `mountpoint-s3-client`\n\n ```$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\nPackaging mountpoint-s3-crt-sys v0.12.1\n(/local/home/evdolgy/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version change?\n\n`Unreleased` sections were aded in crates' change logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license and I agree to the terms of the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-14T15:28:56Z",
          "tree_id": "bd77f30bc20b14277c67bdc48ea6989881399494",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02b21c746ee46b875e166f332eeab275004d9a24"
        },
        "date": 1741974250423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16678.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26805.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34180.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36510.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38578.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12361.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13185.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12769.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.8828125,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742503227431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17235.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21325.9765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43361.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 179.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 404.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34901.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37298.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12581.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12827.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11151.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.03125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "evdolgy@amazon.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7f6b98915b7fce7dacf6703c2a363073484f0",
          "message": "Update the changelog for mountpoint-s3 (#1319)\n\nAs a follow-up for this\n[PR](https://github.com/awslabs/mountpoint-s3/pull/1304#pullrequestreview-2682411235)\nwe add a new entry in the `mountpoint-s3` change log.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log was updated. No version change requred.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-28T13:21:37Z",
          "tree_id": "52fc13f9da26c7fa8752cb1d6fb0cfd72cf087b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7f6b98915b7fce7dacf6703c2a363073484f0"
        },
        "date": 1743176231068,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15241.79296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28163.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39779.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39760.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35736.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11534.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12056.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13540.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 372.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.05859375,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743444048091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17044.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30041.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37335.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1380.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 439.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 286.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 962.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36827.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40043.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15109.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12154.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10820.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.66796875,
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
        "date": 1743511232779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15772.1015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25356.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39795.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 413.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1435.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 432.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 966.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38658.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37974.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12136.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14153.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10792.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.734375,
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
        "date": 1743518258899,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15135.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26124.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39900.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1327.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 432.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 939.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41975.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41020.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10729.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 269.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12881.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11622.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.40625,
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
        "date": 1743524165705,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12156.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26041.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41418.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 405.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1280.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 435.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 975.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 295.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37119.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37161.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15048.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13193.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13228.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
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
        "date": 1743532609528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17284.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30198.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 44370.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1317.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 437.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 939.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 301.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39450.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40394.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12596.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14058.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13598.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 388.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.640625,
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
        "date": 1743534810242,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16357.30078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29156.78515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45342.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1334.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 950.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37209.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40655.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14283.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12220.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11673.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 356.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.04296875,
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
        "date": 1743614358557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15141.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26856.03125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41422.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1344.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 438.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 287.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 979.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 291.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36718.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38273,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11713.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14379.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10100.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.5,
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
        "date": 1743690590001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16994.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28412.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41186.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 404.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1340.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 951.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 288.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36227.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39027.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12102.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12327.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13674.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 393.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.125,
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
        "date": 1743693641973,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15821.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28808.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39114.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1249.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 443.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 295.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 948.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 298.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37589.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39223.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12917.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11562.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11270.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.0234375,
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
        "date": 1743699412860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14962.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27111.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38599.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1296.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 424.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 934.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 278.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39084.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37688.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12840.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12658.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12638.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.04296875,
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
        "date": 1743789349065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14947.89453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26482.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38818.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1321.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 427.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 289.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 917.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36109.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38146.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14120.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 267.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13749.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12784.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.82421875,
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
        "date": 1744023513409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15270.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28634.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40480.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1472.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 295.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 956.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 291.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36036.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38018.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12582.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13002.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10612.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.3515625,
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
        "date": 1744036279048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14594.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28749.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38654.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 410.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 1298.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 425.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 81.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 930.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 299.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37546.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39034.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12135.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13426.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11654.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 240.02734375,
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
        "date": 1744205054646,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16979.69140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24777.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39476.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 181.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38615.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38439.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13733.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13166.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11384.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.7890625,
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
        "date": 1744215528235,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15395.2421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30720.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38043.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 409.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 171.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40743.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40759.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12603.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12860.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13437.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.54296875,
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
        "date": 1744301243464,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16203.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24085.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40548.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41599.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35743.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12472.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14300.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11642.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.5390625,
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
        "date": 1744378384773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15378.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24425.02734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43616.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 160.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36148.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42195.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12375.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11194.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10917.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 411.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.04296875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}