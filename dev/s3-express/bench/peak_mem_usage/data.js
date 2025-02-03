window.BENCHMARK_DATA = {
  "lastUpdate": 1738588507665,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
      {
        "commit": {
          "author": {
            "email": "133711035+aws-hans-pistor@users.noreply.github.com",
            "name": "aws-hans-pistor",
            "username": "aws-hans-pistor"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ab77aaa0b908d76f760d0ea51f6ad4f036ee069d",
          "message": "Allow clients to define custom callbacks to handle telemetry (#1080)\n\n## Description of change\nDifferent users of mountpoint will care about different metrics returned\nfor each requests, so allow them to define their own custom handlers for\nthe on_telemetry callback in addition to the default metrics that\nmountpoint emits.\n\nThis allows users to do things like: \n- emit extended request ids (\"x-amz-id-2\")\n- When some criteria is met, log out additional information\n\nRelevant issues: #1079 \n\n## Does this change impact existing behavior?\n\n\nNo there should be no breaking changes, the only visible change is that\nthere's a new field to the S3ClientConfig which defines the custom\ntelemetry handler\n\n## Does this change need a changelog entry in any of the crates?\n\nJust a note in mountpoint-s3-client letting users know this feature now\nexists\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Hans Pistor <hpistor@amazon.com>\nSigned-off-by: aws-hans-pistor <133711035+aws-hans-pistor@users.noreply.github.com>\nCo-authored-by: Volodkin Vladislav <vladvolodkin@gmail.com>",
          "timestamp": "2025-01-13T10:44:39Z",
          "tree_id": "8371c3ea91f63a67ed87f1e39e6acee811dfc836",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ab77aaa0b908d76f760d0ea51f6ad4f036ee069d"
        },
        "date": 1736795812986,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15200.73046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27370.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38045.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 152.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34007.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38609.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13751.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10267.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11917.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 420.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 251.28125,
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
          "id": "5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7",
          "message": "Use ``prop_filter`` to force directory treenode (#1227)\n\nOn my machine, proptest generation has slowed down (now ~40 seconds to\nrun 30 proptests, before ~16 seconds) significantly. This change\n(hopefully) keeps the behaviour identical and restores the speed we\nroughly had before.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-01-14T12:20:54Z",
          "tree_id": "8a43e933f5957b65c5f0b3b01acf857c214af6d0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5807eb108c1527ac8b11f3bc3b5ff30ef00bc0b7"
        },
        "date": 1736865376381,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15313.4921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26872.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38623.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 408.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 192.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38154.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37196.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 15192.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12507.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10492.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 403.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.05078125,
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
          "id": "c189d7d1a48c13acbb856e4b31611232106660a9",
          "message": "Create file-system-benchmarks.rs and update fs_latency_bench.sh accordingly (#1213)\n\nCreation of a benchmarking binary for recreating and measuring the\nlatencies of real-world usage patterns of Mountpoint. This version\nincludes only a small file creation benchmark which measures the\nsequence of the file system operations: lookup, open, write (of one\nbyte), and flush. The latency measurement captures the total duration\nand is averaged multiple iterations to ensure representativeness.\n\nThe benchmarking binary is used in the `fs_latency_bench.sh` script and\nthe the new results are included in the final results of the script,\nultimately being added to the [benchmarking GitHub pages\ndashboard](https://awslabs.github.io/mountpoint-s3/dev/latency_bench/).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Renan Magagnin <renanmagagnin@gmail.com>",
          "timestamp": "2025-01-14T13:36:33Z",
          "tree_id": "7fc207a2608b04b9c88b0796953c93eaba7ffa50",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c189d7d1a48c13acbb856e4b31611232106660a9"
        },
        "date": 1736869696804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13248.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26596.6875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38241.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 333.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35970.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35931.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13210.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12890.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11970.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 419.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.421875,
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
        "date": 1736875420975,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15823.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25636.5,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36799.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 196.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 403.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39041.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38948.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 400.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14331.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11702.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11734.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 369.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.046875,
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
        "date": 1736883092868,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15505.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26743.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37180.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41172.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36361.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9131.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13056.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13254.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 367.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.93359375,
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
        "date": 1737041112274,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16014.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26344.58984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39138.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 387.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 152.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 329.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35111.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33667.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14199.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 268.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13032.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12442.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.5078125,
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
        "date": 1737121007632,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12481.015625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26442.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38273.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 147.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 316.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40269.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37842.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12151.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11971.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9400.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 386.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.4296875,
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
        "date": 1737390263440,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17155.28125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23285.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34238.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 171.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33650.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37896.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12638.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10394.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13890.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 336.0078125,
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
        "date": 1737465395431,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16261.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25971.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39634.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 394.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 197.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 406.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38422.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41136.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12980.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10493.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 410.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.30078125,
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
        "date": 1737600387260,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15452.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23947.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43041.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 412.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 241.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 321.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33289.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33684.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13347.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13339.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10082.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 401.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.2109375,
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
        "date": 1737724983245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15829.63671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26438.82421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34855.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 403.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39660.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34416.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10268.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13434.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14717.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 425.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 257.046875,
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
        "date": 1737738460076,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13955.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26949.4609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41187.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 161.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 386.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 227.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41785.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38662.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11799.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13898.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14206,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.03125,
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
        "date": 1737745551026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16563.23828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28585.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39679.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 169.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39787.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33458.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12036.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12020.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10362.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 350.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.28125,
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
        "date": 1737986119147,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15877.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28177.12109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40050.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 227.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 409.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39451.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33738.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13714.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12582.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10405.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.6796875,
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
        "date": 1737989116477,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16738.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28019.11328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39046.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 400.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 153.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 402.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35627.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40320.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12377.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11209.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12182.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 353.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 255.01953125,
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
        "date": 1738004512345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15519.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25190.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 42342.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 407.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 239.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 89.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 333.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41267.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33903.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13158.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12529.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12103.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.16796875,
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
        "date": 1738259449450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14062.69140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25654.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39397.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 224.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 87.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 323.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 84.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 330.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38278.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40505.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13468.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10231.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12057.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.2890625,
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
        "date": 1738325924360,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15969.34765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29252.02734375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41391.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 153.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 413.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 222.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 411.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39789.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40346.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12753.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14331.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11880.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.19921875,
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
        "date": 1738585275585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14384.38671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21916.0546875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 43091.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39782.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35365.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13869.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11022.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10748.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 384.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 241.39453125,
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
        "date": 1738588507618,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15420.62890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 29202.73828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39992.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 390.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 178.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 327.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 321.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37353.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36159.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12537.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12560.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12024.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 371.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 260.0390625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}