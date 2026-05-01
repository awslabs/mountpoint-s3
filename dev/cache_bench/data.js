window.BENCHMARK_DATA = {
  "lastUpdate": 1777635522311,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90bb0b4d4f890bc0a77898f6d7cdbb20895a9650",
          "message": "Fix default data cache limit validation during eviction (#1779)\n\nFixes `is_limit_exceeded()` function used by the data cache when in\ndefault mode (which should keep 5% of space in the cache file system).\nBefore the fix, it was incorrectly considering space reserved by the\nfile system as available space leading to 100% space usage. Now,\nreserved space is considered and the 5% available space is respected. A\nregression test was also added.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-09T16:47:27Z",
          "tree_id": "20f6ef4d0237f2a088335d68be2c71196eaf7748",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bb0b4d4f890bc0a77898f6d7cdbb20895a9650"
        },
        "date": 1773082315897,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1425.09189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2178.0818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 837.248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1641.0224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 297.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 789.990625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.9671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.7431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4210.47578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4389.23056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1300.8603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1402.37265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1525.6728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1206.9677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1381.446875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1023.0853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1141.04814453125,
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
          "id": "855fa94bd3b40780018368a90b16ef837eb7e2f4",
          "message": "Fix read issue on concurrent open after truncate (#1781)\n\nFix race condition when 2 concurrent open requests occur after a\ntruncate and resulting in errors on read.\n\nThe issue is caused by a concurrent operation which ignores that the\ninode is still completing an upload and tries to refresh its state by\nperforming a remote lookup to the bucket. By the time the remote lookup\ncompletes, its result may be stale but still be used to overwrite the\nresult of the upload. This fix adds a check for a pending upload instead\nof only relying on the `write_status` field.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdded changelog entries for a patch release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T17:42:42Z",
          "tree_id": "beb72a04226e62ebc716133f9c9b272a97fa25ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/855fa94bd3b40780018368a90b16ef837eb7e2f4"
        },
        "date": 1773085600271,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1374.8587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2336.9966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 867.71103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1641.880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.39736328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.496484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 240.143359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4102.947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4921.1259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1452.0697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1388.901953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 830.60263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1251.8962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1080.4701171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1194.25888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1252.903515625,
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
          "id": "4270f8c47fa0717a9dcc87828eca01d12fc42d7a",
          "message": "Update changelogs for v1.22.1 release (#1784)\n\nUpdate changelogs for v1.22.1 release.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-09T18:29:42Z",
          "tree_id": "c65d8b678eb9cb90ff43817065ad504b9b8cd445",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4270f8c47fa0717a9dcc87828eca01d12fc42d7a"
        },
        "date": 1773088423644,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1360.28076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2272.8228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1639.97880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.89501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.90419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 237.32080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 296.7361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4098.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4443.29970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1404.11669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1416.94912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1535.3375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1688.7443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1259.380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1179.89140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1579.03857421875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0e042567569dedfe47397ee0dc023917771faefb",
          "message": "Update CRT submodules to latest releases (#1778)\n\nUpdate the CRT submodules to the latest releases.\n\nUpdated libraries:\n- aws-c-auth: v0.9.5 -> v0.10.0\n- Pick up: support imds endpoint override\n([#286](https://github.com/awslabs/aws-c-auth/pull/286))\n- aws-c-http: v0.10.9 -> v0.10.11\n- aws-c-io: v0.26.0 -> v0.26.1\n- aws-checksums: v0.2.8 -> v0.2.10\n- aws-lc: v1.66.2 -> v1.69.0\n- s2n-tls: v1.6.4 -> v1.7.0\n\n\n<details> <summary>Full CRT changelog:</summary>\n\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth a4409b95..5aefd277:\n  > support imds endpoint override (#286)\n  > Prioritizing profile credentials over credential_process when both are present (#288)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http acf31399..0d8e1a93:\n  > Fail http proxy configuration when using SecItem (#551)\n  > [fix] h2 stream manager initial settings not passed correctly & Log the headers (#544)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io d5ad01ce..bfb0819d:\n  > Add PQ-opt-out pref to supported s2n cases (#786)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 270b15ac..1d5f2f1f:\n  > Add flag to disable unknown pragmas on ARM (#111)\n  > Add XXHash algos (#110)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 728811ee..37d86461:\n  > Return correct error value when parsing PKCS7 authenticated attributes fails (#3061)\n  > Use CRYPTO_memcmp instead of OPENSSL_memcmp for tag verification (#3060)\n  > Ensure all signer certificate chains are verified (#3059)\n  > Prepare v1.69.0 (#3049)\n  > Simplify `d2i_PKCS7` by removing redundant BER-to-DER conversion (#3037)\n  > Key state consistency in PQDSA_KEY setter functions (#3040)\n  > Fix error return values for no-op UI_xxx stub functions (#3025)\n  > Update ACVP documentation (#2960)\n  > Retain flag after custom critical extensions check (#3030)\n  > Fix PKCS7 verify content memleak (#3036)\n  > Fix error reporting and document EC explicit params single-cert behavior (#3044)\n  > Various PKCS7 fixups (#3035)\n  > Fix link in README.md (#2945)\n  > Fix FIPS delocator handling of floating-point immediates on aarch64 (#3029)\n  > Prepare v1.68.0 (#3022)\n  > Refactor PQDSA_KEY set_raw functions to use goto-err cleanup (#2993)\n  > Generate Rust Bindings (#2999)\n  > Support WASM/Emscripten (#2959)\n  > Update Ubuntu 24:04 image compiler verification (#3017)\n  > Fix CI: mariadb (#3015)\n  > Miscellaneous CI improvements (#2978)\n  > Fix argument order in `hmac_copy` (#3014)\n  > Fix OPENSSL_memchr per C23 (#3008)\n  > Fix Windows CI: use `cd /d` in run_windows_tests.bat to handle cross-drive paths (#3012)\n  > Fix CI: gcc-4.8 (#3011)\n  > Reject XOF digests in DH_compute_key_hashed\n  > reject zero-sized digests in HKDF EVP_PKEY\n  > evp: disable EVP_PKEY_derive for KEM method\n  > pkcs8: cap ciphertext length before allocating in pkcs8_pbe_decrypt\n  > 1-byte OOB read in EVP_PKEY_asn1_find_str length calculation\n  > evp: fix DSA keygen error-path UAF/double-free\n  > Correct CCM nids in object definition (#2991)\n  > Ensure public key is set before verifying through ML-DSA verify (#2990)\n  > Remove redundant CPython 3.9 integration test (#2996)\n  > Ensure no overflow in signed output length in do_buf (#2988)\n  > Ensure index argument is not negative in ASN1_BIT_STRING_set_bit (#2987)\n  > Add PyOpenSSL integration test (#2992)\n  > Free potential memory before assigning new pointer (#2989)\n  > Support GCC 4.8 for aarch64 (#2964)\n  > Bump bytes from 1.7.1 to 1.11.1 in /tests/ci/lambda (#2983)\n  > Address some CMake findings (#2979)\n  > Update Wycheproof ECDSA test vectors and fix workflow typo (#2972)\n  > Disable SLP vectorizer for FIPS shared library builds on GCC 14+ (#2977)\n  > Nmap build needs liblinear (#2985)\n  > Add method to get type of ML-DSA instance configured under EVP PKEY (#2980)\n  > Fix aws-lc-rs CI job (#2966)\n  > Simplify FIPS conditional in top-level build script (#2976)\n  > Integrate Wycheproof ML-DSA test vectors (#2973)\n  > Bump mysql cluster version (#2967)\n  > Shorten Windows Build Directory Path (#2974)\n  > Add missing env vars to check-vectors workflow step (#2962)\n  > Fix checkout logic for android-omnibus (#2970)\n  > Ensure pkcs7 checks ASN1_TYPE->type (#2968)\n  > Migrate Android Testing to GitHub Actions (#2969)\n  > Adds a new randomness generation API (#2963)\n  > Model Device Farm CI Resources in CDK (#2965)\n  > Remove FIPS counter framework and other tidying up (#2947)\n  > Fix image-build-windows workflow to only push on workflow_call and workflow_dispatch (#2961)\n  > Move md4 out of FIPS module (#2956)\n  > Initial Framework for Using Doxygen to Document Public Header Files (#2908)\n  > openssl-ca command implementation for self-sign certificates (#2937)\n  > Remove AVX conditional from cmake script (#2958)\n  > Enable Hybrid PQ KeyShares by default (#2531)\n  > Add weekly automated check for outdated third-party test vectors (#2933)\n  > Bump urllib3 from 2.6.0 to 2.6.3 in /tests/ci (#2932)\n  > Prepare v1.67.0 (#2952)\n  > Bump FreeBSD testing to v14.2 and v15.0 (#2955)\n  > Fix CMake CI jobs (#2953)\n  > Update patch for nmap. (#2954)\n  > Cleanup pass on Go code in repository (#2951)\n  > Avoid cross-compilation build failure (#2944)\n  > Integrate Wycheproof ML-KEM test vectors (#2891)\n  > Use existing session context if new is actually NULL (#2946)\n  > Import mldsa-native (#2902)\n  > Windows 7 support (#2940)\n  > Remove Kyber completely (#2941)\n  > Use already defined macro for no inline (#2942)\n  > AES-GCM: Add function pointer trampolines to avoid delocator issue (#2919)\n  > Add support for Big Endian in ACVP tool (#2938)\n  > Service Indicator: Add error call trampoline to avoid delocator issue (#2920)\n  > Fix failing Windows Docker image build (#2931)\n  > Rename volatile state/memory to unique state/memory (#2935)\n  > increase timeout for SDE tests (#2936)\n  > Migrate Wycheproof test vectors for ECDSA, RSA PKCS#1, and some more (#2887)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 3276a087..f5e5e830:\n  > chore: rust binding release v0.3.34 (#5707)\n  > chore: add static lists of supported TLS parameters (#5698)\n  > feat(bindings): expose disable_x509_intent_verification API (#5703)\n  > test (integration): add renegotiate rust test (#5689)\n  > test(integration): add rust test for session resumption (#5683)\n  > chore: move s2n-tls-bench to Codebuild (#5693)\n  > chore: update s2n-tls-hyper crates version to 0.1.0 (#5702)\n  > Mark Kyber as unsupported on all LibCrypto variants (#5701)\n  > chore: bump standard MSRV to 1.83 (#5700)\n  > chore: bump to nixpkgs 2025.05 (#5489)\n  > build(deps): update reqwest requirement from 0.12.7 to 0.13.1 in /tests/pcap in the all-cargo-updates group across 1 directory (#5690)\n  > (chore): Rust bindings bump 0.3.33 (#5694)\n```\n\n\n</details>\n\nConfirmed the crate size is under the 10MiB limit (8.3MiB compressed)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-03-10T10:36:51Z",
          "tree_id": "8aa074215eb0f1357c6bdf9c18daed19542706ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e042567569dedfe47397ee0dc023917771faefb"
        },
        "date": 1773146472492,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1373.69375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2345.16455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 900.08974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1669.95224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 305.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 750.9412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 219.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.0080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4203.17255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4469.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1315.57177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.76435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 781.69599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 795.06728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1098.876171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.79267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1247.00244140625,
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
          "id": "43618edd0ccfb65c7264eeeca35cab59e4741cbf",
          "message": "CI: Run Clippy on macOS (#1786)\n\nAdd clippy to the macOS workflow. It will help detect issues like #1785\nearly.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-12T12:24:24Z",
          "tree_id": "293d67e3c74b0b61d7e55481a4d31228a782d02c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43618edd0ccfb65c7264eeeca35cab59e4741cbf"
        },
        "date": 1773325689791,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1392.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2161.4458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 866.5201171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1669.8458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.0404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 686.159765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.7658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.63037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4505.46279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4555.47763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1415.65908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1376.65205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 869.15810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 824.51630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.70419921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 976.40390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1505.09921875,
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
          "id": "0a205061c3231ef239d67c6836d1cb94aaaeabb0",
          "message": "Add developer container to support running integration tests, etc. on macOS (#1780)\n\nOn macOS, it is not considered reliable to run the integration tests for\nFUSE. This PR introduces a container for performing development-related\ntasks, but in particular running integration tests.\n\nThis allows developers using a macOS system to run FUSE tests using a\nreal Linux kernel (when using something like Docker Desktop, Colima,\nFinch, etc..).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, developer change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-13T10:23:17Z",
          "tree_id": "97f08ec0d1b4b9c529653eba5a90b5db47d8f6d1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a205061c3231ef239d67c6836d1cb94aaaeabb0"
        },
        "date": 1773404778363,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1387.2390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2173.4044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 888.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1627.55751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.922265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.20771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 215.09912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 352.14951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4501.366796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4795.27939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1480.82451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1400.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 903.0494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 895.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1328.8787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1279.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1383.533984375,
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
          "id": "7c41baaa3ca29d9f0215573fb3bb9e6303150e9d",
          "message": "Update dev container to support local cache tests depending on loopback fs (#1788)\n\nBefore this change, running integration tests in the container would\nfail as it would not be able to run sudo, create the ext4 filesystem\netc. introduced by #1779.\n\nThis change updates the container to be able to invoke sudo, and adds\nmissing dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, dev container change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T14:37:38Z",
          "tree_id": "807ed655a8ee90ed37491395f499f4f382f17ab6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c41baaa3ca29d9f0215573fb3bb9e6303150e9d"
        },
        "date": 1773765861303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1365.6833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2418.34228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 880.853125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1624.55986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.7310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 454.8126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.20625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4476.82197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4450.55966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1469.9859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1360.74814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1459.92763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1700.2927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1151.5328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.88837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1189.3240234375,
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
          "id": "57116c95347e5ff868fd45853f33c26e9dad12ee",
          "message": "Update local cache loop device fs tests with better error handling (#1789)\n\nBefore this change, it was difficult to identify what was going wrong\nwith a test that involved creating a new ext4 filesystem using a loop\ndevice. It might fail simply with \"file not found\" when `sudo` was not\ninstalled.\n\nThis change updates the test to use anyhow in order to capture\nadditional context about what went wrong. The use of anyhow is limited\nto the tests and not the source code.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-17T15:10:16Z",
          "tree_id": "63e9ff6474a19b6807e1285a90c24f50cc03c892",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57116c95347e5ff868fd45853f33c26e9dad12ee"
        },
        "date": 1773768185980,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1347.93388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2237.4408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 882.36513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1645.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.594140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 499.87373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.88271484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.49765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4441.99228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4161.69580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1390.47802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1400.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1676.76767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1048.587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1296.8521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1002.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1341.0939453125,
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
          "id": "1be83cb7c78a297819cffe35d7782e84e4d3ad19",
          "message": "Bump slackapi/slack-github-action from 2.1.1 to 3.0.1 (#1791)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.1 to 3.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.1</h2>\n<h2>What's Changed</h2>\n<p>Alongside the breaking changes of <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.0\"><code>@v3.0.0</code></a>\nand a <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/\">new\ntechnique</a> to run Slack CLI commands, we tried the wrong name to\npublish to the GitHub Marketplace 🐙 This action is now noted as <a\nhref=\"https://github.com/marketplace/actions/the-slack-github-action\"><strong>The\nSlack GitHub Action</strong></a> in listings 🎶 ✨</p>\n<h3>:art: Maintenance</h3>\n<ul>\n<li>chore: use a unique title for marketplace in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/576\">slackapi/slack-github-action#576</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>chore(release): tag version 3.0.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/577\">slackapi/slack-github-action#577</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1\">https://github.com/slackapi/slack-github-action/compare/v3.0.0...v3.0.1</a></p>\n<h2>Slack GitHub Action v3.0.0</h2>\n<blockquote>\n<p>The <code>@v3.0.0</code> release had a hiccup on publish and we\nrecommend using <a\nhref=\"https://github.com/slackapi/slack-github-action/releases/tag/v3.0.1\"><strong><code>@​v3.0.1</code></strong></a>\nor a more recent version when updating! Oops!</p>\n</blockquote>\n<p>🎽 <strong>Running Slack CLI commands and the active Node runtime,\nboth included in this release</strong> 👟 ✨</p>\n<h3>⚠️ Breaking change: Node.js 24 the runtime</h3>\n<p>This major version updates the GitHub Actions required runtime to <a\nhref=\"https://nodejs.org/en/about/previous-releases\"><strong>Node.js\n24</strong>.</a> Most <a\nhref=\"https://github.com/actions/runner-images?tab=readme-ov-file#software-and-image-support\">GitHub-hosted\nrunners</a> already include this, but self-hosted runners may need to be\nupdated ahead of <a\nhref=\"https://github.blog/changelog/2025-09-19-deprecation-of-node-20-on-github-actions-runners/\">planned\ndeprecations of Node 20 on GitHub Actions runners</a>.</p>\n<h3>📺 Enhancement: Run Slack CLI commands</h3>\n<p>This release introduces a new technique for running <a\nhref=\"https://docs.slack.dev/tools/slack-cli\">Slack CLI</a> commands\ndirectly in GitHub Actions workflows. Use this to install the latest\nversion (or a specific one) of the CLI and execute commands like\n<code>deploy</code> for merges to main, <code>manifest validate</code>\nwith tests, and other <a\nhref=\"https://docs.slack.dev/tools/slack-cli/reference/commands/slack\">commands</a>.</p>\n<p>Gather a token using the following CLI command to store with repo\nsecrets, then get started with an example below:</p>\n<pre><code>$ slack auth token\n</code></pre>\n<h3>🧪 Validate an app manifest on pull requests</h3>\n<p>Check that your app manifest is valid before merging changes:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/validate-a-manifest</a></p>\n<pre lang=\"yaml\"><code>- name: Validate the manifest\n  uses: slackapi/slack-github-action/cli@v3.0.0\n  with:\ncommand: &quot;manifest validate --app ${{ vars.SLACK_APP_ID }}&quot;\n    token: ${{ secrets.SLACK_SERVICE_TOKEN }}\n</code></pre>\n<h3>🚀 Deploy your app on push to main</h3>\n<p>Automate deployments whenever changes land on your main branch:</p>\n<p>🔗 <a\nhref=\"https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app\">https://docs.slack.dev/tools/slack-github-action/sending-techniques/running-slack-cli-commands/deploy-an-app</a></p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/af78098f536edbc4de71162a307590698245be95\"><code>af78098</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/add1a00063f351e4c0e55c3703da81637f03a8be\"><code>add1a00</code></a>\nchore(release): tag version 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/577\">#577</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/2bc9e7a4cd10f4d06ef49b8fa8a11efdc7fb891b\"><code>2bc9e7a</code></a>\nchore: use a unique title for marketplace (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/576\">#576</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5d43dad17bba7ebd47486137b9ab6936fd6bbf4\"><code>c5d43da</code></a>\nchore(release): tag version 3.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/575\">#575</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/963b9796dcc3184602a0aefe2f052d034027bfaf\"><code>963b979</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.14.1 to 7.15.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/574\">#574</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/90b7328a4cea35bd9dc6fc64d7f70e772d6d5876\"><code>90b7328</code></a>\nbuild(deps): bump <code>@​slack/logger</code> from 4.0.0 to 4.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/573\">#573</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e45cb891a61f925570820f137980df2028625fec\"><code>e45cb89</code></a>\nfeat: support slack cli commands with composite action inputs (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/560\">#560</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0aed2c2a70fe17c67bfd489b5dc3d9b410f69f79\"><code>0aed2c2</code></a>\nbuild(deps): bump https-proxy-agent from 7.0.6 to 8.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/572\">#572</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/4795f96c2818074349810cac0abc3bf5437bdc2c\"><code>4795f96</code></a>\nbuild(deps-dev): bump sinon from 21.0.1 to 21.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/571\">#571</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/bd9e2ce619554772120b8cfcbbc7fe4bd2d42a2f\"><code>bd9e2ce</code></a>\nbuild(deps): bump actions/setup-node from 6.2.0 to 6.3.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/569\">#569</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.1...v3.0.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.1&new-version=3.0.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-03-17T16:05:49Z",
          "tree_id": "c9ed45fb7b9e1caaa063e173f7c310ae62c7d5a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1be83cb7c78a297819cffe35d7782e84e4d3ad19"
        },
        "date": 1773772980321,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1432.82353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2182.7185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 890.63388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1685.27001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 325.3478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.83408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 233.8150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4110.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4576.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1340.3134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1369.63642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 910.77734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1108.23994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1430.6384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.3912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1409.4642578125,
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
          "distinct": true,
          "id": "e7eaeb6717b9ca938c8d8fa14006bcd32c765da6",
          "message": "Update changelogs for v1.22.2 release (#1794)\n\nUpdate changelogs for v1.22.2 release.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Tadiwa Magwenzi <87494144+tadiwa-aizen@users.noreply.github.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-03-20T15:11:04Z",
          "tree_id": "d3517aaf8f5617f8a9ace3424b0acd952f5962f2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e7eaeb6717b9ca938c8d8fa14006bcd32c765da6"
        },
        "date": 1774026991870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1389.296484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2362.58818359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 884.21181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1651.55888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.2365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 388.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.25419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.39892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4777.1509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4580.37197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1340.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1439.6470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 927.359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1173.18642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1419.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 956.2658203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "55d81b6a748372c4e9e4164dfbf80bf02168c257",
          "message": "Update usages of GPG public keys with new rotated key (#1795)\n\nWe have a new GPG public key because the old one will expire soon. In\nthis PR we:\n- Update the usages of the public keys in the documentation with the new\none.\n- Simplify the `docker/Dockerfile` by installing `mount-s3` from AL2023\npackage repository\n\nTesting:\n```\n$ docker build -t mountpoint-s3 docker/\n[+] Building 16.9s (7/7) FINISHED                                                                                                                                                                                                                                              docker:default\n => [internal] load build definition from Dockerfile                                                                                                                                                                                                                                     0.0s\n => => transferring dockerfile: 334B                                                                                                                                                                                                                                                     0.0s\n => [internal] load metadata for public.ecr.aws/amazonlinux/amazonlinux:2023                                                                                                                                                                                                             1.2s\n => [internal] load .dockerignore                                                                                                                                                                                                                                                        0.0s\n => => transferring context: 2B                                                                                                                                                                                                                                                          0.0s\n => CACHED [1/3] FROM public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                0.0s\n => => resolve public.ecr.aws/amazonlinux/amazonlinux:2023@sha256:139c488a2b47155ccb61262cfe299509793a8edad74572473e14960630f1559a                                                                                                                                                       0.0s\n => [2/3] RUN dnf upgrade -y &&     dnf install -y mount-s3 &&     dnf clean all                                                                                                                                                                                                        14.9s\n => [3/3] RUN echo \"user_allow_other\" >> /etc/fuse.conf                                                                                                                                                                                                                                  0.6s\n => exporting to image                                                                                                                                                                                                                                                                   0.1s \n => => exporting layers                                                                                                                                                                                                                                                                  0.1s \n => => writing image sha256:3ba80d05a326e4049cfeefb1d09697d977eaebfdcfcce565308e5de293a5f143                                                                                                                                                                                             0.0s \n => => naming to docker.io/library/mountpoint-s3                                                                                                                                                                                                                                         0.0s \n\n$ docker run --rm mountpoint-s3 --version\nmount-s3 1.22.0+1.amzn2023\n```\n\n### Does this change impact existing behavior?\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nYes (in the release commit) and no.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-03-20T16:22:45Z",
          "tree_id": "aa7c2c082e5e2d9d5d865e1e51099f70768a366b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55d81b6a748372c4e9e4164dfbf80bf02168c257"
        },
        "date": 1774031268353,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1384.74501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2273.4095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 826.0119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1633.39208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.44248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.8224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.5013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 242.68544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4234.2392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4583.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.0001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1386.41025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 909.543359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1497.62333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1081.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1009.06669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1304.6142578125,
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
          "id": "813d41a1826d02288912ff7f72f118bedc2dcc64",
          "message": "Update Cargo dependencies (#1797)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-03-23T11:14:08Z",
          "tree_id": "eeeaf89f1bdf841214f4b0bb48bb4d216727f455",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/813d41a1826d02288912ff7f72f118bedc2dcc64"
        },
        "date": 1774271882092,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1390.60478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2267.79052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.1505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1622.30625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 285.896875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 718.29638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 238.33251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4114.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4713.4251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1389.35263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1359.6626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 810.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1372.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1217.97138671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 986.221875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1165.1548828125,
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
          "id": "6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2",
          "message": "Add dev-container environment variable propagation allowlist (#1792)\n\nTo debug an issue, I wanted to use a different logging level in tests.\nThis change adds an allowlist of environment variables to automatically\npass into the dev-container.\n\n### Does this change impact existing behavior?\n\nNo, dev-container change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-23T16:06:04Z",
          "tree_id": "d4a007c7e3899b2a7805e2c8c3578748da154b2e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f30ab61f7bb07b0bbde5d1c3cc4d474b6e75dc2"
        },
        "date": 1774289623933,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1361.84501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2287.7625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.6091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1732.28466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.035546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.89931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 218.27216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 270.78955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4089.68564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4302.1177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1254.269140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1374.14501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 876.47197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 888.20322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1037.87666015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1049.91806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 995.5494140625,
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
          "id": "fd1c93202af0b75eaff505ffeeb08cc283048b4f",
          "message": "Add client error for S3 Express session creation failure (#1793)\n\nThis change introduces a proper S3 client error for when the CRT fails\nto create an S3 Express session, such as when having no authorization to\ndo so.\n\nInstead of a CRT error code, the customer will now see a clear message\n\"Failed to create S3 Express session, see CRT debug logs\".\n\nThis change also updates many tests that were previously testing S3\ngeneral purpose buckets to correctly test S3 Express / directory\nbuckets.\n\n### Does this change impact existing behavior?\n\nYes, it improves S3 Express session creation failure error messages. It\nincludes a call to action to direct the customer to check CRT debug logs\nto help them resolve the issue.\n\nIn the client, it introduces a new error variant.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nGiven the new error variant, the S3 client is a unstable minor version\nbump. (Effectively major.)\n\nFor all other crates and MP itself, a patch version bump has been\napplied, alongside changelog entries. The change is fairly minimal.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T11:22:07Z",
          "tree_id": "88c5ee68d8cdf7f802dbdc0228a84d9dc0e624af",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fd1c93202af0b75eaff505ffeeb08cc283048b4f"
        },
        "date": 1774617966037,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1400.766796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2245.96396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 845.50009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1650.8005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 692.85302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 212.9015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 243.8380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4054.86025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4448.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1337.81552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1364.459765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 866.18642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 830.0634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1304.83681640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 996.67490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.66103515625,
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
          "id": "57cd918400cb3448f523c801fe11dc9675c93fdb",
          "message": "Update Mountpoint crates to track dependencies between each other via workspace manifest, update dependencies (#1799)\n\nThis is a simple change to where the dependencies between Mountpoint\ncrates resides. Instead of this being scattered and duplicated across\nthe crate manifests, each manifest instead declares a dependency where\nthe specifics of the dependency are defined on the workspace. In the\nworkspace, we define the version, path, and features.\n\nThe motivation is to reduce the burden when making changes to the\nversion numbers of our crates.\n\nThis change also updates some dependencies via `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just Cargo manifest updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-03-27T13:03:13Z",
          "tree_id": "931b3c3fd031de31ad6a6c791c9d4699872a0870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57cd918400cb3448f523c801fe11dc9675c93fdb"
        },
        "date": 1774623971049,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1378.39443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2357.8517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 833.5775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1655.54033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.27568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 590.5908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.0982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4264.783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4585.83994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1520.56455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1339.278515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 987.2423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 799.4513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1189.74736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1257.87001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1392.2763671875,
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
          "id": "90bc1bfe91575198b5e3b413bb6b89b5dca2af6c",
          "message": "Remove last usages of forbidden CI bucket (#1802)\n\nThis change removes the last of the 'forbidden bucket' test\ndependencies. The tests were previously dependent on a bucket with a\npolicy banning almost all S3 operations. Instead, we now use session\npolicies to restrict access on a per-test basis.\n\n### Does this change impact existing behavior?\n\nTest change only. Removes the need to supply a forbidden bucket for\ntests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, test change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-04-08T13:57:32Z",
          "tree_id": "a3b2608bb8cf0baac3ae6f159a3c5c361c66eb79",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90bc1bfe91575198b5e3b413bb6b89b5dca2af6c"
        },
        "date": 1775664269970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1343.1564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2209.376171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 908.58017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1702.256640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.27763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 714.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.53935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.81318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4137.40078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4438.13984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1534.70771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1371.7759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 770.98134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1500.83876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1398.62705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1176.5736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1145.40263671875,
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
          "id": "3a5e2d4981df3e21765c730618fa1eafa09dd14e",
          "message": "Bump rand from 0.10.0 to 0.10.1 (#1805)\n\nBumps [rand](https://github.com/rust-random/rand) from 0.10.0 to 0.10.1.\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/rust-random/rand/blob/master/CHANGELOG.md\">rand's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>[0.10.1] — 2026-02-11</h2>\n<p>This release includes a fix for a soundness bug; see <a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>.</p>\n<h3>Changes</h3>\n<ul>\n<li>Document panic behavior of <code>make_rng</code> and add\n<code>#[track_caller]</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li>Deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n</ul>\n<p><a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1761\">rust-random/rand#1761</a>\n<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>:\n<a\nhref=\"https://redirect.github.com/rust-random/rand/pull/1763\">rust-random/rand#1763</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/27ff4cb7ced3122a1f677fc248c1a07e59ddc8cd\"><code>27ff4cb</code></a>\nPrepare v0.10.1: deprecate feature <code>log</code> (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1763\">#1763</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/98d06386dc4e1d1c89a91f4e483d571921c29ecf\"><code>98d0638</code></a>\nmake_rng: document panic and add #[track_caller] (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1761\">#1761</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/54e5eaaa7ac11af3aa60b5ccc486182189e6f9ef\"><code>54e5eaa</code></a>\nFix doc error (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1758\">#1758</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/1ce4c080186730595a8d464591d17aac22a42252\"><code>1ce4c08</code></a>\nBump itoa from 1.0.17 to 1.0.18 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1756\">#1756</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/ccb734b9c22891a19f11be125c2f09a43809b08e\"><code>ccb734b</code></a>\ndocs: fix typo in doc comment (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1754\">#1754</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/357eb7de9c9c80184449e8b515c821e48cf4df74\"><code>357eb7d</code></a>\nBump libc from 0.2.182 to 0.2.183 in the all-deps group (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1753\">#1753</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/5e77fe5d61b886988cae67b6d8fb09e405845c63\"><code>5e77fe5</code></a>\nFix trait references in documentation (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1752\">#1752</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/da891850ab2b38f4322ec140ae29d305dfb162c3\"><code>da89185</code></a>\nBump the all-deps group with 3 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1751\">#1751</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/50516ff45c3675d9c2d247e70bc8db691ed8366d\"><code>50516ff</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1749\">#1749</a>)</li>\n<li><a\nhref=\"https://github.com/rust-random/rand/commit/fd71de97fdc7050b9a2d8384f5f8afce7d991ca3\"><code>fd71de9</code></a>\nBump the all-deps group with 2 updates (<a\nhref=\"https://redirect.github.com/rust-random/rand/issues/1747\">#1747</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/rust-random/rand/compare/0.10.0...0.10.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=rand&package-manager=cargo&previous-version=0.10.0&new-version=0.10.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-14T15:45:15Z",
          "tree_id": "2ce5a955925bab2ea8a698d714fa151014d315b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a5e2d4981df3e21765c730618fa1eafa09dd14e"
        },
        "date": 1776190144880,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1430.28759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2417.11650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.30947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1612.5833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 328.99423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 637.04658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.7171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.20859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4496.584765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4918.14306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1553.7359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1431.983984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 773.9130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 890.90771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1355.6392578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1003.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1545.6689453125,
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
          "id": "4625a683175a83619d8e9967f85e025ded4711bc",
          "message": "Update Cargo dependencies (#1811)\n\nRun `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased `mount-s3` patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-17T23:17:48Z",
          "tree_id": "dac787a5797eac8f4a50e7da0cd2db79a1e0f501",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4625a683175a83619d8e9967f85e025ded4711bc"
        },
        "date": 1776475622939,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1406.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2397.79990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.4255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1649.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 296.29482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 751.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 237.4140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4054.34306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4656.866796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1226.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1417.10556640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 932.7193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1560.69609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1427.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1217.18193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 988.993359375,
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
          "id": "49dd2df24d8c6adacd34e30df5b63026750578be",
          "message": "Bump pygments from 2.19.2 to 2.20.0 in /benchmark (#1803)\n\nBumps [pygments](https://github.com/pygments/pygments) from 2.19.2 to\n2.20.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/releases\">pygments's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.20.0</h2>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pygments/pygments/blob/master/CHANGES\">pygments's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>Version 2.20.0</h2>\n<p>(released March 29th, 2026)</p>\n<ul>\n<li>\n<p>New lexers:</p>\n<ul>\n<li>Rell (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2914\">#2914</a>)</li>\n</ul>\n</li>\n<li>\n<p>Updated lexers:</p>\n<ul>\n<li>archetype: Fix catastrophic backtracking in GUID and ID patterns (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3064\">#3064</a>)</li>\n<li>ASN.1: Recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3014\">#3014</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li>C++: Add C++26 keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>),\nadd integer literal suffixes (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2966\">#2966</a>)</li>\n<li>ComponentPascal: Fix <code>analyse_text</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3028\">#3028</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3032\">#3032</a>)</li>\n<li>Coq renamed to Rocq (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2883\">#2883</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2908\">#2908</a>)</li>\n<li>Cython: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2932\">#2932</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2933\">#2933</a>)</li>\n<li>Debian control: Improve architecture parsing (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3052\">#3052</a>)</li>\n<li>Devicetree: Add support for overlay/fragments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3021\">#3021</a>),\nadd bytestring support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3022\">#3022</a>),\nfix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3057\">#3057</a>)</li>\n<li>Fennel: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2911\">#2911</a>)</li>\n<li>Haskell: Handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/1795\">#1795</a>)</li>\n<li>Java: Add module keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2955\">#2955</a>)</li>\n<li>Lean4: Add operators <code>]'</code>, <code>]?</code>,\n<code>]!</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2946\">#2946</a>)</li>\n<li>LESS: Support single-line comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3005\">#3005</a>)</li>\n<li>LilyPond: Update to 2.25.29 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2974\">#2974</a>)</li>\n<li>LLVM: Support C-style comments (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3023\">#3023</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2978\">#2978</a>)</li>\n<li>Lua(u): Fix catastrophic backtracking (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3047\">#3047</a>)</li>\n<li>Macaulay2: Update to 1.25.05 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2893\">#2893</a>),\n1.25.11 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2988\">#2988</a>)</li>\n<li>Mathematica: Various improvements (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2957\">#2957</a>)</li>\n<li>meson: Add additional operators (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2919\">#2919</a>)</li>\n<li>MySQL: Update keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2970\">#2970</a>)</li>\n<li>org-Mode: Support both schedule and deadline (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2899\">#2899</a>)</li>\n<li>PHP: Add <code>__PROPERTY__</code> magic constant (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2924\">#2924</a>),\nadd reserved keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3002\">#3002</a>)</li>\n<li>PostgreSQL: Add more keywords (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2985\">#2985</a>)</li>\n<li>protobuf: Fix namespace tokenization (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2929\">#2929</a>)</li>\n<li>Python: Add <code>t</code>-string support (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2973\">#2973</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3009\">#3009</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3010\">#3010</a>)</li>\n<li>Tablegen: Fix infinite loop (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2972\">#2972</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2940\">#2940</a>)</li>\n<li>Tera Term macro: Add commands introduced in v5.3 through v5.6 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2951\">#2951</a>)</li>\n<li>TOML: Support TOML 1.1.0 (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3026\">#3026</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3027\">#3027</a>)</li>\n<li>Turtle: Allow empty comment lines (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2980\">#2980</a>)</li>\n<li>XML: Added <code>.xbrl</code> as file ending (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2890\">#2890</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2891\">#2891</a>)</li>\n</ul>\n</li>\n<li>\n<p>Drop Python 3.8, and add Python 3.14 as a supported version (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2987\">#2987</a>,\n<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3012\">#3012</a>)</p>\n</li>\n<li>\n<p>Various improvements to <code>autopygmentize</code> (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2894\">#2894</a>)</p>\n</li>\n<li>\n<p>Update <code>onedark</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2977\">#2977</a>)</p>\n</li>\n<li>\n<p>Update <code>rtt</code> style to support more token types (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2895\">#2895</a>)</p>\n</li>\n<li>\n<p>Cache entry points to improve performance (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/2979\">#2979</a>)</p>\n</li>\n<li>\n<p>Fix <code>xterm-256</code> color table (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3043\">#3043</a>)</p>\n</li>\n<li>\n<p>Fix <code>kwargs</code> dictionary getting mutated on each call (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3044\">#3044</a>)</p>\n</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/708197d82827ba2d5ca78bcbb653c7102ce86dcd\"><code>708197d</code></a>\nFix underline length.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d4538ae8621d766ecc91ff59caf76ab75983abc\"><code>1d4538a</code></a>\nPrepare 2.20 release.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/2ceaee4e634eebae2d10a47fd05406871f6bac8f\"><code>2ceaee4</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/e3a3c54b58c7f80bc4db887e471d4f91c77844ed\"><code>e3a3c54</code></a>\nFix Haskell lexer: handle escape sequences in character literals (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3069\">#3069</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/d7c3453e342dac319f58e4091f4ef183cc49d802\"><code>d7c3453</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3071\">#3071</a>\nfrom pygments/harden-html-formatter</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/0f97e7c37d44abfa4ddfddf44a3290fdad586034\"><code>0f97e7c</code></a>\nHarden the HTML formatter against CSS.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/9f981b2ba42b88ca5bdcebf12cd01efd7cd80aec\"><code>9f981b2</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/1d889151024e9a53f3702a60558b29b070306e9e\"><code>1d88915</code></a>\nUpdate CHANGES.</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/c3d93adb9827fc054c3c12b47bde31c781a36a93\"><code>c3d93ad</code></a>\nFix ASN.1 lexer: recognize minus sign and fix range operator (<a\nhref=\"https://redirect.github.com/pygments/pygments/issues/3060\">#3060</a>)</li>\n<li><a\nhref=\"https://github.com/pygments/pygments/commit/4f06bcf8a5ba3f2b5bda24a26ccf041a1a65d91e\"><code>4f06bcf</code></a>\nfix bad behaving backtracking regex in CommonLispLexer</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pygments/pygments/compare/2.19.2...2.20.0\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pygments&package-manager=uv&previous-version=2.19.2&new-version=2.20.0)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-17T23:18:51Z",
          "tree_id": "fd96b6795171141aa6958932ddb0d93050463a22",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49dd2df24d8c6adacd34e30df5b63026750578be"
        },
        "date": 1776476673934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1403.02353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2280.51171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.34638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1706.1369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.726953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 448.79443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 173.57529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.4630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3999.962109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4336.95166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1450.6224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1395.91435546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1609.65498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1241.32724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1127.76181640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 971.67001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.93701171875,
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
          "id": "b05b605e488ec6b65330d2ffc4c1d652c6790e8c",
          "message": "Bump pytest from 8.4.1 to 9.0.3 in /benchmark (#1807)\n\nBumps [pytest](https://github.com/pytest-dev/pytest) from 8.4.1 to\n9.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/pytest-dev/pytest/releases\">pytest's\nreleases</a>.</em></p>\n<blockquote>\n<h2>9.0.3</h2>\n<h1>pytest 9.0.3 (2026-04-07)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12444\">#12444</a>:\nFixed <code>pytest.approx</code> which now correctly takes into account\n<code>~collections.abc.Mapping</code> keys order to compare them.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13634\">#13634</a>:\nBlocking a <code>conftest.py</code> file using the <code>-p no:</code>\noption is now explicitly disallowed.</p>\n<p>Previously this resulted in an internal assertion failure during\nplugin loading.</p>\n<p>Pytest now raises a clear <code>UsageError</code> explaining that\nconftest files are not plugins and cannot be disabled via\n<code>-p</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13734\">#13734</a>:\nFixed crash when a test raises an exceptiongroup with\n<code>__tracebackhide__ = True</code>.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14195\">#14195</a>:\nFixed an issue where non-string messages passed to <!-- raw HTML omitted\n-->unittest.TestCase.subTest()<!-- raw HTML omitted --> were not\nprinted.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>:\nFixed use of insecure temporary directory (CVE-2025-71176).</p>\n</li>\n</ul>\n<h2>Improved documentation</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13388\">#13388</a>:\nClarified documentation for <code>-p</code> vs\n<code>PYTEST_PLUGINS</code> plugin loading and fixed an incorrect\n<code>-p</code> example.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13731\">#13731</a>:\nClarified that capture fixtures (e.g. <code>capsys</code> and\n<code>capfd</code>) take precedence over the <code>-s</code> /\n<code>--capture=no</code> command-line options in <code>Accessing\ncaptured output from a test function\n&lt;accessing-captured-output&gt;</code>.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14088\">#14088</a>:\nClarified that the default <code>pytest_collection</code> hook sets\n<code>session.items</code> before it calls\n<code>pytest_collection_finish</code>, not after.</li>\n<li><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14255\">#14255</a>:\nTOML integer log levels must be quoted: Updating reference\ndocumentation.</li>\n</ul>\n<h2>Contributor-facing changes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12689\">#12689</a>:\nThe test reports are now published to Codecov from GitHub Actions.\nThe test statistics is visible <a\nhref=\"https://app.codecov.io/gh/pytest-dev/pytest/tests\">on the web\ninterface</a>.</p>\n<p>-- by <code>aleguy02</code></p>\n</li>\n</ul>\n<h2>9.0.2</h2>\n<h1>pytest 9.0.2 (2025-12-06)</h1>\n<h2>Bug fixes</h2>\n<ul>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13896\">#13896</a>:\nThe terminal progress feature added in pytest 9.0.0 has been disabled by\ndefault, except on Windows, due to compatibility issues with some\nterminal emulators.</p>\n<p>You may enable it again by passing <code>-p terminalprogress</code>.\nWe may enable it by default again once compatibility improves in the\nfuture.</p>\n<p>Additionally, when the environment variable <code>TERM</code> is\n<code>dumb</code>, the escape codes are no longer emitted, even if the\nplugin is enabled.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13904\">#13904</a>:\nFixed the TOML type of the <code>tmp_path_retention_count</code>\nsettings in the API reference from number to string.</p>\n</li>\n<li>\n<p><a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/13946\">#13946</a>:\nThe private <code>config.inicfg</code> attribute was changed in a\nbreaking manner in pytest 9.0.0.\nDue to its usage in the ecosystem, it is now restored to working order\nusing a compatibility shim.\nIt will be deprecated in pytest 9.1 and removed in pytest 10.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/a7d58d7a21b78581e636bbbdea13c66ad1657c1e\"><code>a7d58d7</code></a>\nPrepare release version 9.0.3</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/089d98199c253d8f89a040243bc4f2aa6cd5ab22\"><code>089d981</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14366\">#14366</a>\nfrom bluetech/revert-14193-backport</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/8127eaf4ab7f6b2fdd0dc1b38343ec97aeef05ac\"><code>8127eaf</code></a>\nRevert &quot;Fix: assertrepr_compare respects dict insertion order (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14050\">#14050</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14193\">#14193</a>)&quot;</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/99a7e6029e7a6e8d53e5df114b1346e035370241\"><code>99a7e60</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14363\">#14363</a>\nfrom pytest-dev/patchback/backports/9.0.x/95d8423bd...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/ddee02a578da30dd43aedc39c1c1f1aaadfcee95\"><code>ddee02a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14343\">#14343</a>\nfrom bluetech/cve-2025-71176-simple</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/74eac6916fee34726cb194f16c516e96fbd29619\"><code>74eac69</code></a>\ndoc: Update training info (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14298\">#14298</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14301\">#14301</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/f92dee777cfdb77d1c43633d02766ddf1f07c869\"><code>f92dee7</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14267\">#14267</a>\nfrom pytest-dev/patchback/backports/9.0.x/d6fa26c62...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/7ee58acc8777c31ac6cf388d01addf5a414a7439\"><code>7ee58ac</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/12378\">#12378</a>\nfrom Pierre-Sassoulas/fix-implicit-str-concat-and-d...</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/37da870d37e3a2f5177cae075c7b9ae279432bf8\"><code>37da870</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14259\">#14259</a>\nfrom mitre88/patch-4 (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14268\">#14268</a>)</li>\n<li><a\nhref=\"https://github.com/pytest-dev/pytest/commit/c34bfa3b7acb65b594707c714f1d8461b0304eed\"><code>c34bfa3</code></a>\nAdd explanation for string context diffs (<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14257\">#14257</a>)\n(<a\nhref=\"https://redirect.github.com/pytest-dev/pytest/issues/14266\">#14266</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/pytest-dev/pytest/compare/8.4.1...9.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=pytest&package-manager=uv&previous-version=8.4.1&new-version=9.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-04-18T07:23:24Z",
          "tree_id": "2f703944b7dff2ba473abc4efca2e58cec6155f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b05b605e488ec6b65330d2ffc4c1d652c6790e8c"
        },
        "date": 1776504449443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1402.66435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2280.77431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 863.6048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1663.78125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 282.64267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 661.19580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 221.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 253.81015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4170.58623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4694.39833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1272.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1343.0458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1036.66328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 782.87607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1393.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1048.81611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1376.8310546875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmag@amazon.co.uk",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "59cfc3c750549a97d4badf853170cae9b15a4d09",
          "message": "Propagate file handle ID through the prefetcher as a HandleId type (#1809)\n\nWe need to attribute CRT meta-request buffer allocations back to the\nfile handle that originated them. This is a prerequisite for per-handle\nmemory accounting in the `MemoryLimiter`.\n\nThis PR threads the FUSE file handle ID (`fh`) from the point where a\nfile is opened (`FileHandleState::new`) all the way down to\n`GetObjectParams`, where it is available in scope when the CRT\nmeta-request is created. The changes are purely additive data threading\n— no existing logic is altered.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is an internal refactor with no user-visible behavior change\nand no public API impact.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-04-21T13:19:02Z",
          "tree_id": "e28bb22929a99eedebef02b67b2c74728aca85ca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59cfc3c750549a97d4badf853170cae9b15a4d09"
        },
        "date": 1776785056547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1344.5029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2223.86376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 866.64638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1650.12060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 302.57353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 502.8619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 201.86669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.312890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4307.32841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4784.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1412.248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1395.86142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1496.5103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1693.3046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1383.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1019.42490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1334.10556640625,
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
          "id": "572e73b6691d01966f3f10bf1d10b5d649346278",
          "message": "Bump rustls-webpki from 0.103.12 to 0.103.13 (RUSTSEC-2026-0104) (#1814)\n\nBumps rustls-webpki to 0.103.13 to fix a security vulnerability\n(RUSTSEC-2026-0104).\nCargo.lock only, no code changes.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T12:51:43Z",
          "tree_id": "8f708e74f21aee814535717b6c96bbbdf84117ab",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/572e73b6691d01966f3f10bf1d10b5d649346278"
        },
        "date": 1776870751508,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1315.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2154.2294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 853.4119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1629.27578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 314.07822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 551.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.71123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.43408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4273.57451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4782.33671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1258.512890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1421.6775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1465.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1248.84365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1330.14443359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1234.14501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1016.26044921875,
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
          "id": "912f18414eb1947362edef64501dfbc21fb92c82",
          "message": "Thread request ID from meta-request options into CRT buffer pool reservations (#1812)\n\nWe need to be able to identify which meta-request a buffer allocation\nbelongs to at the CRT pool layer.\n\nThis PR adds an optional `custom_id` to `MetaRequestOptionsInner` and\nexposes it through `MetaRequest`, which is now passed directly to\n`MemoryPool::get_buffer` / `get_buffer_async`. The identifier can be set\nvia `GetObjectParams::custom_id` and `PutObjectParams::custom_id` in the\nclient crate.\n\n\n### Does this change impact existing behavior?\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nThe `MemoryPool` trait signature changed, but the trait is marked\nexperimental. No user-visible behavior change otherwise.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-22T14:53:34Z",
          "tree_id": "3bb89fe1d597eb5d271dad40ddae5b16b16ad701",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/912f18414eb1947362edef64501dfbc21fb92c82"
        },
        "date": 1776877390859,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1395.44111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2358.58505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 884.82666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1684.96728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 300.6322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 437.16416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 217.44990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.222265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4151.74677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4495.86376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1315.69306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1369.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 899.19453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 857.90849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1376.84609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.83486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1251.248828125,
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
          "id": "2e31ed5bca353e0b3c912c58769b040e117970dc",
          "message": "Pass HandleId as custom_id in S3 request params (#1815)\n\nConnects the file handle ID to S3 request params, completing the link\nbetween PR #1809 (HandleId through prefetcher) and PR #1812 (custom_id\nthrough CRT buffer pool).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-04-23T15:11:04Z",
          "tree_id": "10430fff1d46b8832452ee6de66be30c0717b765",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2e31ed5bca353e0b3c912c58769b040e117970dc"
        },
        "date": 1776964595317,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1342.685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2158.87919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 846.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1637.39501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.42314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 512.36416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 248.6921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 282.18828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4725.88271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4608.279296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1264.10126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1438.737109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1629.316796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 773.710546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1263.297265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1006.4671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1121.3353515625,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "72e3a504cfb783ca2d76844461fa1c879238ee67",
          "message": "bench: Add memory-limited FIO benchmarks with breach detection (#1808)\n\n## Summary\n\nExtend the existing FIO throughput benchmarks CI so that each supported\nworkload also runs with Mountpoint built using `--features mem_limiter`\nand mounted with `--max-memory-target=512` (MiB - fixed). Under this\nextra pressure, Mountpoint must stay within the configured budget; the\nnew jobs surface per-test peak memory usage in a GitHub Actions step\nsummary table so regressions/improvements in the memory limiter are easy\nto spot.\n\nNon-latency only. Same FIO job definitions are used for both the regular\nand memory-limited variants.\n\n- The existing `bench` (S3 Standard), `cache-bench`, and S3 Express\n`bench` jobs are extended with a `strategy.matrix` that fans each one\nout to two variants:\n  - `default` — unchanged behaviour.\n- `mem-limited` — builds with `--features mem_limiter`, runs with\n`S3_MAX_MEMORY_TARGET_MIB=512`, and emits an extra GitHub Actions\nsummary table.\n\nThe matrix also drives per-variant job name suffixes, gh-pages chart\nsub-paths, and S3 results sub-prefixes, so the two variants don't\ncollide.\n- New `.github/actions/scripts/render-mem-summary.sh` that renders a\nMarkdown table to `$GITHUB_STEP_SUMMARY` with per-test peak RSS, the\nlimit, a breach flag, and peak reserved memory per area/kind. Gated on\n`matrix.variant == 'mem-limited'`.\n- Shared benchmark scripts (`fs_bench.sh`, `fs_cache_bench.sh`) are now\nparameterised via the `S3_MAX_MEMORY_TARGET_MIB` env variable. When set,\nthey:\n  - Build with `--features mem_limiter`.\n  - Mount with `--max-memory-target=<N>`.\n- Ask `mount-s3-log-analyzer` for an additional JSON file via\n`--mem-limit-mib=<N> --extra-metrics-out=<PATH>`.\n\n  When unset, behaviour is unchanged.\n- `mount-s3-log-analyzer` gains two optional flags, `--mem-limit-mib`\nand `--extra-metrics-out`, wired together with `clap`'s `requires` so\neither both are set or neither. When both are set, the analyzer also\nparses Mountpoint metric log lines for:\n  - `mem.bytes_reserved[area=prefetch]`\n  - `mem.bytes_reserved[area=upload]`\n  - `pool.reserved_bytes[kind=get_object]`\n  - `pool.reserved_bytes[kind=put_object]`\n\nand writes JSON with the test name, peak RSS in MiB, memory limit in\nMiB, a `breached = peak_rss_mib\n\n## Example GitHub Actions summary\n\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/24720419069\n\n```\n| Test | Peak RSS (MiB) | Memory Limit (MiB) | Status | Peak Prefetch Reserved (MiB) | Peak Upload Reserved (MiB) | Peak Pool GetObject (MiB) | Peak Pool PutObject (MiB) |\n|---|---|---|---|---|---|---|---|\n| mix_1r4w | 1562.546875 | 512 | ❌ BREACHED | 32 | N/A | 32 | 1376 |\n| rand_read_4t_direct | 22.0625 | 512 | ✅ OK | 68.5 | N/A | 64 | N/A |\n```\n\nNotes:\n- Breach is **non-fatal**: the ❌ is informational; the CI job does not\nfail on a breach.\n- A metric is rendered as `N/A` only when Mountpoint never emitted it in\nthe logs (e.g. `pool.reserved_bytes[kind=get_object]` in a write-only\nworkload). If the metric was emitted with value 0, the column shows\n`0.0`.\n- The `_extra_metrics.json` file is consumed **only** by the memory\nsummary step. It is not fed into the gh-pages benchmark charts.\n\n## Where results are stored\n\nMemory-limited results are stored under distinct `mem_limited` sub-paths\nso they don't collide with the existing charts:\n\n| Workload | Throughput chart path | Peak-memory chart path |\n\n|---------------------------------|-----------------------------------------------|-------------------------------------------------------------|\n| S3 Standard throughput | `dev/bench/mem_limited` |\n`dev/bench/mem_limited/peak_mem_usage` |\n| S3 Standard cache | `dev/cache_bench/mem_limited` |\n`dev/cache_bench/mem_limited/peak_mem_usage` |\n| S3 Express One Zone throughput | `dev/s3-express/bench/mem_limited` |\n`dev/s3-express/bench/mem_limited/peak_mem_usage` |\n\n## Why a separate `_extra_metrics.json`?\n\nThe existing `<test>_peak_mem.json` follows the `{name, value, unit}`\nschema required by `benchmark-action/github-action-benchmark` and feeds\nthe gh-pages charts. Adding more fields there would pollute the charts\nfor non-memory-limited runs. Keeping the file separate lets each\nconsumer (benchmark-action vs. GH Actions summary) receive only what it\nneeds.\n\n### Does this change impact existing behavior?\n\nNo - adding new benchmarks only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-24T14:24:02Z",
          "tree_id": "ecd9198213eb3e1fb01aa871847b055e26b111b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/72e3a504cfb783ca2d76844461fa1c879238ee67"
        },
        "date": 1777048003222,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1378.889453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2282.21435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.34423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1667.14638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.7919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 569.34052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 222.1822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.0490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4250.826953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4675.07275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.723828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1422.94658203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1503.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1314.67470703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.53525390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1165.80126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1116.25244140625,
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
          "distinct": true,
          "id": "f5a6d919db133203e9914477222fed168959c581",
          "message": "Update CRT submodules to latest releases (#1819)\n\nUpdate the CRT submodules to the latest releases.\n\n  Updated libraries:\n  \n  - aws-c-auth: v0.10.0 -> v0.10.1\n  - aws-c-http: v0.10.11 -> v0.10.14\n  - aws-c-io: v0.26.1 -> v0.26.3\n  - aws-c-s3: v0.11.5 -> v0.12.3\n  - aws-lc: v1.69.0 -> v1.72.0 \n  - s2n-tls: v1.7.0 -> v1.7.2\n\nFull CRT changelog:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5aefd277..fc4b8765:\n  > fix byo crypto (#290)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 0d8e1a93..da535b1b:\n  > Add default cancel error code (#555)\n  > Unified write data API (#552)\n  > Support on_h2_remote_end_stream (#554)\n  > introduce max concurrent streams for stream manager (#553)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io bfb0819d..1ec8081f:\n  > Add default non-pq policy (#796)\n  > Only invoke shutdown callbacks if the setup was successful (#794)\n  > Fix compilation warnings (#795)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 e9d1bde1..a31a6578:\n  > Fix recognition of user provided unknown checksums (#624)\n  > Better checksumming support (#623)\n  > fix the try-trim logic (#621)\n  > Optimize the sizes of buffers requested from mem pool (#563)\n  > Auto - Update S3 Ruleset & Partition (#613)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 37d86461..d50ded59:\n  > Prepare v1.72.0 (#3162)\n  > Make some more half-empty EVP_PKEY states impossible (#3056)\n  > Update target.h to support Loongarch64 ABI1.0 architecture (#3093)\n  > Shard valgrind CI job to avoid GitHub Actions timeout (#3158)\n  > Check RSA-PSS digest algorithms for X509 (#3138)\n  > Lower default SSL peek test rounds and remove CI workarounds (#3155)\n  > Add missing error return for short metadata keys (#3151)\n  > Change ML-KEM PKCS#8 encoding from expanded to seed form (#3149)\n  > Bound ReadConsoleW by stack buffer size (#3154)\n  > Add OPENSSL_INIT_ATFORK compatibility stub (#3134)\n  > Small fixes for RSA_METHOD and EVP_PKEY_derive_set_peer (#3130)\n  > Fix Clang 19 C++ headers and LLVM tool version mismatches on AL2023 (#3157)\n  > Fix Clang 19 C++ header detection on AL2023 aarch64 (#3152)\n  > Fix Clang 19 GCC runtime detection on AL2023 aarch64 (#3150)\n  > Increase SSL test runner idle timeout for FreeBSD CI (#3144)\n  > Harden OCSP response printing and fix integer overflow in `x509v3_bytes_to_hex` (#3127)\n  > Update PyOpenSSL patch w/ PR #2897 (#3145)\n  > Fix CMake install dir defaults on macOS/Windows when CMAKE_INSTALL_LIBDIR is specified (#3069)\n  > Upgrade CI sanitizer jobs from Clang 15 to Clang 19 (#3148)\n  > Upgrade custom libc++ to LLVM 19 and add sanitizer support to `build_and_test.sh` (#3131)\n  > Rename __AWS_LC_ENSURE to AWS_LC_ENSURE to avoid reserved identifier (#3137)\n  > Add openssl version -a and -p flag support (#3092)\n  > Add NULL pointer validation to ML-KEM EVP encapsulate/decapsulate (#3132)\n  > Add -msg and -servername support to openssl s_client (#3098)\n  > Consistently set outlen to zero for all error paths (#3104)\n  > Fix bind9 integration test for upstream build system changes (#3126)\n  > Hardening fixes for ML-DSA digest mode, XTS key comparison, and urandom fd (#3129)\n  > Fix Windows ARM64 FIPS build; add Clang support for Windows FIPS (#3013)\n  > Fix PostgreSQL integration SSL test failures for upstream error string changes (#3125)\n  > Exclude OCSPIntegrationTest from normal CI test runs (#3128)\n  > openssl-tool CLI: CA cleanup (#3120)\n  > `WIN32_rename`: fix errno mapping and increase retry budget for transient failures (#3124)\n  > Fix entropy source selection for Apple cross-compilation targets (#3113)\n  > Zeroize sensitive stack buffers in DRBG, X25519, Ed25519, ECDSA, ECDH… (#3121)\n  > fipsmodule/ml-kem: Import mlkem-native v1.1.0 (#3090)\n  > Remove redundant definitions (#3118)\n  > Fix intermittent `WIN32_rename` failures in `openssl ca` CLI tool due to transient file locks (#3100)\n  > Add Optimized and HOL Light verified AVX2 Keccak x4 (#3020)\n  > Add SSL_use_cert_and_key for per-connection cert/key setting (#3114)\n  > Reject point at infinity in EC_KEY_set_public_key (#3101)\n  > Fix CRL distribution point scope check logic in crl_crldp_check (#3105)\n  > Fix CN fallback handling in name constraints checking (#3107)\n  > BoringSSL: Const-correct the kPrintMethods table and Update citations from RFC 3447 to RFC 8017 (#3026)\n  > Prepare v1.71.0 (#3102)\n  > Use explicit check for X509 path length (#3080)\n  > Fix issues in `pass_util.cc` password handling (#3032)\n  > Correct types finished-based APIs for TLS 1.3 (#3087)\n  > Correct purpose setting for OCSP_request_verify (#3089)\n  > Clean up on X509_STORE_CTX_add_custom_crit_oid error paths (#3088)\n  > Fix stale `key_method` pointer after private key switch in `CERT` (#3085)\n  > Fall back to EVP_{marshal,parse} in {i2d,d2i}_{Public,Private}Key (#2897)\n  > Fix race condition in  `new_certs_dir` output path (#3095)\n  > Abort on `RAND_bytes` failure (#3078)\n  > Reject IPv6 literal URIs in name constraint checking (#3045)\n  > More NULL checks in bio_ssl.cc (#3076)\n  > Clean up sensitive stack buffers and minor fixes in PKCS#8 (#3067)\n  > Add bounds checks for `size_t` to `int` truncation in `RSA_METHOD` calls (#3084)\n  > Distribution Packaging Improvements (#3042)\n  > Fix modulewrapper memory leak (#3094)\n  > Harden HMAC error paths: fix resource leaks, state bugs, and missing cleansing (#3081)\n  > Relicense OpenSSL Sources to Apache-2.0, Cleanup Sources and LICENSE file Details (#3091)\n  > Allow zero-length PEM passwords in callback paths (#3073)\n  > Fixes for `PKCS12_set_mac` (#3079)\n  > Prepare v1.70.0 (#3086)\n  > Fix NetBSD AArch64 CPU feature detection on big.LITTLE systems (#3082)\n  > Clean up CLI code (#2927)\n  > Various Small Additions to ACVP Tool (#3024)\n  > Add ACVP Support for KTS-IFC (#3009)\n  > Add ACVP Support for KAS-ECC (#3010)\n  > Fix uninitialized EVP_MD_CTX and harden bn_dup_into (#3033)\n  > Improve type safety and bounds checking in EVP cipher ctrl handlers (#3034)\n  > Add a test that arbitrary curves can be wrapped in EVP_PKEY (#3055)\n  > XOF fixes (#3064)\n  > TLS Transfer Serialization Findings (#3071)\n  > Remove dead declarations in public headers (#3053)\n  > Fix sizeof-on-pointer bugs in FIPS assertion failure messages (#3074)\n  > Bump github.com/cloudflare/circl from 1.6.2 to 1.6.3 in /util/vecgen (#3046)\n  > Zeroize intermediate values for ed25519 (#3075)\n  > Use proper function type for different callback types (#3066)\n  > IWYU: guard stdint.h in fips_shared_support.c (#3027)\n  > Fix CMake 4.0 CI jobs (#3068)\n  > Fix PKCS8_encrypt crash when pass is NULL with negative pass_len_in (#3052)\n  > Add INT_MAX bounds check before EVP_CipherUpdate in PKCS8/PKCS12 encryption (#3043)\n  > Cleanup EVP_DH asn1 parsing (#3047)\n  > Fix PKCS12_verify_mac OOB read with invalid password_len (#3051)\n  > Fix PKCS8_decrypt to handle all negative pass_len values (#3039)\n  > Latent memory leaks in KEM_KEY setter functions (#3041)\n  > Fix gRPC integration (#3070)\n  > Add NULL checks for MakeUnique in SSL cipher list inheritance (#3065)\n  > Cache peer CA names on client side after handshake (#2994)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls f5e5e830..a71ea1f9:\n  > fix(ci): update MSRV for extended crates from 1.72 to 1.77 (#5810)\n  > ci: upgrade nix awslc version (#5805)\n  > fix: reject certs with literal-IP CN and no SAN  (#5804)\n  > docs: clean up DRBG references across docs, APIs, and templates (#5789)\n  > chore: remove codeowners (#5797)\n  > fix: Gates rolling hash of all supported hash algorithms to TLS1.2 (#5803)\n  > ci: fix install_awslc_fips script (#5790)\n  > feat(build): Add option to enforce correct libcrypto feature probing (#5579)\n  > fix(aws-lc): Update test for https://github.com/aws/aws-lc/pull/3101 (#5788)\n  > ci: add 'style' to PR title check (#5792)\n  > feat: add strict and interop CNSA 2.0 policies (#5760)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 2 updates (#5787)\n  > docs: clarify integrity protection requirements for connection serialization (#5782)\n  > refactor(rand): deprecate internal DRBG implementation (#5775)\n  > build(deps): bump jidicula/clang-format-action from 4.16.0 to 4.17.0 in /.github/workflows in the all-gha-updates group (#\n5784)\n  > feat(s2n-metric-subscriber): add supported parameters (#5768)\n  > fix(bindings): replace bare as usize casts in Tokio I/O callbacks (#5780)\n  > docs: add comments about sslv3 weaknesses (#5777)\n  > fix: add required metadata for subscriber (#5776)\n  > chore: delete unused s2n_stuffer_alloc_ro functions (#5757)\n  > chore: fix crate name (#5769)\n  > fix: make get_alert idempotent (#5767)\n  > fix: update memory snapshots (#5771)\n  > chore(s2n-tls): v0.3.35 release (#5765)\n  > revert: \"fix: rust alert getter should not modify\" (#5766)\n  > Merge commit from fork\n  > build(deps): bump actions/upload-artifact from 6 to 7 in /.github/workflows in the all-gha-updates group (#5764)\n  > fix: Use logical OR instead of bitwise OR (#5763)\n  > Necessary changes were made in the s2n module to support AIX OS. (#5724)\n  > fix: rust alert getter should not modify (#5756)\n  > docs: Add security reporting policy (#5734)\n  > feat: add clearer errors for hostname, security policy failures (#5761)\n  > refactor: Use strong libcrypto randomness instead of custom random (#5726)\n  > test(integration): add coverage of error types for cert related failures (#5755)\n  > build(deps): update strum requirement from 0.27 to 0.28 in /bindings/rust/standard (#5759)\n  > build(deps): bump baptiste0928/cargo-install from 3.3.2 to 3.4.0 in /.github/workflows in the all-gha-updates group (#5758\n)\n  > refactor(integration): utilities module with cert materials (#5753)\n  > fix(quic support): Wipe buffers after reading post-handshake message (#5750)\n  > ci: trigger PR title check upon edit (#5749)\n  > ci: revert clang-format workflow (#5751)\n  > chore: Delete all code that references Kyber (#5705)\n  > fix(bindings): use max_align_t for allocator alignment (#5745)\n  > fix: Add additional verification checks to ECDSA curves (#5736)\n  > build(deps): bump actions/checkout from 4 to 6 in /.github/workflows in the all-gha-updates group (#5746)\n  > chore: unpin rust integration dependencies (#5748)\n  > fix: add bound check for Yc_length against server DH params (#5737)\n  > fix(bindings): tie ClientHello lifetime to Fingerprint (#5747)\n  > ci: fix conventional commit check (#5744)\n  > chore: unpin rtshark version (#5743)\n  > ci: fix fuzz failure artifact upload (#5742)\n  > feat(metrics): add EMF emitter (#5730)\n  > ci: Add CI guardrail for BoringSSL fork (#5715)\n  > chore: fix sidetrail timings (#5729)\n  > fix(benches): reduce flakiness in s2n-tls-bench daily job (#5728)\n  > ci: temporary replace clang-format-action (#5735)\n  > Add X25519MLKEM768 benchmarks (#5616)\n  > nix: Use rustup toolchain over nix packages rustc in devshell (#5712)\n  > build(deps): bump aws-actions/configure-aws-credentials from 5.1.1 to 6.0.0 in /.github/workflows in the all-gha-updates g\nroup (#5722)\n  > fix: correct calculation of extensions bitfield size (#5719)\n  > feat(bindings): add support for metric aggregation (#5709)\n  > ci: fix typo in readme (#5718)\n  > build(deps): update crabgrind requirement from 0.1 to 0.2 in /tests/regression in the all-cargo-updates group across 1 dir\nectory (#5716)\n  > feat(bindings): expose signature scheme API (#5708)\n  > fix: restrict mldsa signatures based on certificate (#5713)\n```\n\n\nConfirmed the crate size is under the 10MiB limit (8.2MiB compressed)\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, updated.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T10:31:41Z",
          "tree_id": "b9f89087e1f5de3f537e13f4657da06a242e1c70",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f5a6d919db133203e9914477222fed168959c581"
        },
        "date": 1777379707098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1385.2798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2179.87353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 876.90263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1685.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.42431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.12578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 198.217578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.85166015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4077.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4715.345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1282.6890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1349.20009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1384.34501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1737.24814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1039.25400390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1033.36083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1149.85205078125,
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
          "id": "4a63263681e5003f9774c7a6643329b241cd57ed",
          "message": "Upgrade cargo dependencies (#1818)\n\nUpgrade cargo dependencies. Notes: \n- in order to handle a minor breaking change in the `md5` crate, we now\nalso import the `hex` crate (when building `mountpoint-s3-client` with\nthe `mock` feature).\n- upgrading to the latest `shuttle` version (`0.9.1`) led to a segfault\nin shuttle tests. Reverted while we investigate further.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated version numbers and changelogs to reflected existing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-28T11:59:35Z",
          "tree_id": "878549dc0915f9ba16cce3674d5b4744d213b9a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a63263681e5003f9774c7a6643329b241cd57ed"
        },
        "date": 1777385027213,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1363.57255859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2250.138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 879.8572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1669.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 334.407421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 604.03193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 216.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.32216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4333.60966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4429.6892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.273046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1379.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 868.61953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 930.73837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1306.259375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1235.06572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1311.49501953125,
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
          "distinct": true,
          "id": "1141b9514fdd1bc85fc25683d2b386a5c185f913",
          "message": "Update changelogs to prepare v1.22.3 release (#1821)\n\nUpdates the changelogs prior to  release of MP v1.22.3\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, the change itself is changelog updates\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2026-04-28T15:42:11Z",
          "tree_id": "3fa119ebaef7e2cbcea2e40adff1f71e0ca9f2e6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1141b9514fdd1bc85fc25683d2b386a5c185f913"
        },
        "date": 1777398507368,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1379.476953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2144.81376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 885.377734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1645.8607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 311.455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 441.79462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.701953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.36181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4442.54296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4452.78935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1326.1322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1396.83017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 840.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1755.72265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1174.70712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1209.0466796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "20302932+yerzhan7@users.noreply.github.com",
            "name": "Yerzhan Mazhkenov",
            "username": "yerzhan7"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0de1563d1a9d383a0f7b7c8bfb595ee19109a589",
          "message": "fix: Use cgroup-aware memory detection in mem limiter (#1806)\n\n**What changed and why?** \n\nReplace direct `sysinfo::System::total_memory()` call with a new\n`effective_total_memory()` helper that respects `cgroup` memory limits.\nThis fixes incorrect memory limit detection when running inside\ncontainers with memory constraints.\n\nChanges:\n- Add `effective_total_memory()` to `mem_limiter` that checks\n`sysinfo`'s `cgroup_limits()` before falling back to total physical\nmemory\n- Library automatically handles cgroup v1 vs v2, path resolution, no\nlimit, Linux vs non-Linux, and other edge cases:\nhttps://github.com/GuillaumeGomez/sysinfo/blob/main/src/unix/linux/cgroup.rs\n- Update `cli.rs` and `benchmark` examples to use the new helper\n- Add CI job to run cgroup memory detection test in a memory-limited\ncontainer\n\n### Does this change impact existing behavior?\n\nNo - it prevents potential OOM in containers with memory constraints.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDone.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-30T16:27:04Z",
          "tree_id": "ce92a20e2db111b1eeb3ed3c3e763ff953907be7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0de1563d1a9d383a0f7b7c8bfb595ee19109a589"
        },
        "date": 1777573947875,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1345.9234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2418.33388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 841.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1636.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 287.76650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 397.0921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 208.6478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 265.77314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4174.3853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4824.72119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1575.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1392.4732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 933.18427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 816.94306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1053.9869140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1094.278515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1221.445703125,
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
          "id": "5374a7383d73d41724be545665e393c8c6b81f8c",
          "message": "Upgrade to Rust 1.95 (#1823)\n\nUpgrade Rust toolchain to 1.95 and address new clippy issues in tests\nand mock client.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-01T09:30:25Z",
          "tree_id": "279e1f361fe96d2acd26550318f537d6802677ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5374a7383d73d41724be545665e393c8c6b81f8c"
        },
        "date": 1777635521156,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1350.651953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2279.83037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 824.323046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1673.72333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 424.23779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.84365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 309.7189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4719.44541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4607.5009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1292.97158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1430.4203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1535.430859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 816.23046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1363.383203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1256.84794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1291.75390625,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}