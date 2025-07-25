window.BENCHMARK_DATA = {
  "lastUpdate": 1753453379081,
  "repoUrl": "https://github.com/awslabs/mountpoint-s3",
  "entries": {
    "Throughput Benchmark - Peak Memory Usage (S3 Standard)": [
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
          "id": "3af10553a54f638cc9b5a1fa49c644521bcaa70f",
          "message": "Add Slack notifications for PRs and issues (#1456)\n\nAdds a Slack notifier URL workflow (copied from Pytorch connector)\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Simon Beal <simobeal@amazon.com>",
          "timestamp": "2025-07-07T15:43:12Z",
          "tree_id": "6e26c1e4f6414ce6a7905d957942efb1a958617a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/3af10553a54f638cc9b5a1fa49c644521bcaa70f"
        },
        "date": 1751911224013,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14310.76171875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23400.0078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35656.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 82.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 259.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.66796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 224.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35209.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 383.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35897.421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 389.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9292.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.0625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11230.48828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10244.09765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 252.8515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 622.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.72265625,
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
          "id": "ceaba78a1994d767b1a6b45593a49cee7e351d5d",
          "message": "Introduce Metablock abstraction (#1500)\n\nThis PR introduces the `Metablock` abstraction that is currently only\nimplemented by the `Superblock`.\nWith this abstraction it will be easier to potentially introduce new\nimplementations of this interface for slightly modifed semantics.\n\nDoes not change existing behaviour, as it only introduces an interface.\n\nAdded Changelog entry for the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-08T08:09:07Z",
          "tree_id": "70b5af778b163213c09f49738ff69b9827c72837",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/ceaba78a1994d767b1a6b45593a49cee7e351d5d"
        },
        "date": 1751970117497,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13775.48828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24091.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39587.34765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.58203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 222.9296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.90625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35041.59375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 403.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37822.26953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 391.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12348.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8973.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13105.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 759.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 418.7421875,
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
          "id": "90329af0059bc192ae11ac9cf4b276708f135970",
          "message": "Extend prefetcher benchmarks to test multiple object downloads (#1504)\n\nWith this change, we can benchmark concurrent downloads of multiple\nobjects at prefetcher.\n\nThis change also allows passing NICs as a comma separated list and adds\na new parameter to limit the run time of the test\n\n### Does this change impact existing behavior?\n\nNo, only extends prefetch benchmarks.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-08T17:19:25Z",
          "tree_id": "4102614f563dd889bed919a3da18bf5a4481c9b2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/90329af0059bc192ae11ac9cf4b276708f135970"
        },
        "date": 1752003382194,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13259.55859375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21101.625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35128.41015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.59375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 264.82421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 74.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.12890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33607.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35783.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10116.6484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9880.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13576.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 254.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 480.23046875,
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
          "id": "996816631f6a2e79971653c3030cddb0352b617c",
          "message": "Remove last bucket usage (#1505)\n\nRemoves a left over usage of bucket in `Filesystem`.\n\nNo behaviour change.\n\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-09T13:54:49Z",
          "tree_id": "6e02f8c1307a53a5c1725e339578e5753ed93669",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/996816631f6a2e79971653c3030cddb0352b617c"
        },
        "date": 1752077644305,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12872.45703125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22500.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36293.4765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.8984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.08984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 263.171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.9765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 212.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32076.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 393.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34510.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 371.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10240.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11742.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10737.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 810.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 475.7578125,
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
          "id": "46b21b6a00c272d11e261a9a61393c0fd2f929b2",
          "message": "Add `S3_SECOND_BUCKET_NAME` variable (#1508)\n\nAdd `S3_SECOND_BUCKET_NAME` to workflow script.\n\n### Does this change impact existing behavior?\n\nNo\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-10T14:49:50Z",
          "tree_id": "28c50370f761327ec766e5aade708fe19b85739a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/46b21b6a00c272d11e261a9a61393c0fd2f929b2"
        },
        "date": 1752170269670,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11597.5234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 23459.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36723.1484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 277.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.76953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 267.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.7109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33024.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 41399.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 397.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8160.609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.78125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12338.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12191.734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.53515625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 611.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.5078125,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "mansipandey97@gmail.com",
            "name": "Mansi Pandey",
            "username": "mansi153"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "658dd8559b978045ff3c9fb14a28d5ff5aa352d3",
          "message": "Update MP client_benchmark to support CRT backpressure (#1457)\n\nUpdate MP client_backmark to support CRT backpressure. Extend the\nbenchmark to optionally enable read-backpressure in CRT, and configure\nthe initial read window size. This test aims to simulate the read-ahead\ncapability of the prefetcher, making it easier to baseline the\nperformance against the prefetcher benchmark.\n\n### Does this change impact existing behavior?\n\nNo, changes to the benchmark only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, changes to the benchmark only.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Mansi Pandey <mansipnd@amazon.co.uk>\nSigned-off-by: Christian Hagemeier <chagem@amazon.com>\nCo-authored-by: Christian Hagemeier <chagem@amazon.com>",
          "timestamp": "2025-07-10T15:46:10Z",
          "tree_id": "7de814352da4f6ffa492f37578430d683428b9c2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/658dd8559b978045ff3c9fb14a28d5ff5aa352d3"
        },
        "date": 1752208708138,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13560.08203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22537.26171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39921.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 101.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.20703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36622.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 385.25,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40342.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.7265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12996.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12160.6328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11980.19921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 680.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 381.26171875,
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
          "id": "fa6203366755e0009fe9b962cc21393999dc0b4a",
          "message": "Add an option to write benchmarks output to a file (#1510)\n\nThis change allows us to save benchmarks output to a file in json\nformat, making it easier to parse the output.\n\n### Does this change impact existing behavior?\n\nNo, prefetcher and client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, prefetcher and client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-11T12:42:54Z",
          "tree_id": "eb47df7b7b77e96306607aa391c4f2b5ef22c495",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/fa6203366755e0009fe9b962cc21393999dc0b4a"
        },
        "date": 1752245821478,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15411.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21851.7421875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36211.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 86.1796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 268.95703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.5078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.67578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.73828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.0078125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33935.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37327.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 390.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8436.87109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 262.9609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11095.55859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12301.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 692.50390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 399.2421875,
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
          "id": "29bdd9da3e3c0916114587840d7a19138c8801a0",
          "message": "Refactor ClientBuilder into a trait and remove use of CliArgs (#1513)\n\nWe use a generic parameter in the `run` and `mount` functions to create\nan S3 client instance (and associated runtime), so they can be used with\nthe actual S3 client and the mock one. This PR changes 2 things:\n* Replaces the `FnOnce` with a trait, to make it simpler to pass around\nand extend in the future,\n* Removes the `CliArgs` argument in favor of `ClientConfig` and other\nrequired settings.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T09:41:14Z",
          "tree_id": "d34aaec2c635b4886ef8225dcaaad2d6925bb9a7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/29bdd9da3e3c0916114587840d7a19138c8801a0"
        },
        "date": 1752494239542,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14634.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24823.0625,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 40285.50390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 96.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.3984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 69.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37578.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 396.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 37373.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 388.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10210.2421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10975.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13919.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.08984375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 561.234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 381.9765625,
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
          "id": "c3b70d06ce7edcd06373ab47816bdb91a1eba8b1",
          "message": "Bump slackapi/slack-github-action from 2.1.0 to 2.1.1 (#1514)\n\nBumps\n[slackapi/slack-github-action](https://github.com/slackapi/slack-github-action)\nfrom 2.1.0 to 2.1.1.\n<details>\n<summary>Release notes</summary>\n<p><em>Sourced from <a\nhref=\"https://github.com/slackapi/slack-github-action/releases\">slackapi/slack-github-action's\nreleases</a>.</em></p>\n<blockquote>\n<h2>Slack Send v2.1.1</h2>\n<h2>What's Changed</h2>\n<p>This release fixes an issue where substituted variables might've\nbroken valid JSON or YAML parsings when using the\n<code>payload-file-path</code> input option.</p>\n<h3>🐛 Bug fixes</h3>\n<ul>\n<li>fix: parse provided payloads before replacing templated variables in\n<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/449\">slackapi/slack-github-action#449</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>📚 Documentation</h3>\n<ul>\n<li>docs: fix channel mention formatting in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/447\">slackapi/slack-github-action#447</a>\n- Thanks <a\nhref=\"https://github.com/mwbrooks\"><code>@​mwbrooks</code></a>!</li>\n<li>docs: remove links to pages that are no longer referenced in\nmarkdown in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/459\">slackapi/slack-github-action#459</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<h3>🤖 Dependencies</h3>\n<ul>\n<li>build(deps): bump undici from 5.28.5 to 5.29.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/442\">slackapi/slack-github-action#442</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump codecov/codecov-action from 5.4.2 to 5.4.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/443\">slackapi/slack-github-action#443</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.1.0 to 11.5.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/450\">slackapi/slack-github-action#450</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​actions/github</code> from 6.0.0 to 6.0.1\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/451\">slackapi/slack-github-action#451</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.3 to\n22.15.29 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/452\">slackapi/slack-github-action#452</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.1 to 7.9.2\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/453\">slackapi/slack-github-action#453</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump <code>@​slack/web-api</code> from 7.9.2 to 7.9.3\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/462\">slackapi/slack-github-action#462</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps): bump axios from 1.9.0 to 1.10.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/465\">slackapi/slack-github-action#465</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 22.15.29 to\n24.0.3 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/466\">slackapi/slack-github-action#466</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha from 11.5.0 to 11.7.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/468\">slackapi/slack-github-action#468</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/469\">slackapi/slack-github-action#469</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump sinon from 20.0.0 to 21.0.0 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/471\">slackapi/slack-github-action#471</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​types/node</code> from 24.0.3 to\n24.0.8 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/472\">slackapi/slack-github-action#472</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n<li>build(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to\n2.0.6 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/470\">slackapi/slack-github-action#470</a>\n- Thanks <a\nhref=\"https://github.com/dependabot\"><code>@​dependabot</code></a>!</li>\n</ul>\n<h3>🧰 Maintenance</h3>\n<ul>\n<li>ci: pin action hashes and escape variables with minimum permission\nin <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/441\">slackapi/slack-github-action#441</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: create separate release branches for tagged releases on\npublish in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/457\">slackapi/slack-github-action#457</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n<li>build: clone repository &quot;docs&quot; and configuration when\nsyncing project docs in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/467\">slackapi/slack-github-action#467</a>\n- Thanks <a\nhref=\"https://github.com/lukegalbraithrussell\"><code>@​lukegalbraithrussell</code></a>!</li>\n<li>chore(release): tag version 2.1.1 in <a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/pull/474\">slackapi/slack-github-action#474</a>\n- Thanks <a\nhref=\"https://github.com/zimeg\"><code>@​zimeg</code></a>!</li>\n</ul>\n<p><strong>Full Changelog</strong>: <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1</a></p>\n</blockquote>\n</details>\n<details>\n<summary>Commits</summary>\n<ul>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/91efab103c0de0a537f72a35f6b8cda0ee76bf0a\"><code>91efab1</code></a>\nRelease</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/b6f4640825302dc9b85bd5ffbe34dfc7a762e404\"><code>b6f4640</code></a>\nchore(release): tag version 2.1.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/474\">#474</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d3dc61e5d1355f17c060df3210cda7044341866e\"><code>d3dc61e</code></a>\nbuild(deps-dev): bump <code>@​biomejs/biome</code> from 1.9.4 to 2.0.6\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/470\">#470</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/f647c89261423b9045f1ecc4f887c2e62ff6f33d\"><code>f647c89</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 24.0.3 to 24.0.8\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/472\">#472</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/e6fa63302e670473dcb1695b744c15895d615227\"><code>e6fa633</code></a>\nbuild(deps-dev): bump sinon from 20.0.0 to 21.0.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/471\">#471</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/75b7822f871b0c9c128cae6c27efc029b1f6c1de\"><code>75b7822</code></a>\nbuild(deps-dev): bump mocha-suppress-logs from 0.5.1 to 0.6.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/469\">#469</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/d7b6150e2a1b713e9aaf24e1559a11dfdf0f2a2d\"><code>d7b6150</code></a>\nbuild(deps-dev): bump mocha from 11.5.0 to 11.7.1 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/468\">#468</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/a7f5b68f29d9c4eb439f490ee90bda80a34ed6f5\"><code>a7f5b68</code></a>\nbuild: clone repository &quot;docs&quot; and configuration when syncing\nproject docs (#...</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/c69deab25713549329730019e9c20a81d09bb4cd\"><code>c69deab</code></a>\nbuild(deps-dev): bump <code>@​types/node</code> from 22.15.29 to 24.0.3\n(<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/466\">#466</a>)</li>\n<li><a\nhref=\"https://github.com/slackapi/slack-github-action/commit/1d0943cb8c8bca873d09b7b9638f3a94f89d829a\"><code>1d0943c</code></a>\nbuild(deps): bump axios from 1.9.0 to 1.10.0 (<a\nhref=\"https://redirect.github.com/slackapi/slack-github-action/issues/465\">#465</a>)</li>\n<li>Additional commits viewable in <a\nhref=\"https://github.com/slackapi/slack-github-action/compare/v2.1.0...v2.1.1\">compare\nview</a></li>\n</ul>\n</details>\n<br />\n\n\n[![Dependabot compatibility\nscore](https://dependabot-badges.githubapp.com/badges/compatibility_score?dependency-name=slackapi/slack-github-action&package-manager=github_actions&previous-version=2.1.0&new-version=2.1.1)](https://docs.github.com/en/github/managing-security-vulnerabilities/about-dependabot-security-updates#about-compatibility-scores)\n\nDependabot will resolve any conflicts with this PR as long as you don't\nalter it yourself. You can also trigger a rebase manually by commenting\n`@dependabot rebase`.\n\n[//]: # (dependabot-automerge-start)\n[//]: # (dependabot-automerge-end)\n\n---\n\n<details>\n<summary>Dependabot commands and options</summary>\n<br />\n\nYou can trigger Dependabot actions by commenting on this PR:\n- `@dependabot rebase` will rebase this PR\n- `@dependabot recreate` will recreate this PR, overwriting any edits\nthat have been made to it\n- `@dependabot merge` will merge this PR after your CI passes on it\n- `@dependabot squash and merge` will squash and merge this PR after\nyour CI passes on it\n- `@dependabot cancel merge` will cancel a previously requested merge\nand block automerging\n- `@dependabot reopen` will reopen this PR if it is closed\n- `@dependabot close` will close this PR and stop Dependabot recreating\nit. You can achieve the same result by closing it manually\n- `@dependabot show <dependency name> ignore conditions` will show all\nof the ignore conditions of the specified dependency\n- `@dependabot ignore this major version` will close this PR and stop\nDependabot creating any more for this major version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this minor version` will close this PR and stop\nDependabot creating any more for this minor version (unless you reopen\nthe PR or upgrade to it yourself)\n- `@dependabot ignore this dependency` will close this PR and stop\nDependabot creating any more for this dependency (unless you reopen the\nPR or upgrade to it yourself)\n\n\n</details>\n\nSigned-off-by: dependabot[bot] <support@github.com>\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-14T10:14:09Z",
          "tree_id": "13338d52a1265d5b973af2ad086b1277bcb643fe",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c3b70d06ce7edcd06373ab47816bdb91a1eba8b1"
        },
        "date": 1752496152262,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13063.421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24369.04296875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 38776.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.93359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 98.7734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.27734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33579.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.28515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35736.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 373.22265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 12095.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10615.82421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12573.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.16015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 771.625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 431.140625,
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
          "id": "500986305934dc89b9457a6dfad2532476332862",
          "message": "Update the aws-c-s3 submodule to the latest release (#1515)\n\nUpdate the `aws-c-s3` submodule to\n[v0.8.4](https://github.com/awslabs/aws-c-s3/releases/tag/v0.8.4),\npicking up in particular: [ Avoid releasing pending mem ticket future\nwhile holding the lock #533\n](https://github.com/awslabs/aws-c-s3/pull/533).\n\n\nChange details:\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 1762f839..f8ae82e3:\n  > Avoid releasing pending mem ticket future while holding the lock (#533)\n  > More request metrics (#530)\n```\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog updated.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-14T22:17:50Z",
          "tree_id": "208673de285dd84fdc1214be27868ca27e9310f0",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/500986305934dc89b9457a6dfad2532476332862"
        },
        "date": 1752539422610,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13974.9140625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21526.86328125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35982.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.31640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 92.2578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.42578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 217.04296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 223.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 38779.48046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 402.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34622.18359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.41015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8175.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.83984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10784.640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13054.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 262.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 726.2265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.76171875,
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
          "id": "4a7b5aeadf08ca443fb027362eb9b5051d425bbb",
          "message": "Update MP client benchmarks to benchmark multiple object downloads  (#1512)\n\nThis change adds new parameters to client benchmarks to download\nmultiple objects and to limit the duration of the test.\nThis change also extends bind parameter to take a comma separated list\nof NICs.\n\n### Does this change impact existing behavior?\n\nNo, client benchmarks only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, client benchmarks only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:34:44Z",
          "tree_id": "7fee70a1c31e9e939412aa597706ade1a0d6dba6",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/4a7b5aeadf08ca443fb027362eb9b5051d425bbb"
        },
        "date": 1752666592181,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13279.75390625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25358.9453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 39305.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 259.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 87.78125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 266.40625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.8359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 75.484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36526.71484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 398.47265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34080.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 380.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9569.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 258.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10196.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10644.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 249.40234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 787.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 445.74609375,
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
          "id": "68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91",
          "message": "Refactor benchmark.py to extend to prefetcher and other benchmarks (#1507)\n\nThis change extracts fio and mountoint specific code from benchmark.py\nto specific modules to make it cleaner. It also separates the\nconfiguration into sections allowing us to have benchmark specific\nsweeper parameters.\n\n### Does this change impact existing behavior?\n\nNo, benchmark change only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark change only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-16T09:59:26Z",
          "tree_id": "409aff2851c4ed423fa580e15f7ea647f08445e2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/68bc3bf4eabdf3534b0d7a38bb41a83b0fef3f91"
        },
        "date": 1752668108105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12729.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20658.66796875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35700.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.3359375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.09375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 278.15625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.5390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.87109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.07421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31985.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 387.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30539.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 383.75,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8789.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 13232.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11278.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 716.1328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 497.51171875,
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
          "id": "e104c3f563a175652d359c6e260d501f1b598339",
          "message": "Update CRT submodules to the latest releases (#1520)\n\nUpdate the CRT submodules to the latest releases, picking up in\nparticular: [Move fulfilling pending future outside the lock and ignore\nalready completed futures\n(#536)](https://github.com/awslabs/aws-c-s3/pull/536).\n\n<details>\n  <summary>Full CRT changelog:</summary>\n\n```\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-common aaa2f11e..2b67a658:\n  > Add API for a more compact (no dashes) UUID-to-str (#1212)\n  > Add a python script to help pick up the latest cjson and libcbor (#1211)\n  > Fix byte helpers for mingw 32 bit (#1210)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#1209)\n  > Fix signature of aws_backtrace_log (#1206)\n  > Remove clang-3 from CI (#1203)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-http 10961a70..bfa03928:\n  > support no_proxy excatly like CURL (#522)\n  > Remove Windows 2019 and add Windows 2025 with MSVC-17 (#521)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-io ee7925a3..12cb9f9c:\n  > stop packing future variable to avoid tsan data race warnings (#741)\n  > Support s2n security policy for TLS 1.2 and FIPS (#739)\nSubmodule mountpoint-s3-crt-sys/crt/aws-c-s3 f8ae82e3..70aacd2d:\n  > Move fulfilling pending future outside the lock and ignore already completed futures (#536)\n```\n</details>\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nClient changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T07:58:37Z",
          "tree_id": "1216fd13514fc370ee60ae71b89d89644f20c951",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/e104c3f563a175652d359c6e260d501f1b598339"
        },
        "date": 1752747245968,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12604.5078125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24901.05859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 35812.5546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 89.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.9609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 91.36328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 272.7890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.84765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.37890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34517.4375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 395.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34369.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 396.3984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9458.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 252.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11811.40625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12192.49609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 738.2109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 477.98828125,
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
          "id": "1623edb9ffa0e589e777aa69f9fba68396abfef2",
          "message": "Update client changelogs with patch release (#1522)\n\nMerge branch 'release/mountpoint-s3-client-0.17' into `main` to update\nthe CHANGELOGs of the client crates after the patch release.\n\n### Does this change impact existing behavior?\n\nNo, docs only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nUpdates the changelogs.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-17T18:32:41Z",
          "tree_id": "7064cda0e2e6fb2cec89f9edebeb8771f88bf8b9",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1623edb9ffa0e589e777aa69f9fba68396abfef2"
        },
        "date": 1752785339558,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12522.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24154.84375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36756.609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.8515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 264.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 222.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 68.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 213.8828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 36103.11328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36474.8203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 368.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10705.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 250.78515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9088.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9744.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.0234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 758.37109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 479.87109375,
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
          "id": "56e653dc44168ba7be3eb475560b15b09a3a1bb1",
          "message": "Extend benchmark.py to run prefetch, crt and client benchmarks. (#1519)\n\nThis change allows us to run benchmarks at different Mountpoint layers\nwith a common input\n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-18T07:08:09Z",
          "tree_id": "d804a7b7046acfd2ce33f9542548f7e7080cc7f3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/56e653dc44168ba7be3eb475560b15b09a3a1bb1"
        },
        "date": 1752830619180,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11815.3828125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20777.39453125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34644.4296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 275.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 86.83203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 276.5859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 222.22265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 74.80859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 218.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37639.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 405.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34875.84765625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 395.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10496.2734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 260.1875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12205.58203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12554.79296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 697.7421875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 442.7578125,
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
          "id": "c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e",
          "message": "Add support for custom memory pools (#1516)\n\nIntroduces a `MemoryPool` trait in the client crate which allows users\nto provide their own memory pool implementation. This is part of the\nbroader effort to use a unified memory pool in Mountpoint (see draft PR\n#1511).\n\nThis change introduces:\n* The required code to bridge implementations of the new Rust trait to\nthe CRT pool interface.\n* A simple `MemoryPool` implementation to be used in tests.\n* The `pool_tests` feature flags to use the above pool in the client\ntests, replacing the CRT default pool.\n* A new CI workflow to run the client tests with the custom pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nEntry in the client changelog.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T12:57:54Z",
          "tree_id": "141b6452e1be9f7e92c8829dd1e74de58c0a05a3",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c02f9f4e7d3c8a6e2aab4bb6961adc2fecf76e8e"
        },
        "date": 1752851704810,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13253.33203125,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21267.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36135.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 92.21875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 269.9453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 99.8046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 274.109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 70.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.10546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.3515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35337.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 392.84375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36112.32421875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9080.7734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8789,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11314.3671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.2578125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 721.01171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.359375,
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
          "id": "aad91bc8d91b684c100bf242adea28a6f8e96a06",
          "message": "Split up client and fs integration tests in CI (#1523)\n\nOrganize the integration test workflows in two groups:\n\n1. Client tests, for the `mountpoint-s3-client` crate (and its\ndependencies: `mountpoint-s3-crt` and `mountpoint-s3-crt-sys`)\n2. FS tests, for `mountpoint-s3-fs` and `mountpoint-s3`\n\nBoth groups define a matrix strategy across runners and S3 buckets.\nAdditionally, the first group adds a dimension for the memory pool\n(currently default and test pool), while the second runs tests with FUSE\n2 and 3.\n\n### Does this change impact existing behavior?\n\nNo, CI change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-18T14:18:26Z",
          "tree_id": "cc52be98a71f4ffc7512ddef1e359de874382248",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/aad91bc8d91b684c100bf242adea28a6f8e96a06"
        },
        "date": 1752859022010,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12031.40234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 24576.13671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36534.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.703125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 263.63671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.6875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.33984375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 214.48046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 69.47265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 225.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32280.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 382.62109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32729.02734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.3359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11921.65234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.28125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 9741.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11459.94921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 255.6953125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 777.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 463.73828125,
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
          "id": "44159b564162126a3374a864010a5151f16b88ac",
          "message": "Introduce UploaderConfig (#1526)\n\nGroup configuration parameters to initialize the `Uploader` component\ninto a new struct. It will make easier to introduce new parameters in\nfuture changes.\n\n### Does this change impact existing behavior?\n\nNo. Internal change only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T11:26:42Z",
          "tree_id": "746c13a5a9535ff8544322786cdc9e66e334e720",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/44159b564162126a3374a864010a5151f16b88ac"
        },
        "date": 1753105069843,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13947.07421875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22471.34375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36348.07421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 95.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 266.4140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 97.34375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 263.9140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.98828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.5625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.00390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33805.09375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 397.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38240.68359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11597.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11539.93359375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11601.77734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 256.171875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 744.23046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 476.53515625,
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
          "id": "f06dc065a904da06b76a4bc667aa5966ab89e081",
          "message": "Extract meta request type when reserving buffers (#1524)\n\nModify the new `MemoryPool` trait (and the CRT bridge) to propagate the\ntype of the meta request which is reserving the buffer. Requires\nextending bindings to an additional private header from `aws-c-s3` in\norder to access the type of a `aws_s3_meta_request` pointer.\n\n### Does this change impact existing behavior?\n\nNo, the new type information is not used yet.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-21T12:43:22Z",
          "tree_id": "85098a437513db4098f974f17564649b52e61faf",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f06dc065a904da06b76a4bc667aa5966ab89e081"
        },
        "date": 1753109684105,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14935.65234375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 26256.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37515.33203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 84.97265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 273.19140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.7265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 268.9375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.94140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 214.91796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 32707.87890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 399.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35530.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 398.66015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10624.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8929.3515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11542.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.46875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 779.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 432.99609375,
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
          "id": "1d416eff9ca92bd805562cedd117fe595e6aff53",
          "message": "Support read sizes up to 1M for fio cached IO benchmarks.  (#1528)\n\nThis change allows configuring fio read sizes for benchmarks. For cached\nIO reads over 256K, the script overwrites the read_ahead_kb on the\ndevice itself.\n\nThis also includes minor cleanup fixes from previous changes. \n\n### Does this change impact existing behavior?\n\nNo, benchmark scripts only\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo, benchmark scripts only\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Sahitya Damera <sahityad@amazon.com>",
          "timestamp": "2025-07-21T16:50:33Z",
          "tree_id": "c8521a5894d1ed146e45439e6336658b7d16cb3d",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/1d416eff9ca92bd805562cedd117fe595e6aff53"
        },
        "date": 1753124820080,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12445.3984375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19970.0234375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33079.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 259.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 278.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.16015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.2109375,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 71.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 214.14453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33739.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 388.80859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35510.625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 387.6015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9297.546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 259.24609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10228.27734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9744.45703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.328125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 807.265625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 514.74609375,
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
          "id": "5225d343b271ddb37ff54fda2b90f49809f67ae5",
          "message": "Decouple mem_limiter from client (#1525)\n\nMinor refactor to decouple the memory limiter from the client\nimplementation. The memory limiter only requires the client to retrieve\ninformation about its internal memory pool utilization. This change\nwraps that request in a type-erased closure and drop the generic\nparameter from the memory limiter and all related types.\n\n### Does this change impact existing behavior?\n\nNo. Internal refactor only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-22T05:50:37Z",
          "tree_id": "c0f540a8566d905e020ef12a575fb4b53762664a",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5225d343b271ddb37ff54fda2b90f49809f67ae5"
        },
        "date": 1753171345338,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13370.890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22334.51171875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36072.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 94.46875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.94921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 88.51953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 73.99609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 213.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 211.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33320.76171875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.31640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 40580.60546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 401.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8688.9140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.70703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10220.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11275.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 261.53125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 679.16796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 461.50390625,
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
          "id": "f73f89b29d673a3bc29e58b5c1f5e96e74ba534e",
          "message": "[Experimental] Support mounting multiple buckets with CSV manifest (#1506)\n\nImplement `ManifestMetablock` which uses SQLite db as a source of object\nmetadata. This implementation also allows mounting multiple buckets\nwithin a single filesystem. This change is not intended to be applied to\nthe regular `mount-s3` binary, only to `mount_from_config` example.\n\n### Does this change impact existing behavior?\n\nNo, change is enabled in example only.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nYes, of the `mountpoint-s3-fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T12:55:13Z",
          "tree_id": "dbbd80fbf7eb4fcb2fbfe447a6380f387d20c280",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/f73f89b29d673a3bc29e58b5c1f5e96e74ba534e"
        },
        "date": 1753283540163,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11152.68359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21768.9921875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 31610.59765625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 270.14453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 279.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 68.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 214.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.2421875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 210.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34408.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 377.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 30879.51953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 369.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 8832.80078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 261.13671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10293.453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11744.7890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 257.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 562.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 415.54296875,
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
          "id": "65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2",
          "message": "Release crates, mountpoint-s3-fs 0.6.0 (#1531)\n\nUpdate changelogs in preparation for crates release. Crates to be\nreleased:\n- mountpoint-s3-crt-sys\n- mountpoint-s3-crt\n- mountpoint-s3-client\n- mountpoint-s3-fs\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-23T14:29:58Z",
          "tree_id": "55611484499579305e804b526f592752e9440ae7",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/65ab5e54f9c4a29a32d9dd17e2ebec5eb1e807b2"
        },
        "date": 1753288970383,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13612.12890625,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20294.92578125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33212.0390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 79.01171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 267.0625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 84.859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 273.81640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.7578125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 216.75,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.1640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 219.5859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 37115.015625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 375.4453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 38647.125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 384.71875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9140.56640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10726.671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11514.23828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.890625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 759.25,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 494.2734375,
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
          "id": "0d8312a70e9440d9f6d854a7afb25126e176c458",
          "message": "Add custom memory pool implementation (#1529)\n\nIntroduce a custom implementation of a `MemoryPool` which can be used by\nthe CRT S3 client. The new pool will eventually be adopted in\nMountpoint, which will also use it to replace the allocations for disk\ncache blocks and incremental upload buffers.\n\nThis change extends the integration tests on the client crate to run\nwith this pool implementation.\n\nSee docs in `memory/pool.rs` for more details on the new memory pool.\n\n### Does this change impact existing behavior?\n\nNo, the new pool is only used in tests for now. \n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-23T15:12:29Z",
          "tree_id": "559e4d4caf42f78da3f0c2c2f037708fbe412c8c",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/0d8312a70e9440d9f6d854a7afb25126e176c458"
        },
        "date": 1753291712480,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12258.79296875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 20830.58203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36768.62890625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.21484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 259.2734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 81.125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 274.796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.71484375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 218.1328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 69.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 220.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33571.99609375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 386.33984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36818.52734375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 394.5390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9126.8984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.9921875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11217.35546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 9983.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 265.05859375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 727.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 446.88671875,
            "unit": "MiB"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "adpeace@amazon.com",
            "name": "Andy Peace",
            "username": "adpeace"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5732b47f04ed2b9280ada532c5346306625ae218",
          "message": "Add thread ID to log messages. (#1460)\n\nThis helps us to understand what's happening with concurrent operations.\n\n### Does this change impact existing behavior?\n\nChanges log message format slightly by adding thread IDs, which may\nmeans scripts that parse these messages need to change.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Andrew Peace <adpeace@amazon.com>",
          "timestamp": "2025-07-24T09:15:20Z",
          "tree_id": "350586199d5c03f8d368771e4cf3cd4567db03da",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/5732b47f04ed2b9280ada532c5346306625ae218"
        },
        "date": 1753356544097,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 13677.484375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 25341.0859375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 36069.515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 266.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 85.640625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 272.6796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.76171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.16796875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 217.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 33323.96484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 389.17578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 35248.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 393.7578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 11103.37890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 256.86328125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 10458.89453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11307.703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 258.109375,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 643.765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 481.84765625,
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
          "id": "c20dd804d324e55767cb3ee62665ccad264c37ec",
          "message": "Implement Deref on pool buffers (#1533)\n\nMinor usability improvement on the buffers for the newly introduced\nmemory pool.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T10:04:25Z",
          "tree_id": "2a15f64dea6a3d194b44019d00f1e909c8c8b414",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c20dd804d324e55767cb3ee62665ccad264c37ec"
        },
        "date": 1753359486392,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 12461.93359375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21201.8203125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 37029.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 83.55859375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 257.6328125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.8828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 277.38671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 219.1875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 73.4375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 215.95703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 35512.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 390.0859375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34011.1953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.6640625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9699.97265625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 257.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 12547.4140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 11922.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 263.8046875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 728.15234375,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 430.40234375,
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
          "id": "c209731fbd443d1c3db019fda0ac1c9175d499af",
          "message": "Remove duplicate S3Uri type (#1535)\n\nThe `S3Uri` was almost a complete duplicate of `S3Path`. This change\nremoves it and replaces it with `S3Path` in the few places where it was\nused. It also rearranges the related validation methods and consolidates\ntypes under the `s3` module.\n\n**Note**: I split out the renames and moves into a separate commit for\nease of review.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nOnly for `fs` crate.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-24T11:20:59Z",
          "tree_id": "edabdf4c5d9b4a0acabff60dc5c2b6af04b8efcc",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/c209731fbd443d1c3db019fda0ac1c9175d499af"
        },
        "date": 1753364055207,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 15066.37109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 19823.99609375,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 34940.72265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 88.49609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 264.85546875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 90.0234375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 269.29296875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 72.77734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.23046875,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 72.88671875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 221.54296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 34267.9453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 391.76953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 34093.39453125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 381.375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9777.12890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 263.98046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 8515.9375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 10547.5703125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 259.6796875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 790.9765625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 510.23828125,
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
          "id": "6633db0048d429838f09f65ade1804ff666b6def",
          "message": "Set `mem_limit` in `mount_from_config` example (#1537)\n\nSet `mem_limit` in `mount_from_config` example. The value is retrieved\nfrom a json config.\n\n### Does this change impact existing behavior?\n\nNo, only the example.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nNo.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\nSigned-off-by: Vlad Volodkin <vlaad@amazon.com>\nCo-authored-by: Vlad Volodkin <vlaad@amazon.com>",
          "timestamp": "2025-07-24T16:52:03Z",
          "tree_id": "dc0a7ab42e8372c268cb4c7db30508a4048c0093",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/6633db0048d429838f09f65ade1804ff666b6def"
        },
        "date": 1753384014026,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 11300.87109375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 21324.88671875,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33157.8203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 80.9921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 261.4453125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 78.78515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 262.1953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 69.44921875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 213.828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.53515625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 216.2890625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 31214.94140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 366.984375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 32210.08203125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 377.96875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 9381.19140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 254.484375,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 7820.42578125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 12290.5078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 251.9296875,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 791.1640625,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 449.16015625,
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
          "id": "06deaaac0a57e2527c80d90ec2728309ea1ae45a",
          "message": "Fix issue preventing incremental upload to handle very large write part sizes (#1538)\n\nThe append upload queue tries to limit the total memory used to buffer\nthe data to write to 2 GiB. However, when setting `--write-part-size` to\nvalues greater than 2 GiB, it would incorrectly set the queue capacity\nto 0 buffers and panic.\n\nThis change ensures that the queue allows for at least 1 buffer, even if\nthat means exceeding the 2 GiB cap.\n\n### Does this change impact existing behavior?\n\nNo.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nBug fix entry.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:05:59Z",
          "tree_id": "48ab171e8600cb851f60d9a591acd1968efe1fa2",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/06deaaac0a57e2527c80d90ec2728309ea1ae45a"
        },
        "date": 1753453125519,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 14589.41796875,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 22282.05078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 33545.69140625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 87.52734375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 252.6953125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 89.3203125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 266.23828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 71.265625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 215.1015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 70.24609375,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 222.05078125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 29334.5546875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 374.12109375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 36625.4296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 379.140625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 10520.390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 255.63671875,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 11861.15625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 13726.73046875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 260.8125,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 721.0078125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 474.2578125,
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
          "id": "15fe956a9e7588de2128f52108af9533cf9ea956",
          "message": "Use a unified memory pool in Mountpoint (#1511)\n\nIntroduces a unified memory pool in Mountpoint. The pool adopts the CRT\npool interface, so it can be used by the CRT client when requesting\nbuffers. Ownership of the buffers is then passed to the prefetcher when\nthey are returned from GetObject requests. The same memory pool is also\nused to serve reads from the local disk cache and for incremental\nuploads.\n\nThe main goal is to reduce overall memory usage and mitigate memory\nfragmentation issues. We may also observe performance gains in some\nscenarios since we can avoid copying the data received from GetObject.\n\n### Does this change impact existing behavior?\n\nNo changes in file system behavior. It will publish new memory-related\nmetrics.\n\n### Does this change need a changelog entry? Does it require a version\nchange?\n\nRequires entries in the `fs` and `mount-s3` changelogs and new major\nversions.\n\n---\n\nBy submitting this pull request, I confirm that my contribution is made\nunder the terms of the Apache 2.0 license and I agree to the terms of\nthe [Developer Certificate of Origin\n(DCO)](https://developercertificate.org/).\n\n---------\n\nSigned-off-by: Alessandro Passaro <alexpax@amazon.co.uk>",
          "timestamp": "2025-07-25T12:06:27Z",
          "tree_id": "cad4f86f83dd9db2ce67cd92790761cbaedfeb08",
          "url": "https://github.com/awslabs/mountpoint-s3/commit/15fe956a9e7588de2128f52108af9533cf9ea956"
        },
        "date": 1753453379025,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "mix_1r4w",
            "value": 3616.09375,
            "unit": "MiB"
          },
          {
            "name": "mix_2r2w",
            "value": 4898.55078125,
            "unit": "MiB"
          },
          {
            "name": "mix_4r1w",
            "value": 8426.3828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct",
            "value": 23.53125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_direct_small",
            "value": 52.75390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t",
            "value": 24.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_4t_small",
            "value": 50.48828125,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct",
            "value": 18.26171875,
            "unit": "MiB"
          },
          {
            "name": "rand_read_direct_small",
            "value": 28.00390625,
            "unit": "MiB"
          },
          {
            "name": "rand_read",
            "value": 19.91015625,
            "unit": "MiB"
          },
          {
            "name": "rand_read_small",
            "value": 26.515625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct",
            "value": 8289.5625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_direct_small",
            "value": 52.828125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t",
            "value": 8233.01953125,
            "unit": "MiB"
          },
          {
            "name": "seq_read_4t_small",
            "value": 50.90234375,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct",
            "value": 2108.25390625,
            "unit": "MiB"
          },
          {
            "name": "seq_read_direct_small",
            "value": 24.3125,
            "unit": "MiB"
          },
          {
            "name": "seq_read",
            "value": 2110.21875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_skip_17m",
            "value": 2110.29296875,
            "unit": "MiB"
          },
          {
            "name": "seq_read_small",
            "value": 25.75390625,
            "unit": "MiB"
          },
          {
            "name": "seq_write_direct",
            "value": 678.98828125,
            "unit": "MiB"
          },
          {
            "name": "seq_write",
            "value": 429.8828125,
            "unit": "MiB"
          }
        ]
      }
    ]
  }
}