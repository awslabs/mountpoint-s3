window.BENCHMARK_DATA = {
  "lastUpdate": 1743693672302,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4e54b477a76b16a730d2a1d6e53c30f883e4daab",
          "message": "Set \"ring\" version to \"0.17.12\" (#1310)\n\nWe set `ring = \"=0.17.12\"` because the latest version ring = \"=0.17.13\"\nhas the [issue](https://github.com/briansmith/ring/issues/2463) with old\nGNU builds.\n\n`ring` is a test dependency of Mountpoint. Update was done previously in\nthis [PR](https://github.com/awslabs/mountpoint-s3/pull/1306/files) to\naddress vulnerability warnings.\nPinned version is also fine from RustSec point of view\n([link](https://rustsec.org/advisories/RUSTSEC-2025-0009.html))\n\n### Does this change impact existing behavior?\nThis change does not impact the current behavior \n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-10T10:55:01Z",
          "tree_id": "8d01828a4688e66e478e2e1df4ccf1e1a6f56461",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e54b477a76b16a730d2a1d6e53c30f883e4daab"
        },
        "date": 1741612223775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14911.91796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23641.44140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33909.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32150.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 415.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32739.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11069.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12860.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11474.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 665.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.625,
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
          "distinct": false,
          "id": "a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54",
          "message": "Bump `env_logger` to latest version (#1314)\n\n`humantime`, a dependency of `env_logger`, is unmaintained. Latest\nversion of `env_logger` switches maintained `jiff` crate to provide the\nsame functionality.\n\nSee https://rustsec.org/advisories/RUSTSEC-2025-0014\nSee CI failure\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/13785440971/job/38552284966#step:4:359\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T15:05:11Z",
          "tree_id": "c178adc5e809b62b2bf7eb48e40ea83cd5c3c65e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a7f0d57d0d75bd7e0e63bbb2fdaa1abe37c14b54"
        },
        "date": 1741713675530,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14756.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20617.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34276.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 83.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31993.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34418.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9350.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8468.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11104.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 749.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 438.46484375,
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
          "id": "84781108333090a17d6c4c93c44b78326bf87482",
          "message": "Update CRT submodules to latest releases (#1312)\n\n## Description of change\n\nNotably, includes https://github.com/awslabs/aws-c-auth/pull/263 for\nhttps://github.com/awslabs/mountpoint-s3/issues/1203.\n\nSize:\n```bash\n$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\n   Packaging mountpoint-s3-crt-sys v0.12.1 (~/Code/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n<details>\n  <summary>CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth b513db4b..01dd06ac:\n  > Support Endpoint Override for CredentialsProviders (#263)\n  > aws_hex_encode() no longer adds null-terminator (#264)\n  > Account ID support for Crendentials Providers (#262)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 7299c6ab..298122a0:\n  > do not include crypto when doing byo_crypto (#207)\n  > Ed25519 support. (#206)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 0e7637fa..568f46b1:\n  > New Get_ENV Functions (#1141)\n  > aws_base64_compute_encoded_len() is now exact, doesn't add 1 extra for null-terminator (#1188)\n  > Make aws_byte_cursor_from_string NULL tolerant (#1187)\n  > Integration test for CPU feature detection (#1186)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 3041dabf..318f7e57:\n  > Revert win TLS 1.3 (#712)\n  > Fix Windows server-side for TLS 1.3 (#710)\n  > Tls1.3 win update (#676)\n  > Add PQ_DEFAULT enum to aws_tls_cipher_pref (#707)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 6eb8be53..1d0091c7:\n  > Adapt to aws_base64_compute_encoded_len() no longer adding 1 extra for null terminator (#497)\n  > Make public bucket optional (#495)\n  > add life cycle to s3 express to test helper (#494)\n  > Auto - Update S3 Ruleset & Partition (#493)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 138a6ad3..7bca7e96:\n  > Add IbmTpm to our CI (#2231)\n  > Revert BIO_get_mem_data back to macro (#2261)\n  > Update patch for Postgres (#2232)\n  > Add missing algorithms to benchmark (#2056)\n  > Update internal IANA values of PQ SupportedGroups (#2235)\n  > Add CMAC benchmark for AWS-LC (#2218)\n  > Added ML-DSA to break-kat framework (#2253)\n  > Update EVP_PKEY ED keygen to use an internal function that can return the result of the PWCT (#2256)\n  > Remove unused CMake options for break tests (#2249)\n  > Adding no-op X509_TRUST_cleanup for select application compatibility (#2257)\n  > Add LibRdKafka to our CI (#2225)\n  > Add public wrapper to internal bn_minimal_width function (#2245)\n  > Prepare v1.48.1 (#2252)\n  > Make BIO_get_mem_data a function again (#2246)\n  > Move OCSP ASN1 type functions to public header (#2239)\n  > Prepare for release v.1.48.0 (#2248)\n  > Migrate last batch of jobs (#2214)\n  > Enforce FIPS callback is only enabled for static builds (#2241)\n  > Update to using Clang 18 on Windows (#2240)\n  > Don't 'dllexport' Windows symbols on static build (#2238)\n  > Check pagesize is non-negative in AES-XTS test (#2237)\n  > Coverity Fix (#2236)\n  > Increase required CMake version to 3.5 (#2219)\n  > Remove BORINGSSL_FIPS_BREAK_FFC_DH (#2216)\n  > Bump version, preparing for release v1.47.0 (#2229)\n  > Add support to export ML-DSA key-pairs in seed format (#2194)\n  > Integration test for libgit2 (#2215)\n  > Fix out-of-bound (OOB) input read in AES-XTS Decrypt in AVX-512 implementation (#2227)\n  > Integration test for libssh2 (#2222)\n  > Reset DTLS1_BITMAP without resorting to memset (#2223)\n  > Use AWSLC_SOURCE_DIR and AWSLC_BINARY_DIR (#2208)\n  > Update ABI Diff Action to work correctly on push events (#2188)\n  > Add SSL_CTX_use_cert_and_key   (#2163)\n  > Add support to define a callback for FIPS test failures instead of aborting the process (#2162)\n  > Move Ed25519ph into module boundary (#2186)\n  > Add utility for querying and comparing the BORINGSSL_bcm_text_hash (#2217)\n  > Add guidance around certificate auto-chaining in TLS (#2205)\n  > SHAKE Incremental Byte Squeezes && EVP_ Tests (#2155)\n  > Migrate 3rd batch of CI jobs (#2183)\n  > Avoid duplicated definition of standalone test executable variables (#2212)\n  > Modify SSL to inherit ciphersuites from SSL_CTX at initialization (#2198)\n  > Prepare release v1.46.1 (#2210)\n  > Remove access() call from Snapsafe detection (#2197)\n  > Simplify IsFlag check logic (#2209)\n  > Update pairwise consistency test failures to support gracefully continiung (#2201)\n  > Enable RSA keygen becnhmarks by default (#2206)\n  > Fix C++98 compatibility in our header files (#2193)\n  > Add pq-tls interop test with BoringSSL (#2199)\n  > Refactor AWS_LC_FIPS_failure to always exist (#2200)\n  > Improve tool-openssl compatability for x509 and verify subcommands (#2196)\n  > Prepare release v1.46.0 (#2204)\n  > Add SPARCV9 target (#2202)\n  > Simplify OpenSSH mainline build (#2158)\n  > ML-KEM: Move FIPS-abort upon PCT failure to top-level ML-KEM API (#2195)\n  > Add runtime options to break the pairwise consistency test for Ed, ML-KEM, and ML-DSA (#2192)\n  > Update pkcs8_corpus files to include ML-DSA (#2191)\n  > Refactor TLS 1.3 cipher selection and fix SSL_get_ciphers (#2092)\n  > Add suport for asl and rol to match existing support for asr and ror (#2185)\n  > SCRUTINICE fixes (#2180)\n  > Make install_shared_and_static test more robust (#2179)\n  > MacOS-12 GH runner no longer supported (#2190)\n  > Add integration patches/CI for Ruby main and 3.3 (#2071)\n  > Move ML-DSA to fipsmodule (#2175)\n  > Expand spki fuzz corpus (#2187)\n  > Update PQREADME.md (#2151)\n  > Setup X509 CodeBuild Project for Limbo Report Generation (#2171)\n  > Add msl to ARMConstantTweak and recognise ldrsw to prevent delocator errors (#2177)\n  > Remove DEPENDS from add_custom_command as CMake made the behavior clear (#2178)\n  > Update BORINGSSL_FIPS_abort to AWS_LC_FIPS_failure which takes a message (#2182)\n  > Fix Nginx build (#2181)\n  > Add EVP API Support for ED25519ph (#2144)\n  > Update benchmark to skip chunk sizes that doesn't work with the algorithm (#2146)\n  > Add new CAST tests to break-kat.go (#2173)\n  > Migrate 2nd batch of CI jobs (#2091)\n  > Ensure enabling local symbols doesn't change the module hash (#2169)\n  > Move PQDSA to FIPSMODULE (#2166)\n  > Ensure service indicator is incremented only once, update RSA and ED25519 to ensure the state is locked (#2112)\n  > CAST and PCT for ML-DSA (#2148)\n  > Validate or define ARM HWCAP2_XXX macros (#2164)\n  > Prepare AWS-LC v1.45.0 (#2172)\n  > Wrap pointers to s2n-bignum functions - delocator fix (#2165)\n  > ML-DSA private keys from seeds (#2157)\n  > SHA3 and SHAKE - New API Design (#2098)\n  > Add support for PKCS12_set_mac (#2128)\n  > Fix policy grant on ECR resource policy (#2159)\n  > Cross library PQ interop test with s2n-tls (#2138)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 6cc9f53d..4ed4f1a6:\n  > tests: try to make s2n_mem_usage_test more useful (#5139)\n  > chore: git-blame-ignore ruff formatting (#5151)\n  > chore(bindings): change in rustup behavior (#5160)\n  > refactor: remove unused prf hmac impls (#5148)\n  > chore(ci): make the awslc fips install script version aware (#5100)\n  > fix: memory leak during STEK rotation (#5146)\n  > refactor: add alternative EVP signing method (#5141)\n  > refactor: cleanup prf header (#5144)\n  > feat(bindings): expose context on cert chain (#5132)\n  > Ruff Formatting and add to CI (#5138)\n  > chore(nix): Add aws-lc-fips 2022/4 (#5109)\n  > test(integv2): fixes to allow test_record_padding to partially run (#5099)\n  > build(deps): update rtshark requirement from 2.9.0 to 3.1.0 in /tests/pcap in the all-cargo-updates group across 1 directory (#5087)\n  > tests: use sig schemes as source of truth for valid hash+sig algs (#5129)\n  > ci: always set values for command line defines (#5126)\n  > fix: update callback return value (#5136)\n  > refactor: always use EVP hashing (#5121)\n  > ci: add check for third-party-src in disable rand override buildspec (#5137)\n  > feat: add async cert validation support (#5110)\n  > chore: remove unused well-known-endpoints.py (#5127)\n  > fix(bindings): remove mutation behind Arc (#5124)\n  > chore: binding release 0.3.12 (#5128)\n  > refactor: use EVP_MD_fetch() if available (#5116)\n  > feat: Option to disable RAND engine override (#5108)\n  > fix(bindings): make Context borrow immutable (#5071)\n  > build(deps): update rand requirement (#5125)\n  > chore: fix a typo in API comments (#5123)\n  > bindings: unpin openssl crate from a specific patch version (#5120)\n  > refactor: move \"s2n_libcrypto_is\" methods into s2n_libcrypto.h (#5117)\n  > Add new security policy (20250211) (#5111)\n  > Revert \"refactor: remove unused evp support for md5+sha1 (#5106)\" (#5118)\n  > ci: add default provider to openssl-3.0-fips (#5114)\n  > fix: don't enable custom random for openssl fips (#5093)\n  > fix: allow b64 decoding using libcrypto for sidechannel resistance (#5103)\n  > refactor: remove unused evp support for md5+sha1 (#5106)\n  > refactor: remove s2n_hmac_is_available (#5104)\n  > build(deps): bump aws-actions/configure-aws-credentials from 4.0.2 to 4.1.0 in /.github/workflows in the all-gha-updates group across 1 directory (#5107)\n  > fix(integrationv2): Skip unsupported client auth tests (#5096)\n  > chore: bindings release 0.3.11 (#5098)\n  > chore: ktls buildspec (#5083)\n  > Fixed formatting for debugging statements (#5094)\n  > feat(bindings): add external psk apis (#5061)\n  > test: add minimal openssl-3.0-fips test (#5081)\n  > fix(ci): Allow validate_start_codebuild to run on pushes to main (#5080)\n  > fix: don't use DEPENDS with add_custom_command(TARGET) (#5074)\n  > fix: error for uninit psk, check for all-zero psk (#5084)\n  > fix: calculation of session ticket age (#5001)\n  > fix: add support for `S2N_INTERN_LIBCRYPTO` with FetchContent (#5076)\n  > fix(integration): Update PQ integration test expectations (#5082)\n  > ci: fix dependabot, commit & check Cargo.toml (#5065)\n  > docs(s2n-tls-hyper): Add hyper client/server example (#5069)\n  > docs(integv2): add architecture diagram (#5072)\n  > fix(bindings): prevent temp connection free after panic (#5067)\n  > ci: Emit benchmark metrics from scheduled runs (#5064)\n  > ci: change rust-toolchain format to toml (#5070)\n  > Revert \"ci: remove openssl-1.0.2-fips builds (#4995)\" (#5060)\n  > feat(bench): impl into for base config type (#5056)\n  > refactor: cleanup CBMC proofs after #5048 (#5058)\n  > ci: Adding integ tests back to integv2 (#5054)\n  > refactor: remove openssl-1.0.2-fips 'allow md5' logic (#5048)\n  > ci: pin duvet version (#5057)\n  > build(deps): bump cross-platform-actions/action from 0.26.0 to 0.27.0 in /.github/workflows in the all-gha-updates group (#5053)\n  > chore: fix typos (#5052)\n  > chore: bump osx Openssl to latest (#5041)\n  > chore: bindings release for 0.3.10 (#5046)\n  > fix: initial config should not influence sslv2 (#4987)\n  > ci: add openssl-3.0-fips builds (#5037)\n  > Add Security Policy Deprecation API (#5034)\n  > docs: add C / s2n-tls-sys doc references to s2n-tls docs (#5012)\n  > test: add sslv2 client hello test w/ jvm (#5019)\n  > ci: add timeout for cbmc proof (#5038)\n  > fix(bindings): Specify correct minimum versions (#5028)\n```\n</details>\n\n## Does this change impact existing behavior?\n\nNothing expected.\n\n## Does this change need a changelog entry in any of the crates?\n\nUpdated\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T16:44:07Z",
          "tree_id": "dbb833fbd63455d31d5a4c92e46a203146d65f8d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/84781108333090a17d6c4c93c44b78326bf87482"
        },
        "date": 1741719621250,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13707.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21911.83984375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32226.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 353.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 310.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36319.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32794.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8663.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8862.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10015.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 742.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.7734375,
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
          "distinct": false,
          "id": "3da74af4a8be6895a92eb7ecbfe33603d0b59dc0",
          "message": "Add network config to all component benchmarks (#1284)\n\nThis change introduces both the CRT's target network throughput\nconfiguration and the network interface configuration to each of the\nbenchmarks for layers/components in Mountpoint's read path.\n\nThese are added primarily to support performance investigations, so we\ncan identify where there are gaps in performance and narrow them to\nimprove throughput of Mountpoint overall.\n\nThe target throughput default of 10.0 Gbps is removed on the lowest\nlevel of the benchmark, given we don't know what the default is for the\nCRT itself. It is left in place on all other layers as we default the\nvalue to 10.0 Gbps inside Mountpoint's S3 client.\n\n### Does this change impact existing behavior?\n\nNo, adds new arguments to benchmark scripts only. Even in those scripts,\nwe alias any command line arguments that change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, this is benchmarking changes only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-11T17:25:57Z",
          "tree_id": "239122751eb86b7e7b70e08fc5aa289c060170d7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3da74af4a8be6895a92eb7ecbfe33603d0b59dc0"
        },
        "date": 1741722123876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12834.8515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20988.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32032.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31880.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35482.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11599.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10479.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10574.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 796.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 518.046875,
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
          "distinct": false,
          "id": "d0ab7b9054d983652a8d4073eb598bf30b478f42",
          "message": "Pass `--foreground` in `mounthelper.go` to easily access Mountpoint logs (#1308)\n\nUpdate sample `mounthelper.go` for FUSE file descriptor mounting to see\nMountpoint logs in stdout to understand what's going on easily.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-03-11T19:12:02Z",
          "tree_id": "d0038230a4d52412dfb48e6823e9aa9f3f19678b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d0ab7b9054d983652a8d4073eb598bf30b478f42"
        },
        "date": 1741728490479,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10392.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22082.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31986.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.30078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33651.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31938.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10799.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11522.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12824.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 778.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 598.6796875,
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
          "id": "0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29",
          "message": "Update Cargo dependencies (#1315)\n\nPull in the latest Cargo dependencies. Notably, includes fix for `ring`\nbuild failures: https://github.com/briansmith/ring/issues/2463.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no behavior changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-12T10:11:59Z",
          "tree_id": "24d10ed6534a042c3685b2bac68033c5ec38f7be",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0a01a4f1882de3e6bfd40ab99af8fa5a42f39c29"
        },
        "date": 1741782390929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12818.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20806.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34238.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34377.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35348.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10484.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9546.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12537.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 782.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.55078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "191584906+sahityadg@users.noreply.github.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0bc2ba532e5f762e72dd262cd80e69c74a180e60",
          "message": "Add optional bandwidth monitoring to benchmark.py (#1289)\n\nUses bwm-ng, which probably needs to be installed, therefore this is\nbehind a default-false configuration flag `with_bwm`. Outputs a csv file\nunder the experiment output with the bandwidth on each NIC every 0.5s.\n\n(cherry picked from commit bff50722e995cd9a24049b4d1ddc3b2b26d90e3e)\n\n### Does this change impact existing behavior?\n\nNo change to Mountpoint, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-03-12T14:05:15Z",
          "tree_id": "16c5db0f5f7027e3b8b32f2dcc5b38e65c28dfdd",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0bc2ba532e5f762e72dd262cd80e69c74a180e60"
        },
        "date": 1741796330275,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12837.46875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20934.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34280.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 295.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34273.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35803.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10899.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10945.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12384.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.28515625,
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
          "id": "5a74b446eb106a24445b8acdacc448f00e428efc",
          "message": "Reduce memory used to store inode names (#1305)\n\nEach inode currently stores two separate strings for the key and the\nname (always contained in the key string), resulting in redundant memory\nusage. This change introduces a new `ValidKey` type which avoids the\nduplication by only storing the key and the offset of the name for O(1)\nretrieval.\n`ValidKey` (and the related type `ValidName`) also enforce validation\nfor the name and the whole key at construction time, allowing calling\ncode to rely on the strings to be well-formed.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-13T10:31:00Z",
          "tree_id": "80131daaac7c2c98987392ee3bbb6b646e4c015f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5a74b446eb106a24445b8acdacc448f00e428efc"
        },
        "date": 1741869925245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12152.9375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23226.53515625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36643.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 100.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35844.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38964.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11950.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12195.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10381.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 876.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 503.78515625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "17cfb00ffb727624c45d934bedcdf430b22a6c1b",
          "message": "Extract the mountpoint code into mountpoint-s3-fs library crate (#1304)\n\n* Move the code from `mountpoint-s3/src` binary crate to the new\n`mountpoint-s3-fs` library crate\n* Move all the tests except based on binary path (`cli.rs` and part of\n`fork_tests.rs`) from `mountpoint-s3/tests` to `mountpoint-s3-fs/tests`\n* Move the examples from `mountpoint-s3/examples` to\n`mountpoint-s3-fs/examples`\n* Move the network performance script from `mountpoint-s3/scripts` to\n`mountpoint-s3-fs/scripts`\n* In app's main.rs and in `mock-mount-s3.rs` call the `main` function\nfrom the library crate\n* Add a third argument to the `main` function's interface for passing\ncontext parameters. Currently it's just an app's full version from the\nbuild info which is required for building user agent.\n* Add a third argument to the `mount` function's interface for passing\n`context_params`\n* Move `version` field from `CliArgs` struct to the newly introduced\n`AppCliArgs` which sits in the main app\n* Lock `futures` version as Cargo doesn't allow to publish crates with\nwild-carded dependencies' versions\n* Keep build info inside the `mountpoint-s3` crate to preserve version\ninfo\n* Keep tests based on binary inside the `mountpoint-s3` crate\n* Keep some of the common tests helpers inside the `mountpoint-s3` (code\nduplication)\n* Keep filesystem benchmarks inside the `mountpoint-s3` crate\n\nThis PR is marked as performance to test benchmark scripts.\n\n### Does this change impact existing behavior?\n\nThis change doesn't change the behavior, it changes the repository\nstructure and introduces the new crate.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAs a next step we need to add an entry in the `mountpoint-s3` change log\nmentioning the new `mountpoint-s3-fs` namespace in logs and metrics\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-13T17:11:34Z",
          "tree_id": "6858aae4b841823fa5790484253bf709ab9a46a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/17cfb00ffb727624c45d934bedcdf430b22a6c1b"
        },
        "date": 1741893873915,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10123.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19902.94140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31088.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34329.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33876.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9840.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9887.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12220.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 938.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 531.640625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49482875+ujinho@users.noreply.github.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "02b21c746ee46b875e166f332eeab275004d9a24",
          "message": "Update CRT submodules to latest releases (#1318)\n\n* Update to latest CRT dependencies and prepare release for:\n\n  * `mountpoint-s3-crt-sys`\n  * `mountpoint-s3-crt`\n  * `mountpoint-s3-client`\n\n ```$ cargo package -p mountpoint-s3-crt-sys --no-verify --allow-dirty\nPackaging mountpoint-s3-crt-sys v0.12.1\n(/local/home/evdolgy/mountpoint-s3/mountpoint-s3-crt-sys)\n    Updating crates.io index\n    Packaged 2171 files, 39.4MiB (7.0MiB compressed)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version change?\n\n`Unreleased` sections were aded in crates' change logs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made under the terms of the Apache 2.0 license and I agree to the terms of the [Developer Certificate of Origin (DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-14T15:28:56Z",
          "tree_id": "bd77f30bc20b14277c67bdc48ea6989881399494",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/02b21c746ee46b875e166f332eeab275004d9a24"
        },
        "date": 1741974288762,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14002.35546875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22717.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34670.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 78.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32531.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 406.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38609.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11665.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12096.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12208.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 785.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.94140625,
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
          "id": "3a8c11036e218d5bc027c06352f10f7169669232",
          "message": "Add compile-time flag to stub FS read handler for performance testing (#1330)\n\nThis change adds an environment variable that allows Mountpoint to\nreturn zeroed bytes when reading instead of going to S3. This is useful\nfor determining the maximum throughput possible between the client\napplication and Mountpoint's filesystem handlers, omitting major\ncomponents like file handles, prefetcher, and network calls to S3.\n\n### Does this change impact existing behavior?\n\nNo existing behavior change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmarking change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-03-20T18:25:02Z",
          "tree_id": "08f11804cf95cd4251d5fbab69aad0b49a05d1b1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3a8c11036e218d5bc027c06352f10f7169669232"
        },
        "date": 1742503292534,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12641.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17964.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31810.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35801.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30609.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9359.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10829.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11166.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1091.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 707.0546875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "evdolgy@amazon.com",
            "name": "Eugene Dolgy",
            "username": "ujinho"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7f6b98915b7fce7dacf6703c2a363073484f0",
          "message": "Update the changelog for mountpoint-s3 (#1319)\n\nAs a follow-up for this\n[PR](https://github.com/awslabs/mountpoint-s3/pull/1304#pullrequestreview-2682411235)\nwe add a new entry in the `mountpoint-s3` change log.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChange log was updated. No version change requred.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-03-28T13:21:37Z",
          "tree_id": "52fc13f9da26c7fa8752cb1d6fb0cfd72cf087b3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7f6b98915b7fce7dacf6703c2a363073484f0"
        },
        "date": 1743176307187,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12774.8671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22557.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36416.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 354.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31461.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33239.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10941.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10849.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10995.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 872.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 583.40234375,
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
          "id": "a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7",
          "message": "Fix race condition in GetObject that could result in empty responses (#1334)\n\nAddress an issue in the `Stream` implementation for\n`S3GetObjectResponse` that could immediately return `None` (i.e.\nterminate the stream) when detecting that the meta request had\ncompleted, before returning previously received parts. Reported in\n#1331.\n\nThe fix changes the mechanism used to extract the response body parts\nand the request completion from the meta request callbacks. Instead of\nmultiple independent channels, it introduces a single channel that\nsupports multiple `S3GetObjectEvent`s. The events in the new channel\nmatch the order in which the callbacks are invoked, which is guaranteed\nby the CRT. The events channel also includes the `Headers` event,\navoiding the need of a separate channel to await for the headers to be\nreturned.\n\nWhen using Mountpoint, an occurrence of this issue would result in a\nread request failing with an `Input/output error`, with a warning entry\nin the logs containing this message:\n```\nmountpoint_s3_fs::fuse: read failed with errno 5: get request failed: get request terminated unexpectedly\n``` \nNote however that we were not able to trigger the issue in our tests.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry and increase patch version.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-03-31T15:44:37Z",
          "tree_id": "26c3587bda193c32134ff46bf374ee38adc39d1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3909e08d7ce8f8dafb89ccef3ece7b6b401e0f7"
        },
        "date": 1743444145559,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10382.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21779.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35554.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 370.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 903.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 824.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33640.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37814.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 392.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8500.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12591.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11676.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 944.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 583.28515625,
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
          "id": "c52ab15de0ed82818b5a7af44880ad3583861a81",
          "message": "Update CRT submodules to latest releases (#1338)\n\nUpdate the CRT libraries to the latest releases. Notable changes:\n* Update endpoints.\n([awslabs/aws-c-s3#502](https://github.com/awslabs/aws-c-s3/pull/502))\n* Bump Default Memory Limit for Higher Target Throughput.\n([awslabs/aws-c-s3#499](https://github.com/awslabs/aws-c-s3/pull/499))\n\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth 01dd06ac..cd9d6afc:\n  > Update docs for DefaultChain (#266)\n  > Async cognito support (#267)\n  > only forbid `X-Amz-S3session-Token` when signing with s3 express. (#268)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 5d5bc553..4805a96e:\n  > Fix FindCrypto behavior on win (#211)\n  > Fix module export to respect ed25519 flag (#210)\n  > Fix missed define in the code (#209)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 7fb0071a..8ae8f48e:\n  > Simplify how inline math files are included (#1195)\n  > Tests require compiler extensions (#1193)\n  > CrossProcess lock -- don't unlock, just close fd (#1192)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 60c43f80..e526ac33:\n  > Apple Network Framework Support (#502)\n  > h1_decoder error on multiple content-length headers (#509)\n  > Fix Error Handling For Connection Manager (#507)\n  > HTTP/1: Support streaming requests of unknown length (#506)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 318f7e57..6c90e491:\n  > Remove unused variables in aws_host_resolver (#719)\n  > Grand dispatch queue (#661)\n  > Fix IP address being labelled \"bad\" for too long (#718)\n  > Add back kqueue support on iOS (#716)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1d0091c7..408e9c90:\n  > Update endpoints (#502)\n  > Newer URL for aws-lc (#500)\n  > Bump Default Memory Limit for Higher Target Throughput (#499)\n  > missed one file from test helper README (#498)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums fb8bd0b8..66b447c0:\n  > Add missing extern c to new header (#103)\n  > Add init functions to support thread safe init of impls (#102)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc 7bca7e96..b1420f27:\n  > Prepare for v1.49.1 (#2303)\n  > Turn on better logging for EC2 test framework (#2298)\n  > Add req to OpenSSL CLI tool (#2284)\n  > Add more build options to match callback build (#2279)\n  > FIPS Integrity Hash Tooling (#2296)\n  > Prepare for v1.49.0 (#2297)\n  > Cherrypick hardening DSA param checks from BoringSSL  (#2293)\n  > Bump mysql CI to 9.2.0 (#2161)\n  > AES: Add function pointer trampoline to avoid delocator issue (#2294)\n  > Adding detection of out-of-bound pre-bound memory read to AES-XTS tests. (#2286)\n  > Wire-up rust-openssl into GitHub CI (for the time being) (#2291)\n  > Add support for more SSL BIO functions (#2273)\n  > Add support for verifying PKCS7 signed attributes (#2264)\n  > Reject DSA trailing garbage in EVP layer, add test cases (#2289)\n  > Update patches in Ruby CI (#2233)\n  > Documentation on service indicator (#2281)\n  > Add the rehash utility to the openssl CLI tool (#2258)\n  > Revert \"Allow constructed strings in BER parsing (#2015)\" (#2278)\n  > Prepare AWS-LC v1.48.5 (#2274)\n  > s2n-bignum build should use boringssl_prefix_symbols_asm.h (#2265)\n  > ci: Nix flake and devShell (#2189)\n  > GitHub CI job to verify tags are on expected branches (#2170)\n  > Prepare for release v.1.48.4 (#2271)\n  > Make AWS_LC_fips_failure_callback optional in builds with AWSLC_FIPS_FAILURE_CALLBACK (#2266)\n  > Prepare v1.48.3 (#2269)\n  > Update shard_gtest to unset environment variables once all the tests are done (#2270)\n  > Minor build fixes for CMake and libssl on x86 (#2267)\n  > Fix aws-lc-rs CI test (again) (#2268)\n  > Add x4 batched SHAKE128 and SHAKE256 APIs (#2247)\n  > Fix aws-lc-rs CI test when symbols removed (#2262)\n  > Remove no-op register move from ChaCha20_ctr32_ssse3_4x (#2234)\n  > Revert removal of \"PEM_X509_INFO_write_bio\" (#2226)\n  > Use unsigned return type for BN_get_minimal_width and word size tests (#2260)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T10:25:40Z",
          "tree_id": "8940e5f48c303dc65e36914e75c1c3f56a4a454b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c52ab15de0ed82818b5a7af44880ad3583861a81"
        },
        "date": 1743511237984,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11876.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21659.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33979.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 924.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 842.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36354.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34666.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10321.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11640.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11040.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 828.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 546.421875,
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
          "id": "26006e1c16b76a95c6ecf9be1ad716fecb2a21bd",
          "message": "Update documentation for access points to directory bucket (#1339)\n\nJust a doc update.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-01T12:22:44Z",
          "tree_id": "41b6fea4e39d61cd1cbc98bc54f80ffdcd45b66a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/26006e1c16b76a95c6ecf9be1ad716fecb2a21bd"
        },
        "date": 1743518254382,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13014.5,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21903.71484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34497.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 371.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 926.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 378.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 299.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37112.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36579.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 407.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10171.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10687.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11617.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 862.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.2578125,
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
          "id": "a776670203be61492db27865158ab5a0fd38a323",
          "message": "Refactor internal S3 client methods to initiate meta-requests (#1337)\n\nRe-organize the group of internal methods in the S3 client used to\ninitiate CRT meta-requests. Follow-up to the changes in #1334.\n\nWith this change, `S3CrtClientInner` provides 4 methods:\n* `meta_request_with_callbacks`: the lowest-level method, which allows\nmore customization through callbacks. It is the basis for the other\nmethods and it is used directly by `get_object` and `put_object`.\n* `meta_request_with_body_payload`: simpler variant that returns the\nresponse body. Used by `list_object` and `get_object_attributes`.\n* `meta_request_with_headers_payload`: variant returning the headers,\nbut no body. Used by `head_object` and `put_object_single`.\n* `meta_request_without_payload`: simplest variant, only returns error.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo. Internal change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-01T14:01:57Z",
          "tree_id": "f180fa28ec38620e474990e96c4f5c2d9f485fa0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a776670203be61492db27865158ab5a0fd38a323"
        },
        "date": 1743524224121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12978.98828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20312.32421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31246.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 904.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 301.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 837.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 297.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34217.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34205.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10343.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11601.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12383.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 632.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.28515625,
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
          "id": "829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4",
          "message": "Bump `mountpoint-s3` version to 1.16.0 (#1341)\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Burak Varlı <burakvar@amazon.co.uk>",
          "timestamp": "2025-04-01T16:22:09Z",
          "tree_id": "455fb125eca9141a8377ce09f5b30ccedfea1c51",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/829df9dc79d6b5088b31896ea4a5c1ee1ceb40d4"
        },
        "date": 1743532640909,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11436.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 16935.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31617.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 925.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 75.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 761.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35284.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 29490.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10725.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11349.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11527.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 827.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 599.875,
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
          "id": "338e400b2e6dae2ad2a231f01e4d2de4149bdd25",
          "message": "Create a package with custom extension (#1340)\n\nAdd a `--pkg-extensions` CLI flag which specifies which packages to\nbuild and how to name them. Package type is inferred from top-level\ncomponent of the provided extension.\n\nAlso add a validation script for such packages.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-04-02T15:06:43Z",
          "tree_id": "ba352c13bf71fbe020d339a581abd0e4b8f6e095",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/338e400b2e6dae2ad2a231f01e4d2de4149bdd25"
        },
        "date": 1743614411655,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12775.140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20665.171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32785.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 368.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 941.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 379.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 294.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 852.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34629.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36439.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10134.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9471.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11156.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 809.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.53515625,
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
          "id": "6611aaf5822d42dbb208a18e626ab462163a80cf",
          "message": "Reduce memory usage for strings in inode metadata (#1346)\n\nReduce memory usage for strings included in inode metadata, like object\nkeys, etags, and inode names. Using a `Box<str>` instead of a `String`\nensures that no slack capacity is wasted and saves the `usize` field to\nkeep track of the buffer capacity.\n\n### Does this change impact existing behavior?\n\nNo functional changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-04-03T12:14:24Z",
          "tree_id": "25051904ee5fec89f725aaa1df0b2bb0cff986a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6611aaf5822d42dbb208a18e626ab462163a80cf"
        },
        "date": 1743690645157,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12744.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21734.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34782.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 905.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 374.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 297.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 825.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31456.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30599.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9534.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10579.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12154.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 874.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 548.89453125,
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
          "id": "f248ce85c9a43b1a6411050c9129d0cdebfe4670",
          "message": "Release 1.16.1 (#1349)\n\nUpdate the changelog.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-04-03T13:04:52Z",
          "tree_id": "b72211dcdd3f5ad08ef54972072c4ce78b027872",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f248ce85c9a43b1a6411050c9129d0cdebfe4670"
        },
        "date": 1743693672253,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11301.2734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22697.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32866.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 908.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 368.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 773.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 302.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32757.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35802.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9199.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8783.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11301.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 861.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 513.7578125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}