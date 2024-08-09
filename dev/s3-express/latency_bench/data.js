window.BENCHMARK_DATA = {
  "lastUpdate": 1723194766501,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Benchmark": [
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
          "id": "becbd554c6d8e3e7a9751f16b61e3f643f682a83",
          "message": "Move mapping of PrefetchReadErrors into the fs::error module (#750)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-07-05T13:10:52Z",
          "tree_id": "52fd397cb689399ac727682e24c87302c2186bea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/becbd554c6d8e3e7a9751f16b61e3f643f682a83"
        },
        "date": 1720186450483,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.071,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.345,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.981,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.327,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.5142403,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.4603582,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hernaa@amazon.com",
            "name": "Andres Santana",
            "username": "arsh"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5855859fa4f87bf76af5f670205bc65169f5b2db",
          "message": "Fix cache benchmark to include results for read skip test. (#934)\n\nSigned-off-by: Andres Santana <hernaa@amazon.com>",
          "timestamp": "2024-07-09T08:45:55Z",
          "tree_id": "892a0756d6e85bd814008363b61b47f65e432012",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5855859fa4f87bf76af5f670205bc65169f5b2db"
        },
        "date": 1720516242032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.077,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.354,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.997,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.581,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.361733300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9012571,
            "unit": "milliseconds"
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
          "id": "278c42975ee93b9ab81b9f04054ba4ab5097a6bd",
          "message": "Add additional trace logging during mount (#937)\n\n* Add additional trace logging during mount\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Remove old block used to gate SSE behind compile-time flag\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-10T09:02:41Z",
          "tree_id": "ecd3eaa674a46302985e0fa01d08a791bf7a26e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/278c42975ee93b9ab81b9f04054ba4ab5097a6bd"
        },
        "date": 1720603675924,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.062,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.322,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.969,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.616,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.808580300000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.674634300000001,
            "unit": "milliseconds"
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
          "id": "a3c6f8229227d224e8776062dc94470087465cce",
          "message": "Update CRT libraries and set operation_name for DEFAULT meta-requests (#935)\n\n* Update CRT submodules to latest releases\n\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 96c47e3..11fc684:\n  > Make AES GCM more consistent cross platform (#189)\n  > Pin AWS-LC until it's fixed for manylinux1 (#188)\n  > Implement runtime check on libcrypto linkage (#186)\n  > clang-format 18 (#187)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 06cf4d8..6d974f9:\n  > cbor support  (#1131)\n  > Fix default thread options for windows to not pin to any cpu_id (#1126)\n  > Use CBMC 6.0.0 (#1128)\n  > latest_submodules.py uses AWS-LC-FIPS releases in aws-crt-java (#1125)\n  > Use CBMC version 5.95.1 (#1124)\n  > clang-format 18 (#1113)\n  > disable optimization was not working (#1123)\n  > Fix memtracer bad assumptions on the size of stack trace (#1122)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 6588f9a..cb431ba:\n  > test_helper.py improvements (#442)\n  > Fix shutdown_callback or returning NULL contract for meta_request (#440)\n  > BREAKING CHANGE: operation_name must be set for DEFAULT meta-requests (#439)\n  > clang-format 18 (#438)\n  > Auto - Update S3 Ruleset & Partition (#436)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 92bf532..4368aaa:\n  > Fix for loading JCA stripped private keys (#1658)\n  > Prepare for release v1.30.1 (#1657)\n  > Revert  `_CET_ENDBR` (#1656)\n  > Close FD in Snapsafe test function (#1649)\n  > Prepare for release v1.30.0 (#1646)\n  > Snapsafe-type uniqueness breaking event detection (#1640)\n  > Add EVP_md_null and SSL_set_ciphersuites (#1637)\n  > Add de-randomized ML-KEM modes to experimental EVP API (#1578)\n  > Patch for OpenVPN certificate setting behavioral difference (#1643)\n  > Require newer assembler for _CET_ENDBR (#1641)\n  > OpenVPN error codes, SSL_get_peer_signature_* funcs, and first patch file (#1584)\n  > NIST.SP.800-56Cr2 One-Step Key Derivation (#1607)\n  > Upstream merge 2024-06-13 (#1636)\n  > More minor symbols for Ruby support (#1581)\n  > Add support for NETSCAPE_SPKI_print (#1624)\n  > align gcc version with curl's CI (#1633)\n  > Fix spelling nits\n  > Generated ASM files\n  > Add Intel Indirect Branch Tracking support.\n  > [EC] Unify point addition for P-256/384/521 (#1602)\n  > Upstream merge 2024 06 03 (#1621)\n  > Fix AES key size for AES256 in ABI test (#1629)\n  > Move SSL_CIPHER_get_version test to SSLVersionTest.Version (#1631)\n  > Use 'nasm' not 'yasm' (#1630)\n  > Prepare for release 1.29.0 (#1626)\n  > Implement SSL_CIPHER_get_version for recent TLS versions (#1627)\n  > Add integration tests for OpenSSL-linking 3p modules (#1587)\n  > Prevent non-constant-time code in Kyber-R3 and ML-KEM implementation (#1619)\n  > Update ec2-test-framework to use gv2 (#1623)\n  > Script for creating compilation database (#1617)\n  > Fixes for building with `-pedantic` (#1608)\n  > Fix SSL_BUILD_CHAIN_FLAG_IGNORE_ERROR behavior (#1620)\n  > Update for FIPS documentation (#1610)\n  > Disable CI for gcc-14/FIPS until relocation issue is resolved (#1622)\n  > Add support for ocsp get id (#1609)\n  > Add libevent to GitHub integration CI (#1615)\n  > Upstream merge 2024 05 17 (#1600)\n  > add back ASN1_dup with tests (#1591)\n  > Remove special aarch64 valgrind logic (#1618)\n  > Fix NTP integ test (#1616)\n  > Pin aws-lc-rs integ to nightly-2024-05-22 (#1612)\n  > Cleanse the right amount of bytes in HMAC. (#1613)\n  > add support for X509_CRL_http_nbio (#1596)\n  > Add `all_fuzz_tests` build target (#1605)\n  > Fix mariadb ssl_crl patch (#1606)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 6d92b46..073c7b4:\n  > bug: Fixing bash error (#4624)\n  > chore: make cbmc proof build more strict by adding -Werror flag (#4606)\n  > Perform 2-RTT Handshake to upgrade to PQ when possible (#4526)\n  > test(bindings/s2n-tls): refactor testing::s2n-tls tests (#4613)\n  > docs: add timeout note to blinding delay docs (#4621)\n  > docs: Add back suggested FIPS + TLS1.3 policy (#4605)\n  > ci: shallow clone musl repo (#4611)\n  > example(bindings): add async ConfigResolver (#4477)\n  > chore: use CBMC version 5.95.1 (#4586)\n  > s2n-tls rust binding: expose selected application protocol (#4599)\n  > test: add pcap testing crate (#4604)\n  > testing(bindings): add new test helper (#4596)\n  > chore(bindings): fix shebang in generate.sh (#4603)\n  > fix(s2n_session_ticket_test): correct clock mocking (#4602)\n  > Fix: update default cert chain for unit tests (#4582)\n  > refactor(binding): more accurate naming for const str helper (#4601)\n  > fix: error rather than empty cipher suites (#4597)\n  > chore: update s2n_stuffer_printf CBMC harness (#4531)\n  > ci(nix): Fix integ pq test in a devShell (#4576)\n  > feature: new compatibility-focused security policy preferring ECDSA (#4579)\n  > compliance: update generate_report.sh to point to compliance directory (#4588)\n  > ci: fix cppcheck errors (#4589)\n  > chore: cleanup duplicate duvet citations (#4587)\n  > Merge pull request from GHSA-52xf-5p2m-9wrv\n  > chore(bindings): release 0.2.7 (#4580)\n  > fix: Validate received signature algorithm in EVP verify (#4574)\n  > refactor: add try_compile feature probe for RSA-PSS signing (#4569)\n  > feat: Configurable blinding (#4562)\n  > docs: document s2n_cert_auth_type behavior (#4454)\n  > fix: init implicit iv for serialization feature (#4572)\n  > [Nix] adjust pytest retrys (#4558)\n  > fix: cert verify test fix (#4545)\n  > fix: update default security policies (#4523)\n  > feat(bindings): Associate an application context with a Connection (#4563)\n  > chore(bindings): version bump (#4566)\n  > Additional test cases for s2n_constant_time_equals() (#4559)\n  > test: backwards compatibility test for the serialization feature (#4548)\n  > chore(bench): upgrade rustls (#4554)\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Try to reduce package size\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Set operation_name when using MetaRequestType::Default\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n* Introduce S3Operation type\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.com>",
          "timestamp": "2024-07-10T15:44:46Z",
          "tree_id": "14139e717ee4461f49f9d6a774d0733ca0a54108",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3c6f8229227d224e8776062dc94470087465cce"
        },
        "date": 1720627594851,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.072,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.939,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.291,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.293033900000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.167834800000001,
            "unit": "milliseconds"
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
          "id": "ad7ce808f01609777cb305babc43c730de68517f",
          "message": "Introduce `event_log` feature flag  (#936)\n\n* Run tests for the event_log feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Remove unused negative_cache feature flag\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-11T07:28:20Z",
          "tree_id": "c2fb4b27e3be74717c54444323158558e7805219",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ad7ce808f01609777cb305babc43c730de68517f"
        },
        "date": 1720684428862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.795,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.452,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.444582800000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 12.0093032,
            "unit": "milliseconds"
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
          "id": "ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0",
          "message": "Update CRT submodules to latest releases (#940)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-12T09:55:22Z",
          "tree_id": "fe8a91bcf90942bdbe5e5ce66e8d1cb507cc8f00",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ac6c1770cec5ee7c0fd2ee009b87b9fdddea2af0"
        },
        "date": 1720779656273,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.176,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.79,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.245,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.7548622,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.574501699999999,
            "unit": "milliseconds"
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
          "id": "b4e11b8e4046eee141fc70ab60778dbf15db3ab2",
          "message": "Rename docs_rs config condition to docsrs (#956)\n\nThis change is made to avoid config condition errors now that check config is run by default in Rust 1.80+.\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-29T16:00:51Z",
          "tree_id": "98a756cb7c33601e8f88e6dcb2926b00b72a285e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b4e11b8e4046eee141fc70ab60778dbf15db3ab2"
        },
        "date": 1722270360021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.044,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.843,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.575,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6461229,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.120608,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Hahadaxigua@gmail.com",
            "name": "Ryan Tan",
            "username": "crrow"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0fff1320c2344171a7334a5f05f53832db4aa1f1",
          "message": "Add arguments to specify GET and PUT part size independently (#949)\n\n* feat: separate part-size for PUT & GET\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* chore: follow import style\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* fix: simplify cli help; make separated part-size conflict with old one; use read_part_size when get\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Verify new separated part size arg is conflicted with old one\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Drop Option<u64> on part-size\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n* Move part-size back\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>\n\n---------\n\nSigned-off-by: Ryan Tan <hahadaxigua@gmail.com>",
          "timestamp": "2024-07-30T13:00:45Z",
          "tree_id": "0a12881106bb7aa8e6cc959342b4d82069d41431",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0fff1320c2344171a7334a5f05f53832db4aa1f1"
        },
        "date": 1722346026562,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.192,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.8,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.391,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.6804778,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.7925977,
            "unit": "milliseconds"
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
          "id": "42ad47a5637ba218a0a9b0765280aed3debf5808",
          "message": "Update CRT submodules to latest releases (#962)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-07-31T12:58:02Z",
          "tree_id": "e836c756eef3d96308e675c7b5f8a1c17b216110",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/42ad47a5637ba218a0a9b0765280aed3debf5808"
        },
        "date": 1722432240344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.825,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.395,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.844675,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.5510593,
            "unit": "milliseconds"
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
          "id": "3efed3d8e0152229b3ba9972ac105cc6a61ebafc",
          "message": "Decompose request reading and body splitting logic (#957)\n\n* Split request reading and body splitting logic\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Log and increase metric once\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n* Review comments\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2024-07-31T13:35:16Z",
          "tree_id": "c0abc9e736518c1d8f1ff034d1bee7353f2c047b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3efed3d8e0152229b3ba9972ac105cc6a61ebafc"
        },
        "date": 1722434350557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.183,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.812,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.322,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.797383400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 9.9049985,
            "unit": "milliseconds"
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
          "id": "0db2844594b0e0df6f9aeb630fa133a93563adf8",
          "message": "Update documentation for new read/write specific part size arguments (#960)\n\n* Update documentation for new read/write specific part size arguments\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Update changelog entry\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T06:08:08Z",
          "tree_id": "5296832e9c5e575af30ef658c2687484df34ce55",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0db2844594b0e0df6f9aeb630fa133a93563adf8"
        },
        "date": 1722494201356,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.822,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.396,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.285735599999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.380872199999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d6faa94d18983c137b38f27b40c8a61f21252bc",
          "message": "Update CRT submodules to latest releases (#963)\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T09:26:29Z",
          "tree_id": "b93fb78d804bb889fb0f77474f81e2d1de2f7ff4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d6faa94d18983c137b38f27b40c8a61f21252bc"
        },
        "date": 1722505801632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.188,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.841,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.169,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.1760436,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.265122199999999,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ahmarsu@amazon.co.uk",
            "name": "ahmarsuhail",
            "username": "ahmarsuhail"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5",
          "message": "Preparing of v1.8.0 release (#964)\n\n* bumping version to 1.8.0\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* update changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* updates changelog\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\n\n* Fix incorrect PR link\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Ahmar Suhail <ahmarsu@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T10:49:00Z",
          "tree_id": "af98206259292c3b582248896df7b7ba21158e27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/387ad7933a9b0c6463f11c1eb0a6d87acaa48cd5"
        },
        "date": 1722510954592,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.04,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.815,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.884,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.610137400000001,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.734455800000001,
            "unit": "milliseconds"
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
          "id": "073277047bb412d1f5cf98e4efa5668074dc7626",
          "message": "Replace custom ResultExt with stable Result::inspect_err (#951)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-01T15:33:09Z",
          "tree_id": "a8c23da91e712e5eb260fa8852cb987496d4abf7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/073277047bb412d1f5cf98e4efa5668074dc7626"
        },
        "date": 1722527962472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.041,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.184,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.847,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.554,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.3712959,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.1249031,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d3a070517e4551f99ecf697b33ca11cdde0c7d03",
          "message": "Fix warnings on tests (#966)\n\nA small change to fix \"unused imports\" warning messages when running\n`cargo test`.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-01T15:56:38Z",
          "tree_id": "fe3e304fbc55c326048316fedae40e281c3acbb2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3a070517e4551f99ecf697b33ca11cdde0c7d03"
        },
        "date": 1722529373783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.039,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.185,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.795,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.228,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.2559435,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.1585408,
            "unit": "milliseconds"
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
          "id": "58edaafaaf065f5537202394580cf58c05017aa1",
          "message": "Update PR template to prompt thinking on change log entry (#968)\n\n* Add section on changelog updates to PR template\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Add links to changelogs\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-02T12:53:08Z",
          "tree_id": "49f0fb64e39106ed93d5b10ce74a726231703107",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58edaafaaf065f5537202394580cf58c05017aa1"
        },
        "date": 1722604777460,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.042,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.187,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.806,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.547,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.845030099999999,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.320464900000001,
            "unit": "milliseconds"
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
          "id": "6e9eaa1e316ba486299d7d2f4d275a305126d3af",
          "message": "Consolidate test credential helpers into creds modules (#967)\n\n* Consolidate test creds helpers into creds modules\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Move creds functions depending on s3_tests feature into their own mod, re-export\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n* Fix fork_test\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-06T14:58:20Z",
          "tree_id": "0014a4d2266bdb08110539dc7a66e536127bf937",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6e9eaa1e316ba486299d7d2f4d275a305126d3af"
        },
        "date": 1722957784034,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.186,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.858,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.864,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.8634846,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.5468277,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa",
          "message": "Make s3 client able to report read window offset (#971)\n\n* Make s3 client able to report read window offset\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* Update CHANGELOG.md\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-07T10:20:11Z",
          "tree_id": "3aa7e908d6ee4a317253b881303ff3b970bd4d27",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c6b1e328d0e2dc7d2d9b3fb91c6992d77854caa"
        },
        "date": 1723027485749,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.047,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.19,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.845,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.517,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 11.7173359,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.8699758,
            "unit": "milliseconds"
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
          "id": "d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f",
          "message": "Update NoSigningCredentials error message, add troubleshooting entry (#975)\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-08-07T12:23:15Z",
          "tree_id": "693c7ffef8137f8b9475cbf602ca3957f3a47edb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d3cd7a187e8cff8967fb99d2b04492cb1c3cbd2f"
        },
        "date": 1723035060015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.043,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.189,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.809,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.853,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 10.9442278,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 10.9757411,
            "unit": "milliseconds"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "monthonk@amazon.com",
            "name": "Monthon Klongklaew",
            "username": "monthonk"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09a18544164920ed521d7d3d0084d3ea730ad97e",
          "message": "Refactor object part stream (#972)\n\n* Refactor object part stream\n\nVarious refactorings, including a new config type for object part stream\ntask, introducing structs for part composers, consolidating error handling\nflow in request reader and part composer.\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n* PR comments\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-08-09T08:47:46Z",
          "tree_id": "1ca44780f09320a623c3374d0be807b2449c09c6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a18544164920ed521d7d3d0084d3ea730ad97e"
        },
        "date": 1723194766048,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "readdir_100",
            "value": 0.046,
            "unit": "seconds"
          },
          {
            "name": "readdir_1000",
            "value": 0.181,
            "unit": "seconds"
          },
          {
            "name": "readdir_10000",
            "value": 0.862,
            "unit": "seconds"
          },
          {
            "name": "readdir_100000",
            "value": 7.284,
            "unit": "seconds"
          },
          {
            "name": "time_to_first_byte_read",
            "value": 12.4074032,
            "unit": "milliseconds"
          },
          {
            "name": "time_to_first_byte_read_small_file",
            "value": 11.6457709,
            "unit": "milliseconds"
          }
        ]
      }
    ]
  }
}