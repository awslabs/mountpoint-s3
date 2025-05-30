window.BENCHMARK_DATA = {
  "lastUpdate": 1748624589929,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "distinct": false,
          "id": "f422b3ad6355f88d08d1ff9f369d68e962f7964e",
          "message": "Parse manifest from csv (#1386)\n\nAdd an iterator parsing a CSV file and some tests for it. \n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T09:53:14Z",
          "tree_id": "4c50061712dc38fe510d5e30250af344051b6e42",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f422b3ad6355f88d08d1ff9f369d68e962f7964e"
        },
        "date": 1746619787114,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10019.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22597.17578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32740.0859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 367.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33293.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36500.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10591.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12207.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11926.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 841.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 563.08984375,
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
          "distinct": false,
          "id": "d960a927525a0be73c428691685415b85f68cb15",
          "message": "Remove manifest from the released executable (#1402)\n\nRemove the code using `rusqlite` from the released executable.\nImplementation of the manifest using this crate becomes gated behind the\n`manifest` feature flag.\n\n### Does this change impact existing behavior?\n\nNo, only used in tests.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in tests.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-07T14:10:22Z",
          "tree_id": "ceaffd0530ebaebb1dbdd18fe19e10ad4cc8a07e",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d960a927525a0be73c428691685415b85f68cb15"
        },
        "date": 1746635261236,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10790.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17539.3359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33966.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 359.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 311.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30800.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32379.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 374.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9993.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8263.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10732.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 1119.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 674.02734375,
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
          "id": "78adb5f947e71b1937b349e555867008975eeb5f",
          "message": "Update CRT submodules (#1404)\n\n**What changed and why?**\nThis pull request updates the CRT submodules (aws-c-cal, aws-c-http,\naws-c-io, aws-c-s3, aws-checksums, aws-lc, s2n-tls) to their latest\ntagged releases.\n\nUpdating these ensures we incorporate the latest bug fixes, security\nupdates, and improvements from the AWS CRT libraries, including\naddressing the issue tracked in\n[#1381](https://github.com/awslabs/mountpoint-s3/issues/1381) related to\navoiding unnecessary Content-Length: 0 headers on GET/HEAD/DELETE\nrequests.\n\n### Does this change impact existing behavior?\n\nThere are no breaking changes to the Mountpoint S3 client or filesystem\nbehavior.\nAll tests (cargo test) passed locally after the update, and changelogs\nhave been updated accordingly.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entries have been added to:\n\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n\nVersion numbers have also been updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>\nCo-authored-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T10:04:49Z",
          "tree_id": "760739eb6345a678f209b068f69aacdb7c1a5ae2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/78adb5f947e71b1937b349e555867008975eeb5f"
        },
        "date": 1746793275657,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14283.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21504.18359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33748.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 357.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37956.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 404.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38699.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.3828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12705.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11099.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10407.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 643.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.796875,
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
          "id": "c6bc7dbc6a2982395dfc274045724d3710a4dbd5",
          "message": "Update crate versions and change logs for next crate publish (#1405)\n\nThis change ensures that all crate versions are up-to-date for\npublishing new crate releases.\nIt also ensures the change logs are updated (with some minor\nreordering), and fixes some comments related to crate versioning.\n\n### Does this change impact existing behavior?\n\nThis is version updates and changelog updates only - no.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nThis is a changelog update and version change!\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T13:00:05Z",
          "tree_id": "7846b30ca1f0a8b9cafcc415f9ded9bd96b28696",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c6bc7dbc6a2982395dfc274045724d3710a4dbd5"
        },
        "date": 1746803611255,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13015.9609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21098.81640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36612.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.17578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32736.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33640.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10302.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11229.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11878.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 517.32421875,
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
          "id": "f6ec1e1395b4f60e1ba880240595beeae528cc4b",
          "message": "Update read-path layer benchmarks to consistently report throughput in Gib/s (#1397)\n\nThis updates the `prefetch_benchmark` and `download_crt` to report\nthroughput consistently with the `client_benchmark`. Note, the upload\npath is untouched - notably, uploader benchmarks format is quite\ndifferent from these in reporting and still uses MiB/s.\n\n### Does this change impact existing behavior?\n\nThis updates the output of the read-path benchmarks to be consistently\nformatted. There's no way to switch back to the old format.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-09T14:01:29Z",
          "tree_id": "9154ca72784202ed21727e2f7e84bfef095a3870",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f6ec1e1395b4f60e1ba880240595beeae528cc4b"
        },
        "date": 1746807531029,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12039.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19734.80078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30112.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 348.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33588.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33024.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9946.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12276.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11300.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 877.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 581.80078125,
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
          "id": "21a65f04f5fedd508e93349c81a6df95c5c9d472",
          "message": "Release v1.17.0 (#1407)\n\nPrepare for v1.17.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-12T10:03:34Z",
          "tree_id": "255bfb1354abda9e10d9178e567b48602493545f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/21a65f04f5fedd508e93349c81a6df95c5c9d472"
        },
        "date": 1747052175376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13489.69921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22549.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35375.6015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36834.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32617.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10750.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10270.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13705.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 615.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 447.61328125,
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
          "distinct": false,
          "id": "1420c5a65b778e6e00d1f4d3bdd01172d0dd622a",
          "message": "Add example for new configuration options and manifest (#1403)\n\nThis adds a new example to Mountpoint, which showcases how MP can be\nconfigured via API. In this example, we use the API to set configuration\noptions parsed from a json file.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-13T08:46:58Z",
          "tree_id": "d54f7eaed4e0def99e69fd5c7618ab94a730c1e1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1420c5a65b778e6e00d1f4d3bdd01172d0dd622a"
        },
        "date": 1747134187421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12953.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22210.14453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36205.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 356.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33814.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32772.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8657.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10785.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12924.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 800.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 512.78515625,
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
          "id": "5ad378d6aaf77ab37e1b7938672589b6c6389eff",
          "message": "Turn off comment on benchmark alert (#1412)\n\nDisable the last comment on alert for benchmarks. We don't rely on this\nmechanism anymore, and it is currently broken for pull requests:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/14933031147/job/41953835707#step:9:138.\n\nInstead, you should review the benchmark summary on the job.\n\n### Does this change impact existing behavior?\n\nFor benchmarks on GitHub Actions, the last remaining case (throughput\nbenchmarks S3 standard) will no longer make commit comments.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, repo change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-13T12:13:13Z",
          "tree_id": "0185c15a542c838d749269b9465312d723052f29",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5ad378d6aaf77ab37e1b7938672589b6c6389eff"
        },
        "date": 1747146404021,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13386.36328125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22037.640625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36422.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 82.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 376.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32533.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32153.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9518.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10940.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13031.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 776.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.77734375,
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
          "id": "a1a162a36a9157699656ed97f3b178d345254114",
          "message": "Bump astral-sh/setup-uv from 5 to 6 (#1390)\n\nBumps [astral-sh/setup-uv](https://github.com/astral-sh/setup-uv) from 5\nto 6.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/astral-sh/setup-uv/releases\">astral-sh/setup-uv's\nreleases</a>.</em></p>\n<blockquote>\n<h2>v6.0.0 🌈 activate-environment and working-directory</h2>\n<h2>Changes</h2>\n<p>This version contains some breaking changes which have been gathering\nup for a while. Lets dive into them:</p>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#activate-environment\">Activate\nenvironment</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#working-directory\">Working\nDirectory</a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#default-cache-dependency-glob\">Default\n<code>cache-dependency-glob</code></a></li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/blob/HEAD/#use-default-cache-dir-on-self-hosted-runners\">Use\ndefault cache dir on self hosted runners</a></li>\n</ul>\n<h3>Activate environment</h3>\n<p>In previous versions using the input <code>python-version</code>\nautomatically activated a venv at the repository root.\nThis led to some unwanted side-effects, was sometimes unexpected and not\nflexible enough.</p>\n<p>The venv activation is now explicitly controlled with the new input\n<code>activate-environment</code> (false by default):</p>\n<pre lang=\"yaml\"><code>- name: Install the latest version of uv and\nactivate the environment\n  uses: astral-sh/setup-uv@v6\n  with:\n    activate-environment: true\n- run: uv pip install pip\n</code></pre>\n<p>The venv gets created by the <a\nhref=\"https://docs.astral.sh/uv/pip/environments/\"><code>uv\nvenv</code></a> command so the python version is controlled by the\n<code>python-version</code> input or the files\n<code>pyproject.toml</code>, <code>uv.toml</code>,\n<code>.python-version</code> in the <code>working-directory</code>.</p>\n<h3>Working Directory</h3>\n<p>The new input <code>working-directory</code> controls where we look\nfor <code>pyproject.toml</code>, <code>uv.toml</code> and\n<code>.python-version</code> files\nwhich are used to determine the version of uv and python to install.</p>\n<p>It can also be used to control where the venv gets created.</p>\n<pre lang=\"yaml\"><code>- name: Install uv based on the config files in\nthe working-directory\n  uses: astral-sh/setup-uv@v6\n  with:\n    working-directory: my/subproject/dir\n</code></pre>\n<blockquote>\n<p>[!CAUTION]</p>\n<p>The inputs <code>pyproject-file</code> and <code>uv-file</code> have\nbeen removed.</p>\n</blockquote>\n<h3>Default <code>cache-dependency-glob</code></h3>\n<p><a href=\"https://github.com/ssbarnea\"><code>@​ssbarnea</code></a>\nfound out that the default <code>cache-dependency-glob</code> was not\nsuitable for a lot of users.</p>\n<p>The old default</p>\n<!-- raw HTML omitted -->\n</blockquote>\n<p>... (truncated)</p>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/c7f87aa956e4c323abf06d5dec078e358f6b4d04\"><code>c7f87aa</code></a>\nbump to v6 in README (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/382\">#382</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aadfaf08d64f83cdd98eea14fdab8eb08f73656c\"><code>aadfaf0</code></a>\nChange default cache-dependency-glob (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/352\">#352</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/a0f9da6273a171f2d94cce2036eaf5a07fefa23c\"><code>a0f9da6</code></a>\nNo default UV_CACHE_DIR on selfhosted runners (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/380\">#380</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/ec4c6916287cf1471f9f803d79ef6a0a04520e81\"><code>ec4c691</code></a>\nnew inputs activate-environment and working-directory (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/381\">#381</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/aa1290542ebcd3b6932d825ed2b40807f82b2fdd\"><code>aa12905</code></a>\nchore: update known checksums for 0.6.16 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/378\">#378</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fcaddda076a8158a712b6d64986baf606c446694\"><code>fcaddda</code></a>\nchore: update known checksums for 0.6.15 (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/377\">#377</a>)</li>\n<li><a\nhref=\"https://github.com/astral-sh/setup-uv/commit/fb3a0a97fac846cb3395265a3087ab94ad3ca2a0\"><code>fb3a0a9</code></a>\nlog info on venv activation (<a\nhref=\"https://redirect.github.com/astral-sh/setup-uv/issues/375\">#375</a>)</li>\n<li>See full diff in <a\nhref=\"https://github.com/astral-sh/setup-uv/compare/v5...v6\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=astral-sh/setup-uv&package-manager=github_actions&previous-version=5&new-version=6)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-05-14T08:03:22Z",
          "tree_id": "530db272c1f8159fc1ebb78eef733907b3d97719",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a1a162a36a9157699656ed97f3b178d345254114"
        },
        "date": 1747217818448,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12453.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 18840.54296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35570.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 95.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 316.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32094.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37709.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12111.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 265.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11701.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12887.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 716.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.51171875,
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
          "id": "e76a2ad831c2f57758fbb69ad69ab5326e807f2b",
          "message": "Add test demonstrating MP behavior with ABAC IAM policies (#1415)\n\nThis adds new tests to demonstrate/document the behavior of Mountpoint\nwhen trying to implement attribute-based access control (ABAC). The\npurpose here is to simply demonstrate the behavior, so that we can\nunderstand current state/options.\n\n### Does this change impact existing behavior?\n\nNo, new test only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, new test only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T12:54:04Z",
          "tree_id": "18059fa40acc87fb9f2e0c4187f55392a6047f80",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e76a2ad831c2f57758fbb69ad69ab5326e807f2b"
        },
        "date": 1747235347804,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12340.51953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20120.5390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30868.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.87890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33633.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34727.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9440.078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11501.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10620.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 730.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 482.26171875,
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
          "id": "6f91f234c6fb939c92d1a115cacaf8f881e17dfe",
          "message": "Update contributing to address updates of 0.x.y patch versions (#1406)\n\nThe guidance on how to update dependencies (and their dependents) was\nunclear. This change updates the contributing guide.\n\n### Does this change impact existing behavior?\n\nDoc change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, doc change only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-14T14:24:29Z",
          "tree_id": "d98c0c4a2becbd973d4a658530432b01325165a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6f91f234c6fb939c92d1a115cacaf8f881e17dfe"
        },
        "date": 1747240823376,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13605.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20352.203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39167.2890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 370.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 361.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.08203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34884.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35180.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12227.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9470.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10806.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.62890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 813.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 533.95703125,
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
          "id": "09a22a9c025816872a6c6607166ed8ef0f80d3d6",
          "message": "Remove unused read timeout from prefetcher configuration (#1421)\n\nPrefetcher read timeouts were removed in commit 0ca2c771. The motivation\nthere was that timeouts were added due to deadlock issues early in\ndevelopment of Mountpoint, and that they had since been eliminated.\nThere is an open next step to introduce timeouts at a FUSE operation\nlevel which has not yet been completed (see\nhttps://github.com/awslabs/mountpoint-s3/issues/124).\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes internal config struct only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-15T09:26:02Z",
          "tree_id": "c016737272a4116b9a05d18a765e2482c621cc16",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/09a22a9c025816872a6c6607166ed8ef0f80d3d6"
        },
        "date": 1747309202774,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15849.94921875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24176.359375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35004.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 315.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35795.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37779.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9596.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11683.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12728.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 664.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.73828125,
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
          "id": "be792de9ef2e76f6993bc6126db679bb2cb34fc0",
          "message": "Adding fstab tag to user agent headers (#1420)\n\n### What changed and why?\n\n- This PR adds a new mp-fstab tag to the user agent header when\nMountpoint is launched via an fstab entry.\n- Introduces an is_fstab field to CliArgs, which is set to true when\nparsing arguments from fstab.\n- This allows downstream consumers (like the product team) to detect and\nanalyze fstab-based usage of Mountpoint for Amazon S3, supporting\nproduct analytics and future UX improvements.\n\nExample Request Header\n<img width=\"719\" alt=\"image\"\nsrc=\"https://github.com/user-attachments/assets/10561b96-b893-496f-bab4-3f00ae568e68\"\n/>\n\n\n### Does this change impact existing behavior?\n\n- No breaking changes.\n- The only impact is the addition of the mp-fstab tag in the user agent\nheader for fstab-based mounts.\n- All other mounting methods and user agent construction remain\nunchanged.\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-15T10:16:23Z",
          "tree_id": "615c10da9bea9d73cb8eaecd4d1cfecc767eab31",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/be792de9ef2e76f6993bc6126db679bb2cb34fc0"
        },
        "date": 1747312372535,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12437.109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21482.375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35938.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.0703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.18359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34886.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 39797.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 402.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10686.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10889.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11462.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.92578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 768.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 466.33984375,
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
          "id": "676157b668a0b76b3387acb3f67d3bce58d2774e",
          "message": "Add errno check to FS mock S3 tests (#1424)\n\nSimple update to the test to check error number. We check this in other\nparts of the code, but this provides integration testing using the mock\nS3 HTTP server tests.\n\nProvides some basic coverage related to #1422.\n\n### Does this change impact existing behavior?\n\nNo, test change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-16T11:57:29Z",
          "tree_id": "e4a9ba6ba6b16ff193851b4ddef74cc132179ef3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/676157b668a0b76b3387acb3f67d3bce58d2774e"
        },
        "date": 1747404770722,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13895.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20185.83203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35346.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 361.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 82.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 372.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 314.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37831.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37255.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11044.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10611.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11009.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 747.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 504.53125,
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
          "id": "172b4a14f53004bec00bca69110a88a895348b22",
          "message": "Propagate S3 response with `PrefetchReadError` (#1411)\n\nFor logging purposes we want S3 response (http_code, error_code,\nerror_message) to be retrievable via `fs::Error` when errors occur\nduring `S3FuseFilesystem::read` operation.\n\nTo achieve that we preserve this information during `PrefetchReadError\n-> fs::Error` conversion in `PrefetchReadError::get_request_failed`\nmethod. We also adjust `mountpoint-s3-client` to parse and store S3\nresponse with the following errors:\n\n1. GetObjectError::NoSuchBucket\n1. GetObjectError::NoSuchKey\n1. GetObjectError::PreconditionFailed\n1. S3RequestError::Forbidden\n1. S3RequestError::ResponseError\n1. S3RequestError::Throttled\n1. S3RequestError::IncorrectRegion\n1. Other `S3RequestError` variants occur before the response arrives and\nthus don't provide metadata\n\n### Does this change impact existing behavior?\n\nIn logs, read errors do not contain redundant token:\n> ..read failed with errno 5: get request failed: ~get object request\nfailed:~ Client error: ..\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nAn entry for the `mountpoint-s3-client` changelog and a minor version\nbump (`0.14.1` -> `0.15.0`) to account for changes to error enum\nvariants?\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-05-19T13:02:01Z",
          "tree_id": "bf7371a714593d161ada9ab239fc11073ae65ba1",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/172b4a14f53004bec00bca69110a88a895348b22"
        },
        "date": 1747667869580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11835.6640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20971.64453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36448.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 90.984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34517.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.38671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35863.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9780.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8659.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12963.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 755.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 469.46875,
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
          "id": "5d806d69faf2af77c2484122b5343cc435151047",
          "message": "Add cache block serialization benchmark (#1426)\n\nIntroduce a criterion benchmark to measure the performance of reading a\nsingle cache block. In order to establish a performance baseline, we\nalso include a separate benchmark for reading a file the size of a\nblock.\n\nUpdates `criterion` to `v0.6.0`.\n\nThe benchmark can be run with this command:\n\n```\ncargo bench --bench cache_serialization\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-20T10:03:34Z",
          "tree_id": "4b156d9809f55665e3087cbfc2165601dc21b561",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5d806d69faf2af77c2484122b5343cc435151047"
        },
        "date": 1747743587140,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13660.7890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22014.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36198.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 368.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 96.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36573.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33422.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10670.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8633.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10004.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 268.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 401.171875,
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
          "id": "54a1cb7760e5372f48a87a1d1d69ab37e4433678",
          "message": "Fstab cliargs roundtrip tests (#1414)\n\n### Fstab cliargs roundtrip tests\n\n\n\nThis PR adds a property-based test that ensures roundtrip conversion\nbetween CliArgs and FsTabCliArgs behaves as expected. Specifically, we:\n\nImplemented a custom FstabCompatibleCliArgs strategy for generating\nvalid CliArgs inputs.\n\nSerialise these into fstab-style CLI arguments.\n\nParse them back into CliArgs through the FsTabCliArgs path.\n\nAssert equality with the original input.\n\nThis responds to a prior review comment requesting a test for round-trip\nparsing of CLI arguments.\n\n\n\n### Does this change impact existing behavior?\n\nNo, this change does not impact runtime behavior. It only adds\nnon-breaking test code under #[cfg(test)].\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo changelog entry is required. This is an internal test-only\nenhancement and does not affect functionality or the public interface.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Tadiwa Magwenzi <tadiwaom@amazon.com>",
          "timestamp": "2025-05-20T14:20:06Z",
          "tree_id": "7b580da15d6a2e1010a97294d88d6126c47d0ee9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/54a1cb7760e5372f48a87a1d1d69ab37e4433678"
        },
        "date": 1747759059598,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12068.70703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 17815.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32642.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 91.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34701.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33325.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9137.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10860.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11693.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 451.5234375,
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
          "id": "46f6db41bd261670267fdf6f33a03d9e1ec67d38",
          "message": "Add fstab to GitHub CI (#1419)\n\nAdd integration tests to Github CI\n\nTests passed here:\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15135395318/job/42545885483\n\n\n### Does this change impact existing behavior?\n- fstab now forces runs in the background instead of the foreground\n- When ran through fstab, Mountpoint now ignores the `nodev` and\n`nosuid` options, as we default to these capabilities.\n\nNo breaking changes, as fstab is not released.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-20T15:31:26Z",
          "tree_id": "dbe80da7b387e058d50cfdb5620f4d9096b4c015",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46f6db41bd261670267fdf6f33a03d9e1ec67d38"
        },
        "date": 1747763360412,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13492.6953125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23837.6171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39065.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 365.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 306.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.71875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37046.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35359.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9604.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9308.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11680.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 267.44921875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 763.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 455.26953125,
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
          "id": "8dde952a1813af5a3f2b6412eb3c545205950e8a",
          "message": "Improve safety checks when reading disk cache blocks (#1427)\n\nWhen reading data from the disk cache, we were not checking the declared\nlength of strings (such as the S3 key or ETag) and data, potentially\nleading to allocations for the wrong size in case of corruption of the\ncache block. While the corrupted block would still be detected later by\nthe integrity check and never returned to the user, the read could still\ncause memory overflow in the worst case.\n\nThis change reworks the deserialization of a cache block from disk and\nensures that the length of strings is always within a fixed limit\n(`10000`, using `bincode` configuration) and the data size is checked\nagainst the cache block size (1 MiB).\n\nIn addition, we updated the `bincode` crate to the latest version\n(`2.0.1`).\n\n### Does this change impact existing behavior?\n\nThe change affect the on disk cache format, but it does not result in\nany behavior change for the user.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry in the `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-21T14:08:01Z",
          "tree_id": "740da280e29d52dce38b57e11d9fedb998ce7d6b",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8dde952a1813af5a3f2b6412eb3c545205950e8a"
        },
        "date": 1747844633072,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11440.828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19743.4140625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35313.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 85.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 363.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 312.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 312.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32634.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36987.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 416.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11405.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 253.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13246.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11637.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 629.1171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.10546875,
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
          "id": "f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5",
          "message": "Add \"nofail\" to list of ignored arguments in fstab (#1429)\n\nAdded \"nofail\" to the list of ignored arguments with fstab. Whilst\n`systemd` removed `nofail` when launching Mountpoint, `mount` did not,\nwhich meant `mount -a` could fail when systemd launched Mountpoint fine.\n\n### Does this change impact existing behavior?\n\nYes, Mountpoint no longer crashes if given `nofail` with fstab\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-21T16:09:48Z",
          "tree_id": "5d6a698e7fe81c4d495c45964192fba4cce9a2c8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f3015fcd94e6e8dd595d4d97175acfe17dcc6bd5"
        },
        "date": 1747851981067,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12701.03515625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22701.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34549.453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 77.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 303.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36242.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34503.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9053.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10782.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11778.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 648.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 416.8984375,
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
          "id": "4e9fe1d0b9e51f66475620ce990860416739d237",
          "message": "Revert \"Update CRT submodules to latest releases (#1430)\" (#1435)\n\nThis reverts #1430 (commit ee6d44ac1096251bd7d18601587f6bc3da3392a4).\n\nAfter merging the latest change to the CRT we have seen benchmark runs\nfailing (e.g.\nhttps://github.com/awslabs/mountpoint-s3/actions/runs/15206336823/job/42770250949).\nWe are reverting the change while we further investigate the issue.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nReverts the previous changes.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T14:43:38Z",
          "tree_id": "148ee1304bd81ee40b0109c6a9704f7670bdabf9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4e9fe1d0b9e51f66475620ce990860416739d237"
        },
        "date": 1748019600256,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13544.57421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23032.71875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36066.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 94.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 371.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 304.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32899.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31956.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 405.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11904.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 266.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11768.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12425.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 676.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 434.87109375,
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
          "id": "a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7",
          "message": "Prepare crate changelog before releasing up to fs-crate (#1437)\n\nAdjusts the Changelogs for the `mountpoint-s3-fs` crate and it's\ndependencies.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-27T15:09:05Z",
          "tree_id": "e278b19ec0ac48c790b41fc78eaceffeb8135caa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a6179c72bfc237a1fdd06eb4a0863ca537f8d8a7"
        },
        "date": 1748366655701,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11968.1640625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20753.921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 32513.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 365.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 298.65234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 308.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35457.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 400.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 31970.59765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 411.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11374.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7738.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13566.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 660.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 470.02734375,
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
          "id": "0344b0b3c4ab0ee04467486bc036cfeebead6d59",
          "message": "Add support for passing S3 URIs as part of the bucket name field (#1434)\n\nAllows invoking Mountpoint with an S3 URI in the 'bucket name' parameter\n\n\n- When using an S3 URI, a prefix can also be supplied. When it is, the\n`--prefix` option cannot be given.\n- Allows using an S3 URI with the `--cache-xz` parameter, but without a\nprefix.\n- Documentation entry for the feature was introduced\n\n### Does this change impact existing behavior?\n\nYes, the 'bucket name' and 'cache-xz' parameters now can take S3 URIs.\nThere are no breaking changes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChangelog entry was made. Needs minor version bump.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T09:32:42Z",
          "tree_id": "0648435f0fd96f4763d631777ba173a0dac7af2d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0344b0b3c4ab0ee04467486bc036cfeebead6d59"
        },
        "date": 1748605698091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15944.48046875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23899.16015625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35456.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.05078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.45703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 363.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 311.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 80.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 303.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34278.4921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 384.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37229.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8364.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10861.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11580.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 715.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 403.50390625,
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
          "id": "d71b040b53261f0e133b1937adf436bdc2fd489d",
          "message": "Remove fstab feature flag (#1446)\n\nRemoves fstab feature flag\n\n### Does this change impact existing behavior?\n\nYes, enables fstab feature\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes - changelog is included in this PR:\nhttps://github.com/awslabs/mountpoint-s3/pull/1441\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T10:31:47Z",
          "tree_id": "878963d0abc5939147ee13d791f649d8ffd09354",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/d71b040b53261f0e133b1937adf436bdc2fd489d"
        },
        "date": 1748609250616,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14040.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21892.65625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36435.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 364.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 366.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 309.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 307.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34028.0390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 401.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 33189.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12507.4765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12863.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12157.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.85546875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 695.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 419.78515625,
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
          "id": "8c4ce5abafd546bff3f01a0159ae9561a364abaa",
          "message": "Package fstab file (#1442)\n\nDraft PR because I want to remove the fstab feature outside this PR\n\nAdds `mount.mount-s3` symlink to our rpm and deb installers. This file\nis placed in `/usr/sbin` in the host when installed.\n\n### Does this change impact existing behavior?\n\nYes, a new `mount.mount-s3` file is added during installation.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:05:35Z",
          "tree_id": "4ef3452cd65154566194a327cc71965dfea73b0f",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/8c4ce5abafd546bff3f01a0159ae9561a364abaa"
        },
        "date": 1748611194425,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12163.671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22422.24609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39283.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 98.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 358.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 93.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 373.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 76.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 302.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 306.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33855.61328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37200.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10087.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 264.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11052.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13229.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 668.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 399.75,
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
          "id": "fa7b9d711a69128826a7ff026fc5fdf4c4e51e61",
          "message": "Remove fstab feature flag (#1447)\n\nRemoves fstab file from cargo.toml - previous commit removed from CI as\nwell as code usages. This is just cleaning up.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:23:44Z",
          "tree_id": "f41202e3376f4adaa6bd338639929816b164aab2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa7b9d711a69128826a7ff026fc5fdf4c4e51e61"
        },
        "date": 1748612555696,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14601.47265625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20452.16796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 30227.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 360.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 359.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 307.4921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.32421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 310.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32837.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 394.57421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32365.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 385.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12941.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 273.51171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12266.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10731.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 266.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 712.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 417.6484375,
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
          "id": "5f962cbdf5c3a5beafb61cebb7549b84db1a1acd",
          "message": "Add documentation for fstab feature (#1441)\n\nAdds documentation for new fstab feature\n\n### Does this change impact existing behavior?\n\nNo\n\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T11:53:57Z",
          "tree_id": "72bc0427a52496d37124452a1b6bd474a52d2619",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5f962cbdf5c3a5beafb61cebb7549b84db1a1acd"
        },
        "date": 1748614180122,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 10741.390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21478.95703125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36000.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 355.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 369.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 76.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 305.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37929.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.44140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36806.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11434.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12485.8671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13120.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 700.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 434.78125,
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
          "id": "da20daa33c97be569113890736ac62049840b8ff",
          "message": "Release v1.18.0 (#1448)\n\nPrepare for v1.18.0 release.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T12:14:04Z",
          "tree_id": "e779a1e594bfbd997857e9daa9b2a42ae0351cf8",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/da20daa33c97be569113890736ac62049840b8ff"
        },
        "date": 1748615331221,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12634.3671875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21856.96484375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36372.19921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 97.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.40234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 305.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.86328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 309.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32804.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34626.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11654.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13228.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13071.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 253.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 731.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 450.52734375,
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
          "id": "ca60ca2153664d92d6817a7de07f5bbac4522fbf",
          "message": "Fix changelog for v1.18.0 (#1449)\n\nFixes changelog for v1.18.0 release\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nChanged\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-05-30T13:33:24Z",
          "tree_id": "8f1d5153ae3d609f1acd010ba43ca2d93e8d69f9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ca60ca2153664d92d6817a7de07f5bbac4522fbf"
        },
        "date": 1748620105850,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12906.5859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22791.50390625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38692.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 367.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 313.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 79.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 315.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32084.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 381.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38273.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 403.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9172.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10208.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11740.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 569.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 453.61328125,
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
          "id": "2eb41bc55469b66a05881f85ec214b0049268f26",
          "message": "Update prefetcher wait_for_read_window_increment to drain queue (#1425)\n\nWhen reviewing the prefetcher logic, the\n`wait_for_read_window_increment` method call in the S3 part stream was\nidentified as a potential issue. The logic currently pulls only one\nincrement from the queue of read window increments when large amounts of\ndata are being fetched. Today, this is likely not to cause an issue as\nthe read increments are much larger than the size of the parts emitted\nby `part_stream`. However, it would cause issues if there were changes\nhere in future that resulted in increments smaller than those parts.\n\nThis change updates the method to drain all available increments and\nreturn the new value to the caller. This ensures that the backpressure\nmechanism doesn't wait for each part before processing only one window\nincrement event. A new test is added to verify this behavior is\nguaranteed.\n\n### Does this change impact existing behavior?\n\nThere should be no impact, other than fixing logic that currently is\nunlikely to introduce performance changes outside of very large parts\nsizes.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, there is no known customer impact of the current issue.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Daniel Carl Jones <djonesoa@amazon.com>",
          "timestamp": "2025-05-30T14:47:46Z",
          "tree_id": "ad81345f3d3e005a5b68c3418e9c55fda5b41aaa",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/2eb41bc55469b66a05881f85ec214b0049268f26"
        },
        "date": 1748624589876,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13448.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25477.74609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38400.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 93.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 362.41796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.43359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 308.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 77.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 304.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31990.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37159.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11085.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12329.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 14095.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 264.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 650.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.80078125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}