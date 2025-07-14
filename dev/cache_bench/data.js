window.BENCHMARK_DATA = {
  "lastUpdate": 1752493223324,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark (S3 Standard)": [
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
          "id": "f12f84d0a360e1449fc7048ac0103999170ea6b3",
          "message": "Update dependencies (#1465)\n\nUpdate the dependencies \n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-12T14:48:28Z",
          "tree_id": "d378729160ff3118006093c9ea7a8383fefe3229",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f12f84d0a360e1449fc7048ac0103999170ea6b3"
        },
        "date": 1749746884566,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1222.477734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1941.88984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.75068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1495.103125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.04677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 389.7615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.95283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.52109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3631.88857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4068.72568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.9501953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.11826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 753.82099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 824.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 953.3298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1159.2017578125,
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
          "id": "d283f714c0c6cdca2f70afba717175435a8c10d5",
          "message": "Add mock-mount-s3 to benchmark/ scripts (#1332)\n\nThis change allows us to run our benchmark scripts in `benchmark/` using\nthe `mock-mount-s3` binary, which presents a Mountpoint file system\nbacked by an in-memory mock S3 client.\n\nThis change itself incorporates quite a few changes (which may have been\nbetter suited as separate commits). There are some changes to\naccommodate configuration of part sizes in `mock-mount-s3`, removal of\nthroughput limits (which is useful for benchmarking!), and finally\nadding the configuration options to the benchmarking scripts.\n\nThis change does include some hardcoded objects being added to\n`mock-mount-s3` which can accomodate the benchmarking scripts. This\nmeans that if the object keys change, the files will be created by FIO\nand \"uploaded\" / populated in memory, which probably isn't what you\nwant.\n\n### Does this change impact existing behavior?\n\nNo, there are no changes to main Mountpoint code.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes new or existing.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-13T14:10:55Z",
          "tree_id": "e4caa406c27a437b4225fe435b67027445ad6110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d283f714c0c6cdca2f70afba717175435a8c10d5"
        },
        "date": 1749831022842,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.21123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1966.24228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.73740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.17041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.4693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.0779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.99130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 323.1021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3411.35458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4098.1578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1156.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1321.6896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 842.234765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1061.76337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1004.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1028.92626953125,
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
          "id": "e4199f792268d9d0efe874ecc2b2df3b4ddc5151",
          "message": "Fewer Iterations in rename tests (#1469)\n\nTwo randomised tests for rename take > 40 minutes to execute on our CI.\nThis PR reduces those parameters so that integrationn tests should\nexecute faster again.\n\n### Does this change impact existing behavior?\n\nNo, only affects integration tests.\n\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires neither changelog entry nor version change, as only tests are\naffected.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-19T06:43:31Z",
          "tree_id": "8375600cb3303787607c5e184e2a5c5bfc0877cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e4199f792268d9d0efe874ecc2b2df3b4ddc5151"
        },
        "date": 1750322633711,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1244.2001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1944.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.16826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.68095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.0236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 446.51884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.66455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.211328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3684.4443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4002.65947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1199.085546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1326.956640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 989.120703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1085.8578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1088.61591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1139.71494140625,
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
          "id": "7c023072cea67aa617d85170594eb8fc2a1db0f7",
          "message": "Update CRT submodules to latest releases (#1472)\n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..8703b3e5:\n  > [FIX] heap use after free on aws_ecc_key_pair_new_from_asn1 (#219)\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..10961a70:\n  > Stop sending empty data frame when input stream ends but the request stream is not ending. (#520)\n  > Remove clang-3 from CI (#518)\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..ee7925a3:\n  > Fix casing on Windows header files (#736)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#737)\n  > Fix pem validation (#735)\n  > Fix warning Wdefault-const-init-unsafe (#734)\n  > Enabling TLS 1.3 on Windows (#732)\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..29ceb352:\n  > Fix issue with error response parting potentially overriding upload buffer (#528)\n  > Auto - Update S3 Ruleset & Partition (#527)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#524)\n  > Fix race condition between mem acquire and cancel (#521)\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc a614f975..8b4e504c:\n  > Prepare v1.53.1 (#2492)\n  > Update mlkem-native to v1 (#2451)\n  > Impl BIO_ADDR_xxx functions (#2439)\n  > Add password prompting support & EVP_read_pw_string (#2419)\n  > Split ssl handshake tests (#2489)\n  > Add timeouts to PQ TLS Integ Tests (#2464)\n  > Prepare v1.53.0 (#2471)\n  > Fix service indicator in HKDF, more paranoid zeroization, and simplify logic (#2482)\n  > [UPSTREAM] Fix BIO_eof for BIO pairs (#2440)\n  > Run 3p module tests on python 3.13, add patch for 3.14 (#2476)\n  > Simplify sshkdf and kbkdf (#2478)\n  > Fix some theoretical missing earlyclobber markers in inline assembly (#2477)\n  > Fix OCSP integration test failures (#2480)\n  > Add hardened build back in (#2474)\n  > Fix Ruby mainline and nginx CI (#2460)\n  > Improve support for multilib-style distros in our test scripts (#2467)\n  > Simplify Compiler CI jobs (#2430)\n  > ML-KEM memory safety (#2263)\n  > Use max_cert_list for TLSv1.3 NewSessionTicket (#2453)\n  > Revert \"Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\" (#2466)\n  > Remove unused Windows afunix.h (#2461)\n  > Explicitly don't allow buffers aliasing in ctr-drbg implementation (#2458)\n  > Support relro in delocator (#2455)\n  > [SCRUTINICE] Remove redundant condition check (#2450)\n  > Openssl tool output ordered by options provided (#2452)\n  > Add build with hardened flag (#2396)\n  > Prepare v1.52.1 (#2445)\n  > Display X509 fingerprint after hash (#2444)\n  > Fix CI cross-mingw (#2437)\n  > Create pre-production stage for CI pipeline (#2282)\n  > Fix path-has-spaces test (#2436)\n  > fix(nix): Make sure bssl is in the PATH; workaround nix build failure… (#2431)\n  > Increase default salt from 8 to 16 bytes for PKCS#8 & PKCS#12 (#2409)\n  > Prepare v1.52.0 release (#2434)\n  > Rework memory BIOs and implement BIO_seek (2nd try) (#2433)\n  > Resolve SSL_PRIVATE_METHOD and certificate slots functionality (#2429)\n  > Revert \"Rework memory BIOs and implement BIO_seek (#2380)\" (#2432)\n  > Bump AWSLC_API_VERSION for X509_STORE_CTX_set_verify_crit_oids (#2426)\n  > Fix CI for mingw (#2428)\n  > ML-DSA: Add ML-DSA keyGen to break-kat.go (#2422)\n  > Remove unused docs/configs (#2427)\n  > Fix gtest_util.sh failure detection (#2423)\n  > Detection of unused results (#2411)\n  > ML-DSA: ASN.1 Module - add parsing of BOTH private key format (#2416)\n  > Rework memory BIOs and implement BIO_seek (#2380)\n  > Add Python 3.9 CI patch (#2415)\n  > Make ASN1_get_object a direct call (#2332)\n  > Implement BIO_dump (#2331)\n  > Add back two rules for clang-tidy (#2418)\n  > Clang-tidy is still noisy (#2417)\n  > Squelch clang-tidy (#2414)\n  > CI for iOS (#2389)\n  > Update mlkem-native (#2406)\n  > Add missing symbols for Unbound (#2352)\n  > Check for QUIC in SSL_process_quic_post_handshake (#2365)\n  > Remove extra va_end in err_add_error_vdata (#2364)\n  > Mark fallible container operations as `nodiscard` (#2366)\n  > Fix clang tidy ci (#2375)\n  > Remove xmlsec patch (#2405)\n  > Remove python CI patch for main (#2407)\n  > Fix socket test issues (#2404)\n  > Ensure that AVX512 is not used on macOS (#2363)\n  > Reject NewSessionTicket messages with empty tickets in TLS 1.3 (#2367)\n  > BIO datagram functions (#2321)\n  > Set OPENSSL_NO_EXTERNAL_PSK_TLS13 to indicate lack of TLS 1.3 PSK (#2399)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-20T15:52:55Z",
          "tree_id": "ccb734d23c4d9147d7a5f35450f20271af1c598a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7c023072cea67aa617d85170594eb8fc2a1db0f7"
        },
        "date": 1750444051767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.40673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.81181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 777.50048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 293.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 519.5837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 203.56376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.91171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3427.04697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4044.14140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1228.73330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.6724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1173.33359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1168.81572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1028.50537109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 992.591015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 980.89296875,
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
          "id": "c8d1eb5960bcc820e881c497db188e59b572d896",
          "message": "Move syscalls to dev-dependencies (#1479)\n\nThe `syscalls` crate is only used in tests. Move to the\n`dev-dependencies` section.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-24T07:04:11Z",
          "tree_id": "71f31ac446c20f99ad510bb9a0f3220286d626d2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c8d1eb5960bcc820e881c497db188e59b572d896"
        },
        "date": 1750755838785,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1238.52275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1950.80771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.54560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.62119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.60517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 406.14853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.91787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.70224609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3329.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3986.16533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.82216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1166.42666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 861.13076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 949.5779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1219.3080078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1043.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1336.73681640625,
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
          "id": "55ba7de089446cfdf421b3c1ad92b1036c4e3dcf",
          "message": "Move object client into Superblock (#1476)\n\nThis PR moves the client into the Superblock, thus a superblock will\nalways interact with the same instantiation of an `ObjectClient + Send +\nSync`.\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact existing behaviour, as is only an\ninternal re-organisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, does not need a Changelog entry, as it only moves around where we\nstore the client.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-24T12:28:42Z",
          "tree_id": "23e9d9e1fb4d816c8b682ed0ca7fb58f01fa2680",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/55ba7de089446cfdf421b3c1ad92b1036c4e3dcf"
        },
        "date": 1750775302075,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1246.94052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.05380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.22509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 269.19970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 386.9849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.610546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3336.6591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4072.94794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1185.83564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.3865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1325.81884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1019.523828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1268.2529296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.1439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 926.43818359375,
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
          "id": "43aa6f7cadaeb8bf580741502e53d761d063ed6d",
          "message": "Update CRT submodules to latest releases (#1484)\n\nUpdate `aws-c-s3` in order to pick up the latest addition to the Memory\npool interface (awslabs/aws-c-s3#529).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 29ceb352..1762f839:\n  > Add user data to pool factory (#529)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo breaking change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-25T07:33:36Z",
          "tree_id": "0ac46076318b295e9075b00d708a491b227fed32",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/43aa6f7cadaeb8bf580741502e53d761d063ed6d"
        },
        "date": 1750843838164,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.45771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.81669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1498.5755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 572.85205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.6796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 241.93310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3423.7859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4090.88486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1211.85419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1174.8208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 886.7123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 832.0884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1066.902734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1189.40068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1012.2125,
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
          "id": "20f3c0202371b8f012bd25067093dfcc97653d8a",
          "message": "Add support to collect perf stat counters in benchmark.py (#1474)\n\nAdd support to collect perf stat counters in benchmark.py\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only affects benchmark.py\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-06-25T14:15:10Z",
          "tree_id": "4a663775b6bd393e9e4638b97df3bb28c05c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/20f3c0202371b8f012bd25067093dfcc97653d8a"
        },
        "date": 1750868208180,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1232.55009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1999.6544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.49892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.483203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.0392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 518.733203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.64482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 235.3802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3425.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3972.14794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1219.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1157.8591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1378.27841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1271.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1337.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1070.98046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1061.832421875,
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
          "id": "09db8afebc61bfd4717172b4ccbe57b9dd47c9b6",
          "message": "Move `reader_count` out of inode (#1475)\n\nMoves the reader count out of the inode and instead stores the reader\ncounts for all inodes with non-zero reader count in a HashMap (that is\nprotected by a lock).\n\n### Does this change impact existing behavior?\n\nThis should not have breaking changes, it could potentially reduce\nunlikely issues with the reader count getting messed up in highly\nconcurrent scenarios involving re-creation of inodes with the same\nnumber.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDoes not need a Changelog entry or version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-26T06:09:43Z",
          "tree_id": "b7465e39b2af7d265f25563d8bd047b7770a50c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09db8afebc61bfd4717172b4ccbe57b9dd47c9b6"
        },
        "date": 1750925432165,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1228.4310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1963.43603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.2431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.1232421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.2361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 572.95966796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.230078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 233.517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3668.19580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3981.21943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1217.70263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1187.9982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 840.2822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1222.8138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1151.70439453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1036.27529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1212.7296875,
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
          "id": "f4d7df30fff3cc17c85578b0df51f5895523f6ab",
          "message": "Move lookup count into InodeMap (#1473)\n\nThis PR re-organises the way we lookup count by moving the lookup count\ninto inode HashMap (i.e, this hashmap now stores an association of\nInodeID -> (inode, lookup_count)). This more closely mirrors real file\nsystem's behaviour w.r.t. inodes that are re-created with the same inode\nnumber. It introduces some additional locking.\n\nThis should not have any difference in behaviour, as we do not replace\ninodes if they are currently open for writing or reading.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-06-27T06:44:45Z",
          "tree_id": "05178bedb883fbe00b7acb30e8ed313b47b4f73b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f4d7df30fff3cc17c85578b0df51f5895523f6ab"
        },
        "date": 1751013778141,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1243.50205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.82705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 804.0376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.56162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 404.07353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.93115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 328.28369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3373.6078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3939.25625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1192.540625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1206.8662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1245.79384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1337.4365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1062.5650390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1203.54111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1250.573046875,
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
          "id": "7e45834ac4e73aa648d8f62583c1b3becb12d2b8",
          "message": "Add private option to disable disk cache cleanup for testing/benchmarking (#1483)\n\nThis updates the `ManagedCacheDir` struct to optionally perform cleanup\nat creation and drop. It also provides an environment variable for\nswitching this on at `mount-s3` invocation time. This will allow us to\nturn this cleanup off when trying to perform benchmarking comparing\n\"warming\" phases, as well as \"hot\" phases - i.e. to understand how\nMountpoint performs when loading the cache versus a full cache, where\nall requests are served from it.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change. One log is downgraded from `warn` to\n`debug`. The warning was not providing much valuable information - if\nneeded, we can turn on debug logs if any strange behavior is observed.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no public changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T09:30:14Z",
          "tree_id": "cf1054344fd2f3a909e34fb60f31b42590dd3d0c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7e45834ac4e73aa648d8f62583c1b3becb12d2b8"
        },
        "date": 1751023797461,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1234.34677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2061.6224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.36708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1506.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 256.1537109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 414.5564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.13564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 281.6359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3474.9392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3926.3025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1181.9689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 803.492578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.87568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 901.19599609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 977.865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.1697265625,
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
          "id": "240108b8ab0386a9f7c6ca2f8de2901ebadd8c00",
          "message": "Remove inodes from file handles  (#1486)\n\nThis PR removes the reference to the inodes from the file handle and\ninstead uses the inode number and full key.\n\n### Does this change impact existing behavior?\n\nNo - is just an internal reorganisation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNeeds no Changelog entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T11:06:31Z",
          "tree_id": "45ca3fcb229ab13f55fcedaef59105acffefaaf0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/240108b8ab0386a9f7c6ca2f8de2901ebadd8c00"
        },
        "date": 1751029653669,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1240.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1983.365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.18408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1470.76396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 258.02080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 415.870703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.1900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.24951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3416.61904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3985.7240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1176.95810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.4591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1311.52158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.844921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 879.34111328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.9541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.82919921875,
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
          "id": "dc4fc38f76a9533053fe4aa364a0fc3f08b724ba",
          "message": "Avoid copy of data returned by GetObject (#1481)\n\nReduce memory fragmentation and peak usage by avoiding copying data\nreturned by GetObject into newly allocated buffers. This change relies\non the new CRT API integrated in #1430, which allows `S3CrtClient` to\nextend the lifetime of the buffers from the CRT memory pool when they\nare returned by GetObject. Callers of the `get_object` method are now\nresponsible for dropping the returned `Bytes` instances in order for the\nbuffers to be released back to the CRT memory pool.\n\nAt the moment, the memory-limiting strategy used in the prefetcher\ncomponent in Mountpoint does not cope well with the change and may end\nup starving the CRT of available buffers. For this specific use case, we\nintroduced a temporary feature flag in the `mountpoint-s3-client` crate,\n`restore_buffer_copy` which restores the previous behavior, i.e.\nGetObject allocates and returns new buffers with a copy of the object\ncontent. As we rework this aspect of the prefetcher, we will likely\nremove the feature flag.\n\n### Does this change impact existing behavior?\n\nYes. The buffers returned by GetObject will be borrowed from the\ninternal memory pool.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Entry and new version number for the client crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T12:59:16Z",
          "tree_id": "49d96598858412ab5c0e3a038809679ae81b3eb3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dc4fc38f76a9533053fe4aa364a0fc3f08b724ba"
        },
        "date": 1751036551452,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1230.290234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1977.46376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.50673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.52958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 257.89443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 435.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.94697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3371.4234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4064.3927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1163.39072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.80732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1448.312890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.55595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 943.51572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21376953125,
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
          "id": "01316f0631fa65afce93663f513b02e2355a9862",
          "message": "Update CHANGELOGs in preparation of `mountpoint-s3-client` release (#1489)\n\nUpdate the CHANGELOGs in order to release the client crates today.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T15:17:30Z",
          "tree_id": "a2eddd8b3e259d4d50c838f03751402713a19bef",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/01316f0631fa65afce93663f513b02e2355a9862"
        },
        "date": 1751044592730,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.47431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1970.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 770.51806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1485.61875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 264.7236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 453.91533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.6876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.77353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3390.06923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3917.35390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.72255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1039.343359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.331640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1035.3365234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 975.5080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.96416015625,
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
          "id": "6a4e5962d94a8b3bba33b4f5eb829073fe44adc5",
          "message": "Fix previous change disabling cache cleanup by default (#1490)\n\nOnly disable disk cache cleanup when the environment variable\n`UNSTABLE_MOUNTPOINT_DISABLE_CACHE_CLEANUP` is set. Fixes a bug in #1483\nwhich disabled cleanup by default.\n\n### Does this change impact existing behavior?\n\nYes. Reverts to previous default behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:02:45Z",
          "tree_id": "7c22d703da6ba8cc8ec7642fcb278b6869bb4216",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6a4e5962d94a8b3bba33b4f5eb829073fe44adc5"
        },
        "date": 1751050983877,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1242.68896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1926.07529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 744.77841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.6056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.63369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 440.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.19326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3545.7802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3996.5046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1207.35888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.02783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 786.47919921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1024.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1076.8177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1173.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1135.399609375,
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
          "id": "7f46c5141157368cdebd787389c19fb9d2e3d23a",
          "message": "Add trace for block reads in disk data cache (#1491)\n\nAdd a trace for block reads, useful for performance and memory analysis.\n\n### Does this change impact existing behavior?\n\nAdds a new trace log on block reading.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, trace log addition only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-06-27T17:02:59Z",
          "tree_id": "551963df2c841e6761c195dc31bccf96d5f636e0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7f46c5141157368cdebd787389c19fb9d2e3d23a"
        },
        "date": 1751051065288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1220.47939453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1951.7794921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.53193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.0603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 425.33623046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.96865234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.51181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3356.75009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.1052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1162.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1162.99765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 914.25908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 873.9912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1225.34375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1105.3728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 984.29931640625,
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
          "id": "6df6fb183d946d2afd78d3b9ea7325964917c55d",
          "message": "Upgrade to Rust 1.88 (#1493)\n\nUpgrade to the new compiler and address new clippy issues.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-27T17:07:36Z",
          "tree_id": "5a0fd226bfb5e2c3fa3e9faf5b6e153b7839886d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6df6fb183d946d2afd78d3b9ea7325964917c55d"
        },
        "date": 1751051193427,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1236.03095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1938.21416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 810.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1463.12744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.94677734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 460.18251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.17998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 250.40703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3501.14912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3975.42119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.898046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1189.0375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1372.0736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1307.28251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1278.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1072.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1284.52275390625,
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
          "id": "63fb942f3749964e974a54a7bf25dbb40d118a24",
          "message": "Update cargo dependencies (#1496)\n\nUpdate cargo dependencies.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-06-30T10:54:48Z",
          "tree_id": "986d85e6fe9a9b12fa1c9b03069a2447ac75f52a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63fb942f3749964e974a54a7bf25dbb40d118a24"
        },
        "date": 1751288066986,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1294.63125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1992.12734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.11083984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1476.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.2578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 474.50546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.5509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.7337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3369.426953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4032.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1455.9357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1312.80791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1420.873828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1328.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1106.45009765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.25458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1053.11162109375,
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
          "id": "73322655761f1211a4bf0b1921b91b1a395d5062",
          "message": "Remove clippy exception in logging module (#1497)\n\nMinor internal change to the `logging` module in `mountpoint-s3-crt`:\nwhen interfacing with the C functions, expose the logger implementation\nas a direct reference instead of as a reference to a `Box`. Removes an\nexception to the\n[borrowed_box](https://rust-lang.github.io/rust-clippy/master/#borrowed_box)\nclippy warning. Also adds the `unsafe` blocks and `SAFETY` comments that\nwill be required in Rust 2024.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T09:41:23Z",
          "tree_id": "5247db4671da5719496e1612ab043c8b3afde618",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73322655761f1211a4bf0b1921b91b1a395d5062"
        },
        "date": 1751370047579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1286.332421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2032.5958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 828.0525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1482.29892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.1646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 392.92958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 200.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.808984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3418.99619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4358.80087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1324.45361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.64619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1297.27958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 768.06904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1041.0298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1083.16611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 964.71357421875,
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
          "id": "05e964c915cb1254fcbcbd4f316cda41603b5954",
          "message": "Explicitly edit fstab file when running on Github runners to avoid a failure (#1482)\n\nIn the fstab CI tests, comment out a fstab entry for\n`\\dev/disk/cloud/azure_resource-part1` if we're running in Github\nActions.\n\n### Does this change impact existing behavior?\n\nFixes a failure in Github CI.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-01T13:42:48Z",
          "tree_id": "52581fc3fe4d6383ee758bb8b3f771e646bd97f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/05e964c915cb1254fcbcbd4f316cda41603b5954"
        },
        "date": 1751384493288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1292.833203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2011.157421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.39384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.422265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 288.9125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 402.53671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 176.390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.4486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3623.3791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4185.60244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1269.1384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1284.15869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1380.92744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 774.51708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1371.45068359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1031.7533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1362.032421875,
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
          "id": "120028c7af9edd00f46c665f1f6e12dbee866d48",
          "message": "Upgrade to Rust 2024 (#1498)\n\nUpgrade crates to [Rust 2024\nEdition](https://doc.rust-lang.org/edition-guide/rust-2024/index.html).\n\nChanges are for the most part:\n* formatting changes applied by `cargo fmt`,\n* adopting the new requirement of `unsafe` blocks (and `SAFETY`\ncomments) in `unsafe` functions.\n\n### Does this change impact existing behavior?\n\nNo user-visible changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nIncreased versions of library crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-01T16:44:32Z",
          "tree_id": "860b7a45fc0e1c3cbdac917bb60b2048bf75186b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/120028c7af9edd00f46c665f1f6e12dbee866d48"
        },
        "date": 1751395576510,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1270.45380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2027.1744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 777.1857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.777734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 603.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 178.49169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.31357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3422.6611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4177.30615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1424.2107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1220.69375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1350.9822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 777.2419921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1324.32197265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1071.72412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1383.980078125,
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
          "id": "a1972e4181f6be821bca3d4aa6ac5f601d31d2c7",
          "message": "Clarify that rename is atomic (#1499)\n\nClarified that rename in Express OneZone is atomic.\n\n### Does this change impact existing behavior?\n\nDoc update, no impact on existing behaviour.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, just a small doc update.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-02T11:23:54Z",
          "tree_id": "4ad16ed2f8edb96c2f661e21f5ddc873f3a08e0a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1972e4181f6be821bca3d4aa6ac5f601d31d2c7"
        },
        "date": 1751462557867,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.4279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2026.10703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 818.94208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.9611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 516.09228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 181.5845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.9833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3358.75146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4078.69453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1406.0869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1259.6015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1423.82294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 740.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1169.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1087.7322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1174.4001953125,
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
          "id": "814a43356ac5206a8ab179770427a3ed920ecc87",
          "message": "Simplify lookup + adjust readdir interface (#1488)\n\nThis PR introduces a more generic Lookup structure and uses it as the\nresult type of a lookup.\nAdditionally adjusts the readdir interface.\n\n### Does this change impact existing behavior?\n\nNo, does not impact existing behaviour.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-04T16:30:27Z",
          "tree_id": "634a2a275066bc17527a49a9ffae60f340a52856",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814a43356ac5206a8ab179770427a3ed920ecc87"
        },
        "date": 1751653857381,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.49921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2038.97568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 838.263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1484.1947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.1453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 507.56328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.33994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.56484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3444.851953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4169.71474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1420.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1258.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 850.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 792.0322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1038.2732421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1101.89853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1005.86259765625,
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
          "id": "382a369680a30073b725c206d528a8ebf834e864",
          "message": "Introduce builder pattern for mockclientconfig (#1502)\n\nUse a builder pattern for MockClientConfig.\n\n### Does this change impact existing behavior?\n\nDoes not impact existing behaviour as it only changes the way we build\nthe structure.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-07T07:56:41Z",
          "tree_id": "f8f99873c1e51ad626f9076cb3560b9086b54f2f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/382a369680a30073b725c206d528a8ebf834e864"
        },
        "date": 1751882178505,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1290.02099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2006.9126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.9701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.10859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 377.61533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 177.4369140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 267.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3810.13525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4140.29140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1277.23681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1219.41728515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1367.9298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 836.0515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1103.27783203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 976.37177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 948.28662109375,
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751910245026,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.9548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2047.98037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.089453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1477.0291015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.4611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 556.51669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 214.4265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 236.04755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3423.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4184.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1245.60712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1326.79921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 810.1474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.66298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1171.74716796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.18515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 979.11181640625,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751969191098,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1277.11845703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1995.96455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 850.06064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1438.30859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 270.62822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.30087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.34873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3537.19189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3991.11220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1301.296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1260.33193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 981.69345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1423.53994140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1039.508984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1068.45302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1217.947265625,
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
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752121231288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1272.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2028.5236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 819.17919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1479.22275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.34697265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 430.74287109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 180.6603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 235.3794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3937.271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4398.55615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1288.26845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1279.8310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1087.4158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 831.87431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1021.4236328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.23115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1259.760546875,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752166203638,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1301.6349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2034.64169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.19013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1502.8759765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 280.79755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 422.23876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 175.2376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 257.16767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3837.08330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4152.4841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1311.7697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1294.87646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1368.4580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1172.33115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1282.67265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1076.54892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.1017578125,
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
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752244898528,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1303.0826171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2084.8638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 809.666796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.09033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 445.96376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.78603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3464.25029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3969.205859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1282.00029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1271.7578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1516.32490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 753.79599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1025.54697265625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1113.29921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1170.7896484375,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752493222351,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1263.9404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2045.11708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 781.61474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1498.36396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.6869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 407.9466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.78671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 255.1466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3558.98271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4010.7677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1210.01201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1313.70849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1369.4197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1120.8421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1359.05673828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1015.4267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 952.10498046875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}