window.BENCHMARK_DATA = {
  "lastUpdate": 1740577308182,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Express One Zone)": [
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
        "date": 1738781038232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15120.296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20786.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41088.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 402.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 154.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35597.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 370.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37083.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12087.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12272.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10505.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
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
        "date": 1738933907391,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17076.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28233.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36676.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 149.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 209.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 420.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 327.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37124.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41397.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.10546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13701.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12505.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12199.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 368.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.89453125,
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
        "date": 1739200517170,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14558.609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21970.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41844.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 207.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 416.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 82.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36620.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 409.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39647.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12264.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12731.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11162.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 392.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 250.48828125,
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
        "date": 1739208526735,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16318.3046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26256.25,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32601.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 399.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 212.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 322.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33065.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34098.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12935.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12460.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10274.6875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 402.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 238.40234375,
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
        "date": 1739208826385,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15627.01171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25730.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40268.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 152.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 406.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 221.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 413.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 325.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38484.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36909.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13980.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12489.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11446.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 385.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.0390625,
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
        "date": 1739290647766,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16259.19921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24761.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38257.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 168.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 412.078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.26953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 324.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34780.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37699.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11617.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13946.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12328.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.3046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 387.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 256.30078125,
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
        "date": 1739293793185,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14150.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27113.78125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40318.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 155.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 184.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 428.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 83.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 91.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41589.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39498.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13201.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11263.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10536.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 254.80078125,
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
        "date": 1739554449107,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15055.8359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22362.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39772.56640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 157.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 396.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 199.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 414.25390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 88.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 330.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37349.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38473.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 410.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13294.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13691.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9639.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.078125,
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
        "date": 1739986450585,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 17077,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 30482,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37705.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 397.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 159.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 417.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 80.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.55078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 325.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 43433.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41119.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14197.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13951.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10283.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 409.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 235.328125,
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
        "date": 1739987296589,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15819.37890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 28963.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39430.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 154.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 401.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 186.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 408.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 319.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 90.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35592.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36695.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13319.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13641.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12891.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 406.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.14453125,
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
        "date": 1740130034168,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16658.578125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 27714.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38578.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 159,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 389.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 204.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 421.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 87.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 328.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37869.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39937.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12938.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12406.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8134.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 404.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 242.03515625,
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
        "date": 1740406669649,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14779.09765625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25253.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 45321.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 392.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 198.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 84.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 328.5703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 89.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 326.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 41645.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36618.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 14475.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11676.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11735.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 405.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 258.015625,
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
        "date": 1740410747876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16382.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24983.4765625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40975.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 150.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 393.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 169.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.66015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 326.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 322.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 40875.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39260.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 399.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13941.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 14569.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 8885.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 374.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 239.16796875,
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
          "distinct": false,
          "id": "48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe",
          "message": "Add FUSE background and congestion threshold config to benchmark script (#1286)\n\nTo investigate Mountpoint performance, we want to run experiments with\ndifferent FUSE max background and congestion threshold settings.\n\n### Does this change impact existing behavior?\n\nNo Mountpoint behavior change, an update to benchmark script only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo Mountpoint change\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nCo-authored-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-02-26T10:38:53Z",
          "tree_id": "5b46086209bed0903ee2eb52308aa3a1ef8c2be8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48ca4df0c3abfa70cf90ec3bad021c9e6ec551fe"
        },
        "date": 1740574457205,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 16993.421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25266.9296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 41299.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 148.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 395.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 219.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 407.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 86.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 324.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 86.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 331.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 42306.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 42002.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 13865.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12014.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12933.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 353.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 236.7890625,
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
          "id": "59ccecfd3b7edf540504bb524f1ef7e7afae7ecc",
          "message": "Build and validate SLES package (#1278)\n\nBuild a separate package for SUSE Linux Enterprise Server (SLES), where\n`libfuse.so.2` is delivered by `libfuse2` rpm package (as compared to\n`fuse-libs` for AL2).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMay be? Added.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-02-26T11:23:36Z",
          "tree_id": "427e5dc432f730ffa7fb9590d0d6635dba92c1ce",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/59ccecfd3b7edf540504bb524f1ef7e7afae7ecc"
        },
        "date": 1740577308137,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15703.77734375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26994.23046875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38576.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 151.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 391.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 177.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 419.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 85.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 329.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 88.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 323.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 39718.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38623.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12558.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12748.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9334.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 407.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 237.66015625,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}