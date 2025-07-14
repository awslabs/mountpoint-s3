window.BENCHMARK_DATA = {
  "lastUpdate": 1752496152318,
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
          "distinct": false,
          "id": "7c023072cea67aa617d85170594eb8fc2a1db0f7",
          "message": "Update CRT submodules to latest releases (#1472)\n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..8703b3e5:\n  > [FIX] heap use after free on aws_ecc_key_pair_new_from_asn1 (#219)\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..10961a70:\n  > Stop sending empty data frame when input stream ends but the request stream is not ending. (#520)\n  > Remove clang-3 from CI (#518)\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..ee7925a3:\n  > Fix casing on Windows header files (#736)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#737)\n  > Fix pem validation (#735)\n  > Fix warning Wdefault-const-init-unsafe (#734)\n  > Enabling TLS 1.3 on Windows (#732)\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..29ceb352:\n  > Fix issue with error response parting potentially overriding upload buffer (#528)\n  > Auto - Update S3 Ruleset & Partition (#527)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#524)\n  > Fix race condition between mem acquire and cancel (#521)\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc a614f975..8b4e504c:\n  > Prepare v1.53.1 (#2492)\n  > Update mlkem-native to v1 (#2451)\n  > Impl BIO_ADDR_xxx functions (#2439)\n  > Add password prompting support & EVP_read_pw_string (#2419)\n  > Split ssl handshake tests (#2489)\n  > Add timeouts to PQ TLS Integ Tests (#2464)\n  > Prepare v1.53.0 (#2471)\n  > Fix service indicator in HKDF, more paranoid zeroization, and simplify logic (#2482)\n  > [UPSTREAM] Fix BIO_eof for BIO pairs (#2440)\n  > Run 3p module tests on python 3.13, add patch for 3.14 (#2476)\n  > Simplify sshkdf and kbkdf (#2478)\n  > Fix some theoretical missing earlyclobber markers in inline assembly (#2477)\n  > Fix OCSP integration test failures (#2480)\n  > Add hardened build back in (#2474)\n  > Fix Ruby mainline and nginx CI (#2460)\n  > Improve support for multilib-style distros in our test scripts (#2467)\n  > Simplify Compiler CI jobs (#2430)\n  > ML-KEM memory safety (#2263)\n  > Use max_cert_list for TLSv1.3 NewSessionTicket (#2453)\n  > Revert \"Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\" (#2466)\n  > Remove unused Windows afunix.h (#2461)\n  > Explicitly don't allow buffers aliasing in ctr-drbg implementation (#2458)\n  > Support relro in delocator (#2455)\n  > [SCRUTINICE] Remove redundant condition check (#2450)\n  > Openssl tool output ordered by options provided (#2452)\n  > Add build with hardened flag (#2396)\n  > Prepare v1.52.1 (#2445)\n  > Display X509 fingerprint after hash (#2444)\n  > Fix CI cross-mingw (#2437)\n  > Create pre-production stage for CI pipeline (#2282)\n  > Fix path-has-spaces test (#2436)\n  > fix(nix): Make sure bssl is in the PATH; workaround nix build failure… (#2431)\n  > Increase default salt from 8 to 16 bytes for PKCS#8 & PKCS#12 (#2409)\n  > Prepare v1.52.0 release (#2434)\n  > Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\n  > Resolve SSL_PRIVATE_METHOD and certificate slots functionality (#2429)\n  > Revert \"Rework memory BIOs and implement BIO_seek (#2380)\" (#2432)\n  > Bump AWSLC_API_VERSION for X509_STORE_CTX_set_verify_crit_oids (#2426)\n  > Fix CI for mingw (#2428)\n  > ML-DSA: Add ML-DSA keyGen to break-kat.go (#2422)\n  > Remove unused docs/configs (#2427)\n  > Fix gtest_util.sh failure detection (#2423)\n  > Detection of unused results (#2411)\n  > ML-DSA: ASN.1 Module - add parsing of BOTH private key format (#2416)\n  > Rework memory BIOs and implement BIO_seek (#2380)\n  > Add Python 3.9 CI patch (#2415)\n  > Make ASN1_get_object a direct call (#2332)\n  > Implement BIO_dump (#2331)\n  > Add back two rules for clang-tidy (#2418)\n  > Clang-tidy is still noisy (#2417)\n  > Squelch clang-tidy (#2414)\n  > CI for iOS (#2389)\n  > Update mlkem-native (#2406)\n  > Add missing symbols for Unbound (#2352)\n  > Check for QUIC in SSL_process_quic_post_handshake (#2365)\n  > Remove extra va_end in err_add_error_vdata (#2364)\n  > Mark fallible container operations as `nodiscard` (#2366)\n  > Fix clang tidy ci (#2375)\n  > Remove xmlsec patch (#2405)\n  > Remove python CI patch for main (#2407)\n  > Fix socket test issues (#2404)\n  > Ensure that AVX512 is not used on macOS (#2363)\n  > Reject NewSessionTicket messages with empty tickets in TLS 1.3 (#2367)\n  > BIO datagram functions (#2321)\n  > Set OPENSSL_NO_EXTERNAL_PSK_TLS13 to indicate lack of TLS 1.3 PSK (#2399)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-20T15:52:55Z",
          "tree_id": "ccb734d23c4d9147d7a5f35450f20271af1c598a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c023072cea67aa617d85170594eb8fc2a1db0f7"
        },
        "date": 1750444990493,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10843.19140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22279.875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37267.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 269.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33895.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40232.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 408.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11183.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13402.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11944.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.0390625,
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
          "id": "c8d1eb5960bcc820e881c497db188e59b572d896",
          "message": "Move syscalls to dev-dependencies (#1479)\n\nThe `syscalls` crate is only used in tests. Move to the\n`dev-dependencies` section.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-24T07:04:11Z",
          "tree_id": "71f31ac446c20f99ad510bb9a0f3220286d626d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8d1eb5960bcc820e881c497db188e59b572d896"
        },
        "date": 1750756798945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13082.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24669.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38151.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36018.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32769.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9536.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11565.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14667.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 613.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.703125,
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
          "id": "55ba7de089446cfdf421b3c1ad92b1036c4e3dcf",
          "message": "Move object client into Superblock (#1476)\n\nThis PR moves the client into the Superblock, thus a superblock will\nalways interact with the same instantiation of an `ObjectClient + Send +\nSync`.\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact existing behaviour, as is only an\ninternal re-organisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, does not need a Changelog entry, as it only moves around where we\nstore the client.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-24T12:28:42Z",
          "tree_id": "23e9d9e1fb4d816c8b682ed0ca7fb58f01fa2680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55ba7de089446cfdf421b3c1ad92b1036c4e3dcf"
        },
        "date": 1750776244087,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13409.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18114.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36966.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 279.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 275.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 226.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33097.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37193.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10959.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10851.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12139.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 694.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 503.15234375,
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
          "id": "43aa6f7cadaeb8bf580741502e53d761d063ed6d",
          "message": "Update CRT submodules to latest releases (#1484)\n\nUpdate `aws-c-s3` in order to pick up the latest addition to the Memory\npool interface (awslabs/aws-c-s3#529).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 29ceb352..1762f839:\n  > Add user data to pool factory (#529)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-25T07:33:36Z",
          "tree_id": "0ac46076318b295e9075b00d708a491b227fed32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43aa6f7cadaeb8bf580741502e53d761d063ed6d"
        },
        "date": 1750844784253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15242.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24609.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41702.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 258.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34055.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35197.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12065.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10464.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9126.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 650.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.19921875,
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
          "id": "20f3c0202371b8f012bd25067093dfcc97653d8a",
          "message": "Add support to collect perf stat counters in benchmark.py (#1474)\n\nAdd support to collect perf stat counters in benchmark.py\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only affects benchmark.py\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-06-25T14:15:10Z",
          "tree_id": "4a663775b6bd393e9e4638b97df3bb28c05c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/20f3c0202371b8f012bd25067093dfcc97653d8a"
        },
        "date": 1750869163700,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13081.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20559.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37618.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 263.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32962.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32692.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8661.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13025.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11455.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 814.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 624.5390625,
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
          "id": "09db8afebc61bfd4717172b4ccbe57b9dd47c9b6",
          "message": "Move `reader_count` out of inode (#1475)\n\nMoves the reader count out of the inode and instead stores the reader\ncounts for all inodes with non-zero reader count in a HashMap (that is\nprotected by a lock).\n\n### Does this change impact existing behavior?\n\nThis should not have breaking changes, it could potentially reduce\nunlikely issues with the reader count getting messed up in highly\nconcurrent scenarios involving re-creation of inodes with the same\nnumber.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDoes not need a Changelog entry or version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-26T06:09:43Z",
          "tree_id": "b7465e39b2af7d265f25563d8bd047b7770a50c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09db8afebc61bfd4717172b4ccbe57b9dd47c9b6"
        },
        "date": 1750926333100,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12560.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23979.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35277.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 276.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31044.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39080.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11051.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9471.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13466.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.3046875,
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
          "id": "f4d7df30fff3cc17c85578b0df51f5895523f6ab",
          "message": "Move lookup count into InodeMap (#1473)\n\nThis PR re-organises the way we lookup count by moving the lookup count\ninto inode HashMap (i.e, this hashmap now stores an association of\nInodeID -> (inode, lookup_count)). This more closely mirrors real file\nsystem's behaviour w.r.t. inodes that are re-created with the same inode\nnumber. It introduces some additional locking.\n\nThis should not have any difference in behaviour, as we do not replace\ninodes if they are currently open for writing or reading.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-27T06:44:45Z",
          "tree_id": "05178bedb883fbe00b7acb30e8ed313b47b4f73b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4d7df30fff3cc17c85578b0df51f5895523f6ab"
        },
        "date": 1751014793107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14621.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22548.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38194.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 275.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33574.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35551.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10203.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12842.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11710.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 749.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.1875,
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
          "id": "7e45834ac4e73aa648d8f62583c1b3becb12d2b8",
          "message": "Add private option to disable disk cache cleanup for testing/benchmarking (#1483)\n\nThis updates the `ManagedCacheDir` struct to optionally perform cleanup\nat creation and drop. It also provides an environment variable for\nswitching this on at `mount-s3` invocation time. This will allow us to\nturn this cleanup off when trying to perform benchmarking comparing\n\"warming\" phases, as well as \"hot\" phases - i.e. to understand how\nMountpoint performs when loading the cache versus a full cache, where\nall requests are served from it.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change. One log is downgraded from `warn` to\n`debug`. The warning was not providing much valuable information - if\nneeded, we can turn on debug logs if any strange behavior is observed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no public changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T09:30:14Z",
          "tree_id": "cf1054344fd2f3a909e34fb60f31b42590dd3d0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e45834ac4e73aa648d8f62583c1b3becb12d2b8"
        },
        "date": 1751024650638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14400.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21946.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32886.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35028.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38041.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11984.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10432.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10285.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 683.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.296875,
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
          "id": "240108b8ab0386a9f7c6ca2f8de2901ebadd8c00",
          "message": "Remove inodes from file handles  (#1486)\n\nThis PR removes the reference to the inodes from the file handle and\ninstead uses the inode number and full key.\n\n### Does this change impact existing behavior?\n\nNo - is just an internal reorganisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNeeds no Changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T11:06:31Z",
          "tree_id": "45ca3fcb229ab13f55fcedaef59105acffefaaf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/240108b8ab0386a9f7c6ca2f8de2901ebadd8c00"
        },
        "date": 1751030543776,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10724.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21776.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36454.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 280.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35127.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34295.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10850.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10959.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11900.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 817.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.13671875,
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751037386757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12548.15625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20932.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38097.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 278.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 277.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 223.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34330.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34654.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9625.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9361.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12937.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 732.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.09375,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751045463553,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11093.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21868.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32099.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 272.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 280.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33565.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37803.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8103.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11506.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10534.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 483.66796875,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751051866525,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14981.734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25624.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35425.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 221.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34858.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37638.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10230.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12593.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13821.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.15625,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751051947748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13465.5625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22870.2109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37058.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 282.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 223.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37929.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38577.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11183.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9649.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13321.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 762.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.5390625,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751052208971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14987.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24410.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36266.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 262.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 280,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 220.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32138.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40576.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10043.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12207.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10517.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.55078125,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751289046856,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13195.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23957.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30777.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 270.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31933.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38118.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10485.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13493.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13827.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 253.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 544.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 384.99609375,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751370975996,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12024.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22653.00390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34184.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 81.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 252.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 266.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34592.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31867.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10244.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13231.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12683.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 726.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.7421875,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751385418325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11329.40234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19872.078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32963.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 254.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 275.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 69.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35173.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32426.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9832.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13866.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13152,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 250.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 757.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.50390625,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751396447325,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14009.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23365,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33360.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 266.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 270.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 211.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32088.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40369.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8022.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 252.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12428.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12081.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 904.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.484375,
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
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751463548572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11437.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22666.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37966.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 260.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32810.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33906.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10900.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9761.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12615.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 658.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.46875,
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
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751654736616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13472.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23215.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40088.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 261.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35649.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35024.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10450.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10753.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9484.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 674.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.72265625,
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751883121751,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11916.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25902.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36999.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 214.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38159.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37037.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10550.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12200.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14738.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 672.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 428.48046875,
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751911224013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14310.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23400.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35656.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 259.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35209.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35897.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9292.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11230.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10244.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 252.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 622.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.72265625,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751970117497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13775.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24091.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39587.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 222.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35041.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37822.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12348.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8973.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13105.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 759.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 418.7421875,
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
          "id": "90329af0059bc192ae11ac9cf4b276708f135970",
          "message": "Extend prefetcher benchmarks to test multiple object downloads (#1504)\n\nWith this change, we can benchmark concurrent downloads of multiple\nobjects at prefetcher.\n\nThis change also allows passing NICs as a comma separated list and adds\na new parameter to limit the run time of the test\n\n### Does this change impact existing behavior?\n\nNo, only extends prefetch benchmarks.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-08T17:19:25Z",
          "tree_id": "4102614f563dd889bed919a3da18bf5a4481c9b2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90329af0059bc192ae11ac9cf4b276708f135970"
        },
        "date": 1752003382194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13259.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21101.625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35128.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 264.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33607.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35783.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10116.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9880.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13576.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.23046875,
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
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752077644305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12872.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22500.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36293.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 263.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32076.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34510.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10240.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11742.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10737.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 475.7578125,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752170269670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11597.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23459.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36723.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 277.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 267.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33024.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41399.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8160.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12338.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12191.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 611.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.5078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "658dd8559b978045ff3c9fb14a28d5ff5aa352d3",
          "message": "Update MP client_benchmark to support CRT backpressure (#1457)\n\nUpdate MP client_backmark to support CRT backpressure. Extend the\nbenchmark to optionally enable read-backpressure in CRT, and configure\nthe initial read window size. This test aims to simulate the read-ahead\ncapability of the prefetcher, making it easier to baseline the\nperformance against the prefetcher benchmark.\n\n### Does this change impact existing behavior?\n\nNo, changes to the benchmark only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes to the benchmark only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-10T15:46:10Z",
          "tree_id": "7de814352da4f6ffa492f37578430d683428b9c2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/658dd8559b978045ff3c9fb14a28d5ff5aa352d3"
        },
        "date": 1752208708138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13560.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22537.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39921.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 101.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36622.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40342.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12996.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12160.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11980.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 381.26171875,
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
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752245821478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15411.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21851.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36211.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33935.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37327.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8436.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11095.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12301.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 692.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 399.2421875,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752494239542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14634.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24823.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40285.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 69.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37578.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37373.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10210.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10975.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13919.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 561.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 381.9765625,
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
          "id": "c3b70d06ce7edcd06373ab47816bdb91a1eba8b1",
          "message": "Bump slackapi/slack-github-action from 2.1.0 to 2.1.1 (#1514)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.0 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack Send v2.1.1</h2>\n<h2>What's Changed</h2>\n<p>This release fixes an issue where substituted variables might've\nbroken valid JSON or YAML parsings when using the\n<code>payload-file-path</code> input option.</p>\n<h3>🐛 Bug fixes</h3>\n<ul>\n<li>fix: parse provided payloads before replacing templated variables in\n<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/449\">slackapi/slack-github-action#449</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>📚 Documentation</h3>\n<ul>\n<li>docs: fix channel mention formatting in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/447\">slackapi/slack-github-action#447</a>\n- Thanks <a\nhref=\"https://github.com/mwbrooks\"><code>@​mwbrooks</code></a>!</li>\n<li>docs: remove links to pages that are no longer referenced in\nmarkdown in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/459\">slackapi/slack-github-action#459</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>🤖 Dependencies</h3>\n<ul>\n<li>build(deps): bump undici from 5.28.5 to 5.29.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/442\">slackapi/slack-github-action#442</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump codecov/codecov-action from 5.4.2 to 5.4.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/443\">slackapi/slack-github-action#443</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.1.0 to 11.5.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/450\">slackapi/slack-github-action#450</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/451\">slackapi/slack-github-action#451</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.3 to\n22.15.29 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/452\">slackapi/slack-github-action#452</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.1 to 7.9.2\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/453\">slackapi/slack-github-action#453</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.2 to 7.9.3\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/462\">slackapi/slack-github-action#462</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump axios from 1.9.0 to 1.10.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/465\">slackapi/slack-github-action#465</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.29 to\n24.0.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/466\">slackapi/slack-github-action#466</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.5.0 to 11.7.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/468\">slackapi/slack-github-action#468</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/469\">slackapi/slack-github-action#469</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump sinon from 20.0.0 to 21.0.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/471\">slackapi/slack-github-action#471</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 24.0.3 to\n24.0.8 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/472\">slackapi/slack-github-action#472</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to\n2.0.6 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/470\">slackapi/slack-github-action#470</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n</ul>\n<h3>🧰 Maintenance</h3>\n<ul>\n<li>ci: pin action hashes and escape variables with minimum permission\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/441\">slackapi/slack-github-action#441</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: create separate release branches for tagged releases on\npublish in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/457\">slackapi/slack-github-action#457</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: clone repository &quot;docs&quot; and configuration when\nsyncing project docs in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/467\">slackapi/slack-github-action#467</a>\n- Thanks <a\nhref=\"https://github.com/lukegalbraithrussell\"><code>@​lukegalbraithrussell</code></a>!</li>\n<li>chore(release): tag version 2.1.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/474\">slackapi/slack-github-action#474</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/91efab103c0de0a537f72a35f6b8cda0ee76bf0a\"><code>91efab1</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b6f4640825302dc9b85bd5ffbe34dfc7a762e404\"><code>b6f4640</code></a>\nchore(release): tag version 2.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/474\">#474</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d3dc61e5d1355f17c060df3210cda7044341866e\"><code>d3dc61e</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to 2.0.6\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/f647c89261423b9045f1ecc4f887c2e62ff6f33d\"><code>f647c89</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.0.3 to 24.0.8\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/472\">#472</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e6fa63302e670473dcb1695b744c15895d615227\"><code>e6fa633</code></a>\nbuild(deps-dev): bump sinon from 20.0.0 to 21.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/471\">#471</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/75b7822f871b0c9c128cae6c27efc029b1f6c1de\"><code>75b7822</code></a>\nbuild(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d7b6150e2a1b713e9aaf24e1559a11dfdf0f2a2d\"><code>d7b6150</code></a>\nbuild(deps-dev): bump mocha from 11.5.0 to 11.7.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/468\">#468</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/a7f5b68f29d9c4eb439f490ee90bda80a34ed6f5\"><code>a7f5b68</code></a>\nbuild: clone repository &quot;docs&quot; and configuration when syncing\nproject docs (#...</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c69deab25713549329730019e9c20a81d09bb4cd\"><code>c69deab</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 22.15.29 to 24.0.3\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/466\">#466</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1d0943cb8c8bca873d09b7b9638f3a94f89d829a\"><code>1d0943c</code></a>\nbuild(deps): bump axios from 1.9.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/465\">#465</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-14T10:14:09Z",
          "tree_id": "13338d52a1265d5b973af2ad086b1277bcb643fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3b70d06ce7edcd06373ab47816bdb91a1eba8b1"
        },
        "date": 1752496152262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13063.421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24369.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38776.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33579.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35736.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12095.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10615.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12573.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 771.625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.140625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}