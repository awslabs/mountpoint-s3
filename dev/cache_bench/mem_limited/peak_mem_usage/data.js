window.BENCHMARK_DATA = {
  "lastUpdate": 1777635577325,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard, Memory-Limited)": [
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
        "date": 1777049862796,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 400.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 423.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 415.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 403.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 415.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 496.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 425.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 421.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 453.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.16015625,
            "unit": "MiB"
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
        "date": 1777381509479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 408.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 427.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 408.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 405.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 638.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 450.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 408.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 429.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 443.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.515625,
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
          "id": "4a63263681e5003f9774c7a6643329b241cd57ed",
          "message": "Upgrade cargo dependencies (#1818)\n\nUpgrade cargo dependencies. Notes: \n- in order to handle a minor breaking change in the `md5` crate, we now\nalso import the `hex` crate (when building `mountpoint-s3-client` with\nthe `mock` feature).\n- upgrading to the latest `shuttle` version (`0.9.1`) led to a segfault\nin shuttle tests. Reverted while we investigate further.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdated version numbers and changelogs to reflected existing changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-04-28T11:59:35Z",
          "tree_id": "878549dc0915f9ba16cce3674d5b4744d213b9a5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a63263681e5003f9774c7a6643329b241cd57ed"
        },
        "date": 1777386948253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 421.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 415.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 411.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 407.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 40.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 479.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 445.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 427.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 423.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 432.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 34.48046875,
            "unit": "MiB"
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
        "date": 1777400795155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 408.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 423.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 410.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 426.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 37.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 432.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 415.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 412.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 45.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 478.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 473.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.73046875,
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
          "id": "0de1563d1a9d383a0f7b7c8bfb595ee19109a589",
          "message": "fix: Use cgroup-aware memory detection in mem limiter (#1806)\n\n**What changed and why?** \n\nReplace direct `sysinfo::System::total_memory()` call with a new\n`effective_total_memory()` helper that respects `cgroup` memory limits.\nThis fixes incorrect memory limit detection when running inside\ncontainers with memory constraints.\n\nChanges:\n- Add `effective_total_memory()` to `mem_limiter` that checks\n`sysinfo`'s `cgroup_limits()` before falling back to total physical\nmemory\n- Library automatically handles cgroup v1 vs v2, path resolution, no\nlimit, Linux vs non-Linux, and other edge cases:\nhttps://github.com/GuillaumeGomez/sysinfo/blob/main/src/unix/linux/cgroup.rs\n- Update `cli.rs` and `benchmark` examples to use the new helper\n- Add CI job to run cgroup memory detection test in a memory-limited\ncontainer\n\n### Does this change impact existing behavior?\n\nNo - it prevents potential OOM in containers with memory constraints.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nDone.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-04-30T16:27:04Z",
          "tree_id": "ce92a20e2db111b1eeb3ed3c3e763ff953907be7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0de1563d1a9d383a0f7b7c8bfb595ee19109a589"
        },
        "date": 1777575769997,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 396.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 30.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 411.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 29.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 409.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 53.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 419.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 22.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 396.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 30.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 431.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 393.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 411.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 408.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.7890625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zxilly@outlook.com",
            "name": "Zxilly",
            "username": "Zxilly"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a",
          "message": "Implement content type detection for uploaded objects (#1790)\n\nFixes #632\n\nAdd `--infer-content-type` flag to automatically set Content-Type on\nuploaded objects.\n\nWhen enabled, Mountpoint infers the Content-Type from the uploaded\nobject's file extension.\n\n### Does this change impact existing behavior?\n\nNo breaking change, new behavior will only act if `--infer-content-type`\nwas set.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Zxilly <zxilly@outlook.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-05-01T09:16:16Z",
          "tree_id": "65ea1b3e7458bf0974c23d48d46cfb1280d1bb6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5fdb9b4bf47a9f7ce6d9f42c89374b89f2dcac8a"
        },
        "date": 1777635577260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 412.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 29.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 406.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 419.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 43.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 415.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 469.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 482.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 410.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 411.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 397.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.578125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}