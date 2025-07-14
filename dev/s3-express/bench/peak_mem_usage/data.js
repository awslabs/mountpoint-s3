window.BENCHMARK_DATA = {
  "lastUpdate": 1752494159246,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
          "id": "41aeca132bc6ba8c21a8d2cb82ddab676211507f",
          "message": "Update changelogs to prepare for crate release (#1470)\n\nUpdates the changelogs so that crates can be updated prior to the\nrelease of MP v1.19.0\n\n### Does this change impact existing behavior?\n\nDoes not impact behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, the crate update itself does not need a changelog entries. Version\nchanges were already done in #1468\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-19T07:43:55Z",
          "tree_id": "aa8e0d92d10f6c992a0742bc3484ca2780a038f7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41aeca132bc6ba8c21a8d2cb82ddab676211507f"
        },
        "date": 1750327038933,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14028.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27570.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35013.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 418.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 85.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33407.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37890.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13045.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 15456.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13576.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.23046875,
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
        "date": 1750444939029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16122.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28216.26953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42016.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 181.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 323.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 234.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34697.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37345.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13397.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12356.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11960.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.7890625,
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
        "date": 1750756708790,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13003.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23066.1796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41428.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 326.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 228.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35629.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 410.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38209.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13412.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14329.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10261.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.64453125,
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
        "date": 1750776117457,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13721.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27359.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39745.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 138.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 191.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 321.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 239.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36642.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41160.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13409.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11244.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13978.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.0390625,
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
        "date": 1750844691605,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15872.80859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27609.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39737.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 307.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 331.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 242.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36733.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40899.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12364.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12276.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10868.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.15234375,
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
        "date": 1750869019629,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14357.2890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23324.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37057.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 182.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 312.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35497.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37428.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12645.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13499.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14567.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 421.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.875,
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
        "date": 1750926241434,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15481,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23518.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38593.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 146.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 163.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 328.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 236.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 81.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35639.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37651.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13492.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13485.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10133.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.8203125,
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
        "date": 1751014670737,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14946.234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27636.6015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38498.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 144.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 305.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 183.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 320.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 237.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33495.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32024.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10710.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13606.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11814.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 390.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.66796875,
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
        "date": 1751024624253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13787.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26198.8828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40160.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 156.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 324.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34953.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40504.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13741.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10200.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12003.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 221.3125,
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
        "date": 1751030407979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14786.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25662.046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39505.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 143.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 312.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 327.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 79.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35747.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32987.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13348.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14458.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11264.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.13671875,
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
        "date": 1751037282717,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15990.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25012.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42684.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 299.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 155.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 324.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 241.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39236.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40011.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13594.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10661.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12528.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.91015625,
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
        "date": 1751045377397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13917.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22057.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39668.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 315.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 239.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35756.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36063.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12425.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11961.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10644.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.01953125,
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
        "date": 1751051773418,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13425.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22717.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36259.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 312.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 174.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 317.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 243.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33069.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39573.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12901.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12004.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12388.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 233.7890625,
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
        "date": 1751051951649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15735.06640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25025.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 44623.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 306.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 220.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 327.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 78.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 241.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35397.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41645.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11827.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12604.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13369.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 408.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.9765625,
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
        "date": 1751052121059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15519.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23853.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39339.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 142.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 319.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 240.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 240.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34697.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38086.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13451.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11542.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11673.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.23046875,
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
        "date": 1751288871329,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12675.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25750.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36580.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 292.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 163.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 320.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33864.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34050.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14853.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12620.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11480.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.6796875,
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
        "date": 1751370914904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14956.453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26821.98046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45173.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 293.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 190.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 305.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 68.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 239.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39450.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37719.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13215.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12829.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10653.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.82421875,
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
        "date": 1751385331579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17187.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25629.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39766.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 130.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 298.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 218.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 304.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 229.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37106.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37522.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12990.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12702.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11279.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.88671875,
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
        "date": 1751396384076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14128.703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29551.859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45325.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 303.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 319.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 243.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35622.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33396.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13286.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10603.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13452.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.26171875,
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
        "date": 1751463485154,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15807.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26674.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40734.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 136.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 291.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 158.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 309.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38515.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32232,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12466.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12348.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11679.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 381.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.0078125,
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
        "date": 1751654643878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13835.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27092.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37300.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 297.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 233.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 230.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34238.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37397.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11816.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14665.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11900.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 335.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.28515625,
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
        "date": 1751883016215,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13315.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28453.28515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37675.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 129.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 299.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 243.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 310.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 233.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37199.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33784.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12318.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12157.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12534.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 363.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.26171875,
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
        "date": 1751911134449,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15254.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25655.6484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36774.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 298.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 189.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 309.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 229.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38681.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42760.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11627.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13997.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11318.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.01953125,
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
        "date": 1751970069297,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13750.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27207.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40902.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 137.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 293.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 135.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 231.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35342.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35672.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11703.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11678.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9915.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.265625,
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
        "date": 1752003245543,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13208.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30374.3125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36711.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 305.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 166.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 320.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 232.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33289.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37300.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12204.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13629.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10684.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 399.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.02734375,
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
        "date": 1752077493567,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14966.3203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24871.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40869.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 132.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 202.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 313.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 230.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36398.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39427.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12588.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13899.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11692.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 382.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.84375,
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
        "date": 1752167107596,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16428.31640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25799.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37491.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 135.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 301.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 140.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 235.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36965.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38125.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13051.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10481.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10568.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 253.76953125,
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
        "date": 1752170185342,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14674.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24952.46484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35787.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 139.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 302.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 188.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 315.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 229.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36880.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41094.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12936.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12235.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10954.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.015625,
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
        "date": 1752245780697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15582.41015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21769.91015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41581.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 129.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 297.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 160.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 323.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 236.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36869.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36094.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12764.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12302.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13769.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 379.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.25390625,
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
        "date": 1752494159190,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15799.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27116.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39059.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 134.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 295.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 205.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 313.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 238.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36726.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 380.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40600.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13694.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12505.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11980.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 220.203125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}