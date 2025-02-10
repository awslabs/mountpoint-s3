window.BENCHMARK_DATA = {
  "lastUpdate": 1739189113233,
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
          "id": "89df75f3ac099568b8632d75abe263623e22d020",
          "message": "Increment version numbers for next release and update guidance (#1229)\n\nSet up new guidance for incrementing version numbers and implement it\nfor Mountpoint and the client crates.\n\nUnder the new guidance, the patch version will be incremented\nimmediately after releasing Mountpoint or publishing the crates, so that\ndevelopment on `main` continues under a new provisional version.\nWhen new features / breaking changes are introduced, the version number\nwill be contextually incremented as the changes are documented in the\nchangelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-01-14T15:10:01Z",
          "tree_id": "543fb3097f7732075ebbebb096ce117ada5d5055",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/89df75f3ac099568b8632d75abe263623e22d020"
        },
        "date": 1736874593182,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.06259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1986.3875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.96689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1469.4556640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 279.2951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 425.6228515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.43515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 252.32099609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3671.83984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3931.0109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.445703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1172.95439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 801.0138671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 772.94375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1087.532421875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 986.91806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 905.41474609375,
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
        "date": 1736882202247,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.669140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1974.7728515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.63583984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1467.75751953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.99833984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 388.052734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.89453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 363.96103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3424.83759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3929.26171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1179.998828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1194.97578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 829.0244140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1299.9251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1135.8298828125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 983.43193359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1099.8060546875,
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
        "date": 1736943908416,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1259.526953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.386328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 812.80078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1468.16689453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.76611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 488.6806640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 185.24521484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 244.06220703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3905.14716796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4025.99189453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1170.53857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1164.13837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 812.1615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1273.60888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1229.967578125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1026.798046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1191.6357421875,
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
        "date": 1737040252830,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.22529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1993.90771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 816.3544921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1503.6875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.091015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 410.4798828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 194.321484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 272.53798828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3723.16484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4014.6248046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1167.96416015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.469140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 811.81162109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 901.83525390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1111.54248046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 984.71923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1080.755078125,
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
        "date": 1737127368286,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.32529296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1956.1740234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.9251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1489.03251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.71044921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 552.4560546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 188.44921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 245.5521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3661.65791015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4066.48955078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1190.72373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1195.96513671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1172.8544921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 852.326953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1164.34189453125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1004.225390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1036.2126953125,
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
        "date": 1737389330244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1248.46796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1947.52666015625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.270703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1473.92412109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.1876953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 579.79423828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 193.072265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 262.9720703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3594.0689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3927.087109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1177.03232421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1159.64814453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1288.551953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1449.76533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1446.3705078125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1022.07646484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1043.56552734375,
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
        "date": 1737464553898,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1266.17900390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1981.1376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 784.67294921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1462.04453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 289.61162109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 499.80205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 211.8884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 276.63623046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3615.52783203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4007.77763671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1174.7353515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1124.466796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 779.43681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1403.70595703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1048.54609375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1146.37890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 973.36298828125,
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
        "date": 1737563383443,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.3404296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2013.491796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 793.95869140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1512.82490234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 277.70673828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 500.06611328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.30390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 258.2841796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3745.398828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3919.948046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1230.55732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1165.12880859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 751.60615234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1072.57724609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1141.146875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 990.11943359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1065.12109375,
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
        "date": 1737599595230,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1281.05849609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1974.1205078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 825.73603515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1478.27216796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.33525390625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 527.76953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 183.8076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 249.11474609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3622.32568359375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3973.55322265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1228.11494140625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1135.806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 845.84072265625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 847.41787109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1183.77177734375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1105.0701171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 945.34619140625,
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
        "date": 1737724103723,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1252.48349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1969.782421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 796.69111328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1483.0478515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.753515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 594.09951171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.6857421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 307.33759765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3686.8521484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4010.7666015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1215.03212890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.0921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1313.8345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1007.91181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1069.59326171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1131.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1186.85654296875,
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
        "date": 1737737587063,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1265.1240234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1968.77880859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 782.05126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1471.2494140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 281.80244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 551.08779296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.93203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 349.61533203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3745.32373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4037.58896484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1175.18046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1170.9845703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 781.5935546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1010.01083984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1129.476171875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1121.19736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1415.40888671875,
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
        "date": 1737744666429,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1253.01396484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1980.2033203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 795.24990234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1495.4076171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.28662109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 560.5982421875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.6658203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 352.15498046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3847.80625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4029.516015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1213.05732421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1166.994921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 756.82001953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 875.01689453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1050.0919921875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1060.91767578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 921.9796875,
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
        "date": 1737985270547,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1256.67197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1981.3716796875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 799.0986328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1470.9171875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 283.005078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 395.603125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.48935546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 313.923828125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3601.3486328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4185.6408203125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1252.0013671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1190.8755859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 855.43017578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 815.78330078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1163.43154296875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1058.095703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1220.1048828125,
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
        "date": 1737988145001,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1264.03056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.8703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 813.77265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1467.4259765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.2669921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 408.37822265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 207.80771484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 263.25078125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3642.69912109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4055.0810546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1206.19462890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1141.24345703125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1339.23837890625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 910.58740234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1124.79873046875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1044.46240234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1105.84033203125,
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
        "date": 1738325155256,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1255.00693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1976.0443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 805.7904296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1497.02548828125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 275.2884765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 419.85810546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 186.69169921875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.72109375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3647.7630859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3987.99560546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1191.11611328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1163.48681640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1409.79833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1090.55146484375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1265.769140625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1050.07734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1130.89580078125,
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
        "date": 1738584456983,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1262.31572265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1954.4744140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 820.94853515625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1460.91552734375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 278.1244140625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 456.192578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 187.04443359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 275.692578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3762.7736328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4086.77490234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1183.98642578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1168.29833984375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 794.2123046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1435.2974609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1058.47333984375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1027.1134765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 978.937890625,
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
          "id": "8075c204939c66b8a5732a27bb00562243dfa8df",
          "message": "Increment crates version numbers for next release (#1253)\n\nIncrement the version numbers of the client crates after publishing to\ncrates.io.\n\n### Does this change impact existing behavior?\n\nN/A\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nN/A\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-03T11:03:12Z",
          "tree_id": "0c6673e0b1dd662d816fe5d0e593341b6ff7e10a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8075c204939c66b8a5732a27bb00562243dfa8df"
        },
        "date": 1738587629337,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1251.9693359375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1968.8056640625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 812.46064453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1481.0126953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.0212890625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 576.89267578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.9236328125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 259.10751953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3753.61103515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 3959.13505859375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1172.9373046875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1158.19677734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1320.82978515625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 1224.3529296875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1060.89736328125,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 978.509765625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 987.62734375,
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
          "id": "2bf0385cf026539bb52e59473683d1c1c84e3653",
          "message": "Update CRT submodules to latest releases (#1255)\n\nUpdate the CRT libraries to the latest releases. In particular, include:\n* S3Express CreateSession Allowlist Headers\n([awslabs/aws-c-s3#492](https://github.com/awslabs/aws-c-s3/pull/492))\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 5bc67797..b513db4b:\n  > A bunch of CMake fixes (#258)\n  > Add Account Id to Credentials (#260)\n  > Skip Transfer-Encoding from signing (#261)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fbbe2612..7299c6ab:\n  > Fix Findcrypto.cmake (#205)\n  > A bunch of CMake fixes (#203)\n  > Switch CI to use roles (#202)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7a6f5df2..0e7637fa:\n  > A bunch of CMake fixes (#1178)\n  > Fix heap overflow on uri parsing (#1185)\n  > (take 2) Detect when AVX is disabled via OSXSAVE (#1184)\n  > Fixup IPv6 validation logic (#1180)\n  > Detect when AVX is disabled via OSXSAVE (#1182)\n  > proof_ci.yaml must use latest upload-artifact (#1183)\n  > change PR template to ask for clearer wording (#1177)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression c6c1191e..f951ab2b:\n  > A bunch of CMake fixes (#72)\n  > Switch CI to use roles (#71)\n  > chore: Modified bug issue template to add checkbox to report potential regression. (#69)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http fc3eded2..590c7b59:\n  > A bunch of CMake fixes (#497)\n  > Fix CI for GCC-13 on Ubuntu-18  (#496)\n  > Switch CI to use roles (#494)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io fcb38c80..3041dabf:\n  > A bunch of CMake fixes (#701)\n  > Event Loop & Socket Type Multi-Support (#692)\n  > fix typo in log message (#702)\n  > Fix CI for GCC-13 on Ubuntu-18 (#700)\n  > Switch CI to use roles (#698)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 a3b401bf..6eb8be53:\n  > A bunch of CMake fixes (#480)\n  > S3Express CreateSession Allowlist Headers (#492)\n  > Auto - Update S3 Ruleset & Partition (#491)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils 1ae8664f..ba6a28fa:\n  > A bunch of CMake fixes (#50)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 3e4101b9..fb8bd0b8:\n  > A bunch of CMake fixes (#101)\n  > Switch CI to use roles (#100)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc ffd6fb71..138a6ad3:\n  > Prepare AWS-LC v1.44.0 (#2153)\n  > Fix issue with ML-DSA key parsing (#2152)\n  > Add support for PKCS7_set/get_detached (#2134)\n  > Prepare Docker image for CI integration jobs (#2126)\n  > Delete OpenVPN mainline patch from our integration build (#2149)\n  > SHA3/SHAKE Init Updates via FIPS202 API layer (#2101)\n  > Support keypair calculation for PQDSA PKEY (#2145)\n  > Optimize x86/aarch64 MD5 implementation (#2137)\n  > Check for MIPSEB in target.h (#2143)\n  > Ed25519ph and Ed25519ctx Support (#2120)\n  > Support for ML-DSA public key generation from private key (#2142)\n  > Avoid mixing SSE and AVX in XTS-mode AVX512 implementation (#2140)\n  > Remove remaining support for Trusty and Fuchsia operating systems (#2136)\n  > ACVP test harness for ML-DSA (#2127)\n  > Minor symbols to work with Ruby's mainline (#2132)\n```\n</details>\n\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-05T16:30:06Z",
          "tree_id": "19b94c8888edb337bb0a9962ee13e8ba88fd29cd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2bf0385cf026539bb52e59473683d1c1c84e3653"
        },
        "date": 1738780337350,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1254.5365234375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2009.00380859375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 787.14599609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1445.90517578125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 274.27197265625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 438.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 196.13134765625,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 256.90439453125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3516.89775390625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4106.96181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1203.467578125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1137.659375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 763.49091796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 911.75234375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1058.330859375,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1213.08251953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 961.03662109375,
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
          "id": "98fb461f25aa30be3ee8c61ecf278a651ec2733e",
          "message": "Add an Express bucket with KMS default SSE to the CI (#1256)\n\nAddition of this bucket to the CI will enable us to test [the\ncase](https://github.com/vladem/mountpoint-s3/commit/0bab01c5037c80f0c245ebd881276ad8652818c4#diff-280514ac541c555aa616d3bfa819ad7cc7a23c372e9c37d9fc6c62477e63503dR145),\nwhen KMS encryption is enforced on a cache xz bucket.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-07T10:59:07Z",
          "tree_id": "ba5d77b35187c3962fd42f9c5b57f1223102c658",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/98fb461f25aa30be3ee8c61ecf278a651ec2733e"
        },
        "date": 1738933103167,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1235.11279296875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 2002.41376953125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 796.7349609375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1458.20078125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 271.76708984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 434.7958984375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 191.7685546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.60361328125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3590.8541015625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4214.7181640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1184.59609375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1149.97177734375,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1277.921875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 947.11806640625,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1047.07060546875,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 1080.52626953125,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 1064.00546875,
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
          "id": "5eb74d53976c2513a96c6e6e6171b3395ad92f7d",
          "message": "Update semantics doc to clarify when Mountpoint can read during uploads (#1259)\n\nTo avoid ambiguity, this change updates the semantics document to be\nclear that restrictions on what files can be read by Mountpoint while it\nis performing a write apply to both upload modes.\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, docs change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T10:06:31Z",
          "tree_id": "11c7ce35768e374707e18bd9987aac24756d4ad5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5eb74d53976c2513a96c6e6e6171b3395ad92f7d"
        },
        "date": 1739189112537,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "random_read_four_threads_direct_io",
            "value": 1274.67158203125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_direct_io_small_file",
            "value": 1972.70546875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads",
            "value": 808.59970703125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_four_threads_small_file",
            "value": 1454.9109375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io",
            "value": 276.6484375,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_direct_io_small_file",
            "value": 600.964453125,
            "unit": "MiB/s"
          },
          {
            "name": "random_read",
            "value": 192.8888671875,
            "unit": "MiB/s"
          },
          {
            "name": "random_read_small_file",
            "value": 251.796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io",
            "value": 3561.3341796875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_direct_io_small_file",
            "value": 4044.6546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads",
            "value": 1202.50888671875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_four_threads_small_file",
            "value": 1127.28857421875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io",
            "value": 1323.260546875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_direct_io_small_file",
            "value": 877.326171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read",
            "value": 1109.4134765625,
            "unit": "MiB/s"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 969.92451171875,
            "unit": "MiB/s"
          },
          {
            "name": "sequential_read_small_file",
            "value": 924.43642578125,
            "unit": "MiB/s"
          }
        ]
      }
    ]
  }
}