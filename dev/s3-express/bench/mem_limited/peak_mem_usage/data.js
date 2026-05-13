window.BENCHMARK_DATA = {
  "lastUpdate": 1778674465823,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone, Memory-Limited)": [
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
        "date": 1777048842433,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 829.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 508.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 433.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 49.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 55.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 49.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 403.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 51.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 403.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 307.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 307.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 305.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.54296875,
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
        "date": 1777380515963,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 845.15234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 492.29296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 433.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 43.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 24.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 39.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 403.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 306.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 304.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 352.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.0234375,
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
        "date": 1777385911258,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 1669.2265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 506.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 438.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 27.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 65.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 47.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 67.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 24.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 28.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 405.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 53.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 405.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 304.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 307.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 307.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.7890625,
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
        "date": 1777399274059,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 808.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 503.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 435.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 25.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 47.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 59.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 23.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 25.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 404.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 407.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 306.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 305.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 305.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 400.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.87109375,
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
        "date": 1777574678413,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 861.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 534.76953125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 428.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 58.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 55.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 305.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 305.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.765625,
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
        "date": 1777635200757,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 821.25,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 503.25,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 431.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 61.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 51,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.75,
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
          "id": "5374a7383d73d41724be545665e393c8c6b81f8c",
          "message": "Upgrade to Rust 1.95 (#1823)\n\nUpgrade Rust toolchain to 1.95 and address new clippy issues in tests\nand mock client.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-01T09:30:25Z",
          "tree_id": "279e1f361fe96d2acd26550318f537d6802677ed",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5374a7383d73d41724be545665e393c8c6b81f8c"
        },
        "date": 1777636342334,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 829.8125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 504.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 445.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 60.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 402.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 46.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 315.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 265.5,
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
          "id": "4dfad6f5052933c16114365d8adbfdd49e88ebf0",
          "message": "bench: Add incremental-upload throughput benchmark to S3 Express CI (#1813)\n\n## Summary\n\nExtend the existing S3 Express throughput benchmark CI with two new\n`--incremental-upload` variants, folded into the existing `bench` matrix\nintroduced by #1808 rather than as a separate job:\n\n- `incremental-upload` — default memory budget.\n- `incremental-upload-mem-limited` — `--features mem_limiter` +\n`--max-memory-target=512`.\n\nBoth new variants only run the `write` and `mix` fio categories (read is\nskipped since incremental upload is an upload-path feature).\n\nThis PR also isolates `S3_BUCKET_TEST_PREFIX` per matrix leg on the\nthroughput `bench` jobs (S3 Standard and S3 Express). The single\nworkflow-level prefix previously caused all matrix legs to race for the\nsame fio scratch keys in the benchmark bucket. This was latent (silent\noverlapping MPUs) for non-incremental legs but fatal for incremental\nupload: the append pipeline conditions each `PutObject` on the object's\ncurrent ETag, and a sibling leg's `unlink=1` between iterations aborts\nthe upload with `NoSuchKey`.\n\ngh-pages paths follow the `data_path_suffix` convention from #1808:\n\n| Variant | Throughput chart path |\n|---|---|\n| Incremental Upload | `dev/s3-express/bench/incremental_upload` |\n| Incremental Upload, Memory-Limited |\n`dev/s3-express/bench/incremental_upload/mem_limited` |\n\n### Does this change impact existing behavior?\n\nNo - only benchmark prefix changes generating/using new objects.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo — CI-only change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-01T13:20:46Z",
          "tree_id": "de8315ee6937f02426ad4964b0dd3f5ac60320b8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4dfad6f5052933c16114365d8adbfdd49e88ebf0"
        },
        "date": 1777649994688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 823.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 477,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 428.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 45.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 301.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 300,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 304.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 344.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.25,
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
          "id": "586bc9bccb197f59cd516534aa6b0785bff68691",
          "message": "Add stress tests (#1820)\n\n### Summary\n\n- Adds a stress test harness under\n`mountpoint-s3-fs/tests/stress_tests/` with four scenarios\n(`sustained_reads`, `sustained_writes`, `mixed_rw`, `idle_and_churn`)\nthat drive real S3 traffic under the 512 MiB memory limit to shake out\ndeadlocks, per-worker stalls, tail-latency regressions, and memory\nissues.\n- Asserts at teardown: reservation gauges return to zero, per-op p100\nlatency within a configurable ceiling (20sec default), and per-worker\nwatchdog against stalls.\n- Adds a feature flag `stress_tests`, an aggregated metrics recorder in\n`tests/common/test_recorder.rs` and GitHub workflows when a PR is\nlabelled `stress` (similar to benchmarks/performance workflows).\n- Runs on the same hosts as benchmarks\n- Example stress test run and CI logs from my fork:\nhttps://github.com/yerzhan7/mountpoint-s3/actions/runs/25390606910\n- For now set it to run for 15min in CI\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-06T09:05:46Z",
          "tree_id": "4f527d703690bb26732efe4f3278949f0625480d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/586bc9bccb197f59cd516534aa6b0785bff68691"
        },
        "date": 1778066642729,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 824.25,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 486.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 434.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 24,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 56.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 63.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 30,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 22.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 301.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 365.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.75,
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
          "id": "1ffbafad9cfbb01715e549665ea74009f896e5c3",
          "message": "Bump slackapi/slack-github-action from 3.0.1 to 3.0.3 (#1824)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 3.0.1 to 3.0.3.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack GitHub Action v3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>Slack GitHub Action v3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Changelog</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/blob/main/CHANGELOG.md\">slackapi/slack-github-action's\nchangelog</a>.</em></p>\n<blockquote>\n<h2>3.0.3</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>66834e4: feat: add instrumentation to address error rates</li>\n</ul>\n<h2>3.0.2</h2>\n<h3>Patch Changes</h3>\n<ul>\n<li>79529d7: fix: resolve url.parse deprecation warning for webhook\ntechniques</li>\n</ul>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/45a88b9581bfab2566dc881e2cd66d334e621e2c\"><code>45a88b9</code></a>\nchore: release</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1c0bcf08feaa559a9bcfcc249184e13b136ffa55\"><code>1c0bcf0</code></a>\nchore: release (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/606\">#606</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/66834e4b0cad4cbf09ca680587ad8af71d615d4b\"><code>66834e4</code></a>\nfeat: add instrumentation to address error rates (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/600\">#600</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0fe0f902b9f8da107ca0e1314a388c0f57e20d48\"><code>0fe0f90</code></a>\nbuild(deps): bump <code>@​actions/github</code> from 9.0.0 to 9.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/605\">#605</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c5e70597945c255539c5218d4178ed3c7d8188be\"><code>c5e7059</code></a>\nbuild(deps): bump <code>@​slack/web-api</code> from 7.15.0 to 7.15.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/604\">#604</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/0325526875571a27abcfd2b302453a90871abbff\"><code>0325526</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 2.4.10 to 2.4.13\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/601\">#601</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/900cd3e6fa9d6eacd8a5512ecff230d08e65aec7\"><code>900cd3e</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.12.0 to 24.12.2\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/603\">#603</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/53fdcffeb6e4d34cbdf3276f7beadb0ecc7c9fcd\"><code>53fdcff</code></a>\nbuild(deps): bump <code>@​actions/core</code> from 3.0.0 to 3.0.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/602\">#602</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/26856cc7fb2c1c2951483645f5fdc3643dbe96eb\"><code>26856cc</code></a>\nbuild(deps): bump slackapi/slack-github-action from 3.0.1 to 3.0.2 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/596\">#596</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/feba1e29702383a5a3cd5136af0559ba10859b04\"><code>feba1e2</code></a>\nci: skip publish step if no release is needed (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/599\">#599</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v3.0.1...v3.0.3\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=3.0.1&new-version=3.0.3)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2026-05-06T14:58:44Z",
          "tree_id": "8619b9eaaf71a7012b9095f2120b105979f5d7ac",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1ffbafad9cfbb01715e549665ea74009f896e5c3"
        },
        "date": 1778087939702,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 827.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 489.75,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 432.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 54.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 39.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 62.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 19.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 36.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 399,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 304.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 301.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 303.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 444.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 234.75,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipnd@amazon.co.uk",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "daa8f977c3c98cebf13d41e121746f93479c963f",
          "message": "Add requester process' PID to file system logs (#1718)\n\nAdd requester's PID to Filesystem logs.\nIt also adds an entry point \"New request\" log to all the (supported)\nfilesystem methods as a proxy for tracking incoming requests at FUSER.\n\nThis makes it easier to trace requests dispatched to Mountpoint,\nespecially during workflows using multiple customer processes to make\nrequests concurrently for the same inode(s).\n\nAdditionally, the commit adds/re-orders some other fields in the logs\n(for a few FS methods) to reattain a consistent order of logging request\nparameters.\n\nSample log:\n```\n2025-12-04T14:56:23.330127Z DEBUG ThreadId(11) lookup{req=3 ino=1 name=\"._.\" pid=1860}:head_object{id=3 bucket=\"multinictesting-iad-benchmarksetupbucket07d0221d-jc1kskgzz2gx\" key=\"._.\"}: mountpoint_s3_client::s3_crt_client::head_object: new request\n```\n\nThe commit also does some minor refactoring to name unused method\nparameters more consistent and adhering to Rust guidelines.\n\n### Does this change impact existing behavior?\nNo, only (warn-level and higher) logging change.\nNo breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo, and no.\nLogging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2026-05-07T13:16:23Z",
          "tree_id": "934fa2f4633d1902716efc40ff987db628102113",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/daa8f977c3c98cebf13d41e121746f93479c963f"
        },
        "date": 1778168160423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 837.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 573,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 447.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 59.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 71.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 52.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 21.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 23.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 397.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 48.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 397.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 47.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 303.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 302.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 383.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252,
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
          "id": "202d6d6b12cf9d803d93473423909948cd206858",
          "message": "Fix skip ranges in metrics tests (#1828)\n\nThe script testing metrics emissions tries to exercise a mix of\nsequential and \"random\" reads to then verify the expected metrics are\nrecorded. This change simplifies the skip pattern used to drive the\nreads and avoids moving past the size of the test file.\n\nUnrelated minor change: add a random pattern to the temporary folders in\nline with similar scripts.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-05-13T09:09:34Z",
          "tree_id": "7fc0312432154b49ec27cef34d82433bca472ed5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/202d6d6b12cf9d803d93473423909948cd206858"
        },
        "date": 1778671732102,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 820.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 505.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 432.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 22.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 57.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 42.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 60.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 31.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 22.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 49.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 298.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 20.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 303,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 302.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 398.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 252.75,
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
          "id": "a87aabd48c517e1fb19c955d48f82c5aa3dc66dd",
          "message": "Rework IAM documentation for directory buckets (#1455)\n\nReworks the section on IAM permissions to be more clearly split between\ngeneral purpose buckets and directory buckets.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>\nCo-authored-by: Daniel Carl Jones <danny@danielcarl.info>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-05-13T09:55:39Z",
          "tree_id": "24496115ba9faf4e672d543874516e9656056ab8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a87aabd48c517e1fb19c955d48f82c5aa3dc66dd"
        },
        "date": 1778674465753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 824.08984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 517.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 429.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 21.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 53.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 38.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 56.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 20.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 35.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 396.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 46.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 397.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 45.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 302.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 19.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 304.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 300.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 21,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 219,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}