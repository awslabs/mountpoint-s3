window.BENCHMARK_DATA = {
  "lastUpdate": 1738933104879,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "c189d7d1a48c13acbb856e4b31611232106660a9",
          "message": "Create file-system-benchmarks.rs and update fs_latency_bench.sh accordingly (#1213)\n\nCreation of a benchmarking binary for recreating and measuring the\nlatencies of real-world usage patterns of Mountpoint. This version\nincludes only a small file creation benchmark which measures the\nsequence of the file system operations: lookup, open, write (of one\nbyte), and flush. The latency measurement captures the total duration\nand is averaged multiple iterations to ensure representativeness.\n\nThe benchmarking binary is used in the `fs_latency_bench.sh` script and\nthe the new results are included in the final results of the script,\nultimately being added to the [benchmarking GitHub pages\ndashboard](https://awslabs.github.io/mountpoint-s3/dev/latency_bench/).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2025-01-14T13:36:33Z",
          "tree_id": "7fc207a2608b04b9c88b0796953c93eaba7ffa50",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c189d7d1a48c13acbb856e4b31611232106660a9"
        },
        "date": 1736868937675,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3486.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3313.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 344.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3215.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3290.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19260.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3420.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3440.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3283.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3268.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.53515625,
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
          "id": "89df75f3ac099568b8632d75abe263623e22d020",
          "message": "Increment version numbers for next release and update guidance (#1229)\n\nSet up new guidance for incrementing version numbers and implement it\nfor Mountpoint and the client crates.\n\nUnder the new guidance, the patch version will be incremented\nimmediately after releasing Mountpoint or publishing the crates, so that\ndevelopment on `main` continues under a new provisional version.\nWhen new features / breaking changes are introduced, the version number\nwill be contextually incremented as the changes are documented in the\nchangelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-14T15:10:01Z",
          "tree_id": "543fb3097f7732075ebbebb096ce117ada5d5055",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89df75f3ac099568b8632d75abe263623e22d020"
        },
        "date": 1736874595254,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3475.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3418.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3374.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3284.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21297.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3286.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3351.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3362.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13071.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.5625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iisaev@amazon.co.uk",
            "name": "Isaev Ilya",
            "username": "IsaevIlya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dd8b881cbcc24ea7132d94a3d816941d24d1611e",
          "message": "Update CRT submodules to latest releases (#1230)\n\nUpdate CRT submodules to latest releases\n\n<details>\n  <summary>Full CRT changes</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common fadfef4..7a6f5df:\n  > Fix dependency build failure on old cmake versions (#1176)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 337155f..1c80418:\n  > Improve Copy Operation by taking the Source URI (#482)\n  > Auto - Update S3 Ruleset & Partition (#483)\n  > Fix CI for GCC-13 on Ubuntu-18  (#479)\n  > [s3_client]: retry on failed TLS negotiation (#478)\n  > [s3_meta_request]: Retry on ExpiredToken (#472)\n  > Remove Extra Platform Info That Is Not Used (#475)\n  > Respect checksum header over settings from options (#474)\n  > Add full object checksum callback (#473)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ce09f79..1ae8664:\n  > Update Config File Parsing Logic to Parse Services Section (#51)\n  > Switch CI to use Roles (#49)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 5982853..697acc6:\n  > Prepare release v1.42.0 (#2094)\n  > alignas(16) unsupported w/ GCC 7.2 for ARM32 (#2086)\n  > Update ML-KEM's internal header files to use unique include guards (#2078)\n  > Provide FIPS_is_entropy_cpu_jitter() (#2088)\n  > CMake, use 'NOT WIN32' instead of 'UNIX' (#2075)\n  > Only need libunwind for testing (#2093)\n  > Add more logging for SSL_ERROR_SYSCALL errors in bssl_shim.cc (#2079)\n  > Add more test coverage for Ruby/OpenSSL gem (#2085)\n  > aws-lc-rs scripts now use nightly (#2087)\n  > ML-DSA unique names (#2072)\n  > Fix python tests for upstream PR 128036 (#2080)\n  > Remove algorithms from testmodulewrapper that are now used in the real modulewrapper (#2069)\n  > Fix tpm2-tss CI job (#2076)\n  > [EC] ec_nistp P-256 C scalar_mul_{base|public} (#2033)\n  > No PR license statement check on a merge (#2074)\n  > Migrate 1st batch of CI jobs to CodeBuild (#2067)\n  > Ensure PQDSA test suite has length checks on input signatures and public keys (#2062)\n  > Fix CI for aws-lc-rs (#2073)\n  > Upstream merge 2024 12 13 (#2060)\n  > Modified posix builds to enable dilithium by default (#2034)\n  > Extend documentation for basic BN_foo functions (#2066)\n  > Add PKCS7_print_ctx as a no-op (#2064)\n  > Update BoringSSL benchmark to use C++17 (#2063)\n  > Prune hanging instances longer than 2 hours (#2061)\n  > Add fuzz testing for PKCS7_verify (#2051)\n  > [EC] Use s2n-bignum's modular inversion for P-256/384/521 (#2057)\n  > Fuzzing PKCS7 encrypted inputs (#2027)\n  > Add integration script and CI for ruby 3.1 and 3.2 (#1563)\n  > Bring in testing changes from upstream commit 5ee4e95 (#2048)\n  > [EC] P-256/384/521 s2n-bignum scalar multiplication (#2036)\n  > Use older image with gcc-13 for alpine linux ci (#2054)\n  > Just use releasecheck with tcpdump ci (#2055)\n  > Address fips hash using adrp instead of adr to increase reach (#2053)\n  > Prepare release 1.41.1 (#2052)\n  > s2n-bignum update 2024-12-10 (#2050)\n  > Fix RSAZABI test and enable IFMA based RSA on Windows (#1869)\n  > Upstream merge 2024 12 02 (#2030)\n  > Update FIPS v3.0 draft security policy (#2047)\n  > Switch ML-DSA to use AWS-LC SHA3 (#2001)\n  > Added FIPS 204 documentation, cleanse intermediate values (#2017)\n  > Link to NIST website (#2045)\n  > Prevent accidental null dereference (#2046)\n  > Deprecate recently added PKCS7 functions (#2039)\n  > Allow build on Solaris (#2035)\n  > Use SHA256 as default digest for OCSP signing (#2038)\n  > Add blowfish names to EVP_CIPHER API (#2041)\n  > Initialize arrays as arrays (#2042)\n  > Add AWS-LC-FIPS v3.0 policy docs (#2043)\n  > Implement PKCS7_verify, update PKCS7_sign (#1993)\n  > Move PQDSA to FIPS module (#2032)\n  > Only abort when RSA PWCT fail in FIPS (#2020)\n  > Revert \"Trim some redundant Arm feature detection files\" (#1979)\n  > Fix perl handling of paths w/ spaces (#2005)\n  > Upstream merge 2024 11 18 (#2012)\n  > Fix CI issues with ML-DSA (#2031)\n  > strdup is not C99 (#2008)\n  > Add ML-DSA-44 and ML-DSA-87 to PQDSA API (#2009)\n  > Coverity fixes for P173127397 (#2014)\n  > Fix strongSwan CI (#2028)\n  > Ran minimise_corpora.sh (#2024)\n  > Expose BN_set_flags as a no-op (#2021)\n  > Fix segfault in PKCS7 test (#2025)\n  > Update aws-lc-nginx.patch for nginx v1.27.3 (#2023)\n  > Fix python 3.13 patch (#2026)\n  > Allow constructed strings in BER parsing (#2015)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 493b771..2e79e7e:\n  > refactor(bench): remove historical benchmarks (#4940)\n  > fix: pem parsing detection of last cert errors (#4908)\n  > docs: specify s2n_blob growable conditions (#4943)\n  > chore(bindings): move tokio examples to dedicated folder (#4954)\n  > chore: fix GHA for merge-queue (#4973)\n  > chore(binding): release 0.3.8 (#4969)\n  > (chore): Installs Nix in AL2023 Buildspec (#4934)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 5 updates (#4961)\n  > feat(s2n-tls-hyper): Add support for negotiating HTTP/2 (#4924)\n  > tests: allow TLS1.2 with RSA-PSS certs in integ tests (#4949)\n  > ci: update CRT test ubuntu version to ubuntu24 (#4964)\n  > feat(bindings): enable application owned certs (#4937)\n  > ci: batch dependabot updates (#4959)\n  > ci(refactor): deprecate Omnibus (#4953)\n  > build(deps): bump actions/cache from 2.1.4 to 4.1.2 in /.github/workflows (#4928)\n  > build(deps): bump peaceiris/actions-gh-pages from 3 to 4 in /.github/workflows (#4921)\n  > build(deps): bump cross-platform-actions/action from 0.23.0 to 0.26.0 in /.github/workflows (#4951)\n  > build(deps): bump github/codeql-action from 2 to 3 in /.github/workflows (#4917)\n  > ci: add change directory to third-party-src logic (#4950)\n  > feat: TLS1.2 support for RSA-PSS certificates (#4927)\n  > feat: feature probe S2N_LIBCRYPTO_SUPPORTS_ENGINE (#4878)\n  > test(bindings): run unit tests under asan (#4948)\n  > ci(refactor): remove ASAN from Omnibus and GeneralBatch (#4946)\n  > ci(refactor): remove fuzz tests from Omnibus (#4945)\n  > refactor: add a s2n_libcrypto_is_openssl() helper function (#4930)\n  > fix(s2n-tls-hyper): Add proper IPv6 address formatting (#4938)\n  > ci: add openssl-1.0.2-fips to fuzz test (#4942)\n  > ci(refactor): remove Valgrind checks from omnibus and generalBatch (#4913)\n  > fix(bindings): address clippy issues from 1.83 (#4941)\n  > test: pin tests to explicit TLS 1.2/TLS 1.3 policy (#4926)\n  > (chore): Fixes team-label github action (#4935)\n  > chore: add new team member (#4939)\n  > upgrade cmake version to 3.9 (#4933)\n  > ci: add awslc-fips and openssl-1.0.2-fips to valgrind (#4912)\n  > chore(bindings): feature gate network testsa and relax http status assertions (#4907)\n  > chore: Ocsp timeout adjustment (#4866)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.0.1 to 4.0.2 in /.github/workflows (#4892)\n  > test: expand s2n_record_read testing to both TLS1.3 and TLS1.2 (#4903)\n  > test: pin optional client auth test to a TLS 1.2 policy (#4914)\n  > feat: add alert mappings for certificate errors (#4919)\n  > doc: document generating bindings with prebuilt libs2n (#4872)\n  > ci: Move kTLS test out of GeneralBatch (#4904)\n  > build(deps): bump actions/checkout from 3 to 4 in /.github/workflows (#4888)\n  > test(s2n-tls-hyper): matching on s2n-tls error (#4906)\n  > build(deps): bump nixbuild/nix-quick-install-action from 21 to 29 in /.github/workflows (#4890)\n  > build(deps): bump JulienKode/team-labeler-action from 0.1.1 to 1.3 in /.github/workflows (#4889)\n  > tests: pin tests to a numbered TLS1.2 policy (#4905)\n  > test: remove load system certs functionality for s2n_default_tls13_config (#4897)\n  > doc: add information about s2n-tls software architecture (#4868)\n  > ci: grant dependabot status update permissions (#4898)\n  > ci: fixes for cargo audit (#4895)\n  > test(s2n-tls-hyper): Add localhost http tests (#4838)\n  > test: add rust well-known-endpoint tests (#4884)\n  > chore: bindings release 0.3.7 (#4894)\n  > chore: add a cargo audit action (#4862)\n  > ci: add open fds valgrind check (#4851)\n```\n\n</details>\n\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Ilya Isaev <iisaev@amazon.com>\nCo-authored-by: Ilya Isaev <iisaev@amazon.com>",
          "timestamp": "2025-01-14T17:18:13Z",
          "tree_id": "be69cf749288d2a48af7a7895c984db1122832be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/dd8b881cbcc24ea7132d94a3d816941d24d1611e"
        },
        "date": 1736882204053,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3499.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3380.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3268.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3413.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 242.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16450.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3469.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3483.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3236.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3388.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.65625,
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
          "id": "d008177a6cb6cb2e8a56c902d72570ce4e7cc3d3",
          "message": "Add detailed rustdoc to reftests (#1232)\n\nThe reference tests for Mountpoint can be quite complex, especially for\nthose unfamiliar both with the tests themselves or the idea of\nreference-based testing.\n\nThis change adds more detailed rustdoc with the goal to ramp up new\nreaders with the reftests, give an overview of what the tests are doing,\nand point the reader to resources for learning more.\n\n### Does this change impact existing behavior?\n\nNo, all code documentation changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, code doc changes only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-15T10:27:06Z",
          "tree_id": "8bf6c5eec8592323b8af30b3359bbfdc075127be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d008177a6cb6cb2e8a56c902d72570ce4e7cc3d3"
        },
        "date": 1736943910804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3081.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 320.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3251.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3300.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3207.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27012.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3231.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3441.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3017.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3194.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.44921875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "iisaev@amazon.co.uk",
            "name": "Isaev Ilya",
            "username": "IsaevIlya"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ace3093f899257dfd1b9c074b75883749595429c",
          "message": "Add source uri to headers for COPY request (#1228)\n\nThis changes is to address gap in supporting buckets with dots in the\nname for COPY requests.\nFirst encountered in s3-torch-connector\nhttps://github.com/awslabs/s3-connector-for-pytorch/issues/295\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Ilya Isaev <iisaev@amazon.com>\nSigned-off-by: Isaev Ilya <iisaev@amazon.co.uk>\nCo-authored-by: Ilya Isaev <iisaev@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-01-16T13:11:30Z",
          "tree_id": "e29fd95b60737addbbdc3eb51e8326e96c17fbfe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace3093f899257dfd1b9c074b75883749595429c"
        },
        "date": 1737040255355,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3339.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3261.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3061.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3174.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28164.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3351.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3349.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3318.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3522.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.0859375,
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
          "id": "ef20898e36247aa358417da999efeb65e2fe195f",
          "message": "Customise benchmark page (#1233)\n\nCurrently the benchmark page\n[loads](https://github.com/awslabs/mountpoint-s3/blob/gh-pages/dev/bench/index.html#L107)\nthe chart.js library from CDN, this PR changes that and adds CSP to\nensure that no other resources are loaded from external locations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-17T11:22:40Z",
          "tree_id": "73f091cf39308090ed070559383a6161c84dc60a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef20898e36247aa358417da999efeb65e2fe195f"
        },
        "date": 1737127370140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3386.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 342.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3338.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3332.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3416.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34182.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3453.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3370.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3139.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3375.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.98046875,
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
          "id": "228d598ff46830e56f19be1c4d3c85069d6321b3",
          "message": "Publish client crates (#1237)\n\nUpdate changelogs for the client crates to prepare for publication. \n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-20T14:07:56Z",
          "tree_id": "3581193e2c158506008c692ca1658a1118846022",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/228d598ff46830e56f19be1c4d3c85069d6321b3"
        },
        "date": 1737389332108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3561.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3569.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3597.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3468.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 14358.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3524.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3096.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 243.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3546.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3543.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.515625,
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
          "id": "d199f672d84c899cf68033701469761d156196aa",
          "message": "Increment crates version numbers for next release (#1238)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-21T11:02:46Z",
          "tree_id": "2844ebefdbb9cca96321c6708e6e6066bb78132b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d199f672d84c899cf68033701469761d156196aa"
        },
        "date": 1737464555782,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3205.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3375.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2891.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3340.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32799.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3319.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3490.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 238.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3264.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3314.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.265625,
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
          "id": "be2c1b7b0a3ccf8e3eee35a6fd9d7e16e96985be",
          "message": "Add github variables for the expected bucket owner test (#1239)\n\nAdd github variables required to run [the expected bucket owner\ntest](https://github.com/vladem/mountpoint-s3/commit/f55fdd08d9c2ce19cf8088aff44d02e6b38a87b5#diff-5d95e5b27d893af8129dba108e2a7da3bad284b9fa093abbe746f2f3b7eb1bce)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-22T14:32:08Z",
          "tree_id": "2dd482f564d4c7da3fb7095daa1c801a9884b929",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be2c1b7b0a3ccf8e3eee35a6fd9d7e16e96985be"
        },
        "date": 1737563385351,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3338.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3278.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3399.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3399.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26533.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3100.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3236.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3299.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3347.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 233.9375,
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
          "id": "814c5c707bd4180b1ba33d23275c4bb893bd84f2",
          "message": "Update CRT submodules to latest releases (#1242)\n\nUpdate the CRT to the latest releases.\n\nThis change also updates the exclude list, primarily due to one of the\ntest files being replaced by a compressed (but still large) file:\nhttps://github.com/aws/aws-lc/pull/2123/\n\nThis change pulls in a bug fix\n(https://github.com/awslabs/aws-c-auth/pull/259/), addressing\nhttps://github.com/awslabs/mountpoint-s3/issues/1207.\n\n### Does this change impact existing behavior?\n\nOne bug fix is included in CRT changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log entry added for the CRT fix. It is a bug fix, so patch\nversion bump to `mountpoint-s3-client` remains appropriate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-23T00:32:37Z",
          "tree_id": "b72914763f4527bc2013976b2a10445e812b765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814c5c707bd4180b1ba33d23275c4bb893bd84f2"
        },
        "date": 1737599596501,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3173.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3087.3046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3293.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3216.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 209.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26944.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3186.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3317.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3296.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3099.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.4765625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66806474+ericjheinz@users.noreply.github.com",
            "name": "ericjheinz",
            "username": "ericjheinz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "76c36003006246811a584f648d902432bb70d7df",
          "message": "Update S3ClientConfig to support configurable EventLoop thread count (#1240)\n\nFor our use case, we run many mountpoint-s3 clients on a single machine\nand want to restrict the number of threads each client uses in order to\nreduce heap fragmentation and CPU contention.\n\n### Does this change impact existing behavior?\n\nNo, this only allows for overriding the default value.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there are no breaking changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Eric Heinz <eheinz@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Eric Heinz <eheinz@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-24T11:09:35Z",
          "tree_id": "9aff381d9cb70d94a6fe122de28606f85d5aee64",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/76c36003006246811a584f648d902432bb70d7df"
        },
        "date": 1737724105397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3322.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3408.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3408.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3381.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22023.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3252.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3444.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3246.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13803.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 241.5390625,
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
          "id": "73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663",
          "message": "Add `second_account_tests` feature flag (#1243)\n\nAdd and enable the feature flag `second_account_tests` in the selected\nworkflow for [the\ntest](https://github.com/awslabs/mountpoint-s3/pull/1241/files).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T14:51:25Z",
          "tree_id": "350f93733f575a6746944729e813834e3f945f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663"
        },
        "date": 1737737588938,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3321.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3261.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3608.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3244.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 250.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33918.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3287.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3424.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3310.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14053.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.7734375,
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
          "id": "b54596424d2aced7fd4548a9dab47f5deb04a8dd",
          "message": "Add expected bucket owner test for shared XZ cache (#1241)\n\nAdd the expected bucket owner test. The test attempts to use a bucket in\nanother AWS account as a cache and verifies that:\n\n- write to the cache is not done if the expected bucket owner check is\nenabled\n- write to the cache is done if the check is disabled\n- write to the cache is done if the cache bucket belongs to the expected\naccount\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T16:54:20Z",
          "tree_id": "7bbdc36dee746459682a6351b404c67543af1be1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b54596424d2aced7fd4548a9dab47f5deb04a8dd"
        },
        "date": 1737744668080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3331.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3558.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3398.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 255.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3397.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 240.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28300.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3341.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3511.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3057.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3486.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.4453125,
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
          "id": "2089a3ba642848795ae23abdc4f129c4df41fafe",
          "message": "Add support for CRC64-NVME checksum algorithm (#1235)\n\nThis change adds support for the CRC64-NVME checksum algorithm when\nusing relevant operations in `mountpoint-s3-client` and when appending\nto existing objects through Mountpoint (using `--incremental-upload`\nmode).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T11:39:26Z",
          "tree_id": "88df3e48f0124a259d382f52d18e2942be629b5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2089a3ba642848795ae23abdc4f129c4df41fafe"
        },
        "date": 1737985271914,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3344.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 327.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3382.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3351.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3342.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20135.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3058.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 362.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3353.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3449.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3224.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.12890625,
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
          "id": "4924fa966b6e763165146b6268fc9fb436273e27",
          "message": "Add to cache read failure log 'falling back to S3' (#1245)\n\nWhen a cache read fails, there have been open questions in support cases\nabout if that will have then failed the whole read or asked S3. This is\na simple change to address that ambiguity.\n\n### Does this change impact existing behavior?\n\nSimple logging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, simple log content change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T12:30:35Z",
          "tree_id": "6e295730e5e461af09fd687549099e648d776247",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4924fa966b6e763165146b6268fc9fb436273e27"
        },
        "date": 1737988147031,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3354.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2990.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3332.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3499.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24124.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3451.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3325.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3384.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3294.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.53125,
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
          "id": "fed028dc69c48a1859cf3a27f185b277234d58a7",
          "message": "Export missing types in mountpoint-s3-client API (#1248)\n\nThe S3 client API in `mountpoint-s3-client` used many types directly\nfrom `mountpoint-s3-crt`. This change makes sure that all types used in\nthe API are re-exported in `mountpoint-s3-client`, so that users do not\nneed to depend on `mountpoint-s3-crt` directly.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it includes an entry in the `client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-31T10:02:31Z",
          "tree_id": "73271d036ccf89bfc837e55f2209b2fc62ffc730",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fed028dc69c48a1859cf3a27f185b277234d58a7"
        },
        "date": 1738325156478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3420.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3420.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 350.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3349.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 256.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3397.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26447.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3270.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3123.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3269.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3327.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 227.53515625,
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
          "id": "a7ed6b7efefc8055cb15e3474790934759eaa25c",
          "message": "Publish client crates (#1252)\n\nUpdate changelogs for the client crates to prepare for publication.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T10:09:22Z",
          "tree_id": "fa32465c46876c22bb8b704422659fe91b10aa26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7ed6b7efefc8055cb15e3474790934759eaa25c"
        },
        "date": 1738584458772,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3147.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3272.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3481.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3356.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 228.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26429.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3344.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3132.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 238.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3192.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3361.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.25,
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
          "id": "8075c204939c66b8a5732a27bb00562243dfa8df",
          "message": "Increment crates version numbers for next release (#1253)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T11:03:12Z",
          "tree_id": "0c6673e0b1dd662d816fe5d0e593341b6ff7e10a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8075c204939c66b8a5732a27bb00562243dfa8df"
        },
        "date": 1738587630745,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3072.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3269.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3283.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3347.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25020.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3224.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 4505.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3368.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3376.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.625,
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
          "id": "2bf0385cf026539bb52e59473683d1c1c84e3653",
          "message": "Update CRT submodules to latest releases (#1255)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* S3Express CreateSession Allowlist Headers\n([awslabs/aws-c-s3#492](https://github.com/awslabs/aws-c-s3/pull/492))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5bc67797..b513db4b:\n  > A bunch of CMake fixes (#258)\n  > Add Account Id to Credentials (#260)\n  > Skip Transfer-Encoding from signing (#261)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fbbe2612..7299c6ab:\n  > Fix Findcrypto.cmake (#205)\n  > A bunch of CMake fixes (#203)\n  > Switch CI to use roles (#202)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7a6f5df2..0e7637fa:\n  > A bunch of CMake fixes (#1178)\n  > Fix heap overflow on uri parsing (#1185)\n  > (take 2) Detect when AVX is disabled via OSXSAVE (#1184)\n  > Fixup IPv6 validation logic (#1180)\n  > Detect when AVX is disabled via OSXSAVE (#1182)\n  > proof_ci.yaml must use latest upload-artifact (#1183)\n  > change PR template to ask for clearer wording (#1177)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression c6c1191e..f951ab2b:\n  > A bunch of CMake fixes (#72)\n  > Switch CI to use roles (#71)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#69)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http fc3eded2..590c7b59:\n  > A bunch of CMake fixes (#497)\n  > Fix CI for GCC-13 on Ubuntu-18  (#496)\n  > Switch CI to use roles (#494)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io fcb38c80..3041dabf:\n  > A bunch of CMake fixes (#701)\n  > Event Loop & Socket Type Multi-Support (#692)\n  > fix typo in log message (#702)\n  > Fix CI for GCC-13 on Ubuntu-18 (#700)\n  > Switch CI to use roles (#698)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 a3b401bf..6eb8be53:\n  > A bunch of CMake fixes (#480)\n  > S3Express CreateSession Allowlist Headers (#492)\n  > Auto - Update S3 Ruleset & Partition (#491)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 1ae8664f..ba6a28fa:\n  > A bunch of CMake fixes (#50)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 3e4101b9..fb8bd0b8:\n  > A bunch of CMake fixes (#101)\n  > Switch CI to use roles (#100)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc ffd6fb71..138a6ad3:\n  > Prepare AWS-LC v1.44.0 (#2153)\n  > Fix issue with ML-DSA key parsing (#2152)\n  > Add support for PKCS7_set/get_detached (#2134)\n  > Prepare Docker image for CI integration jobs (#2126)\n  > Delete OpenVPN mainline patch from our integration build (#2149)\n  > SHA3/SHAKE Init Updates via FIPS202 API layer (#2101)\n  > Support keypair calculation for PQDSA PKEY (#2145)\n  > Optimize x86/aarch64 MD5 implementation (#2137)\n  > Check for MIPSEB in target.h (#2143)\n  > Ed25519ph and Ed25519ctx Support (#2120)\n  > Support for ML-DSA public key generation from private key (#2142)\n  > Avoid mixing SSE and AVX in XTS-mode AVX512 implementation (#2140)\n  > Remove remaining support for Trusty and Fuchsia operating systems (#2136)\n  > ACVP test harness for ML-DSA (#2127)\n  > Minor symbols to work with Ruby's mainline (#2132)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-05T16:30:06Z",
          "tree_id": "19b94c8888edb337bb0a9962ee13e8ba88fd29cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2bf0385cf026539bb52e59473683d1c1c84e3653"
        },
        "date": 1738780339126,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3367.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3130.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3245.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 273.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3267.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 207.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23578.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3340.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3269.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3334.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10154.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 209.81640625,
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
          "id": "98fb461f25aa30be3ee8c61ecf278a651ec2733e",
          "message": "Add an Express bucket with KMS default SSE to the CI (#1256)\n\nAddition of this bucket to the CI will enable us to test [the\ncase](https://github.com/vladem/mountpoint-s3/commit/0bab01c5037c80f0c245ebd881276ad8652818c4#diff-280514ac541c555aa616d3bfa819ad7cc7a23c372e9c37d9fc6c62477e63503dR145),\nwhen KMS encryption is enforced on a cache xz bucket.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-07T10:59:07Z",
          "tree_id": "ba5d77b35187c3962fd42f9c5b57f1223102c658",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98fb461f25aa30be3ee8c61ecf278a651ec2733e"
        },
        "date": 1738933104830,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3273.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3327.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3510.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3040.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34347.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3494.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3198.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 221.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3279.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10967,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.64453125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}