window.BENCHMARK_DATA = {
  "lastUpdate": 1734462059021,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733138295689,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.1705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2013.5208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 790.58466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1475.798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.026171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 411.58828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.47587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 247.303515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3816.92744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3971.87548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1131.2,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1154.00869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 906.77353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1121.11884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1313.89658203125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1197.11015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 904.35771484375,
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
          "id": "59f7ba56f45c7ff6834b79853c12c2b6fcafa216",
          "message": "Update documentation for supported bucket types (#1176)\n\nUpdate the documentation to enumerate supported bucket types.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T10:04:26Z",
          "tree_id": "344cf5fb725eedee6eeb53ccca9cc4c1dd4f7f5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f7ba56f45c7ff6834b79853c12c2b6fcafa216"
        },
        "date": 1733140874410,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1257.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1975.94033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 801.21689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1483.0916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.61025390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 589.86396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.17978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 319.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3554.13017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3947.42705078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1145.7525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1121.112109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 936.64248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 824.12099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1129.116015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.37568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1079.131640625,
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
          "id": "d14655adf91c734ef21f5dcdeeeed110e13de68a",
          "message": "Release v1.13.0 (#1178)\n\nBump version to 1.13.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T12:00:14Z",
          "tree_id": "cd1c649007a4f066ef26d85a0659a38f30fe85b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d14655adf91c734ef21f5dcdeeeed110e13de68a"
        },
        "date": 1733147885820,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1966.360546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 794.39775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1488.0958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.1744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 389.82822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.4904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 339.08466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3699.37294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4032.43935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1202.72880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1147.281640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1284.74931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1086.50654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1050.60380859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1030.59638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1081.58173828125,
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733332889213,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1294.77626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1984.97001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.519921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.183984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 273.71689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 497.45546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 305.26015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3551.7978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4016.07568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1128.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1161.469921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 836.2775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1414.18486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1222.8845703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1120.17666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1268.8990234375,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733334453292,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.37841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1966.22158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 800.3412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1486.94248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 420.49052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.770703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.08037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3663.95791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4079.76103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1147.57978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1130.67880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1320.03046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1167.0931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1050.7521484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 974.67431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1159.13916015625,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733403270190,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1258.19150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1949.72783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 780.52861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1484.2341796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 291.7462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 426.12578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.82080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 266.9814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3734.12509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3960.73232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.78212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1124.38603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1354.92119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 899.360546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1078.12763671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1119.9375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1049.76923828125,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733404512483,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1268.05146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.9349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 792.3501953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1490.60830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 290.1806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 428.80859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.151171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.24853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3717.03623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3966.125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1145.31865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1148.993359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1282.941796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1426.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1032.00849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 991.4990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1083.36162109375,
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
          "id": "3c7fb3fcfe485d397ec6fb65f25596569fc584d8",
          "message": "Simplify get_object by waiting for response headers (#1171)\n\n`S3CrtClient::get_object` was originally implemented so that it would\ncomplete immediately and return a `GetObjectRequest` implementation\n(extending `Stream`) to retrieve body parts. Any error from the S3\nrequest would be returned through the stream.\nWe recently added additional methods (`get_object_metadata` in #1065 and\n`get_object_checksum` in #1123) to the response that rely on the headers\nreturned by the (first) `GetObject` request. The new methods required an\nasync signature and a complicated implementation in order to account for\nfailures and they still do not correctly report accurate error\ninformation in some cases.\nWith this change, we modify `get_object` to await for response headers\nbefore returning either an error or a `GetObjectResponse` (note the name\nchange) implementation. The ergonomics of `get_object` are improved:\n* `await`ing the initial call can already return some errors (e.g.\nbucket/key not found),\n* `get_object_checksum` and `get_object_metadata` are now sync\nfunctions.\n\n### Does this change impact existing behavior?\n\nYes, `get_object` behavior is different, `get_object_checksum` and\n`get_object_metadata` signatures have changed, and `GetObjectRequest`\nwas renamed to `GetObjectResponse`.\n\n### Does this change need a changelog entry?\n\nYes, it requires a breaking change entry for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T20:48:17Z",
          "tree_id": "616cd7bda6e7117129f22aebaa3dc5aace410008",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c7fb3fcfe485d397ec6fb65f25596569fc584d8"
        },
        "date": 1733439016722,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1237.34580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1939.6416015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 771.81982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.597265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.21044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 525.69130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 204.75869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 239.61005859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3470.32451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3984.9017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1118.78759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1126.80029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1408.06630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1110.33505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1097.00615234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 985.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1197.6861328125,
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
          "id": "522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db",
          "message": "Optimise shared cache for single read use cases (#1163)\n\nUse an optional BytesMut to avoid copying data on the first write. \n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-06T10:43:24Z",
          "tree_id": "5d9ba45ba6cee2c55f8b4dcce95deeb0283cc7bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db"
        },
        "date": 1733488983910,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.0048828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1987.79912109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 791.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1461.74482421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.48095703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 465.23154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.12197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 286.46396484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3549.843359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3913.894921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1146.44609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1137.49736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 875.98125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 922.0236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1065.01826171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 982.4203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1012.7974609375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "936f4c31934bd87f7085e9462ad18611dd857aa6",
          "message": "Add errno to fuse_error macro (#1189)\n\nAdded errno to fuse_error macro\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-06T16:46:48Z",
          "tree_id": "f342dd3d76e806d6b44311523d611c02b17736b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/936f4c31934bd87f7085e9462ad18611dd857aa6"
        },
        "date": 1733510791915,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.46787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1953.06943359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 803.10849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1484.8720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 286.208984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 455.5115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 184.29375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 295.35244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3606.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4006.37353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1156.487890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1126.6517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 911.00078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 922.37041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1414.43662109375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1063.44423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1218.45400390625,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733833600965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1274.7455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2008.90751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 773.428515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1492.5017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 292.3763671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 600.3087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 210.8927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 278.075,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3691.00703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3918.5830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1200.792578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1153.96162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 811.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1095.8837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1097.7470703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 989.009375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 917.51064453125,
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
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733848653845,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1990.98310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.79189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.1701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.38828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 537.68671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 189.2490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 246.82724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3723.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4014.590234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1133.819921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1148.83505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 900.64189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 992.83349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1096.10390625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1098.278125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 922.780859375,
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
          "id": "441a5025600604e8bcf38ef991f200436f5148ff",
          "message": "Allow partial repeat of `readdir` response (#965)\n\n## Description of change\nWhen user application gets interrupted in a `readdir` syscall the\nunderlying chain of `readdir` fuse requests gets reset to an offset\nwhich is considered stale by Mountpoint. In that case Mountpoint still\ncompletes the interrupted `readdir` request, but kernel partially\ndiscards the response. We already cache the last response, so we can use\nit to serve the request which follows the interrupt.\n\nRelevant issues: https://github.com/awslabs/mountpoint-s3/issues/955\n\n## Does this change impact existing behavior?\n\nThis is not a breaking change. Previously an error was returned, now\nit'll be handled properly.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vladislav Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-10T17:03:49Z",
          "tree_id": "6c94fffcbf7a1071bef1b3ce6ba35f0a5bb6a611",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/441a5025600604e8bcf38ef991f200436f5148ff"
        },
        "date": 1733857309916,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.2388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1979.02685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 817.6779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1457.73701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.1486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 433.00263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.53603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 348.34951171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3676.27998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3908.6708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1108.7134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1126.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1354.04599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1176.95361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1057.10029296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 967.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1237.67158203125,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "caaa11b6543d5d5a5848834df514354c8fed8cb9",
          "message": "Add label to errno in error message for clarity (#1197)\n\nThis change improves the clarity of [fuse_error with\nerrono](https://github.com/awslabs/mountpoint-s3/pull/1189).\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2024-12-10T17:06:26Z",
          "tree_id": "81f8266c7b36539e9f9f593aaca6417786b4525d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/caaa11b6543d5d5a5848834df514354c8fed8cb9"
        },
        "date": 1733857460494,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1250.362890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1952.801171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 798.7587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.57373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.2978515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 532.75458984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 199.94814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 332.3326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3550.40107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3931.47021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1128.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1144.35537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1426.3953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 987.55751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1046.6337890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 967.15205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1001.23115234375,
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
          "id": "9d1196d169a67001b1a13ddc109eeddb9f5fb11f",
          "message": "Upgrade crates to latest versions (#1196)\n\nUpgrade all dependencies to the latest versions. Fix minor breaking\nchange in the API for `sysinfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T17:13:22Z",
          "tree_id": "f5271c3d8242c08adcc4e19829b8067eed11dc36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d1196d169a67001b1a13ddc109eeddb9f5fb11f"
        },
        "date": 1733857913699,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1255.16435546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.959375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 814.62353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1472.5072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.4986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 537.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 205.74599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.4791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3654.650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4054.1802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1143.32275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.3548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 834.43671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1217.119921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1034.28173828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.5849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 915.90341796875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "renanmagagnin@gmail.com",
            "name": "Renan Magagnin",
            "username": "renanmagagnin"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eecf301ec9fe538fcffde4459563124161669568",
          "message": "Create new latency benchmark for writing of one-byte files (#1190)\n\nCreates a new latency benchmark for writing of one-byte files. Also\ncreates a folder for writing latency benchmarks and extends the\n`fs_latency_bench.sh` script to handle multiple folders.\n\n### Does this change impact existing behavior? No\n\n### Does this change need a changelog entry? No\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2024-12-11T09:56:25Z",
          "tree_id": "347ab79ed636947f9dda697ea1efc77e5fb4ef63",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eecf301ec9fe538fcffde4459563124161669568"
        },
        "date": 1733918324299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.1619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1982.734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.28916015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.68798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.6111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 510.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.15625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 311.02744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3568.5587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4007.0701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1175.69287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1128.92822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 886.4541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 947.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1056.8341796875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1038.207421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1184.16416015625,
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
          "id": "f09ac0c765ebfce6fa71a01caf3e3534f1d71e59",
          "message": "Remove workaround for macOS builds due to pkg-config issues (#1202)\n\nIn November, macOS runners had an issue with the `pkg-config` package\nand we introduced a workaround:\nhttps://github.com/awslabs/mountpoint-s3/pull/1158/\n\nWe see now that the fix has been released and we should no longer need\nthe workaround: https://github.com/actions/runner-images/issues/10984.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T14:01:36Z",
          "tree_id": "6d86e38850362a6cc19e08263594a8736389406b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f09ac0c765ebfce6fa71a01caf3e3534f1d71e59"
        },
        "date": 1734451546279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.792578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1974.21962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.87783203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1466.3185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.21533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 505.392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 182.9603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 261.1990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3604.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4027.5107421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1133.39140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1145.06484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1404.87275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 788.615625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1052.4384765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1011.33037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 943.732421875,
            "unit": "MiB/s"
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
          "distinct": false,
          "id": "d5b36e8ff116a3f02be6c37c1112f7793b162430",
          "message": "Improve get_object interface for backpressure (#1200)\n\nCurrently, we support flow-control window for GetObject requests by\nallowing applications to call `GetObjectResponse::increment_read_window`\nbut it is tricky to use because we need to hold onto the stream itself\nin order to control the feedback loop while also consuming the data.\n\nThis change introduces a new trait `ClientBackpressureHandle` for\ncontrolling the read window so that the stream and the flow-control\npaths are decoupled.\n\nApplications can now call `GetObjectResponse::take_backpressure_handle`\nto get a backpressure handle from the response and use this handle to\nextend the read window.\n\n### Does this change impact existing behavior?\n\nYes, there is a breaking change for `mountpoint-s3-client`.\n\n### Does this change need a changelog entry?\n\nYes, for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Monthon Klongklaew <monthonk@amazon.com>",
          "timestamp": "2024-12-17T14:03:09Z",
          "tree_id": "02f6ff16f04c91b79e790bfc1e5a804f3fe763aa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d5b36e8ff116a3f02be6c37c1112f7793b162430"
        },
        "date": 1734452032902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1241.6693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1930.6720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 783.59072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.25302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 563.34560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 179.50185546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 277.9744140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3577.8197265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4004.9818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1141.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.15537109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1383.6216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 813.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1084.807421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1056.5494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1147.0087890625,
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
          "id": "631e6e06772ebc111896d29dac751de7ff5e0d1c",
          "message": "Address shadowing divergence in reftest, update semantics doc (#1201)\n\nThis commit addresses a case where MP model and property tests diverge\n(https://github.com/awslabs/mountpoint-s3/pull/1066). The issue was\ncaused by the reference not correctly implementing the shadowing order\ndefined in\n[#4f8cf0b](https://github.com/awslabs/mountpoint-s3/commit/4f8cf0b7054d2ea4dedb11ce28c6847849d2eb53).\nThis commit fixes the reference model, and clarifies the semantics\narising from concurrent MPUs.\n\nThis is not a breaking change, as it only impacts the reference tests.\n\nThis does not need a Changelog entry, as the change does not impact\nMountpoint's behaviour.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-12-17T15:52:11Z",
          "tree_id": "f2cf3b21c547261f4b81944038c76716c7245d62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/631e6e06772ebc111896d29dac751de7ff5e0d1c"
        },
        "date": 1734457927525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.133203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1964.55390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.385546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1465.28203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.93525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 550.7220703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.82001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 315.79716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3813.52578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4039.5515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1182.93837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1184.739453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 841.283984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1028.31533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1270.56015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1069.7884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1222.0154296875,
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
          "id": "602f371ff81ec89de5e6067fc09b7b7825d783ee",
          "message": "Add support for passing FUSE file descriptors as mount point (#1103)\n\n## Description of change\n\nfuser v0.15.0 added support for creating a `Session` from existing FUSE\nfile descriptor (via `Session::from_fd`). This PR adds this support to\nMountpoint. It allows passing FUSE file descriptor as mount point in the\nform of `/dev/fd/{fd}`.\n\nAn example usage of this feature can be seen with a helper Go script,\n[mounthelper.go](https://github.com/awslabs/mountpoint-s3/blob/86bdefa5147a7edc533a6be5d2724fec74ba91fb/examples/fuse-fd-mount-point/mounthelper.go):\n\n```bash\n$ go build mounthelper.go\n$ sudo /sbin/setcap 'cap_sys_admin=ep' ./mounthelper # `mount` syscall requires `CAP_SYS_ADMIN`, alternatively, `mounthelper` can be run as root\n$ ./mounthelper -mountpoint /tmp/mountpoint -bucket bucketname\nbucket bucketname is mounted at /dev/fd/3\n2024/11/07 17:23:42 Filesystem mounted, waiting for ctrl+c signal to terminate \n\n$ # in a different terminal session\n$ echo \"Hello at `date`\" > /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\nHello at Thu Nov  7 17:32:33 UTC 2024\n$ rm /tmp/mountpoint/helloworld\n$ cat /tmp/mountpoint/helloworld\ncat: /tmp/mountpoint/helloworld: No such file or directory\n```\n\nRelevant issues: This PR resurrects a previous PR to add this feature:\nhttps://github.com/awslabs/mountpoint-s3/pull/537\n\n## Does this change impact existing behavior?\n\nShouldn't affect any existing behavior as we had an “is directory?”\ncheck for passed mount points before, and it shouldn't have been\npossible to pass a file descriptor as a mount point prior to this\nchange.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated CHANGELOG for `mountpoint-s3`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>\nSigned-off-by: Burak Varlı <unexge@gmail.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-12-17T16:56:59Z",
          "tree_id": "1a210e077e88bc40a945a0b79f33981f0461f3fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/602f371ff81ec89de5e6067fc09b7b7825d783ee"
        },
        "date": 1734462058303,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.94580078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1955.076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.09716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1491.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.426171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 521.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 190.0015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 269.3490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3613.91298828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4017.73154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1227.2966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1152.3669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 850.0353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1405.12314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1068.71396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1061.52841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1415.7123046875,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}