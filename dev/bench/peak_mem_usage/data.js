window.BENCHMARK_DATA = {
  "lastUpdate": 1733919180277,
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
          "id": "654d86027265fafc87c5064cfe3a521faf0f11d4",
          "message": "Fix flaky out_of_order_write test (#1170)\n\nThe `out_of_order_write` tests failed to account that in incremental\nupload mode the previously written content of a file could be already\nuploaded when a subsequent `write` fails (as expected in the test). In\nthis case, the upload would occasionally be triggered by a `flush` call\nas a consequence of the test runner process being forked.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-27T14:25:07Z",
          "tree_id": "522ada25736c28165de1b678dc8aabe80745bc1f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/654d86027265fafc87c5064cfe3a521faf0f11d4"
        },
        "date": 1732725585476,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11079.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23641.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35407.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32054.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36207.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10234.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10320.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13128.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 735.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.8671875,
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
          "id": "b04177565a641e7c5f6be18cbefe6fcdc583732e",
          "message": "Fix Clippy warnings on Rust 1.83 (#1175)\n\nRust 1.83 has been released with new Clippy lints, and it [broke our\nCI](https://github.com/awslabs/mountpoint-s3/actions/runs/12072806349/job/33667591504?pr=1103)\nas we use stable toolchain.\n\nThis PR fixes Clippy warnings on Rust 1.83. Most fixes are done with\n`cargo clippy --fix` and manually checked.\n\n### Does this change impact existing behavior?\n\nNone expected, it just changes the code style.\n\n### Does this change need a changelog entry?\n\nNo, as there is no behavioral change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varli <burakvar@amazon.co.uk>",
          "timestamp": "2024-11-28T21:25:18Z",
          "tree_id": "f55ad261e9c05377bf58e76e528730db2b4866bf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b04177565a641e7c5f6be18cbefe6fcdc583732e"
        },
        "date": 1732837219723,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14854.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24951.01953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35777.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34037.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36548.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12018.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12977.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12760.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 667.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 434.015625,
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
          "id": "54b57c47df1fe38296267495f3820260a6b72775",
          "message": "Merge AppendUploader into Uploader (#1172)\n\nInternal refactor to merge the `AppendUploader` for incremental uploads\ninto the existing `Uploader`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-11-29T15:02:02Z",
          "tree_id": "948984450c148893795a5b131a77a36e4cff8d4c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54b57c47df1fe38296267495f3820260a6b72775"
        },
        "date": 1732900655320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13206.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27463.94140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38225.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 98.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36565.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35295.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13185.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11323.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11026.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 599.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 420.63671875,
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
          "id": "989f7bc6f5ff72deeb73ace3939836ae8c9e7814",
          "message": "Update CRT submodules to latest releases (#1177)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Amazon S3 introduces support for AWS Dedicated Local Zones.\n([awslabs/aws-c-s3#465](https://github.com/awslabs/aws-c-s3/pull/465))\n \n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 48d647bf..3982bd75:\n  > Update CMake to 3.9 (#255)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 2cb1d2ea..fbbe2612:\n  > RSA PKCS1.5 SHA1 signing (#201)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#199)\n  > Update CMake to 3.9 (#200)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common f58e807d..be8ed873:\n  > Fix test that made no sense (#1172)\n  > Update CBMC proof tooling to latest releases (#1164)\n  > Forward CMake variables to prebuilding dependencies (#1161)\n  > Remove reliance on hardcoded user in ci (#1170)\n  > Doc fix for cbor (#1171)\n  > switch c compiler check to different cmake variable (#1169)\n  > disable visibility hidden on old gcc (#1167)\n  > fix empty xml node handling (#1168)\n  > Unlink shutdown callback from ref count (#1166)\n  > check if numa available or not before loading numa functions (#1163)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#1151)\n  > Update CMake to 3.9 (#1159)\n  > Support Swift CXX Interop  (#1160)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f36d0167..c6c1191e:\n  > Update CMake to 3.9 (#70)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 6068653e..fc3eded2:\n  > Update for event loop API changes (#491)\n  > Add cxx support (#490)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#486)\n  > Update CMake to 3.9 (#489)\n  > Tweak error message for AWS_ERROR_HTTP_RESPONSE_FIRST_BYTE_TIMEOUT (#488)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io e3637404..fcb38c80:\n  > Add an Option to disable retries (#694)\n  > Update checksum based on previous PR changes (#695)\n  > Add ML-KEM Support (#693)\n  > Event loop public api (#691)\n  > Add cxx support (#689)\n  > Fix s2n cleanup (#687)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#671)\n  > Update CMake to 3.9 (#686)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 16701501..45894ed3:\n  > Amazon S3 introduces support for AWS Dedicated Local Zones (#465)\n  > Support trailing checksum with no signing (#459)\n  > support if-none-match for upload (#462)\n  > Use proper public event loop group API (#460)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#452)\n  > Update CMake to 3.9 (#458)\n  > Support header checksum (#454)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 4658412a..ce09f797:\n  > Add cxx support (#48)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#45)\n  > Update CMake to 3.9 (#47)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums ce04ab00..3e4101b9:\n  > fix predefines for bswap for old compilers (#99)\n  > CRC big endian support (#97)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#95)\n  > Update CMake to 3.9 (#98)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 8b2ebfcf..59828538:\n  > Prepare for v1.40.0 release (#2019)\n  > [EC] Use s2n-bignum point doubling for P-384 and P-521 (#2011)\n  > Document TLS Server Renegotiation Behavior (#2018)\n  > Fail FIPS rsa_keygen_pubexp on change (#2016)\n  > Adding -verify and expanding -x509 options for our OpenSSL tool (#1951)\n  > Upstream merge 2024-11-11 (#1985)\n  > Implement PKCS7_encrypt and PKC7_decrypt (#1996)\n  > [EC] Unify scalar_mul_public for ec_nistp curves (#2004)\n  > Adding the OpenSSL s_client tool (#1959)\n  > Add Clang 19 to CI (#1998)\n  > [EC] Unify scalar_mul_base point for ec_nistp curves (#2003)\n  > Add internal APIs for ML-DSA (#1999)\n  > Test cleanup (#2000)\n  > Minor improvement to DSA (ASN1) + DSA Tests (#1990)\n  > Implement PKCS7_dataInit and PKCS7_dataFinal (#1816)\n  > Addition of generic NIST-DSA PKEY and ASN1 to support ML-DSA (#1963)\n  > Expose a bit of lhash/conf for Ruby (#1987)\n  > Allow ASN1_get_object to parse indefinite and universal (#1994)\n  > Added CRL tool to CLI (#1976)\n  > Prepare release AWS-LC v1.39.0 (#1995)\n  > Revert \"Replace CONF's internal representation with something more typesafe\" (#1986)\n  > Add Cyrus-SASL to our CI (#1988)\n  > Cleanup test File utilities (#1989)\n  > Account for cipher auth with multiple cert slots (#1956)\n  > Allocate 16k scratch on heap (#1991)\n  > Add CRYPTO_sysrand benchmarks to speed.cc (#1978)\n  > Update PQREADME to add link to the KEM readme file (#1973)\n  > Avoid compiler warning (#1981)\n  > Ruby Support - More EVP_PKEY_DSA (#1954)\n  > Upstream merge 2024-10-23 (#1955)\n  > CI gcc-4.8 - use 4.8.5 tag (#1980)\n  > Fix sess_hits counter on the server (#1974)\n  > Support Finished-based APIs for TLS 1.3 (#1952)\n  > Fix i2d behavior for i2d_SSL_SESSION (#1966)\n  > fix `-Wcast-function-type` build issues (#1972)\n  > Prepare v1.38.0 release (#1975)\n  > Expose AES_cfb1_encrypt and AES_cfb8_encrypt (#1967)\n  > EDDSA PCT (#1968)\n  > ML-KEM keygen Pairwise Consistency Test (#1964)\n  > Coverity Fix Null Check (#1965)\n  > Actually add support for SSL_get_server/peer_tmp_key (#1945)\n  > Also test w/ gcc 4.8 (#1962)\n  > Fixes for Coverity Alerts (#1960)\n  > Add support for POINT_CONVERSION_HYBRID (#1936)\n  > Ruby Support - DSA custom md (#1953)\n  > Add PKCS7-internal BIO_f_md (#1886)\n  > Add PKCS7-internal BIO_f_cipher (#1836)\n  > Expand support for EVP_PKEY_HMAC (#1933)\n  > Support encode or decode ∞ like OpenSSL (#1930)\n  > Fix FIPS.md typo (#1950)\n  > Missing functionality + Adding Nmap to our CI (#1915)\n  > HKDF, HKDF_expand, and PBKDF Truncated SHA2-512 (#1946)\n  > bump mysql CI to 9.1.0 (#1939)\n  > PQ README (#1932)\n  > Add p4p, bump up time (#1943)\n  > Remove retries on PCT failure in EC and RSA key generation. (#1938)\n  > Remove old Intel CPU types (#1942)\n  > Upstream merge 2024 10 17 (#1934)\n  > DH paramgen callback (#1928)\n  > Add null check in dh testing (#1937)\n  > Use illegal_parameter instead of decode_error for invalid key shares (#1923)\n  > Also prune SSM documents from ec2-test-framework (#1925)\n  > Marshalling/Unmarshalling DH public keys (#1916)\n  > 800-131Ar1: length of the key-derivation key shall be at least 112 bits. (#1924)\n  > Prepare 1.37.0 release (#1927)\n  > Add 2024 FIPS and fix build issues on older arm FIPS (#1920)\n  > Align X509 PARTIAL_CHAIN behavior with 1.1.1 (#1917)\n  > P161732527 coverity cleanup (#1918)\n  > build: fix pkgconfig files (#1913)\n  > Avoid allocating EVP_PKEY on size checks (#1911)\n  > Add EC_GROUP mutablility to custom curves (#1881)\n  > Implement more EVP_PKEY_DH functionality (#1880)\n  > ML-DSA parameter refactor (#1910)\n  > Update FIPS docs w/ certs (#1900)\n  > Handle Windows not supporting static array dimension (#1912)\n  > Remove duplicate s2n-bignum prefix include option (#1909)\n  > Add support for EVP_PKEY_CTX callback functions (#1905)\n  > P159598331 coverity cleanup (#1908)\n  > Add Alpine-Linux-x86 to GitHub Actions CI (#1753)\n  > Upstream merge 2024 09 16 (#1862)\n  > Update Dilithium from crystals upstream (#1894)\n  > Create mutable EC_GROUP API for OpenSSL compatibility (#1860)\n  > ML-KEM FIPS 203 destruction of intermediate values (#1883)\n  > Remove special s2n-bignum symbol handling sauce from build (#1903)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls ffe0bf42..493b7716:\n  >  feat: Reworking cleanup behavior (#4871)\n  > chore: broaden use of flaky mark (#4865)\n  > chore: configure dependabot (#4861)\n  > fix: fix open AF_INET sockets in s2n_self_talk_ktls_test.c (#4852)\n  > chore: update github PR template (#4885)\n  > feat: add new security policy `20241106` (#4874)\n  > chore: remove unused benchmarks (#4869)\n  > ci: Clean dup source tree for CRT (#4882)\n  > ci: remove www.mozilla.com from well-known to unblock CI (#4880)\n  > fix: move prelude inclusion as PRIVATE (#4876)\n  > build: add s2n_prelude.h to consolidate defines (#4465)\n  > chore: bindings release 0.3.6 (#4867)\n  > doc: fix incorrect README references (#4863)\n  > fix: typo in comment of s2n_self_talk_tls13_test (#4864)\n  > fix: close all /dev/urandom open fds (#4835)\n  > docs: update fips documentation to specify supported libcrypto (#4857)\n  > fix(bindings): correct poll_flush implementation (#4859)\n  > feat: Adds cleanup_final (#4853)\n  > test(bindings): Consolidate test pems (#4858)\n  > chore: bindings release 0.3.5 (#4860)\n  > chore: grant duvet action more permissions (#4854)\n  > (feat): Adds certificate match metrics API (#4844)\n  > chore: Fix failing OIDC workflows; cleanup unused actions (#4848)\n  > chore(GHA): Update duvet arguments (#4850)\n  > chore: remove unused compile definition (#4815)\n  > Add new MLKEM TLS Policies (#4830)\n  > fix: fix opened AF_UNIX sockets that didn't call s2n_io_pair_close (#4833)\n  > bindings: pin openssl crate to 0.10.66 (#4849)\n  > chore: flip 2 GHAs to use short lived creds. (#4839)\n  > fix: fix s2n_io_pair_close_one_end (#4841)\n  > ci: Re-enable asan and ubsan for fuzz tests (#4840)\n  > fix: some open AF_UNIX sockets in forked child processes (#4834)\n  > Update FIPS rules for ML-KEM (#4829)\n  > ci: update ubuntu versions (#4828)\n  > Add initial support for MLKEM768 (without any new Security Policies) (#4816)\n  > chore: Adds print statements to help debug s2n_dynamic_load_test (#4836)\n  > ci: add more libcryptos for fuzz batch & follow cmake idioms (#4795)\n  > feature: bump cert authorities max size to 20kb (#4832)\n  > ci: Add ubuntu24 with a new cmake buildspec (#4824)\n  > Add ML-KEM Feature Probe and Test (#4823)\n  > docs: update stateful resumption doc (#4818)\n  > chore: remove make fuzz and AFL fuzz (#4808)\n```\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-02T09:15:27Z",
          "tree_id": "f7ac9f5fe782e078712af31710787f283a2ea32c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/989f7bc6f5ff72deeb73ace3939836ae8c9e7814"
        },
        "date": 1733139113373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15425.2578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24472.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37566.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 351.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36325.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37813.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10314.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12265.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13881.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 668.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.53125,
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
          "id": "59f7ba56f45c7ff6834b79853c12c2b6fcafa216",
          "message": "Update documentation for supported bucket types (#1176)\n\nUpdate the documentation to enumerate supported bucket types.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T10:04:26Z",
          "tree_id": "344cf5fb725eedee6eeb53ccca9cc4c1dd4f7f5a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59f7ba56f45c7ff6834b79853c12c2b6fcafa216"
        },
        "date": 1733141796961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12666.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19841.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36402.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 99.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34232.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37222.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8688.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12164.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12798.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 551.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 371.1328125,
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
          "id": "d14655adf91c734ef21f5dcdeeeed110e13de68a",
          "message": "Release v1.13.0 (#1178)\n\nBump version to 1.13.0.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nAdded in this PR.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2024-12-02T12:00:14Z",
          "tree_id": "cd1c649007a4f066ef26d85a0659a38f30fe85b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d14655adf91c734ef21f5dcdeeeed110e13de68a"
        },
        "date": 1733148804927,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14567.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25564.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34066.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38344.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33937.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10226.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11408.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12649.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 585.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 386.015625,
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
          "id": "ff191c1159e7d32b9fdeb2b0f0ca84628958c60a",
          "message": "Fix warnings for test struct variant not used (#1151)\n\nThis addresses the only build warning we have in Mountpoint's own\ncrates. The remaining build warnings come from the fuser forked crate,\nwhich we plan to address through an upstream contribution.\n\n### Does this change impact existing behavior?\n\nNo, avoids import of unused code in a test only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2024-11-21T15:05:50Z",
          "tree_id": "b622a43ba2266970019ee419fe25ee45d32db6f1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ff191c1159e7d32b9fdeb2b0f0ca84628958c60a"
        },
        "date": 1733231281560,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11466.21484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22662.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39458.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 369.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31169.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37818.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9182.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11567.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12854.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 729.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.390625,
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
          "id": "630e5a00752eb664911d1fba29b29702b0ec4c9d",
          "message": "Implement statfs with synthetic values (#1118)\n\n## Description of change\nThis PR adds support for calling `statfs` on virtual file system created\nusing mountpoint.\nSome applications depend on the filesystem reporting non-zero available\nspace; currently mountpoint reports 0 as number of available blocks,\nwhich can cause these applications to not work as expected.\n\nThis PR (building on #871) implements statfs with synthetic values\n(4611686018427387904 free blocks).\nFor example, the DF output now is: \n```\nmountpoint-s3  4611686018427387904        0 4611686018427387904   0% /local/home/chagem/mnt/bucket\n```\nThus, checks for available space should no longer fail. \n\n\nRelevant issues: #710.  \n\n\n### Does this change impact existing behavior?\n\nThis change impacts existing behaviour, as Mountpoint will report\nnon-zero value for total blocks, free blocks, free inodes and maximum\nfile name length.\n\n### Does this change need a changelog entry?\n\nYes, addressed.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2024-11-21T15:43:13Z",
          "tree_id": "86319b3ce466aa3aa9a9eeacc89f327667f48bf2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/630e5a00752eb664911d1fba29b29702b0ec4c9d"
        },
        "date": 1733239101518,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12596.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21398.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35509.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33426.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33541.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8942.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 251.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11535.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13352.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 718.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 402.51171875,
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
          "distinct": false,
          "id": "353a74782af91d0ee48424519d434e16bfb2bda9",
          "message": "Update hashbrown 0.15.0 to 0.15.2 (#1184)\n\nUpdate hashbrown 0.15.0 to 0.15.2 to fix\nhttps://rustsec.org/advisories/RUSTSEC-2024-0402\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:24:04Z",
          "tree_id": "89193b05da07694243d0c4aba0de26d085076c2c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/353a74782af91d0ee48424519d434e16bfb2bda9"
        },
        "date": 1733333856977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15828.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25771.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36870.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35050.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35859.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12875.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11577.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13458.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 768.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 485.015625,
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
          "id": "489f2e5334fd2ef51a368f286f48ca7673cbb9e5",
          "message": "Add link to Lifecycle docs for directory buckets (#1183)\n\nAdd link to Lifecycle docs for directory buckets\n\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-04T15:49:54Z",
          "tree_id": "e93ad0b6e031791d901344a74677c5bbf1cb2c8b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/489f2e5334fd2ef51a368f286f48ca7673cbb9e5"
        },
        "date": 1733335349015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12824.66015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23379.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36292.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34610.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35542.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10095.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11313.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10810.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 659.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.3984375,
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
          "id": "7a675cd70380f27849458663f617035784bd7fe9",
          "message": "Update get_object_attributes test to account for default checksum (#1185)\n\nThe [improved support for object integrity\nchecks](https://docs.aws.amazon.com/AmazonS3/latest/userguide/checking-object-integrity.html#using-additional-checksums)\nthat is being rolled out in Amazon S3 means that GetObjectAttributes\nreturns a `CRC-64NVME` object checksum even when no checksum was\nspecified when the object was uploaded.\n\nThis change removes the expectation of an empty checksum that was\ncausing a test failure in some regions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T10:54:40Z",
          "tree_id": "ca9e6a33aad4186a5bfe2dd78cc439c603c764cb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7a675cd70380f27849458663f617035784bd7fe9"
        },
        "date": 1733404175568,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12481.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20341.62109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34494.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34643.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31785.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9072.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12780.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11725.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 745.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 497.88671875,
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
          "id": "993b0d42c0b172fb82fea39ac3964a1b3c74d4cf",
          "message": "Refactor incremental upload queue (#1181)\n\nInternal refactor of the append queue for incremental uploads. Splits up\nthe initial `HeadObject` request and return the checksum algorithm of\nthe existing object separately from the `PutObject` responses.\n\n### Does this change impact existing behavior?\n\nNo, internal change only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T11:15:47Z",
          "tree_id": "f65c931aa350f5cc45a85c9b01e0cc8889a9ed3f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/993b0d42c0b172fb82fea39ac3964a1b3c74d4cf"
        },
        "date": 1733405422952,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14615.7734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20744.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38072.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 101.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27985.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32904.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11491.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 247.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10712.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13069.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 875.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.01953125,
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
          "id": "3c7fb3fcfe485d397ec6fb65f25596569fc584d8",
          "message": "Simplify get_object by waiting for response headers (#1171)\n\n`S3CrtClient::get_object` was originally implemented so that it would\ncomplete immediately and return a `GetObjectRequest` implementation\n(extending `Stream`) to retrieve body parts. Any error from the S3\nrequest would be returned through the stream.\nWe recently added additional methods (`get_object_metadata` in #1065 and\n`get_object_checksum` in #1123) to the response that rely on the headers\nreturned by the (first) `GetObject` request. The new methods required an\nasync signature and a complicated implementation in order to account for\nfailures and they still do not correctly report accurate error\ninformation in some cases.\nWith this change, we modify `get_object` to await for response headers\nbefore returning either an error or a `GetObjectResponse` (note the name\nchange) implementation. The ergonomics of `get_object` are improved:\n* `await`ing the initial call can already return some errors (e.g.\nbucket/key not found),\n* `get_object_checksum` and `get_object_metadata` are now sync\nfunctions.\n\n### Does this change impact existing behavior?\n\nYes, `get_object` behavior is different, `get_object_checksum` and\n`get_object_metadata` signatures have changed, and `GetObjectRequest`\nwas renamed to `GetObjectResponse`.\n\n### Does this change need a changelog entry?\n\nYes, it requires a breaking change entry for `mountpoint-s3-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-05T20:48:17Z",
          "tree_id": "616cd7bda6e7117129f22aebaa3dc5aace410008",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3c7fb3fcfe485d397ec6fb65f25596569fc584d8"
        },
        "date": 1733439808604,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15417.10546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21982.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35426.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33303.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38527.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11195.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11248.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12327.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 781.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.03515625,
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
          "id": "522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db",
          "message": "Optimise shared cache for single read use cases (#1163)\n\nUse an optional BytesMut to avoid copying data on the first write. \n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2024-12-06T10:43:24Z",
          "tree_id": "5d9ba45ba6cee2c55f8b4dcce95deeb0283cc7bc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/522fc9aa3c8ef68e52eb7bb58ef72b3c8d23d4db"
        },
        "date": 1733489805580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11880.1953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23048.4375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37720.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36612.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35934.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9138.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11546.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11038.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 924.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 612.828125,
            "unit": "MiB"
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
        "date": 1733511710696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15607.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24083.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36964.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 317.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34049.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33836.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10939.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13212.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11829.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 845.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.7734375,
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
          "id": "5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a",
          "message": "Update cargo dependencies and allow-list Unicode-3.0 license (#1193)\n\nRun `cargo update`. In particular, update crate `idna` from version\n`0.5.0` to `1.0.3`, in order to address\n[RUSTSEC-2024-0421](https://rustsec.org/advisories/RUSTSEC-2024-0421).\n\nAlso add \"Unicode-3.0\" to the list of allowed licenses in deny.toml.\nRequired by the new dependency:\n```\nicu_normalizer v1.5.0\n└── idna_adapter v1.2.0\n    └── idna v1.0.3\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T10:21:41Z",
          "tree_id": "5a514b796dae0cf82b75b70d8c6f9dbf2601f511",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5112fcbcd52780390cfa5f7f3f4166ffa4b2a67a"
        },
        "date": 1733834426123,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12079.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18471.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31199.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 300.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29140.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31551.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 406.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10401.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9502.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11342.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 927.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.8828125,
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
          "id": "688ec178f5394a174ae0460e7a521a23b4862cc5",
          "message": "Update CRT submodules to latest releases (#1195)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* Support full object checksum and crc64nvme.\n([awslabs/aws-c-s3#468](https://github.com/awslabs/aws-c-s3/pull/468))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common be8ed873..fadfef49:\n  > Support relative paths when prebuilding dependencies with CMake (#1174)\n  > Switch CI to use roles (#1173)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 45894ed3..337155f6:\n  > Support full object checksum (#468)\n  > [meta request]: assign shutdown_callback inside critical region (#470)\n  > Switch CI to use roles (#463)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T14:34:31Z",
          "tree_id": "a76eb1fedb360c0d9396cc8f471c8043976b20b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/688ec178f5394a174ae0460e7a521a23b4862cc5"
        },
        "date": 1733849452622,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12323.328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23026.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34601.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36265.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37430.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11502.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11792.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11530.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 893.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.7734375,
            "unit": "MiB"
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
        "date": 1733858395671,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14678.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21785.40625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35920.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 375.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34786.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32846.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12528.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10976.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12343.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 269.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 792.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 552.51953125,
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
          "id": "9d1196d169a67001b1a13ddc109eeddb9f5fb11f",
          "message": "Upgrade crates to latest versions (#1196)\n\nUpgrade all dependencies to the latest versions. Fix minor breaking\nchange in the API for `sysinfo`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2024-12-10T17:13:22Z",
          "tree_id": "f5271c3d8242c08adcc4e19829b8067eed11dc36",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/9d1196d169a67001b1a13ddc109eeddb9f5fb11f"
        },
        "date": 1733858709012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14776.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23809.546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34320.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37146.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39751.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 410.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11664.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13819.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11379.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 900.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 534.5078125,
            "unit": "MiB"
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
        "date": 1733919180234,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13987.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20371.60546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32234.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33367.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32766.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8733.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9820.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11497.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 793.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.8671875,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}