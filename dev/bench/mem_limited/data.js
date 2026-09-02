window.BENCHMARK_DATA = {
  "lastUpdate": 1788347282065,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark (S3 Standard, Memory-Limited)": [
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
          "id": "56336d142d7181a349cea1487c589a7b43d30e46",
          "message": "Add --ca-bundle and AWS_CA_BUNDLE support (#1834)\n\n### Description\n\nIssue: https://github.com/awslabs/mountpoint-s3/issues/1480\n\nAdd `--ca-bundle` and `AWS_CA_BUNDLE` support (similarly to AWS CLI) as\nper\nhttps://docs.aws.amazon.com/sdkref/latest/guide/feature-gen-config.html\n\n- Allows customers to specify the path to a custom certificate bundle (a\nfile with a .pem extension) to use when establishing SSL/TLS\nconnections.\n- This overrides OS default trust store.\n- Used when constructing S3 Client and Credential Client\n- Same precedence as in AWS CLI (flag > env variable)\n- No support for `ca_bundle` from AWS config file (maybe added later as\nnon-breaking change if there is usecase)\n\n### Does this change impact existing behavior?\n\nNo - new opt-in feature/flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - done.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-07-15T17:11:51Z",
          "tree_id": "0179cbbd323210fe6cc67efa477c1dc5c456b239",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56336d142d7181a349cea1487c589a7b43d30e46"
        },
        "date": 1784148789171,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3951.7136718750003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2098.6275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1219.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.2060546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 38.74169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.159375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 37.3470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.68662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 9.6837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.6833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.08173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 807.30263671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 214.5748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 772.67216796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 208.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 381.7900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 52.30546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 385.3921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 347.29755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 51.43310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1970.421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1041.59501953125,
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
          "id": "b743461cd1df847a0dcf7438412aee0ed37133bc",
          "message": "Update aws-lc to 5.1.0 and invoke cleanup on exit (#1850)\n\nUpdate the aws-lc CRT submodule to the latest release: `aws-lc v5.1.0`.\n\nAlso added cleanup for the CRT libraries to `mountpoint-s3-crt` in order\nto address an issue resulting in the address sanitizer test to fail:\n- Register a single atexit handler (once, from every\n`aws_*_library_init`) that runs the full `aws_*_library_clean_up`\nsequence top-down. Each cleanup is self-guarded and idempotent, so it is\nsafe regardless of which libraries were initialized, and joins all\nmanaged threads before aws-lc tears down.\n- The init for CRT libraries were not originally paired with a cleanup.\nHowever, cleanups join the CRT's managed worker threads, and without\nthem a worker thread could still be running a TLS handshake when the\nprocess runs its C runtime destructors, hitting a race condition. With\nthe aws-lc 5.1.0 upgrade, that race hits an abort() call (rand.c:575) in\naws-lc's FIPS RNG teardown, taking down `make test-asan` at exit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc d50ded59..6283365b:\n  > Prepare v5.1.0 release (#3321)\n  > Concurrency is not generally supported for EVP_AEAD_CTX_foo functions (#3318)\n  > Add 'version -fips' to surface FIPS module version in openssl tool (#3315)\n  > Bump AWSLC_FIPS_VERSION to 5 for next FIPS branch (#3316)\n  > ci: opt in to allow-unsafe-pr-checkout for gated pull_request_target jobs (#3313)\n  > ML-DSA: import and enable aarch64 assembly backend from mldsa-native (#3219)\n  > Define OPENSSL_INIT_NO_ATEXIT as a no-op (#3311)\n  > Bump the github-actions group across 1 directory with 4 updates (#3307)\n  > Move TLS 1.3 KDF into the FIPS module and wire up ACVP (#3247)\n  > Add WASIp2 build and test support (#3172)\n  > Make OPENSSL_memcmp constant time (#3183)\n  > Fix SSL_CTX_add_extra_chain_cert slot routing for chains added before the leaf (#3296)\n  > Stabilize libgit2 integration test (#3300)\n  > CI: Switch integration tests to nightly and raise alarm on failures (#3287)\n  > Update MySQL CI integration to mysql-cluster-9.7.1 (#3302)\n  > Support SSL_OP_IGNORE_UNEXPECTED_EOF option (#3294)\n  > Fix PostgreSQL integration: match upstream revoked-cert alert regex (#3299)\n  > ci: fix Windows CI breakage from VS2026 (MSVC 14.51) image bump (#3298)\n  > ML-DSA: import and enable x86_64 assembly backend from mldsa-native (#3195)\n  > Bump aws-cdk-lib from 2.251.0 to 2.255.0 in /tests/ci in the pip-ci group (#3283)\n  > Bump the cargo-ci-lambda group in /tests/ci/lambda with 4 updates (#3284)\n  > Bump cross-platform-actions/action from 0.32.0 to 1.2.0 in the github-actions group (#3285)\n  > ci: move BSD actions to scheduled (#3276)\n  > Add SSL_CTX_set_security_callback and related APIs for OpenSSL compat… (#3275)\n  > Quote LIBCRYPTO_PATH for dynamic load test (#3259)\n  > Make FIPS compiler wrapper unconditional (#3269)\n  > ML-DSA support as a TLS 1.3 signature scheme (#3251)\n  > Add inline documentation for API contracts (#3267)\n  > use /map: linker flag to avoid running a binary to capture the hash (#3133)\n  > Skip MariaDB socket conflict test unable to run as root (#3274)\n  > Make rustfmt optional for Rust bindings generation (#3270)\n  > Fix python 3.13 patch (#3271)\n  > BoringSSL: Harden nc_email name constraint checking (#3266)\n  > Gate Linux specific code to fix compilation on AIX (#3265)\n  > Fix manylinux1 build: O_CLOEXEC fallback in getauxval shim (#3268)\n  > Prefer CRLs with specific IDP match (#3264)\n  > Add `getauxval` availability detection with `/proc/self/auxv` fallback for uclibc targets (#3250)\n  > Enable Windows 7 compat path on MinGW builds (#3239)\n  > Drop obsolete test_pkey_rsa.rb hunk from Ruby 3.4 patch (#3260)\n  > Reject undersized buffer in pkey_dsa_sign (#3112)\n  > tool-openssl/s_client: default SNI to -connect host to match OpenSSL (#3209)\n  > Bump time from 0.3.36 to 0.3.47 in /tests/ci/lambda (#3248)\n  > Bump the github-actions group with 2 updates (#3258)\n  > Decouple the FIPS version number from the AWS-LC version number (#3211)\n  > Document new versioning scheme and bump mainline to v5.0.0 (#3212)\n  > Fix correctness findings from penpal testing (#3235)\n  > Add SHRT_MAX caps to bound iteration and input lengths (#3240)\n  > Tighten OCSP_parse_url URL parsing (#3238)\n  > Log versioning and library names druing cmake build step (#3254)\n  > Add new review workflow (#3230)\n  > ci: declare contents: read on zig compiler workflow (#3249)\n  > Release cipher_data on error path too for EVP_CTRL_INIT and EVP_CTRL_COPY (#3243)\n  > Free existing responderId union arm in OCSP_RESPID setters (#3234)\n  > Check parameters before comparing pqdsa public keys (#3229)\n  > Reject negative pass_len in PEM_ASN1_write_bio (#3228)\n  > Include trailing NUL in BIO_ADDR_rawaddress AF_UNIX length (#3236)\n  > Ensure no trailing data for PKCS8 EVP_parse_private_key (#3242)\n  > Free existing union arm by current type in PKCS7_set_type (#3231)\n  > Reject len < -1 in ASN1_mbstring_ncopy (#3232)\n  > Harden PKCS7 and OCSP error handling (#3237)\n  > Fix wherelen handling in BIO_ADDR_rawmake AF_UNIX path (#3233)\n  > Fix: Apply COHABITANT_HEADERS logic to location of tool binaries (#3116)\n  > Add OPENSSL_cleanse to zero stack secrets before return (#3227)\n  > BoringSSL: Test key import in EVPTest a bit more extensively (#3058)\n  > Prepare 1.73.0 (#3226)\n  > Fix shared library install on Windows: place DLLs in bin directory (#3225)\n  > Fix thread-local DRBG cleanup deadlock at process exit (#3220)\n  > Reject URIs containing '@' in name constraint checking (#3202)\n  > ci: pin zig x86_64-windows job to windows-2022 (#3222)\n  > Support non-empty context strings in ML-DSA EVP sign/verify (#3135)\n  > Bump the pip-ci group across 1 directory with 4 updates (#3216)\n  > Bump the cargo-ci-lambda group across 1 directory with 10 updates (#3217)\n  > Bump the github-actions group with 17 updates (#3218)\n  > Bump golang.org/x/crypto from 0.31.0 to 0.50.0 in the gomod-root group (#3214)\n  > Fixes several issues across X509 and EVP parsing/comparison code (#3213)\n  > ci: add Dependabot configuration (#3191)\n  > ci: harden zig wrappers against libc++ ABI drift and opaque failures (#3190)\n  > Ensure correct bio memory buffer type is assigned (#3204)\n  > Rework order for initialisation of digest object. If memory allocation fails, object is now not in a corrupted state. (#3205)\n  > Implement EVP_PKEY_get_private_seed to return seed representation of private key (#3200)\n  > Align X.509 Limbo local patch with upstream changes (#3206)\n  > Dilently drop handshake fragments at the far edge of the seq window (#3203)\n  > Add `EVP_PKEY_kem_get_type` public accessor for KEM key NID (#3179)\n  > Scope _STL_EXTRA_DISABLED_WARNINGS to C++ to fix Ninja + clang-cl builds (#3199)\n  > Fix FIPS build under MSAN by broadening integrity-test guards (#3167)\n  > tool/s_client: fix -verify depth and missing CA store (#3189)\n  > Handle id-pkix-ocsp-nocheck in OCSP responder verification (#3169)\n  > Add WaitForFileAccessible to fix intermittent Windows test failures (#3178)\n  > Handle allocation failures in add_string's section strdup and stack push (#3187)\n  > Fix grpc CI (#3196)\n  > Silence two stringop-overflow false-positives (#3201)\n  > Prepare v1.72.1 (#3192)\n  > Update NID_rsaesOaep test certificate (#3194)\n  > ci: pin cryptography to source builds in pyopenssl integration (#3193)\n  > Bump MySQL version to 9.7.0 (#3185)\n  > Map rsaesOaep SPKI to RSA in parse_key_type (#3181)\n  > docs: update platform support tables (#3176)\n  > ci: add gh-pages workflow for API documentation (#3177)\n  > BoringSSL: Don't support parameterless DSA keys in SPKIs AND Set an EVP_PKEY's algorithm and data together (#3057)\n  > Mitigate intermittent SSL runner timeouts on FreeBSD CI (#3171)\n  > Fix intermittent `ImplDispatchTest.AEAD_AES_GCM` failure in gcc-4.8 CI (#3170)\n  > Add CI for Zig compiler support (#3142)\n  > Improve test portability for OPENSSL_NO_SOCK, OPENSSL_THREADS, and OPENSSL_NO_TTY (#3146)\n  > Generalize SSL test runner idle-timeout retry to all tests (#3163)\n  > Bump Go version in gcc-4.8 Docker image from 1.18.10 to 1.22.12 (#3168)\n  > ssl: invalidate X509 leaf/chain caches in cert_set_chain_and_key and … (#3117)\n  > Fix intermittent CA test failure on Windows CI when TEMP is unset (#3161)\n  > Bump minimum Go version to 1.20 and update Go dependencies (#3159)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-16T13:58:48Z",
          "tree_id": "f25b78c5177d59cd61f86cefa5ef7f2038b0712a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b743461cd1df847a0dcf7438412aee0ed37133bc"
        },
        "date": 1784218911041,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3897.79228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2118.57314453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1217.1837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.875390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.3515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.15576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.020703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.7044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.84228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.74130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 805.7228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 222.9732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 789.847265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 217.6666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 521.34482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.25478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 471.3267578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 468.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.51025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1719.42509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.7255859375,
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
          "id": "625ef017a48e3f3db01c817b7074d8d5f2fa12b3",
          "message": "Add integration tests for STS web identity credential source (#1889)\n\nAdd new integration tests for STS web identity credential source, both\nconfigured directly and through a source profile. Both tests are gated\nunder a new `web_identity_tests` crate feature.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdding changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-17T11:02:53Z",
          "tree_id": "3057fd70dac0da4e3c143ca021e92f4774b7cdc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625ef017a48e3f3db01c817b7074d8d5f2fa12b3"
        },
        "date": 1784294518657,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3960.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2153.2326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1231.425,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.35859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.79541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.051953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.14560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.10517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0486328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.85244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 846.13046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.3982421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 820.93955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.74111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 567.6322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.24072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 493.1546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 533.4064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.10927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1499.130078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1006.626171875,
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
          "id": "226d1d84c239f14620336dcbc2ce8ff3a543f995",
          "message": "Update changelogs to prepare v1.23.0 release (#1890)\n\nUpdate changelogs for all crates.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T15:26:39Z",
          "tree_id": "2e4c043996dec3b485b8018ce802c68dc021be13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/226d1d84c239f14620336dcbc2ce8ff3a543f995"
        },
        "date": 1784569746076,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3994.8575195312496,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2108.22021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1244.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 6.93642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.23076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.73076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.805078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.96552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0130859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.36611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 874.6869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.56826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 828.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 237.17587890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 464.8990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 56.12939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 476.90986328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 386.369140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.81064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1511.58212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.43564453125,
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
          "id": "8338038714c728653f464cb94d09793b20ba87a7",
          "message": "Add SHA pins for GitHub Actions dependencies (#1862)\n\nAdd SHA refs for all GitHub Action dependencies, pinning them to that\nspecific commit. This mitigates the risk of the dependency being updated\nwithout us knowing, acting a bit like a lock file. This change\nimplements the best practice for GHA dependencies.\n\nDependabot supports updating SHA pins, and thus will open PRs when\nrequired on the configured cadence.\n\n### Does this change impact existing behavior?\n\nCI only. It does not change version, only pins to the current version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no customer facing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2026-07-20T17:15:40Z",
          "tree_id": "28e45eb2570f31e169f221d04d0abe0e26132242",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8338038714c728653f464cb94d09793b20ba87a7"
        },
        "date": 1784576210755,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3929.155078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2140.31025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1254.99755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.36103515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.95673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 39.17392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.67392578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.8140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.79638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.0181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 760.08349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 223.38466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 743.70068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 226.09794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 474.291015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.38310546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 478.56474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 418.90048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 54.6564453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1912.3724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1160.845703125,
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
          "id": "268bd54507ff6bc26e22590ac02bcaadf79f8386",
          "message": "Run cargo update (#1891)\n\nUpdate yanked dependency. Fixes:\n\n```\nwarning: package `spin v0.10.0` in Cargo.lock is yanked in registry `crates-io`, consider updating to a version that is not yanked\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T19:00:26Z",
          "tree_id": "431b0c25ea53840dcdb21543c3085abbca11a6ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/268bd54507ff6bc26e22590ac02bcaadf79f8386"
        },
        "date": 1784582790160,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3942.51640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2113.08388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1221.37001953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.5828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.54658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.28564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.5134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.8548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 825.2068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.6650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 772.70322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.4376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 507.08662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.85400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 454.40810546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 455.98515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.37666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1463.3201171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1005.451171875,
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
          "id": "4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b",
          "message": "Include aws-ls/generated-src in crt-sys crate (#1892)\n\nFix build issue on macOS when running:\n\n```\ncargo package -p mountpoint-s3-crt-sys  \n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-21T07:06:45Z",
          "tree_id": "c9a67b149210b63f2f89627133fe54271c593b31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b"
        },
        "date": 1784626005470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3897.6334960937497,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2128.85693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1247.69384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.87197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.94267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.02421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.94169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.83671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 876.5375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 235.3251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 830.45087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.2208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 531.8130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.5388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 477.66552734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 499.044140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1661.6009765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1051.00234375,
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
          "id": "a8af889f07c38d387d555a25eb92f0d88048d91d",
          "message": "Remove unmaintained `smallstr` dependency from `mountpoint-s3-crt` (#1906)\n\nRemoves the `smallstr` dependency, which is flagged unmaintained by\n`RUSTSEC-2026-0215` and fails the `cargo deny` Licenses check ([example\nrun](https://github.com/awslabs/mountpoint-s3/actions/runs/30344994989/job/90229022750?pr=1904#step:4:1754)).\nIts only use was building the `awscrt::<subject>` log target string; it\nis replaced with a small internal `LogTarget` that keeps the same\nsmall-string optimization (inline on the stack, spilling to the heap\nonly if the target exceeds 64 bytes).\n\n### Does this change impact existing behavior?\n\nNo. The log target string is identical, only the backing buffer changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-07-29T11:08:49Z",
          "tree_id": "d13e5aba3fcbebacd46de511e906049f675bd878",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a8af889f07c38d387d555a25eb92f0d88048d91d"
        },
        "date": 1785330728671,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3919.873828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2096.08203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1214.9951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.189453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.4455078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.47275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.510546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.98408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.95908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 837.0447265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 221.85517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 844.3875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 227.01650390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 560.83818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.1091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 537.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 483.5955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.44912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1505.363671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1097.499609375,
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
          "id": "8936b54f84e58f3038c1b52e0fa32f0a8bedfb69",
          "message": "Fix Python lint errors in benchmark and packaging scripts (#1905)\n\nCI runs uvx ruff check . which picks up the latest ruff version. Ruff\n0.16.0 expanded default rules from 59 to 413, which flagged existing\ncode in `benchmark/ `and `package/`.\n  \nCommit 1: Ran` ruff check --fix `and `ruff format` - these are all\nmechanical, tool-applied changes (import sorting, type annotation\nmodernization, etc.) with no behavioral impact.\n  \nCommit 2: Added `# noqa` suppressions for remaining rules where fixing\nthem would change code behavior, which is not worth the risk for a\nlint-only PR. Also removed an unused import and fixed file permissions.\n  \nTested uvx ruff check locally and passes clean in both directories.\n\n ### Does this change impact existing behavior?\n\nNo - commit 1 is tool-applied safe fixes, commit 2 only adds lint\nsuppressions.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - CI fix only, no user-facing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-08-01T16:12:49Z",
          "tree_id": "4b894ebd602f81fdd688fcb2c9b87688fe5cc9b4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8936b54f84e58f3038c1b52e0fa32f0a8bedfb69"
        },
        "date": 1785609193874,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3950.54482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2150.65244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1279.13798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.91357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.7755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.8634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.9908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.9771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.41123046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.670703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1045.7669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.46484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1029.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.98818359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 664.3849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.46572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 624.5220703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 606.41826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.85439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1823.87421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.91982421875,
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
          "id": "b4be37f9467d7825769d43b9006a9fb02d90d7b0",
          "message": "Rename CI runner label AL2 arm to AL2023 arm (#1910)\n\nThe `AL2 arm` matrix label in `integration.yml` points at a self-hosted\nrunner pool that runs Amazon Linux 2023, not AL2 - CI logs report\n`Amazon Linux release 2023.12` and every installed package carries an\n`.amzn2023` suffix. Renamed the label to `AL2023 arm` so job names match\nthe actual environment.\n\nRun:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/30832697501/job/91750309505\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>",
          "timestamp": "2026-08-04T09:30:04Z",
          "tree_id": "4acbdb229335836a4ddbc03135c2f4c6c3c699e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b4be37f9467d7825769d43b9006a9fb02d90d7b0"
        },
        "date": 1785844244419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3971.6841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2130.0509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1309.60419921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.98583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.0357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.95146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.3150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.395703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.12626953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1014.934765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.034375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 988.6455078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.0228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 599.84853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.0330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 594.7857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 511.21796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.05302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1561.1306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1154.79501953125,
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
          "id": "5006f4e98aab4e5f09f5df030233c5b37cf5f5ed",
          "message": "Upgrade actions/checkout from 6.0.3 to 7.0.1 (#1914)\n\nReplaces #1901: by default, `actions/checkout` v7 disallows checking out\nfork PR code from `pull_request_target` workflows, which is a feature we\nrely on in our integration, bench, and stress workflows. This change\nopts in by setting `allow-unsafe-pr-checkout`, which is safe because\nevery affected job sits behind `needs: approval`, a protected\nenvironment requiring maintainer review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-10T12:30:40Z",
          "tree_id": "65ff9ef0c12afa05763a772569a7877b9562f9ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5006f4e98aab4e5f09f5df030233c5b37cf5f5ed"
        },
        "date": 1786373434611,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3912.3213867187496,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2150.111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1276.54013671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.76513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.51474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.9576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.72158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.2650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.24189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1003.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 242.44794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 972.11142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 232.26357421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 555.59482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.36162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 589.5474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 496.32685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.366015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1434.6400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 949.365234375,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "c6bbe8d673e6eb42491cd77aff03741252f3ae12",
          "message": "Bump libgit2-sys to 0.18.7+1.9.6 (#1916)\n\n### Description\n\nRan `cargo update -p libgit2-sys`.\n\nNoted getrandom went from 0.4.3 to 0.3.4 for tempfile dependency whilst\nI ran it, but shouldn't be a problem as getrandom 0.3.4 is used by\nrand_core anyways.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - patch version for affected crates. \n\n\n\n<details>\n<summary>See below for `cargo tree --invert -p libgit2-sys` (click to\nexpand)</summary>\n\n```bash\ncargo tree --invert -p libgit2-sys\n\nlibgit2-sys v0.18.7+1.9.6\n└── git2 v0.21.0\n    └── built v0.8.1\n        [build-dependencies]\n        ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n        └── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client)\n            ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n            └── mountpoint-s3-fs v0.10.1 (/xxx/mountpoint-s3/mountpoint-s3-fs)\n                └── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n                [dev-dependencies]\n                └── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client) (*)\n            [dev-dependencies]\n            ├── mountpoint-s3 v1.23.1 (/xxx/mountpoint-s3/mountpoint-s3)\n            ├── mountpoint-s3-client v0.21.1 (/xxx/mountpoint-s3/mountpoint-s3-client) (*)\n            └── mountpoint-s3-fs v0.10.1 (/xxx/mountpoint-s3/mountpoint-s3-fs) (*)\n```\n\n</details>\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-08-11T14:21:05Z",
          "tree_id": "44b9485e7c3f3f5eef667f7c44807d5e57e90dc3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bbe8d673e6eb42491cd77aff03741252f3ae12"
        },
        "date": 1786467359209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4037.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2120.1451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1254.987109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.14619140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.83251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.09150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.13154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.140234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.016796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.08232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 988.272265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.98935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 987.779296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 228.6033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 526.2453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.3888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 584.20166015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 444.18349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.92578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1539.04931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1121.71875,
            "unit": "MiB/s"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jetong@amazon.co.uk",
            "name": "Jensen Tong",
            "username": "jet-tong"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "cfa381260e524d8ab5893c74a7d24df80c44f0e1",
          "message": "fix: update instance throughput table (#1895)\n\n### What changed and why?\n\nRe-generates the stale (2025-04-17) EC2 instance throughput table which\nmaps instance types to network throughput, for auto-configuring\nMountpoint target throughput through\n[`autoconfigure::get_maximum_network_throughput`](https://github.com/awslabs/mountpoint-s3/blob/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b/mountpoint-s3-fs/examples/mount_from_config.rs#L220).\n\nChanges:\n- Regenerated the table via `network_performance.sh`\n- For instances no longer offered: removed entries after checking no\nregions offer them, and removed dl1.24xlarge test case\n- Corrected `trn2.48xlarge` override throughput (`32000` → `3200`); also\nupdated test case for it.\n- Fixed multi-NIC overrides silently failing on bash <4.3 (e.g. `4x 100`\n→ `4100`) and added bash version guard.\n- Multi-NIC instances now emit `None` + a warning instead of a wrong\nnumber, if not in THROUGHPUT_OVERRIDE table\n\n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. (Just data refresh and script bug fixes).\n\n### Possible follow-ups\n\n- A GitHub Actions workflow to regenerate this table more often (at\nleast once a year)?\n- Use multiplication instead of override table for multi-NIC entries?\n- Query more regions than the 3 in the script?\n\n---\n\n### Additional Context / Testing\n\n#### Testing\n\nRandomly selected instance types and used aws ec2\ndescribe-isntance-types to check for accuracy, and also used\nhttps://instances.vantage.sh/ to quick check accuracy for a small number\nof instance types.\n\n#### Some instance types are no longer offered\n\n12 instances are not offered anymore - verified gone in all regions (not\njust the 3 we query): `dl1.24xlarge`, `f1.2xlarge`, `f1.4xlarge`,\n`f1.16xlarge`, `i3.metal`, `p3.2xlarge`, `p3.8xlarge`, `p3.16xlarge`,\n`u-9tb1.112xlarge`, `u-12tb1.112xlarge`, `u-18tb1.112xlarge`,\n`u-24tb1.112xlarge`.\n\n<details>\n<summary>Verify all instances gone in all regions (click to\nexpand)</summary>\n\n```bash\nfor r in $(aws ec2 describe-regions --region us-east-1 --query \"Regions[].RegionName\" --output text); do\n  aws ec2 describe-instance-type-offerings --region \"$r\" \\\n    --filters \"Name=instance-type,Values=dl1.24xlarge,f1.2xlarge,f1.4xlarge,f1.16xlarge,i3.metal,p3.2xlarge,p3.8xlarge,p3.16xlarge,u-9tb1.112xlarge,u-12tb1.112xlarge,u-18tb1.112xlarge,u-24tb1.112xlarge\" \\\n    --query \"InstanceTypeOfferings[].[InstanceType]\" --output text | sed \"s/^/$r /\"\ndone\n# No output\n```\n</details>\n\n\n\n#### [RESOLVED] g7.8xlarge / g7.4xlarge network performance number is\nunstable\n\n> RESOLVED - they updated both g7.4xlarge and g7.8xlarge to \"Up to 100\nGigabit\" and \"100 Gigabit\" respectively, so I've updated the table\nagain. They seemed to have changed during my commits / tests.\n\n<details>\n<summary>Check those numbers are unstable (click to expand)</summary>\n\n```bash\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.8xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output: (80 appears more usually)\n1 100 Gigabit\n9 80 Gigabit\n\nfor i in $(seq 1 10); do\n  aws ec2 describe-instance-types --region us-east-1 --instance-types g7.4xlarge \\\n    --query \"InstanceTypes[0].NetworkInfo.NetworkPerformance\" --output text\ndone | sort | uniq -c\n\n# output:\n9 60 Gigabit\n1 Up to 100 Gigabit\n```\n\n</details>\n\nAdditional ref:\n- [`ec2-instance-selector`\ncomparators.go](https://github.com/aws/amazon-ec2-instance-selector/blob/71c31e5a8949f35ea0683ca1c27db9de00ae4fc3/pkg/selector/comparators.go#L302)\nthroughput number parser\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Jensen Tong <jetong@amazon.com>\nCo-authored-by: Jensen Tong <jetong@amazon.com>",
          "timestamp": "2026-08-13T14:57:04Z",
          "tree_id": "dbc1c4296f21bc88fe8f6b02b51d117cf723ea90",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cfa381260e524d8ab5893c74a7d24df80c44f0e1"
        },
        "date": 1786641461635,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4020.9324218750003,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2109.165625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1298.3981445312502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.92138671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.57021484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8576171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.809375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 952.67333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 239.4548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 909.862890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.510546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 571.99013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.351953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 534.83740234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 529.89609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.4087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1653.07255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.13134765625,
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
          "id": "e2fd6e1d39ad74e49f0aa6b984d4786bb9560080",
          "message": "Bump h2 to 0.4.16 (#1932)\n\nBump h2 to 0.4.16 from 0.4.15 to address advisory (RUSTSEC-2026-0258)\nfrom cargo deny check.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-18T13:49:10Z",
          "tree_id": "149668986d645dec7ee80e4d8073a4badbae161b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e2fd6e1d39ad74e49f0aa6b984d4786bb9560080"
        },
        "date": 1787093827783,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3937.9524414062503,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2118.38740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1270.12109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.21513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.6744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.0591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.99775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.10810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.55205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.99873046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.35869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 962.78837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.3990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 960.11328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.209765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 523.07177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.39580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 553.83544921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 482.023046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.9947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1507.07265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1091.93896484375,
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
          "id": "58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c",
          "message": "Fix cgroup memory limit detection for inherited limits (#1933)\n\nmount-s3 doesn't detect `cgroup` memory limits set on parent slices. A\ncustomer has a 20GB limit on the parent, but mount-s3 doesn't see it, so\nit falls back to using the host's total RAM (200GB). It oversizes\nbuffers which hits the limit and stalls completely. We use\n`System::cgroup_limits()` which only checks `/sys/fs/cgroup` (root). In\ncgroup v2, when a parent has a memory limit, children inherit it but if\nyou only read the child's `memory.max` file, it shows \"max\" (meaning no\nlimit set at this level). The actual limit is on the parent. We need to\nwalk up the tree to find it.\n\n  Switched to `Process::cgroup_limits()`:\n  - Reads `/proc/self/cgroup` to find the process's actual cgroup\n  - Walks up ancestors checking each `memory.max`\n  - Returns the smallest limit found\n\n ### Testing\n\nAdded a CI test that creates a cgroup hierarchy with `memory.max` set on\na parent slice (1 GiB) and verifies the process detects the inherited\nlimit rather than the container's own limit (2 GiB).\nWithout fix (fails):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32240451777/job/96029623759\n\nWith fix (passes):\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32267673710/job/96116060108\n  \n### Does this change impact existing behavior?\n\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - fixes customer issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-08-20T10:05:57Z",
          "tree_id": "6e9010f1b7b4657d8b609dda086314348cbbfb09",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58f92de69d5b0ea844bde3bdc9c57ce9bc906f2c"
        },
        "date": 1787228858445,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 3919.4933593749997,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 2127.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.5923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.25810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.7984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.14384765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.92333984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.2513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.40908203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2408203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.031640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1022.8302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 241.27080078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 982.220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 242.205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 646.9244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 574.87509765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 583.9857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.558984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1623.1138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 941.5427734375,
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
          "id": "438bb9c0bf3eb4ce844b43807c7fd18140adbc05",
          "message": "Add `--memory-target` to manage memory usage (#1936)\n\nThis change adds `--memory-target <MiB>`, a target for Mountpoint's\ntotal memory\nusage that it manages read and write buffering to stay within. It is a\ntarget, not\na guaranteed limit. The default is 95% of available memory (the cgroup\nlimit where\none applies, otherwise total system memory), with a minimum of 512 MiB.\n- Mountpoint now caps how many files may be open for writing at once,\nsince each\nreserves a part-sized buffer; `open()` returns `ENOMEM` past the cap.\nThe cap and\n    the target are logged at startup.\n- `MemoryLimiter` is folded into `PagedPool`, so prefetch reads, disk\ncache blocks,\nand upload buffers share one budget and one priority-ordered allocation\nqueue.\n- Under memory pressure Mountpoint slows I/O: prefetch windows shrink,\nallocations\nqueue until memory is released, and speculatively prefetched data is\ndiscarded to\n    serve reads applications are waiting on.\n- New metrics for queue depth and wait time, cursor and seek window\nresets, and\nwrite handle rejections, plus panels in the sample CloudWatch dashboard.\n\nBenchmarks:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356468315\nStress tests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32356467756\n\n#### Included changes:\n1. [Buffer Pruning: Add Per-Handle Active Read Tracking\n(#1822)](https://github.com/awslabs/mountpoint-s3/pull/1822)\n2. [Reconcile memory limiter reservations with pool allocations\n(#1816)](https://github.com/awslabs/mountpoint-s3/pull/1816)\n3. [Extract Cursor and track active reads per cursor\n(#1825)](https://github.com/awslabs/mountpoint-s3/pull/1825)\n4. [Refactor MemoryLimiter into PagedPool\n(#1826)](https://github.com/awslabs/mountpoint-s3/pull/1826)\n5. [Introduce CursorState to consolidate per-cursor memory tracking\n(#1832)](https://github.com/awslabs/mountpoint-s3/pull/1832)\n6. [Introduce a builder to create PagedPool instances\n(#1833)](https://github.com/awslabs/mountpoint-s3/pull/1833)\n7. [Add concurrent write-handle limit returning ENOMEM on open()\n(#1831)](https://github.com/awslabs/mountpoint-s3/pull/1831)\n8. [Add priority-ordered allocation queue\n(#1836)](https://github.com/awslabs/mountpoint-s3/pull/1836)\n9. [Implement cursor reset mechanism\n(#1841)](https://github.com/awslabs/mountpoint-s3/pull/1841)\n10. [Gate pool allocations through limiter\n(#1840)](https://github.com/awslabs/mountpoint-s3/pull/1840)\n11. [Gate disk cache buffer allocation through the allocation queue\n(#1843)](https://github.com/awslabs/mountpoint-s3/pull/1843)\n12. [Add basic buffer pruner\n(#1829)](https://github.com/awslabs/mountpoint-s3/pull/1829)\n13. [Gate incremental upload buffers through the allocation queue\n(#1839)](https://github.com/awslabs/mountpoint-s3/pull/1839)\n14. [Limit memory allocations instead of buffer acquisitions\n(#1844)](https://github.com/awslabs/mountpoint-s3/pull/1844)\n15. [stress: Add held_writes_vs_reads scenario\n(#1848)](https://github.com/awslabs/mountpoint-s3/pull/1848)\n16. [Gate MPU buffer allocation via get_buffer_async\n(#1846)](https://github.com/awslabs/mountpoint-s3/pull/1846)\n17. [Scale stress HDR bounds per metric unit\n(#1853)](https://github.com/awslabs/mountpoint-s3/pull/1853)\n18. [Add `pool.allocated_bytes` and improve `pool.allocated_pages`\nmetrics (#1852)](https://github.com/awslabs/mountpoint-s3/pull/1852)\n19. [Add single_reader_budget_part and many_readers_budget_part stress\ntests (#1871)](https://github.com/awslabs/mountpoint-s3/pull/1871)\n20. [Fix false-positive stress test memory invariant failures\n(#1868)](https://github.com/awslabs/mountpoint-s3/pull/1868)\n21. [Avoid full sysinfo scan when sizing stress test object budget\n(#1873)](https://github.com/awslabs/mountpoint-s3/pull/1873)\n22. [Clamp read_part_size when exceeds memory budget\n(#1869)](https://github.com/awslabs/mountpoint-s3/pull/1869)\n23. [stress: Add setup phase and held budget scenarios\n(#1874)](https://github.com/awslabs/mountpoint-s3/pull/1874)\n24. [Rename to --memory-target and remove feature gate\n(#1875)](https://github.com/awslabs/mountpoint-s3/pull/1875)\n25. [Fix stress test hanging on cleanup when workers stuck\n(#1879)](https://github.com/awslabs/mountpoint-s3/pull/1879)\n26. [Reserve buffer budget so writers don't starve reads\n(#1880)](https://github.com/awslabs/mountpoint-s3/pull/1880)\n27. [Clear active cursor's backward seek window under memory starvation\n(#1885)](https://github.com/awslabs/mountpoint-s3/pull/1885)\n28. [stress: Add direct_io and misaligned part scenarios\n(#1894)](https://github.com/awslabs/mountpoint-s3/pull/1894)\n29. [fix: Use FUSE abort to prevent stress tests from hanging\nindefinitely\n(#1887)](https://github.com/awslabs/mountpoint-s3/pull/1887)\n30. [Add incremental upload stress test\n(#1908)](https://github.com/awslabs/mountpoint-s3/pull/1908)\n31. [Copy first part to heap in `do_read` to avoid pool deadlock\n(#1904)](https://github.com/awslabs/mountpoint-s3/pull/1904)\n32. [stress: Add cache_hit_vs_miss_held_budget scenario\n(#1907)](https://github.com/awslabs/mountpoint-s3/pull/1907)\n33. [stress: Add cache_miss_held_budget_misaligned_part scenario\n(#1911)](https://github.com/awslabs/mountpoint-s3/pull/1911)\n34. [Add allocation queue depth and wait-time metrics\n(#1912)](https://github.com/awslabs/mountpoint-s3/pull/1912)\n35. [Withhold the prunable reserve from paged allocations\n(#1915)](https://github.com/awslabs/mountpoint-s3/pull/1915)\n36. [Reduce NUM_WORKERS in many_readers_budget_part stress test\n(#1918)](https://github.com/awslabs/mountpoint-s3/pull/1918)\n37. [Avoid pool-buffer aliasing deadlock and stitch multi-part reads in\none buffer (#1913)](https://github.com/awslabs/mountpoint-s3/pull/1913)\n38. [stress: Register cache block pool candidate unconditionally\n(#1920)](https://github.com/awslabs/mountpoint-s3/pull/1920)\n39. [fix(stress): Add tolerance for pool memory metrics transient\novershoot (#1893)](https://github.com/awslabs/mountpoint-s3/pull/1893)\n40. [mem: Snapshot live cursors before iterating in the pruner\n(#1922)](https://github.com/awslabs/mountpoint-s3/pull/1922)\n41. [Add Experimental metrics and rename `seek_window_clears` to\n`seek_window_resets`\n(#1924)](https://github.com/awslabs/mountpoint-s3/pull/1924)\n42. [fix(stress): show metrics and invariants before stall panic\n(#1923)](https://github.com/awslabs/mountpoint-s3/pull/1923)\n43. [Use jemalloc as the global allocator\n(#1917)](https://github.com/awslabs/mountpoint-s3/pull/1917)\n44. [Skip buffer allocation for reservations cancelled while queued\n(#1928)](https://github.com/awslabs/mountpoint-s3/pull/1928)\n45. [Promote a queued buffer request whose read turned active mid-push\n(#1930)](https://github.com/awslabs/mountpoint-s3/pull/1930)\n46. [Add memory limiter metrics to sample CloudWatch dashboard\n(#1934)](https://github.com/awslabs/mountpoint-s3/pull/1934)\n\n### Does this change impact existing behavior?\n\nYes\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nSigned-off-by: dependabot[bot] <support@github.com>\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Kiron <kiron1@gmail.com>\nCo-authored-by: Priyankakarumuru1 <prikaru@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: kiron1 <kiron1@gmail.com>",
          "timestamp": "2026-08-20T16:46:51+01:00",
          "tree_id": "0a1fc26b050c1572a4eec389b2de11ecffce9f47",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/438bb9c0bf3eb4ce844b43807c7fd18140adbc05"
        },
        "date": 1787250246555,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1392.8169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1333.67236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1223.49462890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.49150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.4033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.250390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.06513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.86064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 848.8869140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.9681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 862.78203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 543.312109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.9064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 472.501953125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 483.4638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.21318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1258.78125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1020.458984375,
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
          "id": "b6aa90abbdad1774829455e16cc718af87d618f4",
          "message": "Drop stale prefetch cursor before creating a new one (#1937)\n\n**Problem:** When a read cannot be served by the current cursor,\n`try_read` created the replacement cursor and awaited its first read\nwhile the stale cursor was still held in `self.cursor`. The stale cursor\nkeeps its inflight GetObject, queued parts, backward seek window, and\npool reservation alive for that whole window, which is incorrect.\n\n**Solution**: Drop stale cursor first before creating new cursor and\nawaiting.\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-20T23:35:57+01:00",
          "tree_id": "da1519f04c90a9f70e94001b490a5b2571f36d48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b6aa90abbdad1774829455e16cc718af87d618f4"
        },
        "date": 1787272685064,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1373.1026367187499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1343.69970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1187.992578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.05029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.07451171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.1923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.15712890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1008.49345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 248.13642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 978.5130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 246.5876953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 631.80380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.2943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 563.23759765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 516.3015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 58.04228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1296.1775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 986.0017578125,
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
          "id": "58817cab2fc3020a422d8aa14049a86b296f4498",
          "message": "Document memory limiter configuration and troubleshooting (#1938)\n\nDocuments the memory limiter shipped in #1936: a new memory usage\nsection in `CONFIGURATION.md`, expanded `--memory-target` help text, two\ntroubleshooting sections, and `CHANGELOG.md` entries.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/)\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmag@amazon.co.uk>\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-08-22T12:14:21Z",
          "tree_id": "5ef2a8456744180117174ce74395fe1f82f66c62",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/58817cab2fc3020a422d8aa14049a86b296f4498"
        },
        "date": 1787409295088,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1561.96875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1521.8106445312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1331.80322265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.34091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.41884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.22412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.17578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.387890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.73662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.5310546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.1205078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1136.80029296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.04306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1108.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.899609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 672.451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.69208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 664.33232421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 626.62646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.14130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1446.33330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 930.36904296875,
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
          "id": "603f237e14aebc3f207ade422ad7eadaa5724198",
          "message": "Let incremental upload drain its own pipeline before queueing for memory (#1942)\n\n**Problem:** 2GB queue buffer for append starves readers too much as\nappend buffers are high priority in buffer allocation queue.\n\n**Solution:** Let incremental upload drain its own pipeline before\nqueuing for memory (if under memory pressure)\n\n**Verification**: Benchmark results:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/32668644417\n\nThroughput Benchmark (S3 Express One Zone, Incremental Upload,\nMemory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `sequential_read,sequential_write_four_threads` | `561.45126953125`\nMiB/s | `451.54580078124997` MiB/s | `0.80` |\n| `sequential_read_two_threads,sequential_write_two_threads` |\n`480.8755859375` MiB/s | `239.08544921875` MiB/s | `0.50` |\n| `sequential_read_four_threads,sequential_write` | `632.134375` MiB/s |\n`148.512890625` MiB/s | `0.23` |\n| `sequential_write_direct_io` | `111.26708984375` MiB/s |\n`111.18154296875` MiB/s | `1.00` |\n| `sequential_write` | `110.83740234375` MiB/s | `110.981640625` MiB/s |\n`1.00` |\n\nThroughput Benchmark - Peak Memory Usage (S3 Express One Zone,\nIncremental Upload, Memory-Limited)\n\n| Benchmark suite | Current: de2395b9dec639b44f00dcbb770b41a6d5471e42 |\nPrevious: 58817cab2fc3020a422d8aa14049a86b296f4498 | Ratio |\n|-|-|-|-|\n| `mix_1r4w` | `467.71484375` MiB | `452.03515625` MiB | `1.03` |\n| `mix_2r2w` | `446.484375` MiB | `436.89453125` MiB | `1.02` |\n| `mix_4r1w` | `444.09765625` MiB | `452.53125` MiB | `0.98` |\n| `seq_write_direct` | `406.1953125` MiB | `406.0859375` MiB | `1.00` |\n| `seq_write` | `406.1328125` MiB | `405.96484375` MiB | `1.00` |\n\n### Does this change impact existing behavior?\n\nN/A - part of memory limiter feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A - part of memory limiter feature\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T10:04:49+01:00",
          "tree_id": "e61031dfead2c18752f165c65dd278c5e2f99faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/603f237e14aebc3f207ade422ad7eadaa5724198"
        },
        "date": 1787569598772,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1513.5091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1477.2478515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1287.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.01357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 45.99951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.37314453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.16318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.704296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 995.55244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.9341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1032.86630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.93505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 624.351171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.26044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 629.961328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 565.8337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1362.67724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 982.3962890625,
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
          "id": "c247a881d80a01f204a0d85e504a3acfc1d3932c",
          "message": "Enforce `--read-only` in S3Filesystem (#1939)\n\nA read-only mount was enforced entirely by the kernel. That works when\nMountpoint performs the mount syscall, but not for a FUSE file\ndescriptor mount point, where the caller mounts and `--read-only` was\nrejected outright — discarding the only signal that could tell the file\nsystem the mount is read-only, since nothing about an fd exposes the\ncaller's `MS_RDONLY`.\n\nChanges:\n\n- Enforce read-only in the file system: `open` requesting write access,\n`setattr`, `mknod`, `mkdir`, `rmdir`, `unlink` and `rename` now fail\nwith the new `EROFS` instead of relying on the kernel to have refused\nthem. This matches what the kernel does on a read-only mount.\n- Accept `--read-only` with a FUSE file descriptor mount point\n- `MountpointConfig::create_fuse_session` validates that\n`FuseOptions::read_only` and `S3FilesystemConfig::read_only` agree\n- `cli.rs` sets `filesystem_config.read_only` from `--read-only`\n- Unrelated drive-by in a file this touches: Fix `gid` in\n`examples/mount_from_config.rs`\n\n### Does this change impact existing behavior?\n\nYes. `--read-only` with a FUSE file descriptor mount point was\npreviously rejected and now succeeds. Embedders using `MountpointConfig`\nmust set `read_only` on both `FuseOptions` and `S3FilesystemConfig`. No\nexisting mount-s3 invocation changes behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T15:43:08+01:00",
          "tree_id": "3e57e64972874316af1c1c8f7b43b0f51ecf4c6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c247a881d80a01f204a0d85e504a3acfc1d3932c"
        },
        "date": 1787589892757,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1400.5255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1382.5899414062499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1257.421484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.5568359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.28701171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.13896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.06787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.146875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.2830078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.26083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 969.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 243.30673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 936.87880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.6970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 582.70791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.34169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 440.957421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 452.06689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.02607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1363.88623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.29951171875,
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
          "id": "12fec077f06acf931309fdab7e7433d5fd2ae189",
          "message": "Update changelogs to prepare v1.24.0 release (#1946)\n\nUpdate changelogs for all crates to prepare the v1.24.0 release.\n\nCrate versions were already bumped in #1936\n\n### Does this change impact existing behavior?\n\nNo, documentation only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A — this is the changelog update for the release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-08-24T16:25:45+01:00",
          "tree_id": "d877c8eb6c7090b5b8a17f7914b913d85874e423",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/12fec077f06acf931309fdab7e7433d5fd2ae189"
        },
        "date": 1787593174609,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1414.9787109375002,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1373.780078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1232.2868164062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.168359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.96962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.0646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.2931640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0017578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.44345703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.11787109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 10.944921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 973.3517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.35439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 900.458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 241.40439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 622.765234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.25712890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 511.03349609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 479.07509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.48623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1386.29267578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1106.81025390625,
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
          "id": "cd04b1195dec5e12d1d706ed050f965dce7b3d30",
          "message": "Bump taiki-e/install-action from 2.82.8 to 2.86.2 (#1944)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.82.8 to 2.86.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.86.2</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.6.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.2.</p>\n</li>\n</ul>\n<h2>2.86.1</h2>\n<ul>\n<li>Fix an issue where <code>oxfmt</code> was　accidentally installed as\n<code>oxfmt-{target}{exe}</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1969\">#1969</a>)</li>\n</ul>\n<h2>2.86.0</h2>\n<ul>\n<li>Support <code>oxfmt</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1967\">#1967</a>,\nthanks <a\nhref=\"https://github.com/rami3l\"><code>@​rami3l</code></a>)</li>\n</ul>\n<h2>2.85.14</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.4.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.74.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.4.0.</p>\n</li>\n<li>\n<p>Update <code>mdbook-mermaid@latest</code> to 0.17.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-xwin@latest</code> to 0.23.1.</p>\n</li>\n</ul>\n<h2>2.85.13</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.3.3.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.5.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 1.113.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.4.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.0.</p>\n</li>\n</ul>\n<h2>2.85.12</h2>\n<ul>\n<li>\n<p>Update <code>zola@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.256.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.2.10.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.0.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.4.13.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.4.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b6b84cf49ebfe0176417bdce007c624f0db37f20\"><code>b6b84cf</code></a>\nRelease 2.86.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/822eb9a731103a6afbfa603ab7ff02185a124607\"><code>822eb9a</code></a>\nUpdate <code>uv@latest</code> to 0.12.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5c017c5438cad8fb6e9855caae3622dd889862ee\"><code>5c017c5</code></a>\nUpdate prek manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f3371b0ada03f6dd26a8a4d2572a504f06b34f82\"><code>f3371b0</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/be4eb9e9090a465654bd22c6ce1fbbbc51fc9bba\"><code>be4eb9e</code></a>\nUpdate <code>mise@latest</code> to 2026.8.6</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/235fcbc6389f3fe88ef2441ea5c2b2789683ab85\"><code>235fcbc</code></a>\nUpdate <code>cargo-tarpaulin@latest</code> to 0.37.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1d8477e1cae9b584346998400732cf21d82c0a66\"><code>1d8477e</code></a>\nUpdate cargo-llvm-cov manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/288e746965032cfcc232e09af2daf5f23c14d780\"><code>288e746</code></a>\nRelease 2.86.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6012fb0aebafca00cab83d4d647a7d93eae73c49\"><code>6012fb0</code></a>\nFix oxfmt installation</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b27e114ddbae5cc01df19a22cf70a124d5177567\"><code>b27e114</code></a>\nRelease 2.86.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.82.8...v2.86.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.82.8&new-version=2.86.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:23:46Z",
          "tree_id": "7471365736d5159a22067190645ba595d87ff102",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cd04b1195dec5e12d1d706ed050f965dce7b3d30"
        },
        "date": 1787670674242,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1465.44970703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1358.3262695312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1253.4274414062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.6498046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.57919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.77919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.23955078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.0505859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.33916015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 874.74384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 232.74296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 903.60673828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 234.83642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 558.7828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.04111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 575.9263671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 542.026953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.304296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1366.46044921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.25244140625,
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
          "id": "fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.1 to 6.2.3 (#1925)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.1 to 6.2.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.3</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2>v6.2.2</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.2...v6.1.3\">6.1.3</a>\n(2026-05-28)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>fix: allow kubelet token symlink in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1805\">#1805</a></li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.1...v6.1.2\">6.1.2</a>\n(2026-05-26)</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e6de054238d6b7531b4efff3b6587d9aade6a06c\"><code>e6de054</code></a>\nchore(main): release 6.2.3 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1878\">#1878</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/ab3b2ba025afb33b6856abfc1626992c70909302\"><code>ab3b2ba</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\"><code>fa8d6a5</code></a>\nfix: PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/42e118a65655a9bcd2929e1ab7c4588fdd3255d3\"><code>42e118a</code></a>\nchore(deps-dev): bump markdownlint-cli from 0.49.0 to 0.49.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1896\">#1896</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d86ddfcecc93d50cd1d1ca675d859403357c3d89\"><code>d86ddfc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/874aaac21e617e1544df3c6a9f043c9bc96adf70\"><code>874aaac</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1086.0 to\n3.1091.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1892\">#1892</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d4341b65accaa2ddbb952380d8ef12f95043d338\"><code>d4341b6</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fe51823c9714409fc32ade60b0bb4e79890beff1\"><code>fe51823</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1894\">#1894</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a8be382115e1ad5c77c560af842deddb56cd375c\"><code>a8be382</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1893\">#1893</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e000376c2c1f88ccef5f22a6bda02c24932d8ea5\"><code>e000376</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/254c19bd240aabef8777f48595e9d2d7b972184b...e6de054238d6b7531b4efff3b6587d9aade6a06c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:34:19Z",
          "tree_id": "df8438cb52defad4e663612968622b4741bf6349",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3"
        },
        "date": 1787673541982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1439.1700195312499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.90390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1266.68427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.25029296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.56748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.00361328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.85234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.16748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.5654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.01181640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.37626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 1004.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.53125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 989.11943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.64375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 500.278515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.96474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 545.3541015625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 491.751171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.80830078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1341.17861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 997.8017578125,
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
          "id": "57010820b1c189b6cf8253ce6ca6d4787c38239c",
          "message": "Bump EmbarkStudios/cargo-deny-action from 2.0.20 to 2.1.1 (#1943)\n\nBumps\n[EmbarkStudios/cargo-deny-action](https://github.com/embarkstudios/cargo-deny-action)\nfrom 2.0.20 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/releases\">EmbarkStudios/cargo-deny-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Release 2.1.1 - cargo-deny 0.20.2</h2>\n<h2>Fixed</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny-action/pull/116\">PR#116</a>\nfixed in issue introduced in the 2.1.0 release due the deprecation of\nthe <code>use-git-cli</code> argument. Thanks <a\nhref=\"https://github.com/Firestar99\"><code>@​Firestar99</code></a>!</li>\n</ul>\n<h2>Release 2.1.0 - cargo-deny 0.20.2</h2>\n<h3>Changed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nrefactored the CLI, moving some duplicated options/flags into the root\nand removing several deprecated options/flags/values. See the PR for a\nfull list of changes.</li>\n</ul>\n<h3>Added</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/879\">PR#879</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/873\">#873</a>\nby adding a new <a\nhref=\"https://embarkstudios.github.io/cargo-deny/checks/bans/cfg.html#the-std-replacements-field-optional\"><code>bans.std-replacements</code></a>\nlint which checks the graph for crates.io sourced crates that have been\npartially or fully replaced in <code>std</code> and/or\n<code>core</code>.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/880\">PR#880</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/765\">#765</a>\nby respecting non-default build script paths in manifests.</li>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/874\">#874</a>\nby cleaning up the CLI, deduplicating some options/flags that caused bug\nin the <code>list</code> subcommand.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/3c6349835b2b7b196a839186cb8b78e02f7b5f25\"><code>3c63498</code></a>\nFix use-git-cli deprecation (<a\nhref=\"https://redirect.github.com/embarkstudios/cargo-deny-action/issues/116\">#116</a>)</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/6f99e342a8f0f8f8d1bdc9dc43e9a6f2dd611259\"><code>6f99e34</code></a>\nBump to 0.20.2</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/8b229e2cbac05ffa3e4e6646023a0b4ee717c736\"><code>8b229e2</code></a>\nDeprecate use-git-cli</li>\n<li>See full diff in <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/compare/bb137d7af7e4fb67e5f82a49c4fce4fad40782fe...3c6349835b2b7b196a839186cb8b78e02f7b5f25\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=EmbarkStudios/cargo-deny-action&package-manager=github_actions&previous-version=2.0.20&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:12Z",
          "tree_id": "65783e13d956cc838dc63f52226a5738b641e91a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57010820b1c189b6cf8253ce6ca6d4787c38239c"
        },
        "date": 1787675720902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1370.5946289062501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1352.09208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1236.91591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.90615234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 44.6984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.8166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.52705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.98466796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.33046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.18115234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.11630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 910.169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 234.97109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 936.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 236.93330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 588.630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 542.0568359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 514.39560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 57.234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1308.8443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.10869140625,
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
          "id": "723186c7ab6fc4769a0fe8eb2e4030763479508f",
          "message": "Bump actions/setup-python from 6.3.0 to 7.0.0 (#1902)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 6.3.0 to 7.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements</h3>\n<ul>\n<li>Migrate to ESM and upgrade dependencies by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1330\">actions/setup-python#1330</a></li>\n<li>Pin SHA commits and update docs with latest versions by <a\nhref=\"https://github.com/HarithaVattikuti\"><code>@​HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1338\">actions/setup-python#1338</a></li>\n<li>Remove the pip-install input by <a\nhref=\"https://github.com/gowridurgad\"><code>@​gowridurgad</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1336\">actions/setup-python#1336</a></li>\n</ul>\n<h3>Bug Fix</h3>\n<ul>\n<li>Fix to Classify stderr warning messages as warnings instead of\nerrors in annotations by <a\nhref=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li>Validate and retry manifest fetch to prevent silent failures by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1332\">actions/setup-python#1332</a></li>\n</ul>\n<h3>Dependency Upgrade</h3>\n<ul>\n<li>Bump certifi from 2020.6.20 to 2024.7.4 in\n/<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1328\">actions/setup-python#1328</a></li>\n<li>Remove EOL Python versions and Bumps numpy text fixture by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1333\">actions/setup-python#1333</a></li>\n<li>Upgrade <code>@​actions/cache</code> to 6.2.0 by <a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li><a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v6...v7.0.0\">https://github.com/actions/setup-python/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5fda3b95a4ea91299a34e894583c3862153e4b97\"><code>5fda3b9</code></a>\nPin SHA commits and update docs with latest versions (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1338\">#1338</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/4ab7e95f05e168b4356aebde89dd84f59c283d8e\"><code>4ab7e95</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1337\">#1337</a>\nfrom actions/philip-gai/bump-actions-cache-6-2-0</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0f3a009f475dbea83c0371cd85d099690fee8c5c\"><code>0f3a009</code></a>\nRemove the pip-install input (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1336\">#1336</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f8cf4291c8b8e273ddd26e569454615c7315d932\"><code>f8cf429</code></a>\nMigrate to ESM and upgrade dependencies (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1330\">#1330</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/54baeea5b34417d10a7479663a23cca53ea209b5\"><code>54baeea</code></a>\nValidate and retry manifest fetch to prevent silent failures (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1332\">#1332</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/c7092773a316760f4ecfe498e4af668a4dafeac5\"><code>c709277</code></a>\nAnnotation code fix (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1335\">#1335</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/6849080452e69b330395e8a6d23cf90f56d76a1a\"><code>6849080</code></a>\nremove EOL Python versions and Bumps numpy text fixture (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1333\">#1333</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0903b469fbf4441aadfe4f4b249dc5b1fba3a73e\"><code>0903b46</code></a>\nBump certifi from 2020.6.20 to 2024.7.4 in /<strong>tests</strong>/data\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1328\">#1328</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/setup-python/compare/ece7cb06caefa5fff74198d8649806c4678c61a1...5fda3b95a4ea91299a34e894583c3862153e4b97\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:19Z",
          "tree_id": "238737c612909483c2821188619ff8c95e8dd8a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/723186c7ab6fc4769a0fe8eb2e4030763479508f"
        },
        "date": 1787680829739,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1411.92802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.19091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1245.92470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.9400390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.3328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.7283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.6734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.0072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 933.78037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.49423828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 917.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 225.098828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 484.76240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 57.3271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 534.55830078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 451.39638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.00693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1310.4169921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 948.82919921875,
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
          "id": "ffa4eeb83ded7084e861179c7b7744474e62b7a1",
          "message": "Bump hydra-core from 1.3.2 to 1.3.4 in /benchmark (#1941)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.2\nto 1.3.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.4</h2>\n<p>Security patch release for the 1.3 line.</p>\n<ul>\n<li>Add a blocklist to <code>hydra.utils.instantiate()</code> for\nsecurity-sensitive <code>_target_</code> callables.</li>\n</ul>\n<p>Users on Hydra 1.3 should upgrade from\n<code>hydra-core&lt;=1.3.3</code> to <code>hydra-core==1.3.4</code>.</p>\n<p>Hydra 1.3.3 fixes source builds with modern setuptools by removing\nthe setup.py dependency on pkg_resources. Fixes <a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.4/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.4 (2026-07-05)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Add an instantiate target blocklist for security-sensitive\ncallables. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3259\">#3259</a>)\n1.3.3 (2026-06-11)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Remove the setup.py dependency on pkg_resources for source builds.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81070c4266f2c7e0bb614f84585b3bd0cb721ce1\"><code>81070c4</code></a>\nRelease Hydra 1.3.4</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/bc0b68c21be5d51b9b5d083dc4b1a5348914543b\"><code>bc0b68c</code></a>\nPin pytest for 1.3 test compatibility</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/461538ef1e57ddd1b4fd47545ef5bc04048fbbf2\"><code>461538e</code></a>\nupdated news fragment</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/7faad0dcedfb4c0a364aa1067c0080fd6fdf8dca\"><code>7faad0d</code></a>\nHarden instantiate target blocklist (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3261\">#3261</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d69214b2b8b5bcaef0152cdbd750fa16c42c8fae\"><code>d69214b</code></a>\nAdd 1.3 branch PyPI publish workflow</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/e67cae34625deab4e1dc268837e72b2137fe8216\"><code>e67cae3</code></a>\nPrepare Hydra 1.3.3 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/f8d6111d4c3d09cd977cc700de3301ee6aef1182\"><code>f8d6111</code></a>\nFix source builds without pkg_resources</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.2...v1.3.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.2&new-version=1.3.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T14:01:12Z",
          "tree_id": "074fa5f6dca6662387ed12ae2104d710ce64b5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffa4eeb83ded7084e861179c7b7744474e62b7a1"
        },
        "date": 1787681756047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1390.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1350.59462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1200.2086914062502,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.26748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 43.18037109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.2259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.540625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.12265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.66767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.00224609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.084375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 834.07724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 230.2140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 805.28681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 229.7052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 492.1962890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 59.58935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 491.9935546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 459.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.40615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1384.81923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1094.5509765625,
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
          "id": "17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29",
          "message": "Bump astral-sh/setup-uv from 7.6.0 to 10.0.1 (#1945)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n7.6.0 to 10.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.0.1 🌈 Tolerate transient manifest timeouts</h2>\n<h2>Changes</h2>\n<p>Thank you <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- for making\nthis action more resilient.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Tolerate transient manifest timeouts <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n</ul>\n<h2>v10.0.0 🌈 Disable automatic caching for sensitive events and new QOL\nfeatures</h2>\n<h2>Changes</h2>\n<p>Another breaking release, directly after v9.0.0 but we think the\nadded security justifies that.</p>\n<h3>Extra security by default</h3>\n<p>If you use the default <code>enable-cache: auto</code> this will now\n<strong>DISABLE THE CACHE</strong> to protect against cache poisoning\nfor the following events:</p>\n<ul>\n<li><code>pull_request_target</code></li>\n<li><code>workflow_run</code></li>\n<li><code>release</code></li>\n</ul>\n<p>You can read the full reasoning in <a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/984\">astral-sh/setup-uv#984</a></p>\n<h3><code>version: latest-known</code></h3>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv known to\nsetup-uv\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version: &quot;latest-known&quot;\n</code></pre>\n<p>This will now install the latest version with a checksum that is\nknown by this action. The <a\nhref=\"https://github.com/astral-sh/setup-uv/blob/4f6036f71cec78afb113b323f220c9185d983c12/src/download/checksum/known-checksums.ts\">known\n<code>uv</code> checksums</a> are automatically updated but will take a\nrelease of this action to take effect. You won't be always using the\nlatest &amp; greatest but you will have an extra level of security.</p>\n<h3>Read python version from <code>.tool-versions</code></h3>\n<pre lang=\"yaml\"><code>- name: Install uv based on the version defined\nin .tool-versions and also set python\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version-file: &quot;pyproject.toml&quot;\n&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/20cfd1bf945f4377ade1205e4dbc17946fc9a30d\"><code>20cfd1b</code></a>\nchore: update known checksums for 0.12.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d73a0cab66a532d7afa440d9df4a67ea9fe65a30\"><code>d73a0ca</code></a>\nTolerate transient manifest timeouts (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae3b92d1bdb308a10adfe7b8f408e5cc8c30f3f6\"><code>ae3b92d</code></a>\ndocs: update version references to v10.0.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae62891fec2bb8e7d6c99fc78c9fec3a63790f8d\"><code>ae62891</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1013\">#1013</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f9cdb47d487aee2be8925d1e57290177ad9e1ac2\"><code>f9cdb47</code></a>\nReject paths in .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1007\">#1007</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4f6036f71cec78afb113b323f220c9185d983c12\"><code>4f6036f</code></a>\nRequire pull requests for Dependabot rollups (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1005\">#1005</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8d6402c9b71205b2d8d0b82de531d8fed8430182\"><code>8d6402c</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1004\">#1004</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/46f427bd47c794e99536b75ffaa9f27602425027\"><code>46f427b</code></a>\nRead Python version from .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/996\">#996</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ed89c51143f65ea13eaba62db51dbb8ea52d0a3\"><code>8ed89c5</code></a>\nci: pin Alpine container image (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/995\">#995</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8473c7fea42cdfd540f4b01317a17ac5f54126ae\"><code>8473c7f</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/994\">#994</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/37802adc94f370d6bfd71619e3f0bf239e1f3b78...20cfd1bf945f4377ade1205e4dbc17946fc9a30d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T16:22:42Z",
          "tree_id": "faf85be8412f8677867f6c061ae28caf9dcfc47f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29"
        },
        "date": 1787684756682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1394.40322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1383.290625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1203.68193359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.91279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 40.72919921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.88427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 41.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.03544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.4283203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.95849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.27724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 849.784765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 233.19931640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 895.0140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 215.1984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 448.86904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.926171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 528.39990234375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 416.93623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 56.401953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1348.76025390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 975.924609375,
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
          "id": "70bd7b627969ed6decdeab91a6a445a2347d827c",
          "message": "Remove AL2 from various pieces of documentation (#1921)\n\nReplace AL2 with AL2023 in various pieces of documentation. Removing\nbecause AL2 is now end of life\n\nRemove instructions for building the packaging script without docker, as\nAL2023 already comes with a native release, and `dpkg` cannot be\ninstalled on it. Users who want to build custom releases can use docker.\n\n### Does this change impact existing behavior?\n\nOnly documentation is changed. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-08-27T19:30:58Z",
          "tree_id": "f5f5b0f74d031e233101d718d70779322e076990",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70bd7b627969ed6decdeab91a6a445a2347d827c"
        },
        "date": 1787868168509,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1457.554296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1425.45888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1262.56650390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.28359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.73994140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 43.76005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.87841796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.52236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.77509765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.2072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 821.9767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 238.8814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 917.39541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 224.3775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 484.1390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.99990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 527.9296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 458.73759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 60.52548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1420.759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1090.04638671875,
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
          "id": "41b00f8aa4db8bed5217f1577fb78f0c96c49776",
          "message": "Replace bincode with wincode in disk data cache (#1947)\n\nReplace unmaintained bincode serialization library with wincode (a\nbincode-compatible, actively maintained library) for disk cache header\nserialization/deserialization in `mountpoint-s3-fs`. bincode has been\npermanently marked as unmaintained\n([RUSTSEC-2025-0141](https://osv.dev/vulnerability/RUSTSEC-2025-0141)).\n  \nImplementation:\n  \n- Read: Header deserialized directly from the file reader via\nReadAdapter. Data read directly into pool buffer.\n- Write: Header serialized directly to file via WriteAdapter (no\nintermediate allocation, same pattern as bincode).\n- Added `write_cache_block` and `write_file` benchmarks.\n\nBenchmark results:\n- `read_cache_block`: wincode 99.3 µs vs bincode 103.6 µs (faster ✅)\n- `write_cache_block`: wincode 4.02 ms vs bincode 4.02 ms (identical)\n  \nNo performance regression. Read path is slightly faster.\n\nNote: `mountpoint-s3-fuser `still uses bincode 1.3.1 - will be addressed\nin a follow-up. The advisory suppression can be reverted once both are\nmigrated.\n \n### Does this change impact existing behavior?\n\nNo user-facing changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2026-09-02T07:36:44Z",
          "tree_id": "eabef6d4d55a3c658eb09c12dba719b50cff0d4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/41b00f8aa4db8bed5217f1577fb78f0c96c49776"
        },
        "date": 1788343589289,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1522.058984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1485.2333984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1279.37587890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.0359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 41.66357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 6.8171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 42.481640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.866796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.432421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.62470703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.1884765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 809.3255859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 237.615625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 877.56513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 222.25185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 503.562890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.21162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 554.6845703125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 473.8033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.56865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1454.227734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 970.4080078125,
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
          "id": "835142e70dadc1994ec77ee64ab1223cc7b8b545",
          "message": "Retroactively fix changelog for 1.23.0 (#1952)\n\nWe missed an entry in the changelog for Mountpoint 1.23.0: we should\nhave included #1762.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-02T08:47:18Z",
          "tree_id": "4773818625d9abe78d3a37475ee0a8829e2acc98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/835142e70dadc1994ec77ee64ab1223cc7b8b545"
        },
        "date": 1788347280359,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 1523.85087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 1466.1654296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 1230.4248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 7.42294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 42.7513671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 7.2681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 44.74248046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 1.97705078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 11.7546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 1.74609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.3646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 841.1193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 240.3037109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 924.28115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 231.72451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 523.85341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 58.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 556.396484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 441.8330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 59.72900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1381.38955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1112.03583984375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}