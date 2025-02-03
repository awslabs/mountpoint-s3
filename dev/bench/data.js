window.BENCHMARK_DATA = {
  "entries": {
    "Throughput Benchmark (S3 Standard)": [
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
          "id": "5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7",
          "message": "Use ``prop_filter`` to force directory treenode (#1227)\n\nOn my machine, proptest generation has slowed down (now ~40 seconds to\nrun 30 proptests, before ~16 seconds) significantly. This change\n(hopefully) keeps the behaviour identical and restores the speed we\nroughly had before.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-14T12:20:54Z",
          "tree_id": "8a43e933f5957b65c5f0b3b01acf857c214af6d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7"
        },
        "date": 1736865447322,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4893.92900390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4254.1861328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5586.996289062499,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.27431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.29150390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.57998046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.6923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.3091796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.52646484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5935.54345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.20185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5065.2365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.28828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1932.15791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.5552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1651.98271484375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1364.74208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.51533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1478.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1151.1708984375,
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
          "id": "c189d7d1a48c13acbb856e4b31611232106660a9",
          "message": "Create file-system-benchmarks.rs and update fs_latency_bench.sh accordingly (#1213)\n\nCreation of a benchmarking binary for recreating and measuring the\nlatencies of real-world usage patterns of Mountpoint. This version\nincludes only a small file creation benchmark which measures the\nsequence of the file system operations: lookup, open, write (of one\nbyte), and flush. The latency measurement captures the total duration\nand is averaged multiple iterations to ensure representativeness.\n\nThe benchmarking binary is used in the `fs_latency_bench.sh` script and\nthe the new results are included in the final results of the script,\nultimately being added to the [benchmarking GitHub pages\ndashboard](https://awslabs.github.io/mountpoint-s3/dev/latency_bench/).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2025-01-14T13:36:33Z",
          "tree_id": "7fc207a2608b04b9c88b0796953c93eaba7ffa50",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c189d7d1a48c13acbb856e4b31611232106660a9"
        },
        "date": 1736869820207,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4878.776660156251,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4537.67978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5690.6005859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.50791015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.1748046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.55517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.414453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.41962890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.37177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.72275390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.71123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5771.79482421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5057.64091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.27353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1758.79130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.871875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1353.524609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1375.6294921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.42958984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1404.86162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 989.38837890625,
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
          "id": "89df75f3ac099568b8632d75abe263623e22d020",
          "message": "Increment version numbers for next release and update guidance (#1229)\n\nSet up new guidance for incrementing version numbers and implement it\nfor Mountpoint and the client crates.\n\nUnder the new guidance, the patch version will be incremented\nimmediately after releasing Mountpoint or publishing the crates, so that\ndevelopment on `main` continues under a new provisional version.\nWhen new features / breaking changes are introduced, the version number\nwill be contextually incremented as the changes are documented in the\nchangelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-14T15:10:01Z",
          "tree_id": "543fb3097f7732075ebbebb096ce117ada5d5055",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89df75f3ac099568b8632d75abe263623e22d020"
        },
        "date": 1736875592950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4927.50634765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4454.0400390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5670.2375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.6330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.5078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.8546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.29814453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.8533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.33662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.61064453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5917.241015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.63896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4931.799609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.2087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 739.19560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.78251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.2861328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1291.2603515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1558.84453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1012.19814453125,
            "unit": "MiB/s"
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
        "date": 1736883122621,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4928.25966796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4397.06796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5612.88837890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.153125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.36953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.30947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.41630859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.50009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.05869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.649609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.771875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5761.878125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.96826171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4993.573828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.48115234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1953.45732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.195703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1490.605859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1318.130859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.1865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1436.72138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1003.15078125,
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
          "id": "d008177a6cb6cb2e8a56c902d72570ce4e7cc3d3",
          "message": "Add detailed rustdoc to reftests (#1232)\n\nThe reference tests for Mountpoint can be quite complex, especially for\nthose unfamiliar both with the tests themselves or the idea of\nreference-based testing.\n\nThis change adds more detailed rustdoc with the goal to ramp up new\nreaders with the reftests, give an overview of what the tests are doing,\nand point the reader to resources for learning more.\n\n### Does this change impact existing behavior?\n\nNo, all code documentation changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, code doc changes only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-15T10:27:06Z",
          "tree_id": "8bf6c5eec8592323b8af30b3359bbfdc075127be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d008177a6cb6cb2e8a56c902d72570ce4e7cc3d3"
        },
        "date": 1736944864259,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4874.750390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4485.06083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5694.17158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.6171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.28427734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.840625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.24921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.43203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.19990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.58330078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.65986328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5959.8640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.31337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5042.23857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 257.3208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1843.2935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.94619140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1599.3689453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1370.47548828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.6173828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1470.96943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1063.29462890625,
            "unit": "MiB/s"
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
        "date": 1737041378676,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4872.23271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4446.51796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5661.6173828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.0474609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.2923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.65654296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.308984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.682421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.16494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.4306640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.53349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 4501.832421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.1609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4713.13349609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.57626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1799.20791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.08642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1426.73359375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1241.353125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.96015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1706.043359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 979.04482421875,
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
          "id": "ef20898e36247aa358417da999efeb65e2fe195f",
          "message": "Customise benchmark page (#1233)\n\nCurrently the benchmark page\n[loads](https://github.com/awslabs/mountpoint-s3/blob/gh-pages/dev/bench/index.html#L107)\nthe chart.js library from CDN, this PR changes that and adds CSP to\nensure that no other resources are loaded from external locations.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-17T11:22:40Z",
          "tree_id": "73f091cf39308090ed070559383a6161c84dc60a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ef20898e36247aa358417da999efeb65e2fe195f"
        },
        "date": 1737121076693,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4897.3404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4493.5365234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5552.547265624999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.17685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.3708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 12.080078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.85146484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.38720703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.14755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.066015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5904.943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.84150390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5013.34736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.71748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1999.92373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.08955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1388.54765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1313.14033203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.02666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1727.31142578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.67021484375,
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
          "id": "228d598ff46830e56f19be1c4d3c85069d6321b3",
          "message": "Publish client crates (#1237)\n\nUpdate changelogs for the client crates to prepare for publication. \n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-20T14:07:56Z",
          "tree_id": "3581193e2c158506008c692ca1658a1118846022",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/228d598ff46830e56f19be1c4d3c85069d6321b3"
        },
        "date": 1737390294581,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4975.6185546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4324.17041015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5754.346289062501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.75595703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.746875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 13.01484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.84033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.4046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.2775390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.0896484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.67412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 6067.786328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.79833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5089.322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 257.44306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1718.803515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.8732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1738.17744140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.7103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.65927734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1836.35380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 987.2486328125,
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
          "id": "d199f672d84c899cf68033701469761d156196aa",
          "message": "Increment crates version numbers for next release (#1238)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-21T11:02:46Z",
          "tree_id": "2844ebefdbb9cca96321c6708e6e6066bb78132b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d199f672d84c899cf68033701469761d156196aa"
        },
        "date": 1737465463700,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4967.443554687499,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4484.7798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5766.80302734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 12.06591796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.5373046875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.57216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.7453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 3.059765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.2548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.7953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.737109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5941.44580078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.42451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5013.9412109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 256.42607421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1986.071484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.59375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.6712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1254.56259765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.95380859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1657.6794921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1014.91474609375,
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
          "id": "be2c1b7b0a3ccf8e3eee35a6fd9d7e16e96985be",
          "message": "Add github variables for the expected bucket owner test (#1239)\n\nAdd github variables required to run [the expected bucket owner\ntest](https://github.com/vladem/mountpoint-s3/commit/f55fdd08d9c2ce19cf8088aff44d02e6b38a87b5#diff-5d95e5b27d893af8129dba108e2a7da3bad284b9fa093abbe746f2f3b7eb1bce)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-22T14:32:08Z",
          "tree_id": "2dd482f564d4c7da3fb7095daa1c801a9884b929",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be2c1b7b0a3ccf8e3eee35a6fd9d7e16e96985be"
        },
        "date": 1737564390346,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4926.02802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4424.73388671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5657.17119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.7439453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.936328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.60732421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.54755859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.20068359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.07236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.50927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.45078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5878.36767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.46015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 3701.02109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.30595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1715.74052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.334375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1485.205859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1211.64111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.215234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1480.59775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1028.12119140625,
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
          "id": "814c5c707bd4180b1ba33d23275c4bb893bd84f2",
          "message": "Update CRT submodules to latest releases (#1242)\n\nUpdate the CRT to the latest releases.\n\nThis change also updates the exclude list, primarily due to one of the\ntest files being replaced by a compressed (but still large) file:\nhttps://github.com/aws/aws-lc/pull/2123/\n\nThis change pulls in a bug fix\n(https://github.com/awslabs/aws-c-auth/pull/259/), addressing\nhttps://github.com/awslabs/mountpoint-s3/issues/1207.\n\n### Does this change impact existing behavior?\n\nOne bug fix is included in CRT changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log entry added for the CRT fix. It is a bug fix, so patch\nversion bump to `mountpoint-s3-client` remains appropriate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-23T00:32:37Z",
          "tree_id": "b72914763f4527bc2013976b2a10445e812b765d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/814c5c707bd4180b1ba33d23275c4bb893bd84f2"
        },
        "date": 1737600452526,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4857.03515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4418.11865234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5562.861718749999,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.496875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.79365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.26689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.45517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.08681640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.480078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.48779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.4572265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5860.36904296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 245.9001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4917.20693359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.65517578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1799.443359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.78515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1408.1556640625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1245.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 61.20947265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1558.21708984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 968.81474609375,
            "unit": "MiB/s"
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
        "date": 1737725058117,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4913.82119140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4594.03828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5694.18564453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 11.50947265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.867578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.5892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 47.008203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.91923828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.1904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.43828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5878.76337890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.25458984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5048.136328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 253.67451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1983.20546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.459375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1453.8712890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1351.08076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 64.12841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1608.611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.99248046875,
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
          "id": "73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663",
          "message": "Add `second_account_tests` feature flag (#1243)\n\nAdd and enable the feature flag `second_account_tests` in the selected\nworkflow for [the\ntest](https://github.com/awslabs/mountpoint-s3/pull/1241/files).\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T14:51:25Z",
          "tree_id": "350f93733f575a6746944729e813834e3f945f1e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/73f9e7abaee93eb3557b4f48b4cdbfb5d40b0663"
        },
        "date": 1737738515578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5038.8453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4504.855078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5611.38203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.09111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.8263671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.80009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.632421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.60087890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.18525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.51904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.58125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5929.73759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.89228515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5000.278125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.19912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1962.49306640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.7484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1509.21923828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1359.45439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.815625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1494.6783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 996.2248046875,
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
          "id": "b54596424d2aced7fd4548a9dab47f5deb04a8dd",
          "message": "Add expected bucket owner test for shared XZ cache (#1241)\n\nAdd the expected bucket owner test. The test attempts to use a bucket in\nanother AWS account as a cache and verifies that:\n\n- write to the cache is not done if the expected bucket owner check is\nenabled\n- write to the cache is done if the check is disabled\n- write to the cache is done if the cache bucket belongs to the expected\naccount\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-01-24T16:54:20Z",
          "tree_id": "7bbdc36dee746459682a6351b404c67543af1be1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b54596424d2aced7fd4548a9dab47f5deb04a8dd"
        },
        "date": 1737745628834,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4800.48759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4319.31640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5700.275488281251,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.40751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.92119140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 10.673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.63154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.607421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.20810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.6326171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.61318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5986.23427734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.65068359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5002.40361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 251.7849609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1910.18671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.37109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1537.373046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1325.19287109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.24111328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1682.49697265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1001.90830078125,
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
          "id": "2089a3ba642848795ae23abdc4f129c4df41fafe",
          "message": "Add support for CRC64-NVME checksum algorithm (#1235)\n\nThis change adds support for the CRC64-NVME checksum algorithm when\nusing relevant operations in `mountpoint-s3-client` and when appending\nto existing objects through Mountpoint (using `--incremental-upload`\nmode).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T11:39:26Z",
          "tree_id": "88df3e48f0124a259d382f52d18e2942be629b5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2089a3ba642848795ae23abdc4f129c4df41fafe"
        },
        "date": 1737986176439,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4955.4955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4523.85390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5650.47177734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 8.98984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.045703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.14892578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.37861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.3880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.23134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.3986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 12.00546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5858.42802734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 257.27373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 5034.98271484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 257.0662109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1852.6138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.89384765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1411.6474609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1295.25361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.16748046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1747.16591796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 995.55810546875,
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
          "id": "4924fa966b6e763165146b6268fc9fb436273e27",
          "message": "Add to cache read failure log 'falling back to S3' (#1245)\n\nWhen a cache read fails, there have been open questions in support cases\nabout if that will have then failed the whole read or asked S3. This is\na simple change to address that ambiguity.\n\n### Does this change impact existing behavior?\n\nSimple logging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, simple log content change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-01-27T12:30:35Z",
          "tree_id": "6e295730e5e461af09fd687549099e648d776247",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4924fa966b6e763165146b6268fc9fb436273e27"
        },
        "date": 1737989147947,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4952.84599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4477.42265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5711.900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.478125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.1861328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 11.77431640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.21767578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.498828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 10.37734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.88974609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.8376953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5804.59208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.7158203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4955.92763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.22060546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1798.0845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.10048828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1526.463671875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1308.09404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.81513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1585.272265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1089.48525390625,
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
          "id": "b8338af6019cbe2cbecdccf2805edafefef6a766",
          "message": "Update cargo dependencies (#1234)\n\nUpdate dependencies by running `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-27T16:45:03Z",
          "tree_id": "73188134f639a747bc4599126dd3cd8d8451582b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8338af6019cbe2cbecdccf2805edafefef6a766"
        },
        "date": 1738004586888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4980.9486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4464.591601562501,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5638.62041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 10.21689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.385546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.83388671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 38.3353515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.7041015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.215234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.50751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.73828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5844.2990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 256.0154296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4908.18505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 254.017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1921.3853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 61.5625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1445.137890625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1312.07021484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.1939453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1441.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1026.49345703125,
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
          "id": "6c576d1a0257432a38ce0e49aa472918a47d7694",
          "message": "Use custom endpoint and region setting for all fork tests (#1249)\n\nSome of our fork tests did not set the custom endpoint for the binary,\nif this is provided. This change should fix all of them to use a custom\nendpoint and to set the region, if that is configured.\n\nDoes not need a changelog entry, as it only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-30T15:34:19Z",
          "tree_id": "1514115bf5d402099ef04421d19bba2b8c343529",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c576d1a0257432a38ce0e49aa472918a47d7694"
        },
        "date": 1738259489263,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 5005.2787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4515.7302734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5692.98154296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.81318359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 47.57099609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.48798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 45.7357421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.5634765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.0541015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 3.01533203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.6087890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5924.89208984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.67763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4899.1908203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 250.6998046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1766.59853515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 60.67236328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1421.95048828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1289.83056640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 62.167578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1627.89638671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1017.66064453125,
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
          "id": "fed028dc69c48a1859cf3a27f185b277234d58a7",
          "message": "Export missing types in mountpoint-s3-client API (#1248)\n\nThe S3 client API in `mountpoint-s3-client` used many types directly\nfrom `mountpoint-s3-crt`. This change makes sure that all types used in\nthe API are re-exported in `mountpoint-s3-client`, so that users do not\nneed to depend on `mountpoint-s3-crt` directly.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it includes an entry in the `client` changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-31T10:02:31Z",
          "tree_id": "73271d036ccf89bfc837e55f2209b2fc62ffc730",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fed028dc69c48a1859cf3a27f185b277234d58a7"
        },
        "date": 1738326003522,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4853.72431640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4365.7822265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5486.01162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.313671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.1166015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 8.917578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.034375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.42265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.26708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.24921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.67421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5718.53095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 255.3771484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4853.24404296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 252.264453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1786.20126953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 62.6076171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1412.2849609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1316.52685546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.0599609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1486.244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 1118.93642578125,
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
          "id": "a7ed6b7efefc8055cb15e3474790934759eaa25c",
          "message": "Publish client crates (#1252)\n\nUpdate changelogs for the client crates to prepare for publication.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T10:09:22Z",
          "tree_id": "fa32465c46876c22bb8b704422659fe91b10aa26",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7ed6b7efefc8055cb15e3474790934759eaa25c"
        },
        "date": 1738585331902,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "sequential_read,sequential_write_four_threads",
            "value": 4999.2892578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_two_threads,sequential_write_two_threads",
            "value": 4470.63955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads,sequential_write",
            "value": 5730.744726562501,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io",
            "value": 9.8009765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 48.6478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 9.773828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 46.7421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 2.6927734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 12.2642578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 2.32890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 11.5990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 5795.090234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 254.4552734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 4931.64052734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 255.87275390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1756.88359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 63.46318359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1425.98857421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1331.70283203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 63.885546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write_direct_io",
            "value": 1540.92373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_write",
            "value": 953.41943359375,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  },
  "lastUpdate": 1738585332743,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3"
}