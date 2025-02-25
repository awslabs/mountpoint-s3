window.BENCHMARK_DATA = {
  "lastUpdate": 1740513913151,
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
        "date": 1739189114450,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3204.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 328.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3342.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 346.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3351.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3312.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15810.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 342.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3316.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3309.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3381.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3389.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.08203125,
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
          "id": "157ef8d3df463d10b0e169714ead6176b0d40842",
          "message": "Update reftests with small refactor and renames for clarity (#1225)\n\nThis change makes minor updates to improve clarity in the reference\ntests.\n\n### Does this change impact existing behavior?\n\nNo, refactors reftests only.\n\n### Does this change need a changelog entry?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T13:02:21Z",
          "tree_id": "d3a9d3760722ea7d4a785ffce9bd5490274e5590",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/157ef8d3df463d10b0e169714ead6176b0d40842"
        },
        "date": 1739199659625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3230.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3429.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3198.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3153.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 229.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28577.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 354.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3302.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3233.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 237.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10679.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3247.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.375,
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
          "id": "812970714b42c6f28686302eef3d2c768332b955",
          "message": "Fix fs_benchmark to correctly configure backpressure (#1260)\n\nWhen running the benchmark script, it fails to run due to client errors\nwhere backpressure isn't enabled. This is due to Mountpoint's prefetcher\nrelying on this being enabled, or returning\n`BackpressurePreconditionFailed`.\n\nThis change configures the backpressure on the S3 client used by this\nbenchmark and has been tested on my own Linux machine.\n\n### Does this change impact existing behavior?\n\nFixes a benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark script change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:15:40Z",
          "tree_id": "e029f970f65ac62fc8ab00b77027452c092deb23",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/812970714b42c6f28686302eef3d2c768332b955"
        },
        "date": 1739207630620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3197.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3486.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3299.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 264.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3357.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29421.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3410.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3318.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3248.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13322.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.98828125,
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
          "id": "8c68c1dea2530871f0e19f3bd75e6046c3790d1c",
          "message": "Update examples/benchmarks to use Clap derive syntax (#1258)\n\nSome of the benchmarks and other examples use the non-derive syntax of\nClap. Meanwhile, the main CLI for Mountpoint uses the derive syntax\nproviding much better ergonomics.\n\nThis change migrates to derive syntax for all benchmarks/examples,\nmaintaining existing behavior and aliasing to match the main CLI for\nconsistency. By using aliasing, we can avoid old command history or any\nscripts failing to run.\n\n### Does this change impact existing behavior?\n\nThis change does not change any behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark/example change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T15:19:55Z",
          "tree_id": "8c38034fe2c2ce2cc41bcd0bdae8f5155272a453",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c68c1dea2530871f0e19f3bd75e6046c3790d1c"
        },
        "date": 1739207975308,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3205.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3287.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3301.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3249.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22083.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3376.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3126.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3419.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 4180.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.1484375,
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
          "id": "6410b8c0e138e61969572c09f55f650bd7458943",
          "message": "Add timer metric over endpoint rule engine resolution (#1262)\n\nToday, Mountpoint evaluates the rule engine with every request despite\nalways using the same endpoint in its default configuration.\n\nThis change adds a histogram metric so that we can begin to have\nvisibility on how long this is taking, and how this can be distributed.\n\n### Does this change impact existing behavior?\n\nNo, it adds a new metric for endpoint resolution.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, metrics are not considered a stable feature. This is a new metric\naddition only, no change or removal.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-10T16:30:47Z",
          "tree_id": "ca11b3c438a206551eeb4385d82d4815f7ee71c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6410b8c0e138e61969572c09f55f650bd7458943"
        },
        "date": 1739212261105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3265.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3318.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3313.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3520.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 232.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17744.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 340.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3424.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3309.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 229.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3333.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3351.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.7578125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "smeyer@fastmail.com",
            "name": "Steven Meyer",
            "username": "notoriaga"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "5e580a8632e30d7616d392fff30eaf215da22cec",
          "message": "Add negative metadata cache ttl (#1246)\n\nAdds a new CLI argument `--negative-cache-ttl` that lets you set the TTL\nfor negative metadata entries separately from `--metadata-ttl`. My use\ncase is a write once read many bucket. Objects do not get deleted from\nthis bucket, and new objects are added every few minutes. I'd like to be\nable to set `--metadata-ttl indefinite` and `--negative-cache-ttl 60` to\neffectively utilize the caching while still being able to pick up new\nobjects. There is an open issue for this here -\nhttps://github.com/awslabs/mountpoint-s3/issues/831\n\n### Does this change impact existing behavior?\n\nNo, if `--negative-cache-ttl` is omitted the existing behavior is\nmaintained (use `--metadata-ttl` or the default file_ttl).\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBecause this is a new feature I believe it would require both.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: notoriaga <smeyer@fastmail.com>\nSigned-off-by: Steven Meyer <smeyer@fastmail.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-11T13:59:57Z",
          "tree_id": "5c4086bb2ef39374bdfecb966e1ad1ed340ccfad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5e580a8632e30d7616d392fff30eaf215da22cec"
        },
        "date": 1739289807879,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3183.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3144.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3290.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3354.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 23143.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3515.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3565.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3263.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3031.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 236.58984375,
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
          "id": "e56d343ff6d9da3017c0b4888628da8ae6165883",
          "message": "Add metrics for FUSE worker idle and total count (#1264)\n\nBefore this change, there was no visibility into how many FUSE worker\nthreads within Mountpoint had been created nor any indication if they\nare all busy or not.\n\nThis change adds both a count for the number of FUSE worker threads that\nhave been spawned, as well as a count measuring how many are currently\nconsidered idle.\n\nWith the current metric implementation, these are guages and are only\nemitted when the value is updated. They are emitted in the logs as\nfollows:\n\n2025-02-11T13:00:14.647185Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:14.647227Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.total_count: 4\n2025-02-11T13:00:19.659416Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:24.672336Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 3\n2025-02-11T13:00:29.685867Z INFO mountpoint_s3::metrics:\nfuse.mp_workers.idle_count: 4\n\n### Does this change impact existing behavior?\n\nThis adds a new metric only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new metric only. Metrics aren't advertised as a stable feature.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:49:49Z",
          "tree_id": "4d12876f8614ab18f6c151fa367edefde6eba7c7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e56d343ff6d9da3017c0b4888628da8ae6165883"
        },
        "date": 1739292612071,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3039.90625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3372.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3317.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 271.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32109.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3612.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 361.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3287.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3097.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3305.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.046875,
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
          "id": "19b706dfc2b51d031d05602a328d4120ce72115b",
          "message": "Add experimental config to write Mountpoint PID to file (#1261)\n\nWhen investigating performance, we wanted to automate the collection of\nprofiler captures using a tool like `perf`. To do this, we needed the\nprocess ID of Mountpoint. By writing out the PID to a file, scripts\ncould automatically record profiles for the lifetime of Mountpoint by\nproviding its PID to `perf`.\n\nThis change adds the ability to write Mountpoint's PID to a file under\nan experimental/unstable environment variable. Since its unclear if we\nwant to expose this properly such as providing a CLI argument, we are\ntaking the unstable environment variable approach to make clear this\nconfiguration may change or be removed in future.\n\n### Does this change impact existing behavior?\n\nThis change adds a new experimental feature to write Mountpoint's PID to\na file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nSince this is adding an experimental feature, no changelog entry is\nrequired. No minor version patch is required, as this is not a stable\nfeature addition.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-11T14:50:57Z",
          "tree_id": "3e105b172d88ae034d0e91a237a2d0c712cfccca",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/19b706dfc2b51d031d05602a328d4120ce72115b"
        },
        "date": 1739292628623,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3417.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3044.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3080.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 258.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3623.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 233.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20984.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3163.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3385.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 239.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3471.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14838.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 224.015625,
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
          "id": "981a3e11b23baa3247c968f6819698dfc5326cd5",
          "message": "Increase version to 1.15 and update CHANGELOG after adding new metadata TTL flag (#1265)\n\nThe change in #1246 requires a minor version increase and a new entry in\nthe changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-02-11T14:53:46Z",
          "tree_id": "a5999ea7bd7aaec4350279abf77568d7b14dc396",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/981a3e11b23baa3247c968f6819698dfc5326cd5"
        },
        "date": 1739292984266,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3279.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3208.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3437.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3051.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17194.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3069.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3304.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3402.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3293.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 229.65234375,
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
          "id": "ed6f34bf117fcb0eab77920ba9f77201b42670b9",
          "message": "Add debug logging to FUSE flush to make upload completion clearer (#1247)\n\nIn some edge cases, Mountpoint will not be able to complete the MPU\nbefore the file is closed. For instance, we will not complete uploads\nwhere no bytes have been written since it can be common for applications\nto fork and result in file descriptor being closed before writing\nbegins.\n\nIf an application relies on close completing before another system\nqueries S3, it could lead to a race condition where the object is not\nyet in S3.\n\nWhile this is an edge case, this change adds debug logging which can\nhelp identify when this behavior occurs.\n\n### Does this change impact existing behavior?\n\nLogging change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-13T16:26:23Z",
          "tree_id": "32b3f4d8ea6c36c585de17761e64cc893f7f35e5",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ed6f34bf117fcb0eab77920ba9f77201b42670b9"
        },
        "date": 1739471456247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3165.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3329.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3186.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 248.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3355.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 19134.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 336.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3432.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.4609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3309.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3267.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3460.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.06640625,
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
          "id": "49c55bb73315bf3b0dca5326d6632cdf6453207e",
          "message": "Update caching documentation (#1267)\n\nUpdated the caching documentation to specify how the metadata cache\ninteracts with the data cache options.\n\nCloses #1263.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-02-14T15:20:08Z",
          "tree_id": "1fcff08e5c24399a87a6d8d7c97c7ac9b5622d18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/49c55bb73315bf3b0dca5326d6632cdf6453207e"
        },
        "date": 1739553639283,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3381,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3227.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3340.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3353.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 208.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37714.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2970.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3277.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 217.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3290.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3418.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.12109375,
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
          "id": "d70f9195740f616eca0e4a739b83aa34065e3261",
          "message": "Enforce sse on writes to the xz cache (#1257)\n\nWith this PR, flags `--sse` and `--sse-kms-key-id` will also apply to\nobject uploads to the xz cache.\n\n### Does this change impact existing behavior?\n\nYes, bumped the version.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, added an entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-02-17T22:57:28Z",
          "tree_id": "180c78283657fbca46ba80d09c29b0976dd709a9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d70f9195740f616eca0e4a739b83aa34065e3261"
        },
        "date": 1739840219279,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3338.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3339.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3432.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 25511.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3212.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3375.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3284.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3348.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.92578125,
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
          "id": "454e1fab291e1d020fe1a1917799f7a7f8d2cac7",
          "message": "chore(clippy): remove exclusions for false positive rules (#1271)\n\n### Overview\nWe removed exclusions for false positive Clippy rules as they were fixed\nand this workaround is no longer needed.\n\n### Does this change impact existing behavior?\nNo, this is a small boilerplate change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nChange log and version changes are not needed.\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:19:10Z",
          "tree_id": "ec72709f8a00be840dacf4c142a5db7ef9c0428e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/454e1fab291e1d020fe1a1917799f7a7f8d2cac7"
        },
        "date": 1739985604821,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3306.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3390.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3199.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3260.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 26403.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3214.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3315.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3136.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3338.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.8828125,
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
          "id": "d2a50bbdf765b1a5652e6b9a5e89919feaf212be",
          "message": "Fuser fork submodule (#1269)\n\n### Overview\nTo be prepared for further refactoring we want to ease the supporting\neffort for the FUSER fork we're using.\nAs a first step we want to embed it as a git submodule which will be\nusing the existing `fuser/fork` branch as a remote.\nThis will allow us to keep the current sync flow with the original FUSER\n[repo](https://github.com/cberner/fuser) but skip the manual sync step\nin our `main` branch.\n\nWe will be able to update the fork by running `git submodule update\n--remote mountpoint-s3-fuser` which is more idiomatic. So we still be\nable to test changes locally w/o publishing the fork.\n\n*NB* We will need to commit the changes (dirty indices) after\nsubmodule's update.\n\n### Does this change impact existing behavior?\n\nThis change is completely internal and does not impact customer-facing\nbehavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis change does not require version or changelog changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Evgeny (Zhenia) Dolgii <evdolgy@amazon.com>",
          "timestamp": "2025-02-19T15:34:36Z",
          "tree_id": "56231be5cdb9a08a04d49dbf5c17de883229d997",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d2a50bbdf765b1a5652e6b9a5e89919feaf212be"
        },
        "date": 1739986485977,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3334.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3335.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 260.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3387.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 241.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22037.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 343.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3065.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3250.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13258.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3272.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 231.3515625,
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
          "id": "bacb676bf7303208dc39cf8e91aff56b5ccc89d2",
          "message": "Add initial version of benchmark experiment runner (#1266)\n\nIn order to investigate performance in Mountpoint, we want to be able to\nvary different parameters. In fact, it can be very useful to vary these\nparameters together to see how performance (such as sequential read\nthroughput) changes as we vary two parameters together.\n\nThis change introduces a new benchmark running script which uses the\nPython framework Hydra to enumerate combinations of parameters, and then\nexecute some function with each combination. The script manages the\nlifecycle of the `mount-s3` file system and collecting data into an\noutput folder.\n\nThe change currently does not reuse the FIO definitions used by our\nregression benchmarks. In the mid-term, these should be reconciled.\n\nThis pull request (PR) supersedes a previous PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/986.\n\n### Does this change impact existing behavior?\n\nNo, this adds a new benchmark runner and benchmark definitions. This\ndoes not impact the Mountpoint file system.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no impact to Mountpoint file system or crates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-21T07:13:35Z",
          "tree_id": "f41549c9170abd8427c12f5c7a56563584dfa834",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bacb676bf7303208dc39cf8e91aff56b5ccc89d2"
        },
        "date": 1740129269566,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3147.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3254.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3093.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 268.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3197.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22569.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 351.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3268.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 363.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3268.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3374.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3205.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 216.09765625,
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
          "id": "ea00e0dfffafa35e6ef2339a299c235fa1356d62",
          "message": "Add ETag to complete upload debug log (#1282)\n\nSmall change to add etag to debug logs when an MPU completes.\n\nWe already have size and object key, so this is the only missing\ninformation.\n\n### Does this change impact existing behavior?\n\nAdds etag to debug logs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, minor logging change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T12:03:10Z",
          "tree_id": "bb4aeac896bbb845482469de8e7b1df4846647bb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ea00e0dfffafa35e6ef2339a299c235fa1356d62"
        },
        "date": 1740405831409,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3370.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3408.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3248.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3307.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 237.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29227.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3276.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 365.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3445.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3452.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3307.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.86328125,
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
          "id": "a5147a158407b8ed26a8953eabd218d3d79cfcc1",
          "message": "Add EC2 instance ID to benchmark output metadata (#1281)\n\nWe want to include the instance type in the metadata for a given\nbenchmark run.\n\nThis change adds a check into IMDS to query this data and add the EC2\ninstance type if available.\n\n### Does this change impact existing behavior?\n\nIt adds a new field to the benchmark output metadata file.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no change to Mountpoint itself.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-24T13:10:39Z",
          "tree_id": "e59b936e6f9b45b485f1e843ece5451832ba5e6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a5147a158407b8ed26a8953eabd218d3d79cfcc1"
        },
        "date": 1740409868931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3260.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3398.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 341.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3379.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3160.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 204.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30769.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3372.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3386.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 231.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3361.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 218.77734375,
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
          "id": "0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa",
          "message": "Add ability to specify multiple network interfaces to benchmark script (#1285)\n\nTo investigate multiple network card performance, we want to run\nexperiments with and without multiple network cards. This change adds\nthe ability to run the benchmark experiment runner and specify both\nnetwork interfaces and the maximum network throughput parameter.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, new feature on benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, no Mountpoint change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-02-25T18:02:35Z",
          "tree_id": "557d94cef6ae02f5344dc7298cb3b32037fa250f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0aaf8bfd6b95fd447eb44885e7c41b56131bdfaa"
        },
        "date": 1740513913105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3335.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3259.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3303.96484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3199.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 24661.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3177.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3187.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3411.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3323.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.56640625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}