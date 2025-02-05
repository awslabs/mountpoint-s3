window.BENCHMARK_DATA = {
  "lastUpdate": 1738781128916,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1736869822089,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15112.875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21544.52734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39234.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33320.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32569.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11389.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11629.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12976.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 826.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 563.78515625,
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
        "date": 1736883125320,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12436.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21848.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36130.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36022.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 408.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35879.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10778.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11455.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11630.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 515.03125,
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
        "date": 1736944866697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12729.1484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24091.1171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36789.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38173.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37150.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11024.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11327.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11627.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 908.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 600.76953125,
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
        "date": 1737041381294,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14773.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23607.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34758.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 101.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 351.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 318.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34557.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37424.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10129.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12159.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12879.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 891.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 501.4296875,
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
        "date": 1737121078571,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15181.796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21878.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36545.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 103.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35520.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33527.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13300.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13108.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12236.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 893.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 518.78515625,
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
        "date": 1737390296128,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14807.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25147.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40484.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 314.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38651.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34231.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9683.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11076.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14122.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 733.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 433.5390625,
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
        "date": 1737465465586,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14283.67578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25606.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36554.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32875.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35444.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10538.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10527.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12888.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 719.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 499.2890625,
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
        "date": 1737564391606,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11760.27734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22777.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33861.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34555.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32812.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11467.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11622.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12299.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 625.18359375,
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
        "date": 1737600454360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13110.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20758.61328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35755.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 347.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32534.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33973.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9830.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11375.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11440.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 858.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.78125,
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
        "date": 1737725059394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12795.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23461.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39938.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 349.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38550.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37329.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9903.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11454.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12556.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 826.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.65234375,
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
        "date": 1737738517270,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15608.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23006.08984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35652,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36122.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36753.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11114.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13169.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12157.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 698.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 489.80078125,
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
        "date": 1737745630624,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13195.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25382.0703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34644.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 106.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 82.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36496.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36752.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11466.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12638.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13373.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 831.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.875,
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
        "date": 1737986177733,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12047.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25562.8046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37887.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35779.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37230.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8428.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13727.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13408.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 816.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 497.03515625,
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
        "date": 1737989149728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14428.25390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27246.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37373.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 300.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36356.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38064.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12781.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10716.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13630.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 764.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 518.79296875,
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
          "id": "b8338af6019cbe2cbecdccf2805edafefef6a766",
          "message": "Update cargo dependencies (#1234)\n\nUpdate dependencies by running `cargo update`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-27T16:45:03Z",
          "tree_id": "73188134f639a747bc4599126dd3cd8d8451582b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b8338af6019cbe2cbecdccf2805edafefef6a766"
        },
        "date": 1738004588050,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13251.42578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23243.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37811.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 352.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35065.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33248.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11580.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11614.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11756.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 632.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.03515625,
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
          "id": "6c576d1a0257432a38ce0e49aa472918a47d7694",
          "message": "Use custom endpoint and region setting for all fork tests (#1249)\n\nSome of our fork tests did not set the custom endpoint for the binary,\nif this is provided. This change should fix all of them to use a custom\nendpoint and to set the region, if that is configured.\n\nDoes not need a changelog entry, as it only affects tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-30T15:34:19Z",
          "tree_id": "1514115bf5d402099ef04421d19bba2b8c343529",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6c576d1a0257432a38ce0e49aa472918a47d7694"
        },
        "date": 1738259491007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13031.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23117.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35529.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34887.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37823.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11283.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12254.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13041.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 699.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 448.32421875,
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
        "date": 1738326004808,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12652.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19958.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33728.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33306.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33026.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11756.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10255.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12929.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 811.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 565.296875,
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
        "date": 1738585334011,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11498.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24053.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36512.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37124.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 379.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36248.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 404.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10766.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11951.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11627.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 808.5,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 437.03515625,
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
        "date": 1738588530579,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14580.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24680.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33138.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34790.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32983.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9275.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11346.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11740.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 727.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 452.1328125,
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
        "date": 1738781128868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12305.953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17127.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 29741.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35854.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36824.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8961.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11389.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11966.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 860.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 578.67578125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}