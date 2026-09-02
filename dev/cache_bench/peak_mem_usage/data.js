window.BENCHMARK_DATA = {
  "lastUpdate": 1788346473299,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "00d3945269a62e36bc9d21dd30ce221b5ac7bb69",
          "message": "Update CRT submodules to latest releases (#1884)\n\nUpdate the CRT submodules to the latest releases:\n\n- aws-c-auth v0.10.4\n- aws-c-common v0.14.2\n- aws-c-io v0.27.3\n- aws-c-sdkutils v0.2.7\n\n**Note**:  aws-lc to be updated separately (#1850).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 4cb7127f..4b5d524b:\n  > profile credentials provider should support sts web identity as well (#298)\n  > Regression Labeler Fix (#297)\n  > Support s2n-tls on macOS (#296)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 2b4c620f..a9d57d2d:\n  > XML Parser Fixes (#1254)\n  > Update deprecated OpenBSD CI job (#1255)\n  > Byte Buf Helper Func Dynamic or Static (#1253)\n  > CI improvements (#1252)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 9156a8f7..8bda5cf0:\n  > Unsetting USE_S2N disables s2n on macOS (#811)\n  > Update deprecated OpenBSD CI job (#812)\n  > Regression Labeler Fix (#810)\n  > badssl.com starts to close sockets now. (#808)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 727df06f..cb14fea3:\n  > BDD engine implementation (#62)\n  > Regression Labeler Fix (#67)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-14T17:29:18Z",
          "tree_id": "e2332a3946a4fad1fc20c4c5d05bf7221c45dc7e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/00d3945269a62e36bc9d21dd30ce221b5ac7bb69"
        },
        "date": 1784058344270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2271.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 29.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2420.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 28.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2210.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2318.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 21.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2321.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 30.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2300.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2441.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2320.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2277.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.30859375,
            "unit": "MiB"
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
          "id": "56336d142d7181a349cea1487c589a7b43d30e46",
          "message": "Add --ca-bundle and AWS_CA_BUNDLE support (#1834)\n\n### Description\n\nIssue: https://github.com/awslabs/mountpoint-s3/issues/1480\n\nAdd `--ca-bundle` and `AWS_CA_BUNDLE` support (similarly to AWS CLI) as\nper\nhttps://docs.aws.amazon.com/sdkref/latest/guide/feature-gen-config.html\n\n- Allows customers to specify the path to a custom certificate bundle (a\nfile with a .pem extension) to use when establishing SSL/TLS\nconnections.\n- This overrides OS default trust store.\n- Used when constructing S3 Client and Credential Client\n- Same precedence as in AWS CLI (flag > env variable)\n- No support for `ca_bundle` from AWS config file (maybe added later as\nnon-breaking change if there is usecase)\n\n### Does this change impact existing behavior?\n\nNo - new opt-in feature/flag.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - done.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-07-15T17:11:51Z",
          "tree_id": "0179cbbd323210fe6cc67efa477c1dc5c456b239",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56336d142d7181a349cea1487c589a7b43d30e46"
        },
        "date": 1784143621528,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2257.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2177.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2185.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 22.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2481.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2325.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 31.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2178.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 32.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2187.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2169.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2188.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.5,
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
          "id": "b743461cd1df847a0dcf7438412aee0ed37133bc",
          "message": "Update aws-lc to 5.1.0 and invoke cleanup on exit (#1850)\n\nUpdate the aws-lc CRT submodule to the latest release: `aws-lc v5.1.0`.\n\nAlso added cleanup for the CRT libraries to `mountpoint-s3-crt` in order\nto address an issue resulting in the address sanitizer test to fail:\n- Register a single atexit handler (once, from every\n`aws_*_library_init`) that runs the full `aws_*_library_clean_up`\nsequence top-down. Each cleanup is self-guarded and idempotent, so it is\nsafe regardless of which libraries were initialized, and joins all\nmanaged threads before aws-lc tears down.\n- The init for CRT libraries were not originally paired with a cleanup.\nHowever, cleanups join the CRT's managed worker threads, and without\nthem a worker thread could still be running a TLS handshake when the\nprocess runs its C runtime destructors, hitting a race condition. With\nthe aws-lc 5.1.0 upgrade, that race hits an abort() call (rand.c:575) in\naws-lc's FIPS RNG teardown, taking down `make test-asan` at exit.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc d50ded59..6283365b:\n  > Prepare v5.1.0 release (#3321)\n  > Concurrency is not generally supported for EVP_AEAD_CTX_foo functions (#3318)\n  > Add 'version -fips' to surface FIPS module version in openssl tool (#3315)\n  > Bump AWSLC_FIPS_VERSION to 5 for next FIPS branch (#3316)\n  > ci: opt in to allow-unsafe-pr-checkout for gated pull_request_target jobs (#3313)\n  > ML-DSA: import and enable aarch64 assembly backend from mldsa-native (#3219)\n  > Define OPENSSL_INIT_NO_ATEXIT as a no-op (#3311)\n  > Bump the github-actions group across 1 directory with 4 updates (#3307)\n  > Move TLS 1.3 KDF into the FIPS module and wire up ACVP (#3247)\n  > Add WASIp2 build and test support (#3172)\n  > Make OPENSSL_memcmp constant time (#3183)\n  > Fix SSL_CTX_add_extra_chain_cert slot routing for chains added before the leaf (#3296)\n  > Stabilize libgit2 integration test (#3300)\n  > CI: Switch integration tests to nightly and raise alarm on failures (#3287)\n  > Update MySQL CI integration to mysql-cluster-9.7.1 (#3302)\n  > Support SSL_OP_IGNORE_UNEXPECTED_EOF option (#3294)\n  > Fix PostgreSQL integration: match upstream revoked-cert alert regex (#3299)\n  > ci: fix Windows CI breakage from VS2026 (MSVC 14.51) image bump (#3298)\n  > ML-DSA: import and enable x86_64 assembly backend from mldsa-native (#3195)\n  > Bump aws-cdk-lib from 2.251.0 to 2.255.0 in /tests/ci in the pip-ci group (#3283)\n  > Bump the cargo-ci-lambda group in /tests/ci/lambda with 4 updates (#3284)\n  > Bump cross-platform-actions/action from 0.32.0 to 1.2.0 in the github-actions group (#3285)\n  > ci: move BSD actions to scheduled (#3276)\n  > Add SSL_CTX_set_security_callback and related APIs for OpenSSL compat… (#3275)\n  > Quote LIBCRYPTO_PATH for dynamic load test (#3259)\n  > Make FIPS compiler wrapper unconditional (#3269)\n  > ML-DSA support as a TLS 1.3 signature scheme (#3251)\n  > Add inline documentation for API contracts (#3267)\n  > use /map: linker flag to avoid running a binary to capture the hash (#3133)\n  > Skip MariaDB socket conflict test unable to run as root (#3274)\n  > Make rustfmt optional for Rust bindings generation (#3270)\n  > Fix python 3.13 patch (#3271)\n  > BoringSSL: Harden nc_email name constraint checking (#3266)\n  > Gate Linux specific code to fix compilation on AIX (#3265)\n  > Fix manylinux1 build: O_CLOEXEC fallback in getauxval shim (#3268)\n  > Prefer CRLs with specific IDP match (#3264)\n  > Add `getauxval` availability detection with `/proc/self/auxv` fallback for uclibc targets (#3250)\n  > Enable Windows 7 compat path on MinGW builds (#3239)\n  > Drop obsolete test_pkey_rsa.rb hunk from Ruby 3.4 patch (#3260)\n  > Reject undersized buffer in pkey_dsa_sign (#3112)\n  > tool-openssl/s_client: default SNI to -connect host to match OpenSSL (#3209)\n  > Bump time from 0.3.36 to 0.3.47 in /tests/ci/lambda (#3248)\n  > Bump the github-actions group with 2 updates (#3258)\n  > Decouple the FIPS version number from the AWS-LC version number (#3211)\n  > Document new versioning scheme and bump mainline to v5.0.0 (#3212)\n  > Fix correctness findings from penpal testing (#3235)\n  > Add SHRT_MAX caps to bound iteration and input lengths (#3240)\n  > Tighten OCSP_parse_url URL parsing (#3238)\n  > Log versioning and library names druing cmake build step (#3254)\n  > Add new review workflow (#3230)\n  > ci: declare contents: read on zig compiler workflow (#3249)\n  > Release cipher_data on error path too for EVP_CTRL_INIT and EVP_CTRL_COPY (#3243)\n  > Free existing responderId union arm in OCSP_RESPID setters (#3234)\n  > Check parameters before comparing pqdsa public keys (#3229)\n  > Reject negative pass_len in PEM_ASN1_write_bio (#3228)\n  > Include trailing NUL in BIO_ADDR_rawaddress AF_UNIX length (#3236)\n  > Ensure no trailing data for PKCS8 EVP_parse_private_key (#3242)\n  > Free existing union arm by current type in PKCS7_set_type (#3231)\n  > Reject len < -1 in ASN1_mbstring_ncopy (#3232)\n  > Harden PKCS7 and OCSP error handling (#3237)\n  > Fix wherelen handling in BIO_ADDR_rawmake AF_UNIX path (#3233)\n  > Fix: Apply COHABITANT_HEADERS logic to location of tool binaries (#3116)\n  > Add OPENSSL_cleanse to zero stack secrets before return (#3227)\n  > BoringSSL: Test key import in EVPTest a bit more extensively (#3058)\n  > Prepare 1.73.0 (#3226)\n  > Fix shared library install on Windows: place DLLs in bin directory (#3225)\n  > Fix thread-local DRBG cleanup deadlock at process exit (#3220)\n  > Reject URIs containing '@' in name constraint checking (#3202)\n  > ci: pin zig x86_64-windows job to windows-2022 (#3222)\n  > Support non-empty context strings in ML-DSA EVP sign/verify (#3135)\n  > Bump the pip-ci group across 1 directory with 4 updates (#3216)\n  > Bump the cargo-ci-lambda group across 1 directory with 10 updates (#3217)\n  > Bump the github-actions group with 17 updates (#3218)\n  > Bump golang.org/x/crypto from 0.31.0 to 0.50.0 in the gomod-root group (#3214)\n  > Fixes several issues across X509 and EVP parsing/comparison code (#3213)\n  > ci: add Dependabot configuration (#3191)\n  > ci: harden zig wrappers against libc++ ABI drift and opaque failures (#3190)\n  > Ensure correct bio memory buffer type is assigned (#3204)\n  > Rework order for initialisation of digest object. If memory allocation fails, object is now not in a corrupted state. (#3205)\n  > Implement EVP_PKEY_get_private_seed to return seed representation of private key (#3200)\n  > Align X.509 Limbo local patch with upstream changes (#3206)\n  > Dilently drop handshake fragments at the far edge of the seq window (#3203)\n  > Add `EVP_PKEY_kem_get_type` public accessor for KEM key NID (#3179)\n  > Scope _STL_EXTRA_DISABLED_WARNINGS to C++ to fix Ninja + clang-cl builds (#3199)\n  > Fix FIPS build under MSAN by broadening integrity-test guards (#3167)\n  > tool/s_client: fix -verify depth and missing CA store (#3189)\n  > Handle id-pkix-ocsp-nocheck in OCSP responder verification (#3169)\n  > Add WaitForFileAccessible to fix intermittent Windows test failures (#3178)\n  > Handle allocation failures in add_string's section strdup and stack push (#3187)\n  > Fix grpc CI (#3196)\n  > Silence two stringop-overflow false-positives (#3201)\n  > Prepare v1.72.1 (#3192)\n  > Update NID_rsaesOaep test certificate (#3194)\n  > ci: pin cryptography to source builds in pyopenssl integration (#3193)\n  > Bump MySQL version to 9.7.0 (#3185)\n  > Map rsaesOaep SPKI to RSA in parse_key_type (#3181)\n  > docs: update platform support tables (#3176)\n  > ci: add gh-pages workflow for API documentation (#3177)\n  > BoringSSL: Don't support parameterless DSA keys in SPKIs AND Set an EVP_PKEY's algorithm and data together (#3057)\n  > Mitigate intermittent SSL runner timeouts on FreeBSD CI (#3171)\n  > Fix intermittent `ImplDispatchTest.AEAD_AES_GCM` failure in gcc-4.8 CI (#3170)\n  > Add CI for Zig compiler support (#3142)\n  > Improve test portability for OPENSSL_NO_SOCK, OPENSSL_THREADS, and OPENSSL_NO_TTY (#3146)\n  > Generalize SSL test runner idle-timeout retry to all tests (#3163)\n  > Bump Go version in gcc-4.8 Docker image from 1.18.10 to 1.22.12 (#3168)\n  > ssl: invalidate X509 leaf/chain caches in cert_set_chain_and_key and … (#3117)\n  > Fix intermittent CA test failure on Windows CI when TEMP is unset (#3161)\n  > Bump minimum Go version to 1.20 and update Go dependencies (#3159)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-16T13:58:48Z",
          "tree_id": "f25b78c5177d59cd61f86cefa5ef7f2038b0712a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b743461cd1df847a0dcf7438412aee0ed37133bc"
        },
        "date": 1784217876358,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2162.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2186.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 53.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 22.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2174.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 31.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2318.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2174.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2182.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.98046875,
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
          "id": "625ef017a48e3f3db01c817b7074d8d5f2fa12b3",
          "message": "Add integration tests for STS web identity credential source (#1889)\n\nAdd new integration tests for STS web identity credential source, both\nconfigured directly and through a source profile. Both tests are gated\nunder a new `web_identity_tests` crate feature.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAdding changelog entries.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-17T11:02:53Z",
          "tree_id": "3057fd70dac0da4e3c143ca021e92f4774b7cdc5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/625ef017a48e3f3db01c817b7074d8d5f2fa12b3"
        },
        "date": 1784293695659,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2190.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2168.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2189.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2189.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 29.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2174.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2161.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.38671875,
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
          "id": "226d1d84c239f14620336dcbc2ce8ff3a543f995",
          "message": "Update changelogs to prepare v1.23.0 release (#1890)\n\nUpdate changelogs for all crates.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T15:26:39Z",
          "tree_id": "2e4c043996dec3b485b8018ce802c68dc021be13",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/226d1d84c239f14620336dcbc2ce8ff3a543f995"
        },
        "date": 1784568865129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2353.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 29.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2176.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2165.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 23.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2187.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2515.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 32.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2181.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2200.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2172.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.91015625,
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
          "id": "268bd54507ff6bc26e22590ac02bcaadf79f8386",
          "message": "Run cargo update (#1891)\n\nUpdate yanked dependency. Fixes:\n\n```\nwarning: package `spin v0.10.0` in Cargo.lock is yanked in registry `crates-io`, consider updating to a version that is not yanked\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-20T19:00:26Z",
          "tree_id": "431b0c25ea53840dcdb21543c3085abbca11a6ec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/268bd54507ff6bc26e22590ac02bcaadf79f8386"
        },
        "date": 1784581908498,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2190.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2184.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 28.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2162.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2210.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 23.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2163.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 30.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2200.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2173.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 22.296875,
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
          "id": "4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b",
          "message": "Include aws-ls/generated-src in crt-sys crate (#1892)\n\nFix build issue on macOS when running:\n\n```\ncargo package -p mountpoint-s3-crt-sys  \n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-07-21T07:06:45Z",
          "tree_id": "c9a67b149210b63f2f89627133fe54271c593b31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4f38ff8b6ef0bdee9cc6f9852a6cc8de0041439b"
        },
        "date": 1784625075680,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2190.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2160.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2170.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 23.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2192.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2188.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2173.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2171.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2191.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2183.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.515625,
            "unit": "MiB"
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
        "date": 1785336264165,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2228.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 44.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2196.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 44.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2196.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 92.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2189.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 41.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2205.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2213.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 53.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2215.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2192.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.96484375,
            "unit": "MiB"
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
        "date": 1785608322722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2195.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 43.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2198.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 45.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2195.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2203.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2200.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 43.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2221.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 36.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2190.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2193.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.546875,
            "unit": "MiB"
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
        "date": 1785843168536,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2195.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 44.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2205.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 44.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2209.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 53.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2186.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2206.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2221.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2193.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2212.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 29.41015625,
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
          "id": "5006f4e98aab4e5f09f5df030233c5b37cf5f5ed",
          "message": "Upgrade actions/checkout from 6.0.3 to 7.0.1 (#1914)\n\nReplaces #1901: by default, `actions/checkout` v7 disallows checking out\nfork PR code from `pull_request_target` workflows, which is a feature we\nrely on in our integration, bench, and stress workflows. This change\nopts in by setting `allow-unsafe-pr-checkout`, which is safe because\nevery affected job sits behind `needs: approval`, a protected\nenvironment requiring maintainer review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-10T12:30:40Z",
          "tree_id": "65ff9ef0c12afa05763a772569a7877b9562f9ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5006f4e98aab4e5f09f5df030233c5b37cf5f5ed"
        },
        "date": 1786372611194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2197.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 44.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2188.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 44.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2192.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2196.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2223.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2203.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2206.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2208.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 31.23046875,
            "unit": "MiB"
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
        "date": 1786465961040,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2199.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 43.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2214.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 44.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2215.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2212.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2197.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2205.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2195.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2201.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2214.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 29.40234375,
            "unit": "MiB"
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
        "date": 1786640507980,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2203.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 43.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2202.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 43.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2198.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 67.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2203.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2202.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 45.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2207.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 55.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2221.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2210.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2198.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.28515625,
            "unit": "MiB"
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
        "date": 1787178623019,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2193.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 43.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2218.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 43.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2211.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2191.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 3466.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2200.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 54.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 36.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2201.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2197.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.921875,
            "unit": "MiB"
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
        "date": 1787228464831,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2209.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 44.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2223.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 45.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2192.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2196.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 41.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2220.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 44.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2261.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 54.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2197.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2203.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2192.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.953125,
            "unit": "MiB"
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
        "date": 1787249312909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2212.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 63.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2181.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2215.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 48.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2168.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 47.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2173.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 66.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2169.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2176.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2169.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.2578125,
            "unit": "MiB"
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
        "date": 1787271807176,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2175.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2173.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2200.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2162.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2165.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2173.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2165.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.67578125,
            "unit": "MiB"
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
        "date": 1787408441929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2171.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2170.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2159.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2197.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2166.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2169.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2174.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.0703125,
            "unit": "MiB"
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
        "date": 1787568759219,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2168.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2171.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2166.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2187.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2168.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2171.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2170.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2167.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.0390625,
            "unit": "MiB"
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
        "date": 1787588979773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2159.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2228.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2167.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2180.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2164.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2172.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2169.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.9921875,
            "unit": "MiB"
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
        "date": 1787592355636,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2172.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2174.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2177.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 62.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2170.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2177.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.48046875,
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
          "id": "cd04b1195dec5e12d1d706ed050f965dce7b3d30",
          "message": "Bump taiki-e/install-action from 2.82.8 to 2.86.2 (#1944)\n\nBumps\n[taiki-e/install-action](https://github.com/taiki-e/install-action) from\n2.82.8 to 2.86.2.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/taiki-e/install-action/releases\">taiki-e/install-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>2.86.2</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.5.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.6.</p>\n</li>\n<li>\n<p>Update <code>cargo-tarpaulin@latest</code> to 0.37.2.</p>\n</li>\n</ul>\n<h2>2.86.1</h2>\n<ul>\n<li>Fix an issue where <code>oxfmt</code> was　accidentally installed as\n<code>oxfmt-{target}{exe}</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1969\">#1969</a>)</li>\n</ul>\n<h2>2.86.0</h2>\n<ul>\n<li>Support <code>oxfmt</code>. (<a\nhref=\"https://redirect.github.com/taiki-e/install-action/pull/1967\">#1967</a>,\nthanks <a\nhref=\"https://github.com/rami3l\"><code>@​rami3l</code></a>)</li>\n</ul>\n<h2>2.85.14</h2>\n<ul>\n<li>\n<p>Update <code>uv@latest</code> to 0.12.4.</p>\n</li>\n<li>\n<p>Update <code>trivy@latest</code> to 0.74.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.4.0.</p>\n</li>\n<li>\n<p>Update <code>mdbook-mermaid@latest</code> to 0.17.1.</p>\n</li>\n<li>\n<p>Update <code>cargo-xwin@latest</code> to 0.23.1.</p>\n</li>\n</ul>\n<h2>2.85.13</h2>\n<ul>\n<li>\n<p>Update <code>tombi@latest</code> to 1.3.3.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.5.</p>\n</li>\n<li>\n<p>Update <code>kingfisher@latest</code> to 1.113.0.</p>\n</li>\n<li>\n<p>Update <code>cargo-shear@latest</code> to 1.13.4.</p>\n</li>\n<li>\n<p>Update <code>bpf-linker@latest</code> to 0.11.0.</p>\n</li>\n</ul>\n<h2>2.85.12</h2>\n<ul>\n<li>\n<p>Update <code>zola@latest</code> to 0.23.3.</p>\n</li>\n<li>\n<p>Update <code>wasm-tools@latest</code> to 1.256.0.</p>\n</li>\n<li>\n<p>Update <code>tombi@latest</code> to 1.2.10.</p>\n</li>\n<li>\n<p>Update <code>syft@latest</code> to 1.51.0.</p>\n</li>\n<li>\n<p>Update <code>prek@latest</code> to 0.4.13.</p>\n</li>\n<li>\n<p>Update <code>mise@latest</code> to 2026.8.4.</p>\n</li>\n<li>\n<p>Update <code>editorconfig-checker@latest</code> to 3.11.1.</p>\n</li>\n</ul>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b6b84cf49ebfe0176417bdce007c624f0db37f20\"><code>b6b84cf</code></a>\nRelease 2.86.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/822eb9a731103a6afbfa603ab7ff02185a124607\"><code>822eb9a</code></a>\nUpdate <code>uv@latest</code> to 0.12.5</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/5c017c5438cad8fb6e9855caae3622dd889862ee\"><code>5c017c5</code></a>\nUpdate prek manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/f3371b0ada03f6dd26a8a4d2572a504f06b34f82\"><code>f3371b0</code></a>\nUpdate osv-scanner manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/be4eb9e9090a465654bd22c6ce1fbbbc51fc9bba\"><code>be4eb9e</code></a>\nUpdate <code>mise@latest</code> to 2026.8.6</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/235fcbc6389f3fe88ef2441ea5c2b2789683ab85\"><code>235fcbc</code></a>\nUpdate <code>cargo-tarpaulin@latest</code> to 0.37.2</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/1d8477e1cae9b584346998400732cf21d82c0a66\"><code>1d8477e</code></a>\nUpdate cargo-llvm-cov manifest</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/288e746965032cfcc232e09af2daf5f23c14d780\"><code>288e746</code></a>\nRelease 2.86.1</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/6012fb0aebafca00cab83d4d647a7d93eae73c49\"><code>6012fb0</code></a>\nFix oxfmt installation</li>\n<li><a\nhref=\"https://github.com/taiki-e/install-action/commit/b27e114ddbae5cc01df19a22cf70a124d5177567\"><code>b27e114</code></a>\nRelease 2.86.0</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/taiki-e/install-action/compare/v2.82.8...v2.86.2\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=taiki-e/install-action&package-manager=github_actions&previous-version=2.82.8&new-version=2.86.2)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:23:46Z",
          "tree_id": "7471365736d5159a22067190645ba595d87ff102",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/cd04b1195dec5e12d1d706ed050f965dce7b3d30"
        },
        "date": 1787669821909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2171.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2165.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2173.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2325.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2318.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2165.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2171.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2168.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2166.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.66015625,
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
          "id": "fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3",
          "message": "Bump aws-actions/configure-aws-credentials from 6.2.1 to 6.2.3 (#1925)\n\nBumps\n[aws-actions/configure-aws-credentials](https://github.com/aws-actions/configure-aws-credentials)\nfrom 6.2.1 to 6.2.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/releases\">aws-actions/configure-aws-credentials's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.2.3</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2>v6.2.2</h2>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/blob/main/CHANGELOG.md\">aws-actions/configure-aws-credentials's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>Changelog</h1>\n<p>All notable changes to this project will be documented in this file.\nSee <a\nhref=\"https://github.com/conventional-changelog/standard-version\">standard-version</a>\nfor commit guidelines.</p>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.2...v6.2.3\">6.2.3</a>\n(2026-07-22)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>attach git credentials before Tag Major Version push (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1877\">#1877</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/9ae780b171afa8c5a3a6a2d154a765b709492482\">9ae780b</a>)</li>\n<li>PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\">fa8d6a5</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.1...v6.2.2\">6.2.2</a>\n(2026-07-07)</h2>\n<h3>Miscellaneous Chores</h3>\n<ul>\n<li>release 6.2.2 (<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d01d678e65d6d2bd9d5ca7a95d6f07b00e25f2c2\">d01d678</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.2.0...v6.2.1\">6.2.1</a>\n(2026-06-26)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>enforce allowed-account-ids on all auth paths (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1847\">#1847</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/4d281fbc56a82e63c3fc14f2cc22361f34c97493\">4d281fb</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.3...v6.2.0\">6.2.0</a>\n(2026-06-01)</h2>\n<h3>Features</h3>\n<ul>\n<li>add additional session tags by default (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1775\">#1775</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e0ba7685077379a14a82d01fefd511490344ebfc\">e0ba768</a>)</li>\n<li>add more retry logic and better logging (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1764\">#1764</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/540d0c13aedb8d55501d220bd2f0b3cdedfe84e8\">540d0c1</a>)</li>\n<li>add regex validation to role-session-name (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1765\">#1765</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e35449909c6ede5083a48ba4b8bbfaaa1cf09ba1\">e354499</a>)</li>\n<li>Allow custom session tags to be passed when assuming a role (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1759\">#1759</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/61f50f630f383628add73c1eab3f1935ba07da2b\">61f50f6</a>)</li>\n<li>expose run id in STS client user-agent (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1774\">#1774</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/29d1be30273e7ef371d59fccf6ec54572c64ec89\">29d1be3</a>)</li>\n<li>support custom STS endpoints (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1762\">#1762</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/8d52d05d7a4521fa52b39de50cb6114b12e5c332\">8d52d05</a>)</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>skip credential check on output-env-credentials: false (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1778\">#1778</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/58e7c47adf77846879008deadfeeef8a6969fe6c\">58e7c47</a>)</li>\n<li>assumeRole failing from session tag size too large (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1808\">#1808</a>)\n(<a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d6f5dc331b44474b19a52caaf85fa4d637b13c8e\">d6f5dc3</a>)</li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.2...v6.1.3\">6.1.3</a>\n(2026-05-28)</h2>\n<h3>Bug Fixes</h3>\n<ul>\n<li>fix: allow kubelet token symlink in <a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1805\">#1805</a></li>\n</ul>\n<h2><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/v6.1.1...v6.1.2\">6.1.2</a>\n(2026-05-26)</h2>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e6de054238d6b7531b4efff3b6587d9aade6a06c\"><code>e6de054</code></a>\nchore(main): release 6.2.3 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1878\">#1878</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/ab3b2ba025afb33b6856abfc1626992c70909302\"><code>ab3b2ba</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fa8d6a57bbf44b34439fb080bbdadc7c92c285eb\"><code>fa8d6a5</code></a>\nfix: PackedPolicyTooLarge detection in STS tags (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1899\">#1899</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/42e118a65655a9bcd2929e1ab7c4588fdd3255d3\"><code>42e118a</code></a>\nchore(deps-dev): bump markdownlint-cli from 0.49.0 to 0.49.1 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1896\">#1896</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d86ddfcecc93d50cd1d1ca675d859403357c3d89\"><code>d86ddfc</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/874aaac21e617e1544df3c6a9f043c9bc96adf70\"><code>874aaac</code></a>\nchore(deps): bump <code>@​aws-sdk/client-sts</code> from 3.1086.0 to\n3.1091.0 (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1892\">#1892</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/d4341b65accaa2ddbb952380d8ef12f95043d338\"><code>d4341b6</code></a>\nchore: Update dist</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/fe51823c9714409fc32ade60b0bb4e79890beff1\"><code>fe51823</code></a>\nchore(deps-dev): bump <code>@​aws-sdk/credential-provider-env</code> (<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1894\">#1894</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/a8be382115e1ad5c77c560af842deddb56cd375c\"><code>a8be382</code></a>\nchore(deps-dev): bump <code>@​biomejs/biome</code> from 2.5.3 to 2.5.4\n(<a\nhref=\"https://redirect.github.com/aws-actions/configure-aws-credentials/issues/1893\">#1893</a>)</li>\n<li><a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/commit/e000376c2c1f88ccef5f22a6bda02c24932d8ea5\"><code>e000376</code></a>\nchore: Update dist</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/aws-actions/configure-aws-credentials/compare/254c19bd240aabef8777f48595e9d2d7b972184b...e6de054238d6b7531b4efff3b6587d9aade6a06c\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T12:34:19Z",
          "tree_id": "df8438cb52defad4e663612968622b4741bf6349",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fb3d8539a6b3ad3b6bc39f253de9865753e1bcd3"
        },
        "date": 1787672316129,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2160.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2175.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2186.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2168.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2173.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2176.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2174.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.94921875,
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
          "id": "57010820b1c189b6cf8253ce6ca6d4787c38239c",
          "message": "Bump EmbarkStudios/cargo-deny-action from 2.0.20 to 2.1.1 (#1943)\n\nBumps\n[EmbarkStudios/cargo-deny-action](https://github.com/embarkstudios/cargo-deny-action)\nfrom 2.0.20 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/releases\">EmbarkStudios/cargo-deny-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Release 2.1.1 - cargo-deny 0.20.2</h2>\n<h2>Fixed</h2>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny-action/pull/116\">PR#116</a>\nfixed in issue introduced in the 2.1.0 release due the deprecation of\nthe <code>use-git-cli</code> argument. Thanks <a\nhref=\"https://github.com/Firestar99\"><code>@​Firestar99</code></a>!</li>\n</ul>\n<h2>Release 2.1.0 - cargo-deny 0.20.2</h2>\n<h3>Changed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nrefactored the CLI, moving some duplicated options/flags into the root\nand removing several deprecated options/flags/values. See the PR for a\nfull list of changes.</li>\n</ul>\n<h3>Added</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/879\">PR#879</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/873\">#873</a>\nby adding a new <a\nhref=\"https://embarkstudios.github.io/cargo-deny/checks/bans/cfg.html#the-std-replacements-field-optional\"><code>bans.std-replacements</code></a>\nlint which checks the graph for crates.io sourced crates that have been\npartially or fully replaced in <code>std</code> and/or\n<code>core</code>.</li>\n</ul>\n<h3>Fixed</h3>\n<ul>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/880\">PR#880</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/765\">#765</a>\nby respecting non-default build script paths in manifests.</li>\n<li><a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/pull/881\">PR#881</a>\nresolved <a\nhref=\"https://redirect.github.com/EmbarkStudios/cargo-deny/issues/874\">#874</a>\nby cleaning up the CLI, deduplicating some options/flags that caused bug\nin the <code>list</code> subcommand.</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/3c6349835b2b7b196a839186cb8b78e02f7b5f25\"><code>3c63498</code></a>\nFix use-git-cli deprecation (<a\nhref=\"https://redirect.github.com/embarkstudios/cargo-deny-action/issues/116\">#116</a>)</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/6f99e342a8f0f8f8d1bdc9dc43e9a6f2dd611259\"><code>6f99e34</code></a>\nBump to 0.20.2</li>\n<li><a\nhref=\"https://github.com/EmbarkStudios/cargo-deny-action/commit/8b229e2cbac05ffa3e4e6646023a0b4ee717c736\"><code>8b229e2</code></a>\nDeprecate use-git-cli</li>\n<li>See full diff in <a\nhref=\"https://github.com/embarkstudios/cargo-deny-action/compare/bb137d7af7e4fb67e5f82a49c4fce4fad40782fe...3c6349835b2b7b196a839186cb8b78e02f7b5f25\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=EmbarkStudios/cargo-deny-action&package-manager=github_actions&previous-version=2.0.20&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:12Z",
          "tree_id": "65783e13d956cc838dc63f52226a5738b641e91a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/57010820b1c189b6cf8253ce6ca6d4787c38239c"
        },
        "date": 1787672785140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2175.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2161.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2334.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2192.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2171.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2167.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2163.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.83984375,
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
          "id": "723186c7ab6fc4769a0fe8eb2e4030763479508f",
          "message": "Bump actions/setup-python from 6.3.0 to 7.0.0 (#1902)\n\nBumps [actions/setup-python](https://github.com/actions/setup-python)\nfrom 6.3.0 to 7.0.0.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/setup-python/releases\">actions/setup-python's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>What's Changed</h2>\n<h3>Enhancements</h3>\n<ul>\n<li>Migrate to ESM and upgrade dependencies by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1330\">actions/setup-python#1330</a></li>\n<li>Pin SHA commits and update docs with latest versions by <a\nhref=\"https://github.com/HarithaVattikuti\"><code>@​HarithaVattikuti</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1338\">actions/setup-python#1338</a></li>\n<li>Remove the pip-install input by <a\nhref=\"https://github.com/gowridurgad\"><code>@​gowridurgad</code></a> in\n<a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1336\">actions/setup-python#1336</a></li>\n</ul>\n<h3>Bug Fix</h3>\n<ul>\n<li>Fix to Classify stderr warning messages as warnings instead of\nerrors in annotations by <a\nhref=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li>Validate and retry manifest fetch to prevent silent failures by <a\nhref=\"https://github.com/priyagupta108\"><code>@​priyagupta108</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1332\">actions/setup-python#1332</a></li>\n</ul>\n<h3>Dependency Upgrade</h3>\n<ul>\n<li>Bump certifi from 2020.6.20 to 2024.7.4 in\n/<strong>tests</strong>/data by <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1328\">actions/setup-python#1328</a></li>\n<li>Remove EOL Python versions and Bumps numpy text fixture by <a\nhref=\"https://github.com/priya-kinthali\"><code>@​priya-kinthali</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1333\">actions/setup-python#1333</a></li>\n<li>Upgrade <code>@​actions/cache</code> to 6.2.0 by <a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a href=\"https://github.com/lmvysakh\"><code>@​lmvysakh</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1335\">actions/setup-python#1335</a></li>\n<li><a\nhref=\"https://github.com/philip-gai\"><code>@​philip-gai</code></a> made\ntheir first contribution in <a\nhref=\"https://redirect.github.com/actions/setup-python/pull/1337\">actions/setup-python#1337</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/setup-python/compare/v6...v7.0.0\">https://github.com/actions/setup-python/compare/v6...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/5fda3b95a4ea91299a34e894583c3862153e4b97\"><code>5fda3b9</code></a>\nPin SHA commits and update docs with latest versions (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1338\">#1338</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/4ab7e95f05e168b4356aebde89dd84f59c283d8e\"><code>4ab7e95</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1337\">#1337</a>\nfrom actions/philip-gai/bump-actions-cache-6-2-0</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0f3a009f475dbea83c0371cd85d099690fee8c5c\"><code>0f3a009</code></a>\nRemove the pip-install input (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1336\">#1336</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/f8cf4291c8b8e273ddd26e569454615c7315d932\"><code>f8cf429</code></a>\nMigrate to ESM and upgrade dependencies (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1330\">#1330</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/54baeea5b34417d10a7479663a23cca53ea209b5\"><code>54baeea</code></a>\nValidate and retry manifest fetch to prevent silent failures (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1332\">#1332</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/c7092773a316760f4ecfe498e4af668a4dafeac5\"><code>c709277</code></a>\nAnnotation code fix (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1335\">#1335</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/6849080452e69b330395e8a6d23cf90f56d76a1a\"><code>6849080</code></a>\nremove EOL Python versions and Bumps numpy text fixture (<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1333\">#1333</a>)</li>\n<li><a\nhref=\"https://github.com/actions/setup-python/commit/0903b469fbf4441aadfe4f4b249dc5b1fba3a73e\"><code>0903b46</code></a>\nBump certifi from 2020.6.20 to 2024.7.4 in /<strong>tests</strong>/data\n(<a\nhref=\"https://redirect.github.com/actions/setup-python/issues/1328\">#1328</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/actions/setup-python/compare/ece7cb06caefa5fff74198d8649806c4678c61a1...5fda3b95a4ea91299a34e894583c3862153e4b97\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T13:04:19Z",
          "tree_id": "238737c612909483c2821188619ff8c95e8dd8a4",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/723186c7ab6fc4769a0fe8eb2e4030763479508f"
        },
        "date": 1787679914403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2164.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2170.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2171.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2179.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 57.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2161.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2172.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2163.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2159.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.25390625,
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
          "distinct": true,
          "id": "ffa4eeb83ded7084e861179c7b7744474e62b7a1",
          "message": "Bump hydra-core from 1.3.2 to 1.3.4 in /benchmark (#1941)\n\nBumps [hydra-core](https://github.com/facebookresearch/hydra) from 1.3.2\nto 1.3.4.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/facebookresearch/hydra/releases\">hydra-core's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Hydra 1.3.4</h2>\n<p>Security patch release for the 1.3 line.</p>\n<ul>\n<li>Add a blocklist to <code>hydra.utils.instantiate()</code> for\nsecurity-sensitive <code>_target_</code> callables.</li>\n</ul>\n<p>Users on Hydra 1.3 should upgrade from\n<code>hydra-core&lt;=1.3.3</code> to <code>hydra-core==1.3.4</code>.</p>\n<p>Hydra 1.3.3 fixes source builds with modern setuptools by removing\nthe setup.py dependency on pkg_resources. Fixes <a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>.</p>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/hydra-ecosystem/hydra/blob/v1.3.4/NEWS.md\">hydra-core's\nchangelog</a>.</em></p>\n<blockquote>\n<h1>1.3.4 (2026-07-05)</h1>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Add an instantiate target blocklist for security-sensitive\ncallables. (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3259\">#3259</a>)\n1.3.3 (2026-06-11)\n==================</li>\n</ul>\n<h3>Bug Fixes</h3>\n<ul>\n<li>Remove the setup.py dependency on pkg_resources for source builds.\n(<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3207\">#3207</a>)</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/81070c4266f2c7e0bb614f84585b3bd0cb721ce1\"><code>81070c4</code></a>\nRelease Hydra 1.3.4</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/bc0b68c21be5d51b9b5d083dc4b1a5348914543b\"><code>bc0b68c</code></a>\nPin pytest for 1.3 test compatibility</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/461538ef1e57ddd1b4fd47545ef5bc04048fbbf2\"><code>461538e</code></a>\nupdated news fragment</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/7faad0dcedfb4c0a364aa1067c0080fd6fdf8dca\"><code>7faad0d</code></a>\nHarden instantiate target blocklist (<a\nhref=\"https://redirect.github.com/facebookresearch/hydra/issues/3261\">#3261</a>)</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/d69214b2b8b5bcaef0152cdbd750fa16c42c8fae\"><code>d69214b</code></a>\nAdd 1.3 branch PyPI publish workflow</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/e67cae34625deab4e1dc268837e72b2137fe8216\"><code>e67cae3</code></a>\nPrepare Hydra 1.3.3 release</li>\n<li><a\nhref=\"https://github.com/hydra-ecosystem/hydra/commit/f8d6111d4c3d09cd977cc700de3301ee6aef1182\"><code>f8d6111</code></a>\nFix source builds without pkg_resources</li>\n<li>See full diff in <a\nhref=\"https://github.com/facebookresearch/hydra/compare/v1.3.2...v1.3.4\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=hydra-core&package-manager=uv&previous-version=1.3.2&new-version=1.3.4)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\nYou can disable automated security fix PRs for this repo from the\n[Security Alerts\npage](https://github.com/awslabs/mountpoint-s3/network/alerts).\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T14:01:12Z",
          "tree_id": "074fa5f6dca6662387ed12ae2104d710ce64b5f5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffa4eeb83ded7084e861179c7b7744474e62b7a1"
        },
        "date": 1787680658647,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2177.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2158.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2151.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2373.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2205.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2169.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2166.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2176.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 41.7578125,
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
          "distinct": true,
          "id": "17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29",
          "message": "Bump astral-sh/setup-uv from 7.6.0 to 10.0.1 (#1945)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from\n7.6.0 to 10.0.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v10.0.1 🌈 Tolerate transient manifest timeouts</h2>\n<h2>Changes</h2>\n<p>Thank you <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- for making\nthis action more resilient.</p>\n<h2>🐛 Bug fixes</h2>\n<ul>\n<li>Tolerate transient manifest timeouts <a\nhref=\"https://github.com/arguile\"><code>@​arguile</code></a>- (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n</ul>\n<h2>🧰 Maintenance</h2>\n<ul>\n<li>chore: update known checksums for 0.12.4 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n</ul>\n<h2>📚 Documentation</h2>\n<ul>\n<li>docs: update version references to v10.0.0 @<a\nhref=\"https://github.com/apps/github-actions\">github-actions[bot]</a>\n(<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n</ul>\n<h2>v10.0.0 🌈 Disable automatic caching for sensitive events and new QOL\nfeatures</h2>\n<h2>Changes</h2>\n<p>Another breaking release, directly after v9.0.0 but we think the\nadded security justifies that.</p>\n<h3>Extra security by default</h3>\n<p>If you use the default <code>enable-cache: auto</code> this will now\n<strong>DISABLE THE CACHE</strong> to protect against cache poisoning\nfor the following events:</p>\n<ul>\n<li><code>pull_request_target</code></li>\n<li><code>workflow_run</code></li>\n<li><code>release</code></li>\n</ul>\n<p>You can read the full reasoning in <a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/984\">astral-sh/setup-uv#984</a></p>\n<h3><code>version: latest-known</code></h3>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv known to\nsetup-uv\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version: &quot;latest-known&quot;\n</code></pre>\n<p>This will now install the latest version with a checksum that is\nknown by this action. The <a\nhref=\"https://github.com/astral-sh/setup-uv/blob/4f6036f71cec78afb113b323f220c9185d983c12/src/download/checksum/known-checksums.ts\">known\n<code>uv</code> checksums</a> are automatically updated but will take a\nrelease of this action to take effect. You won't be always using the\nlatest &amp; greatest but you will have an extra level of security.</p>\n<h3>Read python version from <code>.tool-versions</code></h3>\n<pre lang=\"yaml\"><code>- name: Install uv based on the version defined\nin .tool-versions and also set python\n  uses: astral-sh/setup-uv@v10.0.0\n  with:\n    version-file: &quot;pyproject.toml&quot;\n&lt;/tr&gt;&lt;/table&gt; \n</code></pre>\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/20cfd1bf945f4377ade1205e4dbc17946fc9a30d\"><code>20cfd1b</code></a>\nchore: update known checksums for 0.12.4 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1017\">#1017</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/d73a0cab66a532d7afa440d9df4a67ea9fe65a30\"><code>d73a0ca</code></a>\nTolerate transient manifest timeouts (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1016\">#1016</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae3b92d1bdb308a10adfe7b8f408e5cc8c30f3f6\"><code>ae3b92d</code></a>\ndocs: update version references to v10.0.0 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1014\">#1014</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ae62891fec2bb8e7d6c99fc78c9fec3a63790f8d\"><code>ae62891</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1013\">#1013</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/f9cdb47d487aee2be8925d1e57290177ad9e1ac2\"><code>f9cdb47</code></a>\nReject paths in .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1007\">#1007</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/4f6036f71cec78afb113b323f220c9185d983c12\"><code>4f6036f</code></a>\nRequire pull requests for Dependabot rollups (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1005\">#1005</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8d6402c9b71205b2d8d0b82de531d8fed8430182\"><code>8d6402c</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/1004\">#1004</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/46f427bd47c794e99536b75ffaa9f27602425027\"><code>46f427b</code></a>\nRead Python version from .tool-versions (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/996\">#996</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8ed89c51143f65ea13eaba62db51dbb8ea52d0a3\"><code>8ed89c5</code></a>\nci: pin Alpine container image (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/995\">#995</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/8473c7fea42cdfd540f4b01317a17ac5f54126ae\"><code>8473c7f</code></a>\nchore(deps): roll up Dependabot updates (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/994\">#994</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/37802adc94f370d6bfd71619e3f0bf239e1f3b78...20cfd1bf945f4377ade1205e4dbc17946fc9a30d\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-08-25T16:22:42Z",
          "tree_id": "faf85be8412f8677867f6c061ae28caf9dcfc47f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17fdc4ca85b33d8b3094bfc9a17f2e7ab14eff29"
        },
        "date": 1787684239155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2164.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2163.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2169.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2296.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 55.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2180.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2166.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2171.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.0859375,
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
          "id": "70bd7b627969ed6decdeab91a6a445a2347d827c",
          "message": "Remove AL2 from various pieces of documentation (#1921)\n\nReplace AL2 with AL2023 in various pieces of documentation. Removing\nbecause AL2 is now end of life\n\nRemove instructions for building the packaging script without docker, as\nAL2023 already comes with a native release, and `dpkg` cannot be\ninstalled on it. Users who want to build custom releases can use docker.\n\n### Does this change impact existing behavior?\n\nOnly documentation is changed. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-08-27T19:30:58Z",
          "tree_id": "f5f5b0f74d031e233101d718d70779322e076990",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/70bd7b627969ed6decdeab91a6a445a2347d827c"
        },
        "date": 1787867263079,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2208.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2279.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 57.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2163.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2157.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2164.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2215.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 64.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2181.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 41.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2164.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2172.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 43.1875,
            "unit": "MiB"
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
        "date": 1788342717344,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2170.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2163.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2167.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 45.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2163.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2193.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 63.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2314.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 43.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2154.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2171.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.40625,
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
          "id": "835142e70dadc1994ec77ee64ab1223cc7b8b545",
          "message": "Retroactively fix changelog for 1.23.0 (#1952)\n\nWe missed an entry in the changelog for Mountpoint 1.23.0: we should\nhave included #1762.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-09-02T08:47:18Z",
          "tree_id": "4773818625d9abe78d3a37475ee0a8829e2acc98",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/835142e70dadc1994ec77ee64ab1223cc7b8b545"
        },
        "date": 1788346473226,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2169.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2179.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 58.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2177.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2163.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2344.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 56.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2169.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 65.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2169.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 42.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2169.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2178.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 42.95703125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}