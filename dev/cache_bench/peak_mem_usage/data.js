window.BENCHMARK_DATA = {
  "lastUpdate": 1748623671296,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Cache Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
        "date": 1746634390505,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3376.89453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3248.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3258.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3146.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35634.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3413.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3368.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 224.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3234.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3199.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.28515625,
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
        "date": 1746792341827,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3517.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 344.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3316.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.5234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3424.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 265.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3163.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 235.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16260.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3387.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3269.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3216.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3474.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.46875,
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
        "date": 1746802677423,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3250.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.15234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3278.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3264.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.68359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3383.671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 224.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 22616.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3332.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3218.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10295.203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10090.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 213.328125,
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
        "date": 1746806592758,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3375.8671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3076.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3391.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 259.28125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3175.578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27330.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 350.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3283.55078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 376.34375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3253.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 210.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7631.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 232.09375,
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
        "date": 1747051308620,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3187.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 326.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3379.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.6484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3382.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 272.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3364.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 28898.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.33203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3362.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 207.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3372.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13254.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 211.1875,
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
        "date": 1747133276783,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3035.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.3671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3243.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3362.06640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3350.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.20703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16728.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3359.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3427.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 236.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3617.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3318.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.1171875,
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
        "date": 1747145634512,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3314.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3464.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3346.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3263.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 226.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27206.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3253.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 367.65625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3475.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3488.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 5092.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 235.3125,
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
        "date": 1747216957091,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3321.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 336.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3352.12109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3406.70703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.3125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3442.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 231.81640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 30648.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 360.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3402.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 240.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3430.41796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3397.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 221.53515625,
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
        "date": 1747234383555,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3396.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 343.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3070.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.98046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3328.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.39453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3266.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16282.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3184.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 366.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3433.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3184.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3151.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 207.8984375,
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
        "date": 1747239856907,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3267.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 324.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3385.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 351.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3327.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.79296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3269.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34156.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3374.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3255.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 214.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3292.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3294.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.71875,
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
        "date": 1747308316373,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3289.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.03125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3321.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 348.69921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3338.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 275.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3408.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32942.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 339.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3081.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3494.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.91796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3594.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3388.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.0390625,
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
        "date": 1747311381131,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3324.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3580.13671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 349.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3667.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 267.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3305.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.36328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 21371.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.88671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3578.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3344.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3504.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10058.296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 215.44140625,
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
        "date": 1747403854726,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3395.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3539.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 354.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3372.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3410.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 16348.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3364.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 375.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3290.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 211.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3291.359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3152.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.9921875,
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
        "date": 1747666990232,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3337.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3400.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 340.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 2965.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3295.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.67578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 20430.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 352.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3097.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3350.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 212.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3330.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3185.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 206.0390625,
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
        "date": 1747742617747,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3492.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 329.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3239.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 347.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3204.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 262.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3221.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 203.3203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17581.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.43359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3546.34765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 208.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3445.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3267.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 207.7265625,
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
        "date": 1747758044428,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3409.58984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 332.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3083.64453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 345.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3189.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 257.44140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3428.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15107.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 349.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3182.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 372.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3589.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 220.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3331.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3484.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 219.734375,
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
        "date": 1747762449999,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3202.54296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 325.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3340.734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 343.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3057.203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 261.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3481.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 27016.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 341.06640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3079.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3346.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 215.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3340.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3102.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.375,
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
        "date": 1747843733615,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3245.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 335.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3234.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 352.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3226.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 270.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 2918.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17707.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3403.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3421.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3358.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.140625,
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
        "date": 1747850961249,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3183.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3241.8125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.7421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3445.60546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 285.296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3235.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 12542.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3228.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3250.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 235.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3354.21484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3441.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 239.28515625,
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
          "id": "ee6d44ac1096251bd7d18601587f6bc3da3392a4",
          "message": "Update CRT submodules to latest releases (#1430)\n\nUpdate the CRT libraries to the latest releases. \n\nIn particular, we pick up - but do not adopt in this change - the new\nMemory pool interface\n([awslabs/aws-c-s3#517](https://github.com/awslabs/aws-c-s3/pull/517)),\nwhich requires minor adjustments to the bindings and the\n`poll_buffer_pool_usage_stats` function.\n\n<details>\n  <summary>Full CRT changelog:</summary>\n  \n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-cal fa108de5..938d0fea:\n  > Remove clang-3 from CI (#218)\n  > Fix casing on Windows header files (#217)\n  > dlopen(NULL) returns NULL on static linked executable (#215)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common 8ae8f48e..aaa2f11e:\n  > Fix invalid XML Buffer Overflow Error (#1201)\n  > Add aws_cbor_decoder_reset_src api for aws_cbor_decoder (#1202)\n  > Fix casing on Windows header files (#1199)\n  > Error handling docs (#1197)\n  > make exports consistent (#1196)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http ca7e0e29..3eedf1ef:\n  > fix mock server window update on 0 length body (#517)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io 8286c781..689dee3c:\n  > Fix warnings in iOS Cross Compile CI (#733)\n  > Remove clang-3 from CI (#731)\n  > Acquire/Release Event Loop (#725)\n  > Fix casing on Windows header files (#730)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 7d2d4b30..52c90d39:\n  > Memory pool interface (#517)\n  > Remove clang-3 from CI (#520)\n  > Revert \"[s3_meta_request]: Retry on ExpiredToken\" (#518)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-sdkutils ba6a28fa..f678bda9:\n  > Fix double free on malformed rulesets (#53)\n  > make exports consistent (#52)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo change in behavior.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes. Updated as required.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-05-23T08:36:19Z",
          "tree_id": "7c9069bfb532b9dd1630e0e8fa60f3c9fc716208",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ee6d44ac1096251bd7d18601587f6bc3da3392a4"
        },
        "date": 1747996630625,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3231.35546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3453.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 364.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3403.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3399.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10653.69921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 338.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3310.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3311.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 233.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3393.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3559.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 230.203125,
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
          "id": "a861849f21edf0d9c072da8965ea3dc6f37e04e0",
          "message": "Logging errors in a structured format (#1416)\n\nImplement an `FileErrorLogger` and use it to write errors occurring\nduring supported fuse calls in `S3FuseFilesystem`. This logging is not\nenabled in the main executable, only in the `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, only used in the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, only used in the example.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nSigned-off-by: Volodkin Vladislav <vladvolodkin@gmail.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Alessandro Passaro <alessandro.passaro@gmail.com>",
          "timestamp": "2025-05-23T09:58:44Z",
          "tree_id": "2b544694b6a1d3c00e5e4410eb80b0df49961517",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/a861849f21edf0d9c072da8965ea3dc6f37e04e0"
        },
        "date": 1748001441557,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3365.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 340.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3509.73046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 353.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3641.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 281.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3459.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 17109.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3412.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3347.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3488.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3430.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 228.05859375,
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
        "date": 1748018669961,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3323.02734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 334.09765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3298.30859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 356.01953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3279.28515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 278.03515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3035.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 227.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 6690.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3214.1796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.04296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3415.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3371.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3309.26171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 212.6484375,
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
        "date": 1748365771593,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3294.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 337.62109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3378.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 355.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3223.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 285.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3299.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 234.58984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 3267.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3338.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3309.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 216.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3257.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3743.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 223.9921875,
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
        "date": 1748604792088,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3660.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3480.11328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3452.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 269.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3066.37109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 230.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 10105.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3053.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 370.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3339.1484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 226.72265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3276.03515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3871.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 210.56640625,
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
        "date": 1748608164466,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3450.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 331.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3119.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 362.61328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3308.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 266.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3247.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.8359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 15868.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 344.91015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2957.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.73828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3525.64453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 223.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3500.46484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 7778.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 214.796875,
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
        "date": 1748610289970,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 2875.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.4609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3329.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 360.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3439.80078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 288.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3538.6640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 9551.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 346.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3293.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3065.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 213.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3132.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3180.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 208.796875,
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
        "date": 1748611437580,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3287.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 339.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3271.953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3454.96875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 276.90234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3470.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 252.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8995.69140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 347.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3515.30859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 382.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8783.30078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 232.0703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3275.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3180.5234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.3359375,
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
        "date": 1748613229243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3007.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 333.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3399.51171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 358.46484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3398.6171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 280.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3363.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 205.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 5154.953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 345.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3435.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 386.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3279.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 227.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3499.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3495.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 222.2265625,
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
        "date": 1748614385015,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3455.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 338.65625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3356.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 357.5,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3606.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 263.1171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3334.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.0546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 7386.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 348.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 2956.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.83203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3407.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 222.6171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3457.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3360.5,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 226.0859375,
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
          "id": "b2d1e773481408c95e9e36dd7588b0c53f7cbbc6",
          "message": "Fstab tests: Ignore empty directory (#1443)\n\nCurrently, our fstab tests can fail if run in an environment where the\noutput dir does not exist.\nThis PR changes the `rm -r` call to a `rm -rf` to ignore cases where the\ndirectory is empty.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-05-30T14:50:18Z",
          "tree_id": "178e0afe47f45a9481ecd6e6de7e1ddb96bf2084",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/b2d1e773481408c95e9e36dd7588b0c53f7cbbc6"
        },
        "date": 1748623671243,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "rand_read_4t_direct",
            "value": 3285.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 330.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 3427.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 370.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 3465.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 283.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 3286.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 238.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 4591.7109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 353.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 3416.03125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 378.1015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 3140.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 218.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 3509.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 3445.66796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 237.71484375,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}