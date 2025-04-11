window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
        "date": 1741974287385,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4917.31787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4554.25751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5682.6388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.8939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.48896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.6201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.5875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.18330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.93984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.15400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5840.5783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.66015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5040.71064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.39326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.85185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.43828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.2859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.35908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.02978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1754.8390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.164453125,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742503290788,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4703.895703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4270.28486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5492.354296875001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.368359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.37509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.49814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.743359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.7583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5766.36748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 244.6404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4907.65283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.146875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1830.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.8115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1426.626171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1215.7748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1608.6865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.53125,
            "unit": "MiB/s"
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
        "date": 1743176305340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4869.04521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4416.759570312501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5597.67158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.37998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.15224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.38935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.15625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5752.2458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 246.082421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4826.436328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.030859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1601.12275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.66904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1353.41103515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1379.37119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1554.94580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1035.70029296875,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743444144164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4896.976953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4380.903515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5636.3501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.9640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.4025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.4220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.08095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.04716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.141796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.61328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5877.6947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.5263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5047.46552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 244.75380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1673.69521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.91650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1447.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1246.84716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.3099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1780.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1008.2037109375,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743511236704,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4949.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4476.59580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5567.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.8005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.32578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.79130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.690625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.8857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.69638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5875.0947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.5197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4958.166796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.8470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1924.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.72724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1406.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1406.39931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.90498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1569.71201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 981.60830078125,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518252951,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5000.16201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4469.644140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5594.93466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.73984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.71865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.65048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.67509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.66708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5832.30849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.33515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5054.7818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.9958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1731.64423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.07353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1465.17880859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1181.567578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1714.66533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.6208984375,
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
        "date": 1743524222165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4936.78896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4401.512109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5549.843847656251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.53720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.813671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.54306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5716.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.42197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4916.31826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.6619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1782.94091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.60634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1391.67353515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1237.9515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.63447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1402.7986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.1240234375,
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
        "date": 1743532639008,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4801.868847656249,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4305.34443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5495.43017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.25986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.36689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.00625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.68330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.03857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5891.65625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.49453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4838.24052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 247.8193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1935.69033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.02275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1474.73896484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1240.28818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.60927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1448.86494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1098.11455078125,
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
        "date": 1743614409870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4851.26474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4409.02490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5446.433203125001,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.636328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.65380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.53759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.33076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.124609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.62578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5830.8298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.60380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4949.67294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.36650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1770.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.48310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1423.64716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1340.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.95986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1726.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 978.7505859375,
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
        "date": 1743690643353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4930.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4322.6361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5556.04091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.2994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.90830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.24296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.71904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5772.23291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.16689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4797.415625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.48095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1862.52822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.50244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1412.619140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1338.95927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.19873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1594.1943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1025.4107421875,
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
        "date": 1743693670365,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4851.45517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4398.62412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5531.5501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.1189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.26923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.9779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.9556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.09716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.90712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.41767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5675.55537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4866.01865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1652.642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.3341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1468.99306640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1264.81650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.39345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1743.23037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1016.15966796875,
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
        "date": 1743699463015,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5026.56357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4408.6431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5639.61083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.24775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.20380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.04404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.77216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.56279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5841.4451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.1345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4892.53212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 243.503125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1846.79453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.19638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1482.73818359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1237.06455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1851.27177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 990.51513671875,
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
          "id": "59391ff3850b3b6fc76e904095c61f47692f4bc1",
          "message": "`GetObjectResponse` returns part content as `Bytes` rather than `Box<[u8]>` (#1348)\n\nModify the `GetBodyPart` type streamed from `GetObjectResponse` so that\nit exposes the part content as a `Bytes` type, rather than as a\n`Box<[u8]>`. This is an API breaking change for `mountpoint-s3-client`,\nwhich will require minor adjustments for users consuming the part\ncontent. The switch to `Bytes` will enable the introduction of different\nbuffer allocation strategies in future releases.\n\n### Does this change impact existing behavior?\n\nNo functional changes, but it is a minor API breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it changes `mountpoint-s3-client` public API.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-04T15:42:58Z",
          "tree_id": "29daff49b3e017df05f0335eea6222067446765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59391ff3850b3b6fc76e904095c61f47692f4bc1"
        },
        "date": 1743789342105,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4951.45830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4445.56884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5602.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.38134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.38515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.21748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.91611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.88974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.86796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.84931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5878.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.7166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5042.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 245.7072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1810.92626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.6533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1469.87236328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1280.47255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.29580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1451.004296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 974.40654296875,
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
        "date": 1744023520219,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5055.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4569.29736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5705.33642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.18193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.79111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0142578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.671484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.98056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5878.115625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.0671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4952.72001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 249.98193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1699.19619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.20419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1454.95,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1297.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.3224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1892.95234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1056.58837890625,
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
        "date": 1744036326855,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4939.44267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4566.1998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5668.44873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.730859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.1537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.096875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.82607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.05126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.04794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.38173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5242.14990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 250.687109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4961.894921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.84873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1869.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.91923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1451.30498046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1209.78046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1883.44267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 998.0126953125,
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
        "date": 1744205137233,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4973.60771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4443.95888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5679.038671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.9201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.5453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.78740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.1013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.16943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5913.27451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 253.15439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4929.58642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.21611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1780.9177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.87529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1398.61728515625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1320.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.2912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1555.18173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1023.17685546875,
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
        "date": 1744215577410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4992.02626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4417.795703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5658.790234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.376171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.68291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.6572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.1751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.8984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.226953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5928.74990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.01298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5041.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.924609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1800.700390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1692.09521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1283.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.09853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1611.75087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 993.36884765625,
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
        "date": 1744301250502,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5071.12236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4521.69677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5611.578320312499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.4689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 46.416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.86328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.47607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.9107421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5768.87265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 249.306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4959.931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 248.21435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1444.1236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.05283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1450.95205078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1238.1478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.47001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1473.77119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1095.03154296875,
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
        "date": 1744378513940,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4916.72119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4522.43681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5692.341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.9025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.2078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.2154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.26552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6006.24873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.71171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4972.14931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.23056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1775.988671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.91806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1405.56328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1270.0482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.79794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1526.42939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1009.75,
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
        "date": 1744392827520,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4960.7126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4422.53701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5648.01630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.85947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.0384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.83193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.269921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.46181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5760.223046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 251.5875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4960.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.14375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1873.8462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1560.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.20361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.9099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1698.098828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1064.51943359375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1744392828279,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}