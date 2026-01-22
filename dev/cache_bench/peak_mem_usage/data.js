window.BENCHMARK_DATA = {
  "lastUpdate": 1769088670471,
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
          "id": "0d0ceb9b898c84ff62486c295f257d0143bc953c",
          "message": "Merge al2023 workflow into integration tests (#1689)\n\nAvoids duplicate approval request. Also fixes checkout and requires\napproval for the build SRPM step.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-28T21:07:52Z",
          "tree_id": "c8cfa475328a9edfb651edba1ce086b0498ba5ad",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d0ceb9b898c84ff62486c295f257d0143bc953c"
        },
        "date": 1761692837284,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2173.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2224.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2186.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2188.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2175.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 32.27734375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b84f6e2db38744a1b79d870084fd1ea42bff7c2f",
          "message": "Add documentation for OTLP metrics (#1681)\n\nDocument metrics available for OTLP export and how to export them to\nobservability backends.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-29T17:22:59Z",
          "tree_id": "5602bbb6348fc5226aeb00c40328110892b189ea",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b84f6e2db38744a1b79d870084fd1ea42bff7c2f"
        },
        "date": 1761765852348,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2176.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2169.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2197.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 29.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2185.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2182.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2194.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.48046875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "613e4676d25d59e2621c41c4c141097dcc2cf00a",
          "message": "docs: Update LOGGING.md for default INFO level and metrics behavior (#1620)\n\nUpdate documentation to reflect new default logging level\n\n### What changed and why?\n- Updated LOGGING.md to reflect the new default INFO logging level\n(changed from WARN)\n- Added explanation of metrics logging behavior with --log-metrics and\n--debug flags\n- Clarified verbosity levels in documentation\n\nThese changes align the documentation with the implementation changes\nmade in PR #1605.\n\n### Does this change impact existing behavior?\nNo, this is a documentation-only change that reflects already merged\nchanges from PR #1605\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo changelog entry or version change needed as this is only updating\ndocumentation to match existing behavior.\n\n---\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyanka Karumuru <prikaru@amazon.com>\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-10-29T19:58:55Z",
          "tree_id": "d68c93d36fc4038ba611232771d126ed7e598cec",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/613e4676d25d59e2621c41c4c141097dcc2cf00a"
        },
        "date": 1761775371301,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2192.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2185.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2179.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 47.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2172.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2303.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2194.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2201,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2183.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2199.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.66015625,
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
          "id": "854836ac0d0810f943371082b8f79305f592377d",
          "message": "Update RPM workflow to handle configurable release (#1690)\n\nUpdate the RPM workflow to use a \"version tag\" (`<VERSION>-<RELEASE>`),\nwhich will allow to handle a configurable release in a future change.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-10-29T22:09:39Z",
          "tree_id": "fbd562fa793b449fba3b079884b323ce0969dad1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/854836ac0d0810f943371082b8f79305f592377d"
        },
        "date": 1761783099167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2302.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 35.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2176.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3097.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2197.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2598.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2168.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2187.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.92578125,
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
          "distinct": false,
          "id": "ace6f51bf3e5e2192abd9c3cc7352c443d4d548c",
          "message": "Update AL2023 RPM build process and package structure (#1684)\n\nUpdate AL2023 RPM package structure and adjust the build steps in CI.\n\n* Updated generate_amzn2023_srpm.sh to create and include separate\nvendor dependencies tarball\n* Moved from custom /opt/aws/mountpoint-s3/ directory to standard\n/usr/bin/ and /usr/share/doc/ locations\n* Updated release field\n* Configured RUSTFLAGS for cargo build\n* Added option to link to source on GitHub\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, No.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-30T12:11:24Z",
          "tree_id": "beea2e55b44dee97564f383c37d2b49112b87180",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ace6f51bf3e5e2192abd9c3cc7352c443d4d548c"
        },
        "date": 1761833501945,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2194.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2187.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2217.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 61.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2173.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2179.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 39.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2453.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2193.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.54296875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "837675f5c83343b882b28cf3e1be1e2368596d6a",
          "message": "Prepare for 1.21.0 release (#1692)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-10-30T13:48:29Z",
          "tree_id": "784cb19e88184a344fc80236263c8ee250e3abb0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/837675f5c83343b882b28cf3e1be1e2368596d6a"
        },
        "date": 1761839424979,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2197.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.2265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2198.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 29.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2184.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 30.78515625,
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
          "id": "820ae346c009eb336de1cbebb196ecd8403207c0",
          "message": "Fix race condition in logging tests (#1693)\n\nSome of the logging tests occasionally failed because `LockedWriter`\npanicked when trying to retrieve the underlying buffer. For example in\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/18838458022/job/53744837442#step:7:2151:\n\n```\nthread 'logging::syslog::tests::test_syslog_layer' panicked at mountpoint-s3-fs/src/logging/testing.rs:11:47:\ncalled `Result::unwrap()` on an `Err` value: Mutex [..]\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-10-31T18:28:18Z",
          "tree_id": "c359f1cf074d4809bf9fe291b70a7e53ab6bdda2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/820ae346c009eb336de1cbebb196ecd8403207c0"
        },
        "date": 1761942610353,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2185.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2174.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 38.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2341.05859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2176.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2176.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2173.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2179.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.1015625,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "484b81367e678f504b50d0c3aa049f96015b8559",
          "message": "Correct metric type documentation (#1696)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-11-03T11:05:20Z",
          "tree_id": "6027812a4fc35fae0319fddb700ab70ec154262a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/484b81367e678f504b50d0c3aa049f96015b8559"
        },
        "date": 1762175276816,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2175.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2184.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 46.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2195.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 25.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2175.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2184.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 29.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2187.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2192.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 31.49609375,
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
          "id": "63d79f65d2b4142fd16613472e9cc328a42f9ba6",
          "message": "Fix workflow permissions to publish benchmark results (#1722)\n\nThe changes in #1695 resulted in benchmark actions on push to main to\nfail when trying to publish results. This change will allow benchmark\nworkflows to write to github pages by fixing their permissions.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-10T17:51:26Z",
          "tree_id": "dd3d1b999ab4c31439f0769cccf0f63bae29c556",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/63d79f65d2b4142fd16613472e9cc328a42f9ba6"
        },
        "date": 1765396468073,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2187.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2195.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2224.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 27.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2183.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 38.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2288.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2236.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2178.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2376.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.19921875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3d487c5b4b416478351f90693a17fe1399b6d98",
          "message": "Refactor cache metrics for consistency and completeness (#1721)\n\nThis PR streamlines cache metrics collection across disk and express\ncache implementations.\n\nThis change renames caching metrics for consistency with other OTLP\nmetrics. This change also captures latency, bytes_transferred from/to\ncache and errors consistently across both disk and express cache\nimplementations.\n\n### Does this change impact existing behavior?\n\nYes, updates cache metrics in logs\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-12-10T18:49:08Z",
          "tree_id": "382f4e0f5addcf5fa0ecfe04b5a10b853c56bdc7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a3d487c5b4b416478351f90693a17fe1399b6d98"
        },
        "date": 1765400117001,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2556.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2191.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 39.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2204.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2426.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2191.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2365.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2191.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.48046875,
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
          "id": "adde28b1ceb63153f117d63d1dd63d47806a71cd",
          "message": "Fix workflow-complete jobs for GitHub workflows (#1723)\n\nUpdates jobs to always run and then fail, rather than be skipped when\nneeded jobs fail.\nThis will allow GitHub to correctly block when tests fail.\n\n`needs` JSON context:\nhttps://docs.github.com/en/actions/reference/workflows-and-actions/contexts#needs-context\n\nEquivalent CSI driver PR:\nhttps://github.com/awslabs/mountpoint-s3-csi-driver/pull/661\n\n### Does this change impact existing behavior?\n\nCI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, CI change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-11T18:50:16Z",
          "tree_id": "cf312a1c597b9961e0e8e2ca9ed6c85dcc27c11e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/adde28b1ceb63153f117d63d1dd63d47806a71cd"
        },
        "date": 1765486443482,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2522.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2180.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2176.83984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 43.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2192.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 36.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2184.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2390.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2195.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2317,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.67578125,
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
          "id": "c46c37365bd1d50df9e9104227eb9b2095ab08c0",
          "message": "Bump actions/download-artifact from 6 to 7 (#1727)\n\nBumps\n[actions/download-artifact](https://github.com/actions/download-artifact)\nfrom 6 to 7.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/download-artifact/releases\">actions/download-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v7.0.0</h2>\n<h2>v7 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/download-artifact@v7 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v6 had preliminary\nsupport for Node 24, however this action was by default still running on\nNode.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Update GHES guidance to include reference to Node 20 version by <a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nin <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li>Download Artifact Node24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n<li>fix: update <code>@​actions/artifact</code> to fix Node.js 24\npunycode deprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/451\">actions/download-artifact#451</a></li>\n<li>prepare release v7.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/452\">actions/download-artifact#452</a></li>\n</ul>\n<h2>New Contributors</h2>\n<ul>\n<li><a\nhref=\"https://github.com/patrikpolyak\"><code>@​patrikpolyak</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/440\">actions/download-artifact#440</a></li>\n<li><a href=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a>\nmade their first contribution in <a\nhref=\"https://redirect.github.com/actions/download-artifact/pull/415\">actions/download-artifact#415</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0\">https://github.com/actions/download-artifact/compare/v6.0.0...v7.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/37930b1c2abaa49bbe596cd826c3c89aef350131\"><code>37930b1</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/452\">#452</a>\nfrom actions/download-artifact-v7-release</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/72582b9e0acd370909e83fa4a1fd0fca3ad452d8\"><code>72582b9</code></a>\ndoc: update readme</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/0d2ec9d4cbcefe257d822f108de2a1f15f8da9f6\"><code>0d2ec9d</code></a>\nchore: release v7.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/fd7ae8fda6dc16277a9ffbc91cdb0eedf156e912\"><code>fd7ae8f</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/download-artifact/issues/451\">#451</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/d484700543354b15886d6a52910cf61b7f1d2b27\"><code>d484700</code></a>\nchore: restore minimatch.dep.yml license file</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/03a808050efe42bb6ad85281890afd4e4546672c\"><code>03a8080</code></a>\nchore: remove obsolete dependency license files</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/56fe6d904b0968950f8b68ea17774c54973ed5e2\"><code>56fe6d9</code></a>\nchore: update <code>@​actions/artifact</code> license file to 5.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/8e3ebc4ab4d2e095e5eb44ba1a4a53b6b03976ad\"><code>8e3ebc4</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/1e3c4b4d4906c98ab57453c24efefdf16c078044\"><code>1e3c4b4</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li><a\nhref=\"https://github.com/actions/download-artifact/commit/458627d354794c71bc386c8d5839d20b5885fe2a\"><code>458627d</code></a>\nchore: use local <code>@​actions/artifact</code> package for Node.js 24\ntesting</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/download-artifact/compare/v6...v7\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/download-artifact&package-manager=github_actions&previous-version=6&new-version=7)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T13:01:52Z",
          "tree_id": "07e45296629cf48ddda94fe169224b2316021dfb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c46c37365bd1d50df9e9104227eb9b2095ab08c0"
        },
        "date": 1765811231779,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2333.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2233.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2190.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2930.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 28.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2346.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2379.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 35.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2491.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2367.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2230.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.41796875,
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
          "distinct": false,
          "id": "bd31858c8c9058a7890e7d939452413577215633",
          "message": "Bump actions/upload-artifact from 5 to 6 (#1725)\n\nBumps\n[actions/upload-artifact](https://github.com/actions/upload-artifact)\nfrom 5 to 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/actions/upload-artifact/releases\">actions/upload-artifact's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0</h2>\n<h2>v6 - What's new</h2>\n<blockquote>\n<p>[!IMPORTANT]\nactions/upload-artifact@v6 now runs on Node.js 24 (<code>runs.using:\nnode24</code>) and requires a minimum Actions Runner version of 2.327.1.\nIf you are using self-hosted runners, ensure they are updated before\nupgrading.</p>\n</blockquote>\n<h3>Node.js 24</h3>\n<p>This release updates the runtime to Node.js 24. v5 had preliminary\nsupport for Node.js 24, however this action was by default still running\non Node.js 20. Now this action by default will run on Node.js 24.</p>\n<h2>What's Changed</h2>\n<ul>\n<li>Upload Artifact Node 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/719\">actions/upload-artifact#719</a></li>\n<li>fix: update <code>@​actions/artifact</code> for Node.js 24 punycode\ndeprecation by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/744\">actions/upload-artifact#744</a></li>\n<li>prepare release v6.0.0 for Node.js 24 support by <a\nhref=\"https://github.com/salmanmkc\"><code>@​salmanmkc</code></a> in <a\nhref=\"https://redirect.github.com/actions/upload-artifact/pull/745\">actions/upload-artifact#745</a></li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0\">https://github.com/actions/upload-artifact/compare/v5.0.0...v6.0.0</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b7c566a772e6b6bfb58ed0dc250532a479d7789f\"><code>b7c566a</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/745\">#745</a>\nfrom actions/upload-artifact-v6-release</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/e516bc8500aaf3d07d591fcd4ae6ab5f9c391d5b\"><code>e516bc8</code></a>\ndocs: correct description of Node.js 24 support in README</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/ddc45ed9bca9b38dbd643978d88e3981cdc91415\"><code>ddc45ed</code></a>\ndocs: update README to correct action name for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/615b319bd27bb32c3d64dca6b6ed6974d5fbe653\"><code>615b319</code></a>\nchore: release v6.0.0 for Node.js 24 support</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/017748b48f8610ca8e6af1222f4a618e84a9c703\"><code>017748b</code></a>\nMerge pull request <a\nhref=\"https://redirect.github.com/actions/upload-artifact/issues/744\">#744</a>\nfrom actions/fix-storage-blob</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/38d4c7997f5510fcc41fc4aae2a6b97becdbe7fc\"><code>38d4c79</code></a>\nchore: rebuild dist</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/7d27270e0cfd253e666c44abac0711308d2d042f\"><code>7d27270</code></a>\nchore: add missing license cache files for <code>@​actions/core</code>,\n<code>@​actions/io</code>, and mi...</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/5f643d3c9475505ccaf26d686ffbfb71a8387261\"><code>5f643d3</code></a>\nchore: update license files for <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1 dependencies</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/1df1684032c88614064493e1a0478fcb3583e1d0\"><code>1df1684</code></a>\nchore: update package-lock.json with <code>@​actions/artifact</code><a\nhref=\"https://github.com/5\"><code>@​5</code></a>.0.1</li>\n<li><a\nhref=\"https://github.com/actions/upload-artifact/commit/b5b1a918401ee270935b6b1d857ae66c85f3be6f\"><code>b5b1a91</code></a>\nfix: update <code>@​actions/artifact</code> to ^5.0.0 for Node.js 24\npunycode fix</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/actions/upload-artifact/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=actions/upload-artifact&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-16T12:58:56Z",
          "tree_id": "b12f49c2ddb33941c8a7ca26780450e778701a18",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/bd31858c8c9058a7890e7d939452413577215633"
        },
        "date": 1765897425860,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2404.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2173.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2192.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2202.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2446.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2267.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2172.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2203.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2177.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.71875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "prikaru@amazon.com",
            "name": "Priyankakarumuru1",
            "username": "Priyankakarumuru1"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "31a7d31db23463310bf82403ca1e678b7f311523",
          "message": "Extend autogroup.py to present benchmark output in json format (#1714)\n\n### What changed and why?\nAdded --json-output option to export benchmark results in JSON format\nwith separate parameter keys\n\n### Does this change impact existing behavior?\nNo breaking changes. Only adds new optional --json-output functionality.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Priyankakarumuru1 <prikaru@amazon.com>",
          "timestamp": "2025-12-17T11:04:28Z",
          "tree_id": "fcc12704c5032d4e196a859464246e9cfcf3200c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/31a7d31db23463310bf82403ca1e678b7f311523"
        },
        "date": 1765976878862,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2212.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 35.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2600.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2383.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2289.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 34.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2194.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 36.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2268.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2189.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 27.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2522.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2180.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.8359375,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca",
          "message": "Add cache metrics for OTLP export (#1724)\n\nThis change adds cache metrics for OTLP export. \n\n### Does this change impact existing behavior?\n\nYes, adds new metrics for OTLP export\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-12-17T12:03:15Z",
          "tree_id": "98d1447807f41eeef7647db0e823549431bfe64a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/eb53dec7b2b926268d00d4bfe3b9231eafbbf5ca"
        },
        "date": 1765980406591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2219.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.25,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2196.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2175.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2183.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2347.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2189.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.109375,
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
          "id": "ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58",
          "message": "Fix internal race condition in the incremental upload queue (#1728)\n\nThis change addresses an issue that caused the\n`upload::incremental::tests::test_append_failure_on_object_replaced` to\nfail\n[occasionally](https://github.com/awslabs/mountpoint-s3/actions/runs/20229391488/job/58068496627#step:8:576).\nThe root cause was a race condition in `AppendUploadQueue` when\nattempting to write more data after a failure to retrieve the checksum\nalgorithm, which would occasionally result in a panic instead of\nreturning an `UploadAlreadyTerminated` error.\n\nThe issue could be fixed with a simple change (see first commit), but I\nopted to refactor the queue to use a single channel to return both the\nchecksum algorithm and the PutObject responses, making error handling\nmore uniform.\n\n**Note that there is no user impact**, since further writes after an\nerror are not allowed by the \"file system\" layer.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T16:33:54Z",
          "tree_id": "d439318b2f53945d6d6415df16e0e51e6d2bd970",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ffd1ccaf576ab4b2bdd10599c1b45dcd667d1f58"
        },
        "date": 1765996674478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2174.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 36.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2180.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2200.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 37.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2191.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2214.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2258.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 28.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2266.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2321.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.734375,
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
          "id": "2c8b96b3cc004645bc24bdae903d4007f7f02fca",
          "message": "Fix benchmarks not running on PRs (#1731)\n\nAddress an issue introduced in #1722 where benchmark workflows would not\nrun on PRs (enabled when setting the \"performance\" label).\n\n### Does this change impact existing behavior?\n\nNo, CI only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-17T17:23:34Z",
          "tree_id": "b730453a5da4939aabc07d8f540a14e303006298",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2c8b96b3cc004645bc24bdae903d4007f7f02fca"
        },
        "date": 1765999535319,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2536.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 65.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2245.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2262.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2578.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 33.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2393.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2474.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2882.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.46875,
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
          "id": "deba195af5cfc231784d226a00468cffc284df27",
          "message": "Align read window with part boundaries + configurable `initial_request_size` (#1707)\n\nRe-created https://github.com/awslabs/mountpoint-s3/pull/1618, in this\nPR:\n\n- we align read window end to the part boundary for the second request\n(see `round_up_to_part_boundary` method);\n- we update mock client to allow testing of this change;\n- we add `PrefetcherConfig::initial_request_size` field and use it in\n`mount_from_config.rs` example.\n\n### Does this change impact existing behavior?\n\nIn a memory constrained environment, this may result in smaller read\nwindow sizes and less memory consumption.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nMinor version change and a change log to `mountpoint-s3-fs`, will add\nlater. Patch version change to the `mountpoint-s3-fs-client`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2025-12-22T11:19:28Z",
          "tree_id": "8c01e60eb5f63bdbc01ecb41f5c66fcc5b046b1c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/deba195af5cfc231784d226a00468cffc284df27"
        },
        "date": 1766409725919,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2483.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2175.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2178.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 26.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2272.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 46.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2515.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2190.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2176.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 31.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2178.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2183.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.46484375,
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
          "id": "8adc7549733902dd2169cd540abc878b01987004",
          "message": "Fix internal failure on atomic upload (#1733)\n\nImprove handling of errors on `CreateMultiPartUpload` in the atomic\nupload code path. Similarly to the change in #1728, the issue only\nmanifests when attempting to further write or complete an upload after\nan error and it does not affect Mountpoint file system users, since\nthat's already prevented at that level.\n\n### Does this change impact existing behavior?\n\nNo, user-visible behavior not impacted.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-12-24T12:45:36Z",
          "tree_id": "c4508f6e35e19f9238eee792e408780298d56f7b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8adc7549733902dd2169cd540abc878b01987004"
        },
        "date": 1766587708616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2188.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2184.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2182.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 45.84375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2187.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 31.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2207.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2188.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2204.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 33.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2184.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2275.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.50390625,
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
          "id": "2ff12d030057e30881527035c62dbac8f4f20efd",
          "message": "Fix broken link in SEMANTICS.md (#1736)\n\nFixes broken link in SEMANTICS.md\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2026-01-07T16:24:19Z",
          "tree_id": "224ecb4cb8678324f7e8f60979a173090e444abb",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2ff12d030057e30881527035c62dbac8f4f20efd"
        },
        "date": 1767810508775,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2168.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2177.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2215.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2332.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 59.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 38.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2198.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2183.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 28.3828125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "a449eead062b530bf8ad4c1aa735045454cf8e3f",
          "message": "Ignore bincode's unmaintained status temporarily (#1740)\n\nUntil we migrate away from bincode, ignore the [unmaintained\nstatus](https://rustsec.org/advisories/RUSTSEC-2025-0141) to unblock the\nbuilds\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-09T16:19:13Z",
          "tree_id": "ce5cd74f403ffc24db87831a33ff08e0b4219f4a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a449eead062b530bf8ad4c1aa735045454cf8e3f"
        },
        "date": 1767983106394,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2336.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2183.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2411.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 42.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2181.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 49.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2305.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2413.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 42.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2198.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 23.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2185.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 23.95703125,
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
          "id": "48e67efde2ccb13f4ef20f40564352e6a27591ae",
          "message": "Upgrade cargo dependencies (#1742)\n\nUpgrade cargo dependencies to the latest compatible releases. Exception:\nadapted to minor breaking change in the `assert_cmd` crate (tests only).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, bumped crate versions where required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-12T15:58:38Z",
          "tree_id": "720101ea3942739ad06ffb5e9e8557f01ad055b7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/48e67efde2ccb13f4ef20f40564352e6a27591ae"
        },
        "date": 1768240910012,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2277.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2301.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2380.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 52.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2184.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2182.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2192.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2181.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.74609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2175.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2191.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 24.23828125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sahityad@amazon.com",
            "name": "Sahitya Damera",
            "username": "sahityadg"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "af2480220f9999c62c3c6b15bae6394452c62799",
          "message": "Correct cache io_size metric type to histogram (#1738)\n\nUntil this change, these are incorrectly recorded as counters, which do\nnot help capture the bytes get/put to cache.\n\n### Does this change impact existing behavior?\n\nYes, Changes how these metrics are recorded in logs.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2026-01-13T07:54:22Z",
          "tree_id": "b83488b7b5583a1b1d9a9b4cdf14cb559b6ffe48",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/af2480220f9999c62c3c6b15bae6394452c62799"
        },
        "date": 1768298259608,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2207.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 33.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2310.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 31.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 51.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2182.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 41.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2454.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2181.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2382.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2205.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2181.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.05859375,
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
          "distinct": false,
          "id": "23bffa176933a7ab15fbeb0e6d548595da65a1c8",
          "message": "Update maximum S3 object size in docs to 50TB (#1729)\n\n**What changed and why?**\n\nUpdated maximum object size limits for multipart uploads in\ndocumentation.\n\nS3 recently increased max object size from 5 to 50 TB: \n\n\nhttps://aws.amazon.com/about-aws/whats-new/2025/12/amazon-s3-maximum-object-size-50-tb/\n\nhttps://docs.aws.amazon.com/AmazonS3/latest/userguide/qfacts.html\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo - just doc updates.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Yerzhan Mazhkenov <20302932+yerzhan7@users.noreply.github.com>",
          "timestamp": "2026-01-13T18:34:42Z",
          "tree_id": "a9e3f800f72e2315b557e50e094f40d0e351313e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/23bffa176933a7ab15fbeb0e6d548595da65a1c8"
        },
        "date": 1768336728037,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2191.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 31.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2448.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 30.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2187.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 49.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2265.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2409.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 32.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2451.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 34.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2185.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2193.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2633.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 33.875,
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
          "id": "763ac0f9dac0c57059c60957373ea34fa10f161c",
          "message": "Update Mountpoint's semantics to enable opening a new file handle on an inode if all the existing open handles have been flushed (#1704)\n\nUpdate Mountpoint's semantics to enable opening a new file handle on an\ninode if **all** the existing open handles have been flushed.\n\nThis allows for the filesystem to not depend on a `release` request to\ncomplete pending (delayed) upload and cleanup the internal state of the\ninode within Mountpoint; alleviating situations where an `open` request\nmade immediately after a close(`flush`) request leads to a race\ncondition between the `release` following the close and the new `open`,\nwhich is sometimes an issue when the upload to S3 has been delayed until\n`release`.\n\n### Does this change impact existing behavior?\n\nThe semantics continue to allow **only one writer OR one/many readers**\nconcurrently active for a file; however, now a new handle can be opened\nwhich can override the current active handles (despite not being\nofficially released) if all the active handles are marked \"flushed\".\nAs part of opening the new handle, Mountpoint will also attempt\nuploading any pending data written for the previous file handle. All the\nrequests to the overridden handle(s) will then start to fail or be\nno-op.\nMultiple concurrent writers or concurrent readers and writers are still\nnot allowed.\n\nA handle is marked \"flushed\" when a close/`flush` is called on a file\ndescriptor mapped to that handle. A following `read`/`write` request\nwill revert that flushed state and signify that the handle is actively\nin use and can not be overridden. We maintain this information at the\nindividual handle level and also in an inode-locked map of handles.\n\nBreaking changes:\n- Requests made to a duplicate file descriptor for a flushed file handle\nwill start to fail (for e.g. a `read`/`write` would fail with `EBADF:\nfile handle has been invalidated by a newer handle opened`) or be no-op\n(for e.g. `flush`, `release`) if a new `open` has overridden the flushed\nhandle(s).\n- A race condition can occur between a `read`/`write` request for a\nduplicate file descriptor on an existing (flushed) handle and multiple\nconcurrent `open` requests, and any of them might succeed due to\nparallel processing of FUSE requests within Mountpoint. However, only\none of them will ever succeed and there cannot be two concurrent writers\nor reader+writer for the inode at any point in time.\n- An `open` request for an inode might fail if the pending upload to S3\nfails. This is independent of whether the file has been truncated in the\nsecond `open`.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, it needs a changelog entry and update to the semantics.md. Yes it\nalso requires a version change.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-14T19:13:24Z",
          "tree_id": "15a4bfce27a0cdfc0d625226b5aa90d567d5ff5f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/763ac0f9dac0c57059c60957373ea34fa10f161c"
        },
        "date": 1768425430052,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2248.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2316.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 32.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2277.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 25.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2649.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 27.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2205.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2493.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 43.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2269.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2200.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2205.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 44.29296875,
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
          "id": "8ed4ae4287e8b302a18e12c7fcbd593439f4dba6",
          "message": "Update CRT submodules to latest releases (#1744)\n\nUpdate the CRT submodules to the latest releases.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-auth ab03bdd9..a4409b95:\n  > Add proxy settings for profile credential provider (#285)\n  > Add proxy config for credential providers (#281)\n  > swap to use aws_ecc_decode_signature_der_to_raw_padded for login provider (#279)\n  > add aws login provider (#278)\n  > create a common base for http client, migrate sso (#276)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal 3c6d901a..1cb94121:\n  > Support static buffers in ecc signature helpers (#243)\n  > Add helper to convert signature to padded r and s pair (#242)\n  > Fix byo for ecc from asn1 (#241)\n  > Relax EC keygen to work on all platforms (#240)\n  > Remove skip test (#239)\n  > Move Linux from openssl_hkdf to ref_hkdf (#238)\n  > Fix warning when using cpp compiler (#236)\n  > Add functions for sha512 hmac hkdf (#234)\n  > SHA512 HMAC (#233)\n  > Export logic for ec keys (#232)\n  > Refactor ec key import (#229)\n  > Add helpers for encoding/decoding der ecdsa signatures to raw (#230)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 31578beb..95515a8b:\n  > Base64url support (#1229)\n  > Add va_end call (#1228)\n  > Remove no-op from CMakeLists.txt (#1226)\n  > Extend Platform Helper Functions (#1225)\n  > Remove apple-specific pthread_getname compile definition (#1224)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-compression f951ab2b..d8264e64:\n  > change stale issue and discussion handling to run once a week (#76)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#74)\n  > make exports consistent (#73)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ce0d6562..acf31399:\n  > Revert \"Fix CI issues\" (#542)\n  > Automate the renew of the cert used in test (#540)\n  > Add helper to check for transient errors (#537)\n  > update cert as it's expired  (#539)\n  > Fix CI issues (#538)\n  > Configurable ports for HTTP/1.1 mock server (#535)\n  > Update mock server (#534)\n  > Add no_proxy_hosts configuration to proxy options/config. (#532)\n  > Move away from https://postman-echo.com (#533)\n  > Fix warnings found by the Undefined Behavior Sanitizer (#530)\n  > change stale issue and discussion handling to run once a week (#529)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8906a02c..d5ad01ce:\n  > Return error on using tls13 on macOS (#788)\n  > change to net test case (#789)\n  > Revert to commit 4c48e60 (#787)\n  > Fix compilation warnings (#783)\n  > Add helper to check for transient errors (#782)\n  > macOS dispatch queue and secitem (#758)\n  > Fix typos for DSA (#768)\n  > Disable clang-9 CI job (#780)\n  > Clean up cond var after all referencing threads are joined (#772)\n  > Thread name too long on CPU with more than 100 cores (#770)\n  > Expose Event Loop Type of ELG (#765)\n  > Correct PQ-opt-out s2n policy (#759)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 332dd22c..e9d1bde:\n  > [fix]S3express backpressure (#612)\n  > Revert \"Skip test on Apple\" (#611)\n  > Auto - Update S3 Ruleset & Partition (#610)\n  > Skip test on Apple (#606)\n  > Update rule set (#599)\n  > regression test for wrong assertion (#605)\n  > don't crash for server error. Handle it nicely (#604)\n  > disable hedging for s3 express (#602)\n  > fix the read window update from the same thread (#601)\n  > Delivery exact bytes for read window (#600)\n  > Accept memory limit setting from envrionment variable (#598)\n  > Fix the deadlock for pause/cancel (#596)\n  > fix compiler warnings (#593)\n  > Dynamic default part size (#575)\n  > Auto - Update S3 Ruleset & Partition (#590)\n  > Auto - Update S3 Ruleset & Partition (#585)\n  > Add new metrics (#578)\n  > Auto - Update S3 Ruleset & Partition (#583)\nSubmodule mountpoint-s3-crt-sys/crt/aws-checksums 9978ba2c..270b15ac:\n  > Add combine functions for crc32/64 (#109)\n  > change stale issue and discussion handling to run once a week (#106)\nSubmodule mountpoint-s3-crt-sys/crt/aws-lc e0ee14ec..728811ee:\n  > Prepare v1.66.2 (#2930)\n  > Fix ppc64le; Improve platform detection (#2926)\n  > Replace password string with proper class (#2925)\n  > Consolidate FORMAT_DER/PEM in tool-openssl (#2929)\n  > fix(target): fix mipseb 64bit compile (#2923)\n  > Add randomized unit testing for EVP_CIPHERs (#2922)\n  > Remove pkcs8 expected in test (#2924)\n  > Fix the libwebsockets integration test script (#2912)\n  > Fix incorrect assembler directive in AArch64 code (#2910)\n  > Speed up legacy AVX CI (#2876)\n  > Prepare v1.66.1 (#2918)\n  > ML-DSA: Missing Private Key Validation Checks (#2874)\n  > Fix extension processing order in x509 cli (#2916)\n  > Add stdin support for pkcs8 tool (#2915)\n  > Add openssl genpkey cli utility tool (#2907)\n  > Remove OPENSSL_NO_BF for real (#2914)\n  > Fix socat integration test (#2911)\n  > Iterate through all DNS entries in connect CLI (#2906)\n  > Prepare v1.66.0 release (#2900)\n  > Implement enc CLI (#2877)\n  > Several CLI Fixes (#2898)\n  > [tool-openssl] basic asn1parse support (#2882)\n  > Remove rsa expected in test (#2901)\n  > Support stdin for openssl rsa tool (#2899)\n  > Blowfish OFB Block Cipher Mode Support (#2892)\n  > Run ACCP integration tests on aarch64 (#2894)\n  > Bump urllib3 from 2.5.0 to 2.6.0 in /tests/ci (#2886)\n  > Add RSA_X931_PADDING to rsa.h (#2889)\n  > tool-openssl: pkcs8 error output on decrypt (#2883)\n  > Fix openssl comparison tests (#2888)\n  > Add sha1 CLI (#2885)\n  > Route ML-DSA ACVP to the right APIs (#2884)\n  > Add support for external contexts in ML-DSA ACVP (#2880)\n  > Clarify comments and API behaviour for equal-preference for TLS 1.3  (#2873)\n  > Add encap/decapKeyCheck support in ACVP (#2872)\n  > Prepare v1.65.1 (#2870)\n  > Move dk to Tests in ML-KEM ACVP (#2867)\n  > Add support for HMAC-SHA3 to ACVP tool (#2866)\n  > Add ACVP support for AES CFB128 (#2861)\n  > Replicate OpenSSL 1.1.1 behavior for BIO_s_mem BIO_NOCLOSE (#2864)\n  > Verify size of mlen in ML-DSA external mu mode (#2841)\n  > Add conversion and traceability for third-party test vectors (#2839)\n  > Add EVP_bf_cfb64 (#2851)\n  > Exclude .git from source size metric reporting (#2858)\n  > Fix AWS-LC Analytics Job (#2855)\n  > s_client: Add TLS 1.2 and 1.3 protocol selection flags (#2850)\n  > Adjust image-build-android concurrency group (#2848)\n  > Prepare AWS-LC v1.65.0 (#2844)\n  > Adjust script to handle other event types (#2845)\n  > Add authorization environments (#2843)\n  > Match req CLI behavior with OpenSSL (#2836)\n  > Bump openssl from 0.10.66 to 0.10.73 in /tests/ci/lambda (#2550)\n  > Add CFI directives in aesv8-armx.pl (#2634)\n  > Add CFI directives to chacha-armv8.pl (#2633)\n  > Set SSL_R_NO_CIPHER_MATCH when failing to set ciphers (#2840)\n  > Guard for __NR_getrandom use (#2834)\n  > Grant OIDC Token Permissions to Top-Level Image Build Workflow (#2837)\n  > Make N1 cpucap a subset of that of V1 and V2 (#2815)\n  > AES-XTS Enc Dec test on rand incremental length inputs (#2795)\n  > Add infrastructure for managing third-party test vectors (#2811)\n  > [SCRUTINICE] Avoid NULL dereference (#2823)\n  > Fix workflow permissions for formal verification & windows (#2831)\n  > Android Docker Image Build (#2830)\n  > Fix HAProxy CI failures (#2829)\n  > Fix OCSP CI failure (#2828)\n  > Refactor the staging repository to make the name consistent for writing IAM policies (#2824)\n  > Fix tpm2-tss CI; update patches (#2827)\n  > Fix apache httpd; keep pytest <7.0 (#2825)\n  > [SCRUTINICE] Fix unchecked return value (#2773)\n  > Fix bind9 CI failure (#2817)\n  > Remove Docker Image build infrastructure from CodePipeline (#2822)\n  > Setup OIDC for exchanging GitHub Token for AWS Credentials (#2819)\n  > Fix openldap; regenerate configure script (#2818)\n  > Remove unused Wycheproof test vectors (#2792)\n  > Disable old Windows jobs (#2812)\n  > Use new images for fuzzing and x509 (#2804)\n  > Prepare release v1.64.0 (#2810)\n  > Ensure HMAC_Init_ex reinitializes data properly (#2806)\n  > Implement more options for req CLI (#2775)\n  > Extend grv asan timeout for Golang to allow completion (#2805)\n  > Rename fork to fork UBE (#2803)\n  > Make poly_chknorm constant flow (#2788)\n  > Support NetBSD (#2754)\n  > Migrate analytics job to be GitHub triggered (#2779)\n  > Use right compiler with ruby CI (#2801)\n  > Migrate to macos-15-intel (#2802)\n  > Bump MySQL version tag to 9.5.0 (#2768)\n  > Rename snapsafe to VM UBE (#2800)\n  > Remove dead code (#2797)\n  > Use GitHub-based Verification Images (#2798)\n  > Add scrutinice pull permissions for aws-lc/amazonlinux repository (#2799)\n  > Support \"openssl dhparam\" (#2790)\n  > Use C++11 atomics to update session stats (#2786)\n  > GitHub-based Formal Verification Image Build (#2796)\n  > Additional options for \"openssl c_client\" (#2791)\n  > Remove python codebuild patches (#2793)\n  > Support more \"openssl rsa\" options (#2777)\n  > ECR Repositories for Android and Formal Verification Images (#2794)\n  > Update max polyz value (#2787)\n  > Prepare release v1.63.0 (#2789)\n  > AES-XTS on AArch64: Set w19 earlier before cipher-stealing of 1 block + tail. (#2785)\n  > Tool util functions in tool_util.cc (#2778)\n  > Failing no-op implementations for several UI functions (#2772)\n  > Ci add rpmbuild job (#2774)\n  > Add compiler to 24.04 docker image (#2783)\n  > Migrate Windows Omnibus to GitHub Workflow (#2780)\n  > Fix Ruby integration CI (#2765)\n  > Fix tpm2-tss CI (#2767)\nSubmodule mountpoint-s3-crt-sys/crt/s2n-tls 30f40f23..3276a087:\n  > Fix unit test build errors under -Werror (#5686)\n  > test(integration): add BoringSSL cohort to expand mTLS coverage (#5659)\n  > test(integration): add rust test for prefer low latency (#5684)\n  > test: confirm errors for no matching parameters (#5679)\n  > fix: incorrect group reported for TLS 1.2 session resumption (#5673)\n  > Fix: Unpin the rust nightly toolchain version (#5682)\n  > Fix: print diagnostics to stdout in s2n_resume_test (#5660)\n  > build(deps): bump cross-platform-actions/action from 0.31.0 to 0.32.0 in /.github/workflows in the all-gha-updates group (#5685)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5675)\n  > test(integration): refactor PQ tests to utilize in-memory harness (#5667)\n  > test(integration): add async cert verify and offload 'stress' test (#5653)\n  > feat: add handshake event (#5635)\n  > chore: Fix increase in Rust unit test timings (#5677)\n  > feat: verify certificate issuer intent by default (#5657)\n  > (chore): Revert \"feat(build): Improve OpenSSL libcrypto discovery (#5572)\" (#5664)\n  > ci: update clang format version (#5661)\n  > (chore): Rust bindings bump 0.3.32 (#5662)\n  > test: update CRL certs to comply with intent validation (#5651)\n  > feat(build): Improve OpenSSL libcrypto discovery (#5572)\n  > Import Cloudfront PQ TLS Policies (#5539)\n  > ci: add typo check to ci (#5491)\n  > build(deps): bump ytanikin/pr-conventional-commits from 1.4.2 to 1.5.1 in /.github/workflows in the all-gha-updates group (#5656)\n  > fix: refactor negotiate loop to fix issue with async callback (#5641)\n  > tests(integration): cases for TLS 1.3 group selection (#5652)\n  > refactor(tls-harness): use single test pair IO to allow for decryption (#5648)\n  > feat: Ability to set \"strongly preferred\" groups (#5634)\n  > test(integration): add mTLS integration tests (#5638)\n  > fix: allow for warning level TLS alerts prior to version negotiation (#5646)\n  > chore(bindings-release): s2n-tls v0.3.31 release (#5649)\n  > feat: add additional application context into Connection (#5637)\n  > test(integv2): remove dynamic record sizing test and related cleanup (#5644)\n  > test: add test certs for cert intent validation (#5630)\n  > feat: additional rfc9151 compat policy without sha1 hmac (#5645)\n  > feat: improve performance of getting validated cert chain from libcrypto (#5622)\n  > feat: add rfc9151 compat policies (#5615)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5640)\n  > chore: s2n-tls-hyper version bump (#5636)\n  > chore: Rust bindings release 0.3.30 (#5633)\n  > feat: add client hello random getter  (#5620)\n  > fix: enable -Wcast-qual flag for libcrypto=awslc (#4735)\n  > docs: Adds note about serialization error case (#5617)\n  > ci: add rust integration test to codebuild start script (#5623)\n  > test: require both MLKem and MLDsa capabilities for pure MLKEM tests (#5621)\n  > refactor(harness): Extend handshake logic to support TLS 1.2 (#5614)\n  > fix: replace `uint8_t` in for loops (#5619)\n  > ci: move the integnix job to us-west-2 (#5604)\n  > fix(ci): check Amazon copyright statement (#5611)\n  > feat: add pure ML-KEM support (#5586)\n  > ci: exclude `validate-pr-title` from merge queue (#5613)\n  > ci: update cmake version (#5612)\n  > test(integration): add dynamic record sizing test (#5608)\n  > build(deps): bump the all-gha-updates group across 1 directory with 2 updates (#5605)\n  > fix(ci): add `build` to the validate-pr-title CI job (#5610)\n  > ci: PR conventional commit lint GHA (#5603)\n  > docs: add dev docs on handshake and io (#5596)\n  > Revert \"feat: basic security policy builder interface (#5493)\" (#5599)\n  > docs: update pull request template (#5591)\n  > fix: update memory usage test assertions (#5592)\n  > fix: update action user name (#5600)\n  > feat(integration): enable CodeBuild and Nix for rust integration tests (#5578)\n  > chore: Rust bindings release 0.3.29 (#5595)\n  > refactor: remove unused s2n_socket_set_read_size method (#5594)\n  > docs: comments for blob, stuffer methods (#5326)\n  > test: add memory profiler test (#5329)\n  > ci: scope down GitHub Token permissions (#5570)\n  > build(deps): bump the all-gha-updates group in /.github/workflows with 2 updates (#5585)\n  > refactor: Adds tls13 ciphersuites to default/default_fips policy (#5560)\n  > fix: update test_pq_only policy snapshot (#5583)\n  > feat: add PQ only policy support (#5545)\n  > feat: output utility for security policy (#5502)\n  > fix: update test broken by Openssl dhe generation change (#5580)\n  > ci: pin to older kissat version to unblock CBMC (#5581)\n  > feat: Improve supported cipher suites in RFC9151 policy (#5559)\n  > build(deps): update regex requirement from =1.9.6 to =1.12.1 in /bindings/rust/extended (#5556)\n  > build(deps): update zeroize requirement from =1.7.0 to =1.8.2 in /bindings/rust/extended (#5537)\n  > build(deps): bump the all-gha-updates group across 1 directory with 4 updates (#5548)\n  > docs: update nix integration test instructions for uvinteg function (#5550)\n  > fix(test): Reduce s2n_security_policies_test duration (#5558)\n  > refactor 2/2: Fix security policy version in tests to numbered string (#5553)\n  > fix(aws-kms-tls-auth): supress logging & version bump (#5554)\n  > build(deps): update rtshark requirement from 3.1.0 to 4.0.0 in /tests/pcap in the all-cargo-updates group across 1 directory (#5555)\n  > refactor: add psk receiver (#5552)\n  > refactor 1/2: Fix security policy version in tests to numbered string (#5549)\n  > chore: update bindgen version to v0.69.0 (#5396)\n  > refactor(aws-kms-tls-auth): psk provider using HMAC psks (#5530)\n  > chore(bindings): revert dependency pins (#5544)\n  > fix: validate protocol version during connection deserialization (#5523)\n  > chore: add new team member (#5542)\n  > chore: bindings release 0.3.28 (#5540)\n  > feat(bindings): expose cert validation callback (#5357)\n  > bindings(rust): bump extended crates MSRV to 1.72.0 (#5534)\n  > fix(usage-guide): Update book.toml for mdbook 0.5 release (#5535)\n  > chore: bindings release 0.3.27 (#5526)\n  > refactor(aws-kms-tls-auth): add hmac based psk derivation (#5519)\n  > ci: install missing rust component for gitthub action workflows (#5528)\n  > docs: Small doc changes for KTLS (#5521)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-15T11:51:53Z",
          "tree_id": "53accad6b151ab89edcdd1f87976bc0c37b4fb71",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8ed4ae4287e8b302a18e12c7fcbd593439f4dba6"
        },
        "date": 1768485321783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2190.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2198.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2184.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2210.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 35.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2292.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 35.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2205.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 39.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2183.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2208.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2171.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.05078125,
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
          "id": "3fd98410a7b05ca146eb4ba2c0020315238af37b",
          "message": "Upgrade toolchain to Rust 1.92 (#1748)\n\nUpgrade toolchain to Rust 1.92.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-16T12:36:14Z",
          "tree_id": "962ecad6da58428677b0da93e33635a6bb318d7a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3fd98410a7b05ca146eb4ba2c0020315238af37b"
        },
        "date": 1768574366929,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2193.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2433.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 35.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2176.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 34.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2192.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 32.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2189.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2183.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 37.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2179.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2179.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2195.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.76953125,
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
          "id": "0e71446993dd83762e4556dcecac4fa2357bf52c",
          "message": "Upgrade aws-sdk-s3 dependency (in tests) (#1750)\n\nUpgrade `aws-sdk-s3` dependency (used in tests) to\n[v1.120.0](https://crates.io/crates/aws-sdk-s3/1.120.0).\n\nAddresses\n[RUSTSEC-2026-0002](https://rustsec.org/advisories/RUSTSEC-2026-0002.html).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2026-01-21T14:35:28Z",
          "tree_id": "6a50f5735970f428c781c47839c64d66dac9028b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0e71446993dd83762e4556dcecac4fa2357bf52c"
        },
        "date": 1769013525739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2377.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 34.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2590.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 34.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2252.74609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 32.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2180.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 30.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2195.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 33.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2363.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 40.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2186.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2192.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2202.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.5546875,
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
          "id": "7b4d9d173869d24ebd445762a803203047e6c0b4",
          "message": "Add `max_background` setting to `S3FilesystemConfig` (#1746)\n\nAdd `max_background` setting to `S3FilesystemConfig`.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, new version of `mountpoint-s3-fs`.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.co.uk>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.co.uk>",
          "timestamp": "2026-01-21T15:43:04Z",
          "tree_id": "0a2ca85495f4584b12827545516ba0cde324359e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/7b4d9d173869d24ebd445762a803203047e6c0b4"
        },
        "date": 1769017600744,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2366.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2469.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2310.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 71.57421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2373.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 36.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2255.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2167.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 41.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2516.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 25.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2307.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2171.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.01171875,
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
          "id": "ebe82da2e60e20a4854e63bb5396f68f4c52ceff",
          "message": "Update semantics documentation to describe changes as part of the open-after-close fix (#1752)\n\nUpdate semantics documentation to describe changes done as part of the\nopen-after-close fix in [PR\n#1704](https://github.com/awslabs/mountpoint-s3/pull/1704)\n\nUpdates done to `doc/SEMANTICS.md` documentation and some more details\nadded in`mountpoint-s3/CHANGELOG.md`.\n\n### Does this change impact existing behavior?\n\nNo, documentation update only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, documentation update only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.com>\nCo-authored-by: Mansi Pandey <mansipnd@amazon.com>",
          "timestamp": "2026-01-22T11:26:43Z",
          "tree_id": "24caf93263596e959007c15af7ef3d497292b961",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ebe82da2e60e20a4854e63bb5396f68f4c52ceff"
        },
        "date": 1769088670412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2201.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 32.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 2189.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 33.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2384.92578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 33.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2308.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 33.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 2188.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 34.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2187.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 36.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2180.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 26.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2186.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2196.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 26.36328125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}